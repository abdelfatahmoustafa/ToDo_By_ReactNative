import { View, Text, TouchableOpacity, FlatList } from "react-native";
import React, { use, useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import { styles } from "../../styles";
import { PATHS } from "../constants/paths";
import { StackActions, useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";

const HomePage = () => {
  const { navigate } = useNavigation();
  const [todo, setTodo] = useState([]);
  const todos = useSelector((state) => state.todos.todos);
  return (
    <View style={styles.container}>
      <FlatList
        data={todos}
        keyExtractor={(item) => item.id}
        renderItem={(arg) => {
          return (
            <TouchableOpacity
              onPress={() => navigate(PATHS.DETAILS, { item: arg.item })}
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
          navigate(PATHS.ADD_TODO);
        }}
      >
        <Ionicons name="add" size={28} color={"white"} />
      </TouchableOpacity>
    </View>
  );
};

export default HomePage;
