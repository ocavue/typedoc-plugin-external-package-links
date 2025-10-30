import type { ExternalSymbolResolver } from 'typedoc'

const prosemirrorPackages = [
  'prosemirror-state',
  'prosemirror-view',
  'prosemirror-model',
  'prosemirror-transform',
  'prosemirror-commands',
  'prosemirror-history',
  'prosemirror-collab',
  'prosemirror-keymap',
  'prosemirror-inputrules',
  'prosemirror-gapcursor',
  'prosemirror-schema-basic',
  'prosemirror-schema-list',
]

const prosemirrorResolver: ExternalSymbolResolver = (declaration) => {
  const packageName = declaration.moduleSource
  if (!packageName || !prosemirrorPackages.includes(packageName)) return

  const referencePath = declaration.symbolReference?.path?.reduce(
    (str, path) => str + path.navigation + path.path,
    '',
  )
  if (!referencePath) return

  return (
    'https://prosemirror.net/docs/ref/#' +
    packageName.replace(/^prosemirror-/, '') +
    referencePath
  )
}

export { prosemirrorResolver }
