import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter} from "react-router-dom";
import {RoutesPage} from "./routes/RoutesPage";
import {MainLayout} from "./components/MainLayout/MainLayout";
import {Provider} from "react-redux";
import {store} from "./store";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
      <Provider store={store}>
          <BrowserRouter>
              <MainLayout>
                  <RoutesPage/>
              </MainLayout>
          </BrowserRouter>
      </Provider>
  </React.StrictMode>
);