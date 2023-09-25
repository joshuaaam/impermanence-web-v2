<template>
  <div class="header">
    <ul class="menu-container">
      <li
        class="menu-item"
        v-for="(item, index) in menuList"
        :key="index"
        @click="$router.push(item)"
      >
        {{ item }}
      </li>
    </ul>

    <div class="right-container">
      <div class="serach-container">
        <input
          class="search-input"
          type="text"
          placeholder="find the topics you care about"
          @keydown.enter="seracArticle()"
        />
      </div>
      <el-switch
        v-model="value1"
        :active-action-icon="Moon"
        :inactive-action-icon="Sunny"
        @change="changeTheme"
        style="
          --el-switch-border-color: var(--border-color);
          --el-switch-on-color: #181818;
          --el-switch-off-color: #e5eaf3;
        "
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { Ref, ref } from "vue";
import { Moon,Sunny } from "@element-plus/icons-vue";
import { settingStore } from '@/stores'

const store = settingStore()

const menuList = ["home", "article", "tags", "about"];
const seracArticle = () => {};
const value1: Ref<boolean> = ref(true);
const changeTheme = (val: boolean) => {
  document.documentElement.setAttribute("theme", val ? "black" : "light");
  store.setTheme(val ? "black" : "light")
  console.log(store.theme)
};
</script>

<style scoped lang="less">
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 30px;
  box-sizing: border-box;
  background-color: var(--bg-color);
  border-bottom: 1px solid var(--border-color);
  .menu-container {
    display: flex;
    .menu-item {
      padding: 0 20px;
      cursor: pointer;
    }
  }
  .right-container {
    display: flex;
    .serach-container {
      margin: 0 20px;
      // width: 26px;
      width: 150px;

      height: 28px;
      border: 1px solid rgba(0, 0, 0, 0);
      transition: width 0.8s ease-in-out;
      border-radius: 50px;
      position: relative;
      border: 1px solid var(--border-color);

      &:after {
        position: absolute;
        right: 0;
        top: 0;
        height: 16px;
        width: 16px;
        content: "";
        clear: both;
        background: url("@/assets/search.png");
        transform: translate(-50%, 50%);
      }
      // &:hover {
      //   width: 150px;
      //   border: 1px solid #333;
      // }
      .search-input {
        position: relative;
        width: 100%;
        height: 100%;
        border-radius: 50px;
        padding: 0 26px 0 10px;
        box-sizing: border-box;
        border: 1px solid rgba(0, 0, 0, 0);
        background-color: var(--bg-color);
        &[type="text"]:focus {
          outline: none;
        }
      }
    }
  }
}
</style>
