[Quasar extension](../index.md) / [Exports](../modules.md) / [components/Field.extras](../modules/components_Field_extras.md) / [Field](../modules/components_Field_extras.Field.md) / PluginProps

# Interface: PluginProps<T\>

[components/Field.extras](../modules/components_Field_extras.md).[Field](../modules/components_Field_extras.Field.md).PluginProps

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `unknown` |

## Hierarchy

- [`Props`](../modules/components_api_lang_props.langProps.md#props)<``"label"`` \| ``"placeholder"``\>

- [`Props`](../modules/components_api_validation.validation.md#props)<`T`\>

  ↳ **`PluginProps`**

  ↳↳ [`Props`](components_Field_extras.Field.Props.md)

## Table of contents

### Properties

- [label](components_Field_extras.Field.PluginProps.md#label)
- [placeholder](components_Field_extras.Field.PluginProps.md#placeholder)
- [rulesOnChange](components_Field_extras.Field.PluginProps.md#rulesonchange)
- [rulesOnInput](components_Field_extras.Field.PluginProps.md#rulesoninput)
- [rulesOnSubmit](components_Field_extras.Field.PluginProps.md#rulesonsubmit)

## Properties

### label

• **label**: `undefined` \| `Key`<`Word`\>

#### Inherited from

plugins.langProps.Props.label

___

### placeholder

• **placeholder**: `undefined` \| `Key`<`Word`\>

#### Inherited from

plugins.langProps.Props.placeholder

___

### rulesOnChange

• `Optional` `Readonly` **rulesOnChange**: [`Rules`](../modules/components_api_validation_internal.md#rules)<`T`\>

#### Inherited from

plugins.validation.Props.rulesOnChange

___

### rulesOnInput

• `Optional` `Readonly` **rulesOnInput**: [`Rules`](../modules/components_api_validation_internal.md#rules)<`T`\>

#### Inherited from

plugins.validation.Props.rulesOnInput

___

### rulesOnSubmit

• `Optional` `Readonly` **rulesOnSubmit**: [`Rules`](../modules/components_api_validation_internal.md#rules)<`T`\>

#### Inherited from

plugins.validation.Props.rulesOnSubmit
