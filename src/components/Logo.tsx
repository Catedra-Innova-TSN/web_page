interface Props {
  className?: string;
}

export function Logo({ className }: Props) {
  return (
    <img
      src="/logos/catedra/10_nobg.svg"
      alt="Logo de la Cátedra Innova-tsn UPM"
      className={`rounded-md bg-transparent p-1 ${className ?? ""}`}
    />
  );
}
