import { Image, Text, View } from "react-native"

import { Techs } from "@/components/techs"
import { styles } from "./styles"

export function ProfileCard() {
  return (
    <View style={styles.container}>
      <Image
        source={require("@/assets/images/rodrigo.png")}
        style={styles.avatar}
      />

      <Image
        source={require("@/assets/images/react_logo.png")}
        style={styles.react_logo}
      />

      <View style={styles.content}>
        <View style={styles.greeting}>
          <Image
            source={require("@/assets/images/hi.gif")}
            style={styles.emotion}
          />
          <Text style={styles.message}>Olá, eu sou</Text>
        </View>
        <Text style={styles.username}>Rodrigo Gonçalves</Text>

        <Techs />
      </View>
    </View>
  )
}
