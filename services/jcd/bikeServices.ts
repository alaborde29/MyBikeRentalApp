import { z } from 'zod'

export type StandType = {
  availabilities: {
    bikes: number,
    stands: number
    mechanicalBikes: number,
    electricalBikes: number,
    electricalInternalBatteryBikes: number,
    electricalRemovableBatteryBikes: number
  },
  capacity: number
}

export type StationType = {
number: number,
contractName: string,
name: string,
address: string,
position: {
  lat: number,
  lng: number
}
banking: boolean,
bonus: boolean,
bike_stands: number,
available_bike_stands: number,
available_bikes: number,
status: string,
lastUpdate: string,
}

export type ParkType = {
  contractName: string;
  name: string;
  number: number;
  status: 'OPEN' | 'CLOSED'; // adjust if there are other possible values
  position: {
    latitude: number;
    longitude: number;
  };
  accessType: 'FREE_ACCESS' | 'PAID_ACCESS'; // adjust if other types exist
  lockerType: 'SINGLE' | 'DOUBLE'; // adjust based on real possibilities
  hasSurveillance: boolean;
  isFree: boolean;
  address: string;
  zipCode: string;
  city: string;
  isOffStreet: boolean;
  hasElectricSupport: boolean;
  hasPhysicalReception: boolean;
};

const baseUrl = process.env.EXPO_PUBLIC_BASE_JDC_URL
const apiKey = process.env.EXPO_PUBLIC_JCD_KEY

export const BikeServices = {
  getStations: async (): Promise<StationType[] | null> => {
    const queryParams = new URLSearchParams([
      ['contract', 'nantes'],
      ['apiKey', apiKey!],
    ]);
    const queryUrl = `${baseUrl}/stations?${queryParams.toString()}`;

    try {
      const reponse = await fetch(queryUrl);
      const json = await reponse.json();
      if (!json) {
        throw new Error('Failed to fetch data');
      }
      return json
    } catch (error) {
      console.error(error)
      return null
    }
  },

  getParkings: async (): Promise<ParkType[] | null> => {
    const queryParams = new URLSearchParams([
      ['contract', 'nantes'],
      ['apiKey', apiKey!],
    ]);
    const queryUrl = `${baseUrl}/parks?${queryParams.toString()}`;

    try {
      const reponse = await fetch(queryUrl);
      const json = await reponse.json();
      if (!json) {
        throw new Error('Failed to fetch data');
      }
      return json
    } catch (error) {
      console.error(error)
      return null
    }
  }
}