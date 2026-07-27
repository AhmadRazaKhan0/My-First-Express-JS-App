import express from 'express';

const router = express.Router();

let tasks = [
    { id: 1, title: "Express App Create Karna", completed: true },
    { id: 2, title: "Routes Test Karna", completed: false }
];

// GET All Tasks
router.get('/', (req, res) => {
    res.json({ status: "success", data: tasks });
});

// POST Create New Task
router.post('/', (req, res) => {
    const { title } = req.body;

    if (!title) {
        return res.status(400).json({ status: "fail", message: "Title dena zaroori hai!" });
    }

    const newTask = {
        id: tasks.length + 1,
        title,
        completed: false
    };

    tasks.push(newTask);
    res.status(201).json({ status: "success", message: "Task add ho gaya!", data: newTask });
});

export default router;