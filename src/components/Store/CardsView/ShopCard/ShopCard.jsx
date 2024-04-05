import './ShopCard.css';

export const ShopCard = ({ card }) => {
  return (
    <div className="card">
      <div className="card_name">{card.name}</div>
      <div className="card_color">{card.color}</div>
      <div className="card_image-container">
        <img className="card_image" src={card.img} alt={card.name} />
      </div>
      <div className="card_footer">
        <div className="card_price">${card.price}</div>
        <button className="card_button">Add to cart</button>
      </div>
    </div>
  )
}
