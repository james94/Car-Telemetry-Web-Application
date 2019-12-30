// dashRoutes[0].component calls on Dashboard component to be page rendered
import Dashboard from "views/Dashboard/Dashboard.jsx";
//import Sensors from "views/Sensors/Sensors.jsx";
import Sensors from "views/Sensors/Sensors.jsx"
//import SelfDriving from "views/SelfDriving/SelfDriving.jsx";
import SelfDriving from "views/SelfDriving/SelfDriving.jsx";

var dashRoutes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: "design_app",
    component: Dashboard
  },
  { 
    path: "/sensors", 
    name: "Sensors", 
    icon: "design_image", 
    component: Sensors 
  },
  {
    path: "/self-driving",
    name: "Self-Driving",
    icon: "objects_spaceship",
    component: SelfDriving
  },
  { redirect: true, path: "/", pathTo: "/dashboard", name: "Dashboard" }
];
export default dashRoutes;
