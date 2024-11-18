import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import DefaultLayout from './layouts/Default';
import Home from './pages/Home';
import About from './pages/About';
import Movies from './pages/Movies';

const router = createBrowserRouter([
  // 라우트 객체(페이지 정보)
  {
    // path: '',
    element: <DefaultLayout />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/about',
        element: <About />
      },
      {
        path: '/movies',
        element: <Movies />
      }
    ]
  }
]);
// http://localhost:5173/
// http://localhost:5173/about

export default function Router() {
  // Props, Prop, 속성
  return <RouterProvider router={router} />;
}
