<template>
  <div class="step"></div>
</template>

<script>
export default {
  name:'Step',
  props: {
    pos: Number
  }
}
</script>


<style scoped>
  .step {
    height: 20px;
    width: 20px;
    background-color: black;
  }
</style>
