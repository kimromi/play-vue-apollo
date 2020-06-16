<template>
  <div class="viewer">
    <h2>Viewer.vue(ログインユーザー情報)</h2>

    <h3 v-if="viewer">{{ upcasedName() }}</h3>
    <h3 v-else>error</h3>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
import gql from "graphql-tag";
import { ViewerFields } from "./__generated__/ViewerFields";

export const fragment = gql`
  fragment ViewerFields on User {
    id
    login
  }
`;

@Component({})
export default class Viewer extends Vue {
  @Prop() viewer?: ViewerFields;

  upcasedName(): string {
    if (!this.viewer) return "";
    return this.viewer.login.toUpperCase();
  }
}
</script>
