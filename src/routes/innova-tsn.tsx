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
      title={<>Innova-tsn</>}
      description="Innova-tsn es una consultora multinacional española especializada en Analítica Avanzada, Inteligencia Artificial y Cloud. Fundada en 2004, ayuda a organizaciones de distintos sectores a transformar sus datos en valor mediante soluciones end-to-end que abarcan desde la estrategia y la infraestructura tecnológica hasta la implantación y evolución de soluciones avanzadas.
Con más de 300 profesionales y presencia en Madrid, Barcelona, Santander, Londres, Bogotá y Ciudad de México, destaca por su excelencia tecnológica, visión de negocio y compromiso con la innovación responsable."
      externalUrl="https://www.innova-tsn.com"
      externalLabel="innova-tsn.com"
    >
      <InfoGrid
        items={[
          {
            title: "Data Analytics & Modern BI",
            desc: "Diseño e implantación de plataformas de datos para integrar, gobernar y explotar la información de forma eficiente. ",
          },
          {
            title: "AI Solutions",
            desc: "Desarrollo de soluciones de Inteligencia Artificial predictiva y generativa orientadas a optimizar procesos y mejorar la toma de decisiones.",
          },
          {
            title: "Cloud Strategy & Implementation",
            desc: "Definición, migración e implantación de estrategias cloud seguras, escalables y preparadas para impulsar la innovación.",
          },
          {
            title: "Consultoría Tecnológica",
            desc: "Acompañamiento estratégico a organizaciones mediante consultoría especializada y ejecución ágil de proyectos.",
          },
        ]}
      />
    </InnerPage>
  ),
});
