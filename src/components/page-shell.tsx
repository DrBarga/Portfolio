export function PageShell({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`mx-auto flex w-[min(1180px,calc(100%-2rem))] flex-col gap-24 py-8 md:w-[min(1180px,calc(100%-3rem))] md:py-10 ${className}`.trim()}
    >
      {children}
    </div>
  );
}
