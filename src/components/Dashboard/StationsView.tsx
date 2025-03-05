import React, { useState, useEffect, useRef } from 'react';
import { 
  Battery,
  MapPin,
  Settings,
  AlertTriangle,
  Clock,
  BarChart,
  Filter,
  Search,
  Plus,
  ChevronRight,
  Activity,
  Zap,
  Users
} from 'lucide-react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

const StationsView = () => {
  const [view, setView] = useState<'map' | 'list'>('map');
  const [selectedStation, setSelectedStation] = useState<string | null>(null);
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);

  const stations = [
    {
      id: "A-15",
      name: "Downtown Station A-15",
      status: "active",
      location: "123 Main St, Detroit",
      coordinates: [-83.0458, 42.3314],
      lastMaintenance: "2024-02-15",
      nextMaintenance: "2024-03-15",
      uptime: "99.2%",
      powerOutput: "150kW",
      totalSessions: 1250,
      revenue: "$12,500"
    },
    {
      id: "B-22",
      name: "Midtown Station B-22",
      status: "maintenance",
      location: "456 Park Ave, Detroit",
      coordinates: [-83.0550, 42.3370],
      lastMaintenance: "2024-01-20",
      nextMaintenance: "2024-03-20",
      uptime: "97.8%",
      powerOutput: "150kW",
      totalSessions: 980,
      revenue: "$9,800"
    },
    {
      id: "C-08",
      name: "Corktown Station C-08",
      status: "error",
      location: "789 Michigan Ave, Detroit",
      coordinates: [-83.0650, 42.3320],
      lastMaintenance: "2024-02-01",
      nextMaintenance: "2024-03-01",
      uptime: "95.5%",
      powerOutput: "150kW",
      totalSessions: 1100,
      revenue: "$11,000"
    }
  ];

  useEffect(() => {
    if (view === 'map' && !map.current) {
      mapboxgl.accessToken = import.meta.env.VITE_MAPBOX_TOKEN;
      
      map.current = new mapboxgl.Map({
        container: mapContainer.current!,
        style: 'mapbox://styles/mapbox/light-v11',
        center: [-83.0458, 42.3314], // Detroit coordinates
        zoom: 12
      });

      // Add markers for each station
      stations.forEach(station => {
        const el = document.createElement('div');
        el.className = 'marker';
        el.style.backgroundColor = 
          station.status === 'active' ? '#10B981' : 
          station.status === 'maintenance' ? '#F59E0B' : 
          '#EF4444';
        el.style.width = '20px';
        el.style.height = '20px';
        el.style.borderRadius = '50%';
        el.style.border = '2px solid white';
        el.style.boxShadow = '0 2px 4px rgba(0,0,0,0.2)';

        new mapboxgl.Marker(el)
          .setLngLat(station.coordinates)
          .setPopup(
            new mapboxgl.Popup({ offset: 25 })
              .setHTML(`
                <h3 class="font-bold">${station.name}</h3>
                <p class="text-sm">Status: ${station.status}</p>
                <p class="text-sm">Uptime: ${station.uptime}</p>
              `)
          )
          .addTo(map.current!);
      });

      return () => map.current?.remove();
    }
  }, [view]);

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-secondary-900">Charging Stations</h1>
          <p className="text-secondary-600">Manage and monitor your charging station network</p>
        </div>
        <div className="flex space-x-4">
          <button className="flex items-center px-4 py-2 bg-white rounded-lg shadow-sm hover:bg-secondary-50">
            <Filter className="h-5 w-5 text-secondary-600 mr-2" />
            Filter
          </button>
          <button className="flex items-center px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700">
            <Plus className="h-5 w-5 mr-2" />
            Add Station
          </button>
        </div>
      </div>

      {/* Search and View Toggle */}
      <div className="flex justify-between items-center bg-white p-4 rounded-xl shadow-sm">
        <div className="relative flex-1 max-w-md">
          <Search className="h-5 w-5 text-secondary-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search stations..."
            className="pl-10 pr-4 py-2 w-full border border-secondary-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
          />
        </div>
        <div className="flex space-x-2">
          <button
            onClick={() => setView('map')}
            className={`px-4 py-2 rounded-lg ${
              view === 'map' 
                ? 'bg-primary-600 text-white' 
                : 'bg-white text-secondary-600 hover:bg-secondary-50'
            }`}
          >
            Map View
          </button>
          <button
            onClick={() => setView('list')}
            className={`px-4 py-2 rounded-lg ${
              view === 'list' 
                ? 'bg-primary-600 text-white' 
                : 'bg-white text-secondary-600 hover:bg-secondary-50'
            }`}
          >
            List View
          </button>
        </div>
      </div>

      {/* Station List */}
      {view === 'list' && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {stations.map((station) => (
            <div
              key={station.id}
              className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center">
                    <div className={`p-2 rounded-lg ${
                      station.status === 'active' ? 'bg-green-100' :
                      station.status === 'maintenance' ? 'bg-amber-100' :
                      'bg-red-100'
                    }`}>
                      <Battery className={`h-5 w-5 ${
                        station.status === 'active' ? 'text-green-600' :
                        station.status === 'maintenance' ? 'text-amber-600' :
                        'text-red-600'
                      }`} />
                    </div>
                    <div className="ml-3">
                      <h3 className="text-lg font-medium text-secondary-900">
                        {station.name}
                      </h3>
                      <p className="text-sm text-secondary-500">{station.location}</p>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div>
                    <p className="text-sm text-secondary-500">Uptime</p>
                    <p className="text-lg font-medium text-secondary-900">{station.uptime}</p>
                  </div>
                  <div>
                    <p className="text-sm text-secondary-500">Power Output</p>
                    <p className="text-lg font-medium text-secondary-900">{station.powerOutput}</p>
                  </div>
                  <div>
                    <p className="text-sm text-secondary-500">Total Sessions</p>
                    <p className="text-lg font-medium text-secondary-900">{station.totalSessions}</p>
                  </div>
                  <div>
                    <p className="text-sm text-secondary-500">Revenue</p>
                    <p className="text-lg font-medium text-secondary-900">{station.revenue}</p>
                  </div>
                </div>

                <div className="flex justify-between items-center pt-4 border-t border-secondary-100">
                  <div className="flex items-center text-sm text-secondary-500">
                    <Clock className="h-4 w-4 mr-1" />
                    Next maintenance: {station.nextMaintenance}
                  </div>
                  <button className="text-primary-600 hover:text-primary-700">
                    View Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Map View */}
      {view === 'map' && (
        <div className="bg-white rounded-xl shadow-sm p-6">
          <div className="h-[600px] rounded-lg overflow-hidden">
            <div ref={mapContainer} className="w-full h-full" />
          </div>
        </div>
      )}
    </div>
  );
};

export default StationsView;