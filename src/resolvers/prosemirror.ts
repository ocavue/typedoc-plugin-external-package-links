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
  if (!packageName || !prosemirrorPackages.includes(packageName)) {
    return
  }

  const referencePath = declaration.symbolReference?.path?.reduce(
    (str, path) => str + path.navigation + path.path,
    '',
  )
  if (!referencePath) {
    return
  }


  const typeName = referencePath.replace(/^\./, '')


  // Internal types
  if (typeName === "DecorationGroup" ) {
    return undefined
  }




  // Following the logic from the ProseMirror website
  // https://github.com/ProseMirror/website/blob/6d86b17bc5b32e123955dcb2e24139578aa9c87b/src/build/ref.js#L35-L39
  if (typeName == 'OrderedMap')
    return 'https://github.com/marijnh/orderedmap#readme'
  if (typeName == 'DOMNode')
    return 'https://developer.mozilla.org/en-US/docs/Web/API/Node'
  if (typeName == 'DOMSelection')
    return 'https://developer.mozilla.org/en-US/docs/Web/API/Selection'

  return (
    'https://prosemirror.net/docs/ref/#' +
    packageName.replace(/^prosemirror-/, '') +
    '.' +
    typeName
  )
}

export { prosemirrorResolver }
