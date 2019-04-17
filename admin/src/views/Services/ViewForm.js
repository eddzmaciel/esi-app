import React, { Component } from 'react';
import {
    Button,
    Card,
    CardBody,
    CardHeader,
    Col,
    Container,
    Form,
    FormInput,
    ListGroup,
    ListGroupItem,
    Row
} from 'shards-react';
import swal from 'sweetalert';
//components
import PageTitle from '../../components/common/PageTitle';
//api
import feathers from '../../feathers';

class ViewForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            formObject: {
                name: '',
                description: ''
            }
        };
    }

    componentWillMount = async () => {
        const { location } = this.props;
        if (location.state && location.state.service !== undefined) {
            this.setState({ formObject: location.state.service });
        } else {
            this.setState({
                formObject: {
                    name: '',
                    description: ''
                }
            });
        }
    };
    onAdd = async () => {
        const { location } = this.props;
        let { formObject } = this.state;
        const services = feathers.service('services');
        if (formObject.title !== '') {
            try {
                if (location.state && location.state.provider !== undefined) {
                    let recordId = location.state.provider._id;
                    let recordToUpdate = {
                        name: formObject.name,
                        description: formObject.description
                    };
                    let updateRecord = await services.patch(
                        recordId,
                        recordToUpdate
                    );
                    swal('Exito', 'Actualizado correctamente', 'success', {
                        timer: 1200
                    });
                    this.props.history.push('/services');
                } else {
                    let newRecord = await services.create(formObject);
                    swal('Exito', 'Agregado correctamente', 'success', {
                        timer: 1200
                    });
                    this.props.history.push('/services');
                }
            } catch (error) {
                console.log('seems exist an issue there-->', error);
            }
        } else {
            swal(
                'Alerta',
                'Es necesario agregar el título del reporte.',
                'warning',
                {
                    timer: 3000
                }
            );
        }
    };

    onCancel = value => {
        this.props.history.push('/services');
    };

    onChange = (path, value) => {
        let { formObject } = this.state;
        let newFormObject = { ...formObject, [path]: value };
        this.setState({ formObject: newFormObject });

        //or if you want to use immutable
        // let newFormObject = immutable.set(formObject, path, value);
        // this.setState({ formObject: newFormObject });
    };

    render() {
        const { formObject } = this.state;

        return (
            <Container fluid className="main-content-container px-4">
                {/* Page Header */}
                <Row noGutters className="page-header py-4">
                    <PageTitle
                        sm="6"
                        title="Información del Servicio"
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
                                                        <Col
                                                            md="6"
                                                            className="form-group"
                                                        >
                                                            <label htmlFor="name">
                                                                Nombre del
                                                                servicio:
                                                            </label>
                                                            <FormInput
                                                                id="name"
                                                                type="text"
                                                                placeholder="Ingrese el texto..."
                                                                value={
                                                                    formObject !==
                                                                    undefined
                                                                        ? formObject.name
                                                                        : ''
                                                                }
                                                                onChange={event =>
                                                                    this.onChange(
                                                                        'name',
                                                                        event
                                                                            .target
                                                                            .value
                                                                    )
                                                                }
                                                            />
                                                        </Col>
                                                        <Col
                                                            md="3"
                                                            className="form-group"
                                                        >
                                                            <label htmlFor="description">
                                                                Descripción:
                                                            </label>
                                                            <FormInput
                                                                id="description"
                                                                type="text"
                                                                placeholder="Ingrese el texto..."
                                                                value={
                                                                    formObject !==
                                                                    undefined
                                                                        ? formObject.description
                                                                        : ''
                                                                }
                                                                onChange={event =>
                                                                    this.onChange(
                                                                        'description',
                                                                        event
                                                                            .target
                                                                            .value
                                                                    )
                                                                }
                                                            />
                                                        </Col>
                                                    </Row>

                                                    <div
                                                        style={{
                                                            marginTop: 20
                                                        }}
                                                    >
                                                        <Button
                                                            theme="success"
                                                            onClick={() =>
                                                                this.onAdd()
                                                            }
                                                        >
                                                            Agregar
                                                        </Button>
                                                        <Button
                                                            theme="secondary"
                                                            style={{
                                                                marginLeft: 10
                                                            }}
                                                            onClick={() =>
                                                                this.onCancel()
                                                            }
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
