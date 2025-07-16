import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
// import { Inter } from 'next/font/google'; // Parece que no se usa, puedes eliminarla si no la necesitas.
import Script from 'next/script'; // Ya está importado, ¡excelente!

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "DentaSoftware", // Considera actualizar este título para tu sitio DentaSoftware
  description: "Software para consultorios dentales.", // Considera actualizar esta descripción
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Define el ID de medición de Google Analytics.
  // Es crucial que esta variable de entorno esté configurada en Vercel
  // y en tu archivo .env.local para el desarrollo local.
  const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || "G-HGPJ7JD9W0"; // Usa tu ID proporcionado como fallback

  return (
    <html lang="es">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/*
          Google Analytics Script
          Este script se carga después de que la página es interactiva
          para no bloquear el renderizado inicial.
          Asegúrate de que NEXT_PUBLIC_GA_MEASUREMENT_ID esté configurado
          en tus variables de entorno en Vercel y en .env.local.
        */}
        {GA_MEASUREMENT_ID && ( // Solo renderiza los scripts si el ID está disponible
          <>
            <Script
              strategy="afterInteractive"
              src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
            />
            <Script
              id="google-analytics-script" // Un ID único para este script
              strategy="afterInteractive"
            >
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${GA_MEASUREMENT_ID}');
              `}
            </Script>
          </>
        )}

        {children}
      </body>
    </html>
  );
}
