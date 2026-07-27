import express from 'express';
import { requestLogger } from './middleware/logger.mjs';
import userRoutes from './routes/userRoutes.mjs';
import taskRoutes from './routes/taskRoutes.mjs';

const app = express();
const PORT = process.env.PORT || 5002;

app.use(express.json());

app.use(requestLogger);

app.get('/', (req, res) => {
    res.json({ message: "Welcome to Task & User Management API 🚀" });
});

app.use('/api/users', userRoutes);
app.use('/api/tasks', taskRoutes);

app.use((req, res) => {
    res.status(404).json({ status: "error", message: "Route nahi mila (404 Not Found)" });
});

// Server Start
app.listen(PORT, () => {
    console.log(`🚀 Server running with Nodemon at http://localhost:${PORT}`);
});