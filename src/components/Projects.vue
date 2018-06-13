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
    <div v-if="!done" class="row">
      <div class="col s6 offset-s3">
  
        <input v-model="name" type="text">
        <input v-model="password" type="password">
  
        <button role="button" v-on:click="submit()" class="btn btn-danger">Submit</button>
      </div>
    </div>
    <div v-if="done">
      <p v-for="i in values" :key="i"> {{i}} You are logged in</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      name: "joe",
      password: "",
      done: false,
      values: [12, 23, 142, 12, 423, 1234, 34453, 535, 12132, 42]
    };
  },
  methods: {
    submit() {
      if (this.name == "joe" && this.password == "terry") {
        this.done = true;
      }
    },
    calculateName() {
      return "Joesph";
    }
  }
};
</script>

<style scoped>
p {
  color: white;
}

input {
  color: white;
}
</style>
