import { Dimensions, StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1e3a8a",
    justifyContent: "center",
    alignItems: "center",
  },

  header: {
    // backgroundColor: "gray",
    padding: 10,
    marginTop: 35,
    fontSize: 20,
    borderRadius: 15,
    marginHorizontal: 5,
  },

  iconAdd: {
    position: "absolute",
    right: 20,
    bottom: 35,
    backgroundColor: "#63D9F3",
    padding: 12,
    borderRadius: 50,
    elevation: 9,
    shadowColor: "gray",
    shadowOffset: { width: 2, height: 1 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
  },
  img: {
    width: 200,
    height: 200,
    marginBottom: 20,
    marginTop: 20,
  },
  content: {
    // flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
    color: "#fff",
  },
  label: {
    fontSize: 16,
    color: "#333",
    marginBottom: 6,
    marginLeft: 4,
    fontWeight: "500",
  },

  inputWrapper: {
    flexDirection: "row",
    alignItems: "flex-start",
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingVertical: 8,
    backgroundColor: "#fff",
    marginBottom: 15,
  },

  icon: {
    marginRight: 8,
    color: "#0096FF",
  },

  input: {
    flex: 1,
    fontSize: 16,
    color: "#000",
    paddingVertical: 0,
    textAlignVertical: "top",
  },

  descriptionInput: {
    minHeight: 100,
  },

  button: {
    fontSize: 18,
    textTransform: "uppercase",
    paddingHorizontal: 50,
    paddingVertical: 9,
    borderRadius: 10,
    color: "#fff",
  },
  card: {
    width: Dimensions.get("window").width - 32,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    padding: 16,
    marginVertical: 5,
    borderRadius: 15,
    marginBottom: 12,
  },
  title: {
    flex: 1,
    fontSize: 16,
    color: "#333",
  },
  completedTitle: {
    textDecorationLine: "line-through",
    color: "rgb(39, 135, 50)",
  },
  cardDetails: {
    backgroundColor: "#1e3a8a",
    borderRadius: 16,
    padding: 20,
    width: Dimensions.get("window").width - 32,
  },
  headerDetails: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 12,
  },
  titleDetails: {
    fontSize: 18,
    fontWeight: "600",
    color: "#ffffff",
  },
  editIcon: {
    fontSize: 16,
  },
  timeContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 16,
  },
  timeIcon: {
    fontSize: 12,
    marginRight: 6,
  },
  timeText: {
    fontSize: 12,
    color: "#a3a3a3",
    fontWeight: "400",
  },
  contentDetails: {
    fontSize: 14,
    color: "#ffffff",
    lineHeight: 20,
    marginBottom: 24,
    opacity: 0.9,
  },
  actionContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  actionButton: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    paddingVertical: 8,
  },
  doneIcon: {
    fontSize: 24,
    marginBottom: 4,
  },
  deleteIcon: {
    fontSize: 24,
    marginBottom: 4,
  },
  pinIcon: {
    fontSize: 24,
    marginBottom: 4,
  },
  actionText: {
    fontSize: 12,
    color: "#ffffff",
    fontWeight: "500",
  },
  containerForSearch: {
    backgroundColor: "#1e3a8a",
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 5,
    paddingVertical: 12,
    gap: 8,
  },
  searchContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    // backgroundColor: "rgba(154, 49, 49, 0.15)",
    backgroundColor: "#102D53",
    borderRadius: 6,
    paddingLeft: 12,
    height: 36,
  },
  searchInput: {
    flex: 1,
    color: "#FFFFFF",
    fontSize: 14,
    paddingVertical: 0,
    fontWeight: "400",
  },
  searchIconContainer: {
    paddingHorizontal: 8,
    paddingVertical: 6,
  },
  searchIcon: {
    fontSize: 16,
    color: "#FFFFFF",
  },
  sortButton: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#102D53",
    borderRadius: 6,
    paddingHorizontal: 8,
    paddingVertical: 8,
    minWidth: 90,
  },
  sortIconContainer: {
    marginRight: 6,
    color: "#FFFFFF",
  },

  sortText: {
    color: "#FFFFFF",
    fontSize: 12,
    fontWeight: "400",
    flex: 1,
  },
  dropdownArrow: {
    color: "#FFFFFF",
    fontSize: 8,
    marginLeft: 4,
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    justifyContent: "center",
    alignItems: "center",
  },
  modalContent: {
    backgroundColor: "#FFFFFF",
    borderRadius: 8,
    padding: 16,
    minWidth: 180,
    maxHeight: 250,
  },
  modalTitle: {
    fontSize: 14,
    fontWeight: "600",
    marginBottom: 12,
    color: "#333333",
  },
  sortOption: {
    paddingVertical: 10,
    paddingHorizontal: 4,
  },
  sortOptionText: {
    fontSize: 14,
    color: "#333333",
  },
  exampleContainer: {
    flex: 1,
    backgroundColor: "#F3F4F6",
  },
});
