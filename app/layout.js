import { Providers } from "@store/Providers";
import "@app/globals.scss";

export default function RootLayout({ children }) {
  return (
    <Providers>
      <html lang="es-co">
        <body>{children}</body>
      </html>
    </Providers>
  );
}
