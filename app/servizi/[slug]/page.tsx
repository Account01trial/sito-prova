import { notFound } from "next/navigation";
import { servicesData } from "@/lib/servicesData";
import { ServiceDetail } from "./ServiceDetail";

export function generateStaticParams() {
  return servicesData.map((service) => ({
    slug: service.slug,
  }));
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = servicesData.find((s) => s.slug === slug);

  if (!service) {
    notFound();
  }

  // Costruiamo un oggetto "pulito" (senza componenti React come 'icon') per evitare
  // errori di serializzazione 'Converting circular structure to JSON' da parte di RSC.
  const serializableService = {
    slug: service.slug,
    title: service.title,
    description: service.description,
    items: service.items,
  };

  return <ServiceDetail service={serializableService} />;
}
