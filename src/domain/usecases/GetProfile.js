import { profileRepositoryImplProvider } from "../../data/repositories/ProfileRepositoryImpl";

class GetProfileUseCase {
    constructor(profileRepository) {
        this.profileRepository = profileRepository;
    }

    async call () {
        const profile = await this.profileRepository.getProfile();
        return profile;
    }
}

export const getProfileUseCaseProvider = new GetProfileUseCase(profileRepositoryImplProvider);