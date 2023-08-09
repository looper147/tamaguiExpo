import { Link } from "expo-router";
import React from "react";
import { Text, View } from "react-native";
import { Button } from "tamagui";

export default function DashboardPage() {
  return (
    <View>
      <Text>Dashboard</Text>
      <Link href={"/vehicles"} asChild>
        <Button>
          <Text>Vehicles</Text>
        </Button>
        {/* </Link>
      <Link href={"/invoices"}>
        <Button>Invoices</Button> */}
      </Link>
    </View>
  );
}
