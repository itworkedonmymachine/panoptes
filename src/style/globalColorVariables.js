const saveCurrentMode = (mode) => localStorage.setItem('mode', mode);

const restoreModeFromLocalStorage = () => localStorage.getItem('mode');

const isOSSettingDarkMode =
  window.matchMedia &&
  window.matchMedia('(prefers-color-scheme: dark)').matches;

const darkModeVariable = {
  '--font-color': '#cccccc',
  '--secondary-font-color': '#737373',
  '--background-color': '#000000',
  '--border-color': '#ffffff',

  '--operational-color': 'rgba(39, 174, 96, 0.5)',
  '--minor-outage-color': 'rgba(242, 153, 74, 0.5)',
  '--major-outage-color': 'rgba(235, 87, 87, 0.5)',
  '--maintenance-color': 'rgba(45, 156, 219, 0.5)',
  '--fetching-color': 'rgba(255, 255, 255, 0.2)',
};

const lightModeVariable = {
  '--font-color': '#333333',
  '--secondary-font-color': '#c4c4c4',
  '--background-color': '#ffffff',
  '--border-color': '#000000',

  '--operational-color': 'rgba(39, 174, 96, 0.5)',
  '--minor-outage-color': 'rgba(242, 153, 74, 0.5)',
  '--major-outage-color': 'rgba(235, 87, 87, 0.5)',
  '--maintenance-color': 'rgba(45, 156, 219, 0.5)',
  '--fetching-color': 'rgba(0, 0, 0, 0.2)',
};

export const getModeString = (isDarkMode) => {
  if (isDarkMode) {
    return 'dark';
  }
  return 'light';
};

export const updateGlobalColorVariable = (mode) => {
  let styleToToggle = darkModeVariable;
  if (mode === 'light') {
    styleToToggle = lightModeVariable;
  }

  saveCurrentMode(mode);

  Object.keys(styleToToggle).forEach((style) =>
    document.documentElement.style.setProperty(style, styleToToggle[style])
  );
};

export const isInitialModeDark = () => {
  const savedMode = restoreModeFromLocalStorage();
  if (savedMode) {
    updateGlobalColorVariable(savedMode);
    return savedMode === 'dark';
  }

  return isOSSettingDarkMode;
};
