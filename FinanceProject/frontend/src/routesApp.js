/*!

=========================================================
* Argon Dashboard React - v1.2.0
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-dashboard-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
// import Profile from "views/examples/Profile.js";
import WorkFinance from 'app/pages/Finance/views/WorkFinance';
import WorkPurchues from 'app/pages/Purchues/view/WorkPurchues'

var routes = [
  {
    path: "/kassa",
    name: "Kassa",
    icon: "ni ni-tv-2 text-primary",
    component: WorkFinance,
    layout: "/app",
  },
 
  {
    path: "/xarid",
    name: "Xarid",
    icon: "far fa-credit-card text-yellow",
    component: WorkPurchues,
    layout: "/app",
  },
 
  
  
];
export default routes;
