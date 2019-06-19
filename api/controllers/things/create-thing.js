module.exports = {


  friendlyName: 'Create thing',


  description: '',


  inputs: {
    label: {
      type: 'string'
    }
  },


  exits: {
    redirect: {
      responseType: 'redirect'
    }
  },


  fn: async function (inputs) {

    await Thing.create({
      label: inputs.label
    });

    throw { redirect: sails.getUrlFor('things/view-things') };

  }


};
