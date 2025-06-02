import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Components/Root/Root';
import Home from './Components/Home/Home';
import Faq from './Components/About/faq';
import Contact from './Components/About/Contact';
import About from './Components/About/About';
import MissionVisionValues from './Components/About/Vision';
import SaveTreeTeam from './Components/AboutUS/Savetreeteam/SaveTreeTeam';
import JuniorManagementCommittee from './Components/AboutUS/Savetreeteam/JuniorManagementCommittee';
import ManagementCommittee from './Components/AboutUS/Savetreeteam/ManagementCommittee';
import TeamLeaders from './Components/AboutUS/Savetreeteam/TeamLeaders';
import Projects from './Components/Projects/Projects';
import Join from './Components/Join/Join';
import ProjectDetails from './Components/Projects/ProjectDetails';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/faq",
        element: <Faq></Faq>
      },
      {
        path: "/contact",
        element: <Contact></Contact>
      },
      {
        path: "/about",
        element: <About></About>
      },
      {
        path: "/projects",
        element: <Projects></Projects>
      },
      {
        path: "/events/:eventId",
        element: <ProjectDetails></ProjectDetails>
      },
      {
        path: "/mission",
        element: <MissionVisionValues></MissionVisionValues>
      },
      {
        path: "/join",
        element: <Join></Join>
      },
      {
        path: "/save-tree-team",
        element: <SaveTreeTeam />,
        children: [

          {
            index: true,
            element: <ManagementCommittee />
          },

          {
            path: "juniorManCom",
            element: <JuniorManagementCommittee />
          },
          {
            path: "teamLeaders",
            element: <TeamLeaders />
          }
        ]
      },
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
