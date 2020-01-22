<template lang="pug">
.container.ph-4
  .row.align-center.mv-4
    .grey_medium.pa-2.br-4.width-80.d-flex.search-bar
      Select
      Input.mh-4
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
  .row.mt-8.align-center
    .direction-column
      .fs-20.uppercase.text-align-center.mb-2 Share
      .ph-4.pv-1.grey_medium.br-20 {{ shareLink }}
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

// Components
import Button from '../components/ui/Button.vue';
import Input from '../components/ui/Input.vue';
import ResultCard from '../components/ui/ResultCard.vue';
import ResultCardRow from '../components/ui/ResultCardRow.vue';
import Select from '../components/ui/Select.vue';

@Component({
  components: {
    Button,
    Input,
    ResultCard,
    ResultCardRow,
    Select,
  },
})
export default class Detail extends Vue {
  shareLink?: string = '';
  created() {
    this.shareLink = `${window.location.origin}/${this.$route.params.idRequest}`;
  }
}
</script>

<style lang="scss" scoped>
.container {
  .row:nth-child(3) {
    order: 3;
  }
  .row:nth-child(4) {
    order: 4;
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
