<template>
  <div style="height:100%">
    <div class="row" style="height:20%">
      <div class="col m4 offset-m4 s6 offset-s3 card">
        <div v-if="show" transition="fade" class="card-content">
          <h4 class="center">
            Designs
          </h4>
        </div>
      </div>
    </div>
    <div class="row" style="height:75%">
      <div :key="i" class="cardBg hoverable col s4 offset-s1 row">
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
    };
  },
  methods: {
    goto(value) {
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
