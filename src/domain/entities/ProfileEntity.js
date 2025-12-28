

export class ProfileEntity {
    constructor(data) {
        this.name = data.name;
        this.title = data.title;
        this.avatar = data.avatar;
        this.bio = data.bio;
        this.social = data.social;
        this.cvFile = data.cvFile;
    }
}