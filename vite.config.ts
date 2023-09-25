import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path';
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'

import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      resolvers: [ElementPlusResolver()],
    }),
  ],
  resolve:{
    alias:{
      '@':path.resolve(__dirname,'src')
    }
  },
  server:{
    // 代理配置
    proxy:{
      '/api':{
        // target:'http://172.16.158.152:8202',
        target:'http://top.impermanence.cn/',
        changeOrigin:true,
        rewrite:path=>path.replace(/^\/api/,'')
      }
    }
  }
  
})
