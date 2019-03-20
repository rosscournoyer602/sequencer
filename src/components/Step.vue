<template>
  <div 
    class="step" 
    :class="[
      this.position.position === pos ? 'green' : '', 
      this.clicked === true ? 'clicked' : '',
      this.position.position === pos && this.clicked === true ? 'played' : '']" 
    @click="click">
      <!-- <audio :ref="this._uid" :src="effectSrc" type="audio/wav" /> -->
  </div>
</template>

<script>
/* eslint-disable */
import { mapState, mapActions } from 'vuex';
export default {
  name:'Step',
  data: function() {
    return {
      clicked: false
    }
  },
  updated() {
    if (this.position.position === this.$props.pos && this.clicked == true) {
      this.play(this.effectSrc);
    }
  },
  props: {
    pos: Number,
    effect: String,
    clear: Boolean
  },
  methods: {
    ...mapActions(['unclear']),
    click() {
      this.unclear();
      this.clicked = !this.clicked;
    },
    play(src) {
      const audio = new Audio(src);
      audio.play();
    }
  },
  watch: {
    clear(newValue, oldValue) {
      if (oldValue === false && newValue === true)
      this.clicked = false;
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
  .green {
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
