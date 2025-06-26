import React from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Modal,
  FlatList,
} from "react-native";
import { styles } from "../../styles";
import FontAwesome from "@expo/vector-icons/FontAwesome";

const SearchSortHeader = () => {
  return (
    <View style={styles.containerForSearch}>
      {/* Search Input */}
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Search by task title"
          placeholderTextColor="#8B9DC3"
        />
        <View style={styles.searchIconContainer}>
          <Text style={styles.searchIcon}>🔍</Text>
        </View>
      </View>

      {/* Sort Button */}
      <TouchableOpacity style={styles.sortButton}>
        <View style={styles.sortIconContainer}>
          <FontAwesome name="sort-amount-desc" size={15} color="white" />
        </View>
        <Text style={styles.sortText}>Sort By:</Text>
        <Text style={styles.dropdownArrow}>▼</Text>
      </TouchableOpacity>

      {/* Sort Modal (Static for Design Only) */}
      <Modal transparent={true} visible={false}>
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Sort By:</Text>
            <FlatList
              data={["Date", "Priority", "Status", "Alphabetical"]}
              renderItem={({ item }) => (
                <TouchableOpacity style={styles.sortOption}>
                  <Text style={styles.sortOptionText}>{item}</Text>
                </TouchableOpacity>
              )}
              keyExtractor={(item) => item}
            />
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default SearchSortHeader;
