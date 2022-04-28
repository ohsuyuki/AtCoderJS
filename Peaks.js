const input = require("fs").readFileSync("/dev/stdin", "utf8")
const lines = input.split('\n')
const [N, M] = lines[0].split(' ').map(Number)
const H = lines[1].split(' ').map(Number)

// const map = Array(N + 1).fill(null).map(_ => [])
const map = Array(N).fill(null).map(_ => [])

for (let i = 0; i < M; i++) {
    const [a, b] = lines[i + 2].split(' ').map(Number)
    map[a - 1].push(H[b - 1])
    map[b - 1].push(H[a - 1])
}

let count = 0
for (let i = 0; i < N; i++) {
    if (H[i] > Math.max(...map[i])) {
        count++
    }
}

console.log(count)