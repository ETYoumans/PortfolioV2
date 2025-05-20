import "./Cartridge.css"
import CartridgeImg from './imgs/cartridge.png'

const Cartridge = ({
    image,
    link
}) => {
    return (
    <div className="Cartridge">
      <div className="Shell">
        <img 
            src={CartridgeImg}
            alt="Cartridge"
            className="CartImg"
        />
      </div>
      <div className="Sticker">
        <img 
            src={image}
            alt="Sticker"
            className="StickerImg"
        />
      </div>
    </div>
    );
}

export default Cartridge;