import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "../../styles";
import { useRoute } from "@react-navigation/native";
const Details = () => {
  const Data = useRoute().params.item;
  console.log(Data);

  const routeData = {
    title: "قراءة كتاب",
    time: "2025-06-22 - 08:00 PM",
    content: "اقرأ فصلين من كتاب تطوير الذات.",
  };

  const handleDone = () => {};
  const handleDelete = () => {};
  const handlePin = () => {};

  return (
    <View style={styles.container}>
      <View style={styles.cardDetails}>
        {/* Header */}
        <View style={styles.headerDetails}>
          <Text style={styles.titleDetails}>{Data.title}</Text>
          <Text style={styles.editIcon}>✏️</Text>
        </View>

        {/* Time */}
        <View style={styles.timeContainer}>
          <Text style={styles.timeIcon}>📅</Text>
          <Text style={styles.timeText}>{routeData.time}</Text>
        </View>

        {/* Content */}
        <Text style={styles.content}>{routeData.contentDetails}</Text>

        {/* Action Buttons */}
        <View style={styles.actionContainer}>
          <TouchableOpacity style={styles.actionButton} onPress={handleDone}>
            <Text style={styles.doneIcon}>✅</Text>
            <Text style={styles.actionText}>Done</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.actionButton} onPress={handleDelete}>
            <Text style={styles.deleteIcon}>🗑️</Text>
            <Text style={styles.actionText}>Delete</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.actionButton} onPress={handlePin}>
            <Text style={styles.pinIcon}>📌</Text>
            <Text style={styles.actionText}>Pin</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Details;
