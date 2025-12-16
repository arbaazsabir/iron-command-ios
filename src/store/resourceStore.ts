import { create } from 'zustand';

export type Resource = 'credits' | 'fuel' | 'power';

export interface ResourceState {
  credits: number;
  fuel: number;
  power: number;
  powerConsumption: number;
  powerProduction: number;
}

export interface ResourceStore extends ResourceState {
  addCredits: (amount: number) => void;
  addFuel: (amount: number) => void;
  addPower: (amount: number) => void;
  consumeCredits: (amount: number) => boolean;
  consumeFuel: (amount: number) => boolean;
  setPowerConsumption: (amount: number) => void;
  setPowerProduction: (amount: number) => void;
  reset: () => void;
}

const INITIAL_STATE: ResourceState = {
  credits: 500,
  fuel: 300,
  power: 0,
  powerConsumption: 0,
  powerProduction: 100,
};

export const useResourceStore = create<ResourceStore>((set, get) => ({
  ...INITIAL_STATE,

  addCredits: (amount) => set((state) => ({ credits: state.credits + amount })),
  
  addFuel: (amount) => set((state) => ({ fuel: state.fuel + amount })),
  
  addPower: (amount) => set((state) => ({ powerProduction: state.powerProduction + amount })),

  consumeCredits: (amount) => {
    const state = get();
    if (state.credits >= amount) {
      set({ credits: state.credits - amount });
      return true;
    }
    return false;
  },

  consumeFuel: (amount) => {
    const state = get();
    if (state.fuel >= amount) {
      set({ fuel: state.fuel - amount });
      return true;
    }
    return false;
  },

  setPowerConsumption: (amount) => set({ powerConsumption: amount }),
  
  setPowerProduction: (amount) => set({ powerProduction: amount }),

  reset: () => set(INITIAL_STATE),
}));
