// 1. Modules required for my application.---------------------------------------------------------------------------------------------------------------------------------

require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer')
const morgan = require('morgan');
const app = express();
const cors = require('cors')

const {
    usersControllers,
    commentsControllers,
} = require('./controllers')
const { validateAuthorization } = require('./middlewares');
const experiencesControllers = require('./controllers/experiencesControllers');
const { HTTP_PORT } = process.env;


app.use(bodyParser.json());
app.use(morgan('dev'));
app.use(cors());
app.use('/uploads', express.static(__dirname + '/uploads'))
// 2. Requests to my server: users, experiences,comments and reservations.--------------------------------------------------------------------------------------------

//-----------Users----------------------------------------------------------------------------------------------------------------------------------------------------
app.get('/api/users', usersControllers.getUsers);
app.post('/api/users/register', usersControllers.createUser);
app.post('/api/users/login', usersControllers.login);
app.put('/api/users/profile',  validateAuthorization, usersControllers.editProfile);

//-----------Bookings--------------------------------------------------------------------------------------------------------------------------------------------------
app.get('/api/comments/:usersId', validateAuthorization, commentsControllers.getReviewsByUserId);
app.post('/api/comments/:experiencesId', validateAuthorization, commentsControllers.createReview);
app.put('/api/comments/:commentsId', validateAuthorization, commentsControllers.modifyReview);

//----------Experiences------------------------------------------------------------------------------------------------------------------------------------------------
app.get('/api/experiences', experiencesControllers.getExperiences);
app.post('/api/experiences/experiences', experiencesControllers.Experiences);
app.post('/api/experiences/id', experiencesControllers.Id);

//----------Reservations------------------------------------------------------------------------------------------------------------------------------------------------






//------------Email-----------------------------------------------------------------------------------------------------------------------------------------------------


app.post('/send-email', (req, res) => {
    console.log('Email enviado')
});
// 3. Calling my port.--------------------------------------------------------------------------------------------------------------------------------------------------

app.listen(HTTP_PORT, () => console.log(`Listening at the port ${HTTP_PORT}`));