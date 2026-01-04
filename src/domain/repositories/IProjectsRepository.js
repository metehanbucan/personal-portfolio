export class IProjectsRepository {
    constructor(){
        if(this.constructor === IProjectsRepository){
            throw new Error("Abstract class can't be instantiated.");
        }
    }

    async getAllProjects(){
        throw new Error("Method 'getAllProjects()' must be implemented.");
    }
}