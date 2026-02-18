import BookingDateCard from "@/components/voyageDetailsScreen/bookingDateCard";
import LocationSection from "@/components/voyageDetailsScreen/locationSection";
import { ScrollView, View } from "react-native";

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
    <View style={{ flex: 1, backgroundColor: "#fafafa" }}>
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 40 }} style={{ flex: 1 }}>
        <LocationSection booking={booking} />
        <BookingDateCard start={booking.bookingStart} end={booking.bookingEnd} />
      </ScrollView>
    </View>
  );
}
