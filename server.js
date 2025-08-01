const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());

const internData = {
  name: "Hansika Mahajan",
  referralCode: "hansika2025",
  donationsRaised: 12000
};

app.get('/api/intern', (req, res) => {
  res.json(internData);
});

app.get('/api/leaderboard', (req, res) => {
  res.json([
    { name: "Hansika", donations: 12000 },
    { name: "Aryan", donations: 9500 },
    { name: "Ishita", donations: 8700 }
  ]);
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));