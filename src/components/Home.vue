<template>
  <div style="height:100%">
    <div class="row" style="height:20%">
      <div class="col m4 offset-m4 s6 offset-s3 card">
        <div v-if="show" transition="fade" class="card-content">
          <img src="static/img/JHSons.png" class="responsive-img" alt="">
          <h6 class="center">
            Company reg. NO : <a>2007/063420/23</a>
          </h6>
        </div>
      </div>
    </div>
    <div class="row" style="height:75%">
      <div v-on:click="goto(card)" v-for="(card,i) in cards" :key="i" class="cardBg hoverable col s4 offset-s1 row">
        <div class="card-title col s6 offset-s3">
          <h3 class="white-text h3-responsive">{{ card }}</h3>  
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      show: true,
      cards: ["Designs", "Construction", "Projects", "About Us"],
      msg: "Welcome to Your Vue.js App"
    };
  },
  methods: {
    goto(value) {
      this.$router.push(value);
      this.show = !this.show;
    }
  }
};
</script>

<style scoped>
.cardBg {
  cursor: pointer;
  margin-bottom: 10%;
  background-image: url("/static/img/Construction-Wallpaper-1.jpg");
  background-repeat: no-repeat;
  background-size: cover;
}
</style>
