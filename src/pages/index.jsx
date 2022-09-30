import { lazy } from 'react';

//Auth
export const LoginComp = lazy(() => import('./Auth/Login'));
export const RegisterFormComp = lazy(() => import('./Auth/Register/register'));
export const ForgotPasswordComp = lazy(() => import('./Auth/ForgotPassword'));

//Dashboard
export const OverviewComp = lazy(() => import('./Dashboard/Overview'));
export const TransactionComp = lazy(() => import('./Dashboard/Transactions'));
