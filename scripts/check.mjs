import fs from 'node:fs';
import path from 'node:path';
import assert from 'node:assert/strict';
const root=path.resolve('dist');
const walk=dir=>fs.readdirSync(dir,{withFileTypes:true}).flatMap(entry=>entry.isDirectory()?walk(path.join(dir,entry.name)):[path.join(dir,entry.name)]);
const pages=walk(root).filter(file=>file.endsWith('.html'));
assert.equal(pages.length,7,'Deben existir la portada y seis páginas de servicios.');
let references=0;
for(const file of pages){
 const html=fs.readFileSync(file,'utf8');
 assert.equal((html.match(/<h1[ >]/g)||[]).length,1,`Un título principal en ${file}`);
 assert.match(html,/<title>[^<]+<\/title>/);
 assert.match(html,/<html lang="es-MX">/);
 assert.ok(!/wp-content|wp-json|#buscador|type="search"/i.test(html),`Sin dependencias de WordPress ni directorio en ${file}`);
 for(const match of html.matchAll(/(?:href|src)="([^"]+)"/g)){
  const ref=match[1];
  if(!ref.startsWith('/')&&!ref.startsWith('#'))continue;
  const relative='/'+path.relative(root,file).replaceAll('\\','/');
  const url=new URL(ref,'https://local.test'+relative);
  let dest=path.join(root,decodeURIComponent(url.pathname));
  if(fs.existsSync(dest)&&fs.statSync(dest).isDirectory())dest=path.join(dest,'index.html');
  assert.ok(fs.existsSync(dest),`Destino faltante: ${ref} en ${file}`);
  if(url.hash){assert.match(fs.readFileSync(dest,'utf8'),new RegExp(`id="${url.hash.slice(1)}"`),`Ancla faltante: ${ref}`);}
  references++;
 }
}
console.log(`Correcto: ${pages.length} páginas y ${references} referencias internas. Sin recursos faltantes.`);
