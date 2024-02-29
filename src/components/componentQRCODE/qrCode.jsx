import ImageDefault from "../imageDefault";
import Paragraph from "../paragraph";
import TitleLevel2 from "../titleLevel1";
import imageQrCode from "../../images/image-qr-code.png"

export default function QrCode() {
  return (
    <div>
        <ImageDefault urlImage={imageQrCode} />
        <TitleLevel2 />
        <Paragraph />
    </div>
  )
}
