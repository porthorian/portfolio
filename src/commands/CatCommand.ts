import { commands } from "./CommandsController";
import { CommandInterface } from "./Command";
import { Utils as U} from "../utils";

export class CatCommand implements CommandInterface {
	constructor () {

	}

	help() {
		return "Usage: cat [FILE]...\n\rConcatenate FILE(s) to standard output";
	}

	run(args:string[]) {

	}
}