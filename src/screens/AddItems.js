import {
  View,
  Text,
  SafeAreaView,
  Image,
  TextInput,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
  Pressable,
} from "react-native";
import React, { useState } from "react";
import { styles } from "../../styles";
import uuid from "react-native-uuid";
import { useRoute } from "@react-navigation/native";

const AddItems = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const routeData = useRoute().params;

  const handleSubmit = () => {
    // Validate input
    if (!title.trim() || !description.trim()) {
      console.log("Please fill in all fields");
      return;
    }
    const now = new Date();
    const toda = {
      id: uuid.v4(),
      title,
      description,
      Date: now.toString(),
    };
    console.log("Todo item created:", toda);
    setDescription("");
    setTitle("");
  };

  return (
    <SafeAreaView style={{ backgroundColor: "#1e3a8a", flex: 1 }}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <KeyboardAvoidingView
          style={{ flex: 1 }}
          behavior={Platform.OS === "android" ? "height" : "padding"}
        >
          <ScrollView
            contentContainerStyle={{ flexGrow: 1 }}
            keyboardShouldPersistTaps="handled"
            showsVerticalScrollIndicator={false}
          >
            <View style={styles.content}>
              <Image
                style={styles.img}
                source={require("../../assets/download.png")}
              />

              <Text style={styles.label}>You Todo :</Text>
              <TextInput
                style={styles.input}
                placeholder="Enter U todo Title"
                onChangeText={(val) => setTitle(val)}
                value={title}
              />
              <Text style={styles.label}>You Description :</Text>
              <TextInput
                onChangeText={(val) => setDescription(val)}
                style={[styles.input, styles.description]}
                multiline={true}
                numberOfLines={4}
                placeholder="Enter U Description"
                value={description}
              />
              <Pressable
                onPress={() => {
                  handleSubmit();
                }}
                style={({ pressed }) => ({
                  backgroundColor: pressed ? "gray" : "#63D9F3",
                  borderRadius: 10,
                })}
              >
                <Text
                  style={{
                    ...styles.button,
                    fontWeight: "bold",
                  }}
                >
                  Create
                </Text>
              </Pressable>
            </View>
          </ScrollView>
        </KeyboardAvoidingView>
      </TouchableWithoutFeedback>
    </SafeAreaView>
  );
};

export default AddItems;
