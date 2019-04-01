import MaterialTable from 'material-table';
import React, { Component } from 'react';
//external components
import { Button, Card, CardHeader, Col, Container, Row } from 'shards-react';
import swal from 'sweetalert';
import PageTitle from '../../components/common/PageTitle';
//api
import feathers from '../../feathers';

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
        const quotations = feathers.service('quotations');
        let getRecords = await quotations.find({
            query: {
                deleted: {
                    $nin: [1]
                }
            }
        });
        if (getRecords.data.length > 0) {
            this.setState({ dataTable: getRecords.data });
        } else {
            console.log('getRecords.data-->', getRecords.data);
        }
    };

    onOpenForm = value => {
        if (value !== null) {
            this.props.history.push({
                pathname: '/quotations-form',
                state: { quotation: value }
            });
        } else {
            this.props.history.push('/quotations-form');
        }
    };

    onPreview = value => {
        console.log('onPreview value-->', value);
    };

    onDelete = async value => {
        const quotations = feathers.service('quotations');
        try {
            swal({
                title: '¿Estas seguro de eliminarlo?',
                text: 'Una vez eliminado el registro, no podrás recuperarlo',
                icon: 'warning',
                buttons: ['Cancelar', 'Aceptar'],
                dangerMode: true
            }).then(async willDelete => {
                if (willDelete) {
                    let recordToDelete = {
                        deleted: 1
                    };
                    let deleteRecord = await quotations.patch(
                        value,
                        recordToDelete
                    );
                    console.log('deleteRecord-->', deleteRecord);
                    this.getInfo();
                    swal('Exito', 'Eliminado correctamente', {
                        icon: 'success',
                        button: 'Aceptar',
                        timer: 1000
                    });
                } else {
                    //swal("Your imaginary file is safe!");
                }
            });
        } catch (error) {
            console.log('seems exists an issue there-->', error);
        }
    };

    render() {
        const { dataTable } = this.state;
        return (
            <Container fluid className="main-content-container px-4">
                {/* Page Header */}
                <Row noGutters className="page-header py-4">
                    <PageTitle
                        sm="6"
                        title="Cotizaciones "
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
                                        <h6 className="m-0">
                                            Listado de datos
                                        </h6>
                                    </Col>
                                    <Col
                                        sm="12"
                                        lg="6"
                                        className="text-sm-right"
                                    >
                                        <Button
                                            squared
                                            onClick={() => this.onOpenForm()}
                                        >
                                            Nuevo
                                        </Button>
                                    </Col>
                                </Row>
                            </CardHeader>

                            <MaterialTable
                                columns={[
                                    {
                                        title: 'Fólio',
                                        field: 'folio'
                                    },
                                    { title: 'Encabezado', field: 'title' },
                                    {
                                        title: 'Asunto',
                                        field: 'subject'
                                    },
                                    {
                                        title: 'Fecha',
                                        field: 'date'
                                    },
                                    {
                                        title: 'Descripción',
                                        field: 'description'
                                    }
                                ]}
                                data={dataTable}
                                title=""
                                onRowClick={(event, rowData) => {
                                    this.onOpenForm(rowData);
                                }}
                                actions={[
                                    {
                                        icon: 'border_color',
                                        tooltip: 'Editar',
                                        iconProps: {
                                            style: {
                                                fontSize: 20,
                                                color: '#C3C7CC'
                                            }
                                        },
                                        onClick: (event, rowData) => {
                                            this.onOpenForm(rowData);
                                        }
                                    },
                                    {
                                        icon: 'visibility',
                                        tooltip: 'Ver',
                                        iconProps: {
                                            style: {
                                                fontSize: 20,
                                                color: '#C3C7CC'
                                            }
                                        },
                                        onClick: (event, rowData) => {
                                            this.onPreview(rowData._id);
                                        }
                                    },
                                    {
                                        icon: 'delete',
                                        tooltip: 'Eliminar',
                                        iconProps: {
                                            style: {
                                                fontSize: 20,
                                                color: '#C41E3C'
                                            }
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
                                        emptyDataSourceMessage:
                                            'No hay datos para mostrar...'
                                    }
                                }}
                            />
                        </Card>
                    </Col>
                </Row>
            </Container>
        );
    }
}
export default Index;