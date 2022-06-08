import { CommandInterface } from "./Command";

const github_url = "https://github.com/Porthorian";
export class GithubCommand implements CommandInterface {
	help() {
		return `Opens a link to my github page at ${github_url}`;
	}

	run() {
		setTimeout(function() {
			window.open(github_url, '_blank');
		}, 1000);

		return 'Opening github page at '+github_url+'\n\r....';
	}
}