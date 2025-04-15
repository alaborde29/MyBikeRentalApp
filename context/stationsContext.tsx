import { BikeServices, StationType } from '@/services/jcd/bikeServices';
import React, { createContext, useContext, useEffect, useState } from 'react';

type StationContextType = {
  stations: StationType[];
  setStations: (s: StationType[]) => void;
  loading: boolean;
};

const StationContext = createContext<StationContextType | undefined>(undefined);

export const StationProvider = ({ children }: { children: React.ReactNode }) => {
  const [stations, setStations] = useState<StationType[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStations = async () => {
      const data = await BikeServices.getStations();
      if (data) {
        setStations(data);
      } else {
        console.error("Failed to fetch stations");
      }
      setLoading(false);
    };
    fetchStations();
  }, []);

  return (
    <StationContext.Provider value={{ stations, setStations, loading }}>
      {children}
    </StationContext.Provider>
  );
};

export const useStationContext = () => {
  const ctx = useContext(StationContext);
  if (!ctx) throw new Error('useStationContext must be used within a StationProvider');
  return ctx;
};