class Sender {
    constructor() {
        this.message = "";
    }

    write_message(message) {
        if (message === "") return;
        if (this.message === "") {
            this.message = message;
        } else {
            this.message += message;
        }
    }

    edit_message(message) {
        if (message === "") return;
        this.message = message;
    }

    delete_message() {
        this.message = "";
    }

    print() {
        console.log(this.message);
    }
}

class Receiver extends Sender {
    constructor(sender) {
        super();
        this.sender = sender;          
        this.message = sender.message; 
    }

    print_message() {
        console.log("Message received by sender:", this.message);
    }
}

// Example usage:
let mess = new Sender();
mess.write_message("Hi how are you");
mess.write_message("\nI am Josh");
mess.edit_message("HI i am joe"); 
let rec = new Receiver(mess);
rec.print_message();  