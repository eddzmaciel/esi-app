import React, { Component } from 'react';
import {
    Button,
    Card,
    CardBody,
    CardHeader,
    Col,
    Container,
    Form,
    FormGroup,
    FormInput,
    FormTextarea,
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
            formObject: { title: '', dateGenerated: '', description: '' }
        };
    }

    componentWillMount = async () => {
        const { location } = this.props;
        if (location.state && location.state.report !== undefined) {
            this.setState({ formObject: location.state.report });
        } else {
            this.setState({
                formObject: { title: '', dateGenerated: '', description: '' }
            });
        }
    };
    onAdd = async () => {
        const { location } = this.props;
        let { formObject } = this.state;
        const reports = feathers.service('reports');
        if (formObject.title !== '') {
            try {
                if (location.state && location.state.report !== undefined) {
                    let recordId = location.state.report._id;
                    let recordToUpdate = {
                        title: formObject.title,
                        dateGenerated: formObject.dateGenerated,
                        description: formObject.description
                    };
                    let updateRecord = await reports.patch(
                        recordId,
                        recordToUpdate
                    );

                    swal('Exito', 'Actualizado correctamente', 'success', {
                        timer: 1200
                    });
                    this.props.history.push('/reports');
                } else {
                    let newRecord = await reports.create(formObject);
                    swal('Exito', 'Agregado correctamente', 'success', {
                        timer: 1200
                    });
                    this.props.history.push('/reports');
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
        this.props.history.push('/reports');
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
                                                            md="4"
                                                            className="form-group"
                                                        >
                                                            <label htmlFor="title">
                                                                Título:
                                                            </label>
                                                            <FormInput
                                                                id="title"
                                                                type="text"
                                                                placeholder="Ingrese el texto..."
                                                                value={
                                                                    formObject !==
                                                                    undefined
                                                                        ? formObject.title
                                                                        : ''
                                                                }
                                                                onChange={event =>
                                                                    this.onChange(
                                                                        'title',
                                                                        event
                                                                            .target
                                                                            .value
                                                                    )
                                                                }
                                                            />
                                                        </Col>
                                                        <Col
                                                            md="4"
                                                            className="form-group"
                                                        >
                                                            <label htmlFor="dateGenerated">
                                                                Fecha:
                                                            </label>
                                                            <FormInput
                                                                id="dateGenerated"
                                                                type="date"
                                                                value={
                                                                    formObject !==
                                                                    undefined
                                                                        ? formObject.dateGenerated
                                                                        : ''
                                                                }
                                                                onChange={event =>
                                                                    this.onChange(
                                                                        'dateGenerated',
                                                                        event
                                                                            .target
                                                                            .value
                                                                    )
                                                                }
                                                            />
                                                        </Col>
                                                    </Row>

                                                    <FormGroup>
                                                        <label htmlFor="description">
                                                            Descripción:
                                                        </label>
                                                        <FormTextarea
                                                            id="description"
                                                            rows="5"
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
                                                                    event.target
                                                                        .value
                                                                )
                                                            }
                                                        />
                                                    </FormGroup>
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
