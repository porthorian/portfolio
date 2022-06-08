import { TerminalController } from "../terminal";

export interface CommandConstructor {
    new (): CommandInterface;
}

export interface CommandInterface {
    help: () => string;
    run: (args: string[], controller?: TerminalController) => string;
}