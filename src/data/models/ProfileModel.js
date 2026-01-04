import { ProfileEntity } from "../../domain/entities/ProfileEntity";

export class ProfileModel extends ProfileEntity{
    constructor(data) {
        super(data);
    }

    fromJson(jsonData) {
        return new ProfileModel({
            name: jsonData.name,
            title: jsonData.title,
            avatar: jsonData.avatar,
            bio: jsonData.bio,
            social: jsonData.social,
            cvFile: jsonData.cvFile
        })
    }
}