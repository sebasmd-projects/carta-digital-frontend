import "@app/globals.scss";
import { AuthProvider } from "@context/AuthContext";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function RootLayout({ children }) {
  return (
    <AuthProvider>
      <html lang="es-co">
        <body>
          <ToastContainer
            newestOnTop={true}
            position="bottom-center"
            autoClose={5000}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
          />
          {children}
        </body>
      </html>
    </AuthProvider>
  );
}
