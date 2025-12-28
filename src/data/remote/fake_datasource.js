

export const fetchProfileFromJson = async () => {
    await new Promise(resolve => setTimeout(resolve, 300));
    const response = await import('../json/profile.json');
    return response.default;
}

export const fetchProjectsFromJson = async () => {
    await new Promise(resolve => setTimeout(resolve, 300));
    const response = await import('../json/projects.json');
    return response.default;
}