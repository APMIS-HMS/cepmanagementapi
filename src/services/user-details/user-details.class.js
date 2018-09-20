/* eslint-disable no-unused-vars */
const jsend = require('jsend');
const BatchLoader = require('@feathers-plus/batch-loader');
const { getResultsByKey, getUniqueKeys } = BatchLoader;
const { forEach } = require('p-iteration');

class Service {
  constructor (options) {
    this.options = options || {};
  }

  setup(app) {
    this.app = app;
  }

  async find (params) {
    return [];
  }

  async get (id, params) {
    const userService = this.app.service('users');
    const resourceService = this.app.service('roles');

    const rolesLoader = new BatchLoader(async keys =>{
      const result = await userService
                            .find(
                              { 
                                query: {
                                   userId: { 
                                        $in: getUniqueKeys(keys) 
                                    } 
                                  } 
                              }
                            );
                      return getResultsByKey(keys, result, role => role.userId, '[]');
    },
    {
      batch: true,
      cache: true
    }
    );

    const resourcesLoader = new BatchLoader(async keys => {
      const result = await resourceService
                            .find({
                              query:{
                                roleId: {
                                  $in:getUniqueKeys(keys)
                                }
                              }
                            });
                      return getResultsByKey(keys, result, resource => resource.roleId, '[]');
    },
    {
      batch: true,
      cache: true
    }
    );

    const userObj =  await userService
                        .get(id,{});
    
    userObj.roles = await rolesLoader.loadMany(userObj.rolesIds);

    async () => {
      if(!userObj.rolesIds) return null;
      await forEach(userObj.rolesIds, async (roleId) => {
        userObj.resources = await resourcesLoader.load(roleId);
      });

     };

     return jsend.success(userObj);

  }

  async create (data, params) {
    if (Array.isArray(data)) {
      return Promise.all(data.map(current => this.create(current, params)));
    }

    return data;
  }

  async update (id, data, params) {
    return data;
  }

  async patch (id, data, params) {
    return data;
  }

  async remove (id, params) {
    return { id };
  }
}

module.exports = function (options) {
  return new Service(options);
};

module.exports.Service = Service;
