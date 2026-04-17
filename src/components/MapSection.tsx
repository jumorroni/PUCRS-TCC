import { Map } from "./Map";
import { useState } from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { toast } from "sonner";

export const MapSection = () => {
  const [API_MAP_KEY] = useState("");

 
  return (
    <section id="mapa" className="py-20 px-4 bg-gradient-subtle">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
          Pontos de Coleta
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Encontre os pontos de coleta para doações mais próximos de você
          </p>
        </div>
          <Map mapboxToken={API_MAP_KEY} />
      </div>
    </section>
  );
};
