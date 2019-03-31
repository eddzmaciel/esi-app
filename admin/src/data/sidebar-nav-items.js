export default function() {
  return [
    {
      title: "Inicio",
      to: "/dashboard",
      htmlBefore: '<i class="material-icons">view_module</i>',
      htmlAfter: ""
    },
    {
      title: "Reportes",
      to: "/reports",
      htmlBefore: '<i class="material-icons">edit</i>',
      htmlAfter: ""
    },
    {
      title: "Perfil Usuario",
      htmlBefore: '<i class="material-icons">person</i>',
      to: "/user-profile-lite"
    },
    {
      title: "Errors",
      htmlBefore: '<i class="material-icons">error</i>',
      to: "/errors"
    }
  ];
}
