import { createSlice, PayloadAction } from '@reduxjs/toolkit';


type Role = 'teacher' | 'student' | 'parent';


interface BaseUser {
  id: string;
  name: string;
  email: string;
  role: Role;
}

interface TeacherDetails extends BaseUser {
  role: 'teacher';
  subjectSpecialization: string;
  classesAssigned: string[];
}

interface StudentDetails extends BaseUser {
  role: 'student';
  grade: string;
  parentId: string;
}

interface ParentDetails extends BaseUser {
  role: 'parent';
  childrenIds: string[];
}
type UserDetails = TeacherDetails | StudentDetails | ParentDetails;

interface AuthState {
  isAuthenticated: boolean;
  userDetails: UserDetails | null;
  roles: string[];
  permissions: string[];
}

const initialState: AuthState = {
  isAuthenticated: false,
  userDetails: null,
  roles: [],
  permissions: [],
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (
      state,
      action: PayloadAction<{
        userDetails: UserDetails;
        roles: string[];
        permissions: string[];
      }>
    ) => {
      state.isAuthenticated = true;
      state.userDetails = action.payload.userDetails;
      state.roles = action.payload.roles;
      state.permissions = action.payload.permissions;
    },
    logout: (state) => {
      state.isAuthenticated = false;
      state.userDetails = null;
      state.roles = [];
      state.permissions = [];
    },
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
