const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const skillSchema = new Schema({
    skill: {
        type: String,
        required: true
    },
    skillLevel: {
        type: Number,
        required: true
    }
});

const educationSchema = new Schema({
    start: {
        type: String,
        required: true
    },
    end: {
        type: String,
        required: true
    },
    institution: {
        type: String,
        required: true
    },
    degree: {
        type: String,
        required: true
    }
});

const experienceSchema = new Schema({
    start: {
        type: String,
        required: true
    },
    end: {
        type: String,
        required: true
    },
    organization: {
        type: String,
        required: true
    },
    designation: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    }
});

const socialMediaSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    url: {
        type: String,
        required: true
    }
});

const detailsSchema = new Schema({
    fullName: {
        type: String,
        required: true
    },
    publicEmail: {
        type: String,
        required: true,
        match: /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/
    },
    designation: {
        type: String
    },
    description: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    nationality: {
        type: String,
        required: true
    },
    website: {
        type: String
    },
    profSkills: {
        type: [skillSchema],
        required: true
    },
    addSkills: {
        type: [skillSchema]
    },
    education: {
        type: [educationSchema],
        required: true
    },
    experience: {
        type: [experienceSchema]
    },
    socialMedia: {
        type: [socialMediaSchema]
    }
});

module.exports = mongoose.model('Details', detailsSchema);