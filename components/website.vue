<template>
  <v-layout row wrap>
    <v-flex xs12 sm2 :class="{ shadow: this.$vuetify.breakpoint.name !== 'xs'}">
      <v-parallax :height="moduleMaxHeight" :src="image" :class="{ para: this.$vuetify.breakpoint.name !== 'xs'}" :style="{ height: `${moduleMaxHeight}px`, backgroundColor: 'rgba(0, 0, 0, 0.15)' }" />
    </v-flex>

    <v-flex text-xs-left xs12 sm10 :class="{ body: this.$vuetify.breakpoint.name !== 'xs'}" style="padding-left: 10px; background-color: rgba(0, 0, 0, 0.15)">
      <div>
        <h3 class="headline">
          rosie.codes
        </h3>
        <div>An interactive portfolio built using Vue.js, Vuetify.js, and Nuxt.js ontop of an Express server</div>
        <br>
        <v-flex>
          <h4 class="subheading">
            <span class="linkx">
              <a href="https://github.com/RosieCode95/rosie.codes" rel="noopener" target="_blank">
                <v-avatar><img style="border-radius: unset" :src="require('~/static/icon_github.png')" alt="Github"></v-avatar>
              </a>
              <a href="https://rosie.codes/" rel="noopener" target="_blank">
                <v-avatar><img style="border-radius: unset" :src="require('~/static/icon_web.png')" alt="WebSite"></v-avatar>
              </a>
            </span>
          </h4>
        </v-flex>
      </div>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  data() {
    return {
      moduleMaxHeight: '150',
      image: require('~/static/module_home.png')
    }
  }
}
</script>

<style scoped>
  .para {
    border-top-left-radius: 15px;
    border-bottom-left-radius: 15px;
  }

  .body {
    border-top-right-radius: 15px;
    border-bottom-right-radius: 15px;
  }

  .shadow {
    box-shadow: 5px 0 5px -2px #9d08de;
    z-index: 1
  }
</style>
