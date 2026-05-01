import {
  cpSync,
  existsSync,
  mkdirSync,
  rmSync,
} from 'node:fs'
import { join } from 'node:path'

const root = process.cwd()
const dist = join(root, 'dist')

if (existsSync(dist)) {
  rmSync(dist, { recursive: true, force: true })
}

mkdirSync(dist, { recursive: true })

for (const entry of ['index.html', 'src', 'public']) {
  cpSync(join(root, entry), join(dist, entry), { recursive: true })
}

console.log('Built static site in dist/')
