// Optional: refresh the no-JavaScript snapshot after editing content.
// GitHub Pages itself needs no build; the browser loads the JSON files directly.
import fs from 'node:fs/promises';import {renderSite} from './assets/render.mjs';
const read=async n=>JSON.parse(await fs.readFile(new URL(`content/${n}.json`,import.meta.url),'utf8'));
const [c,cards,papers,members]=await Promise.all(['site','research','papers','members'].map(read));
const path=new URL('index.html',import.meta.url);let html=await fs.readFile(path,'utf8');
const content=renderSite(c,cards,papers,members);
if(html.includes('<!-- STATIC_CONTENT -->'))html=html.replace('<!-- STATIC_CONTENT -->',content);
else html=html.replace(/(<div id="site">)[\s\S]*?(<\/div><noscript>)/,(_m,start,end)=>start+content+end);
await fs.writeFile(path,html);console.log('Static snapshot updated.');
