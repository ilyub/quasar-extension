import { implementations } from "@skylib/framework";

export const en = new implementations.lang.dictionary.Definitions({
  pluralReduce: implementations.lang.dictionary.pluralReduce,
  wordForms: {},
  words: {
    Cancel: "Cancel",
    Confirm: "Confirm",
    Date: "Date",
    DeselectAll: "Deselect all",
    Equal: "Equal",
    Field: "Field",
    FieldIsRequired: "<Field> is required",
    FieldShouldBeGteMin: "<Field> should be greater or equal to @min",
    FieldShouldBeLteMax: "<Field> may not exceed @max",
    IconPicker: "Icon picker",
    ManageColumns: "Manage columns",
    Number: "Number",
    Of: "Of",
    Ok: "Ok",
    Password: "Password",
    Save: "Save",
    Select: "Select",
    SelectAll: "Select all",
    String: "String",
    Time: "Time"
  }
});