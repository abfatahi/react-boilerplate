import React, { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import Preloader from '../components/Preloader';
// import { useLocation } from "react-router-dom";

export const PrivateOutlet = () => {
  // const location = useLocation();
  // const isAuth = getToken();
  // if (!isAuth) {
  //   return <Navigate to="/" state={{ from: location }} />;
  // }
  return (
    <Suspense fallback={<Preloader />}>
      <Outlet />
    </Suspense>
  );
};

//  export const ProtectedOutlet = () => {
//     const isAuth = getToken();
//     return !isAuth ? (
//       <Suspense fallback={<SiteLoading />}>
//         <Outlet />
//       </Suspense>
//     ) : (
//       <Navigate to="/dashboard" />
//     );
//   };
