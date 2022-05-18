import React from "react";
import { StatusBar } from "expo-status-bar";
import { View, Text, StyleSheet, Button } from "react-native";

export default class MainPage extends React.Component {
  render() {
    const styles = StyleSheet.create({
      container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
      },
    });
    return (
      <View style={styles.container}>
        <Text>haha</Text>
        <StatusBar style="auto" />
        <Button
          title="Go to SearchPage"
          onPress={() => this.props.navigation.navigate("SearchPage")}
        />
      </View>
    );
  }
}
