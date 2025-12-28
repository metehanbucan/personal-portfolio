import { IProjectsRepository } from "../../domain/repositories/IProjectsRepository";
import { fakeDataSourceProvider } from "../datasources/fake_datasource";

class projectRepositoryImpl extends IProjectsRepository {
    constructor(dataSource) {
        super();
        this.dataSource = dataSource;
    }
    async getAllProjects() {
        const projectData = await this.dataSource.fetchProjectsFromJson();
        return projectData;
    }
}

export const projectRepositoryImplProvider = new projectRepositoryImpl(fakeDataSourceProvider);