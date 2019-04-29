<template>
  <v-app :dark="darkMode">
    <v-layout row wrap style="padding-bottom: 100px">
      <v-flex xs12>
        <v-parallax height="150" :src="images.main">
          <v-layout align-center column justify-center>
            <h1 class="display-2 font-weight-thin mb-3">
              RosieCode
            </h1>
            <!-- <h4 class="subheading linkx_header text-xs-center">
              RosieCode95
            </h4> -->
          </v-layout>
        </v-parallax>

        <v-spacer style="padding: 10px" />
        <h4 class="subheading linkx_header text-xs-center">
          <span class="linkx">
            <v-avatar style="border-radius:"><img style="border-radius: unset" :src="images.icons.github" alt="Github"></v-avatar>
            <a href="https://github.com/rosiecode95" rel="noopener" target="_blank">RosieCode95</a>
          </span>
          <span class="linkx">
            <v-avatar><img style="border-radius: unset" :src="images.icons.twitch" alt="Twitch"></v-avatar>
            <a href="https://www.twitch.tv/rcds" rel="noopener" target="_blank">RCDs</a>
            <v-icon v-if="live" color="red" class="animated">fiber_manual_record</v-icon>
          </span>
          <span class="linkx">
            <v-avatar><img style="border-radius: unset" :src="images.icons.discord" alt="Discord"></v-avatar>
            <span>Yomi#4567</span>
          </span>
        </h4>
        <v-spacer style="padding: 10px" />

        <v-flex sm8 offset-sm2 xs12>
          <nuxt />
        </v-flex>
      </v-flex>
    </v-layout>

    <v-footer fixed app>
      <span style="padding-left: 15px">&copy; RosieCode95 - {{ year }}</span>
      <v-spacer />
      <div style="padding-right: 15px">
        <v-switch v-model="darkMode" :label="`${darkMode ? 'Dark': 'Light'} Mode`" />
      </div>
    </v-footer>
  </v-app>

  <!-- <component v-if="show" id="group" v-bind:is="page"></component> -->
</template>

<script>
export default {
  data() {
    return {
      darkMode: null,
      year: new Date().getFullYear(),
      live: false,
      twitchID: '154508651',
      images: {
        main: require('~/static/main_parrallax.png'),
        icons: {
          github: require('~/static/icon_github.png'),
          twitch: require('~/static/icon_twitch.png'),
          discord: require('~/static/icon_discord.png')
        }
      }
    }
  },
  watch: {
    darkMode: function (newValue) {
      localStorage.dark = newValue
    }
  },
  created() {
    this.darkMode = (localStorage.dark === 'true')
    this.getStreamStatus()
  },
  methods: {
    async getStreamStatus() {
      const res = (await this.$axios.get(`https://api.twitch.tv/kraken/streams/${this.twitchID}?stream_type=live`, {
        headers: { 'Client-ID': '5rkacx7slht2g84clo0byufs0561c9', 'Accept': 'application/vnd.twitchtv.v5+json' }
      })).data
      this.live = !!res.stream
    }
  }
}
</script>

<style>

html {
  overflow-x: hidden;
  scrollbar-width: 10px;
  scrollbar-color: #9d08de #555;
}

::-webkit-scrollbar {  width: 15px; }
::-webkit-scrollbar-track {  background: #555;}
::-webkit-scrollbar-thumb {  background: #9d08de;}
::-webkit-scrollbar-thumb:hover {  background: purple;}

.linkx {
  padding-left: 10px;
  padding-right: 10px
}

.linkx_header {
  padding-top: 10px;
  padding-bottom: 10px;
}

a:link {
  color: white
}

.animated {
  -webkit-animation: pulsate 1s ease-out;
  animation: pulsate 1s ease-out;
  -webkit-animation-iteration-count: infinite;
  animation-iteration-count: infinite
}

@keyframes pulsate {
    0% {-webkit-transform: scale(0.1, 0.1); opacity: 0.0;}
    50% {opacity: 1.0;}
    100% {-webkit-transform: scale(1.2, 1.2); opacity: 0.0;}
}

code {
  background-color: unset;
  color: pink;
}
</style>
