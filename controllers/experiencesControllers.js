// 1. Require the database.------------------------------------------------------------------------------------------------------------------------------------------
const { database } = require('../structure');


// 2. Look for all experiences in the database.----------------------------------------------------------------------------------------------------------------------
async function getExperiences(req, res) {
    try {
        const [experiences] = await database.pool.query('SELECT * FROM experiences');
        res.send(experiences);
    } catch (err) {
        res.status(500);
        res.send({ error: err.message });
    }
}


// 3. Showings.---------------------------------------------------------------------------------------------------------------------

async function Experiences(req, res) {
    try {
        const [experiences] = await database.pool.query('SELECT id, name, description, price, city, occupied_places, image FROM experiences');
        res.send(experiences);
    } catch (err) {
        res.status(500);
        res.send({ error: err.message });
    }
}



// 4. Search Id Experiences..-------------------------------------------------------------------------------------------------------------

async function Id(req, res) {
    try {
        const [Id] = await database.pool.query('SELECT id FROM experiences');
        res.send(Id);
    } catch (err) {
        res.status(500);
        res.send({ error: err.message });
    }
}


module.exports = {
    getExperiences,
    Experiences,
    Id

}