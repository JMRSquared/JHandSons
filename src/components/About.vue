<template>
         <div class="row" style="height:50%"> 
           
            <div class="col m10 card offset-m1 " id="about " >
               <h5 class="card-content">
                 <br><br>
                 JH AND SONS TRADERS is a small-medium enterprise which was established in 2007.<br> 
                 The company offers and supplies quality SABS approved buildings, <br>water and sanitation materials, <br> 
                 as well as the implementation of infrastructure projects and the management thereof.<br>
                 It aims to fuse innovative and creative methods with traditional methods <br> 
                 in order to deliver services and products tailored specifically for a clients needs, <br> 
                 while providing a world class experience to each and everyone of its valued clients...
                 <button v-on:click="MoreAbout">(More ABout Us)</button> <br> 
                 <br>
                 CIDB Grading : G6 CE PE, Grade 1SQ PE.<br>
                 CIDB Number : 255747 <br> 
                 NHBRC Registration Number : 1-222107631 
               </h5>

             
            </div>
            <div class="col m4 z-depth-3" style="height:10% border-layout:2px" id="about1" >
             <h3>ABOUT US</h3>
           </div>
            <div >
              </div>
              <div class="row" style="height:50%"> 
                
               <div class="col m4 push-m1 card" style="height:100%" id="mission">
                 <br>
                     <h5 class="card-content">To conduct its business diligently and professionally <br> to ensure the provision of quality products and services, in order to go above and beyond the call of duty for our clients. </h5>
               </div>
           <div class="col m4 z-depth-3" id="mission1" style="height:10%">
            <h3>MISSION</h3> 
             </div>
               <div class="col m4 push-m3 card" style="height:100%" id="vision">
                 <br><br><br>
                   <h5>To be one of the market leaders within the property <br>and construction industries across the African continent and Globally .</h5>
               </div>
               <div class="col m4 z-depth-3" id="vision1" style="height:10%"><h3>VISION</h3></div>
               </div>
         </div>
        
           
            
</template>
<script>
export default {
  name: "About",
 
};
</script>

<style scoped>
p {
  color: white;
}

input {
  color: white;
}

.card{
  background-color: #a6bcdd;
  
}

#about1{
  background-color: #608dd1;
  z-index: 10;
  top: 0;
  left:0;
  position: absolute;
}
#about{
  position: absolute;
}
#mission1{
  position: absolute;
  z-index: 11;
  top:52%;
  left:0;
  background-color: #608dd1;

}

#mission{
  position:relatives;
}

#vision1{
  position:absolute;
  z-index:11;
  top:52%;
  left:50%;
  background-color:#608dd1;
}
 #vision{
   position:relative;
 }

</style>
