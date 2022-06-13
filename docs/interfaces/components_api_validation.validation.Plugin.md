[Quasar extension](../index.md) / [Exports](../modules.md) / [components/api/validation](../modules/components_api_validation.md) / [validation](../modules/components_api_validation.validation.md) / Plugin

# Interface: Plugin<T\>

[components/api/validation](../modules/components_api_validation.md).[validation](../modules/components_api_validation.validation.md).Plugin

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `unknown` |

## Table of contents

### Properties

- [rules](components_api_validation.validation.Plugin.md#rules)

### Methods

- [validate](components_api_validation.validation.Plugin.md#validate)

## Properties

### rules

• `Readonly` **rules**: `ComputedRef`<`ValidationRule`<`unknown`\>[]\>

## Methods

### validate

▸ `Readonly` **validate**(`value`, `context`): `void`

Validates field.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `T` | Value. |
| `context` | [`Context`](../modules/components_api_validation.validation.md#context) | Context. |

#### Returns

`void`