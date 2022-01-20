import { TerminalController } from "../terminal";
import { KeyActionInterface } from "./KeyAction";

export class Delete implements KeyActionInterface {
    controller: TerminalController;
    constructor(controller:TerminalController) {
        this.controller = controller;
    }

    processKey():void {
        //console.log('delete');
        //console.log(this.controller.curr_line);
        //console.log(this.controller.cursor);
        //console.log(this.controller.horizArrows);
        //this.controller.curr_line = this.controller.curr_line.substr(0, this.controller.cursor) + this.controller.curr_line.substr(this.controller.cursor+1);
        //console.log(this.controller.curr_line);
        //this.controller.term.write(this.controller.curr_line.substr(this.controller.cursor)+' '+this.controller.horizArrows);
    }
}
