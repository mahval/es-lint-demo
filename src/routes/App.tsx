import React from 'react';
import { Navigate, Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import { FrameworkPage } from '../pages/framework/FrameworkPage';

export const router = createBrowserRouter(
    createRoutesFromElements(
        <>
            <Route path="/" element={<Navigate to="frameworks/react" replace />} />
            <Route path="frameworks/:framework" element={<FrameworkPage />}></Route>
        </>,
    ),
);

export const App = () => <RouterProvider router={router} fallbackElement={<p>Loading...</p>} />;
