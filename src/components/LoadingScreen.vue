<template>
 <div class="container-thing">
   <div style="flex-direction: column; overflow: hidden">
     <h1 style="text-align: center; color: white">Loading...</h1>
     <img class="loading-image rotating" src="https://cdn.shopify.com/s/files/1/0080/8372/products/tattly_marc-johns_sweater-cat_00_b80fd3dc-62e3-469a-8922-afb6c3d62559_730x@2x.png?v=1659363651">
      <v-progress-linear rounded height="15" color="#393DA1" background-color="#FFF" value="20"></v-progress-linear>
   </div>
 </div>
</template>

<script>
export default {
  name: "LoadingScreen"
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=La+Belle+Aurore&display=swap');
*{
  font-family: 'La Belle Aurore', cursive;
  margin: 0;
  padding: 0;
  overflow: hidden;
}

.loading-image{
  width: 150px;
  height: 150px;
  align-self: center;
  overflow: hidden;
}

.container-thing{
  justify-content: center;
  align-content: center;
  align-items: center;
  background-color: #090e27;
  display: flex;
  height: 100vh;
  width: 100vw;
  overflow: hidden;
}


/*Rotating Stuff Happens here*/

@keyframes rotating
{
  from
  {
    transform: rotate(0deg);
    -o-transform: rotate(0deg);
    -ms-transform: rotate(0deg);
    -moz-transform: rotate(0deg);
    -webkit-transform: rotate(0deg);
  }
  to
  {
    transform: rotate(360deg);
    -o-transform: rotate(360deg);
    -ms-transform: rotate(360deg);
    -moz-transform: rotate(360deg);
    -webkit-transform: rotate(360deg);
  }
}
@-webkit-keyframes rotating
{
  from
  {
    transform: rotate(0deg);
    -webkit-transform: rotate(0deg);
  }
  to
  {
    transform: rotate(360deg);
    -webkit-transform: rotate(360deg);
  }
}
.rotating
{
  -webkit-animation: rotating 2s linear infinite;
  -moz-animation: rotating 2s linear infinite;
  -ms-animation: rotating 2s linear infinite;
  -o-animation: rotating 2s linear infinite;
  animation: rotating 2s linear infinite;
}

</style>