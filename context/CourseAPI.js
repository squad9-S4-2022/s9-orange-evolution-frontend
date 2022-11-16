import { createContext, useContext, useEffect } from 'react';

const API_URL = 'https://orange-evolution-s9.herokuapp.com';
const TOKEN =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2Njg1NjE0MjYsImV4cCI6MTY2OTE2NjIyNiwic3ViIjoiZGZiZmJhODQtNmFhNS00YjEwLTk3MDItYTZhOWJmMjAzZWNmIn0.DflFxD--z8L_0dzqPSEpY3t-LjDjqS2ju1h1WGAms6Q';

const CoursesContext = createContext();
export function useCoursesContext() {
  return useContext(CoursesContext);
}

export function CoursesProvider({ children }) {
  const API_URL = 'https://orange-evolution-s9.herokuapp.com';
  const TOKEN =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2Njg1NjE0MjYsImV4cCI6MTY2OTE2NjIyNiwic3ViIjoiZGZiZmJhODQtNmFhNS00YjEwLTk3MDItYTZhOWJmMjAzZWNmIn0.DflFxD--z8L_0dzqPSEpY3t-LjDjqS2ju1h1WGAms6Q';

  const getTracksData = async () => {
    const APIData = await fetch(`${API_URL}/trails/list`, {
      method: 'GET',
      headers: {
        'content-type': 'application/json',
        Authorization: `Bearer ${TOKEN}`,
      },
    });
    const json = await APIData.json();
    return json;
  };

  return (
    <CoursesContext.Provider value={{ getTracksData }}>
      {children}
    </CoursesContext.Provider>
  );
}
