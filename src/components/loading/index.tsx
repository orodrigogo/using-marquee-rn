import { View, ActivityIndicator } from "react-native"

import { styles } from "./styles"

export function Loading() {
  return (
    <View style={styles.container}>
      <ActivityIndicator size="small" color="#369EFF" />
    </View>
  )
}
