import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 154,
    borderRadius: 10,
    backgroundColor: "#1B1D1E",
    position: "relative",
    flexDirection: "row",
  },
  avatar: {
    position: "absolute",
    bottom: 0,
    zIndex: 1,
  },
  react_logo: {
    position: "absolute",
    top: 0,
  },
  content: {
    marginLeft: 140,
    justifyContent: "center",
  },
  greeting: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
  },
  emotion: {
    width: 20,
    height: 20,
  },
  message: {
    color: "#FFFFFF",
    fontSize: 14,
    fontFamily: "Urbanist_400Regular",
  },
  username: {
    color: "#FFFFFF",
    fontSize: 22,
    fontFamily: "Urbanist_800ExtraBold",
    marginBottom: 32,
  },
})
