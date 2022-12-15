<template>
  <v-app style="background-color: #090E27">
    <v-app-bar dark color="#090e27">
      <v-btn color="white" icon @click="mini = !mini">
        <v-icon>mdi-menu</v-icon>
      </v-btn>
      <v-avatar>
        <v-img src="../src/assets/cat-in-sweater.png" contain></v-img>
      </v-avatar>
      <h1>Catty Sweaters</h1>
    </v-app-bar>
    <v-main>

      <router-view/>
    </v-main>

    <v-navigation-drawer
        dark
        app
        color="#070A1C"
        absolute
        v-model="mini"
        temporary
    >



      <v-list
          nav
          dense
      >
        <v-list-item to="/" link>
          <v-list-item-icon>
            <v-icon>mdi-home</v-icon>
          </v-list-item-icon>
          <v-list-item-title>Home</v-list-item-title>
        </v-list-item>
        <v-list-item to="/shop" link>
          <v-list-item-icon>
            <v-icon>mdi-store</v-icon>
          </v-list-item-icon>
          <v-list-item-title>Store</v-list-item-title>
        </v-list-item>
        <v-list-item to="/account" link>
          <v-list-item-icon>
            <v-icon>mdi-account</v-icon>
          </v-list-item-icon>
          <v-list-item-title>Account</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  data() {
    return {
      mini: false
    }
  },
  methods: {
    changeMini() {
      console.log('mouse entered')
    }
  }
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Pacifico&display=swap');

* {
  font-family: 'Pacifico', cursive;

}

v-main {
  background-color: #090E27;
  overflow: hidden;
  height: 100vh;

}


v-app {
  background-color: #090e27;
}

v-list {
  background-color: white;
}

.app-title {
  font-family: 'La Belle Aurore', cursive;
  color: white;
  background-color: #070A1C;
  padding: 15px;
  text-align: center;
}

.title-avatar {
}
</style>