import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements
} from 'react-router-dom';
import { Suspense, lazy } from 'react';

const Layout = lazy(() => import('./pages/Layout'));
const Home = lazy(() => import('./pages/Home'));
const Catalog = lazy(() => import('./pages/Catalog'));
const NoPage = lazy(() => import('./pages/NoPage'));

const routerDefinition = createRoutesFromElements(
  <Route path='/' element={<Layout />}>
    <Route index element={<Home />} />
    <Route path='catalog' element={<Catalog />} />
    <Route path='*' element={<NoPage />} />
  </Route>
);

const router = createBrowserRouter(routerDefinition);

function App() {
  return (
    <Suspense fallback={<div>Завантаження...</div>}>
      <RouterProvider router={router} />
    </Suspense>
  );
}

export default App;
