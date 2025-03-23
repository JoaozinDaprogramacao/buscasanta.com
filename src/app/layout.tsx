import type { Metadata } from 'next';
import RootLayoutClient from './layout-client';

export const metadata: Metadata = {
  title: 'Igrejas Católicas - Nossa Cidade',
  description: 'Encontre todas as informações das igrejas católicas da nossa cidade em um só lugar',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <RootLayoutClient>{children}</RootLayoutClient>;
}
