import { Router } from "express";

const routerAuth:Router = Router();
routerAuth.get("/", ()=>console.log("routeAuth"));
export default routerAuth;