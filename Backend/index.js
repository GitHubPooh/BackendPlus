const express = require('express');
const db = require('./config/db');
const userRoutes = require('./routes/userRoutes');
<<<<<<< HEAD
const cors = require('cors');
const app = express();

app.use(cors());

=======

const app = express();
>>>>>>> 829c441f83ac041ad15eb6d843481ccd16bd007d
app.use(express.json());

// Connect to the database
db.connect(err => {
  if (err) {
    throw err;
  }
  console.log('MySQL Connected...');
});

// Use routes
app.use('/users', userRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
<<<<<<< HEAD

// app.post('/createUser', (req, res) => {
//   // Handle the request here
//   res.send('User created');
// });

// app.listen(3000, () => {
//   console.log('Server running on port 3000');
// });
=======
>>>>>>> 829c441f83ac041ad15eb6d843481ccd16bd007d
