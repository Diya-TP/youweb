// Turns the inlined <script type="module"> into a classic script placed at the
// end of <body>, so dist/index.html runs even when double-clicked (file://).
import { readFileSync, writeFileSync } from 'node:fs'
const f = 'dist/index.html'
let html = readFileSync(f, 'utf8')
const re = /<script type="module"[^>]*>([\s\S]*?)<\/script>/
const m = html.match(re)
if (!m) throw new Error('inline module script not found')
html = html.replace(re, '')
html = html.replace('</body>', () => `<script>${m[1]}</script>\n</body>`)
writeFileSync(f, html)
console.log('postbuild: classic script moved to end of body')
