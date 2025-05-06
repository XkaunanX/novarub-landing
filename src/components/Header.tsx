import { useState, useEffect } from "react"
import { Globe, Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [mounted, setMounted] = useState(false)
  const [language, setLanguage] = useState<"es" | "en" | "pt">("es")

  useEffect(() => {
    setMounted(true)
  }, [])

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  const renderLabel = (key: string) => {
    const translations: Record<string, Record<"es" | "en" | "pt", string>> = {
      inicio: { es: "Inicio", en: "Home", pt: "Início" },
      nosotros: { es: "Nosotros", en: "About", pt: "Sobre Nós" },
      historia: { es: "Historia", en: "History", pt: "História" },
      productos: { es: "Productos", en: "Products", pt: "Produtos" },
      contacto: { es: "Contacto", en: "Contact", pt: "Contato" },
    }
    return translations[key][language]
  }

  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between mx-auto px-4">
        <div className="flex items-center gap-2">
          <img
            src="/src/assets/logo.png"
            alt="Logo Ruedas Pro"
            className="rounded-full h-6 w-auto object-contain"
          />
        </div>

        <nav className="hidden md:flex gap-6">
          <a href="#inicio" className="text-sm font-medium transition-colors hover:text-primary">
            {renderLabel("inicio")}
          </a>
          <a href="#nosotros" className="text-sm font-medium transition-colors hover:text-primary">
            {renderLabel("nosotros")}
          </a>
          <a href="#historia" className="text-sm font-medium transition-colors hover:text-primary">
            {renderLabel("historia")}
          </a>
          <a href="#productos" className="text-sm font-medium transition-colors hover:text-primary">
            {renderLabel("productos")}
          </a>
          <a href="#contacto" className="text-sm font-medium transition-colors hover:text-primary">
            {renderLabel("contacto")}
          </a>
        </nav>

        <div className="flex items-center gap-2">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="rounded-full">
                <Globe className="h-5 w-5" />
                <span className="sr-only">Cambiar idioma</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem
                onClick={() => setLanguage("es")}
                className={language === "es" ? "bg-accent/50 font-medium" : ""}
              >
                🇪🇸 Español
              </DropdownMenuItem>
              <DropdownMenuItem
                onClick={() => setLanguage("en")}
                className={language === "en" ? "bg-accent/50 font-medium" : ""}
              >
                🇬🇧 English
              </DropdownMenuItem>
              <DropdownMenuItem
                onClick={() => setLanguage("pt")}
                className={language === "pt" ? "bg-accent/50 font-medium" : ""}
              >
                🇧🇷 Português
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

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
              {renderLabel("inicio")}
            </a>
            <a href="#nosotros" className="px-4 py-2 text-sm font-medium hover:bg-accent rounded-md" onClick={() => setIsMenuOpen(false)}>
              {renderLabel("nosotros")}
            </a>
            <a href="#historia" className="px-4 py-2 text-sm font-medium hover:bg-accent rounded-md" onClick={() => setIsMenuOpen(false)}>
              {renderLabel("historia")}
            </a>
            <a href="#productos" className="px-4 py-2 text-sm font-medium hover:bg-accent rounded-md" onClick={() => setIsMenuOpen(false)}>
              {renderLabel("productos")}
            </a>
            <a href="#contacto" className="px-4 py-2 text-sm font-medium hover:bg-accent rounded-md" onClick={() => setIsMenuOpen(false)}>
              {renderLabel("contacto")}
            </a>
          </nav>
        </div>
      )}
    </header>
  )
}