import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter} from "react-router-dom";
import {RoutesPage} from "./routes/RoutesPage";
import {MainLayout} from "./components/MainLayout/MainLayout";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
      <BrowserRouter>
          <MainLayout>
              <RoutesPage/>
          </MainLayout>
      </BrowserRouter>
  </React.StrictMode>
);