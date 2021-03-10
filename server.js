const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const passport = require('passport');
const cors = require('cors');
const path = require('path');
const morgan = require('morgan');


const app = express();
app.use(cors())

const port = process.env.PORT || 5000;
app.use(morgan('dev'))
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Routes
const users = require('./routes/users');
const branchs = require('./routes/branchs');
const staffs = require('./routes/staffs');
const countries = require('./routes/countries');
const states = require('./routes/states')
const cities = require('./routes/cities');
const patients = require('./routes/patients');
const patientTests = require('./routes/patientTests');
const guardians = require('./routes/guardians');
const referringPersons = require('./routes/referringPersons');
const referralCenters = require('./routes/referralCenters');
const marketingPersons = require('./routes/marketingPersons');
const departments = require('./routes/departments');
const categories = require('./routes/categories');
const samples = require('./routes/samples');
const expenses = require('./routes/expenses');
const inventories = require('./routes/inventories');
const branchInventories = require('./routes/branchInventories');
const tests = require('./routes/tests');
const products = require('./routes/products');
const reportTypes = require('./routes/reportTypes');


app.use('/uploads', express.static('./uploads'));
app.use(passport.initialize());

require('./middleware/passport')(passport);

//DB config
const db = require('./config/keys').mongoURI;

//MongoDB connect
mongoose
  .connect(db, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false })
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.log(err));


//use routes
app.use('/api/users', users);
app.use('/api/branchs', branchs);
app.use('/api/staffs', staffs);
app.use('/api/countries', countries);
app.use('/api/states', states);
app.use('/api/cities', cities);
app.use('/api/patients', patients);
app.use('/api/patientTests', patientTests);
app.use('/api/guardians', guardians);
app.use('/api/referringPersons', referringPersons);
app.use('/api/referralCenters', referralCenters);
app.use('/api/marketingPersons', marketingPersons);
app.use('/api/departments', departments);
app.use('/api/categories', categories);
app.use('/api/samples', samples);
app.use('/api/expenses', expenses);
app.use('/api/inventories', inventories);
app.use('/api/branchInventories', branchInventories);
app.use('/api/tests', tests);
app.use('/api/products', products);
app.use('/api/reportTypes', reportTypes);


if (process.env.NODE_ENV === 'production') {
  app.use(express.static("client/build"));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}


app.listen(port, () => {
  console.log('server is running on port: ' + port);
})
