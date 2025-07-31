import React from 'react';
import { Link } from 'react-router-dom';
import project1Img from '../assets/project1.png'; // Add your screenshot files to assets
import project2Img from '../assets/project2.png';
import project3Img from '../assets/gladiators.png'; // Add your Gladiators screenshot to assets

const projectsData = {
  en: [
    {
      title: 'Metaheuristic Optimization',
      description: 'A .NET 6 WPF application for running optimization experiments. It allows dynamic addition of algorithms and test functions (DLLs), experiment parameter configuration, and automatic execution and reporting of results in text and PDF formats.',
      link: 'https://github.com/kamizebrok/Metaheuristic-Optimization',
      image: project1Img,
    },
    {
      title: 'Grade Management System',
      description: 'A web app for managing university courses and grades. Instructors can create courses, add assignments, and enter grades; students register, track progress, and view results. Built with React (frontend) and Django REST (backend), it uses OAuth with USOS for secure login and role assignment. Deployed on Render.com with PostgreSQL, it ensures safe, transparent grade management for both teachers and students.',
      link: 'https://github.com/kamizebrok/Grade-Management-System/',
      image: project2Img,
    },
    {
      title: 'Gladiators',
      description: 'An advanced data mining project analyzing a rich dataset of Roman gladiators. Uses dimensionality reduction, clustering, classification, and association rule mining to uncover patterns, relationships, and predictive models for characteristics, fight outcomes, and survival. Includes visualizations and interactive analyses for deeper insights into the world of gladiators.',
      link: 'https://github.com/kamizebrok/Gladiators',
      image: project3Img,
    },
  ],
  pl: [
    {
      title: 'Optymalizacja Metaheurystykami',
      description: 'Aplikacja .NET 6 WPF umożliwiająca eksperymenty z algorytmami optymalizacyjnymi. Pozwala dynamicznie dodawać algorytmy i funkcje testowe (DLL), konfigurować parametry eksperymentu oraz automatycznie uruchamiać i raportować wyniki w formacie tekstowym i PDF.',
      link: 'https://github.com/kamizebrok/Metaheuristic-Optimization',
      image: project1Img,
    },
    {
      title: 'System Zarządzania Ocenami',
      description: 'Aplikacja webowa do zarządzania kursami i ocenami na uczelni. Prowadzący tworzą kursy, zadania i wprowadzają oceny; studenci rejestrują się, śledzą postępy i przeglądają wyniki. Frontend w React, backend Django REST, logowanie przez USOS (OAuth). Wdrożenie na Render.com z PostgreSQL zapewnia bezpieczne i przejrzyste zarządzanie ocenami.',
      link: 'https://github.com/kamizebrok/Grade-Management-System/',
      image: project2Img,
    },
    {
      title: 'Gladiators',
      description: 'Zaawansowany projekt data mining analizujący bogaty zbiór danych o rzymskich gladiatorach. Wykorzystuje metody redukcji wymiarów, klasteryzacji, klasyfikacji oraz reguły asocjacyjne, aby odkryć wzorce, zależności i modele predykcyjne dotyczące cech, wyników walk i przeżycia. Wizualizacje i interaktywne analizy pozwalają lepiej zrozumieć świat gladiatorów.',
      link: 'https://github.com/kamizebrok/Gladiators',
      image: project3Img,
    },
  ],
};

const pageTitles = {
  en: 'My Projects',
  pl: 'Moje Projekty',
};

function Projects({ language }) {
  const projects = projectsData[language] || projectsData.en;
  const pageTitle = pageTitles[language] || pageTitles.en;

  return (
    <div className="projects-page">
      <h2>{pageTitle}</h2>
      <div className="projects-list">
        {projects.map((proj, idx) => (
          <div className="project-card" key={idx}>
            {proj.image && <img src={proj.image} alt={proj.title} />}
            <div className="project-title">{proj.title}</div>
            <p>{proj.description}</p>
            <div className="project-links">
              <a
                className="project-link github-link"
                href={proj.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span role="img" aria-label="GitHub" style={{marginRight: '6px'}}>🐙</span>
                GitHub
              </a>
              {idx === 1 ? (
                <Link
                  className="project-link details-link"
                  to="/projects/grade-management-details"
                >
                  {language === 'pl' ? 'Szczegóły projektu' : 'Project details'}
                </Link>
              ) : (
                <Link
                  className="project-link details-link"
                  to={`/projects/project${idx + 1}`}
                >
                  {language === 'pl' ? 'Szczegóły projektu' : 'Project details'}
                </Link>
              )}
            </div>
          </div>
        ))}
      </div>
    <p></p>
    <Link to="/" className="back-button">
        Back to the main page
    </Link>
    </div>
    
  );
}

export default Projects;