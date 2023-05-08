export const state = () => ({
  sidebar: {
    open: true
  },
  users: [
    {
      name: 'Bessie Cooper',
      role: 'Team Leader',
      location: 'home',
      department: 'security',
      status: 'On break',
      online: false,
    },
    {
      name: 'Darrell Steward',
      role: 'Agent',
      location: 'office',
      department: 'infrastructure',
      status: 'In Meeting',
      online: true,
    },
    {
      name: 'Jerry Nelson',
      role: 'Agent',
      location: 'office',
      department: 'infrastructure',
      status: 'Troubleshooting',
      online: true,
    },
    {
      name: 'Jenny Wilson',
      role: 'Manager',
      location: 'office',
      department: 'support',
      status: 'In Meeting',
      online: true,
    },
    {
      name: 'Arlene McCoy',
      role: 'IT',
      location: 'home',
      department: 'IT',
      status: 'Troubleshooting',
      online: false,
    },
    {
      name: 'Theresa Webb',
      role: 'IT',
      location: 'office',
      department: 'IT',
      status: 'In Meeting',
      online: true,
    },
  ],
  userRoles: [
    {
      name: 'Team Leader',
      active: true,
    },
    {
      name: 'Agent',
      active: true,
    },
    {
      name: 'Manager',
      active: true,
    },
    {
      name: 'IT',
      active: true,
    },
  ],
});

export const mutations = {
  toggleSidebar(state) {
    state.sidebar.open = !state.sidebar.open;
  }
};

export const getters = {
  getUsers: (state) => {
    return state.users;
  },
  getUserRoles: (state) => {
    return state.userRoles;
  }
}

