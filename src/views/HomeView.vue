<template>
<div class="main-container">
<div class="image-container">
  <img class="side-image"  src="../assets/cat-scarf.png">
  <img class="image-thing"  src="../assets/cat-sweater-home.png">
  <img class="side-image"  src="../assets/sphinx-sweater.png">
</div>
  
  <div class="thing-container">
    <p>My shit goes here</p>

  </div>
</div>
</template>

<script>




  export default {
    name: 'HomeView',
    components: {

    },
  }
</script>

<style scoped>
.main-container{
  background-color: #090E27;
  color: white;
  font-family: 'La Belle Aurore', cursive;
}
.image-container{
  align-items: center;
  justify-content: center;
  align-content: center;
  display: flex;
  flex-direction: row;
}
.thing-container{
  background-color: #0d1638;
  border-width: 1px;
  border-color: black;
  border-style: solid;
  color: white;
  padding: 20px;
  margin: 15px;
  border-radius: 20px;
  box-shadow: #070A1C 10px 15px;
}
.image-thing{
  border-radius: 10px;
  margin-top: 15px;
  box-shadow: #070A1C 12px 10px;
  width: 90%;
}

.side-image{
  border-radius: 10px;
  margin-top: 15px;
  box-shadow: #070A1C 12px 10px;
  display: none;
  width: 5%;
}

@media (min-width: 1080px) {
  .image-thing{
    border-radius: 10px;
    margin-top: 15px;
    box-shadow: #070A1C 12px 10px;
    width: 35%;
  }
  .thing-container{

    margin: 60px;

  }

  .side-image{
    border-radius: 10px;
    box-shadow: #070A1C 12px 10px;
    width: 25%;
    margin:0 20px;
    display: block;
  }
}

</style>
