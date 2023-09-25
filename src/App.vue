<script setup lang="ts">
import Header from './components/header.vue'
import Footer from './components/footer.vue'

import { settingStore } from '@/stores'
import { onMounted } from 'vue'

const store = settingStore()

onMounted(()=>{
  document.documentElement.setAttribute("theme",store.theme);
})


</script>

<template>
  <div class="page">
    <Header class="header" />
    <router-view class="router-views" v-slot="{ Component, route }">
      <transition :name="(route.meta.transition as string)">
        <component :is="Component" />
      </transition>
    </router-view>

    <Footer class="footer" />
  </div>
</template>

<style lang="less">
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
.page{
  /* 百分比出现滚动条时会抖动 */
  /* padding:2.2% 2.2% 0; */
  // padding:20px 30px 0;
  box-sizing: border-box;
  /* background: var(--bg-color); */
  position: relative;
  overflow-y: auto;
  height: 100vh;
  .header{
    position:sticky;
    top: 0;
    left: 0;
    right: 0
  }
  .footer{
    // position: absolute;
    // bottom: 10px;
    // left: 50%;
    // transform: translateX(-50%);
  }
}

</style>
