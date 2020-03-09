import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default {
  state: {
    loadedMeetups: [
      {
        id: 1,
        imageUrl:
          "https://www.publicdomainpictures.net/pictures/210000/nahled/new-york-night-skyline-1485446344nIH.jpg",
        title: "Meetup in New Yourk"
      },
      {
        id: 2,
        imageUrl:
          "https://live.staticflickr.com/8233/8586789587_c5f7ac6079_b.jpg",
        title: "Meetup in Paris"
      },
      {
        id: 3,
        imageUrl:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/Beijing_skyline_at_night.JPG/1024px-Beijing_skyline_at_night.JPG",
        title: "Meetup in Pekin"
      }
    ],

    user: {
      id: 1,
      registerdMeetups: [1]
    }
  },
  getters: {
    loadedMeetups: state => state.loadedMeetups.sort({})
  },
  mutations: {},
  actions: {}
};
