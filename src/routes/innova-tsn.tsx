import { createFileRoute } from "@tanstack/react-router";
import { InnerPage, InfoGrid } from "@/components/InnerPage";

export const Route = createFileRoute("/innova-tsn")({
  head: () => ({
    meta: [
      { title: "Innova-tsn — Cátedra Innova-tsn UPM" },
      {
        name: "description",
        content:
          "Innova-tsn, socio industrial de la Cátedra. Datos, IA y consultoría con propósito.",
      },
      { property: "og:title", content: "Innova-tsn" },
      { property: "og:description", content: "Socio industrial de la Cátedra." },
      { property: "og:url", content: "/innova-tsn" },
    ],
    links: [{ rel: "canonical", href: "/innova-tsn" }],
  }),
  component: () => (
    <InnerPage
      eyebrow=""
      title={
        <>
          Innova-<span className="text-electric text-glow">tsn</span>
        </>
      }
      description="Innova-tsn es una compañía con casi 22 años de trayectoria, especializada en el diseño e implementación de soluciones tecnológicas y de negocio basadas en analítica avanzada. A lo largo de su evolución, se ha consolidado como uno de los referentes del sector, ofreciendo servicios end-to-end que abarcan desde la estrategia y provisión de infraestructuras cloud hasta la ejecución de proyectos y consultoría especializada. Con sede central en Madrid y presencia en Barcelona, Santander, Londres, Bogotá y Ciudad de México, la compañía destaca por su compromiso con la excelencia, la innovación y la generación de valor para sus clientes."
      externalUrl="https://www.innova-tsn.com"
      externalLabel="innova-tsn.com"
    >
      <InfoGrid
        items={[
          {
            title: "Datos & Analítica",
            desc: "Plataformas de datos, gobierno y explotación analítica end-to-end.",
          },
          {
            title: "Inteligencia Artificial",
            desc: "Modelos predictivos y generativos aplicados al negocio.",
          },
          {
            title: "Consultoría tecnológica",
            desc: "Acompañamiento estratégico y entrega ágil de soluciones.",
          },
          {
            title: "Cloud Strategy & Implementation",
            desc: "Diseño, migración y optimización de entornos cloud escalables y seguros.",
          },
        ]}
      />
    </InnerPage>
  ),
});
