import React, { useState } from 'react'
import { Award, X,TrendingUp , ZoomIn} from 'lucide-react'

export default function History() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  const title = 'Nuestra Historia'

  const historyContent =
    'Inicialmente enfocados en la reconstrucción de neumáticos, evolucionamos hacia la fabricación de materiales esenciales para procesos de curado, como Bandas Precuradas, Curing Bag, Curing Tube y Envelopes. En 1996, marcamos un hito al convertirnos en el primer productor latinoamericano de Tyre Curing Bladders, consolidándonos como proveedores estratégicos de la industria del neumático en Argentina y América Latina.'

  const milestone =
    '1996 - Primer productor latinoamericano de Tyre Curing Bladders'

  const historyImage = '/novarub-landing/historia-2.webp'

  return (
    <section id="historia" className="w-full py-12 md:py-24 lg:py-32 bg-muted">
      <div className="container px-4 md:px-6 mx-auto">
      <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
      <div className="inline-flex items-center justify-center gap-2 px-4 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-2">
        <span>Trayectoria</span>
          <TrendingUp className="w-4 h-4" />
      </div>
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
          {title}
        </h2>
      </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <div
              className="relative aspect-[16/9] rounded-lg overflow-hidden cursor-pointer group"
              onClick={() => setSelectedImage(historyImage)}
            >
              <img
                src={historyImage}
                alt="Historia de la empresa"
                className="object-cover w-full h-full transition-transform group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-transparent group-hover:bg-white/10 transition-all flex items-center justify-center opacity-0 group-hover:opacity-100">
                    <span className="flex items-center gap-2 text-black bg-white px-3 py-1 rounded-full text-sm font-semibold shadow-md">
                        <ZoomIn className="w-4 h-4" />
                        Ampliar
                    </span>
                </div>
            </div>
          </div>

          <div className="space-y-6 order-1 md:order-2">
            <p className="text-muted-foreground">{historyContent}</p>
            <div className="flex flex-wrap gap-4 mt-6">
              <div className="flex items-center space-x-2 bg-background rounded-full px-4 py-2">
                <Award className="h-4 w-4 text-primary" />
                <span className="text-sm font-medium">{milestone}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-4xl max-h-[90vh] w-full">
            <button
              className="absolute top-4 right-4 bg-black bg-opacity-50 rounded-full p-2 text-white z-10"
              onClick={(e) => {
                e.stopPropagation()
                setSelectedImage(null)
              }}
            >
              <X className="h-6 w-6" />
            </button>
            <div className="relative h-[80vh]">
              <img
                src={selectedImage}
                alt="Imagen ampliada"
                className="object-contain w-full h-full"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
