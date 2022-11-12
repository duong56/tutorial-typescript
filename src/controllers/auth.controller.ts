import { AuthView } from "../view/auth.view";

export class AuthController {
    constructor( private authView: AuthView) {
        this.authView.handleUserLogin();

        //init default view
        this.authView.setViewDefault();
    }
}
