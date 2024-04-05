import { ShopCard } from './ShopCard';
import './CardsView.css';

export const CardsView = ({ cards }) => {
  return (
    <div className="cards_container">
      {
        cards.map((card, index) => (
          <ShopCard card={card} key={index} />
        ))
      }
    </div>
  )
}
