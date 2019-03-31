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
import MaterialTable from "material-table";
import PageTitle from "../../components/common/PageTitle";

import feathers from "../../feathers";

class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataTable: []
    };
  }

  componentWillMount = async () => {
    this.getInfo();
  };

  getInfo = async () => {
    const reports = feathers.service("reports");
    let getRecords = await reports.find({});
    if (getRecords.data.length > 0) {
      this.setState({ dataTable: getRecords.data });
    } else {
      console.log("getRecords.data-->", getRecords.data);
    }
  };

  onOpenForm = value => {
    if (value !== null) {
      this.props.history.push({
        pathname: "/reports-form",
        state: { report: value }
      });
    } else {
      this.props.history.push("/reports-form");
    }
  };

  onPreview = value => {
    console.log("onPreview value-->", value);
  };

  onDelete = value => {
    console.log("onDelete value!-->", value);
  };

  render() {
    const { dataTable } = this.state;
    return (
      <Container fluid className="main-content-container px-4">
        {/* Page Header */}
        <Row noGutters className="page-header py-4">
          <PageTitle
            sm="6"
            title="Reportes "
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
                    <Button squared onClick={() => this.onOpenForm()}>
                      Nuevo
                    </Button>
                  </Col>
                </Row>
              </CardHeader>
              <CardBody className="p-0 pb-3">
                <div style={{ margin: 15 }}>
                  <MaterialTable
                    columns={[
                      {
                        title: "Título de reporte",
                        field: "title"
                      },
                      { title: "Fecha", field: "dateGenerated" },
                      {
                        title: "Descripción",
                        field: "description"
                      }
                    ]}
                    data={dataTable}
                    title="Reportes Generados"
                    onRowClick={(event, rowData) => {
                      this.onOpenForm(rowData);
                    }}
                    actions={[
                      {
                        icon: "border_color",
                        tooltip: "Editar",
                        iconProps: {
                          style: { fontSize: 20, color: "#C3C7CC" }
                        },
                        onClick: (event, rowData) => {
                          this.onOpenForm(rowData);
                        }
                      },
                      {
                        icon: "visibility",
                        tooltip: "Ver",
                        iconProps: {
                          style: { fontSize: 20, color: "#C3C7CC" }
                        },
                        onClick: (event, rowData) => {
                          this.onPreview(rowData._id);
                        }
                      },
                      {
                        icon: "delete",
                        tooltip: "Eliminar",
                        iconProps: {
                          style: { fontSize: 20, color: "#C41E3C" }
                        },
                        onClick: (event, rowData) => {
                          this.onDelete(rowData._id);
                        }
                      }

                      /* rowData => ({
                        icon: "account_circle",
                        tooltip: "show user info",
                        disabled: rowData.title == "dfgdfg",
                        onClick: (event, rowData) => {
                          alert("you clicked " + rowData.title);
                        }
                      }) */
                    ]}
                    options={{
                      columnButton: true,
                      exportButton: true,
                      actionsColumnIndex: -1,
                      paging: true,
                      showEmptyDataSourceMessage: true
                    }}
                    localization={{
                      body: {
                        emptyDataSourceMessage: "No hay datos para mostrar..."
                      }
                    }}
                  />
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
