<template>
  <ul class="tabs">
      <li class="tabs-item">
        <router-link to="/movies"><i class="fa fa-file-movie-o fa-lg"></i> 电影</router-link>
      </li>
      <li class="tabs-item">
        <router-link to="/homes"><i class="fa fa-home fa-lg"></i> 影院</router-link>
      </li>
      <li class="tabs-item">
        <router-link to="/consult"><i class="fa fa-newspaper-o fa-lg"></i> 咨询</router-link>
      </li>
      <li class="tabs-item">
        <router-link to="/my"><i class="fa fa-user fa-lg"></i> 我的</router-link>
      </li>
    </ul>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
    .tabs-active{
    color: #ff5f16;
  }
  .tabs{
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 50px;
    display: flex;
    justify-content: space-around;
    align-items:center;
    
    .tabs-item{
      background-color: white;
      a{
        color: #cccccc;
        i{
          padding-bottom: 8px;
        }
        display: flex;
        flex-direction: column;
        align-items: center;
      }
    }
  }
</style>