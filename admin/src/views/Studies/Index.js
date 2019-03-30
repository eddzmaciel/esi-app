import React, { Component } from "react";
import {
  Container,
  Row,
  Col,
  Card,
  CardHeader,
  CardBody,
  Button
} from "shards-react";
import { MDBDataTable } from "mdbreact";

import PageTitle from "../../components/common/PageTitle";

const ButtonsActions = props => {
  return (
    <div
      className="rt-td"
      role="gridcell"
      style={{ flex: "180 0 auto", width: 180, maxWidth: 300 }}
    >
      <div className="d-table mx-auto btn-group-sm btn-group">
        <Button
          className="btn btn-white"
          onClick={() => props.onOpen(props.value)}
        >
          <i className="material-icons">border_color</i>
        </Button>
        <Button
          className="btn btn-white"
          onClick={() => props.onPreview(props.value)}
        >
          <i className="material-icons">visibility</i>
        </Button>
        <Button
          className="btn btn-white"
          onClick={() => props.onDelete(props.value)}
        >
          <i className="material-icons">delete</i>
        </Button>
      </div>
    </div>
  );
};

class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataTable: {
        columns: [
          {
            label: "Número",
            field: "number",
            sort: "asc",
            width: 100
          },
          {
            label: "Fecha",
            field: "date",
            sort: "asc",
            width: 100
          },
          {
            label: "Típo",
            field: "type",
            sort: "asc",
            width: 100
          },
          {
            label: "Categoría",
            field: "category",
            sort: "asc",
            width: 100
          },
          {
            label: "Nombre",
            field: "name",
            sort: "asc",
            width: 100
          },
          {
            label: "Precio",
            field: "price",
            sort: "asc",
            width: 100
          },
          {
            label: "Acciones",
            field: "operations",
            sort: "asc",
            width: 100
          }
        ],
        rows: [
          {
            number: "12520008552",
            date: "23/02/2019",
            type: "Rayos X",
            category: "Radiología Digital 2D",
            name: "ATM Frontal (BA/BC)",
            price: "$920",
            operations: (
              <ButtonsActions
                onOpen={this.onOpen}
                onPreview={this.onPreview}
                onDelete={this.onDelete}
                value={"12520008552"}
              />
            )
          },
          {
            number: "12520008553",
            date: "24/02/2019",
            type: "Rayos X",
            category: "Radiología Digital 2D",
            name: "Senos Maxiliares",
            price: "$830",
            operations: (
              <ButtonsActions
                onOpen={this.onOpen}
                onPreview={this.onPreview}
                onDelete={this.onDelete}
                value={"12520008553"}
              />
            )
          },
          {
            number: "12520008554",
            date: "24/02/2019",
            type: "Rayos X",
            category: "Radiología Digital 3D (CBCT)",
            name: "Escaner Mandubular",
            price: "$1830",
            operations: (
              <ButtonsActions
                onOpen={this.onOpen}
                onPreview={this.onPreview}
                onDelete={this.onDelete}
                value={"12520008554"}
              />
            )
          }
        ]
      }
    };
  }

  onOpen = value => {
    console.log("opening study info!-->", value);
    this.props.history.push("/studies-form");
  };

  onPreview = value => {
    console.log("preview study!-->", value);
    this.props.history.push("/studies-preview");
  };

  onDelete = value => {
    console.log("deleting study!-->", value);
  };

  render() {
    const { dataTable } = this.state;
    return (
      <Container fluid className="main-content-container px-4">
        {/* Page Header */}
        <Row noGutters className="page-header py-4">
          <PageTitle
            sm="6"
            title="Estudios Médicos"
            subtitle="Módulo"
            className="text-sm-left"
          />
        </Row>

        {/* Default Light Table */}
        <Row>
          <Col>
            <Card small className="mb-4">
              <CardHeader className="border-bottom">
                <Row>
                  <Col sm="12" lg="6">
                    <h6 className="m-0">Listado de datos</h6>
                  </Col>
                  <Col sm="12" lg="6" className="text-sm-right">
                    <Button squared onClick={() => this.onOpen()}>
                      Nuevo
                    </Button>
                  </Col>
                </Row>
              </CardHeader>
              <CardBody className="p-0 pb-3">
                <div style={{ margin: 15 }}>
                  <MDBDataTable striped hover data={dataTable} />
                </div>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    );
  }
}
export default Index;
