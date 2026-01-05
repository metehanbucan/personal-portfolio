class FakeDataSource {
  fetchProfileFromJson = async () => {
    await new Promise((resolve) => setTimeout(resolve, 300));
    const response = await import("../locales/profile.json");
    const profile = response.default;
    return profile;
  };

  fetchProjectsFromJson = async () => {
    await new Promise((resolve) => setTimeout(resolve, 300));
    const response = await import("../locales/projects.json");
    console.log(response.default);
    const projectsArray = response.default;
    return projectsArray;
  };
}

export const fakeDataSourceProvider = new FakeDataSource();
