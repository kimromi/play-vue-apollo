<template>
  <div class="repositories">
    <h2>Repository.vue(リポジトリ情報)</h2>

    <div v-if="$apollo.loading">Loading...</div>
    <h3 v-else-if="repository">
      name: {{ upcasedName() }}<br />
      createdAt: {{ repository.createdAt }}
    </h3>
    <h3 v-else>error</h3>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import gql from "graphql-tag";
import { GetRepository_repository } from "./__generated__/GetRepository";

@Component({
  apollo: {
    repository: {
      query: gql`
        query GetRepository($owner: String!, $name: String!) {
          repository(owner: $owner, name: $name) {
            id
            name
            createdAt
          }
        }
      `,
      variables: {
        owner: "kimromi",
        name: "play-vue-apollo"
      }
    }
  }
})
export default class Viewer extends Vue {
  private repository?: GetRepository_repository;

  upcasedName(): string {
    if (!this.repository) return "";
    return this.repository.name.toUpperCase();
  }
}
</script>
