import { SkillEntity } from "../../domain/entities/SkillEntity";

export class SkillModel extends SkillEntity {
  constructor(data) {
    super(data);
  }

  fromJson(jsonData) {
    return new SkillModel({
      category: jsonData.category,
      items: jsonData.items.map(item => ({
        name: item.name,
        level: item.level,
        icon: item.icon
      }))
    });
  }
}