**example**

***

# example

## Type Aliases

### ViewMutationRecord

> **ViewMutationRecord** = `MutationRecord` \| \{ `target`: [`DOMNode`](https://prosemirror.net/docs/ref/#view.DOMNode); `type`: `"selection"`; \}

A ViewMutationRecord represents a DOM
[mutation](https://developer.mozilla.org/en-US/docs/Web/API/MutationObserver)
or a selection change happens within the view. When the change is
a selection change, the record will have a `type` property of
`"selection"` (which doesn't occur for native mutation records).

## Variables

### var1

> `const` **var1**: [`Attrs`](https://prosemirror.net/docs/ref/#model.Attrs)
