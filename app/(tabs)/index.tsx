import BookingDateCard from "@/components/voyageDetailsScreen/bookingDateCard";
import LocationSection from "@/components/voyageDetailsScreen/locationSection";
import { ScrollView } from "react-native";
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
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fafafa" }} edges={["left", "right", "bottom"]}>
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 150, flexGrow: 1 }} style={{ flex: 1 }}>
        <LocationSection booking={booking} />
        <BookingDateCard start={booking.bookingStart} end={booking.bookingEnd} />
      </ScrollView>
    </SafeAreaView>
  );
}
