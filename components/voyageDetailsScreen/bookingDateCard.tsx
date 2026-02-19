import { getDateInfo } from "@/utils/dateUtils";
import React from "react";
import { StyleSheet, View } from "react-native";
import CheckCard from "./checkCard";

type BookingDateCardProps = {
  start: string;
  end: string;
};

export default function BookingDateCard({ start, end }: BookingDateCardProps) {
  return (
    <View style={styles.container}>
      <View style={styles.column}>
        <CheckCard
          weekday={getDateInfo(start)?.weekday.substring(0, 3) ?? ""}
          day={getDateInfo(start)?.day ?? ""}
          hour={getDateInfo(start)?.hour ?? ""}
          label="Arrivé à partir de"
          icon={require("../../assets/images/check-in.png")}
          showConnector
        />
        <CheckCard
          weekday={getDateInfo(end)?.weekday.substring(0, 3) ?? ""}
          day={getDateInfo(end)?.day ?? ""}
          hour={getDateInfo(end)?.hour ?? ""}
          label="Départ avant"
          icon={require("../../assets/images/check-out.png")}
          topOffset={-30}
        />
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
});
