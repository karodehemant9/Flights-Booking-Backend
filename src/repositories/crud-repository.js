const { Logger } = require("../config");

class CrudRepository {
  constructor(model) {
    this.model = model;
  }

  async create(data) {
    const response = await this.model.create(data);
    return response;
  }

  async destroy(modelId) {
    const response = await this.model.destroy({
      where: { id: modelId },
    });
    return response;
  }

  async get(modelId) {
    const response = await this.model.findByPk(modelId);
    return response;
  }
  async getAll() {
    const response = await this.model.findAll();
    return response;
  }

  async update(modelId, data) {
    await this.model.update(data, {
      where: { id: modelId },
    });
    return true;
  }
}

module.exports = CrudRepository;
