const directions = [
    [-1, 0],
    [0, -1],
    [1, 0],
    [0, 1]
]

function walk(
    maze: string[],
    seen: boolean[][],
    path: Point[],
    wall: string,
    current: Point,
    end: Point
): boolean {
    if (current.y < 0 || current.x < 0 || current.y >= maze.length || current.x >= maze[0].length) {
        return false;
    }
    if (maze[current.y][current.x] == wall) {
        return false;
    }
    if (current.x == end.x && current.y == end.y) {
        path.push(current)
        return true;
    }
    if (seen[current.y][current.x]) {
        return false;
    }

    seen[current.y][current.x] = true;

    path.push(current);

    for (let i = 0; i < directions.length; ++i) {
        const [x, y] = directions[i];
        if (walk(
            maze,
            seen,
            path,
            wall,
            { x: current.x + x, y: current.y + y },
            end
        )) {
            return true;
        }
    }

    path.pop();

    return false;
}

export default function solve(maze: string[], wall: string, start: Point, end: Point): Point[] {
    let path: Point[] = [];
    let seen: boolean[][] = maze.map(row =>
        row.split("").map(_item => false)
    )

    walk(maze, seen, path, wall, start, end);

    return path;
}
