import { setFailed as coreSetFailed } from '@actions/core'
import { exec } from '@actions/exec'
import { create as globCreate } from '@actions/glob'
import fs from 'fs';
import ghPages from 'gh-pages';

/**
 * The main function for the action.
 * @returns {Promise<void>} Resolves when the action is complete.
 */
export async function run(): Promise<void> {
  try {
    const currentDir = process.cwd();
    fs.mkdirSync(`${currentDir}/dist`);

    await exec('npm install pnpm i -g');
    await exec('pnpm install');
    await exec('pnpm run build');
    console.log("生成dist");
    // 生成vite 模版
    await exec('pnpm run dev init template-vite-vue2 --description 这是一个vite构建的vue2项目 --type vue2 --template lite --buildToolType vite');
    await exec('pnpm run dev init template-vite-vue3 --description 这是一个vite构建的vue3项目 --type vue3 --template lite --buildToolType vite');
    await exec('pnpm run dev init template-vite-react --description 这是一个vite构建的react项目 --type react --template lite --buildToolType vite');
    console.log("已生产模板");
 
    const viteFilePath = await globCreate('template-vite-*/vite.config.*')
    console.log('vite',viteFilePath)
    const files = await viteFilePath.glob()
    console.log('files', files)
    
    files.map(async (file) => {
      console.log('file', file)
      // 匹配`template-vite-*一直到`/`之间的内容
      const templateName = file.match(/template-vite-(.*)\//)
      console.log('templateName', templateName)
      const readViteConfig = fs.readFileSync(file, 'utf-8');
      if (!templateName) {
        return coreSetFailed('模版名称匹配失败');;
      }
      const newViteConfig = readViteConfig.replace('defineConfig({', `defineConfig({\n base: ${templateName[0]},`)
      fs.writeFileSync(file, newViteConfig);
      exec(`cd ${templateName[0]} && pnpm install && pnpm run build`);
      // 重命名文件夹使用nodejs
      fs.renameSync(`${file}/dist`, `${currentDir}/dist/${templateName[0]}`);
    })

    // 将文件夹部署到github page
    await new Promise<void>((resolve, reject) => {
      ghPages.publish(currentDir + '/dist', {
        branch: 'gh-pages', // 更改为你的目标分支
        message: '自动部署更新',
        silent: false,
      }, (err: { message: string | Error }) => {
        if (err) {
          console.error('部署失败', err);
          coreSetFailed(err.message);
          return reject(err);
        }
        console.log('部署成功');
        resolve();
      });
    });

  } catch (error) {
    // Fail the workflow run if an error occurs
    if (error instanceof Error) coreSetFailed(error.message)
  }
}

run();
