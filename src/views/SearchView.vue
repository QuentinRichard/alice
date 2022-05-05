<template>
  <div class="home">
    <div class="container">
      <div class="row">
        <p>Resultat de la recherche</p>
      </div>
      <div class="row">
        <div>
          <list-component 
            :data="geoRisks" 
            :headers="headers" 
            :action="'siret'"  
            v-on:actionEvent="onNavigate"
          />
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
  name: "SearchView",
  components: { ListComponent, PaginationComponent },
  data() {
    return {
      searchId: "",
      headers: [
          { name: 'nom', field: 'raisonSociale'}, 
          { name:'commune', field: 'commune' }, 
          { name:"siret", field:"siret"} ],
      page: 1,
    };
  },
  computed: {
    ...mapState({
        geoRisks: state => (state as any).GeoRisks.data,
        pagination: state => (state as any).GeoRisks.pagination,
       }),
  },
  async mounted() {
    this.searchId = this.$route.params.id as string;
    this.$store.dispatch(
      types.GEORISKS_ACTION_GET, 
      { searchId: this.searchId, page: 1 });
  },
  methods: {
    paginationEventCb(page: number) {
      this.page = page;
      this.$store.dispatch(
        types.GEORISKS_ACTION_GET,
        { searchId: this.searchId, page });
    },
    onNavigate(event: string) {
      const coord = this.geoRisks.find( (item: any)=>{
        return item.siret === event;
      })
      const longitude = coord.longitude;
      const atitude = coord.latitude;
      this.$router.push(`/show/${longitude},${atitude}`);
    }
  },
});
</script>
