import { createFileRoute } from "@tanstack/react-router";
import { InnerPage, InfoGrid } from "@/components/InnerPage";

export const Route = createFileRoute("/upm")({
  head: () => ({
    meta: [
      { title: "UPM — Cátedra Innova-tsn UPM" },
      { name: "description", content: "Universidad Politécnica de Madrid, sede académica de la Cátedra." },
      { property: "og:title", content: "Universidad Politécnica de Madrid" },
      { property: "og:description", content: "Sede académica de la Cátedra Innova-tsn UPM." },
      { property: "og:url", content: "/upm" },
    ],
    links: [{ rel: "canonical", href: "/upm" }],
  }),
  component: () => (
    <InnerPage
      eyebrow=""
      title={<>Universidad <span className="text-electric text-glow">Politécnica</span> de <span className="text-electric text-glow">Madrid</span></>}
      description="La Universidad Politécnica de Madrid (UPM) es una de las instituciones académicas de mayor prestigio en España y Europa en los ámbitos de la ingeniería, la arquitectura y la tecnología. Con una sólida trayectoria histórica y una clara vocación innovadora, combina excelencia docente, investigación de vanguardia y transferencia de conocimiento para impulsar el progreso científico, tecnológico y social. Su compromiso con la formación de profesionales altamente cualificados y con el desarrollo sostenible la posiciona como un referente internacional en educación superior e innovación."
      externalUrl="https://www.upm.es"
      externalLabel="upm.es"
    >
      <InfoGrid
        items={[
          { title: "Ingeniería y Tecnología", desc: "Formación de excelencia en disciplinas técnicas con una fuerte orientación práctica e innovadora." },
          { title: "Investigación e Innovación", desc: "Desarrollo de proyectos científicos y tecnológicos de impacto en colaboración con empresas e instituciones." },
          { title: "Transferencia de Conocimiento", desc: "Conexión entre universidad, industria y sociedad para transformar la investigación en valor real." },
          { title: "ETSI Informáticos", desc: "Escuela referente en ciencia e ingeniería del software, datos e IA." },
        ]}
      />
    </InnerPage>
  ),
});
