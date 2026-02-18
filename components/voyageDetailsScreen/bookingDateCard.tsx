import React from "react";
import { Image, Text, View } from "react-native";

export default function BookingDateCard({ start, end }: { start: string; end: string }) {
  const getDateInfo = (dateString: string): any => {
    const date = new Date(dateString);

    const weekday = date.toLocaleDateString("fr-FR", { weekday: "long", timeZone: "Europe/Paris" });
    const day = date.getDate();
    const month = date.toLocaleDateString("fr-FR", { month: "long", timeZone: "Europe/Paris" });

    const hour = date.toLocaleTimeString("fr-FR", { hour: "2-digit", minute: "2-digit", hour12: false, timeZone: "Europe/Paris" });

    return { weekday, day, month, hour };
  };

  console.log(getDateInfo(start));
  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingHorizontal: 16,
        marginTop: -5,
      }}
    >
      <View
        style={{
          flexDirection: "column",
          alignItems: "center",
          gap: 4,
          flex: 1,
        }}
      >
        <View style={{ flexDirection: "row", gap: 4 }}>
          <View style={{ flexDirection: "column", alignItems: "center", gap: 4, width: 40 }}>
            <Text style={{ fontFamily: "Graphik-Medium", fontSize: 16, paddingTop: 30 }}>{getDateInfo(start)?.weekday.substring(0, 3)}.</Text>
            <View
              style={{
                width: 40,
                height: 40,
                borderRadius: 25,
                backgroundColor: "#E0E0E0",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text
                style={{
                  fontFamily: "Graphik-Medium",
                  fontSize: 16,
                  color: "#696969",
                }}
              >
                {getDateInfo(start)?.day}
              </Text>
            </View>
            <View style={{ height: 35, width: 1, backgroundColor: "#E0E0E0" }} />
          </View>

          <View style={{ paddingHorizontal: 5, paddingVertical: 12, flex: 1 }}>
            <View
              style={{
                backgroundColor: "#edecec8f",
                borderRadius: 24,
                paddingLeft: 8,
                paddingRight: 8,
                // paddingBottom: 5,
                // marginTop: 10,

                //BoxShadow iOS
                shadowColor: "#898989",
                shadowOffset: { width: 0, height: 8 },
                shadowOpacity: 0.07,
                shadowRadius: 2,

                // Android
                elevation: 8,
              }}
            >
              <View
                style={{
                  backgroundColor: "white",
                  borderColor: "#E0E0E0",

                  borderWidth: 1,
                  borderRadius: 14,
                  padding: 10,
                }}
              >
                <View style={{ gap: 4, flexDirection: "row", alignItems: "center" }}>
                  {/* image in folder assets/images */}
                  <Image source={require("../../assets/images/check-in.png")} style={{ width: 70, height: 70, borderRadius: 10 }} />
                  <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
                    <Text style={{ fontFamily: "Graphik-Medium", fontSize: 16 }}>Arrivé à partir de {getDateInfo(start)?.hour}</Text>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>
        {/* check out  */}
        <View style={{ flexDirection: "row", gap: 4 }}>
          <View style={{ flexDirection: "column", alignItems: "center", gap: 4, width: 40 }}>
            <Text style={{ fontFamily: "Graphik-Medium", fontSize: 16 }}>{getDateInfo(end)?.weekday.substring(0, 3)}.</Text>
            <View
              style={{
                width: 40,
                height: 40,
                borderRadius: 25,
                backgroundColor: "#E0E0E0",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text
                style={{
                  fontFamily: "Graphik-Medium",
                  fontSize: 16,
                  color: "#696969",
                }}
              >
                {getDateInfo(end)?.day}
              </Text>
            </View>
          </View>

          <View style={{ paddingHorizontal: 5, paddingVertical: 12, flex: 1, marginTop: -30 }}>
            <View
              style={{
                backgroundColor: "#edecec8f",
                borderRadius: 24,
                paddingLeft: 8,
                paddingRight: 8,

                //BoxShadow iOS
                shadowColor: "#898989",
                shadowOffset: { width: 0, height: 8 },
                shadowOpacity: 0.09,
                shadowRadius: 2,

                // Android
                elevation: 8,
              }}
            >
              <View
                style={{
                  backgroundColor: "white",
                  borderColor: "#E0E0E0",

                  borderWidth: 1,
                  borderRadius: 14,
                  padding: 10,
                }}
              >
                <View style={{ gap: 4, flexDirection: "row", alignItems: "center" }}>
                  <Image source={require("../../assets/images/check-out.png")} style={{ width: 70, height: 70, borderRadius: 10 }} />
                  <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
                    <Text style={{ fontFamily: "Graphik-Medium", fontSize: 16 }}>Départ à partir de {getDateInfo(end)?.hour}</Text>
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
