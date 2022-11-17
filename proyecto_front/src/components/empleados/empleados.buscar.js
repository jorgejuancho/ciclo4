import React from "react";
import { Container, Row } from "react-bootstrap";
import { request } from "../helper/helper";
import "./empleados.buscar.css";
import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory, { PaginationProvider, PaginationListStandalone} from "react-bootstrap-table2-paginator";

const products = [
  {
    id: 1,
    name: "tito",
    price: 1000,
  },
  {
    id: 2,
    name: "pepe",
    price: 1500,
  },
  {
    id: 3,
    name: "juan",
    price: 1500,
  },
  {
    id: 4,
    name: "maria",
    price: 500,
  },
  {
    id: 5,
    name: "jorge",
    price: 2000,
  },
  {
    id: 6,
    name: "luis",
    price: 800,
  },
  {
    id: 7,
    name: "king",
    price: 1000,
  },
  {
    id: 8,
    name: "rosa",
    price: 1800,
  },
  {
    id: 9,
    name: "augusto",
    price: 800,
  },
  {
    id: 10,
    name: "elsy",
    price: 1800,
  },
  {
    id: 10,
    name: "elsy",
    price: 1800,
  },
  {
    id: 10,
    name: "elsy",
    price: 1800,
  },
  {
    id: 10,
    name: "elsy",
    price: 1800,
  },
  {
    id: 10,
    name: "elsy",
    price: 1800,
  },
];
const columns = [
  {
    dataField: "id",
    text: "Product ID",
  },
  {
    dataField: "name",
    text: "Product Name",
  },
  {
    dataField: "price",
    text: "Product Price",
  },
];

export default class EmpledosBuscar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    request
      .get("/empleados")
      .then((response) => {
        console.log(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  render() {
    const options = {
      custom: true,
      totalSize: products.length,
    };
    return (
      <Container id="empleados-buscar-container">
        <Row>
          <h1>Buscar empleados</h1>
        </Row>
        <Row>
          <PaginationProvider pagination={paginationFactory(options)}>
            {({ paginationProps, paginationTableProps }) => (
              <div>
                <BootstrapTable
                  keyField="id"
                  data={products}
                  columns={columns}
                  {...paginationTableProps}
                />
                <PaginationListStandalone {...paginationProps} />
              </div>
            )}
          </PaginationProvider>
        </Row>
      </Container>
    );
  }
}