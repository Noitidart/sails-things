module.exports = {


  friendlyName: 'View things',


  description: 'Display "Things" page.',


  exits: {

    success: {
      viewTemplatePath: 'pages/things/things'
    }

  },


  fn: async function () {

    // Respond with view.

    const things = await Thing.find({});

    return {
      things
    };

  }


};
