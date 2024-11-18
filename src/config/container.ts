import { container } from "tsyringe";
import { AuthService } from "../services";
import { AuthRepository } from "../repositories";

container.registerSingleton<AuthService>(AuthService);
container.registerSingleton<AuthRepository>(AuthRepository);