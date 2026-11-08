"use client";
import { create } from "zustand";
import usersJson from "../database/users.json";
import type { User } from "../account/AccountContext";

// Holds everyone the People table can list, including people added this session
type UsersStore = {
  users: User[];
  addUser: (user: User) => void;
};

export const useUsersStore = create<UsersStore>((set) => ({
  users: usersJson,
  addUser: (user) => set((state) => ({ users: [...state.users, user] })),
}));
