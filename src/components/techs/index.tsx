import { Image, View } from "react-native"
import { Marquee } from "@animatereactnative/marquee"

import { TECHS } from "@/utils/techs"
import { styles } from "./styles"

export function Techs() {
  return (
    <Marquee speed={0.5} spacing={10}>
      <View style={styles.container}>
        {TECHS.map((tech) => (
          <Image key={tech.id} source={tech.img} style={styles.tech} />
        ))}
      </View>
    </Marquee>
  )
}
