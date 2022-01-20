import { commands } from "./CommandsController";
import { CommandInterface } from "./Command";
import { Utils as U} from "../utils";

export class LsCommand implements CommandInterface {
	constructor () {

	}

	help() {
		return `
Usage: ls [OPTION]... [FILE]...
\rList information about the FILEs (the current directory by default).
`
	}

	run(args:string[]) {

	}
}