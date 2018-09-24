const mongoose = require('mongoose');
const { Schema } = mongoose;
const validator = require('validator');

const gunSchema = new Schema(
  {
    manufacturer: {
      type: String,
      trim: true,
      required: [true, 'Please complete this field...']
    },
    model: {
      type: String,
      trim: true,
      required: [true, 'Please complete this field...']
    },
    barrelLength: number,
    desc: {
      type: String,
      trim: true,
      required: [true, 'Please complete this field...']
    },
    price: {
      type: number,
      trim: true,
      validator(value) {
        return value >= 0;
      },
      message: "Sorry, you can't have a negative price."
    },
    category: {
      type: String,
      required: [true, 'Please select the category.'],
      enum: ['pistol', 'revolver', 'rifle'],
      default: 'pistol'
    },
    class: {
      type: [String],
      required: [true, 'Please select the class(es).'],
      enum: [
        'collectibles',
        'commemoratives',
        'engraved',
        'hand guns',
        'home protection',
        'hunting',
        'long guns',
        'military',
        'other'
      ],
      default: 'collectibles'
    },
    sold: {
      type: Boolean,
      default: false
    },
    imageURL: {
      type: String,
      required: true,
      default: '/assets/images/no-image.jpg'
    }
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model('Gun', gunSchema);
