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
import DwvComponent from "../Dwv/DwvComponent";

import PageTitle from "../../components/common/PageTitle";

class StudyPreview extends Component {
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
                    <h6 className="m-0">Visualización de Estudio</h6>
                  </Col>
                  {/* <Col sm="12" lg="6" className="text-sm-right">
                    <Button squared>Nuevo</Button>
                  </Col> */}
                </Row>
              </CardHeader>
              <CardBody className="p-0 pb-3">
                <DwvComponent />
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    );
  }
}
export default StudyPreview;
