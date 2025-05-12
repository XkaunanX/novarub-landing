import { useState } from "react"
import { Menu } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between mx-auto px-4">
        <div className="flex items-center gap-2">
          <img
            src="/novarub-landing/Logo.png"
            alt="Logo Ruedas Pro"
            className="rounded-full h-6 w-auto object-contain"
          />
        </div>

        <nav className="hidden md:flex gap-6">
          <a href="#inicio" className="text-sm font-medium transition-colors hover:text-primary">
            Inicio
          </a>
          <a href="#nosotros" className="text-sm font-medium transition-colors hover:text-primary">
            Nosotros
          </a>
          <a href="#historia" className="text-sm font-medium transition-colors hover:text-primary">
            Historia
          </a>
          <a href="#productos" className="text-sm font-medium transition-colors hover:text-primary">
            Productos
          </a>
          <a href="#contacto" className="text-sm font-medium transition-colors hover:text-primary">
            Contacto
          </a>
        </nav>

        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" className="md:hidden" onClick={toggleMenu}>
            <Menu className="h-6 w-6" />
            <span className="sr-only">Menú</span>
          </Button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden border-t">
          <nav className="container py-4 flex flex-col space-y-4">
            <a href="#inicio" className="px-4 py-2 text-sm font-medium hover:bg-accent rounded-md" onClick={() => setIsMenuOpen(false)}>
              Inicio
            </a>
            <a href="#nosotros" className="px-4 py-2 text-sm font-medium hover:bg-accent rounded-md" onClick={() => setIsMenuOpen(false)}>
              Nosotros
            </a>
            <a href="#historia" className="px-4 py-2 text-sm font-medium hover:bg-accent rounded-md" onClick={() => setIsMenuOpen(false)}>
              Historia
            </a>
            <a href="#productos" className="px-4 py-2 text-sm font-medium hover:bg-accent rounded-md" onClick={() => setIsMenuOpen(false)}>
              Productos
            </a>
            <a href="#contacto" className="px-4 py-2 text-sm font-medium hover:bg-accent rounded-md" onClick={() => setIsMenuOpen(false)}>
              Contacto
            </a>
          </nav>
        </div>
      )}
    </header>
  )
}
