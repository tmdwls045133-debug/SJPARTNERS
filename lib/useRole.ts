import { create } from 'zustand';

type Role = 'sales' | 'management';

interface RoleStore {
  role: Role;
  setRole: (role: Role) => void;
}

export const useRoleStore = create<RoleStore>((set) => ({
  role: 'sales', // 기본값: 영업팀
  setRole: (role) => set({ role }),
}));
