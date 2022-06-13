[Quasar extension](../index.md) / [Exports](../modules.md) / [components/Field.extras](../modules/components_Field_extras.md) / [Field](../modules/components_Field_extras.Field.md) / Slots

# Interface: Slots<T\>

[components/Field.extras](../modules/components_Field_extras.md).[Field](../modules/components_Field_extras.Field.md).Slots

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `unknown` |

## Hierarchy

- [`ParentSlots`](components_Field_extras.Field.ParentSlots.md)

- [`OwnSlots`](components_Field_extras.Field.OwnSlots.md)<`T`\>

  ↳ **`Slots`**

  ↳↳ [`ParentSlots`](components_DatetimePicker_extras.DatetimePicker.ParentSlots.md)

  ↳↳ [`ParentSlots`](components_Input_extras.Input.ParentSlots.md)

  ↳↳ [`ParentSlots`](components_NumericInput_extras.NumericInput.ParentSlots.md)

## Table of contents

### Methods

- [after](components_Field_extras.Field.Slots.md#after)
- [append](components_Field_extras.Field.Slots.md#append)
- [before](components_Field_extras.Field.Slots.md#before)
- [control](components_Field_extras.Field.Slots.md#control)
- [counter](components_Field_extras.Field.Slots.md#counter)
- [default](components_Field_extras.Field.Slots.md#default)
- [error](components_Field_extras.Field.Slots.md#error)
- [hint](components_Field_extras.Field.Slots.md#hint)
- [label](components_Field_extras.Field.Slots.md#label)
- [loading](components_Field_extras.Field.Slots.md#loading)
- [prepend](components_Field_extras.Field.Slots.md#prepend)
- [rawControl](components_Field_extras.Field.Slots.md#rawcontrol)

## Methods

### after

▸ **after**(): `VNode`<`RendererNode`, `RendererElement`, { `[key: string]`: `any`;  }\>[]

Append outer field; Suggestions: QIcon, QBtn

#### Returns

`VNode`<`RendererNode`, `RendererElement`, { `[key: string]`: `any`;  }\>[]

#### Inherited from

[ParentSlots](components_Field_extras.Field.ParentSlots.md).[after](components_Field_extras.Field.ParentSlots.md#after)

___

### append

▸ **append**(): `VNode`<`RendererNode`, `RendererElement`, { `[key: string]`: `any`;  }\>[]

Append to inner field; Suggestions: QIcon, QBtn

#### Returns

`VNode`<`RendererNode`, `RendererElement`, { `[key: string]`: `any`;  }\>[]

#### Inherited from

[ParentSlots](components_Field_extras.Field.ParentSlots.md).[append](components_Field_extras.Field.ParentSlots.md#append)

___

### before

▸ **before**(): `VNode`<`RendererNode`, `RendererElement`, { `[key: string]`: `any`;  }\>[]

Prepend outer field; Suggestions: QIcon, QBtn

#### Returns

`VNode`<`RendererNode`, `RendererElement`, { `[key: string]`: `any`;  }\>[]

#### Inherited from

[ParentSlots](components_Field_extras.Field.ParentSlots.md).[before](components_Field_extras.Field.ParentSlots.md#before)

___

### control

▸ `Readonly` **control**(`scope`): [`VNodes`](../modules/components_api_misc.md#vnodes)

Control slot.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `scope` | [`ControlSlotData`](components_Field_extras.Field.ControlSlotData.md)<`T`\> | Scope. |

#### Returns

[`VNodes`](../modules/components_api_misc.md#vnodes)

Nodes.

#### Inherited from

[OwnSlots](components_Field_extras.Field.OwnSlots.md).[control](components_Field_extras.Field.OwnSlots.md#control)

___

### counter

▸ **counter**(): `VNode`<`RendererNode`, `RendererElement`, { `[key: string]`: `any`;  }\>[]

Slot for counter text; Enabled only if 'bottom-slots' prop is used; Suggestion: <div>

#### Returns

`VNode`<`RendererNode`, `RendererElement`, { `[key: string]`: `any`;  }\>[]

#### Inherited from

[ParentSlots](components_Field_extras.Field.ParentSlots.md).[counter](components_Field_extras.Field.ParentSlots.md#counter)

___

### default

▸ **default**(): `VNode`<`RendererNode`, `RendererElement`, { `[key: string]`: `any`;  }\>[]

Field main content

#### Returns

`VNode`<`RendererNode`, `RendererElement`, { `[key: string]`: `any`;  }\>[]

#### Inherited from

[ParentSlots](components_Field_extras.Field.ParentSlots.md).[default](components_Field_extras.Field.ParentSlots.md#default)

___

### error

▸ **error**(): `VNode`<`RendererNode`, `RendererElement`, { `[key: string]`: `any`;  }\>[]

Slot for errors; Enabled only if 'bottom-slots' prop is used; Suggestion: <div>

#### Returns

`VNode`<`RendererNode`, `RendererElement`, { `[key: string]`: `any`;  }\>[]

#### Inherited from

[ParentSlots](components_Field_extras.Field.ParentSlots.md).[error](components_Field_extras.Field.ParentSlots.md#error)

___

### hint

▸ **hint**(): `VNode`<`RendererNode`, `RendererElement`, { `[key: string]`: `any`;  }\>[]

Slot for hint text; Enabled only if 'bottom-slots' prop is used; Suggestion: <div>

#### Returns

`VNode`<`RendererNode`, `RendererElement`, { `[key: string]`: `any`;  }\>[]

#### Inherited from

[ParentSlots](components_Field_extras.Field.ParentSlots.md).[hint](components_Field_extras.Field.ParentSlots.md#hint)

___

### label

▸ **label**(): `VNode`<`RendererNode`, `RendererElement`, { `[key: string]`: `any`;  }\>[]

Slot for label; Used only if 'label-slot' prop is set or the 'label' prop is set; When it is used the text in the 'label' prop is ignored

#### Returns

`VNode`<`RendererNode`, `RendererElement`, { `[key: string]`: `any`;  }\>[]

#### Inherited from

[ParentSlots](components_Field_extras.Field.ParentSlots.md).[label](components_Field_extras.Field.ParentSlots.md#label)

___

### loading

▸ **loading**(): `VNode`<`RendererNode`, `RendererElement`, { `[key: string]`: `any`;  }\>[]

Override default spinner when component is in loading mode; Use in conjunction with 'loading' prop

#### Returns

`VNode`<`RendererNode`, `RendererElement`, { `[key: string]`: `any`;  }\>[]

#### Inherited from

[ParentSlots](components_Field_extras.Field.ParentSlots.md).[loading](components_Field_extras.Field.ParentSlots.md#loading)

___

### prepend

▸ **prepend**(): `VNode`<`RendererNode`, `RendererElement`, { `[key: string]`: `any`;  }\>[]

Prepend inner field; Suggestions: QIcon, QBtn

#### Returns

`VNode`<`RendererNode`, `RendererElement`, { `[key: string]`: `any`;  }\>[]

#### Inherited from

[ParentSlots](components_Field_extras.Field.ParentSlots.md).[prepend](components_Field_extras.Field.ParentSlots.md#prepend)

___

### rawControl

▸ **rawControl**(): `VNode`<`RendererNode`, `RendererElement`, { `[key: string]`: `any`;  }\>[]

undefined

#### Returns

`VNode`<`RendererNode`, `RendererElement`, { `[key: string]`: `any`;  }\>[]

#### Inherited from

[ParentSlots](components_Field_extras.Field.ParentSlots.md).[rawControl](components_Field_extras.Field.ParentSlots.md#rawcontrol)