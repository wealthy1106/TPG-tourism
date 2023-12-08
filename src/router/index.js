import { createWebHistory, createRouter } from "vue-router";
const routes = [
      {
            path: "/",
            name: "dautien",
            component: () => import("@/components/dautien.vue"),
      },

      {
            path: "/dstour",
            name: "trangchu",
            component: () => import("@/components/trangchu.vue"),
            props: true,
      },
      {
            path: "/tr",
            name: "tr",
            component: () => import("@/components/dautien.vue"),
      },
      {
            path: "/tour/:id/:idLT",
            name: "tour",
            component: () => import("@/components/tour/chitiet.vue"),
            props: true,
      },
      {
            path: "/tour/:id/:idLT/:idKM",
            name: "chitietKM",
            component: () => import("@/components/tour/chitietKM.vue"),
            props: true,
      },
      {
            path: "/login",
            name: "dangnhap",
            component: () => import("@/components/login.vue"),
      },
      {
            path: "/canhan",
            name: "user",
            component: () => import("@/components/canhan/user.vue"),
      },
      {
            path: "/canhan/chitietTour/:idDT/:idTT",
            name: "CTT",
            component: () => import("@/components/canhan/chitietTour.vue"),
      },
      {
            path: "/sukien",
            name: "sukien",
            component: () => import("@/components/sukien.vue"),

      },
      {
            path: '/test/:id/:idLT',
            name: 'test',
            component: () => import('@/components/tour/chitiet.vue'),
            props: true,
      },
      {
            path: "/ntttour",
            name: "ntttour",
            component: () => import("@/components/giohang/giohang.vue"),
      },
      {
            path: "/lienhe",
            name: "lienhe",
            component: () => import("@/components/lienhe.vue"),
      },
      {
            path: "/timkiem/:idDD",
            name: "timkiem",
            component: () => import("@/components/timkiem/tour.vue"),
      },
      {
            path: "/timkiemtinh/:idTinh",
            name: "timkiemtheotinh",
            component: () => import("@/components/timkiem/timkiemtinh.vue"),
      },
      {
            path: "/tk/:tenDD",
            name: "tk",
            component: () => import("@/components/timkiem/timkiemdiadanh.vue"),
      },
      {
            path: "/tinh/:idTDD",
            name: "timkiemtinh",
            component: () => import("@/components/timkiem/timkiem.vue"),
      },
      {
            path: "/thanhtoan/:idT/:idDT/:idTT",
            name: "thanhtoan",
            component: () => import("@/components/thanhtoan.vue"),

      },
      {
            path: "/giohang/:id",
            name: "giohang",
            component: () => import("@/components/giohang/giohang.vue"),
            props: true,
      },
      {
            path: "/tourKM/:id/:idKM",
            name: "tourKM",
            component: () => import("@/components/giohang/giohangKm.vue"),
            props: true,
      },
];
const router = createRouter({
      history: createWebHistory(import.meta.env.BASE_URL),
      routes,
});
// router.beforeEach((to, from, next) => {
//       // Kiểm tra middleware và đảm bảo không có tham số 'idT' bị xóa
//       if (to.params.idT !== undefined) {
//             next();
//       } else {
//             // Xử lý hoặc điều hướng lại nếu cần
//             next('/some-other-route');
//       }
// });
export default router;