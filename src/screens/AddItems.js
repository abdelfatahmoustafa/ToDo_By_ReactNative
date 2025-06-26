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
import { useState } from "react";
import { styles } from "../../styles";
import uuid from "react-native-uuid";
import { useDispatch } from "react-redux";
import { addTodo } from "../Redux/Slices/todos.slice";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";

const AddItems = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const dispatch = useDispatch();
  const handleSubmit = () => {
    // Validate input
    // if (!title.trim() || !description.trim()) {
    //   console.log("Please fill in all fields");
    //   return;
    // }
    const now = new Date();
    const toda = {
      id: uuid.v4(),
      title,
      description,
      completed: false,
      Date: now.toString(),
    };
    console.log("Todo item created:", toda);
    dispatch(addTodo(toda));
    // setDescription("");
    // setTitle("");
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

              <View style={styles.inputWrapper}>
                <FontAwesome5
                  name="tasks"
                  size={20}
                  color="#999"
                  style={styles.icon}
                />
                <TextInput
                  style={styles.input}
                  placeholder="Enter your title"
                  onChangeText={(val) => setTitle(val)}
                  value={title}
                  placeholderTextColor="#999"
                />
              </View>

              <View style={styles.inputWrapper}>
                <FontAwesome5
                  name="tasks"
                  size={20}
                  color="#999"
                  style={styles.icon}
                />
                <TextInput
                  style={[styles.input, styles.descriptionInput]}
                  placeholder="Enter your description"
                  onChangeText={(val) => setDescription(val)}
                  value={description}
                  multiline
                  numberOfLines={4}
                  placeholderTextColor="#999"
                />
              </View>

              <Pressable
                onPress={() => {
                  handleSubmit();
                }}
                style={({ pressed }) => ({
                  backgroundColor: pressed ? "gray" : "#0096FF",
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
