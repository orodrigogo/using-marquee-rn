import { Image, View } from "react-native"

import { TECHS } from "@/utils/techs"
import { styles } from "./styles"

export function Techs() {
  return (
    <View style={styles.container}>
      {TECHS.map((tech) => (
        <Image key={tech.id} source={tech.img} style={styles.tech} />
      ))}
    </View>
  )
}
