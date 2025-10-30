import fs from 'node:fs/promises'

import { execa } from 'execa'
import { describe, expect, test } from 'vitest'

describe('Output links', async () => {
  await execa('pnpm run example', { shell: true })

  const output = await fs.readFile('example/output/README.md', 'utf-8')

  test('ProseMirror', () => {
    expect(output).toContain('https://prosemirror.net/docs/ref/#model.Attrs')
  })
})
