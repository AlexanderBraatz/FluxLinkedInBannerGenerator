import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import axios from 'axios';

// Load environment variables from .env file
dotenv.config();

const app = express();
const PORT = 5005;
const apiToken = process.env.REPLICATE_API_TOKEN; // Use process.env  instead of import.meta.env

app.use(cors()); // potential other way https://www.youtube.com/watch?v=PNtFSVU-YTI
app.use(express.json());

app.post('/api/predict', async (req, res) => {
	try {
		console.log('server try is runing');
		const response = await axios.post(
			'https://api.replicate.com/v1/predictions',
			req.body,
			{
				headers: {
					Authorization: `Bearer ${apiToken}`,
					'Content-Type': 'application/json'
				}
			}
		);
		res.json(response.data);
		console.log(`response.data in server.js ${response.data}`);
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
});

app.listen(PORT, () => {
	console.log(`Server running on port ${PORT}`);
});

// import express from 'express';
// import cors from 'cors';

// const app = express();
// const PORT = 5000;
// const apiToken = import.meta.env.VITE_REPLICATE_API_TOKEN;
// app.use(cors());
// app.use(express.json());

// app.post('/api/predict', async (req, res) => {
// 	try {
// 		const response = await axios.post(
// 			'https://api.replicate.com/v1/predictions',
// 			req.body,
// 			{
// 				headers: {
// 					Authorization: `Bearer ${apiToken}`,
// 					'Content-Type': 'application/json'
// 				}
// 			}
// 		);
// 		res.json(response.data);
// 	} catch (error) {
// 		res.status(500).json({ message: error.message });
// 	}
// });

// app.listen(PORT, () => {
// 	console.log(`Server running on port ${PORT}`);
// });
