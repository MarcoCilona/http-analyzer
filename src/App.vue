<template lang="pug">
.container
  .row.align-center.mv-4
    .grey_medium.pa-2.br-4.width-80.d-flex.search-bar
      Select
      Input.mh-4
      Button
  .row.align-center
    .column
      .text-align-center.fs-50.fw-800 200
      div Everything is fine!
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

// Components
import Button from './components/ui/Button.vue';
import Input from './components/ui/Input.vue';
import Select from './components/ui/Select.vue';

@Component({
  components: {
    Button,
    Input,
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

@media only screen and (min-width: 425px) {
  .container {
    .row:nth-child(1) {
      order: 2;
    }
    .row:nth-child(2) {
      order: 1;
    }
  }
}
</style>
