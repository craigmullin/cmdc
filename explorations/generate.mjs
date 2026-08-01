import { mkdir, writeFile } from 'node:fs/promises'
import { fileURLToPath } from 'node:url'
import { dirname, join } from 'node:path'

const root = dirname(fileURLToPath(import.meta.url))
const marksDir = join(root, 'marks')
await mkdir(marksDir, { recursive: true })

const base = 'fill="none" stroke="#111111" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"'
const thin = 'fill="none" stroke="#111111" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"'
const solid = 'fill="#111111"'
const marks = []
const add = (category, name, body) => marks.push({ category, name, body })

// Typographic monograms: constructed strokes, not font-dependent text.
for (let i = 0; i < 10; i++) {
  const inset = 16 + i * 1.5
  const split = 54 + (i % 3) * 5
  const accent = i % 2 === 0
    ? `<path d="M${split} 28V92M${split} 28L78 60M${split} 28L30 92" ${thin}/>`
    : `<path d="M${split} 24V96M${split} 24L86 60M${split} 24L26 96" ${base}/>`
  add('Monogram', `constructed-cm-${String(i + 1).padStart(2, '0')}`, `<path d="M92 ${inset + 4}A42 42 0 1 0 92 ${104 - inset}" ${base}/>${accent}`)
}

// Printer's marks: registration, crop, and impression studies.
for (let i = 0; i < 10; i++) {
  const r = 18 + i * 2
  const diamond = 16 + i
  const body = i % 2 === 0
    ? `<circle cx="60" cy="60" r="${r}" ${thin}/><path d="M60 12V108M12 60H108" ${thin}/><circle cx="60" cy="60" r="5" ${solid}/>`
    : `<path d="M60 ${60-diamond}L${60+diamond} 60L60 ${60+diamond}L${60-diamond} 60Z" ${base}/><path d="M20 20H42M20 20V42M100 78V100H78" ${thin}/>`
  add('Printer mark', `impression-${String(i + 1).padStart(2, '0')}`, body)
}

// Editorial colophons: rules, brackets, folio structures.
for (let i = 0; i < 10; i++) {
  const y = 28 + i * 2
  const body = i % 3 === 0
    ? `<path d="M22 ${y}H98M22 ${y+18}H78M22 ${y+36}H90M22 ${y+54}H58" ${thin}/><rect x="84" y="${y+10}" width="14" height="14" ${solid}/>`
    : i % 3 === 1
      ? `<path d="M34 20H20V100H34M86 20H100V100H86" ${base}/><path d="M42 42H78M42 60H70M42 78H82" ${thin}/>`
      : `<rect x="22" y="22" width="76" height="76" ${thin}/><path d="M22 42H98M42 42V98M42 62H78" ${thin}/><circle cx="82" cy="78" r="8" ${solid}/>`
  add('Colophon', `folio-${String(i + 1).padStart(2, '0')}`, body)
}

// Geometric symbols: simple forms that survive reduction and embossing.
for (let i = 0; i < 10; i++) {
  const off = 15 + i * 2
  const body = i % 4 === 0
    ? `<circle cx="48" cy="60" r="28" ${base}/><rect x="58" y="32" width="28" height="56" ${thin}/>`
    : i % 4 === 1
      ? `<path d="M60 16L104 92H16Z" ${base}/><circle cx="60" cy="66" r="14" ${thin}/>`
      : i % 4 === 2
        ? `<rect x="${off}" y="${off}" width="${120-off*2}" height="${120-off*2}" transform="rotate(45 60 60)" ${base}/><path d="M30 60H90" ${thin}/>`
        : `<circle cx="60" cy="60" r="42" ${thin}/><path d="M18 60H102M60 18V102M30 30L90 90" ${base}/>`
  add('Geometric', `measure-${String(i + 1).padStart(2, '0')}`, body)
}

// Abstract maker's marks: restrained gestures and joined forms.
for (let i = 0; i < 10; i++) {
  const shift = i * 2
  const body = i % 5 === 0
    ? `<path d="M22 84C34 26 84 18 98 58C88 48 74 52 68 70C62 88 42 102 22 84Z" ${base}/>`
    : i % 5 === 1
      ? `<path d="M18 76C40 22 74 22 102 50C82 44 70 60 62 82C52 106 30 100 18 76Z" ${thin}/><circle cx="82" cy="38" r="7" ${solid}/>`
      : i % 5 === 2
        ? `<path d="M20 ${80-shift}Q60 ${16+shift} 100 ${80-shift}Q60 ${106-shift} 20 ${80-shift}Z" ${base}/><path d="M44 62H76" ${thin}/>`
        : i % 5 === 3
          ? `<path d="M26 28C70 18 96 42 88 72C82 96 48 104 30 82C18 68 24 48 48 42C66 38 76 50 72 62" ${base}/>`
          : `<path d="M20 92L48 24L68 72L100 28" ${base}/><circle cx="48" cy="24" r="5" ${solid}/><circle cx="68" cy="72" r="5" ${solid}/>`
  add('Abstract', `gesture-${String(i + 1).padStart(2, '0')}`, body)
}

const svgDocument = (mark) => `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120" role="img" aria-labelledby="title desc">
  <title id="title">${mark.name}</title>
  <desc id="desc">Monochrome ${mark.category.toLowerCase()} maker's-mark exploration.</desc>
  ${mark.body}
</svg>
`

await Promise.all(marks.map((mark, index) => {
  const number = String(index + 1).padStart(2, '0')
  return writeFile(join(marksDir, `${number}-${mark.name}.svg`), svgDocument(mark), 'utf8')
}))

const cols = 5
const cellW = 180
const cellH = 170
const sheetW = cols * cellW
const sheetH = 80 + Math.ceil(marks.length / cols) * cellH
const cells = marks.map((mark, index) => {
  const x = (index % cols) * cellW
  const y = 80 + Math.floor(index / cols) * cellH
  const number = String(index + 1).padStart(2, '0')
  return `<g transform="translate(${x} ${y})">
    <rect x="8" y="8" width="164" height="154" fill="#ffffff" stroke="#d8d8d3"/>
    <g transform="translate(38 20) scale(.86)">${mark.body}</g>
    <text x="18" y="145" fill="#111111" font-family="monospace" font-size="10">${number} · ${mark.category}</text>
  </g>`
}).join('\n')

const sheet = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${sheetW} ${sheetH}" role="img" aria-labelledby="sheet-title sheet-desc">
  <title id="sheet-title">Maker's mark explorations — Alpha 0.2</title>
  <desc id="sheet-desc">Contact sheet of 50 monochrome maker's-mark explorations in five categories.</desc>
  <rect width="${sheetW}" height="${sheetH}" fill="#f4f0e8"/>
  <text x="18" y="34" fill="#111111" font-family="Georgia, serif" font-size="22">Maker's mark explorations</text>
  <text x="18" y="56" fill="#5f5e58" font-family="monospace" font-size="10">ALPHA 0.2 · DISCOVERY, NOT SELECTION · 50 STUDIES</text>
  ${cells}
</svg>
`
await writeFile(join(root, 'contact-sheet.svg'), sheet, 'utf8')

const inventory = `# Maker's-mark explorations\n\nFifty monochrome vector studies generated for Alpha 0.2. These are discovery artifacts, not logo candidates or a final identity.\n\n- 01–10: constructed monograms\n- 11–20: printer's marks\n- 21–30: editorial colophons\n- 31–40: geometric symbols\n- 41–50: abstract maker's marks\n\nOpen \`contact-sheet.svg\` to review the complete set. Run \`node generate.mjs\` from this directory to regenerate the individual files and contact sheet.\n`
await writeFile(join(root, 'README.md'), inventory, 'utf8')

console.log(`Generated ${marks.length} SVG marks and contact-sheet.svg`)
