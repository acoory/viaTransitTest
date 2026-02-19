import { Booking } from "@/app/(tabs)";
import { formatDateBooking, getTimeUntil } from "@/utils/dateUtils";
import React from "react";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";

export default function LocationSection({ booking }: { booking: Booking }) {
  return (
    <View style={styles.container}>
      <Text style={styles.cityText}>{booking.city}</Text>
      <View style={styles.card}>
        <View style={styles.cardInner}>
          <View style={styles.imageWrapper}>
            <Image source={{ uri: booking.bookingImage }} style={styles.bookingImage} />
            <View style={styles.timeBadge}>
              <Text style={styles.timeBadgeText}>{getTimeUntil(booking.bookingStart)}</Text>
            </View>
          </View>
          <View style={styles.cardContent}>
            <Text style={styles.titleText}>{booking.title}</Text>
            <View style={styles.metaRow}>
              <Text style={styles.metaText}>{formatDateBooking(booking.bookingStart, booking.bookingEnd)}</Text>
              <Text style={styles.metaText}>•</Text>
              <Text style={styles.metaText}>{`Hôte : ${booking.hostName}`}</Text>
            </View>
            <View style={styles.divider} />
            <View style={styles.footerRow}>
              <Image source={{ uri: booking.guestImage }} style={styles.guestImage} />
              <Pressable style={({ pressed }) => [styles.button, pressed && styles.buttonPressed]}>
                <Text style={styles.buttonText}>Afficher{"\n"}l'annonce</Text>
              </Pressable>
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
    paddingHorizontal: 16,
    paddingTop: 12,
    gap: 4,
  },

  // -- City title
  cityText: {
    fontFamily: "Graphik-Semibold",
    fontSize: 18,
  },

  // -- Outer card (grey background + shadow)
  card: {
    backgroundColor: "#edecec",
    borderRadius: 34,
    paddingLeft: 5,
    paddingRight: 5,
    paddingBottom: 5,
    marginTop: 10,
    // iOS shadow
    shadowColor: "#898989",
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.09,
    shadowRadius: 2,
    // Android shadow
    elevation: 8,
  },

  // -- Inner card (white background + border)
  cardInner: {
    backgroundColor: "white",
    borderColor: "#E0E0E0",
    borderWidth: 1,
    borderRadius: 24,
    padding: 10,
  },

  // -- Booking image
  imageWrapper: {
    position: "relative",
  },
  bookingImage: {
    width: "100%",
    height: 220,
    borderRadius: 16,
    marginBottom: 8,
  },

  // -- Time remaining badge
  timeBadge: {
    position: "absolute",
    top: 12,
    left: 12,
    backgroundColor: "white",
    paddingHorizontal: 14,
    paddingVertical: 6,
    borderRadius: 14,
  },
  timeBadgeText: {
    color: "black",
    fontWeight: "600",
    fontSize: 13,
  },

  // -- Card text content
  cardContent: {
    gap: 4,
    paddingTop: 10,
    paddingHorizontal: 10,
  },
  titleText: {
    fontFamily: "Graphik-Medium",
    fontSize: 27,
  },

  // -- Meta row (date · host)
  metaRow: {
    flexDirection: "row",
    gap: 4,
    marginTop: 8,
  },
  metaText: {
    color: "#606060",
  },

  // -- Divider
  divider: {
    borderBottomColor: "#E0E0E0",
    borderBottomWidth: 1,
    marginVertical: 12,
  },

  // -- Card footer (avatar + button)
  footerRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 8,
  },
  guestImage: {
    width: 32,
    height: 32,
    borderRadius: 16,
  },

  // -- "View listing" button
  button: {
    backgroundColor: "#f0f0f0",
    paddingVertical: 20,
    paddingHorizontal: 50,
    borderRadius: 12,
  },
  buttonPressed: {
    backgroundColor: "#e0e0e0",
  },
  buttonText: {
    fontFamily: "Graphik-Medium",
    fontSize: 15,
    textAlign: "left",
  },
});
