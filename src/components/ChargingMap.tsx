import React, { useEffect, useRef } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { motion } from 'framer-motion';

// Sample charging station data
const chargingStations = [
  { id: 1, lat: 42.3314, lng: -83.0458, status: 'active', name: 'Downtown Detroit Hub' },
  { id: 2, lat: 42.3314, lng: -83.0458, status: 'maintenance', name: 'Midtown Station' },
  { id: 3, lat: 42.3314, lng: -83.0458, status: 'active', name: 'Corktown Express' },
  // Add more stations as needed
];

const ChargingMap = () => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);

  useEffect(() => {
    if (!mapContainer.current) return;

    mapboxgl.accessToken = import.meta.env.VITE_MAPBOX_TOKEN;
    
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/light-v11',
      center: [-83.0458, 42.3314], // Detroit coordinates
      zoom: 12
    });

    // Add markers for each charging station
    chargingStations.forEach(station => {
      const el = document.createElement('div');
      el.className = 'marker';
      el.style.backgroundColor = station.status === 'active' ? '#10B981' : '#F59E0B';
      el.style.width = '20px';
      el.style.height = '20px';
      el.style.borderRadius = '50%';
      el.style.border = '2px solid white';
      el.style.boxShadow = '0 2px 4px rgba(0,0,0,0.2)';

      new mapboxgl.Marker(el)
        .setLngLat([station.lng, station.lat])
        .setPopup(
          new mapboxgl.Popup({ offset: 25 })
            .setHTML(`
              <h3 class="font-bold">${station.name}</h3>
              <p class="text-sm">Status: ${station.status}</p>
            `)
        )
        .addTo(map.current);
    });

    return () => map.current?.remove();
  }, []);

  return (
    <section id="charging-map" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-extrabold text-secondary-900 sm:text-4xl"
          >
            Charging Station Network
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-4 max-w-2xl mx-auto text-xl text-secondary-500"
          >
            Monitor your charging infrastructure in real-time
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-16"
        >
          <div
            ref={mapContainer}
            className="w-full h-[600px] rounded-2xl shadow-lg overflow-hidden"
          />
        </motion.div>

        <div className="mt-8 flex justify-center space-x-8">
          <div className="flex items-center">
            <div className="w-4 h-4 rounded-full bg-green-500 mr-2" />
            <span className="text-secondary-700">Active Stations</span>
          </div>
          <div className="flex items-center">
            <div className="w-4 h-4 rounded-full bg-amber-500 mr-2" />
            <span className="text-secondary-700">Maintenance Required</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChargingMap;