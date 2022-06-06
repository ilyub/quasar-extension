import { implementations } from "@skylib/framework";

export const ru = new implementations.lang.dictionary.Definitions({
  pluralReduce: implementations.lang.dictionary.pluralReduce.ru,
  wordForms: {
    "кем-чем": ["кем-чем-им", "кем-чем-ей", "кем-чем-им-ср"],
    "кого-чего": ["кого-чего-его", "кого-чего-ее", "кого-чего-его-ср"],
    "кого-что": ["кого-что-его", "кого-что-ее", "кого-что-его-ср"],
    "ком-чем": ["ком-чем-нем", "ком-чем-ней", "ком-чем-нем-ср"],
    "кому-чему": ["кому-чему-ему", "кому-чему-ей", "кому-чему-ему-ср"],
    "кто-что": ["кто-что-он", "кто-что-она", "кто-что-оно"]
  },
  words: {
    Cancel: "Отменить",
    Confirm: "Подтверждение",
    Date: ["кто-что-она", { "кого-что-ее": "Дату", "кто-что-она": "Дата" }],
    DeselectAll: "Снять выделение",
    Equal: [
      "кого-что-его",
      {
        "кого-что-его": "Равный",
        "кого-что-его-ср": "Равное",
        "кого-что-ее": "Равную"
      }
    ],
    Field: "Поле",
    FieldIsRequired: "Введите <field:кого-что>",
    FieldShouldBeGteMin: "Введите <field:кого-что> больше либо {equal} @min",
    FieldShouldBeLteMax: "Введите <field:кого-что> больше либо {equal} @max",
    IconPicker: "Выбор иконки",
    ManageColumns: "Управлять колонками",
    Number: [
      "кто-что-оно",
      { "кого-что-его-ср": "Число", "кто-что-оно": "Число" }
    ],
    Of: "Из",
    Ok: "Ок",
    Password: "Пароль",
    Save: "Сохранить",
    Select: "Выбрать",
    SelectAll: "Выделить все",
    String: [
      "кто-что-она",
      { "кого-что-ее": "Строку", "кто-что-она": "Строка" }
    ],
    Time: [
      "кто-что-оно",
      { "кого-что-его-ср": "Время", "кто-что-оно": "Время" }
    ]
  }
});