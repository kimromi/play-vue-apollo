<template>
  <div id="app">
    <div v-if="$apollo.loading">Loading...</div>
    <div v-else-if="appData">
      <Viewer :viewer="appData.viewer" />
      <Repository :repository="appData.repository" />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import gql from "graphql-tag";
import { GetAppData } from "./__generated__/GetAppData";

import Viewer, { fragment as ViewerFragment } from "./components/Viewer.vue";
import Repository, {
  fragment as RepositoryFragment
} from "./components/Repository.vue";

@Component({
  components: {
    Viewer,
    Repository
  },
  apollo: {
    appData: {
      query: gql`
        query GetAppData($owner: String!, $name: String!) {
          viewer {
            ...ViewerFields
          }
          repository(owner: $owner, name: $name) {
            ...RepositoryFields
          }
        }

        ${ViewerFragment}
        ${RepositoryFragment}
      `,
      variables: {
        owner: "kimromi",
        name: "play-vue-apollo"
      },
      update(data) {
        // see: https://apollo.vuejs.org/guide/apollo/queries.html#name-matching
        return data;
      }
    }
  }
})
export default class App extends Vue {
  private appData?: GetAppData;
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  font-size: 24px;
}
</style>
