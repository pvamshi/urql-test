import Home from "@components/Home";
import React from "react";

import {
  createClient,
  Provider,
  defaultExchanges,
  fetchExchange,
  dedupExchange,
} from "urql";
import { cacheExchange } from "@urql/exchange-graphcache";
import { devtoolsExchange } from "@urql/devtools";

const client = createClient({
  url: "http://localhost:3001",
  exchanges: [devtoolsExchange, ...defaultExchanges],
});
export default function App() {
  return (
    <Provider value={client}>
      <Home />
    </Provider>
  );
}
