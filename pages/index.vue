<template>
  <v-layout>
    <v-flex>
      <transition name="slide-right">
        <div v-show="show">
          <h3 class="headline">About Me</h3>
          <div style="padding-top: 15px">
            My name is Rose Jackson, also known as RosieCode.<br>
            I am a full stack web developer, I specialize in Node.js, but I also have considerable knowledge in JavaScript, HTML and CSS.<br>
            I am proficient in most of the Vue.js ecosystem. I am self-taught and have been working in web development and with JavaScript for the better part of 4 years.<br>
          </div>
          <h3 class="headline" style="padding-top: 15px">Contact</h3>
          <div style="padding-top: 15px">
            <a style="color: #7289da" href="https://discordapp.com/" rel="noopener" target="_blank">Discord</a> is the best way to contact me, you can add me there <code>Yomi#4567</code><br>
            Email: <code>rosiecode@outlook.com</code>
          </div><br><br>
          <h4>Below you can find some of my most notable projects I have worked on in the past.</h4>
        </div>
      </transition>

      <v-spacer style="padding: 25px" />
      <transition name="slide-left">
        <website v-show="show" :class="`elevation-${h.a ? 12 : 0} pointer`" @click.native="view('noinfo')" @mouseover.native="h.a = true" @mouseleave.native="h.a = false" />
      </transition>

      <v-spacer style="padding: 10px" />
      <transition name="slide-right">
        <ytm v-show="show" :class="`elevation-${h.b ? 12 : 0} pointer`" @click.native="view('noinfo')" @mouseover.native="h.b = true" @mouseleave.native="h.b = false" />
      </transition>

      <v-spacer style="padding: 10px" />
      <transition name="slide-left">
        <node-chakra v-show="show" :class="`elevation-${h.c ? 12 : 0} pointer`" @click.native="view('noinfo')" @mouseover.native="h.c = true" @mouseleave.native="h.c = false" />
      </transition>

      <v-spacer style="padding: 10px" />
      <transition name="slide-right">
        <rcd-stream-tools v-show="show" :class="`elevation-${h.d ? 12 : 0} pointer`" @click.native="view('noinfo')" @mouseover.native="h.d = true" @mouseleave.native="h.d = false" />
      </transition>
    </v-flex>
  </v-layout>
</template>

<script>
import website from './../components/website'
import ytm from './../components/ytm'
import nodeChakra from './../components/nodeChakra'
import rcdStreamTools from './../components/rcdStreamTools'

export default {
  components: { website, ytm, nodeChakra, rcdStreamTools },
  data() {
    return {
      selected: null,
      show: true,
      h: { a: false, b: false, c: false, d: false, e: false, f: false }
    }
  },
  methods: {
    view(view) {
      this.show = false
      setTimeout(() => { this.$router.push(`/p/${view}`) }, 500)
    }
  }
}
</script>

<style>
.slide-left-leave-active {  transition: all .5s }
.slide-left-leave-to { transform: translateX(calc(-100vh * 2)) }

.slide-right-leave-active {  transition: all .5s }
.slide-right-leave-to { transform: translateX(calc(100vh * 2)) }

.fade-enter-active {  transition: all .2s }
.fade-leave-active {  transition: all .2s }
.fade-enter, .fade-leave-to { opacity: 0 }

.elevation-12 {
  box-shadow: 0px 7px 8px -4px rgba(157,8,222,0.2), 0px 12px 17px 2px rgba(157,8,222,0.14), 0px 5px 22px 4px rgba(157,8,222,0.12) !important
}

.pointer {
  cursor: pointer
}

</style>
