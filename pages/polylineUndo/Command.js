import Konva from "konva";

class Command{
    // execute(){}
    // undo(){}
}

class add_line extends Command {
    constructor(line, layer) {
        super();
        this.line = line;
        this.layer = layer;
    }
    
    execute() {
        this.layer.add(this.line);
    }

    undo(){
        this.line.remove();
    }
}

class remove_line extends Command {
    constructor(line, layer) {
        super();
        this.line = line;
        this.layer = layer;
    }
    execute() {
        this.line.remove();
    }
    undo(){
        this.layer.add(this.line);
    }
}