import { create } from 'zustand';

export type BuildingType = 
  | 'command-center'
  | 'oil-derrick'
  | 'power-plant'
  | 'barracks'
  | 'turret';

export interface Building {
  id: string;
  type: BuildingType;
  position: [number, number, number];
  health: number;
  maxHealth: number;
  powerConsumption: number;
  produces?: {
    resource: 'credits' | 'fuel' | 'power';
    rate: number;
  };
}

export interface BuildingStore {
  buildings: Building[];
  selectedBuildingType: BuildingType | null;
  
  addBuilding: (type: BuildingType, position: [number, number, number]) => boolean;
  removeBuilding: (id: string) => void;
  selectBuildingType: (type: BuildingType | null) => void;
  damageBuilding: (id: string, amount: number) => void;
  getBuilding: (id: string) => Building | undefined;
  getTotalPowerConsumption: () => number;
}

const BUILDING_CONFIGS: Record<BuildingType, Partial<Building>> = {
  'command-center': {
    maxHealth: 5000,
    powerConsumption: 50,
  },
  'oil-derrick': {
    maxHealth: 1000,
    powerConsumption: 20,
    produces: { resource: 'fuel', rate: 10 },
  },
  'power-plant': {
    maxHealth: 1500,
    powerConsumption: 0,
    produces: { resource: 'power', rate: 100 },
  },
  'barracks': {
    maxHealth: 2000,
    powerConsumption: 30,
  },
  'turret': {
    maxHealth: 800,
    powerConsumption: 15,
  },
};

export const useBuildingStore = create<BuildingStore>((set, get) => ({
  buildings: [],
  selectedBuildingType: null,

  addBuilding: (type, position) => {
    const config = BUILDING_CONFIGS[type];
    const newBuilding: Building = {
      id: `building-${Date.now()}-${Math.random()}`,
      type,
      position,
      health: config.maxHealth || 1000,
      maxHealth: config.maxHealth || 1000,
      powerConsumption: config.powerConsumption || 0,
      produces: config.produces,
    };

    set((state) => ({
      buildings: [...state.buildings, newBuilding],
      selectedBuildingType: null,
    }));

    return true;
  },

  removeBuilding: (id) => {
    set((state) => ({
      buildings: state.buildings.filter((b) => b.id !== id),
    }));
  },

  selectBuildingType: (type) => {
    set({ selectedBuildingType: type });
  },

  damageBuilding: (id, amount) => {
    set((state) => ({
      buildings: state.buildings.map((b) => {
        if (b.id === id) {
          const newHealth = Math.max(0, b.health - amount);
          return { ...b, health: newHealth };
        }
        return b;
      }),
    }));

    const building = get().getBuilding(id);
    if (building && building.health <= 0) {
      get().removeBuilding(id);
    }
  },

  getBuilding: (id) => {
    return get().buildings.find((b) => b.id === id);
  },

  getTotalPowerConsumption: () => {
    return get().buildings.reduce((sum, b) => sum + b.powerConsumption, 0);
  },
}));
