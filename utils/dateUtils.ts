export const getDateInfo = (dateString: string) => {
  const date = new Date(dateString);

  if (isNaN(date.getTime())) {
    return {
      weekday: "-",
      day: 0,
      month: "-",
      hour: "--:--",
    };
  }

  const weekday = date.toLocaleDateString("fr-FR", { weekday: "long", timeZone: "Europe/Paris" });
  const day = date.getDate();
  const month = date.toLocaleDateString("fr-FR", { month: "long", timeZone: "Europe/Paris" });

  const hour = date.toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
    timeZone: "Europe/Paris",
  });

  return { weekday, day, month, hour };
};

export const formatDateBooking = (start: string, end: string) => {
  const bookingStart = new Date(start);
  const bookingEnd = new Date(end);

  const options: any = { day: "numeric", month: "long" };

  const startFormatted = bookingStart.toLocaleDateString("fr-FR", options);
  const endFormatted = bookingEnd.toLocaleDateString("fr-FR", options);

  const result = `${startFormatted} - ${endFormatted}`;
  return result;
};

export const getTimeUntil = (date: Date | string): string => {
  const now = new Date();
  const target = new Date(date);
  const diffMs = target.getTime() - now.getTime();

  if (diffMs <= 0) return "En cours";

  const diffHours = Math.floor(diffMs / (1000 * 60 * 60));
  const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));
  const diffMonths = Math.floor(diffDays / 30);

  if (diffMonths >= 1) return `Dans ${diffMonths} mois`;
  if (diffDays >= 1) return `Dans ${diffDays} jour${diffDays > 1 ? "s" : ""}`;
  return `Dans ${diffHours} heure${diffHours > 1 ? "s" : ""}`;
};
