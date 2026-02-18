import { Booking } from "@/app/(tabs)";
import { formatDateBooking, getTimeUntil } from "@/utils/dateUtils";
import React from "react";
import { Image, Pressable, Text, View } from "react-native";

export default function LocationSection({ booking }: { booking: Booking }) {
  return (
    <View style={{ paddingHorizontal: 16, paddingTop: 12, gap: 4 }}>
      <Text style={{ fontFamily: "Graphik-Semibold", fontSize: 18 }}>{booking.city}</Text>
      <View
        style={{
          backgroundColor: "#edecec",
          borderRadius: 34,
          paddingLeft: 5,
          paddingRight: 5,
          paddingBottom: 5,
          marginTop: 10,

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
            borderRadius: 24,
            padding: 10,
          }}
        >
          <View style={{ position: "relative" }}>
            <Image source={{ uri: booking.bookingImage }} style={{ width: "100%", height: 220, borderRadius: 16, marginBottom: 8 }} />
            <View
              style={{
                position: "absolute",
                top: 12,
                left: 12,
                backgroundColor: "white",
                paddingHorizontal: 14,
                paddingVertical: 6,
                borderRadius: 14,
              }}
            >
              <Text style={{ color: "black", fontWeight: "600", fontSize: 13 }}>{getTimeUntil(booking.bookingStart)}</Text>
            </View>
          </View>
          <View style={{ gap: 4, paddingTop: 10, paddingHorizontal: 10 }}>
            <Text style={{ fontFamily: "Graphik-Medium", fontSize: 27 }}>{booking.title}</Text>
            <View style={{ flexDirection: "row", gap: 4, marginTop: 8 }}>
              <Text style={{ color: "#606060" }}>{formatDateBooking(booking.bookingStart, booking.bookingEnd)}</Text>
              <Text style={{ color: "#606060" }}>•</Text>
              <Text style={{ color: "#606060" }}>{`Hôte : ${booking.hostName}`}</Text>
            </View>
            <View style={{ borderBottomColor: "#E0E0E0", borderBottomWidth: 1, marginVertical: 12 }} />
            <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between", gap: 8 }}>
              <Image source={{ uri: booking.guestImage }} style={{ width: 32, height: 32, borderRadius: 16 }} />
              <Pressable
                style={({ pressed }) => ({
                  backgroundColor: pressed ? "#e0e0e0" : "#f0f0f0",
                  paddingVertical: 20,
                  paddingHorizontal: 50,
                  borderRadius: 12,
                })}
              >
                <Text
                  style={{
                    fontFamily: "Graphik-Medium",
                    fontSize: 15,
                    textAlign: "left",
                  }}
                >
                  Afficher{"\n"}l'annonce
                </Text>
              </Pressable>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}
