<template>
  <div class="search-container">
    <input
      class="search-input"
      type="text"
      placeholder="find the topics you care about"
      @keydown.enter="seracArticle()"
    />
    <ul class="tags-content">
      <li v-for="(item, index) in tags" :key="index">
        {{ item }}
      </li>
    </ul>

    <ul class="article-content">
      <li class="article-item" v-for="(item, index) in 3" :key="index">
        <div class="article-cover"></div>
        <div class="article-describe">
          <p class="title">构建爬虫镜像{{ item }}</p>
          <!-- <p class="title">Adipisicing Laris Cupidatat do</p> -->
          <span class="time">Lee Russell November 3, 2012</span>
          <div class="content">
            Irure veniam ex do aliqua esse irure voluptate ipsum labore nisi
            ullamco consequat ex adipisicing mollit aliqua elit ipsum sit labore
            elit Lorem laborum qui pariatur cillum irure cillum qui excepteur ex
            commodo labore sunt labore dolor culpa aliquip veniam
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
const tags = [
  "#technology",
  "#lifeandlove",
  "#essentialism",
  "#webdevelopment",
  "#fashion",
  "#entertainment",
  "#technology",
  "#lifeandlove",
  "#essentialism",
  "#technology",
  "#lifeandlove",
  "#essentialism",
];

/**
 * @description: tags搜索
 * @return {*}
 */
const seracArticle = () => {
  console.log("---------");
};
</script>

<style lang="less" scoped>
.search-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: "Times New Roman", Times, serif;

  .search-input {
    height: 60px;
    width: 700px;
    padding: 0 20px;
    border-radius: 50px;
    border: 1px solid black;
    box-sizing: border-box;
    margin: 180px 0 55px;
    &[type="text"]:focus {
      outline: none;
    }
  }
  & > .tags-content {
    width: 85%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    & > li {
      font-size: 16px;
      border-radius: 50px;
      padding: 5px 15px;
      border: 1px solid black;
      margin: 5px 10px;
      cursor: pointer;
    }
  }
  & > .article-content {
    width: 60%;
    display: flex;
    flex-direction: column;
    & > .article-item {
      display: flex;
      margin: 30px 0;
      height: 177px;

      .article-cover {
        width: 237px;
        height: 100%;
        margin-right: 37px;
        background-color: #ddd;
      }
      & > .article-describe {
        display: flex;
        flex-direction: column;
        flex: 1;
        .title {
          font-size: 33px !important;
        }
        .time {
          color: rgba(28, 28, 28, 0.5);
        }
        .content {
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 4;
          overflow: hidden;
        }
      }
    }
  }
}
</style>
