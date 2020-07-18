export const daysWeek = [
  "воскресенье",
  "понедельник",
  "вторник",
  "среду",
  "четверг",
  "пятницу",
  "субботу"
];

export const dateArg = {
  query: "Введите дату. Форматы даты можно посмотреть в справке",
  error: "❌Дата введена не верно. Форматы даты можно посмотреть в справке",
  anotherText: `Дату можно указать одном из следующих форматов:
- ДД.ММ.ГГГГ например 01.03.2019
- ДД.ММ например 15.10
- День недели, например Понедельник
- Короткий день недели, например ВТ
- Вчера, сегодня, завтра, позавчера, послезавтра`,
  tomorrowKey: "Завтра",
  todayKey: "Сегодня",
  yesterdayKey: "Вчера",
  allKey: "Всё доступное",
  another: "Другая дата",

  daysWeekRegExp: {
    "0": /(вс|воскресенье)/i,
    "1": /(пн|понедельник)/i,
    "2": /(вт|вторник)/i,
    "3": /(ср|сред[ау])/i,
    "4": /(чт|четверг)/i,
    "5": /(пт|пятниц[ау])/i,
    "6": /(сб|суббот[ау])/i
  },
  daysRelativeRegExp: {
    "-2": /позавчера/i,
    "-1": /вчера/i,
    "0": /сегодня/i,
    "1": /завтра/i,
    "2": /послезавтра/i
  }
};

export const groupArg = {
  query: `Укажите группу`,
  error: `❌Группа указана неверно. Укажите группу со всеми " - ", как в файле замен на портале.
  Например ДаК-18-1`
};

export const boolArg = {
  query: `Если включить уведомления, то бот будет присылать вам сообщения каждый раз, когда появляются или обновляются замены на портале
    Эти уведомления можно отключить в любой момент этой же командой
    Включить уведомления?`,
  error: 'Напишите "Да" или "Нет"',
  trueKey: "Да",
  falseKey: "Нет"
};

export const reportTextArg = {
  name: "Сообщение об ошибке",
  query: `Коротко опишите проблему, которая у вас возникла или просто перешлите сообщение в котором содержится ошибка. Для отмены напишите "Отмена"`,
  error: 'Для отмены напишите "Отмена"',
  help: ""
};

export const teacherArg = {
  query: `Введите ФИО преподавателя`,
  error: `❌ФИО преподавателя введено неверно. Введите ФИО преподавателя в формате Фамилия И.О. Например Казанцева Л.А.`
};

export const subgroupArg = {
  query: `Укажите подгруппу`,
  error: `❌Подгруппа указана неверно. Выберите первую или вторую подгруппу`,

  firstSubgroupKey: "Первая",
  secondSubgroupKey: "Вторая",

  firstSubgroupRegexp: /1|перв|один|first/i,
  secondSubgroupRegexp: /2|втор|два|second/i
};

export const timetableKey = "Расписание";
export const timetableCmd = /расп|ti/i;

export const timetableButtonToday = " на сегодня";
export const timetableButtonTomorrow = " на завтра";

export const timetableForGroup = (
  date: string,
  group: string,
  subgroup: string
) => `Расписание для группы ${group} ${subgroup} подгруппы на ${date}`;

export const timetableNotFound = (date: string) => `❌Расписание не найдено.
Проверьте правильность написания названия группы, ФИО преподавателя и даты
Возможно на ${date} еще нет замен.
Если у вас возникли проблемы при использовании бота напишите сюда https://vk.com/ivanik7`;

export const pairCanceled = `Пара отменена ❌`;
export const firstSubgroup = `первой`;
export const secondSubgroup = `второй`;

export const teacherKey = "Преподаватель";
export const teacherCmd = /Препод|tea/i;

export const timetableForTeacher = (date: string, teacher: string) =>
  `Расписание преподавателя ${teacher} на ${date}`;
export const teacherFio =
  "❌С такой фамилией несколько преподавателей. Укажите фамилию с инициалами";

export const notifyKey = "Уведомления";
export const notifyCmd = /уведомл|notify/i;
export const notifyEnabled = `Уведомления включены.
Отключить уведомления можно в любой момент командой "уведомления выкл"`;
export const notifyDisabled = "Уведомления о новых заменах выключены";

export const helpKey = "Справка";
export const helpCmd = /cправка|помощь|help/i;
export const helpAnswer = `Чтобы узнать расписание с заменами напишите команду "расписание" и отвечайте на вопросы бота.
Подробная справка: https://mpk.ivanik.ru`;

export const reportKey = "💢Сообщить об ошибке";
export const reportCmd = /ошибка|report/i;
export const reportthanks = "Спасибо за сообщение";

export const newChanges = "Вышли новые замены.";

export const cancelKey = `Отмена`;

export const canceled = `Отменено.
Если у вас возникли проблемы при использовании бота напишите сюда https://vk.com/ivanik7`;

export const tooManyArgs = `❌Слишком много аргументов`;

export const unexpectedError = `❌Произошла неизвестная ошибка. Повторите попытку позже`;

export const cmdNotFound = `❌Команда не найдена.
Что бы узнать как пользоваться ботом напишите "Справка"`;
