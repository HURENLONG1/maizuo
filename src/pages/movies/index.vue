<template>
  <div>
    <swiper ref="mySwiper" :options="swiperOptions">
      <swiper-slide class="slide-item">
        <img src="../../../public/banners/1.jpg" alt />
      </swiper-slide>
      <swiper-slide class="slide-item">
        <img src="../../../public/banners/2.jpg" alt />
      </swiper-slide>
      <swiper-slide class="slide-item">
        <img src="../../../public/banners/3.jpg" alt />
      </swiper-slide>
      <!-- <div class="swiper-pagination" slot="pagination"></div> -->
    </swiper>
    <ul class="tabs">
      <li
        class="tabs-item"
        :class="{active: currentItem=='hoting'}"
        @click="tabHandler('hoting')"
      >正在热映</li>
      <li
        class="tabs-item"
        :class="{active: currentItem=='coming'}"
        @click="tabHandler('coming')"
      >即将上映</li>
    </ul>

    <ul class="list" v-if="moviestatus">
      <li class="list-item" v-for="ele in movies ">
        <img :src="ele.poster" alt />
        <div class>
          <h3>
            <b>{{ele.name}}</b>
          </h3>
          <p>主演:{{ele.actors | filterActors}}</p>
          <p>上映时间{{ ele.premiereAt}}</p>
        </div>
        <span class="prebug">预购</span>
      </li>
    </ul>

    <loading v-else />
    <Nav />
  </div>
</template>

<script>
import loading from "../../components/loading/loading";
import { Swiper, SwiperSlide, directive } from "vue-awesome-swiper";
import "swiper/css/swiper.css";
import Nav from "../../components/Nav/index";
import { getHotingMovie, getComingMovie } from "../../api/movie";
// import Loading from "../../components/loading/loading.vue";
export default {
  data() {
    return {
      getHotingMoviearr: [],
      getComingMoviearr: [],
      movies: [],
      currentItem: "hoting",
      moviestatus: false,
      swiperOptions: {
        pagination: {
          el: ".swiper-pagination",
        },
        // Some Swiper option/callback...
      },
    };
  },

  computed: {
    swiper() {
      return this.$refs.mySwiper.$swiper;
    },
  },
  mounted() {
    // console.log('Current Swiper instance object', this.swiper)
    this.swiper.slideTo(0, 1000, false);
  },

  components: {
    Nav,
    Swiper,
    SwiperSlide,
    loading,
  },
  directives: {
    swiper: directive,
  },
  created() {
    (this.moviestatus = false),
      getHotingMovie().then((response) => {
        this.movies = response.data.data.films;
        (this.moviestatus = true), console.log(this.getHotingMoviearr);
      });
  },
  methods: {
    tabHandler(type) {
      // console.log(1);
      if (type == "hoting") {
        (this.moviestatus = false), 
        (this.currentItem = "hoting");
        getHotingMovie().then((response) => {
          this.movies = response.data.data.films;
          (this.moviestatus = true), console.log(this.getHotingMoviearr);
        });
      } else if (type == "coming") {
        this.currentItem = "coming";
        getComingMovie().then((response) => {
          (this.moviestatus = false), (this.movies = response.data.data.films);
          (this.moviestatus = true), console.log(this.getComingMoviearr);
        });
      }
    },
  },
  filters: {
    filterActors: function (input) {
      // console.log(input);
      let rs = [];
      input.forEach((item) => {
        rs.push(item.name);
      });
      return rs.join("|").substr(0, 5) + "...";
    },
  },
};
</script>

<style lang='less'>
* {
  margin: 0;
  padding: 0;
}
.slide-item {
  /* height: 100px; */
  /* background-color: aqua; */
  img {
    width: 100%;
  }
}
.tabs {
  display: flex;
  li {
    flex: 1;
    text-align: center;
    margin-top: 5px;
    padding-bottom: 5px;
  }
  .active {
    border-bottom: aqua 2px solid;
  }
}
.list {
  .list-item {
    // padding:2px;
    padding-bottom: 10px;
    img {
      width: 66px;
      height: 93px;
    }
    .prebug {
      border: 1px solid red;
      display: inline-block;
      width: 50px;
      height: 30px;
      line-height: 30px;
      text-align: center;
    }
    display: flex;
    width: 100%;
    justify-content: space-around;
    align-items: center;
  }
}
</style>