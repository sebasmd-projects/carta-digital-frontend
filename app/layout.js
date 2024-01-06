import "@app/globals.scss";
import { Providers } from "@store/Providers";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function RootLayout({ children }) {
  return (
    <Providers>
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
    </Providers>
  );
}
