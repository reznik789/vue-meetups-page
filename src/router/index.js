import Vue from "vue";
import VueRouter from "vue-router";
import Home from "@/components/Home.vue";
import Meetups from "@/components/Meetup/Meetups";
import CreateMeetup from "@/components/Meetup/CreateMeetup";
import Profile from "@/components/User/Profile";
import Signin from "@/components/User/Signin";
import Signup from "@/components/User/Signup";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/meetups",
    name: "Meetups",
    component: Meetups
  },
  {
    path: "/create-meetup",
    name: "CreateMetup",
    component: CreateMeetup
  },
  {
    path: "/profile",
    name: "Profile",
    component: Profile
  },
  {
    path: "/signin",
    name: "Signin",
    component: Signin
  },
  {
    path: "/signup",
    name: "Signup",
    component: Signup
  }
];

const router = new VueRouter({
  routes,
  mode: "history"
});

export default router;
