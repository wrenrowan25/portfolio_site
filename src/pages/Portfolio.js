import React from 'react';
import SearchBar from '../components/SearchBar';
import ProjectCard from '../components/ProjectCard';

function Portfolio({ projects, activeTab, activeTags, setActiveTags }) {
    return (
        <>
            <SearchBar
                activeTags={activeTags}
                setActiveTags={setActiveTags}
                activeTab={activeTab}
            />
            <div className="project-grid">
                {(activeTags.length > 0
                    ? projects.filter((project) =>
                        project.tags.some((tag) =>
                            activeTags.includes(tag)
                        )
                    )
                    : projects
                )
                    .filter((project) => project.category === activeTab)
                    .map((project) => (
                        <ProjectCard
                            key={project.id}
                            project={project}
                            onClick={`/project/${project.id}`}
                        />
                    ))}
            </div>
        </>
    );
}

export default Portfolio;