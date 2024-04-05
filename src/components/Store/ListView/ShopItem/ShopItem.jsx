import './ShopItem.css';

export const ShopItem = ({ item }) => {
  return (
    <div className="item">
      <div className="item_image-container">
        <img className="item_image" src={item.img} alt={item.name} />
      </div>
      <div className="item_name">{item.name}</div>
      <span>{item.color}</span>
      <div className="item_price">${item.price}</div>
      <button className="item_button">Add to cart</button>
    </div>
  )
}
