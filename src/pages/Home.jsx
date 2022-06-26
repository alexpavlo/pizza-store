import React, { useCallback } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { Categories, SortPopup, PizzaBlock, LoadingBlock} from '../components/index'
import {setCategory, setSortBy} from '../redux/actions/filters'
import {fetchPizzas} from '../redux/actions/pizzas'
import {addPizzaToCart} from '../redux/actions/cart'

const categoryNames = ['Мясные','Вегетарианская','Гриль','Острые','Закрытые']

const sortItems = [
  {name:'популярности', type: 'popular', order: 'desc'},
  {name:'цене', type: 'price', order: 'desc'},
  {name:'алфавиту', type:'name', order: 'asc'},
  ]

export default function Home() {
  const dispatch = useDispatch();
  const items = useSelector(({pizzas}) => pizzas.items);
  const cartitems = useSelector(({cart}) => cart.items);
  const isLoaded = useSelector(({pizzas}) => pizzas.isLoaded);
  const { category, sortBy} = useSelector(({filters}) => filters);

  React.useEffect(()=>{
    dispatch(fetchPizzas(sortBy, category))
  }, [category, sortBy]);

  const onSelectCategory = useCallback((index) => {
    dispatch(setCategory(index));
  }, []);

  const onSelectSortType = useCallback((type)=> {
    dispatch(setSortBy(type))
  }, [])

  const handleAddPizzaToCart = (obj) => {
    dispatch({
      type: 'ADD_PIZZA_CART',
      payload: obj,
    });
  };

  return (
    <div className="container">
          <div className="content__top">
            <Categories 
            activeCategory={category}
            onClickCategory={onSelectCategory} 
            items={categoryNames}/>
            <SortPopup activeSortType={sortBy.type} items={sortItems} onClickSortType={onSelectSortType}/>
            </div>
          <h2 className="content__title">Все пиццы</h2>
          <div className="content__items">
          {isLoaded 
          ? items.map((obj) => <PizzaBlock  onClickAddPizza={handleAddPizzaToCart} key={obj.id} addedCount={cartitems[obj.id] && cartitems[obj.id].items.length} {...obj} />)
          : Array(12).fill(0).map((_, index)=> <LoadingBlock key={index} />)}
          
          </div>
        </div>
  )
}
