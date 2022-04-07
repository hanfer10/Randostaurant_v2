const db = require('./backend/db/database');
const app = require('./backend');
const PORT = 8888;

db.sync()
  .then(() => {
    console.log('db synced');
    app.listen(PORT, () => console.log(`Movin and groovin on port ${PORT}`));
  });
