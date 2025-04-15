import { useState, useEffect } from 'react';
import { BikeServices } from '@/services/jcd/bikeServices';
import { StationType } from '@/services/jcd/bikeServices';

export const useStations = () => {
  const [stations, setStations] = useState<StationType[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStations = async () => {
      setLoading(true);
      try {
        const data = await BikeServices.getStations();
        if (data) {
          setStations(data);
        } else {
          console.error('Failed to fetch stations');
        }
      } catch (error) {
        console.error('Error fetching stations:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchStations();
  }, []);

  return { stations, loading };
};
