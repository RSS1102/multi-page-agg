import "./__farm_runtime.8e83bd1e.mjs";import "./index_115a.17196a15.js";import "./index_623f.c52e8e0f.js";import "./index_c29d.5b614914.js";import "./index_fda8.9f67d9a4.js";import * as __farm_external_module_fs from "fs";(globalThis || window || global)['650c7debb79582d1916d16c65fb3085a'].__farm_module_system__.setExternalModules({"fs": {...__farm_external_module_fs,__esModule:true}});(function(_){for(var r in _){_[r].__farm_resource_pot__='index_172f.js';(globalThis || window || global)['650c7debb79582d1916d16c65fb3085a'].__farm_module_system__.register(r,_[r])}})({"953dfae2":function  (e,t,r,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"run",{enumerable:!0,get:function(){return o;}});let c=r("@swc/helpers/_/_interop_require_default"),i=r("@swc/helpers/_/_interop_require_wildcard")._(r("29bf5eaf")),s=c._(r("fs")),l=r("cfbad0c2");async function o(){try{let e="/home/runner/work";process.chdir("..");let t=process.cwd();s.default.mkdirSync(`${e}/dist`),await (0,l.cloneRepo)(),await (0,l.pnpmInstall)(),await (0,l.buildProducts)(),await (0,l.generateViteTemplate)({rootDir:e,currentDir:t});}catch(e){e instanceof Error&&i.setFailed(e.message);}}o();},"cfbad0c2":function  (e,t,i,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var i in t)Object.defineProperty(e,i,{enumerable:!0,get:t[i]});}(t,{buildProducts:function(){return f;},cloneRepo:function(){return u;},generateViteTemplate:function(){return m;},pnpmInstall:function(){return d;}});let r=i("@swc/helpers/_/_interop_require_default"),l=i("@swc/helpers/_/_interop_require_wildcard"),c=l._(i("29bf5eaf")),s=i("6fca8cd7"),o=l._(i("5ba0ffaf")),p=r._(i("fs")),u=async()=>{c.startGroup("clone repo");try{let e=await (0,s.exec)("git",["init"]);await (0,s.exec)("git",["remote","add","origin","https://github.com/Tencent/tdesign-starter-cli"]),await (0,s.exec)("git",["fetch","--depth=1","origin","develop"]),await (0,s.exec)("git",["checkout","develop"]),0!==e&&c.setFailed("clone repo failed"),c.info("clone repo success");}catch(e){e instanceof Error&&c.setFailed(e.message);}c.endGroup();},d=async()=>{c.startGroup("install pnpm");try{let e=await (0,s.exec)("npm install pnpm -g");0!==e&&c.setFailed("pnpm install failed"),c.info("install pnpm success");}catch(e){e instanceof Error&&c.setFailed(e.message);}c.endGroup();},f=async()=>{c.startGroup("build dist");try{let e=await (0,s.exec)("pnpm install"),t=await (0,s.exec)("pnpm run build");(0!==t||0!==e)&&c.setFailed("build failed"),c.info("build success");}catch(e){e instanceof Error&&c.setFailed(e.message);}c.endGroup();},m=async({rootDir:e,currentDir:t})=>{c.startGroup("generate vite template");try{await (0,s.exec)("pnpm run dev init template-vite-vue2 --description 这是一个vite构建的vue2项目 --type vue2 --template lite --buildToolType vite"),c.info("vite模版生成成功");let i=await o.create("template-vite-*/vite.config.*"),n=await i.glob();c.info(`files ${n}`),n.map(async i=>{let n=i.match(/template-vite-(.*)\//);if(c.info(`templateName: ${JSON.stringify(n)}`),null===n){c.setFailed("templateName is null");return;}let r=p.default.readFileSync(i,"utf-8").replace("defineConfig({",`defineConfig({
 base: ${n[0]},`);p.default.writeFileSync(i,r);let l=`${t}/${n[0]}`;process.chdir(l),(0,s.exec)("pnpm install && pnpm run build"),p.default.renameSync(`${l}/dist`,`${e}/dist/${n[0]}`),process.chdir(t);});}catch(e){e instanceof Error&&c.setFailed(e.message);}c.endGroup();};},});(globalThis || window || global)['650c7debb79582d1916d16c65fb3085a'].__farm_module_system__.setInitialLoadedResources(['index_115a.17196a15.js','index_623f.c52e8e0f.js','index_c29d.5b614914.js','index_fda8.9f67d9a4.js']);(globalThis || window || global)['650c7debb79582d1916d16c65fb3085a'].__farm_module_system__.setDynamicModuleResourcesMap({  });var farmModuleSystem = (globalThis || window || global)['650c7debb79582d1916d16c65fb3085a'].__farm_module_system__;farmModuleSystem.bootstrap();var entry = farmModuleSystem.require("953dfae2");var run=entry.run;export { run };
//# sourceMappingURL=index.js.map