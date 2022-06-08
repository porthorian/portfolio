import { CommandConstructor } from "./Command";
import { Utils as U} from "../utils";
import { TerminalController } from "../terminal";

import { AgeCommand } from "./AgeCommand";
import { ClearCommand } from "./ClearCommand";
import { HelpCommand } from "./HelpCommand";
import { GithubCommand } from "./GithubCommand";
import { ResumeCommand } from "./ResumeCommand";

export const commands: {[key:string]: CommandConstructor}  = {
    'age': AgeCommand,
    'clear': ClearCommand,
    'help': HelpCommand,
    'github': GithubCommand,
    'resume': ResumeCommand,
}

export class CommandsController {
    controller: TerminalController;

    constructor(controller: TerminalController) {
        this.controller = controller;
    }

    runCommand(currentLine: string):string {
        if (currentLine.trim() == '') {
            return '';
        }

        let [command, args] = this.splitCurrentLine(currentLine);

        if (command == '!!') {
            return this.runCommand(this.controller.entries[this.controller.entriesPointer - 1 ]);
        }

        this.controller.addEntry();

        if (commands.hasOwnProperty(command)) {
            let executor = new commands[command]();

            return executor.run(args, this.controller);
        }

        // Error
        return `${U.error} ${U.command(command)} is not available. Run ${U.command('help')} for all available commands`;
    }

    private splitCurrentLine(currentLine: string): [string, string[]] {
        const index = currentLine.indexOf(' ');

        // command with no args
        if (index === -1) return [currentLine, []]

        // split command from args
        const command = currentLine.substr(0, index);
        const args = currentLine.substr(index + 1, currentLine.length).split(' ');
        return [command, args];
    }
}