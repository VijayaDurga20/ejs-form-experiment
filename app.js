const express = require('express');

const app = express();
const PORT = 3000;

// Use EJS as the template engine
app.set('view engine', 'ejs');

// Parse form data
app.use(express.urlencoded({ extended: true }));

// Static user data
const users = [
    {
        name: 'John Doe',
        email: 'john@example.com',
        age: 25
    },
    {
        name: 'Jane Smith',
        email: 'jane@example.com',
        age: 30
    }
];

// Part (a): Display users
app.get('/users', (req, res) => {
    res.render('users', {
        users: users,
        title: 'User List'
    });
});

// Part (b): Show registration form
app.get('/register', (req, res) => {
    res.render('register', {
        error: ''
    });
});

// Process registration form
app.post('/register', (req, res) => {
    const { name, email, age } = req.body;

    // Check if all fields are filled
    if (!name || !email || !age) {
        return res.render('register', {
            error: 'All fields are required.'
        });
    }

    // Display submitted data
    res.render('success', {
        name: name,
        email: email,
        age: age
    });
});

// Start server
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});