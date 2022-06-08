import { CommandInterface } from "./Command";

export class ResumeCommand implements CommandInterface {
	help() {
		return "View and Download my Resume.";
	}

	run() {
		window.open('/assets/Vincent-Marone-Resume.pdf', "_blank");
		return '';
	}
}