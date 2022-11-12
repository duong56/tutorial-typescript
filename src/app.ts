import { AuthController } from "./controllers/auth.controller";
import { AuthView } from "./view/auth.view";

const app = new AuthController(new AuthView())