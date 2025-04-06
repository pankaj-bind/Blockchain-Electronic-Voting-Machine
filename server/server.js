const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const { Web3 } = require('web3');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGODB_URI);

const Candidate = require('./models/Candidate');
const web3 = new Web3('http://127.0.0.1:8545');

app.get('/candidates', async (req, res) => {
    try {
        const candidates = await Candidate.find();
        res.json(candidates);
    } catch (err) {
        console.error('Error fetching candidates:', err);
        res.status(500).send('Server error');
    }
});

app.post('/vote', async (req, res) => {
    try {
        const { candidateName } = req.body;
        if (!candidateName) {
            return res.status(400).send('Candidate name is required');
        }
        const result = await Candidate.updateOne(
            { name: candidateName },
            { $inc: { votes: 1 } }
        );
        if (result.matchedCount === 0) {
            return res.status(404).send('Candidate not found');
        }
        console.log(`Vote recorded for ${candidateName}`);
        res.send('Vote recorded');
    } catch (err) {
        console.error('Error recording vote:', err);
        res.status(500).send('Server error');
    }
});

app.listen(process.env.PORT, () => console.log(`Server running on port ${process.env.PORT}`));