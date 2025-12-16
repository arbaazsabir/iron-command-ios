import { Vector3 } from 'three';

export interface PathNode {
  x: number;
  z: number;
  g: number;
  h: number;
  f: number;
  parent: PathNode | null;
}

export class AStarPathfinder {
  private gridSize: number;
  private cellSize: number;
  private obstacles: Set<string>;

  constructor(gridSize: number = 100, cellSize: number = 1) {
    this.gridSize = gridSize;
    this.cellSize = cellSize;
    this.obstacles = new Set();
  }

  private getKey(x: number, z: number): string {
    return `${Math.floor(x)},${Math.floor(z)}`;
  }

  addObstacle(x: number, z: number, radius: number = 1) {
    const cells = Math.ceil(radius / this.cellSize);
    for (let dx = -cells; dx <= cells; dx++) {
      for (let dz = -cells; dz <= cells; dz++) {
        this.obstacles.add(this.getKey(x + dx, z + dz));
      }
    }
  }

  private heuristic(a: PathNode, b: PathNode): number {
    return Math.abs(a.x - b.x) + Math.abs(a.z - b.z);
  }

  private getNeighbors(node: PathNode): PathNode[] {
    const neighbors: PathNode[] = [];
    const directions = [
      { x: 0, z: 1 }, { x: 1, z: 0 }, { x: 0, z: -1 }, { x: -1, z: 0 },
      { x: 1, z: 1 }, { x: 1, z: -1 }, { x: -1, z: 1 }, { x: -1, z: -1 },
    ];

    for (const dir of directions) {
      const newX = node.x + dir.x;
      const newZ = node.z + dir.z;

      if (newX >= 0 && newX < this.gridSize && newZ >= 0 && newZ < this.gridSize &&
          !this.obstacles.has(this.getKey(newX, newZ))) {
        neighbors.push({ x: newX, z: newZ, g: 0, h: 0, f: 0, parent: null });
      }
    }
    return neighbors;
  }

  findPath(start: Vector3, goal: Vector3): Vector3[] {
    const startNode: PathNode = {
      x: Math.floor(start.x), z: Math.floor(start.z), g: 0, h: 0, f: 0, parent: null
    };
    const goalNode: PathNode = {
      x: Math.floor(goal.x), z: Math.floor(goal.z), g: 0, h: 0, f: 0, parent: null
    };

    const openSet: PathNode[] = [startNode];
    const closedSet = new Set<string>();
    startNode.h = this.heuristic(startNode, goalNode);
    startNode.f = startNode.h;

    let iterations = 0;
    while (openSet.length > 0 && iterations < 1000) {
      iterations++;
      openSet.sort((a, b) => a.f - b.f);
      const current = openSet.shift()!;

      if (current.x === goalNode.x && current.z === goalNode.z) {
        const path: Vector3[] = [];
        let node: PathNode | null = current;
        while (node) {
          path.unshift(new Vector3(node.x, 0, node.z));
          node = node.parent;
        }
        return path;
      }

      closedSet.add(this.getKey(current.x, current.z));

      for (const neighbor of this.getNeighbors(current)) {
        const neighborKey = this.getKey(neighbor.x, neighbor.z);
        if (closedSet.has(neighborKey)) continue;

        const isDiagonal = Math.abs(neighbor.x - current.x) === 1 && Math.abs(neighbor.z - current.z) === 1;
        const tentativeG = current.g + (isDiagonal ? 1.414 : 1);

        const existingNode = openSet.find((n) => n.x === neighbor.x && n.z === neighbor.z);
        if (!existingNode) {
          neighbor.g = tentativeG;
          neighbor.h = this.heuristic(neighbor, goalNode);
          neighbor.f = neighbor.g + neighbor.h;
          neighbor.parent = current;
          openSet.push(neighbor);
        } else if (tentativeG < existingNode.g) {
          existingNode.g = tentativeG;
          existingNode.f = existingNode.g + existingNode.h;
          existingNode.parent = current;
        }
      }
    }
    return [];
  }
}

export const pathfinder = new AStarPathfinder(100, 1);
