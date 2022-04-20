import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import CustomerForm from "../components/CustomerForm.vue";
import AutoSuccessPage from "../components/AutoSuccessPage.vue";
import FailurePage from "../components/FailurePage.vue";
import PendingReviewPage from "../components/PendingReviewPage.vue";


const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "CustomerForm",
    component: CustomerForm,
  },
  {
    path: "/success",
    name: "SuccessPage",
    component: AutoSuccessPage,
  },
  {
    path: "/failure",
    name: "FailurePage",
    component: FailurePage,
  },
  {
    path: "/pending-review",
    name: "PendingReviewPage",
    component: PendingReviewPage,
  },
];

const router = createRouter({
  // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
  history: createWebHistory(),
  routes, // short for `routes: routes`
})

export default router;