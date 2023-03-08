import {createBrowserRouter} from "react-router-dom";
import HomePage from "../components/HomePage";
import DynamicPage from "../components/DynamicPage";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <HomePage/>,
    },
    {
        path: "/:id",
        element: <DynamicPage/>,
    },
]);