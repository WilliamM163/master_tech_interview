/* 
    We can implement graphs in 3 main ways
    1) Edge list
        - Each entry shows a connection between two nodes
        - For example [0, 2] shows that node 0 and node 2 share an edge
    2) Adjacent List
        - Each index is a node, and in each index contains an array which
          contains nodes connected to that node
        - E.G [[1], [0]] shows node 0 is connected to node 1 and vice versa
    3) Adjacent Matrix
        - Each index is a node, at each index is an array showing connections
          between nodes
        - E.G.
        [
            [0, 0, 1, 0],   // node 0 is connect to node 2
            [0, 0, 1, 1],   // node 1 is connected to node 2 and 3
            [1, 1, 0, 0],   // node 2 is connected to node 0 and 1
            [0, 1, 1, 0]    // node 3 is connected to node 1 and 2
        ]
*/

class Graph {
    constructor() {
        this.numberOfNodes = 0;
        this.adjacentList = {};
    }
    addVertex(node) {
        if (this.adjacentList[node]) {
            return
        }
        this.adjacentList[node] = []
        this.numberOfNodes++
    }

    addEdge(node1, node2) {
        // Undirected Graph
        if (!this.adjacentList[node1] || !this.adjacentList[node2]) { return }
        if (!this.adjacentList[node1].includes(node2)) { this.adjacentList[node1].push(node2) }
        if (!this.adjacentList[node2].includes(node1)) { this.adjacentList[node2].push(node1) };
    }
    showConnections() {
        const allNodes = Object.keys(this.adjacentList);
        for (let node of allNodes) {
            let nodeConnections = this.adjacentList[node];
            let connections = "";
            let vertex;
            for (vertex of nodeConnections) {
                connections += vertex + " ";
            }
            console.log(node + "-->" + connections);
        }
    }
}

const myGraph = new Graph();
myGraph.addVertex("0");
myGraph.addVertex("1");
myGraph.addVertex("2");
myGraph.addVertex("3");
myGraph.addVertex("4");
myGraph.addVertex("5");
myGraph.addVertex("6");
myGraph.addEdge("3", "1");
myGraph.addEdge("3", "4");
myGraph.addEdge("4", "2");
myGraph.addEdge("4", "5");
myGraph.addEdge("1", "2");
myGraph.addEdge("1", "0");
myGraph.addEdge("0", "2");
myGraph.addEdge("6", "5");

myGraph.showConnections();
//Answer:
// 0-->1 2
// 1-->3 2 0
// 2-->4 1 0
// 3-->1 4
// 4-->3 2 5
// 5-->4 6
// 6-->5