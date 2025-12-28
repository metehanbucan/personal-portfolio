import { projectRepositoryImplProvider } from "../../data/repositories/ProjectRepositoryImpl";

class GetProjectUseCase {
    constructor(projectsRepository) {
        this.projectsRepository = projectsRepository;
    }

    async call () {
        const projects = await this.projectsRepository.getAllProjects();
        return projects;
    }
}

export const getProjectUseCaseProvider = new GetProjectUseCase(projectRepositoryImplProvider);