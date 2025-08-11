export function DataCard(props) {
  return (
    <div>
      <div className="my-3">{props.caption}</div>
      
      <div className="d-flex flex-wrap">
        {
          props.data.map((item, i) =>
            <div key={i} className="card mx-2" style={{ width: '200px' }}>
              <div className="card-header">
                {
                  <div className="bi bi-person-circle fs-5"> User Details</div>
                }
              </div>
              <div className="card-body">
                {
                  Object.keys(item).map(key =>
                    <div>
                      <ul className="list-unstyled">
                        <li><span className="fw-bold">{key}</span>: {item[key]}</li>
                      </ul>
                    </div>
                  )
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
    </div>
  )
}