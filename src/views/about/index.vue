<template>
  <div class="about">
      <div class="about-info">
        <div class="avatar"></div>
        <div>
          <div class="font-name">Joshua</div>
          <div class="introduce">Ipsum adipisicing culpa est nisi consequat ex amet magna culpa veniam tempor irure ea. Reprehenderit labore do tempor eiusmod in consectetur ex sunt id mollit commodo ipsum deserunt quis.</div>
          <div class="link">
            <div>2253692565@qq.com</div>
            <ul>
              <li></li>
            </ul>
          </div>
        </div>
      </div>

  </div>
</template>

<script setup lang="ts">

</script>

<style lang="less" scoped>
.about{
  margin-top: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  .about-info{
    display: flex;
    align-items: center;
    .avatar{
      width:150px;
      height: 150px;
      border-radius: 50%;
      background-color:pink;
      margin-right: 60px;
    }
    .font-name{
      // font-weight: bold;
      font-size: 30px;
    }
    .introduce{
      width: 300px;
      font-size: 12px;
    }
    .link{
      margin-top: 20px;
      font-size: 12px;
      color: #999;
    }
  }
}
</style>
