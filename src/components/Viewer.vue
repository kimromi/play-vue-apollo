<template>
  <div class="viewer">
    <h2>Viewer.vue(ログインユーザー情報)</h2>

    <div v-if="$apollo.loading">Loading...</div>
    <h3 v-else-if="viewer">{{ upcasedName() }}</h3>
    <h3 v-else>error</h3>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import gql from "graphql-tag";
import { GetViewer_viewer } from "./__generated__/GetViewer";

@Component({
  apollo: {
    viewer: gql`
      query GetViewer {
        viewer {
          id
          login
        }
      }
    `
  }
})
export default class Viewer extends Vue {
  private viewer?: GetViewer_viewer;

  upcasedName(): string {
    if (!this.viewer) return "";
    return this.viewer.login.toUpperCase();
  }
}
</script>
