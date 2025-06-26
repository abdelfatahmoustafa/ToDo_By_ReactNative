import { View, Text, TouchableOpacity, Pressable } from "react-native";
import { styles } from "../../styles";
import { useNavigation, useRoute } from "@react-navigation/native";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import Toast from "react-native-toast-message";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { markAsCompleted, removeTodo } from "../Redux/Slices/todos.slice";

const Details = () => {
  const DataRoute = useRoute().params.item;

  const todo = useSelector((state) =>
    state.todos.todos.find((todo) => todo.id === DataRoute.id)
  );

  const [done, setDone] = useState(todo?.completed ?? false);

  const dispatch = useDispatch();
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.cardDetails}>
        <View style={styles.headerDetails}>
          <Text style={styles.titleDetails}>{DataRoute.title}</Text>
          <Text style={styles.editIcon}>✏️</Text>
        </View>

        <View style={styles.timeContainer}>
          <Text style={styles.timeIcon}>📅</Text>
          <Text style={styles.timeText}>{DataRoute.Date}</Text>
        </View>

        <Text style={styles.content}>{DataRoute.description}</Text>

        <View style={styles.actionContainer}>
          <TouchableOpacity
            style={styles.actionButton}
            onPress={() => {
              dispatch(markAsCompleted(DataRoute.id));
              if (todo && !todo.completed) {
                Toast.show({
                  type: "success",
                  text1: "Task Completed 🎉",
                  duration: 1000,
                });
              } else {
                Toast.show({
                  type: "error",
                  text1: "Not Completed",
                  duration: 1000,
                });
              }
              setDone(!done);
            }}
          >
            <Text style={styles.doneIcon}>
              <MaterialIcons
                name="done-outline"
                size={32}
                color={done ? "green" : "white"}
              />
            </Text>
            <Text style={styles.actionText}>Done</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.actionButton}
            onPress={() => {
              dispatch(removeTodo(DataRoute.id));
              Toast.show({
                type: "success",
                text1: "Task deleted",
                text2: "The task was removed successfully 👌",
              });

              setTimeout(() => {
                navigation.goBack();
              }, 400);
            }}
          >
            <Text style={styles.deleteIcon}>🗑️</Text>
            <Text style={styles.actionText}>Delete</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.actionButton}>
            <Text style={styles.pinIcon}>📌</Text>
            <Text style={styles.actionText}>Pin</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Details;
