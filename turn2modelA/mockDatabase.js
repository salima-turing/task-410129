// mockDatabase.js
const mockData = {
    nodes: {
        1: { id: 1, name: "Node 1" },
        2: { id: 2, name: "Node 2" },
        3: { id: 3, name: "Node 3" },
    },
    edges: {
        1: [2, 3],  // Node 1 connects to Node 2 and Node 3
        2: [1, 3],  // Node 2 connects to Node 1 and Node 3
        3: [1]      // Node 3 connects to Node 1
    }
};

exports.getNode = (id) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(mockData.nodes[id] || null);
        }, 100);  // Simulate a delay for fetching from a database
    });
};

exports.getEdges = (id) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(mockData.edges[id] || []);
        }, 100); // Simulate a delay for fetching from a database
    });
};
