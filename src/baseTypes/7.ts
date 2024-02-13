/*
  Створіть функцію (isWeekend), яка приймає день тижня (з вашого enum)
  і повертає boolean значення, що вказує, чи це день робочий чи вихідний.
*/

// enum WorkedDays {
//   Mon,
//   Tue,
//   Wed,
//   Thu,
//   Fri
// }

// enum WeekendDays {
//   Sat,
//   Sun,
// }

// type Days = WorkedDays | WeekendDays;

// function isWeekend (day: Days):boolean {
//   return Boolean(WeekendDays[day]);
// }

enum Days {
  Mon,
  Tue,
  Wed,
  Thu,
  Fri,
  Sat,
  Sun,
}

function isWeekend(day: Days): boolean {
  return [Days.Sat, Days.Sun].includes(day);
}
