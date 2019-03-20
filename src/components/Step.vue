<template>
  <div 
    class="step" 
    :class="[
      this.position.position === pos ? 'pink' : '', 
      this.clicked === true ? 'clicked' : '',
      this.position.position === pos && this.clicked === true ? 'played' : '']" 
    @click="click">
      <!-- <audio :ref="this._uid" :src="effectSrc" type="audio/wav" /> -->
  </div>
</template>

<script>
/* eslint-disable */
import { mapState } from 'vuex';
export default {
  name:'Step',
  data: function() {
    return {
      clicked: false
    }
  },
  // mounted() {
  //   this.id = this._uid;
  //   this.audio = this.$refs[this.id];
  //   this.audio.setAttribute('crossOrigin', 'anonymous');  
  // },
  updated() {
    if (this.position.position === this.$props.pos && this.clicked == true) {
      // const playPromise = this.audio.play();
      // if(playPromise !== undefined) {
      //   playPromise.then(() => {
      //     console.log(result);
      //   }).catch(error => {
      //     this.audio.play();
      //   });
      // }
      this.play(this.effectSrc);
    }
  },
  props: {
    pos: Number,
    effect: String
  },
  methods: {
    click() {
      this.clicked = !this.clicked;
    },
    play(src) {
      const audio = new Audio(src);
      audio.play();
    }
  },
  computed: mapState({
    position: state => state.position,
    effectSrc: function() {
      switch (this.effect) {
        case 'hihat':
          return './audio/HiHats04.wav';
        case 'cowbell':
          return './audio/Cowbell1.wav';
        case 'clap':
          return './audio/Clap11.wav';
        case 'snare':
          return './audio/Snare26.wav';
        case 'kick':
          return './audio/Kicks02.wav';
        default:
         return '';
      }
    }
  })
}
</script>


<style scoped>
  .step {
    margin: 5px auto;
    height: 15px;
    width: 15px;
    background-color: black;
  }
  .pink {
    background-color: green;
  }
  .clicked {
    background-color: aqua;
  }
  .played {
    background-color: hotpink !important;
  }
  audio {
    display: none;
  }
</style>
