import ItemList from './ItemList';
const Content = ({items, handleClick, handleDelete}) => {
return(
    <main>
        {items.length ? (
            <ItemList items={items} handleClick={handleClick} handleDelete={handleDelete}/>
        ) : (
            <p>You don't have a list</p>
        )}
    </main>
  )
}

export default Content