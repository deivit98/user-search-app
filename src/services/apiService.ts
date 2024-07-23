const API_URL ='https://localhost:7082/api/User';

export const fetchUsers = async (query: string) => {
  try {
    const response = await fetch(`${API_URL}?input=${query}`);
    if (!response.ok) {
      throw new Error(`Error: ${response.statusText}`);
    }
    const data = response.json();
    return data;
  } catch (error) {
    console.error("Error fetching users:", error);
    throw error;
  }
};

export {}; // Ensure the file is treated as a module by exporting an empty object
