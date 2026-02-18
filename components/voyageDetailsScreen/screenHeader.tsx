import AntDesign from "@expo/vector-icons/AntDesign";
import React from "react";
import { Pressable, Text, View } from "react-native";

export default function ScreenHeader() {
  return (
    <View style={{ borderBottomColor: "#E0E0E0", borderBottomWidth: 1 }}>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          paddingHorizontal: 16,
          paddingVertical: 10,
        }}
      >
        <Text style={{ fontFamily: "Graphik-Medium", fontSize: 24, fontWeight: "medium" }}>Voyages</Text>
        <Pressable style={({ pressed }) => ({ backgroundColor: pressed ? "#e0e0e0" : "#f0f0f0", padding: 8, borderRadius: 100 })}>
          <AntDesign name="bars" size={18} color="#1e1e1e" />
        </Pressable>
      </View>
    </View>
  );
}
