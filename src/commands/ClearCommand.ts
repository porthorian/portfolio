import { CommandInterface } from "./Command";

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
		return '';
	}
}