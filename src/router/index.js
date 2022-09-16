import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../components/HomePage";
import DeviceInformation from "../components/DeviceInformation";
const routes = [
  {
    path: "/",
    name: "home",
    component: HomePage,
  },
  {
    path: "/devices/:id",
    name: "deviceInformation",
    component: DeviceInformation,
    props: true,
  },
  {
    path: "/:pathMatch(.*)*",
    redirect: "/",
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
