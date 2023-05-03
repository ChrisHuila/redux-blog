import {createBrowserRouter,  RouterProvider, useLocation, useOutlet} from "react-router-dom";
import { CSSTransition, SwitchTransition } from 'react-transition-group'
import { createRef } from "react";
import HomePage from "./routes/HomePage"
import EntryPage from "./routes/EntryPage"
import TrendingPage from "./Routes/TrendingPage";
import Header from "./components/layout/Header"
import SearchPage from "./routes/SearchPage";


function App() {

  const routes = [
    {
      path: "/", 
      element: <HomePage/>, 
      nodeRef: createRef()
    },
    {
      path: "/search",
      element: <SearchPage />,
      nodeRef: createRef()
    },
    {
      path: "/trending", 
      element: <TrendingPage/>, 
      nodeRef: createRef()
    },
    {
      path: "/entry",   
      element: <EntryPage/>,
      nodeRef: createRef(),
    }

  ]

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      children: routes.map((route) => ({
        index: route.path === '/',
        path: route.path === '/' ? undefined : route.path,
        element: route.element,
      })),
    },
  ])

  function Layout() {
    const location = useLocation()
    const currentOutlet = useOutlet() 
    const { nodeRef } = routes.find((route) => route.path === location.pathname) ?? {}

      return ( 
      
       <>
        <Header/>
   
       <div className="content" >
        <SwitchTransition>
          <CSSTransition
            key={location.pathname}
            nodeRef={nodeRef}
            timeout={300}
            classNames="page"
            unmountOnExit
          >
            {(state) => (
              <div ref={nodeRef} className="page">
                {currentOutlet}
              </div>
            )}
          </CSSTransition>
        </SwitchTransition>
       </div>
       </>
      )
   }

   return ( 
    <RouterProvider router={router} />
  )
  
}

export default App
