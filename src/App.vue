<template lang="pug">
.container.ph-4
  .row.align-center.mv-4
    .grey_medium.pa-2.br-4.width-80.d-flex.search-bar
      Select
      Input.mh-4
      Button
  .row.align-center
    .column
      .text-align-center.fs-45.fw-700 200
      div Everything is fine!
  .row.overflow-x-auto.mt-4
    ResultCard(title='Url info')
      template(#content)
        ResultCardRow(title='Domain', value='www.google.it')
        ResultCardRow(title='Scheme', value='HTTP')
        ResultCardRow(title='Path', value='home')
    ResultCard.ml-5(title='Url info')
      template(#content)
        ResultCardRow(title='Domain', value='www.google.it')
        ResultCardRow(title='Scheme', value='HTTP')
        ResultCardRow(title='Path', value='home')
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

// Components
import Button from './components/ui/Button.vue';
import Input from './components/ui/Input.vue';
import ResultCard from './components/ui/ResultCard.vue';
import ResultCardRow from './components/ui/ResultCardRow.vue';
import Select from './components/ui/Select.vue';

@Component({
  components: {
    Button,
    Input,
    ResultCard,
    ResultCardRow,
    Select,
  },
})
export default class App extends Vue {}
</script>

<style lang="scss">
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

body {
  font-family: Arial, Helvetica, sans-serif;
}

.container {
  .row:nth-child(3) {
    order: 3;
  }
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
