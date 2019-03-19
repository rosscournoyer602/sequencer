<template>
  <div class="main-grid">
    <div class="main-row row-1">
      <Step v-for="n in 16" class="step" :key="n" />
    </div>
  </div>
</template>

<script>
import Step from './Step';
export default {
  name: 'Steps',
  components: {
    Step
  }
}
</script>


<style scoped>
  .main-grid {
    width: 800px;
    height: 800px;
    margin-left: auto;
    margin-right: auto;
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
</style>


