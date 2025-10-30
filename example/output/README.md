**example**

***

# example

## Classes

### DecorationSet

A collection of [decorations](https://prosemirror.net/docs/ref/#view.Decoration), organized in such
a way that the drawing algorithm can efficiently use and compare
them. This is a persistent data structure—it is not modified,
updates create a new value.

#### Implements

- [`DecorationSource`](https://prosemirror.net/docs/ref/#view.DecorationSource)

#### Constructors

##### Constructor

> **new DecorationSet**(): [`DecorationSet`](#decorationset)

###### Returns

[`DecorationSet`](#decorationset)

#### Properties

##### empty

> `static` **empty**: [`DecorationSet`](#decorationset)

The empty set of decorations.

#### Methods

##### add()

> **add**(`doc`, `decorations`): [`DecorationSet`](#decorationset)

Add the given array of decorations to the ones in the set,
producing a new set. Consumes the `decorations` array. Needs
access to the current document to create the appropriate tree
structure.

###### Parameters

###### doc

[`Node`](https://prosemirror.net/docs/ref/#model.Node)

###### decorations

[`Decoration`](https://prosemirror.net/docs/ref/#view.Decoration)[]

###### Returns

[`DecorationSet`](#decorationset)

##### find()

> **find**(`start?`, `end?`, `predicate?`): [`Decoration`](https://prosemirror.net/docs/ref/#view.Decoration)[]

Find all decorations in this set which touch the given range
(including decorations that start or end directly at the
boundaries) and match the given predicate on their spec. When
`start` and `end` are omitted, all decorations in the set are
considered. When `predicate` isn't given, all decorations are
assumed to match.

###### Parameters

###### start?

`number`

###### end?

`number`

###### predicate?

(`spec`) => `boolean`

###### Returns

[`Decoration`](https://prosemirror.net/docs/ref/#view.Decoration)[]

##### forChild()

> **forChild**(`offset`, `node`): [`DecorationSet`](#decorationset) \| `DecorationGroup`

Extract a DecorationSource containing decorations for the given child node at the given offset.

###### Parameters

###### offset

`number`

###### node

[`Node`](https://prosemirror.net/docs/ref/#model.Node)

###### Returns

[`DecorationSet`](#decorationset) \| `DecorationGroup`

###### Implementation of

`DecorationSource.forChild`

##### forEachSet()

> **forEachSet**(`f`): `void`

Call the given function for each decoration set in the group.

###### Parameters

###### f

(`set`) => `void`

###### Returns

`void`

###### Implementation of

`DecorationSource.forEachSet`

##### map()

> **map**(`mapping`, `doc`, `options?`): [`DecorationSet`](#decorationset)

Map the set of decorations in response to a change in the
document.

###### Parameters

###### mapping

[`Mapping`](https://prosemirror.net/docs/ref/#transform.Mapping)

###### doc

[`Node`](https://prosemirror.net/docs/ref/#model.Node)

###### options?

###### onRemove?

(`decorationSpec`) => `void`

When given, this function will be called for each decoration
that gets dropped as a result of the mapping, passing the
spec of that decoration.

###### Returns

[`DecorationSet`](#decorationset)

###### Implementation of

`DecorationSource.map`

##### remove()

> **remove**(`decorations`): [`DecorationSet`](#decorationset)

Create a new set that contains the decorations in this set, minus
the ones in the given array.

###### Parameters

###### decorations

[`Decoration`](https://prosemirror.net/docs/ref/#view.Decoration)[]

###### Returns

[`DecorationSet`](#decorationset)

##### create()

> `static` **create**(`doc`, `decorations`): [`DecorationSet`](#decorationset)

Create a set of decorations, using the structure of the given
document. This will consume (modify) the `decorations` array, so
you must make a copy if you want need to preserve that.

###### Parameters

###### doc

[`Node`](https://prosemirror.net/docs/ref/#model.Node)

###### decorations

[`Decoration`](https://prosemirror.net/docs/ref/#view.Decoration)[]

###### Returns

[`DecorationSet`](#decorationset)

## Type Aliases

### ViewMutationRecord

> **ViewMutationRecord** = `MutationRecord` \| \{ `target`: [`DOMNode`](https://developer.mozilla.org/en-US/docs/Web/API/Node); `type`: `"selection"`; \}

A ViewMutationRecord represents a DOM
[mutation](https://developer.mozilla.org/en-US/docs/Web/API/MutationObserver)
or a selection change happens within the view. When the change is
a selection change, the record will have a `type` property of
`"selection"` (which doesn't occur for native mutation records).

## Variables

### var1

> `const` **var1**: [`Attrs`](https://prosemirror.net/docs/ref/#model.Attrs)
