// network.js
class Nest {
    constructor(name) {
      this.name = name;
      this.neighbors = [];
      this.state = {
        gossip: [],
        connections: new Map()
      };
    }
  
    addNeighbor(nest) {
      this.neighbors.push(nest);
      nest.neighbors.push(this);
    }
  }
  
  function request(from, to, type, content) {
    to.handleRequest(from, type, content);
  }
  
  Nest.prototype.handleRequest = function(source, type, content) {
    if (type === "gossip") {
      if (!this.state.gossip.includes(content)) {
        console.log(`${this.name} received gossip '${content}' from ${source.name}`);
        this.state.gossip.push(content);
        sendGossip(this, content, source);
      }
    } else if (type === "connections") {
      let {name, neighbors} = content;
      let connections = this.state.connections;
      if (JSON.stringify(connections.get(name)) !== JSON.stringify(neighbors)) {
        connections.set(name, neighbors);
        broadcastConnections(this, name, source);
      }
    } else if (type === "route") {
      routeRequest(this, content.target, content.type, content.content);
    } else if (type === "storage") {
      storage(this, content);
    }
  };
  
  function sendGossip(nest, message, exceptFor) {
    for (let neighbor of nest.neighbors) {
      if (neighbor === exceptFor) continue;
      request(nest, neighbor, "gossip", message);
    }
  }
  
  function broadcastConnections(nest, name, exceptFor) {
    for (let neighbor of nest.neighbors) {
      if (neighbor === exceptFor) continue;
      request(nest, neighbor, "connections", {
        name,
        neighbors: nest.state.connections.get(name)
      });
    }
  }
  
  function findRoute(from, to, connections) {
    let work = [{at: from, via: null}];
    for (let i = 0; i < work.length; i++) {
      let {at, via} = work[i];
      for (let next of connections.get(at) || []) {
        if (next === to) return via;
        if (!work.some(w => w.at === next)) {
          work.push({at: next, via: via || next});
        }
      }
    }
    return null;
  }
  
  function routeRequest(nest, target, type, content) {
    if (nest.neighbors.some(n => n.name === target)) {
      return request(nest, nest.neighbors.find(n => n.name === target), type, content);
    } else {
      let via = findRoute(nest.name, target, nest.state.connections);
      if (!via) throw new Error(`No route to ${target}`);
      return request(nest, nest.neighbors.find(n => n.name === via), "route", {target, type, content});
    }
  }
  
  function storage(nest, name) {
    // Simple mock storage functionality
    const data = {
      "chicks in 2024": "Nest A: 5\nNest B: 3\nNest C: 8"
    };
    return new Promise((resolve) => {
      setTimeout(() => resolve(data[name] || null), 100);
    });
  }
  
  async function findInStorage(nest, name) {
    let local = await storage(nest, name);
    if (local != null) return local;
    let sources = nest.neighbors.map(n => n.name).filter(n => n !== nest.name);
    while (sources.length > 0) {
      let source = sources[Math.floor(Math.random() * sources.length)];
      sources = sources.filter(n => n !== source);
      try {
        let found = await routeRequest(nest, source, "storage", name);
        if (found != null) return found;
      } catch (_) {}
    }
    throw new Error("Not found");
  }
  
  async function chicks(nest, year) {
    let lines = nest.neighbors.map(async name => {
      return name + ": " + await findInStorage(nest, `chicks in ${year}`);
    });
    return (await Promise.all(lines)).join("\n");
  }
  
  // Example usage
  const nestA = new Nest("Nest A");
  const nestB = new Nest("Nest B");
  const nestC = new Nest("Nest C");
  
  nestA.addNeighbor(nestB);
  nestB.addNeighbor(nestC);
  
  nestA.state.connections.set(nestA.name, [nestB.name]);
  nestB.state.connections.set(nestB.name, [nestA.name, nestC.name]);
  nestC.state.connections.set(nestC.name, [nestB.name]);
  
  // Sending a gossip message
  sendGossip(nestA, "New gossip!", null);
  
  // Finding chicks count
  chicks(nestA, 2024).then(result => console.log(result));
  