import type { Application } from 'typedoc'

import { prosemirrorResolver } from './resolvers/prosemirror'

function load(app: Application) {
  app.converter.addUnknownSymbolResolver(prosemirrorResolver)
}

export { load }
