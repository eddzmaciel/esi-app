export default function() {
    return [
        {
            title: 'Inicio',
            to: '/dashboard',
            htmlBefore: '<i class="material-icons">dashboard</i>',
            htmlAfter: ''
        },
        {
            title: 'Reportes',
            to: '/reports',
            htmlBefore: '<i class="material-icons">insert_photo</i>',
            htmlAfter: ''
        },
        {
            title: 'Cotizaciones',
            to: '/quotations',
            htmlBefore: '<i class="material-icons">description</i>',
            htmlAfter: ''
        },
        {
            title: 'Clientes',
            to: '/clients',
            htmlBefore: '<i class="material-icons">people</i>',
            htmlAfter: ''
        },
        {
            title: 'Proveedores',
            to: '/providers',
            htmlBefore: '<i class="material-icons">local_shipping</i>',
            htmlAfter: ''
        },
        {
            title: 'Perfil Usuario',
            htmlBefore: '<i class="material-icons">person</i>',
            to: '/user-profile'
        },
        {
            title: 'Errors',
            htmlBefore: '<i class="material-icons">error</i>',
            to: '/errors'
        }
    ];
}
