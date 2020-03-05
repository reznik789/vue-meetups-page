<template>
  <v-app>
    <v-content>
      <v-app-bar app color="primary" dark>
        <v-app-bar-nav-icon @click="sideNav = !sideNav"></v-app-bar-nav-icon>
        <div class="d-flex align-center">
          <v-toolbar-title>DevMetup</v-toolbar-title>
        </div>

        <v-spacer></v-spacer>
        <v-btn class="ma-2" tile flat color="primary">
          <v-icon left>mdi-view-module</v-icon>View metups
        </v-btn>
      </v-app-bar>
      <v-sheet class="overflow-hidden" style="position: relative;">
        <v-navigation-drawer v-model="sideNav" absolute temporary>
          <v-list dense>
            <v-list-item v-for="item in menuItems" :key="item.title" link>
              <v-list-item-icon>
                <v-icon>{{ item.icon }}</v-icon>
              </v-list-item-icon>

              <v-list-item-content>
                <v-list-item-title>{{ item.title }}</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </v-navigation-drawer>
        <router-view/>

      </v-sheet>
    </v-content>

  </v-app>
</template>

<script>
export default {
  name: "App",

  components: {},

  data() {
    return {
      sideNav: true,
      menuItems: [
        { title: "View metups", icon: "mdi-view-module" },
        { title: "Organize metup", icon: "mdi-home" },
        { title: "Account", icon: "mdi-account" },
        { title: "Sign in", icon: "mdi-login-variant" },
        { title: "Log out", icon: "mdi-logout-variant" }
      ]
    };
  }
};
</script>

