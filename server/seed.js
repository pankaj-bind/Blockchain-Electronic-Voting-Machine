const mongoose = require('mongoose');
require('dotenv').config();

const Candidate = require('./models/Candidate');

mongoose.connect(process.env.MONGODB_URI);

const candidates = [
    { name: 'Pankaj Kumar Bind', votes: 0 },
    { name: 'Shravan Goswami', votes: 0 },
    { name: 'Ramlakhan Madheshiya', votes: 0 },
    { name: 'Jitendra Verma', votes: 0 },
    { name: 'Gaurav Kumar', votes: 0 },
];

async function seed() {
    await Candidate.deleteMany({});
    await Candidate.insertMany(candidates);
    console.log('Database seeded with candidates');
    mongoose.connection.close();
}

seed();