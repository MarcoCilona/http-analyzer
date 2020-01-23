<template lang="pug">
PageLayout(:share-link='shareLink')
  template(#request-form)
    Search(@submit='handleSubmit')
  template(#request-status)
    .column
      .text-align-center.fs-45.fw-700 200
      div Everything is fine!
  template(#request-results)
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
import PageLayout from '../components/PageLayout.vue';
import Search from '../components/Search.vue';
import ResultCard from '../components/ui/ResultCard.vue';
import ResultCardRow from '../components/ui/ResultCardRow.vue';

@Component({
  components: {
    ResultCard,
    PageLayout,
    Search,
    ResultCardRow,
  },
})
export default class HomePage extends Vue {
  shareLink?: string = '';
  handleSubmit() {
    this.shareLink = `${window.location.origin}/#/1212312`;
  }
}
</script>
