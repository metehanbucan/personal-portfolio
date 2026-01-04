export class SkillEntity {
  constructor(category, items) {
    this.category = category;
    this.items = items.map(item => ({
      name: item.name,
      level: item.level,
      icon: item.icon
    }));
  }
}