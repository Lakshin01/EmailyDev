const express = require('express');
const app = express();

app.get('/', (req,res) => {
    res.send({ bye:'brother' });
});

const PORT = process.env.PORT || 5000; // For heroku purposes

app.listen(PORT, () => `Server running on port ${PORT} 🔥`);
