// src/app/[locale]/(main)/layout.tsx
export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <link rel="preload" as="image" href="/hero.webp" fetchPriority="high" />
      <link rel="preload" as="image" href="/logoW.webp" fetchPriority="high" />
      <link rel="preload" as="image" href="/images/hiw_1_1.webp" />
      <link rel="preload" as="image" href="/images/hiw_2_1.webp" />
      <link rel="preload" as="image" href="/images/hiw_3_1.webp" />
      <link rel="preload" as="image" href="/images/hiw_4_1.webp" />
      {children}
    </>
  );
}