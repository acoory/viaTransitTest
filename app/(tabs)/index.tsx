import BookingDateCard from "@/components/voyageDetailsScreen/bookingDateCard";
import LocationSection from "@/components/voyageDetailsScreen/locationSection";
import ScreenHeader from "@/components/voyageDetailsScreen/screenHeader";
import { ScrollView, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export type Booking = {
  city: string;
  title: string;
  hostName: string;
  bookingStart: string;
  bookingEnd: string;
  bookingImage: string;
  guestImage: string;
};

export default function HomeScreen() {
  const booking: Booking = {
    city: "Montréal",
    title: "Appartement • Montréal",
    hostName: "Angelo",
    bookingStart: "2026-05-26T13:00:00.000Z",
    bookingEnd: "2026-06-04T09:00:00.000Z",
    bookingImage: "https://i.goopics.net/4iiedo.jpg",
    guestImage: "https://i.goopics.net/j2kv1t.jpg",
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fafafa" }}>
      <ScreenHeader />
      <ScrollView style={{ flex: 1, backgroundColor: "red" }} contentContainerStyle={{ paddingBottom: 100 }}>
        <LocationSection booking={booking} />
        <BookingDateCard start={booking.bookingStart} end={booking.bookingEnd} />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: "absolute",
  },
});
