// lazyGraph.js
const db = require('./mockDatabase');

class LazyNode {
    constructor(id) {
        this.id = id;
        this.edges = null; // Edges will be loaded lazily
    }

    async loadEdges() {
        if (this.edges === null) {
            console.log(`Loading edges for node ${this.id} from the database...`);
            this.edges = await db.getEdges(this.id);
        }
        return this.edges;
    }
}

class Graph {
    constructor() {
        this.nodes = {};
    }

    async addNode(id) {
        if (!this.nodes[id]) {
            const data = await db.getNode(id);
            if (data) {
                this.nodes[id] = new LazyNode(data.id);
            }
        }
    }

    getNode(id) {
        return this.nodes[id];
    }
}

module.exports = Graph;
