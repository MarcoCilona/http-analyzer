<template lang="pug">
.container
  .row.align-center
    .column
      .text-align-center.fs-25.fw-800 200
      div Everything is fine!
  .row.align-center.mt-4
    .grey_medium.pa-2.br-4
      Select
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

// Components
import Select from './components/ui/Select.vue';

@Component({
  components: {
    Select,
  },
})
export default class App extends Vue {}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
