import { useRoutes } from "react-router-dom"
import { Home } from "../pages/Home"
import { Warning } from "../pages/Warning"

export const RouterList = () => {
    return useRoutes([
        {path: "/", element: <Home /> },
        {path: "/mobile", element: <Warning />}
    ]);
};