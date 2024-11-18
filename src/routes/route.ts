import { Router } from "express";
import routerAuth from "./auth/routeAuth";

const router:Router = Router();
router.use("/auth", routerAuth);

export default router;