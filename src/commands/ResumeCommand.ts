import { CommandInterface } from "./Command";

export class ResumeCommand implements CommandInterface {
	controller: TerminalController;

    constructor(controller: TerminalController) {
        this.controller = controller;
    }

	help() {
		return "View and Download my Resume.";
	}

	run(args:string[]) {
		window.open('/assets/Vincent-Marone-Resume.pdf', "_blank");
		return '';
	}
}