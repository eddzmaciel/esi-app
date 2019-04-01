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
    Row,
    FormSelect
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
            subject: { type: String, required: true },
            formObject: {
                title: '',
                subject: '',
                date: '',
                description: '',
                clientId: '',
                items: [],
                attendant: ''
            }
        };
    }

    componentWillMount = async () => {
        const { location } = this.props;
        if (location.state && location.state.quotation !== undefined) {
            this.setState({ formObject: location.state.quotation });
        } else {
            this.setState({
                formObject: {
                    title: '',
                    date: '',
                    subject: '',
                    description: '',
                    clientId: '',
                    items: [],
                    attendant: ''
                }
            });
        }
    };
    onAdd = async () => {
        const { location } = this.props;
        let { formObject } = this.state;
        const quotations = feathers.service('quotations');
        if (formObject.title !== '') {
            try {
                if (location.state && location.state.quotation !== undefined) {
                    let recordId = location.state.quotation._id;
                    let recordToUpdate = {
                        title: formObject.title,
                        subject: formObject.subject,
                        date: formObject.date,
                        description: formObject.description,
                        attendant: formObject.attendant
                    };
                    let updateRecord = await quotations.patch(
                        recordId,
                        recordToUpdate
                    );

                    //console.log('updateRecord-->', updateRecord);

                    swal('Exito', 'Actualizado correctamente', 'success', {
                        timer: 1200
                    });
                    this.props.history.push('/quotations');
                } else {
                    //here you have to increase the quotation folio
                    let newRecord = await quotations.create(formObject);
                    swal('Exito', 'Agregado correctamente', 'success', {
                        timer: 1200
                    });
                    this.props.history.push('/quotations');
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
        this.props.history.push('/quotations');
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
                                                            md="6"
                                                            className="form-group"
                                                        >
                                                            <label htmlFor="title">
                                                                Encabezado:
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
                                                            md="6"
                                                            className="form-group"
                                                        >
                                                            <label htmlFor="subject">
                                                                Asunto:
                                                            </label>
                                                            <FormInput
                                                                id="subject"
                                                                type="text"
                                                                placeholder="Ingrese el texto..."
                                                                value={
                                                                    formObject !==
                                                                    undefined
                                                                        ? formObject.subject
                                                                        : ''
                                                                }
                                                                onChange={event =>
                                                                    this.onChange(
                                                                        'subject',
                                                                        event
                                                                            .target
                                                                            .value
                                                                    )
                                                                }
                                                            />
                                                        </Col>
                                                    </Row>
                                                    <Row form>
                                                        <Col
                                                            md="6"
                                                            className="form-group"
                                                        >
                                                            <label htmlFor="client">
                                                                Cliente:
                                                            </label>
                                                            <FormSelect id="client">
                                                                <option>
                                                                    --Seleccionar--
                                                                </option>
                                                                <option>
                                                                    Carlitos El
                                                                    hurfanito
                                                                </option>
                                                                <option>
                                                                    Maria Segura
                                                                    Lopez
                                                                </option>
                                                            </FormSelect>
                                                        </Col>
                                                        <Col
                                                            md="6"
                                                            className="form-group"
                                                        >
                                                            <label htmlFor="date">
                                                                Fecha:
                                                            </label>
                                                            <FormInput
                                                                id="date"
                                                                type="date"
                                                                value={
                                                                    formObject !==
                                                                    undefined
                                                                        ? formObject.date
                                                                        : ''
                                                                }
                                                                onChange={event =>
                                                                    this.onChange(
                                                                        'date',
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

                                                    {/* <Row form>
                            <Col md="12" className="form-group">
                              <FormCheckbox>
                              I agree with
                                your <a href="#">Privacy Policy</a>.
                              </FormCheckbox>
                            </Col>
                          </Row> */}
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
