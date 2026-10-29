const { getTimeGreeting, getDailyTip, SCM_TIPS } = require("./greeting");

describe("getTimeGreeting", () => {
  test.each([
    [0, "Up late"],
    [4, "Up late"],
    [5, "Good morning"],
    [11, "Good morning"],
    [12, "Good afternoon"],
    [17, "Good afternoon"],
    [18, "Good evening"],
    [23, "Good evening"]
  ])("hour %i returns \"%s\"", (hour, expected) => {
    expect(getTimeGreeting(hour)).toBe(expected);
  });

  test.each([-1, 24, 9.5, "9"])("rejects invalid hour %p", (hour) => {
    expect(() => getTimeGreeting(hour)).toThrow(RangeError);
  });
});

describe("getDailyTip", () => {
  test("returns the tip for the day of the week", () => {
    // Thu 29 Oct 2026, local time -> getDay() === 4
    const thursday = new Date(2026, 9, 29, 12);
    expect(getDailyTip(thursday)).toBe(SCM_TIPS[4]);
  });

  test("gives a different tip on each day of the week", () => {
    const tips = new Set();
    for (let day = 0; day < 7; day += 1) {
      tips.add(getDailyTip(new Date(2026, 9, 25 + day, 12)));
    }
    expect(tips.size).toBe(7);
  });

  test("rejects an invalid date", () => {
    expect(() => getDailyTip(new Date("not a date"))).toThrow(TypeError);
    expect(() => getDailyTip("2026-10-29")).toThrow(TypeError);
  });
});
