import { useState } from "react"
import { Target, Eye, Heart, X, Building2, ZoomIn  } from "lucide-react"

export default function AboutUs() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  const title = "Nosotros"

  const extendedInfo = `Desde hace más de 50 años, NOVARUB se ha consolidado como referente en la investigación, desarrollo y fabricación de soluciones para el curado y armado de neumáticos. Nuestra trayectoria y compromiso con la calidad nos permiten ofrecer productos confiables y eficaces que responden a las más altas exigencias del mercado.

Ubicada en Las Flores, Buenos Aires, nuestra planta industrial cuenta con la tecnología necesaria para diseñar y producir bladders, tubos y envelopes adaptados a múltiples aplicaciones. Gracias a un equipo técnico altamente especializado, desarrollamos soluciones que optimizan el rendimiento de cada etapa del proceso productivo, garantizando eficiencia, durabilidad e innovación constante. En NOVARUB, trabajamos junto a nuestros clientes para brindar respuestas efectivas a los desafíos de la industria del neumático.`

  const stats = [
    { value: "50+", label: "Modelos" },
    { value: "15+", label: "Clientes" },
    { value: "5+", label: "Países" },
  ]

  const principles = [
    { icon: <Target className="h-6 w-6 text-primary" />, title: "Misión", description: "Diseñamos soluciones de curado y armado, priorizando relaciones honestas con clientes y proveedores." },
    { icon: <Eye className="h-6 w-6 text-primary" />, title: "Visión", description: "Buscamos liderar la innovación tecnológica y expandirnos como referentes en servicios para la industria del neumático." },
    { icon: <Heart className="h-6 w-6 text-primary" />, title: "Valores", description: "Nos guiamos por la planificación, la mejora continua, la innovación, la calidad y el compromiso ambiental." },
  ]

  const images = [
    "/src/assets/nosotros-3.webp",
    "/src/assets/nosotros-2.webp",
    "/src/assets/nosotros-1.webp",
  ]

  return (
    <section id="nosotros" className="w-full py-12 md:py-24 lg:py-32 bg-background">
      <div className="container px-4 md:px-6 mx-auto">
      <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
        <div className="inline-flex items-center justify-center gap-2 px-4 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-2">
          <Building2 className="w-4 h-4" />
          <span>Conócenos</span>
        </div>
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
          {title}
        </h2>
      </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            {extendedInfo.split("\n\n").map((para, idx) => (
              <p key={idx} className="text-muted-foreground">{para}</p>
            ))}

            <div className="grid grid-cols-3 gap-4 mt-8">
              {stats.map((stat, idx) => (
                <div key={idx} className="flex flex-col items-center p-4 bg-muted rounded-lg">
                  <span className="text-3xl font-bold text-primary">{stat.value}</span>
                  <span className="text-sm text-muted-foreground">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {images.map((src, idx) => (
              <div
                key={idx}
                onClick={() => setSelectedImage(src)}
                className={`relative h-[200px] rounded-lg overflow-hidden cursor-pointer group ${idx === 2 ? "sm:col-span-2" : ""}`}
              >
                <img
                  src={src}
                  alt={`RuedasPro ${idx + 1}`}
                  loading="lazy"
                  decoding="async"
                  className="object-cover transition-transform group-hover:scale-105 w-full h-full"
                />
                <div className="absolute inset-0 bg-transparent group-hover:bg-white/10 transition-all flex items-center justify-center opacity-0 group-hover:opacity-100">
                    <span className="flex items-center gap-2 text-black bg-white px-3 py-1 rounded-full text-sm font-semibold shadow-md">
                        <ZoomIn className="w-4 h-4" />
                        Ampliar
                    </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {principles.map((item, idx) => (
            <div key={idx} className="flex flex-col p-8 bg-muted rounded-lg">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold mb-4">{item.title}</h3>
              <p className="text-muted-foreground">{item.description}</p>
            </div>
          ))}
        </div>
      </div>

      {selectedImage && (
        <div onClick={() => setSelectedImage(null)} className="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center p-4">
          <div className="relative max-w-4xl max-h-[90vh] w-full">
            <button onClick={e => { e.stopPropagation(); setSelectedImage(null) }} className="absolute top-4 right-4 bg-black bg-opacity-50 rounded-full p-2 text-white z-10">
              <X className="h-6 w-6" />
            </button>
            <div className="relative h-[80vh]">
              <img src={selectedImage} alt="Imagen ampliada" className="object-contain w-full h-full" />
            </div>
          </div>
        </div>
      )}
    </section>
  )
}