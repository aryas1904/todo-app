

const storage = {
  get: (key) => {
    try {
      return JSON.parse(localStorage.getItem(key));
    } catch {
      return null;
    }
  },
  set: (key, value) => {
    localStorage.setItem(key, JSON.stringify(value));
  },
  remove: (key) => {
    localStorage.removeItem(key);
  }
};
export function loadTasks() {
  try {
    return JSON.parse(localStorage.getItem('tasks')) || [];
  } catch {
    return [];
  }
}

export function saveTasks(tasks) {
  localStorage.setItem('tasks', JSON.stringify(tasks));
}
export default storage;
