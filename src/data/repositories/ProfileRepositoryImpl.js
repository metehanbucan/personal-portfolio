import { IProfileRepository } from "../../domain/repositories/IProfileRepository";
import { fakeDataSourceProvider } from "../datasources/fake_datasource";

class ProfileRepositoryImpl extends IProfileRepository {
    constructor(dataSource) {
        this.dataSource = dataSource;
    }
    async getProfile() {
        const profileData = await this.dataSource.fetchProfileFromJson();
        return profileData;
    }
}

export const profileRepositoryImplProvider = new ProfileRepositoryImpl(fakeDataSourceProvider);