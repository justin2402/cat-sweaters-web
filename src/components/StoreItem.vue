<template>
  <div>
    <div style="margin: 15px; ">
      <v-img contain aspect-ratio="1" src="https://image.chewy.com/is/image/catalog/354028_MAIN._AC_SS348_V1658774093_.jpg" class="store-item-image" alt=""></v-img>
    </div>
    <v-row style="margin: 0 10px 0 10px">
      <v-col>
        <p style="text-align: left; font-weight: bold">Cat Sweater</p>
      </v-col>
      <v-col>
        <p style="text-align: right; font-weight: bold">$9.99</p>
      </v-col>
      <v-col cols="12">
        <p maxlength="1">Stupid little description goes here. Stupid little description goes here </p>
      </v-col>
      <v-col cols="12">
        <v-btn width="100%">Add to Cart&nbsp;<v-icon>mdi-cart</v-icon></v-btn>
      </v-col>
    </v-row>



  </div>
</template>

<script>
export default {
  name: "StoreItem"
}
</script>

<style scoped>
.store-item-image{
  width: 100%;
  border-radius: 10px;
  box-shadow: #070A1C 10px 7px;
}

@media (min-width: 1200px) {
  .store-item-image{
    border-radius: 10px
  }
}

</style>