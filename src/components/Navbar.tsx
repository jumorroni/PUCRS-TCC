import { Button } from "@/components/ui/button";

export const Navbar = () => {

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border shadow-soft">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-14 h-20 rounded-xl flex items-center justify-center shadow-soft">
            <img src="src/assets/Logo2.png"/>
            </div>
            <div>
            <a href="#home" className="text-xl font-bold">SobraBoa</a>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#como-funciona" className="text-foreground hover:text-primary transition-smooth font-medium">
              Como funciona?
            </a>
            <a href="#doar" className="text-foreground hover:text-primary transition-smooth font-medium">
              Doar
            </a>
            <a href="#mapa" className="text-foreground hover:text-primary transition-smooth font-medium">
              Pontos de Coleta
            </a>
            <a href="#alimentos" className="text-foreground hover:text-primary transition-smooth font-medium">
              Alimentos
            </a>
            <a href="#impacto" className="text-foreground hover:text-primary transition-smooth font-medium">
              Impacto
            </a>
            <a href="#dicas" className="text-foreground hover:text-primary transition-smooth font-medium">
              Dicas
            </a>
          </div>

          {/* Login Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <Button variant="ghost" onClick={() => window.location.href = '/auth'}>
              Entrar
            </Button>
            <Button variant="default" onClick={() => window.location.href = '/selecionar-perfil'}>
              Começar
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};
