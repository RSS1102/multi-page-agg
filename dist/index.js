import "./__farm_runtime.95dcfbf6.mjs";import "./index_20f4.ef1b2a13.js";import "./index_28b7.0a6d88f5.js";import "./index_6899.bb8a5401.js";import "./index_7ec5.86f6c15a.js";import "./index_83e4.cbc365cf.js";import "./index_a702.31f70bfd.js";import "./index_af7a.bd008c89.js";import "./index_bb0a.7a00233b.js";import "./index_c3d8.37c7bca9.js";import "./index_d684.806fa8ca.js";import "./index_d841.35b65927.js";import "./index_fda8.636e7349.js";import * as __farm_external_module_fs from "fs";import * as __farm_external_module_gh_pages from "gh-pages";(globalThis || window || global)['650c7debb79582d1916d16c65fb3085a'].__farm_module_system__.setExternalModules({"fs": __farm_external_module_fs && __farm_external_module_fs.default && !__farm_external_module_fs.__esModule ? {...__farm_external_module_fs,__esModule:true} : {...__farm_external_module_fs},"gh-pages": __farm_external_module_gh_pages && __farm_external_module_gh_pages.default && !__farm_external_module_gh_pages.__esModule ? {...__farm_external_module_gh_pages,__esModule:true} : {...__farm_external_module_gh_pages}});(function(_){for(var r in _){_[r].__farm_resource_pot__='index_172f.js';(globalThis || window || global)['650c7debb79582d1916d16c65fb3085a'].__farm_module_system__.register(r,_[r])}})({"953dfae2":function a(a,e,t,r){a._m(e),a.o(e,"run",()=>s);var c=a.w(t("29bf5eaf")),i=a.i(t("fs"));t("gh-pages");var n=t("cfbad0c2");async function s(){try{let e="/home/runner/work";process.chdir("..");let t=process.cwd();a.f(i).mkdir(`${e}/dist`,async()=>{await n.cloneRepo(),await n.pnpmInstall(),await n.buildProducts(),await n.generateViteTemplate({rootDir:e,currentDir:t}),await n.uploadArtifact(e);});}catch(a){a instanceof Error&&c.setFailed(a.message);}}s();},"cfbad0c2":function e(e,t,i,a){e._m(t),e.o(t,"cloneRepo",()=>c),e.o(t,"pnpmInstall",()=>p),e.o(t,"buildProducts",()=>d),e.o(t,"generateViteTemplate",()=>f),e.o(t,"uploadArtifact",()=>u);var n=e.w(i("29bf5eaf")),l=i("6fca8cd7"),s=e.w(i("5ba0ffaf")),r=e.i(i("fs")),o=i("3ddfb96a"),c=async()=>{n.startGroup("clone repo");try{let e=await l.exec("git",["init"]);await l.exec("git",["remote","add","origin","https://github.com/Tencent/tdesign-starter-cli"]),await l.exec("git",["fetch","--depth=1","origin","develop"]),await l.exec("git",["checkout","develop"]),0!==e&&n.setFailed("clone repo failed"),n.info("clone repo success");}catch(e){e instanceof Error&&n.setFailed(e.message);}n.endGroup();},p=async()=>{n.startGroup("install pnpm");try{let e=await l.exec("npm install pnpm -g");0!==e&&n.setFailed("pnpm install failed"),n.info("install pnpm success");}catch(e){e instanceof Error&&n.setFailed(e.message);}n.endGroup();},d=async()=>{n.startGroup("build dist");try{let e=await l.exec("pnpm install"),t=await l.exec("pnpm run build");(0!==t||0!==e)&&n.setFailed("build failed"),n.info("build success");}catch(e){e instanceof Error&&n.setFailed(e.message);}n.endGroup();},f=async({rootDir:t,currentDir:i})=>{n.startGroup("generate vite template");try{await l.exec("pnpm run dev init template-vite-vue3 --description 这是一个vite构建的vue3项目 --type vue3 --template lite --buildToolType vite");let a=await s.create("template-vite-*/vite.config.*");(await a.glob()).map(async a=>{let s=a.match(/template-vite-(.*)\//);if(null===s){n.setFailed("templateName is null");return;}n.info(`templateName: ${s[0]}`);let o=e.f(r).readFileSync(a,"utf-8").replace("defineConfig({",`defineConfig({
 base: '/tdesign-starter-cli/${s[0]}',`);n.info(`newViteConfig: ${o}`),e.f(r).writeFileSync(a,o),n.info(`当前目录: ${i}`);let c=`${i}/${s[0]}`;process.chdir(c),await l.exec("pnpm install"),await l.exec("pnpm run build"),process.on("pnpm run build",async function(i){console.log("build 完成"),await e.f(r).promises.mkdir(`${t}/dist/${s[0]}`,{recursive:!0}),await e.f(r).promises.cp(`${c}dist/`,`${t}/dist/${s[0]}`,{recursive:!0});}),console.log("文件迁移 完成");});}catch(e){e instanceof Error&&n.setFailed(e.message);}n.endGroup();},u=async e=>{n.startGroup("upload artifact");try{let t=new o.DefaultArtifactClient;n.info(`artifactFilePath: ${e}`);let i=await s.create(`${e}/dist/**`,{followSymbolicLinks:!1});n.info(`createFilePath: ${i}`);let a=await i.glob();n.info(`filesGlob: ${a}`);let{id:l,size:r}=await t.uploadArtifact("github-pages",a,e);if(!l||!r)throw Error("Artifact size is undefined");return n.info(`upload artifact success, id: ${l}, size: ${r}`),{id:l,size:r};}catch(e){throw e instanceof Error&&n.setFailed(e.message),e;}};},});(globalThis || window || global)['650c7debb79582d1916d16c65fb3085a'].__farm_module_system__.setInitialLoadedResources(['index_20f4.ef1b2a13.js','index_28b7.0a6d88f5.js','index_6899.bb8a5401.js','index_7ec5.86f6c15a.js','index_83e4.cbc365cf.js','index_a702.31f70bfd.js','index_af7a.bd008c89.js','index_bb0a.7a00233b.js','index_c3d8.37c7bca9.js','index_d684.806fa8ca.js','index_d841.35b65927.js','index_fda8.636e7349.js']);(globalThis || window || global)['650c7debb79582d1916d16c65fb3085a'].__farm_module_system__.setDynamicModuleResourcesMap({  });var farmModuleSystem = (globalThis || window || global)['650c7debb79582d1916d16c65fb3085a'].__farm_module_system__;farmModuleSystem.bootstrap();var entry = farmModuleSystem.require("953dfae2");var run=entry.run;export { run };
//# sourceMappingURL=index.js.map