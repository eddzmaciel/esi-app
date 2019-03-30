import React, { Component } from "react";
import {
  Container,
  Row,
  Col,
  Card,
  CardHeader,
  CardBody,
  Button,
  ListGroup,
  ListGroupItem,
  Form,
  FormInput,
  FormGroup,
  FormCheckbox,
  FormSelect,
  FormTextarea
} from "shards-react";

import PageTitle from "../../components/common/PageTitle";

class ViewForm extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  onAdd = value => {
    console.log("saving study info!-->", value);
  };

  onCancel = value => {
    this.props.history.push("/studies");
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
                    <h6 className="m-0">Formulario</h6>
                  </Col>
                  {/* <Col sm="12" lg="6" className="text-sm-right">
                    <Button squared>Nuevo</Button>
                  </Col> */}
                </Row>
              </CardHeader>
              <CardBody className="p-0 pb-3">
                <ListGroup flush>
                  <ListGroupItem className="p-3">
                    <Row>
                      <Col>
                        <Form>
                          <Row form>
                            <Col md="4" className="form-group">
                              <label htmlFor="type">Agregar estudio:</label>
                              <div className="custom-file mb-3">
                                <input
                                  type="file"
                                  className="custom-file-input"
                                  id="customFile2"
                                />
                                <label
                                  className="custom-file-label"
                                  htmlFor="customFile2"
                                >
                                  Seleccionar archivo...
                                </label>
                              </div>
                            </Col>

                            <Col md="4" className="form-group">
                              <label htmlFor="type">Típo de estudio:</label>
                              <FormSelect id="type">
                                <option>--Seleccionar--</option>
                                <option>Rayos X</option>
                                <option>Laboratorios</option>
                              </FormSelect>
                            </Col>
                            <Col md="4" className="form-group">
                              <label htmlFor="category">Categoría:</label>
                              <FormSelect id="category">
                                <option>--Seleccionar--</option>
                                <option>Radiología Digital 2D</option>
                                <option>Radiología Digital 3D (CBCT</option>
                              </FormSelect>
                            </Col>
                          </Row>
                          <Row form>
                            <Col md="4" className="form-group">
                              <label htmlFor="name">Nombre:</label>
                              <FormInput
                                id="name"
                                type="text"
                                placeholder="Ingrese el texto..."
                              />
                            </Col>
                            <Col md="4" className="form-group">
                              <label htmlFor="price">Precio:</label>
                              <FormInput
                                id="price"
                                type="number"
                                placeholder="Ingrese el monto.."
                              />
                            </Col>
                          </Row>

                          <FormGroup>
                            <label htmlFor="feInputAddress">Anotaciones:</label>
                            <FormTextarea id="notes" rows="5" />
                          </FormGroup>

                          {/* <Row form>
                            <Col md="12" className="form-group">
                              <FormCheckbox>
                              I agree with
                                your <a href="#">Privacy Policy</a>.
                              </FormCheckbox>
                            </Col>
                          </Row> */}
                          <div style={{ marginTop: 20 }}>
                            <Button
                              theme="success"
                              onClick={() => this.onAdd()}
                            >
                              Agregar
                            </Button>
                            <Button
                              theme="secondary"
                              style={{ marginLeft: 10 }}
                              onClick={() => this.onCancel()}
                            >
                              Cancelar
                            </Button>
                          </div>
                        </Form>
                      </Col>
                    </Row>
                  </ListGroupItem>
                </ListGroup>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    );
  }
}
export default ViewForm;
