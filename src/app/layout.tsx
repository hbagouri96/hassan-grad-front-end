import "~/styles/globals.css";

export const metadata = {
  title: "Predicto Egypt",
  description: "Price prediction web application in Egypt",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
