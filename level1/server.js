const express = require("express");

const app = express();
const PORT = 3000;

app.use(express.json()); // for request json data to server

let users = [
    { id: 1, name: "Dania", email: "dania@example.com" },
    { id: 2, name: "Sara", email: "sara@example.com" }
];

app.get('/', (req, res) => {
    res.send('hello');
});

app.get('/api/users', (req, res) => {
    res.status(200).json(users);
});

app.post('/api/users', (req, res) => {
    const newUser = {
        id: users.length + 1,
        name: req.body.name,
        email: req.body.email
    };

    users.push(newUser);

    res.status(201).json(newUser);
});

app.put('/api/users/:id', (req, res) => {
    const userId = parseInt(req.params.id);
    const user = users.find(user => user.id === userId);
    if (!user) {
        return res.status(404).json({ error: 'User not found' });
    }
    user.name = req.body.name;
    user.email = req.body.email;
    res.status(200).json(user);
});

app.delete('/api/users/:id', (req, res) => {
    const userId = parseInt(req.params.id);
    const userIndex = users.findIndex(user => user.id === userId);
    if (userIndex === -1) {
        return res.status(404).json({ error: 'User not found' });
    }
    users.splice(userIndex, 1);
    res.status(200).json({ message: "User deleted successfully" });
});


app.get('/api/users/:id', (req, res) => {
    const userId = parseInt(req.params.id);

    const user = users.find(user => user.id === userId);

    if (!user) {
        return res.status(404).json({
            error: 'User not found'
        });
    }

    res.status(200).json(user);
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

