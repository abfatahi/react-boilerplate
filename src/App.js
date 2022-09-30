/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import React from 'react';
import { Routes, BrowserRouter as Router, Route, Navigate } from 'react-router-dom';
import { AppRoutes } from './constants';
import { PrivateOutlet } from './hooks/Outlets';
import ScrollToTop from './utils/ScrollToTop';
import * as Page from './pages';

function App() {
  return (
    <Router>
      <ScrollToTop>
        <Routes>
          {/* Auth Routes */}
          <Route element={<PrivateOutlet />}>
            <Route path={AppRoutes.login} element={<Page.LoginComp />} />
            <Route path={AppRoutes.register} element={<Page.RegisterFormComp />} />
            <Route path={AppRoutes.forgotPassword} element={<Page.ForgotPasswordComp />} />
          </Route>

          {/* Dashboard Routes */}
          <Route element={<PrivateOutlet />}>
            <Route path={AppRoutes.home} element={<Page.OverviewComp />} />
            <Route path={AppRoutes.transactions} element={<Page.TransactionComp />} />
          </Route>

          {/* Handle Invalid Route */}
          <Route path="*" element={<Navigate to={AppRoutes.login} replace />} />
        </Routes>
      </ScrollToTop>
    </Router>
  );
}

export default App;
