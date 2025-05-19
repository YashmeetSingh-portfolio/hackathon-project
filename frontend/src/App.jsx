import { createBrowserRouter, Router, RouterProvider, Routes } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import CodeExplainPage from './pages/CodeExplainPage';

export default function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      Component: LandingPage
    },
    {
      path: '/code-explain',
      Component: CodeExplainPage,
      // loader: loadRootData
    }
  ])

  return (
    <div>
      < RouterProvider router={router}/>
    </div>
  );
}