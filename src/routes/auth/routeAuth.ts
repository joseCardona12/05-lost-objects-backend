import { Router } from "express";
import { AuthController } from "../../controllers";

const routerAuth:Router = Router();
routerAuth.post("/login", AuthController.login);
routerAuth.post("/register", AuthController.register);
export default routerAuth;