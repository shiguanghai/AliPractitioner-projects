import { Router, Request, Response } from "express";
import * as fs from "fs";
import * as path from "path";

const router: Router = Router();

const normalizedPath: string = path.join(__dirname);

let todos: { name: string, id: number, fav: boolean }[] = []
let counter = 1

fs.readdirSync(normalizedPath).forEach(file => {
    if (file.includes(".routes.") && !file.includes("index.")) {
        router.use("/", require(`./${file}`).router);
    }
});

router.get('/todo/list', (req, res) => {
    res.json({
        isOk: true,
        errMsg: '',
        data: todos,
    })
})

router.put('/todo', (req, res) => {
    const { name } = req.body
    todos.push({ name, id: counter++, fav: false })
    res.json({
        isOk: true,
    })
})

router.delete('/todo', (req, res) => {
    const { id } = req.body
    todos = todos.filter(x => x.id !== id)
    res.json({
        isOk: true,
    })
})

router.post('/todo/fav', (req, res) => {
    const { id } = req.body
    todos = todos.map(x => {
        if (x.id === id) {
            return ({ ...x, fav: !x.fav })
        } else {
            return x
        }
    })
    res.json({
        isOk: true,
    })
})

export default router;