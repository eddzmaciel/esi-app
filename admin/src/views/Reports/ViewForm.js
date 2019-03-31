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
//components
import PageTitle from "../../components/common/PageTitle";
import swal from "sweetalert";
import immutable from "object-path-immutable";
//api
import feathers from "../../feathers";

class ViewForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      formObject: {}
    };
  }

  onAdd = value => {
    console.log("saving report info!-->", value);
  };

  onCancel = value => {
    this.props.history.push("/reports");
  };

  onChange = (path, value) => {
    let { formObject } = this.state;
    console.log("path, value", path, value);
    this.setState({ ...formObject, [path]: value });
  };

  render() {
    const { formObject } = this.state;

    console.log("formObject-->", formObject);
    return (
      <Container fluid className="main-content-container px-4">
        {/* Page Header */}
        <Row noGutters className="page-header py-4">
          <PageTitle
            sm="6"
            title="Información del Reporte"
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
                          {/* <Row form>
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
                          </Row> */}
                          <Row form>
                            <Col md="4" className="form-group">
                              <label htmlFor="name">Título:</label>
                              <FormInput
                                id="title"
                                type="text"
                                placeholder="Ingrese el texto..."
                                value={
                                  formObject.title !== null
                                    ? formObject.title
                                    : ""
                                }
                                onChange={event =>
                                  this.onChange("title", event.target.value)
                                }
                              />
                            </Col>
                            <Col md="4" className="form-group">
                              <label htmlFor="price">Fecha:</label>
                              <FormInput
                                id="date"
                                type="date"
                                value={
                                  formObject.date !== null
                                    ? formObject.date
                                    : ""
                                }
                                onChange={event =>
                                  this.onChange("date", event.target.value)
                                }
                              />
                            </Col>
                          </Row>

                          <FormGroup>
                            <label htmlFor="feInputAddress">Descripción:</label>
                            <FormTextarea
                              id="description"
                              rows="5"
                              value={
                                formObject.description !== null
                                  ? formObject.description
                                  : ""
                              }
                              onChange={event =>
                                this.onChange("description", event.target.value)
                              }
                            />
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
