import ItemList from './ItemList';
const Content = ({items, handleCheck, handleDelete}) => {
return(
    <>
        {items.length ? (
            <ItemList items={items} handleClick={handleCheck} handleDelete={handleDelete}/>
        ) : (
            <p>You don't have a list</p>
        )}
    </>
  )
}

export default Content