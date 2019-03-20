<template>
  <div>
    <div class="main-grid">
      <div class="main-row">
        <Step v-for="n in 16" :key="n" :pos="n" effect="hihat"/>
      </div>
      <div class="main-row">
        <Step v-for="n in 16" :key="n" :pos="n" effect="cowbell"/>
      </div>
      <div class="main-row">
        <Step v-for="n in 16" :key="n" :pos="n" effect="clap"/>
      </div>
      <div class="main-row">
        <Step v-for="n in 16" :key="n" :pos="n" effect="snare"/>
      </div>
      <div class="main-row">
        <Step v-for="n in 16" :key="n" :pos="n" effect="kick"/>
      </div>
    </div>
    <div class="main-controls">
      <button @click="play">Play</button>
      <button @click="reset">Stop</button>
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
    ...mapActions(['run', 'stop']),
    play() {
      clearInterval(this.playbackLoop);
      this.playbackLoop = setInterval(() => this.run(), 160);
    },
    reset() {
      clearInterval(this.playbackLoop);
      this.stop();
    }
  },
  computed: mapState({
    position: state => state.position
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
</style>


