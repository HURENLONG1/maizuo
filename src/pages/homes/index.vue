<template>
  <div>
    <ul class="list">
      <li class="list-item" v-for="ele in homeList">
        <div class="left">
          <h3>{{ ele.name }}</h3>
          <p>{{ ele.address }}</p>
        </div>
        <div class="right">
          <!--lowPrice 后台存储价钱的单位是分 小数计算有精度问题 0.1 + 0.2 -->
          <p>{{ ele.lowPrice }}起</p>
          <p>距离未知</p>
        </div>
      </li>
    </ul>
    <Nav />
  </div>
</template>

<script>
import Nav from "../../components/Nav/index";
import { getHomes } from "../../api/home";
export default {
  data: function () {
    return {
      homeList: [],
    };
  },
  created() {
    this.getHomes();
  },
  methods: {
    getHomes() {
      console.log(1);
      getHomes().then((response) => {
        console.log(response.data.data);
        this.homeList = response.data.data.cinemas;
      });
    },
  },

  components: {
    Nav,
  },
};
</script>

<style scoped lang="less">
    .wrapper {
        /*height: 500px;*/
        /*margin: 0 10px;*/
        /*border: 3px solid gold;*/
        overflow: hidden;
    }
    .list {
        .list-item {
            height: 80px;
            border: 1px solid red;
            margin-bottom: 10px;
            display: flex;
            justify-content: space-around;
            align-items: center;
        }
    }
</style>