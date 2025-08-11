export function DataCard(props) {
  return(
    <div className="d-flex flex-wrap">
      {
        props.data.map((item,i) => 
          <div key={i} className="card mx-2" style={{width:'200px'}}>
            <div className="card-header">
              {
                Object.keys(item)[0]
              }
            </div>
            <div className="card-body">
              {
                item[Object.keys(item)[0]]
              }
            </div>
            <div className="card-footer">
                <button className="btn btn-warning bi bi-pen-fill"></button>
                <button className="btn btn-danger bi bi-trash mx-3"></button>
            </div>
          </div>
        )
      }
    </div>
  )
}