import { ProfileModel } from '../models/ProfileModel';
import { ProjectModel } from '../models/ProjectModel';

class FakeDataSource {

    fetchProfileFromJson = async () => {
    await new Promise(resolve => setTimeout(resolve, 300));
    const response = await import('../locales/profile.json');
    const profile = new ProfileModel().fromJson(response.default);
    return profile;
    }

    fetchProjectsFromJson = async () => {
        await new Promise(resolve => setTimeout(resolve, 300));
        const response = await import('../locales/projects.json');
        const projects = response.default.map((projectJson) => {
            const projectModel = new ProjectModel().fromJson(projectJson);
            return projectModel;
        })
        return projects;
    }

}


export const fakeDataSourceProvider = new FakeDataSource();