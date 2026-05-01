import { createReadStream, existsSync, statSync } from 'node:fs'
import { createServer } from 'node:http'
import { extname, normalize, resolve } from 'node:path'

const root = process.cwd()
const port = Number(process.env.PORT) || 5173
const host = process.env.HOST || '127.0.0.1'

const mimeTypes = {
  '.css': 'text/css; charset=utf-8',
  '.html': 'text/html; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.mp3': 'audio/mpeg',
}

function resolveRequestPath(url) {
  const parsedUrl = new URL(url, `http://localhost:${port}`)
  const pathname = parsedUrl.pathname === '/' ? '/index.html' : parsedUrl.pathname
  const filePath = resolve(root, `.${normalize(pathname)}`)

  return filePath.startsWith(root) ? filePath : null
}

createServer((request, response) => {
  const filePath = resolveRequestPath(request.url)

  if (!filePath || !existsSync(filePath) || !statSync(filePath).isFile()) {
    response.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' })
    response.end('Not found')
    return
  }

  response.writeHead(200, {
    'Content-Type': mimeTypes[extname(filePath)] || 'application/octet-stream',
  })
  createReadStream(filePath).pipe(response)
}).listen(port, host, () => {
  console.log(`Hacky's Soundboard is running at http://${host}:${port}`)
})
