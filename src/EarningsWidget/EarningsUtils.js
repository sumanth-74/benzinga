
export const filterRecentEarnings = (earnings, monthsAgo = 3) => {
  const lastQuarter = new Date();
  lastQuarter.setMonth(lastQuarter.getMonth() - monthsAgo);
  return earnings.filter((earning) => new Date(earning.date) >= lastQuarter);
};

export const organizeEarningsData = (earnings) => {
  return earnings.reduce((acc, earning) => {
    const day = new Date(earning.date).toLocaleDateString('en-US', { weekday: 'long' });
    const key = `${day}-${earning.time < '09:30:00' ? 'before' : 'after'}`;
    acc[key] = acc[key] || [];
    acc[key].push(earning);
    return acc;
  }, {});
};

export const formatWeekDates = (days) => {
  const weekStart = new Date();
  weekStart.setDate(weekStart.getDate() - weekStart.getDay() + 1); // Start on Monday
  return days.map((_, i) => {
    const date = new Date(weekStart);
    date.setDate(weekStart.getDate() + i);
    return date.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });
  });
};
