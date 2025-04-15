import { useState, useEffect } from 'react';
import { BikeServices } from '@/services/jcd/bikeServices';
import { ParkType } from '@/services/jcd/bikeServices';

export const useParkings = () => {
  const [parkings, setParkings] = useState<ParkType[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchParkings = async () => {
      setLoading(true);
      try {
        const data = await BikeServices.getParkings();
        if (data) {
          setParkings(data);
        } else {
          console.error('Failed to fetch stations');
        }
      } catch (error) {
        console.error('Error fetching stations:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchParkings();
  }, []);

  return { parkings, loading };
};
