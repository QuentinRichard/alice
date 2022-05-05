<template>
  <div class="home">
    <div class="container">
      <div class="row">
        <p>Resultat de la recherche</p>
      </div>
      <div class="row">
        <div>
          <list-component :data="CSP" :headers="headers" :action="'siret'" />
          <pagination-component
            v-model="page"
            :pageCount="pagination.nbPage"
            :clickHandler="paginationEventCb"
            :prevText="'Prev'"
            :nextText="'Next'"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { mapState } from "vuex";
import ListComponent from "@/components/ListComponent.vue";
import PaginationComponent from "@/components/PaginationComponent.vue";
import types from "@/store/types"

export default Vue.extend({
  name: "ShowView",
  components: { ListComponent, PaginationComponent },
  data() {
    return {
      searchId: "",
      headers: [
          { name: 'commune', field: 'libelle_pcs'}, 
          { name: 'Risque', field: 'libelle_bassin_risques' }, 
          { name: "commentaire", field:"libelle_commentaire"} ],
      page: 1,
      longitude: '', 
      latitude: '',
    };
  },
  computed: {
    ...mapState({
        geoRisks: state => (state as any).GeoRisks.data,
        CSP: state => (state as any).CSP.data,
        pagination: state => (state as any).CSP.pagination,
       }),
  },
  async mounted() {
    const coord = (this.$route.params.id as string).split(',');
    if(coord.length != 2)
      this.$router.push('/error');

    this.longitude = coord[0];
    this.latitude = coord[1];
    this.$store.dispatch(
        types.CSP_ACTION_GET, 
        { longitude: this.longitude, latitude: this.latitude, page: this.page });
  },
  methods: {
    paginationEventCb(page: number) {
      this.page = page;
      this.$store.dispatch(
        types.CSP_ACTION_GET, 
        { longitude: this.longitude, latitude: this.latitude, page });
    },
  },
});
</script>
