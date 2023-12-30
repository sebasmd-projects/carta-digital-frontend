import LoginAdminPage from "./login/page";

export const metadata = {
  title: "Carta digital - Admin",
  description: "Admin",
};

export default function AdminPage() {
  const auth = null;
  if (!auth) return <LoginAdminPage />;

  return <div>AdminPage</div>;
}
