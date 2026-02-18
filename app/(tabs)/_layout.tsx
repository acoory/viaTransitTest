import { Tabs } from "expo-router";
import React from "react";

import ExplorerIcon from "@/components/icons/ExplorerIcon";
import HeartIcon from "@/components/icons/HeartIcon";
import HomeIcon from "@/components/icons/HomeIcon";
import MessageIcon from "@/components/icons/MessageIcon";
import { IconSymbol } from "@/components/ui/icon-symbol";
import { Colors } from "@/constants/theme";
import AntDesign from "@expo/vector-icons/AntDesign";
import { Platform, Pressable, Text } from "react-native";

export default function TabLayout() {
  return (
    <Tabs
      initialRouteName="index"
      screenOptions={{
        tabBarActiveTintColor: Colors["light"].tint,
        headerShown: false,
        tabBarStyle: {
          backgroundColor: "white",
          borderTopColor: "gray",
        },
      }}
    >
      <Tabs.Screen
        name="explorer"
        options={{
          title: "Explore",
          tabBarIcon: ({ color }) => <ExplorerIcon size={28} color={color} />,
        }}
      />
      <Tabs.Screen
        name="favorite"
        options={{
          title: "Favorite",
          tabBarIcon: ({ color }) => <HeartIcon size={28} color={color} />,
        }}
      />

      <Tabs.Screen
        name="index"
        options={{
          headerShown: true,
          title: "Home",
          headerTitle: "",
          headerStyle: {
            backgroundColor: "#ffffff",
            borderBottomColor: "#E0E0E0",
            borderBottomWidth: 1,
            height: Platform.OS === "ios" ? 110 : 80,
          },
          tabBarIcon: ({ color }) => <HomeIcon size={28} color={color} />,

          headerLeft: () => (
            <Text
              style={{
                paddingLeft: 16,
                fontFamily: "Graphik-Medium",
                fontSize: 24,
                fontWeight: "medium",
                color: "#000000",
              }}
            >
              Voyages
            </Text>
          ),
          headerRight: () => (
            <Pressable style={({ pressed }) => ({ backgroundColor: pressed ? "#e0e0e0" : "#f0f0f0", padding: 8, borderRadius: 100, marginRight: 16 })}>
              <AntDesign name="bars" size={18} color="#1e1e1e" />
            </Pressable>
          ),
        }}
      />

      <Tabs.Screen
        name="message"
        options={{
          title: "Message",
          tabBarIcon: ({ color }) => <MessageIcon size={28} color={color} />,
        }}
      />

      <Tabs.Screen
        name="profil"
        options={{
          title: "Profil",
          tabBarIcon: ({ color }) => <IconSymbol size={28} name="person.fill" color={color} />,
        }}
      />
    </Tabs>
  );
}
