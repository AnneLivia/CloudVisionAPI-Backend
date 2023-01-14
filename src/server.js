import dotenv from 'dotenv';
import app from './index.js';

dotenv.config();
const PORT = process.env.PORT || 4500;

app.listen(PORT, () => {
  console.log(`Server started at port ${PORT}`);
});
