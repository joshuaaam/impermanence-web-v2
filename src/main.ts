/*
 * @Author: g05047
 * @Date: 2023-08-31 09:24:06
 * @LastEditors: g05047
 * @LastEditTime: 2023-09-25 09:44:11
 * @Description: file content
 */
import { createApp } from 'vue'
import './style.css'
import pinia from './stores'
import App from './App.vue'
import router from './router'

import VMdEditor from '@kangc/v-md-editor/lib/codemirror-editor';
import '@kangc/v-md-editor/lib/style/codemirror-editor.css';
import githubTheme from '@kangc/v-md-editor/lib/theme/github.js';
import '@kangc/v-md-editor/lib/theme/style/github.css';

// highlightjs
import hljs from 'highlight.js';

// codemirror 编辑器的相关资源
import Codemirror from 'codemirror';
// mode
import 'codemirror/mode/markdown/markdown';
import 'codemirror/mode/javascript/javascript';
import 'codemirror/mode/css/css';
import 'codemirror/mode/htmlmixed/htmlmixed';
import 'codemirror/mode/vue/vue';
// edit
import 'codemirror/addon/edit/closebrackets';
import 'codemirror/addon/edit/closetag';
import 'codemirror/addon/edit/matchbrackets';
// placeholder
import 'codemirror/addon/display/placeholder';
// active-line
import 'codemirror/addon/selection/active-line';
// scrollbar
import 'codemirror/addon/scroll/simplescrollbars';
import 'codemirror/addon/scroll/simplescrollbars.css';
// style
import 'codemirror/lib/codemirror.css';

VMdEditor.Codemirror = Codemirror;
VMdEditor.use(githubTheme, {
  Hljs: hljs,
});
import mditor from 'mavon-editor'
import 'mavon-editor/dist/css/index.css'

 // 全局注册

const app = createApp(App)
app.use(router)
app.use(pinia)
app.use(mditor)

app.use(VMdEditor);

app.mount('#app')