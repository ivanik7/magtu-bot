import Esubgroup from "../interfaces/subgroup";
import Timetable from "../models/timetable";
import timetableOneDay from "../templates/timetableOneDay";
import dateTemplate from "../templates/date";
import { timetableNotFound } from "../text";
import { color } from "../interfaces/keyboard";
import defaultKeyboard from "../templates/defaultKeyboard";

const keyboard = (group: string, subgroup: Esubgroup) => {
  const keys = [...defaultKeyboard];

  keys.push([
    {
      label: `${group} на сегодня`,
      color: color.default,
      payload: { command: `расписание сегодня ${group} ${subgroup}` }
    },
    {
      label: `${group} на завтра`,
      color: color.default,
      payload: { command: `расписание завтра ${group} ${subgroup}` }
    }
  ]);

  return keys;
};

export default async (
  ctx: any,
  date: Date | string,
  group: string,
  subgroup: Esubgroup
) => {
  try {
    if (typeof date === "string") {
      const from = new Date();
      from.setDate(from.getDate() - 1);

      const to = new Date();
      to.setDate(to.getDate() + 7);

      const days = await Timetable.find({
        date: { $gte: from, $lt: to },
        group
      });

      let answer = "";
      if (days.length !== 0) {
        for (const day of days) {
          answer += `${timetableOneDay(day, subgroup)}\n\n`;
        }
        ctx.reply = answer; // , keyboard(days[0].displayName, subgroup));
      } else {
        throw Error("Not found");
      }
    } else {
      const day = await Timetable.findOne({ date, group });
      if (day) {
        ctx.reply = timetableOneDay(day, subgroup); // , keyboard(day.displayName, subgroup));
      } else {
        throw Error("Not found");
      }
    }
  } catch (error) {
    if (error.message === "Not found") {
      ctx.reply = timetableNotFound(dateTemplate(date));
    }
  }
};
