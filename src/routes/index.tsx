import { Collection } from "../pages/Collection/Collection";
import { Home } from "../pages/Home/Home";
import { Login } from "../pages/Login/Login";
import { Register } from "../pages/Register/Register";

const publicRouter : any = [
    { path: "/", component: Home },
    { path: "/auth/login", component: Login },
    { path: "/auth/register", component: Register },
    { path: "/collection/images", component: Collection },
]

export default publicRouter;