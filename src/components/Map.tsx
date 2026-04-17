import { useState } from "react";
import { GoogleMap, Marker, InfoWindow, useJsApiLoader } from "@react-google-maps/api";
import { Card } from "./ui/card";
import { MapPin } from "lucide-react";

interface CollectionPoint {
  id: number;
  name: string;
  type: string;
  address: string;
  coordinates: {
    lat: number;
    lng: number;
  };
}

const collectionPoints: CollectionPoint[] = [
  {
    id: 1,
    name: "Centro de Distribuição Norte",
    type: "Alimentos industrializados",
    address: "Av. Principal, 1000",
    coordinates: { lat: -23.5505, lng: -46.6333 },
  },
  {
    id: 2,
    name: "Ponto de Compostagem Sul",
    type: "Adubo e compostagem",
    address: "Rua das Flores, 250",
    coordinates: { lat: -23.5700, lng: -46.6500 },
  },
  {
    id: 3,
    name: "ONG Alimenta Mais",
    type: "Alimentos frescos",
    address: "Rua da Solidariedade, 89",
    coordinates: { lat: -23.5400, lng: -46.6200 },
  },
  {
    id: 4,
    name: "Mercado Solidário",
    type: "Alimentos próximos da validade",
    address: "Av. do Comércio, 456",
    coordinates: { lat: -23.5600, lng: -46.6400 },
  },
  {
    id: 5,
    name: "Fazenda Urbana",
    type: "Adubo e compostagem",
    address: "Rua Verde, 123",
    coordinates: { lat: -23.5300, lng: -46.6100 },
  },
];

const mapContainerStyle = {
  width: "100%",
  height: "500px",
};

const center = {
  lat: -23.5505,
  lng: -46.6333,
};

const mapOptions = {
  disableDefaultUI: false,
  zoomControl: true,
  streetViewControl: false,
  mapTypeControl: false,
  fullscreenControl: true,
};

interface MapProps {
  mapboxToken: string;
}

export const Map = ({ mapboxToken }: MapProps) => {
  const [selectedPoint, setSelectedPoint] = useState<CollectionPoint | null>(null);
  const [map, setMap] = useState<google.maps.Map | null>(null);

  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: mapboxToken,
  });

  if (!isLoaded) {
    return (
      <div className="w-full h-[500px] rounded-lg bg-muted animate-pulse flex items-center justify-center">
        <p className="text-muted-foreground">Carregando mapa...</p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="relative w-full rounded-lg overflow-hidden shadow-elegant">
        <GoogleMap
          mapContainerStyle={mapContainerStyle}
          center={center}
          zoom={12}
          options={mapOptions}
          onLoad={(map) => setMap(map)}
        >
          {collectionPoints.map((point) => (
            <Marker
              key={point.id}
              position={point.coordinates}
              onClick={() => setSelectedPoint(point)}
              icon={{
                path: "M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z",
                fillColor: "hsl(142, 76%, 36%)",
                fillOpacity: 1,
                strokeWeight: 0,
                scale: 1.5,
              }}
            />
          ))}

          {selectedPoint && (
            <InfoWindow
              position={selectedPoint.coordinates}
              onCloseClick={() => setSelectedPoint(null)}
            >
              <div className="p-2">
                <h3 className="font-semibold text-foreground mb-1">{selectedPoint.name}</h3>
                <p className="text-xs text-primary font-medium mb-1">{selectedPoint.type}</p>
                <p className="text-xs text-muted-foreground">{selectedPoint.address}</p>
              </div>
            </InfoWindow>
          )}
        </GoogleMap>
      </div>

      {selectedPoint && (
        <Card className="p-6 animate-in slide-in-from-bottom-4">
          <div className="flex items-start gap-4">
            <div className="p-3 bg-primary/10 rounded-lg">
              <MapPin className="h-6 w-6 text-primary" />
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-semibold mb-2">{selectedPoint.name}</h3>
              <p className="text-sm text-primary font-medium mb-1">{selectedPoint.type}</p>
              <p className="text-muted-foreground">{selectedPoint.address}</p>
            </div>
          </div>
        </Card>
      )}

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {collectionPoints.map((point) => (
          <Card
            key={point.id}
            className="p-4 cursor-pointer hover:shadow-lg transition-shadow"
            onClick={() => {
              setSelectedPoint(point);
              map?.panTo(point.coordinates);
              map?.setZoom(14);
            }}
          >
            <div className="flex items-start gap-3">
              <MapPin className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-semibold mb-1">{point.name}</h4>
                <p className="text-xs text-primary mb-1">{point.type}</p>
                <p className="text-xs text-muted-foreground">{point.address}</p>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};
