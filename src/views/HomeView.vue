<template>
  <div class="home">
    <div class="container">
      <div class="row">
        <p>Entrer le code postal d'une commune</p>
      </div>

      <div class="row">
        <b-input-group class="col-sm">
          <b-form-input type="text" v-model="search"></b-form-input>

          <b-input-group-append>
            <b-button variant="outline-secondary" @click="searchEntity()">
              <img src="../assets/search.svg" />
            </b-button>
          </b-input-group-append>
        </b-input-group>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "HomeView",
  data() {
    return {
      search: "19270",
    };
  },
  methods: {
    searchEntity() {
      this.$router.push(`/search/${this.search}`);
    },
  },
});
</script>
