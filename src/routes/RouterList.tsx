import { useRoutes } from "react-router-dom";
import { Home } from "../pages/Home";
import { Payment } from "../components/Payment";

export const RouterList = () => {
    return useRoutes([
        {path: '/', element: <Home />},
        {path: '/test', element: <Payment />}
    ]);
};