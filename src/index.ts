import express from 'express'
const app = express();
const port = 3000;
app.use(express.json());

const db = {
    users: [
        {
            id: 1,
            name: 'John Doe'
        },
        {
            id: 2,
            name: 'Jane Doe'
        },
    ],
    posts: [
        {
            id: 1,
            title: 'Hello World',
            body: 'This is my first post'
        },
        {
            id: 2,
            title: 'Hello World 2',
            body: 'This is my second post'
        },
    ],
}

app.get("/posts", (req, res) => {
    let foundedPosts = db.posts;

    if (req.query.title) {
        foundedPosts = foundedPosts.filter(post => post.title.toLowerCase().includes((req.query.title as string).toLowerCase()));
    }

    if (req.query.body) {
        foundedPosts = foundedPosts.filter(post => post.body.toLowerCase().includes((req.query.body as string).toLowerCase()));
    }

    res.json(foundedPosts)
});

app.get('/posts/:id', (req, res) => {
    const foundedPost = db.posts.find(post => post.id === +req.params.id);

    if (!foundedPost) {
        return res.status(404).json({ message: 'Post not found' });
    }

    res.json(foundedPost);
});

app.post('/posts', (req, res) => {
    if (!req.body.title) {
        return res.status(400).json({ message: 'Title is required' });
    }

    const createdPost = {
        id: +new Date(),
        title: req.body.title,
        body: req.body.body || 'unknown'
    }

    db.posts.push(createdPost);

    res.status(201).json(createdPost)
})

app.patch('/posts/:id', (req, res) => {
    const foundedPostIndex = db.posts.findIndex(post => post.id === +req.params.id);

    if (foundedPostIndex === -1) {
        return res.status(404).json({ message: 'Post not found' });
    }

    db.posts[foundedPostIndex] = {
        ...db.posts[foundedPostIndex],
        ...req.body
    }

    res.json(db.posts[foundedPostIndex]);
});

app.delete('/posts/:id', (req, res) => {
    const foundedPost = db.posts.find(post => post.id === +req.params.id);

    if (!foundedPost) {
        return res.status(404).json({ message: 'Post not found' });
    }

    db.posts = db.posts.filter(post => post.id !== +req.params.id);

    res.sendStatus(204);
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
