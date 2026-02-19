import { getDateInfo } from "@/utils/dateUtils";
import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

type BookingDateCardProps = {
  start: string;
  end: string;
};

export default function BookingDateCard({ start, end }: BookingDateCardProps) {
  return (
    <View style={styles.container}>
      <View style={styles.column}>
        {/* Check-in */}
        <View style={styles.row}>
          <View style={styles.dateColumn}>
            <Text style={styles.weekdayTextLarge}>{getDateInfo(start)?.weekday.substring(0, 3)}.</Text>
            <View style={styles.dayBadge}>
              <Text style={styles.dayBadgeText}>{getDateInfo(start)?.day}</Text>
            </View>
            <View style={styles.connector} />
          </View>

          <View style={styles.cardWrapper}>
            <View style={styles.cardOuter}>
              <View style={styles.cardInner}>
                <View style={styles.cardRow}>
                  <Image source={require("../../assets/images/check-in.png")} style={styles.icon} />
                  <View style={styles.cardTextWrapper}>
                    <Text style={styles.cardTextBold}>Arrivé à partir de {getDateInfo(start)?.hour}</Text>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>

        {/* Check-out */}
        <View style={styles.row}>
          <View style={styles.dateColumn}>
            <Text style={styles.weekdayTextSmall}>{getDateInfo(end)?.weekday.substring(0, 3)}.</Text>
            <View style={styles.dayBadge}>
              <Text style={styles.dayBadgeText}>{getDateInfo(end)?.day}</Text>
            </View>
          </View>

          <View style={[styles.cardWrapper, styles.cardWrapperCheckout]}>
            <View style={styles.cardOuter}>
              <View style={styles.cardInner}>
                <View style={styles.cardRow}>
                  <Image source={require("../../assets/images/check-out.png")} style={styles.icon} />
                  <View style={styles.cardTextWrapper}>
                    <Text style={styles.cardTextRegular}>Départ avant {getDateInfo(end)?.hour}</Text>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  // -- Main layout
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    marginTop: -5,
  },
  column: {
    flexDirection: "column",
    alignItems: "center",
    gap: 4,
    flex: 1,
  },
  row: {
    flexDirection: "row",
    gap: 4,
  },

  // -- Date column (weekday + day badge + connector)
  dateColumn: {
    flexDirection: "column",
    alignItems: "center",
    gap: 4,
    width: 40,
  },
  weekdayTextLarge: {
    fontFamily: "Graphik-Medium",
    fontSize: 16,
    paddingTop: 30,
  },
  weekdayTextSmall: {
    fontFamily: "Graphik-Semibold",
    fontSize: 14,
  },
  dayBadge: {
    width: 40,
    height: 40,
    borderRadius: 25,
    backgroundColor: "#E0E0E0",
    justifyContent: "center",
    alignItems: "center",
  },
  dayBadgeText: {
    fontFamily: "Graphik-Medium",
    fontSize: 16,
    color: "#696969",
  },
  connector: {
    height: 35,
    width: 1,
    backgroundColor: "#E0E0E0",
  },

  // -- Card outer wrapper
  cardWrapper: {
    paddingHorizontal: 5,
    paddingVertical: 12,
    flex: 1,
  },
  cardWrapperCheckout: {
    marginTop: -30,
  },

  // -- Card outer (grey background + shadow)
  cardOuter: {
    backgroundColor: "#edecec8f",
    borderRadius: 24,
    paddingLeft: 8,
    paddingRight: 8,
    // iOS shadow
    shadowColor: "#898989",
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.07,
    shadowRadius: 2,
    // Android shadow
    elevation: 8,
  },

  // -- Card inner (white background + border)
  cardInner: {
    backgroundColor: "white",
    borderColor: "#E0E0E0",
    borderWidth: 1,
    borderRadius: 14,
    padding: 10,
  },

  // -- Card content row (icon + text)
  cardRow: {
    gap: 4,
    flexDirection: "row",
    alignItems: "center",
  },
  icon: {
    width: 70,
    height: 70,
    borderRadius: 10,
  },
  cardTextWrapper: {
    flex: 1,
    justifyContent: "center",
    alignItems: "flex-start",
    paddingLeft: 10,
  },
  cardTextBold: {
    fontFamily: "Graphik-Semibold",
    fontSize: 14,
  },
  cardTextRegular: {
    fontFamily: "Graphik-Medium",
    fontSize: 14,
  },
});
