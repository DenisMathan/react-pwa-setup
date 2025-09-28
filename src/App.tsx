import { BrowserRouter as Router, useRoutes, Navigate } from "react-router-dom";

import { Navbar } from './components/navbar'
import { Footer } from './components/footer'
import { Content } from './components/content'

import { ProjectsView } from './views/Projects';
import { SettingsView } from './views/settings/SettingsView';
import './App.css'
import { ProjectView } from "./views/project/Project";

function App() {
  function AppRoutes() {
    return useRoutes([
      {
        path: "/home",
        element: <ProjectsView />,
      },
      {
        path: "/settings", element: <SettingsView/>
      },
      {
        path:"/project/:id", element: <ProjectView />
      },
      {
        path: "*", element: <Navigate to="/home" replace/>
      },
    ]);
  }

  return (
      <Router>
        <Navbar></Navbar>
        <Content>
          <AppRoutes/>
        </Content>
        <Footer></Footer>
      </Router>
  )
}

export default App
