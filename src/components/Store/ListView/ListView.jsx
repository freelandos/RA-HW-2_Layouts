import { ShopItem } from './ShopItem';
import './ListView.css';

export function ListView({ items }) {
  return (
    <div className="list_items_container">
      {
        items.map((item, index) => (
          <ShopItem item={item} key={index} />
        ))
      }
    </div>
  )
}
