import React from "react";
import { Image, ImageSourcePropType, StyleSheet, Text, View } from "react-native";

type CheckCardProps = {
  weekday: string;
  day: string | number;
  hour: string;
  label: string;
  icon: ImageSourcePropType;
  showConnector?: boolean;
  topOffset?: number;
};

export default function CheckCard({ weekday, day, hour, label, icon, showConnector = false, topOffset = 0 }: CheckCardProps) {
  return (
    <View style={styles.row}>
      <View style={styles.dateColumn}>
        <Text style={[styles.weekdayText, showConnector && styles.weekdayTextWithConnector]}>{weekday}.</Text>
        <View style={styles.dayBadge}>
          <Text style={styles.dayBadgeText}>{day}</Text>
        </View>
        {showConnector && <View style={styles.connector} />}
      </View>

      <View style={[styles.cardWrapper, topOffset !== 0 && { marginTop: topOffset }]}>
        <View style={styles.cardOuter}>
          <View style={styles.cardInner}>
            <View style={styles.cardRow}>
              <Image source={icon} style={styles.icon} />
              <View style={styles.cardTextWrapper}>
                <Text style={styles.cardText}>{label} {hour}</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  // -- Row layout
  row: {
    flexDirection: "row",
    gap: 4,
  },

  // -- Date column (weekday + day badge + optional connector)
  dateColumn: {
    flexDirection: "column",
    alignItems: "center",
    gap: 4,
    width: 40,
  },
  weekdayText: {
    fontFamily: "Graphik-Semibold",
    fontSize: 14,
  },
  weekdayTextWithConnector: {
    fontFamily: "Graphik-Medium",
    fontSize: 16,
    paddingTop: 30,
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

  // -- Card wrapper
  cardWrapper: {
    paddingHorizontal: 5,
    paddingVertical: 12,
    flex: 1,
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
  cardText: {
    fontFamily: "Graphik-Semibold",
    fontSize: 14,
  },
});
