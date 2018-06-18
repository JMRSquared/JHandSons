<template>
  <div class="row" style="height:100%">
     <div class="col m3 card push-m1" style="height:70%" id="achi">
      <h4>
        	Our Architectural Design division aims to showcase <br> the company’s philosophy by creating visually stimulating masterpieces <br> which fuses modern and contemporary designs with traditional designs. 
      </h4>
     </div>
     <div class="col m2 push-m1 card" id="achi1" style="height:10%">
       <h5> ARCHITECTURAL DESIGN </h5>
       </div>

       <div class="col m3 push-m5 card" style="height:70%" id="sd">
          <h4>The structural division aims to design quality structures <br> for our clients to ensure the longevity of the structures,<br> as well as uphold safety standards. </h4>
         </div> 

         <div class="col m2 card" id="sd1" style="height:10%"> <h5> STRUCTURAL DESIGNS </h5> </div>

         <div class="col m3 card push-m4" id="id" style="height:70%">
           <h4>Our Interior Design division aims to offer a value adding<br> service to the Architectural division by designing building <br>interiors that will flow sensually with the exterior of the buildings, <br> in order to provide a complete experience for our clients</h4>
           </div>

           <div class="col m2 card" id="id1" style="height:10%"> <h5>INTERIOR DESIGN </h5> </div>

  </div>
</template>

<script>
export default {
  name: "Designs",
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

#achi1{
  position:absolute;
  top:0;
  left:2%;
  z-index:1;
  background-color:#608dd1;
}

#achi{
 position:absolute;
 top:7%;
}

#sd1{
  position:relative;
  top:0;
  left:12%;
  z-index:1;
  
background-color:#608dd1;
}
#sd{
  position:relative;
  top:7%;
}
#id1{
  position:relative;
  top:0;
  left:5%;
  z-index:1;
  background-color:#608dd1;
}

#id{
  position:relative;
  top:7%;
}
.card{
  background-color: #a6bcdd;
  
}
</style>
