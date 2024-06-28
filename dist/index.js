import "./__farm_runtime.7ae4e502.mjs";import "./index_6e07.be0329b0.js";import "./index_b12f.22c8faaa.js";import "./index_c7da.98dbb22f.js";import "./index_cbaa.c79e1db3.js";import "./index_cfb9.98e0b13a.js";import "./index_e840.08130a4e.js";import "./index_fda8.2783af0e.js";import * as __farm_external_module_fs from "fs";(globalThis || window || global)['650c7debb79582d1916d16c65fb3085a'].__farm_module_system__.setExternalModules({"fs": __farm_external_module_fs && __farm_external_module_fs.default && !__farm_external_module_fs.__esModule ? {...__farm_external_module_fs,__esModule:true} : __farm_external_module_fs});(function(_){for(var r in _){_[r].__farm_resource_pot__='index_172f.js';(globalThis || window || global)['650c7debb79582d1916d16c65fb3085a'].__farm_module_system__.register(r,_[r])}})({"953dfae2":function e(e,t,r,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"run",{enumerable:!0,get:function(){return l;}});let a=r("@swc/helpers/_/_interop_require_default"),n=r("@swc/helpers/_/_interop_require_wildcard")._(r("29bf5eaf")),s=a._(r("fs")),c=a._(r("ee53cd14")),o=r("cfbad0c2");async function l(){try{let e="/home/runner/work";process.chdir("..");let t=process.cwd();s.default.mkdirSync(`${e}/dist`),await (0,o.cloneRepo)(),await (0,o.pnpmInstall)(),await (0,o.buildProducts)(),await (0,o.generateViteTemplate)({rootDir:e,currentDir:t}),c.default.publish(`${e}/dist`,{branch:"gh-pages",repo:"https://github.com/RSS1102/tdesign-starter-cli.git",dotfiles:!0},e=>{e&&n.info(`上传失败: ${e}`),n.info("上传成功");});}catch(e){e instanceof Error&&n.setFailed(e.message);}}l();},"cfbad0c2":function e(e,t,i,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var i in t)Object.defineProperty(e,i,{enumerable:!0,get:t[i]});}(t,{buildProducts:function(){return f;},cloneRepo:function(){return u;},generateViteTemplate:function(){return m;},pnpmInstall:function(){return d;}});let n=i("@swc/helpers/_/_interop_require_default"),r=i("@swc/helpers/_/_interop_require_wildcard"),l=r._(i("29bf5eaf")),c=i("6fca8cd7"),s=r._(i("5ba0ffaf")),o=n._(i("fs")),p=i("f730662f"),u=async()=>{l.startGroup("clone repo");try{let e=await (0,c.exec)("git",["init"]);await (0,c.exec)("git",["remote","add","origin","https://github.com/Tencent/tdesign-starter-cli"]),await (0,c.exec)("git",["fetch","--depth=1","origin","develop"]),await (0,c.exec)("git",["checkout","develop"]),0!==e&&l.setFailed("clone repo failed"),l.info("clone repo success");}catch(e){e instanceof Error&&l.setFailed(e.message);}l.endGroup();},d=async()=>{l.startGroup("install pnpm");try{let e=await (0,c.exec)("npm install pnpm -g");0!==e&&l.setFailed("pnpm install failed"),l.info("install pnpm success");}catch(e){e instanceof Error&&l.setFailed(e.message);}l.endGroup();},f=async()=>{l.startGroup("build dist");try{let e=await (0,c.exec)("pnpm install"),t=await (0,c.exec)("pnpm run build");(0!==t||0!==e)&&l.setFailed("build failed"),l.info("build success");}catch(e){e instanceof Error&&l.setFailed(e.message);}l.endGroup();},m=async({rootDir:e,currentDir:t})=>{l.startGroup("generate vite template");try{await (0,c.exec)("pnpm run dev init template-vite-vue3 --description 这是一个vite构建的vue3项目 --type vue3 --template lite --buildToolType vite");let i=await s.create("template-vite-*/vite.config.*");(await i.glob()).map(async i=>{let a=i.match(/template-vite-(.*)\//);if(null===a){l.setFailed("templateName is null");return;}let n=o.default.readFileSync(i,"utf-8").replace("defineConfig({",`defineConfig({
 base: '${a[0].replace(/\/+/g,"/")}',`);l.info(`newViteConfig: ${n}`),o.default.writeFileSync(i,n),l.info(`当前目录: ${t}`);let r=`${t}/${a[0]}`;process.chdir(r),await (0,c.exec)("pnpm install"),await (0,c.exec)("pnpm run build"),o.default.mkdirSync(`${e}/dist/${a[0]}`,{recursive:!0}),(0,p.copyFolder)(`${r}dist`,`${e}/dist/${a[0]}`);});}catch(e){e instanceof Error&&l.setFailed(e.message);}l.endGroup();};},});(globalThis || window || global)['650c7debb79582d1916d16c65fb3085a'].__farm_module_system__.setInitialLoadedResources(['index_6e07.be0329b0.js','index_b12f.22c8faaa.js','index_c7da.98dbb22f.js','index_cbaa.c79e1db3.js','index_cfb9.98e0b13a.js','index_e840.08130a4e.js','index_fda8.2783af0e.js']);(globalThis || window || global)['650c7debb79582d1916d16c65fb3085a'].__farm_module_system__.setDynamicModuleResourcesMap({  });var farmModuleSystem = (globalThis || window || global)['650c7debb79582d1916d16c65fb3085a'].__farm_module_system__;farmModuleSystem.bootstrap();var entry = farmModuleSystem.require("953dfae2");var run=entry.run;export { run };
//# sourceMappingURL=index.js.map