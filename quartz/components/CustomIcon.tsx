import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { classNames } from "../util/lang"

const CustomIcon: QuartzComponent = ({ fileData, displayClass }: QuartzComponentProps) => {
  return (
    <h2 class={classNames(displayClass, "custom-icon")}>
      <img src="PLACEHOLDER.jpg" alt="Mountain graphic with Mirakas text" width="100" height="100"></img>
    </h2>
  )
}


export default (() => CustomIcon) satisfies QuartzComponentConstructor
