import "./globals.css";
export const metadata = {
    title: "CineStand Virtual - Estande de Filmes",
    description: "Seu estande virtual de filmes com as melhores sugestões do cinema",
    icons: {
        icon: "/icons/favicon.ico",
    },
};

export default function RootLayout({ children }) {
    return (
        <html>
            <body>{children}</body>
        </html>
    );
};

