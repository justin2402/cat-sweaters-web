<template>
  <div class="main-container">
    <div>
      <v-row style="margin: 0; height: 100%">
        <v-col :key="s" v-for="s in 12" cols  sm="12" lg="3">
          <store-item></store-item>
        </v-col>
      </v-row>

      <v-btn @click="dialog = true" elevation="12" color="#090E27" dark style="margin: 15px" right bottom fixed fab>
        <v-badge content="2"><v-icon>mdi-cart</v-icon></v-badge>

      </v-btn>


      <v-dialog dark v-model="dialog">
        <div class="cart-container">
          <h2 class="cart-title">Your Cart</h2>
          <v-row style="margin: 0">
            <v-col lg="6" sm="12"></v-col>
            <v-col cols lg="6" sm="12">
              <v-card>
                item
              </v-card>
            </v-col>

            <v-col style="color: white; text-align: left; font-size: 14px" cols lg="12">
              <p>Subtotal: $12.99</p>
              <p>Shipping: $2.99</p>
              <p>Tax: $0.73</p>
              <p>Total: $16.71</p>
            </v-col>
            <v-col cols="12" style="justify-content: center; text-align: right">
              <v-btn color="white" class="checkout-btn">Checkout &nbsp; <v-icon>mdi-truck</v-icon></v-btn>
            </v-col>
          </v-row>
        </div>

      </v-dialog>

    </div>
  </div></template>

<script>
import StoreItem from "@/components/StoreItem.vue";

export default {
  name: "ShopView",
  components: {StoreItem},
  data(){
    return{
      dialog:true
    }
  }
}
</script>

<style scoped>
.main-container{
  background-color: #090E27;
  height: 100%;
  overflow: auto;
  color: white;
  font-family: 'La Belle Aurore', cursive;
}

.cart-title{
  padding: 20px;
  color: white;
}

.cart-container{
  background-color: #0d1638;
  text-align: center;
}

.checkout-btn{
  width: 100%;
  color: black;


}

@media (min-width: 1000px) {
  .cart-title{

  }
  .cart-container{
    background-color: #0d1638;
    text-align: inherit;
  }

  .checkout-btn{
    width: 10%;
    color: black;

  }


}
</style>