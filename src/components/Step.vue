<template>
  <div class="step" :class="[this.position.position === pos ? 'pink' : '']"></div>
</template>

<script>
import { mapState } from 'vuex';
export default {
  name:'Step',
  props: {
    pos: Number
  },
  computed: mapState({
    position: state => state.position
  })
}
</script>


<style scoped>
  .step {
    height: 15px;
    width: 15px;
    background-color: black;
  }
  .pink {
    background-color: hotpink;
  }
</style>
