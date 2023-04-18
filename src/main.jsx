import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

import {
  QueryClient,
  QueryClientProvider,
} from "react-query";

// redux
import { Provider } from "react-redux";
import store from './redux/store'

import "./assets/boxicons-2.0.7/css/boxicons.min.css";
import "./styles/global.scss";
import "./styles/theme.scss";
import "./styles/fonts.scss";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 1
    },
  },
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <App />
      </QueryClientProvider>
    </Provider>
  </React.StrictMode>,
)
