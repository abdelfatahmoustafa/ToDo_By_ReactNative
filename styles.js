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
  },
  content: {
    // flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
  },

  input: {
    width: "90%",
    borderColor: "gray",
    borderWidth: 1.5,
    borderRadius: 12,
    paddingHorizontal: 15,
    paddingVertical: 10,
    marginBottom: 20,
    fontSize: 16,
    backgroundColor: "#fff",
    alignSelf: "center",
  },

  description: {
    height: 120,
    textAlignVertical: "top",
  },

  label: {
    fontSize: 16,
    color: "#444",
    fontWeight: "600",
    marginBottom: 8,
    marginLeft: "5%",
    alignSelf: "flex-start",
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
    color: "#9E9E9E",
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
});
