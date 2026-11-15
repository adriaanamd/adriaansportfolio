import { createRouter } from "@tanstack/react-router"
import LoadingScreen from "./components/LoadingScreen"
import { routeTree } from "./routeTree.gen"

export function getRouter() {
  return createRouter({
    routeTree,
    scrollRestoration: true,
    defaultPendingComponent: () => <LoadingScreen />,
  })
}
