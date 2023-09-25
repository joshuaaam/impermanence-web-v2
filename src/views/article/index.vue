<template>
  <div class="article">
    <MdPreview :editorId="id" :modelValue="markdown" />
  <!-- <MdCatalog :editorId="id" :scrollElement="scrollElement" /> -->
    <!-- <mavon-editor  class="js-toc-content" v-model="markdown" :toolbars="{}" style=""/> -->
    <!-- <v-md-editor class="js-toc-content" mode="preview" v-model="markdown"></v-md-editor> -->
    <ul class="js-toc"></ul>
  </div>
</template>

<script setup lang="ts">
import { MdPreview, MdCatalog } from 'md-editor-v3';
import 'md-editor-v3/lib/preview.css';

const id = 'preview-only';
const text = ref('# Hello Editor');
const scrollElement = document.documentElement;

import MarkdownIt from "markdown-it";
import { onMounted, nextTick , ref, reactive } from "vue";
import { getArticleDetail } from "@/api";
import tocbot from "tocbot";
let markdown = ref("# 123");
let html = ref("");
onMounted(async() => {
  
  await getDetail()
  init()
});

const getDetail = async()=>{
  const data:any = await getArticleDetail({data:{id:27}});
  markdown.value = data.content
}

const init = async()=>{
  let md: any = new MarkdownIt();
  let m = md.render(markdown.value);

  // 正则表达式，匹配h1、h2、h3、h4标签
  const regex = /<h[2-4]>.*?<\/h[2-4]>/gi;
  // 用正则表达式查找所有匹配的标签
  const matches = m.match(regex);
  // 计数器，用于生成唯一ID
  let count = 0;
  if (matches && matches.length > 0) {
    const result = matches.reduce((acc:any, match:any) => {
      count++;
      const id = `header-${count}`;
      const tagWithId = match.replace(/(<h[1-4])/i, `$1 id="${id}"`);

      return acc.replace(match, tagWithId);
    }, m);
    // 遍历每个匹配的标签，并为它们添加唯一的ID
    markdown.value = result;
  }
  console.log(markdown)

  // html.value = markdown.value;
  
  await nextTick() 
   setTimeout(()=>{
    tocbot.init({
      // Where to render the table of contents.
      tocSelector: ".js-toc",
      // Where to grab the headings to build the table of contents.
      contentSelector: ".md-editor-preview-wrapper",
      // Which headings to grab inside of the contentSelector element.
      headingSelector: "h1,h2",
      // For headings inside relative or absolute positioned containers within content.
      hasInnerContainers: true,
    });
    console.log('tocbottocbot')
   },3000)
}
</script>

<style lang="less" scoped>
.article{
  display: flex;
}
</style>
