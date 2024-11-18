import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import DefaultLayout from './layouts/Default'

const router = createBrowserRouter([
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
      }
    ]
  }
])
// http://localhost:5173/
// http://localhost:5173/about

export default function Router() {
  // Props, Prop, 속성
  return <RouterProvider router={router} />
}
