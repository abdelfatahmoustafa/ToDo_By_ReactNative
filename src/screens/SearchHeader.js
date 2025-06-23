import React, { useState } from "react";
import { TextInput, StyleSheet, View } from "react-native";

const SearchHeader = () => {
  const [search, setSearch] = useState("");

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="ابحث هنا..."
        placeholderTextColor="#ccc"
        style={styles.input}
        value={search}
        onChangeText={setSearch}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 10,
  },
  input: {
    backgroundColor: "white",
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 8,
    fontSize: 14,
  },
});

export default SearchHeader;
