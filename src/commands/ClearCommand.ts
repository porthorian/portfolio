import { CommandInterface } from "./Command";
import { TerminalController } from "../terminal";

export class ClearCommand implements CommandInterface {
	help() {
		return "Resets Terminal";
	}

	run(_args:string[], controller?: TerminalController) {
		if (typeof controller === 'undefined') {
			return '';
		}

		controller.term.reset();
		return '';
	}
}