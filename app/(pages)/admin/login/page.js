import '@admin/login/login_admin_page.scss';


export const metadata = {
  title: "Carta digital - Login Admin",
  description: "Admin Login",
};

export default function LoginAdminPage() {
  return (
    <div className="flex min-h-screen min-w-full items-center justify-center login-admin">
      <div className="login-admin__content">
        <h1>Entrar al panel</h1>
        <p>Formulario</p>
      </div>
    </div>
  );
}
