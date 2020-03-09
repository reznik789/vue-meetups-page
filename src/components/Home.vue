<template>
  <v-container>
    <v-row>
      <v-col xs="12" sm="6" class="text-center text-sm-right">
        <v-btn color="primary" large roter to="/meetups">Explore Meetups</v-btn>
      </v-col>
      <v-col xs="12" sm="6" class="text-center text-sm-left">
        <v-btn color="primary" large roter to="/create-meetup">Organize Meetups</v-btn>
      </v-col>
    </v-row>
    <v-row>
      <v-col xs="12">
        <v-carousel>
          <v-carousel-item
            v-for="item in meetups"
            :key="item.id"
            :src="item.imageUrl"
            @click="goToMeetup(item.id)"
            reverse-transition="fade-transition"
            transition="fade-transition"
            style="cursor: pointer;"
          >
            <div class="title-wrapper">
              <div class="title">{{item.title}}</div>
            </div>
          </v-carousel-item>
        </v-carousel>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Home",
  data() {
    return {
      meetups: [
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
      ]
    };
  },
  methods: {
    goToMeetup: function(id) {
      this.$router.push(`/meetups/${id}`);
    }
  }
};
</script>

<style scoped>
.title-wrapper {
  position: absolute;
  bottom: 65px;
  width: 100%;
  text-align: center;
}
.title {
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  font-size: 2em;
  padding: 20px;
  display: inline;
  border-radius: 50px;
}
</style>
