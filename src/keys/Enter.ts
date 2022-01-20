import { TerminalController } from "../terminal";
import { KeyActionInterface } from "./KeyAction";
import { CommandsController } from "../commands/CommandsController";

export class Enter implements KeyActionInterface {
    controller: TerminalController;
    constructor(controller:TerminalController) {
        this.controller = controller;
    }

    processKey():void {
        this.controller.nl()
        this.controller.term.write((new CommandsController(this.controller)).runCommand(this.controller.curr_line));
        this.controller.writePrompt();
    }
}
