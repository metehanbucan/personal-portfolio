import { createContext, useContext, useEffect, useState } from "react";
import { getProjectUseCaseProvider } from "../domain/usecases/GetProjects";

const ProjectsContext = createContext();

export const ProjectsProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [projects, setProjects] = useState([]);
  async function fetchProjects() {
    const projectsData = await getProjectUseCaseProvider.call();
    setProjects(projectsData);
    setLoading(false);
  }

  useEffect(() => {
    fetchProjects();
  }, []);

  return (
    <ProjectsContext.Provider value={{ projects, loading }}>
      {children}
    </ProjectsContext.Provider>
  );
};

export const useProjects = () => useContext(ProjectsContext);
