const mongoose = require("mongoose");

const jobsSchema = mongoose.Schema({
  id: {
    type: Number,
    required: false,
    default: ""
  },
  column: {
    type: Number,
    required: true,
    default: 1
  },
  color: {
    type: String,
    required: true,
    default: "blue"
  },
  title: {
    type: String,
    required: true,
    default: ""
  },
  sub_title: {
    type: String,
    required: true,
    default: ""
  },
  date_added: {
    type: String,
    required: true,
    default: new Date().toDateString()
  },
  image: {
    type: String,
    required: false,
    default: ""
  },
  location: {
    type: String,
    required: false,
    default: ""
  },
  salary: {
    type: Number,
    required: false,
    default: 0
  },
  post_url: {
    type: String,
    required: false,
    default: ""
  },
  deadline: {
    type: String,
    required: false,
    default: ""
  },
  applied: {
    type: Number,
    required: false,
    default: 0
  },
  interview1: {
    type: String,
    required: false,
    default: ""
  },
  interview2: {
    type: String,
    required: false,
    default: ""
  },
  offer: {
    type: String,
    required: false,
    default: ""
  },
  description: {
    type: String,
    required: false,
    default: ""
  },
  notes: {
    type: String,
    required: false,
    default: ""
  },
  company_info: {
    title: {
      type: String,
      required: false,
      default: ""
    },
    description: {
      type: String,
      required: false,
      default: ""
    },
    website: {
      type: String,
      required: false,
      default: ""
    },
    founded: {
      type: Number,
      required: false,
      default: ""
    },
    type: {
      type: String,
      required: false,
      default: ""
    },
    country: {
      type: String,
      required: false,
      default: ""
    },
    industry: {
      type: String,
      required: false,
      default: ""
    },
    alexa_global: {
      type: String,
      required: false,
      default: ""
    },
    alexa_usa: {
      type: String,
      required: false,
      default: ""
    }
  },
  todos: [
    {
      id: {
        type: Number,
        required: false
      },
      title: {
        type: String,
        required: true
      },
      position: {
        type: String,
        required: false,
        default: "+ add position"
      },
      image: {
        type: String,
        required: false
      },
      active: {
        type: Boolean,
        required: false,
        default: true
      }
    }
  ]
  
  
  
  
  
  
  // id: {
  //   type: Number,
  //   required: true
  // },
  // company: {
  //   type: String,
  //   required: true
  // },
  // title: {
  //   type: String,
  //   required: true
  // },
  // columnId: {
  //   type: String,
  //   required: true
  // },
  // location: {
  //   type: String,
  //   required: false
  // },
  // salary: {
  //   type: String,
  //   required: false
  // },
  // postURL: {
  //   type: String,
  //   required: false
  // },
  // date: {
  //   type: String,
  //   required: true,
  //   default: new Date().toDateString()
  // }
});

var model = mongoose.model("jobs", jobsSchema);

module.exports = model;
