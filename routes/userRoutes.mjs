import express from 'express';

const router = express.Router();

// Mock database
const users = [
    { id: 1, name: "Zooland", role: "Admin" },
    { id: 2, name: "Ahmed", role: "Developer" }
];

// GET All Users
router.get('/', (req, res) => {
    res.json({ status: "success", count: users.length, data: users });
});

// GET Single User by ID (Dynamic Route)
router.get('/:id', (req, res) => {
    const userId = parseInt(req.params.id);
    const user = users.find(u => u.id === userId);

    if (!user) {
        return res.status(404).json({ status: "fail", message: "User nahi mila!" });
    }

    res.json({ status: "success", data: user });
});

export default router;