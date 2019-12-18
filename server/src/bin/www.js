import app from '../server';
import router from '../routes/index';
import Database from '../database';

Database.connect();
app.use('/api', router);
const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`App listening on port: ${port}`));
