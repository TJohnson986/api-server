'use strict';

class Collection {
  constructor(name, model) {
    this.name = name;
    this.model = model;
  }

  read(id, model){
    let options = {};
    options.include = model;
    if (id) {
      return this.model.findOne({where: {id: id}}, options);
    } else {
      return this.model.findAll({}, options);
    }
  }

  create(json){
    return this.model.create(json);
  }

  async update(id, json){
    let row = await this.model.findOne({where: {id: id}});

    let updatedRow = await row.update(json);
  
    return updatedRow;
  }

  delete(id){
    return this.model.destroy({where: {id: id}});
  }

  createAssociation(type, model, options) {
    try {
      this.model[type](model, options);
    } catch (e) {
      console.log(e);
    }
  }

}

module.exports = Collection;