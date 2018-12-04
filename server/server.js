const app = require('express')();
const port = process.env.PORT || 5000;
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const db = require('../config/keys').mongoURI;
const cors = require('cors');

//Connect to MongoDB
mongoose.connect(db, { useNewUrlParser: true })
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log(err));

//BodyParser middleware
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

//CORS middleware
app.use(cors({ origin: '*' }));

//Load routes
const message = require('../routes/message');

//Use routes
app.use('/message', message);

app.listen(port, () => console.log(`Server connected on port ${port}`));