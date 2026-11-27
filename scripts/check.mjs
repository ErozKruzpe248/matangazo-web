import fs from 'node:fs';
import path from 'node:path';
import assert from 'node:assert/strict';
import { commercialTerms, communityManagerScope } from './commercial.mjs';
const root=path.resolve('dist');
const homepage = fs.readFileSync(path.join(root, 'index.html'), 'utf8');
const generatedBasePath = homepage.match(/<meta name="site-base-path" content="([^"]*)">/)?.[1] || '';
const basePath = (process.env.BASE_PATH ?? generatedBasePath).replace(/\/+$/, '');
const walk=dir=>fs.readdirSync(dir,{withFileTypes:true}).flatMap(entry=>entry.isDirectory()?walk(path.join(dir,entry.name)):[path.join(dir,entry.name)]);
const pages=walk(root).filter(file=>file.endsWith('.html'));
assert.equal(pages.length,7,'Deben existir la portada y seis páginas de servicios.');
let references=0;
const expectedAmounts = {
  'index.html': [],
  'servicios/diseno-web/index.html': [3500, 250, 4500, 450],
  'servicios/redes-sociales/index.html': [26000, 13000],
  'servicios/identidad-de-marca/index.html': [6000],
  'servicios/posicionamiento-seo/index.html': [],
  'servicios/google-ads/index.html': [],
  'servicios/automatizacion/index.html': []
};
assert.equal(Object.keys(commercialTerms).length, 6, 'Conservar las seis categorías principales.');
assert.deepEqual(commercialTerms['diseno-web'][0].rates, [{label:'Implementación',amount:3500},{label:'Mensualidad',amount:250}]);
assert.deepEqual(commercialTerms['diseno-web'][1].rates, [{label:'Implementación',amount:4500},{label:'Mensualidad',amount:450}]);
const communityManager = commercialTerms['redes-sociales'][0];
assert.equal(communityManager.duration, 'Tres meses');
assert.equal(communityManager.installmentAmount, 13000);
assert.equal(communityManager.rates[0].amount, 2 * communityManager.installmentAmount);
assert.equal(communityManager.advertisingExcluded, true);
assert.deepEqual(communityManagerScope, [
  '12 Post Imagen', '8 videos reel',
  'Adaptación de cada publicación al formato Historia',
  'Calendario Semanal (Autorizado)',
  'Paleta de Colores y formatos establecidos',
  'Diseño y configuración de campaña (no incluye inversión)'
]);
for(const file of pages){
 const html=fs.readFileSync(file,'utf8');
 const relativeFile = path.relative(root, file).replaceAll('\\', '/');
 const amounts = Array.from(html.matchAll(/\$([\d,]+)(?:\.\d+)?\s*MXN/g), match => Number(match[1].replaceAll(',', '')));
 assert.deepEqual(amounts, expectedAmounts[relativeFile], `Precios aprobados y orden correcto en ${relativeFile}`);
 assert.equal((html.match(/\$[\d,]+/g) || []).length, amounts.length, `Todos los precios deben indicar MXN en ${relativeFile}`);
 assert.ok(!/tarjeta digital|\bdescuentos?\b|\bpromoci[oó]n(?:es)?\b|\bal a[nñ]o\b|pago [uú]nico/i.test(html), `Evitar ofertas y condiciones comerciales contradictorias en ${relativeFile}`);
 if (relativeFile === 'servicios/redes-sociales/index.html') {
   communityManagerScope.forEach(item => assert.ok(html.includes(`<li>${item}</li>`), `Conservar alcance de Community Manager: ${item}`));
   assert.ok(html.includes('No incluye inversión publicitaria.'));
   assert.doesNotMatch(html, /mensual|por mes/i, 'Conservar las cantidades originales sin atribuirles periodicidad.');
 }
 assert.equal((html.match(/<h1[ >]/g)||[]).length,1,`Un título principal en ${file}`);
 assert.match(html,/<title>[^<]+<\/title>/);
 assert.match(html,/<html lang="es-MX">/);
 assert.ok(!/wp-content|wp-json|#buscador|type="search"/i.test(html),`Sin dependencias de WordPress ni directorio en ${file}`);
 for(const match of html.matchAll(/(?:href|src)="([^"]+)"/g)){
  const ref=match[1];
  if(!ref.startsWith('/')&&!ref.startsWith('#'))continue;
  const relative=basePath+'/'+path.relative(root,file).replaceAll('\\','/');
  const url=new URL(ref,'https://local.test'+relative);
  assert.ok(url.pathname.startsWith(basePath+'/'),`Ruta fuera de la publicación: ${ref} en ${file}`);
  let dest=path.join(root,decodeURIComponent(url.pathname.slice(basePath.length)));
  if(fs.existsSync(dest)&&fs.statSync(dest).isDirectory())dest=path.join(dest,'index.html');
  assert.ok(fs.existsSync(dest),`Destino faltante: ${ref} en ${file}`);
  if(url.hash){assert.match(fs.readFileSync(dest,'utf8'),new RegExp(`id="${url.hash.slice(1)}"`),`Ancla faltante: ${ref}`);}
  references++;
 }
}
console.log(`Correcto: ${pages.length} páginas y ${references} referencias internas. Sin recursos faltantes.`);
