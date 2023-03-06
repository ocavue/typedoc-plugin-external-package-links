# typedoc-plugin-external-package-links

[![NPM version](https://img.shields.io/npm/v/typedoc-plugin-external-package-links?color=a1b858&label=)](https://www.npmjs.com/package/typedoc-plugin-external-package-links)

A [TypeDoc](https://typedoc.org/) plugin to add link mappings to external packages.

## Usage

Install `typedoc-plugin-external-package-links`

```bash
npm install -D typedoc-plugin-external-package-links
```

Add `typedoc-plugin-external-package-links` in the `typedoc.json`. For example:

```json
{
  // typedoc.json
  "plugin": ["typedoc-plugin-external-package-links"]
}
```

## Supported packages

- [ProseMirror](https://prosemirror.net/docs/ref/)

Contribute pull requests to add more supported packages!

## See also

- TypeDocs' [externalsymbollinkmappings](https://typedoc.org/guides/options/#externalsymbollinkmappings) option
- [typedoc-plugin-mdn-links](https://www.npmjs.com/package/typedoc-plugin-mdn-links)

## License

MIT
