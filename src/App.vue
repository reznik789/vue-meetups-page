<template>
  <v-app>
    <v-navigation-drawer v-model="sideNav" absolute temporary>
      <v-list dense>
        <v-list-item v-for="item in menuItems" :key="item.title" link>
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>
              <router-link :to="item.link" tag="span" style="cursor: pointer">{{ item.title }}</router-link>
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar app color="primary" dark>
      <v-app-bar-nav-icon @click="sideNav = !sideNav" class="hidden-sm-and-up"></v-app-bar-nav-icon>
      <v-toolbar-title>
        <router-link to="/" tag="span" style="cursor: pointer">Dev meetups</router-link>
      </v-toolbar-title>

      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-xs-only">
        <v-btn tile text v-for="item in menuItems" :key="item.title" :to="item.link">
          <v-icon left>{{item.icon}}</v-icon>
          {{item.title}}
        </v-btn>
      </v-toolbar-items>
    </v-app-bar>
    <v-content>
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
export default {
  name: "App",

  components: {},

  data() {
    return {
      sideNav: false,
      menuItems: [
        { link: "/meetups", title: "View metups", icon: "mdi-view-module" },
        { link: "/create-meetup", title: "Organize metup", icon: "mdi-home" },
        { link: "/profile", title: "Account", icon: "mdi-account" },
        { link: "/signin", title: "Sign in", icon: "mdi-login-variant" },
        { link: "/signup", title: "Log out", icon: "mdi-logout-variant" }
      ]
    };
  }
};
</script>

