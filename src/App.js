import './categories.styles.scss'

const  App =() => {

  const categories = [
    {
      id:1,
      title:'Hats'
    },
    {
      id:2,
      title:'jackets'
    },
    {
      id:3,
      title:'sneakers'
    },
    {
      id:4,
      title:'women'
    },
    {
      id:5,
      title:'men'
    }
  ]

  return (
    <div className="categories-container">
      {
        categories.map(({title,id}) => (
          <div key={id} className='category-container'>
            <div className="backgound-image"></div>
            <div className="category-body-container">
              <h2>{title}</h2>
              <p>Shop now</p>
            </div>
          </div>
        ))
      }
     
    </div>
  );
}

export default App;
