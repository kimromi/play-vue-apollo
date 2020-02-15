import Vue from "vue";
import App from "./App.vue";
import store from "./store";

import VueApollo from "vue-apollo";

import { ApolloClient } from "apollo-client";
import { createHttpLink } from "apollo-link-http";
import { InMemoryCache } from "apollo-cache-inmemory";

const token = process.env.VUE_APP_GITHUB_TOKEN;
const httpLink = createHttpLink({
  uri: "https://api.github.com/graphql",
  headers: {
    Authorization: `bearer ${token}`,
    Accept: "application/json",
    "content-type": "application/json"
  }
});

const apolloClient = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache()
});

const apolloProvider = new VueApollo({
  defaultClient: apolloClient
});

Vue.use(VueApollo);

Vue.config.productionTip = false;
new Vue({
  store,
  apolloProvider,
  render: h => h(App)
}).$mount("#app");
