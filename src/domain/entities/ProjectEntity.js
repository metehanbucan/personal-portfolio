export class ProjectEntity {
  constructor(data) {
    this.id = data.id;
    this.title = data.title;
    this.description = data.description; // tr ve en içerir
    this.image = data.image;
    this.techs = data.technologies;
    this.links = { github: data.githubUrl, demo: data.demoUrl };
  }
}