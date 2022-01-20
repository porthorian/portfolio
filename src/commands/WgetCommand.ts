import { commands } from "./CommandsController";
import { CommandInterface } from "./Command";
import { Utils as U} from "../utils";

export class WgetCommand implements CommandInterface {
	constructor () {

	}

	help() {
		return `
GNU Wget 1.X.X, a non-interactive network retriever.
\rUsage: wget [OPTION]... [URL]...
`;
	}

	run(args:string[]) {

	}
}