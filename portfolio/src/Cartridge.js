import "./Cartridge.css";

const Cartridge = ({
  image, 
  title, 
  link
 }) => {
  return (
    <div className="CartObj">
      <h1>{title}</h1>

      <div className="Cartridge">
        <img src={require('./imgs/cartridge.png')} alt="Shell" className="CartImg Shell" />
        <div className="StickerWrapper">
          <img src={image} alt="Sticker" className="StickerImg" />
        </div>
      </div>
    </div>
  );
};

export default Cartridge;
