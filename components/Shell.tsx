export function Shell({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return <div className={"mx-auto max-w-shell px-6 md:px-10 " + className}>{children}</div>;
}

export function Label({ children, accent = false }: { children: React.ReactNode; accent?: boolean }) {
  return (
    <p className={"font-mono text-label uppercase " + (accent ? "text-accent" : "text-faint")}>
      {children}
    </p>
  );
}
