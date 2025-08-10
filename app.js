const express = require('express');
const cors = require('cors');
const goatsRouter = require('./routes/goats');
const financialsRouter = require('./routes/financials');
const feedsRouter = require('./routes/feeds');
const medicationsRouter = require('./routes/medications');
const sequelize = require('./config/db'); // Import sequelize for sync

const app = express();
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/goats', goatsRouter);
app.use('/api/financials', financialsRouter);
app.use('/api/feeds', feedsRouter);
app.use('/api/medications', medicationsRouter);

// Sync database and start server
const PORT = 5000;
sequelize.sync({ alter: true }) // Use alter: true for development only
  .then(() => {
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  })
  .catch(err => console.error('Database sync failed:', err));