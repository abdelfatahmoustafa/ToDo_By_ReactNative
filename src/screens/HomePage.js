import { View, Text, TouchableOpacity, FlatList } from "react-native";
import React, { use, useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import { styles } from "../../styles";
import { PATHS } from "../routes/Router";
import { StackActions, useNavigation } from "@react-navigation/native";

const todoData = [
  { id: 1, title: "اشترِ حاجات البيت", completed: false },
  { id: 2, title: "راجع الكود بتاع المشروع", completed: true },
  { id: 3, title: "اتصل بـ محمد", completed: false },
  { id: 4, title: "اذهب للجيم", completed: false },
  { id: 5, title: "اقرأ فصل من كتاب", completed: true },
  { id: 6, title: "اذهب للجيم", completed: false },
  { id: 7, title: "اقرأ فصل من كتاب", completed: true },
  { id: 8, title: "اذهب للجيم", completed: false },
  { id: 9, title: "اقرأ فصل من كتاب", completed: true },
];

const HomePage = () => {
  const { navigate, dispatch } = useNavigation();
  const [todo, setTodo] = useState(todoData);
  return (
    <View style={styles.container}>
      <FlatList
        data={todo}
        keyExtractor={(item) => item.id}
        renderItem={(arg) => {
          return (
            <TouchableOpacity
              onPress={() => navigate(PATHS.Details, { item: arg.item })}
            >
              <View style={styles.card}>
                <Text
                  style={[
                    styles.title,
                    arg.item.completed && styles.completedTitle,
                  ]}
                >
                  {arg.item.title}
                </Text>
              </View>
            </TouchableOpacity>
          );
        }}
      />

      <TouchableOpacity
        style={styles.iconAdd}
        onPress={() => {
          navigate(PATHS.ADD_TODO, { say: "hhh" });
          // dispatch({ ...StackActions.replace(PATHS.ADD_TODO) });
        }}
      >
        <Ionicons name="add" size={28} color={"white"} />
      </TouchableOpacity>
    </View>
  );
};

export default HomePage;
