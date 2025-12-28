import { ProjectEntity } from "../../domain/entities/ProjectEntity";

export class ProjectModel extends ProjectEntity{
  constructor(data) {
    super(data);
  }

  fromJson(jsonData) {
    return new ProjectModel({
      id: jsonData.id,
      title: jsonData.title,
      description: jsonData.description,
      image: jsonData.image,
      technologies: jsonData.technologies,
      githubUrl: jsonData.githubUrl,
      demoUrl: jsonData.demoUrl
    });
  }
}