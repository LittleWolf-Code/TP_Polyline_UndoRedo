import Stack from './stack';
import Konva from "konva";

class UndoManager{

    constructor() {
        this.undo_list = new Stack();
        this.redo_list = new Stack();

    }

    execute(Command){
        Command.execute();
        this.undo_list.push(Command);
    }

    canRedo(){
        return this.redo_list.isEmpty();
    }

    canUndo(){
        return this.undo_list.isEmpty();
    }

    undo(){
        if(this.canUndo())
        {
            const last_command = this.undo_list.pop();

            last_command.undo();

            this.redo_list.push(last_command);
        }
        
    }

    redo(){
        if(this.canRedo())
        {
            const last_command = this.redo_list.pop();
        
            last_command.redo();

            this.undo_list.push(last_command);
        }
    }
}