import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "The Right to Disconnect — Professionalism Is Not Obedience",
  description: "An independent bilingual public-interest declaration on workplace dignity, lawful boundaries and the right to disconnect.",
  openGraph: { title: "The Right to Disconnect", description: "Professionalism is not obedience. Your time. Your rights.", type: "website", locale: "en_AU" },
  twitter: { card: "summary_large_image", title: "The Right to Disconnect", description: "A public declaration on workplace dignity and lawful boundaries." },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
