import LoginForm from "@admin/login/components/LoginForm";
import "@admin/login/login_admin_page.scss";

export default function LoginAdminPage() {
  return (
    <div className="flex min-h-screen min-w-full items-center justify-center login-admin">
      <div className="login-admin__content bg-white">
        <h1 className="text-lg text-center mb-1">Iniciar Sesión</h1>
        <LoginForm />
      </div>
    </div>
  );
}
