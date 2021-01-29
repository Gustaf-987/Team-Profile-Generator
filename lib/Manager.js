const Employee = require("./Employee");

class Manager extends Manager {
    constructor(name, id, email, github){
    super(name, id, email);
    this.github = github;
    }

    getGithub(){
        return this.github;
    }

    getRole() {
        return "Manager";
    }
}

module.exports = Manager;