// server.js
const express = require('express');
const Graph = require('./lazyGraph');
const app = express();
const port = 4000;

const graph = new Graph();

app.use(express.json());

// Load a node and its edges
app.get('/node/:id', async (req, res) => {
    const nodeId = parseInt(req.params.id);
    await graph.addNode(nodeId);
    const node = graph.getNode(nodeId);

    // Display the node’s info
    const edges = await node.loadEdges();
    res.json({ node: nodeId, edges });
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
