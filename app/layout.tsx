import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Alpha Chess Academy | Chess for curious kids",
    template: "%s | Alpha Chess Academy",
  },
  description: "Alpha Chess Academy is a female-led chess academy for kids aged 5–15, offering live online classes across Pakistan and in-person lessons in Islamabad.",
  applicationName: "Alpha Chess Academy",
  keywords: ["chess academy", "kids chess classes", "chess classes Islamabad", "chess coaching Pakistan", "Coach Arshia Naveed"],
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
