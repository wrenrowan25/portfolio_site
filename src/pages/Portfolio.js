import React from 'react';
import SearchBar from '../components/SearchBar';
import ProjectCard from '../components/ProjectCard';

function Portfolio({ projects, activeTab, activeTags, setActiveTags }) {
    const filteredProjects = (activeTags.length > 0
        ? projects.filter((project) =>
            project.tags.some((tag) =>
                activeTags.some((activeTag) => 
                    tag.toLowerCase().includes(activeTag.toLowerCase())
                )
            )
        )
        : projects
    ).filter((project) => project.category === activeTab);

    return (
        <>
            <SearchBar
                activeTags={activeTags}
                setActiveTags={setActiveTags}
                activeTab={activeTab}
            />
            <div className="project-grid">
                {filteredProjects.length > 0 ? filteredProjects.map((project) => (
                    <ProjectCard
                        key={project.id}
                        project={project}
                        activeTags={activeTags}
                        onClick={`/project/${project.id}`}
                    />
                )) : (
                    <div className="no-results-card">There are no projects that match the current search criteria.</div>
                )}
            </div>
        </>
    );
}

export default Portfolio;