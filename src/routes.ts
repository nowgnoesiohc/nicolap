import type { RouteObject } from "react-router";

// React Router v7 스타일 라우트 설정
// lazy를 사용하여 코드 스플리팅 자동 적용
export const routes: RouteObject[] = [
  {
    path: "/",
    lazy: async () => {
      const Component = await import("@/pages/index");
      return { Component: Component.default };
    },
  },
  {
    path: "/login",
    lazy: async () => {
      const Component = await import("@/pages/login");
      return { Component: Component.default };
    },
  },
  {
    path: "*",
    lazy: async () => {
      const Component = await import("@/pages/notfound");
      return { Component: Component.default };
    },
  },
];
