<template>
  <div class="list-component">
    <table class="table">
      <thead>
          <tr>
              <th v-for="header of headers" :key="header.message"> {{ header.name }}</th>
          </tr>
      </thead>
      <tbody>
          <tr v-for="item of data" :key="item.name" @click="actionEvent(item[action])" class="tr-action">
              <td v-for="(header, index) of headers" :key="index">{{item[header.field]}}</td>
          </tr>
      </tbody>
    </table>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "ListComponent",
  props: {
    data: [],
    headers: [],
    action: String,
  },
  methods: {
    actionEvent(key: string) {
      this.$emit("actionEvent", key);
    }
  },
});
</script>

<style scoped>
.tr-action {
  cursor: pointer;
}
</style>
