import axios from "axios";
import { useEffect, useState } from "react";

import {
  Form,
  FormGroup,
  Input,
  Label,
  Pagination,
  PaginationItem,
  PaginationLink,
  Table,
} from "reactstrap";

function Products() {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);
  const [perPage, setPerPage] = useState(4);

  let arr = [];

  let getData = () => {
    axios
      .get(`https://reqres.in/api/products?per_page=${perPage}&page=${page}`)
      .then((res) => setProducts(res.data))
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getData();
  }, [page, perPage]);

  for (let i = 1; i <= products.total_pages; i++) {
    arr.push(i);
  }

  return (
    <>
      <Table bordered dark hover responsive striped>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Year</th>
            <th>Color</th>
            <th>Pantone Value</th>
          </tr>
        </thead>
        <tbody>
          {products.data &&
            products.data.map((item) => (
              <tr key={item.id}>
                <td scope="row">{item.id}</td>
                <td>{item.name}</td>
                <td>{item.year}</td>
                <td>{item.color}</td>
                <td>{item.pantone_value}</td>
              </tr>
            ))}
        </tbody>
      </Table>

      <div
        style={{
          display: "block",
          width: 700,
          padding: 30,
        }}
      >
        <Pagination>
          {arr &&
            arr.map((num) => (
              <PaginationItem key={num}>
                <PaginationLink href="#" onClick={() => setPage(num)}>
                  {num}
                </PaginationLink>
              </PaginationItem>
            ))}
        </Pagination>
      </div>

      <Form style={{ width: "150px" }}>
        <FormGroup>
          <Label for="exampleSelect">Select</Label>
          <Input
            id="exampleSelect"
            name="select"
            type="select"
            onClick={(e) => setPerPage(e.target.value)}
          >
            <option value={2}>2</option>
            <option value={3}>3</option>
            <option value={4} selected>
              4
            </option>
            <option value={6}>6</option>
            <option value={12}>12</option>
          </Input>
        </FormGroup>
      </Form>
    </>
  );
}

export default Products;
