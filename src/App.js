
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
        categories.map(({title}) => (
          <div>
            <div className="backgound-image"></div>
            <div className="category-container">
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
