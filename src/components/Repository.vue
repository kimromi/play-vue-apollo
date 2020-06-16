<template>
  <div class="repositories">
    <h2>Repository.vue(リポジトリ情報)</h2>

    <h3 v-if="repository">
      name: {{ upcasedName() }}<br />
      createdAt: {{ repository.createdAt }}
    </h3>
    <h3 v-else>error</h3>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
import gql from "graphql-tag";
import { RepositoryFields } from "./__generated__/RepositoryFields";

export const fragment = gql`
  fragment RepositoryFields on Repository {
    id
    name
    createdAt
  }
`;

@Component({})
export default class Viewer extends Vue {
  @Prop() repository?: RepositoryFields;

  upcasedName(): string {
    if (!this.repository || !this.repository.name) {
      return "";
    }
    return this.repository.name.toUpperCase();
  }
}
</script>
