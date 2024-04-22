import {create} from 'zustand';
import { persist } from 'zustand/middleware';

interface State {
    login: boolean;
    token: string;
    user:{
        id: number;
        name: string;
        email: string;
    }
    initState: (data: any) => void;  
    remuveAll: () => void;
}

export const useStateStore = create(persist<State>(
    (set) => ({
      login: false,
      token: '',
      user: {
          id: 0,
          name: '',
          email: ''
      },
      
      initState: (data) => set({
          login: true, 
          token: data.token, 
          user: {
              id: data.user.id,
              name: data.user.name, 
              email: data.user.email
          }
      }),
      remuveAll: () =>set({
        login: false, 
        token: '', 
        user: {
            id: 0,
            name: '', 
            email: ''
        }
      })
    }),

    {
      name: 'state-playon', // nombre único para el almacenamiento local
    }
  ));