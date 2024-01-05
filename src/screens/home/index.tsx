import { View } from "react-native"

import { styles } from "./styles"
import { ProfileCard } from "@/components/profile_card"

export function Home() {
  return (
    <View style={styles.container}>
      <ProfileCard />
    </View>
  )
}
