[Quasar extension](../index.md) / [Exports](../modules.md) / [components/OptionGroup.extras](../modules/components_OptionGroup_extras.md) / [OptionGroup](../modules/components_OptionGroup_extras.OptionGroup.md) / OwnProps

# Interface: OwnProps<T\>

[components/OptionGroup.extras](../modules/components_OptionGroup_extras.md).[OptionGroup](../modules/components_OptionGroup_extras.OptionGroup.md).OwnProps

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `unknown` |

## Hierarchy

- **`OwnProps`**

  ↳ [`Props`](components_OptionGroup_extras.OptionGroup.Props.md)

## Table of contents

### Properties

- [disable](components_OptionGroup_extras.OptionGroup.OwnProps.md#disable)
- [inline](components_OptionGroup_extras.OptionGroup.OwnProps.md#inline)
- [modelValue](components_OptionGroup_extras.OptionGroup.OwnProps.md#modelvalue)
- [onUpdate:modelValue](components_OptionGroup_extras.OptionGroup.OwnProps.md#onupdate:modelvalue)
- [options](components_OptionGroup_extras.OptionGroup.OwnProps.md#options)

## Properties

### disable

• `Optional` `Readonly` **disable**: `booleanU`

___

### inline

• `Optional` `Readonly` **inline**: `booleanU`

___

### modelValue

• `Optional` `Readonly` **modelValue**: `T`

___

### onUpdate:modelValue

• `Optional` `Readonly` **onUpdate:modelValue**: (`value`: `T`) => `void`

#### Type declaration

▸ (`value`): `void`

Emits model value.

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `T` | Value. |

##### Returns

`void`

___

### options

• `Readonly` **options**: [`Options`](../modules/components_OptionGroup_extras.OptionGroup.md#options)<`T`\>
