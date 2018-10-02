const Gun = require('mongoose').model('Gun');

module.exports = {
  index(request, response) {
    Gun.find({})
      .then(guns => response.json(guns))
      .catch(console.log);
  },

  // create(request, response) {
  //   console.log('gun-controller --> adding gun to database');
  //   Gun.create(request.body)
  //     .then(gun => {
  //       console.log('gun-controller --> gun successfully created', gun);
  //       response.json(gun);
  //     })
  //     .catch(error => {
  //       console.log(error);
  //       response
  //         .status(403)
  //         .json(
  //           Object.keys(error.errors).map(key => error.errors[key].message)
  //         );
  //     });
  // },

  show(request, response) {
    console.log('gun-controller --> getting one gun from database');
    Gun.findById(request.params.gunID)
      .then(gun => response.json(gun))
      .catch(console.log);
  }

  // update(request, response) {
  //   console.log('gun-controller --> updating gun in database');
  //   Gun.findByIdAndUpdate(request.params.gunID, request.body, {
  //     new: true
  //   })
  //     .then(gun => response.json(gun))
  //     .catch(console.log);
  // },

  //   destroy(request, response) {
  //     console.log('gun-controller --> deleting gun from database');
  //     Gun.findByIdAndRemove(request.params.gunID)
  //       .then(gun => response.json(gun))
  //       .catch(console.log);
  //   }
};
