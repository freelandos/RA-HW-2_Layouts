import { useState } from 'react';
import { IconSwitch } from './IconSwitch';
import { CardsView } from './CardsView';
import { ListView } from './ListView';
import './Store.css';

export const Store = ({ products }) => {
  const [viewType, setViewType] = useState('view_list');

  const switchView = () => {
    setViewType(viewType === 'view_list' ? 'view_module' : 'view_list');
  }

  return (
    <div className="store">
      <IconSwitch icon={viewType} onSwitch={switchView} />
      {viewType === "view_list" ? <CardsView cards={products} /> : <ListView items={products} />}
    </div>
  )
}
