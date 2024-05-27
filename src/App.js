import { useState } from "react"
import { useEffect } from "react"


export default function App() {
  const [products, setProducts] = useState([])

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then(res => res.json())
      .then(data => setProducts(data.products))
  }, [])
  return (
    <>
      <div className="container-fluid bg-light p-3 mt-2">
        <h3 className="alert alert-success text-center">Products List</h3>
        <table className="table table-hover table-striped table-dark">
          <thead>
            <tr>
              <th>
                S.No.
              </th>
              <th>
                Title
              </th>
              <th>
                Brand
              </th>
              <th>
                Category
              </th>
              <th>
                price
              </th>
              <th>
                Image
              </th>
              <th>
                Description
              </th>
            </tr>
          </thead>
          <tbody>
            {products.map(ob => <tr>
              <td>{ob.id}</td>
              <td>{ob.title}</td>
              <td>{ob.brand}</td>
              <td>{ob.category}</td>
              <td>$ {ob.price}</td>
              <td>
                <img src={ob.thumbnail} height={100} width={150} /></td>
              {/* <td>
                {ob.images.map(image => <img src={image} height={50} width={50}></img>)}
              </td> */}
              <td>{ob.description}</td>

            </tr>)}
          </tbody>
        </table>
      </div>
    </>
  )
}