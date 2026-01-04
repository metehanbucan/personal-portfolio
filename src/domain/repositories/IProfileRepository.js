export class IProfileRepository {
    constructor(){
        if(this.constructor === IProfileRepository){
            throw new Error("Abstract class can't be instantiated.");
        }
    }
    async getProfile(){
        throw new Error("Method 'getProfile()' must be implemented.");
    }
}