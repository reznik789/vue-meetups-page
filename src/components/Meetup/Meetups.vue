<template>
  <v-container>
    <v-row>
      <v-col cols="12" sm="10" md="8" offset-sm="1" offset-md="2">
        <v-card class="info">
          <v-container fluid>
            <v-row>
              <v-col cols="5" sm="4" md="3">
                <v-img
                  height="130"
                  src="https://www.publicdomainpictures.net/pictures/210000/nahled/new-york-night-skyline-1485446344nIH.jpg"
                ></v-img>
              </v-col>
              <v-col cols="7" sm="8" md="9">
                <v-card-title class="title">
                  <div>
                    <div class="title white--text">My meetup</div>
                    <div class="subtitle-1">17th July 2020</div>
                  </div>
                </v-card-title>
                <v-card-actions>
                  <v-btn text to="/meetups/1">
                    <v-icon left>mdi-arrow-right</v-icon>View meetup
                  </v-btn>
                </v-card-actions>
              </v-col>
            </v-row>
          </v-container>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {};
</script>

<style>
</style>