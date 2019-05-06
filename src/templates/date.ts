import { daysWeek } from "../text";

const singleDigit = 9;

export default (date: Date) =>
  `${daysWeek[date.getDay()]} ${
    date.getDate() > singleDigit ? "" : "0"
  }${date.getDate()}.${
    date.getMonth() + 1 > singleDigit ? "" : "0"
  }${date.getMonth() + 1}.${date.getFullYear()}`;
