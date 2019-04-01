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
                businessName: '',
                firstName: '',
                lastName: '',
                rfc: '',
                email: '',
                phone: '',
                addressFirst: '',
                addressSecond: '',
                zipCode: '',
                entity: '',
                city: ''
            }
        };
    }

    componentWillMount = async () => {
        const { location } = this.props;
        if (location.state && location.state.provider !== undefined) {
            this.setState({ formObject: location.state.provider });
        } else {
            this.setState({
                formObject: {
                    businessName: '',
                    firstName: '',
                    lastName: '',
                    rfc: '',
                    email: '',
                    phone: '',
                    addressFirst: '',
                    addressSecond: '',
                    zipCode: '',
                    entity: '',
                    city: ''
                }
            });
        }
    };
    onAdd = async () => {
        const { location } = this.props;
        let { formObject } = this.state;
        const providers = feathers.service('providers');
        if (formObject.title !== '') {
            try {
                if (location.state && location.state.provider !== undefined) {
                    let recordId = location.state.provider._id;
                    let recordToUpdate = {
                        businessName: formObject.businessName,
                        firstName: formObject.firstName,
                        lastName: formObject.lastName,
                        rfc: formObject.rfc,
                        email: formObject.email,
                        phone: formObject.phone,
                        addressFirst: formObject.addressFirst,
                        addressSecond: formObject.addressSecond,
                        zipCode: formObject.zipCode,
                        entity: formObject.entity,
                        city: formObject.city
                    };
                    let updateRecord = await providers.patch(
                        recordId,
                        recordToUpdate
                    );
                    swal('Exito', 'Actualizado correctamente', 'success', {
                        timer: 1200
                    });
                    this.props.history.push('/providers');
                } else {
                    let newRecord = await providers.create(formObject);
                    swal('Exito', 'Agregado correctamente', 'success', {
                        timer: 1200
                    });
                    this.props.history.push('/providers');
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
        this.props.history.push('/providers');
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
                        title="Información del Proveedor"
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
                                                            md="3"
                                                            className="form-group"
                                                        >
                                                            <label htmlFor="businessName">
                                                                Razón Social:
                                                            </label>
                                                            <FormInput
                                                                id="businessName"
                                                                type="text"
                                                                placeholder="Ingrese el texto..."
                                                                value={
                                                                    formObject !==
                                                                    undefined
                                                                        ? formObject.businessName
                                                                        : ''
                                                                }
                                                                onChange={event =>
                                                                    this.onChange(
                                                                        'businessName',
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
                                                            <label htmlFor="firstName">
                                                                Nombre(s):
                                                            </label>
                                                            <FormInput
                                                                id="firstName"
                                                                type="text"
                                                                placeholder="Ingrese el texto..."
                                                                value={
                                                                    formObject !==
                                                                    undefined
                                                                        ? formObject.firstName
                                                                        : ''
                                                                }
                                                                onChange={event =>
                                                                    this.onChange(
                                                                        'firstName',
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
                                                            <label htmlFor="lastName">
                                                                Apellidos:
                                                            </label>
                                                            <FormInput
                                                                id="lastName"
                                                                type="text"
                                                                placeholder="Ingrese el texto..."
                                                                value={
                                                                    formObject !==
                                                                    undefined
                                                                        ? formObject.lastName
                                                                        : ''
                                                                }
                                                                onChange={event =>
                                                                    this.onChange(
                                                                        'lastName',
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
                                                            <label htmlFor="rfc">
                                                                Rfc:
                                                            </label>
                                                            <FormInput
                                                                id="rfc"
                                                                type="text"
                                                                placeholder="Ingrese el texto..."
                                                                value={
                                                                    formObject !==
                                                                    undefined
                                                                        ? formObject.rfc
                                                                        : ''
                                                                }
                                                                onChange={event =>
                                                                    this.onChange(
                                                                        'rfc',
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
                                                            md="3"
                                                            className="form-group"
                                                        >
                                                            <label htmlFor="email">
                                                                Correo
                                                                electrónico:
                                                            </label>
                                                            <FormInput
                                                                id="email"
                                                                type="email"
                                                                placeholder="Ingrese el texto..."
                                                                value={
                                                                    formObject !==
                                                                    undefined
                                                                        ? formObject.email
                                                                        : ''
                                                                }
                                                                onChange={event =>
                                                                    this.onChange(
                                                                        'email',
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
                                                            <label htmlFor="phone">
                                                                Teléfono:
                                                            </label>
                                                            <FormInput
                                                                id="phone"
                                                                type="text"
                                                                placeholder="Ingrese el número..."
                                                                value={
                                                                    formObject !==
                                                                    undefined
                                                                        ? formObject.phone
                                                                        : ''
                                                                }
                                                                onChange={event =>
                                                                    this.onChange(
                                                                        'phone',
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
                                                            <label htmlFor="addressFirst">
                                                                Dirección(calle
                                                                / número):
                                                            </label>
                                                            <FormInput
                                                                id="addressFirst"
                                                                type="text"
                                                                placeholder="Ingrese el texto..."
                                                                value={
                                                                    formObject !==
                                                                    undefined
                                                                        ? formObject.addressFirst
                                                                        : ''
                                                                }
                                                                onChange={event =>
                                                                    this.onChange(
                                                                        'addressFirst',
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
                                                            <label htmlFor="addressSecond">
                                                                Dirección
                                                                (colonia) :
                                                            </label>
                                                            <FormInput
                                                                id="addressSecond"
                                                                type="text"
                                                                placeholder="Ingrese el texto..."
                                                                value={
                                                                    formObject !==
                                                                    undefined
                                                                        ? formObject.addressSecond
                                                                        : ''
                                                                }
                                                                onChange={event =>
                                                                    this.onChange(
                                                                        'addressSecond',
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
                                                            md="3"
                                                            className="form-group"
                                                        >
                                                            <label htmlFor="zipCode">
                                                                Código postal:
                                                            </label>
                                                            <FormInput
                                                                id="zipCode"
                                                                type="text"
                                                                placeholder="Ingrese el número..."
                                                                value={
                                                                    formObject !==
                                                                    undefined
                                                                        ? formObject.zipCode
                                                                        : ''
                                                                }
                                                                onChange={event =>
                                                                    this.onChange(
                                                                        'zipCode',
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
                                                            <label htmlFor="entity">
                                                                Estado / Entidad
                                                                federativa:
                                                            </label>
                                                            <FormInput
                                                                id="entity"
                                                                type="text"
                                                                placeholder="Ingrese el texto..."
                                                                value={
                                                                    formObject !==
                                                                    undefined
                                                                        ? formObject.entity
                                                                        : ''
                                                                }
                                                                onChange={event =>
                                                                    this.onChange(
                                                                        'entity',
                                                                        event
                                                                            .target
                                                                            .value
                                                                    )
                                                                }
                                                            />
                                                            {/* <FormSelect id="type">
                                                                <option>
                                                                    --Seleccionar--
                                                                </option>
                                                                <option>
                                                                    Michoacán
                                                                </option>
                                                                <option>
                                                                    Laboratorios
                                                                </option>
                                                            </FormSelect> */}
                                                        </Col>
                                                        <Col
                                                            md="3"
                                                            className="form-group"
                                                        >
                                                            <label htmlFor="city">
                                                                Ciudad /
                                                                Municipio:
                                                            </label>
                                                            <FormInput
                                                                id="city"
                                                                type="text"
                                                                placeholder="Ingrese el texto..."
                                                                value={
                                                                    formObject !==
                                                                    undefined
                                                                        ? formObject.city
                                                                        : ''
                                                                }
                                                                onChange={event =>
                                                                    this.onChange(
                                                                        'city',
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
