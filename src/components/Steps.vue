<template>
  <div>
    <div class="main-grid">
      <div class="main-row">
        <Step v-for="n in 16" :key="n" :pos="n" effect="hihat" :clear="clear"/>
      </div>
      <div class="main-row">
        <Step v-for="n in 16" :key="n" :pos="n" effect="cowbell" :clear="clear"/>
      </div>
      <div class="main-row">
        <Step v-for="n in 16" :key="n" :pos="n" effect="clap" :clear="clear"/>
      </div>
      <div class="main-row">
        <Step v-for="n in 16" :key="n" :pos="n" effect="snare" :clear="clear"/>
      </div>
      <div class="main-row">
        <Step v-for="n in 16" :key="n" :pos="n" effect="kick" :clear="clear"/>
      </div>
    </div>
    <div class="main-controls">
      <button @click="play">Play</button>
      <button @click="clearAllSteps">Clear</button>
      <button @click="reset">Stop</button>
      <div class="audio-toggle">
        <img :src="mute" @click="toggleAudio" />
      </div>
    </div>
  </div>
</template>

<script>
import Step from './Step';
import { mapActions, mapState } from 'vuex';
import { setInterval, clearInterval } from 'timers';
export default {
  name: 'Steps',
  components: {
    Step
  },
  methods: {
    ...mapActions(['run', 'stop', 'clearSteps', 'toggleMute']),
    play() {
      clearInterval(this.playbackLoop);
      this.playbackLoop = setInterval(() => this.run(), 120);
    },
    reset() {
      clearInterval(this.playbackLoop);
      this.stop();
    },
    clearAllSteps() {
      this.clearSteps();
    },
    toggleAudio() {
      this.toggleMute()
    }
  },
  computed: mapState({
    position: state => state.position,
    clear: state => state.clear.clear,
    mute: function(state) {
      if (state.mute.mute === true) {
        return '/images/volume-mute-solid.svg'
      }
      return '/images/volume-up-solid.svg'
    }
  })
}
</script>

<style scoped>
  .main-grid {
    width: 350px;
    margin: 20px auto;
  }

  .main-row {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    width: 100%;
    justify-content: space-around;
  }

  .main-col {
    display: flex;
    flex-direction: column;
    flex-basis: 100%;
    flex: 1;
  }

  .main-controls{
    width: 350px;
    margin: 20px auto;
    text-align: center;
  }

  .main-controls button {
    display: inline-block;
    margin: 0 20px;
  }
  /* .audio-toggle {
    width: 350px;
    text-align: center;
  } */
  .audio-toggle img {
    height: 20px;
    width: 20px;
    color: gray;
    margin: 10px auto;
  }
</style>


