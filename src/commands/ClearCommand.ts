import { CommandInterface } from "./Command";
import { Utils as U} from "../utils";

export class ClearCommand implements CommandInterface {
	controller: TerminalController;

    constructor(controller: TerminalController) {
        this.controller = controller;
    }

	help() {
		return "Resets Terminal";
	}

	run(args:string[]) {
		this.controller.term.reset();
		this.controller.writePrompt();
	}
}