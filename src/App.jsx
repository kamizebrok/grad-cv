import React, { useState, useEffect } from 'react';
import { Routes, Route, Link, BrowserRouter } from 'react-router-dom';
import './App.css';
import enFlag from './assets/us-flag.png';
import plFlag from './assets/pl-flag.png';
import profilePic from './assets/profile.jpg';
import EnglishCertificate from './components/EnglishCertificate';
import DegreeDiploma from './components/DegreeDiploma';
import ChinaCertificate from './components/BIT';
import Projects from './components/Projects';
import ProjectDetails from './components/ProjectDetails';
import GradeManagementPDF from './components/GradeManagementPDF';
import { FaEnvelope, FaPhone, FaLinkedin, FaGithub } from 'react-icons/fa';

function App() {
  const [language, setLanguage] = useState('pl');
  const [pageVisible, setPageVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => setPageVisible(true), 200);
  }, []);

  const content = {
    en: {
      header: {
        name: 'Kamil Żebrok',
        title: 'Software Engineer | Web Developer | Data Scientist',
      },
      about: {
        title: 'About Me',
        description:
          'Recent graduate with a Bachelor of Science in Engineering in Computer Science with a specialization in Data Analysis Engineering, graduated from the Faculty of Applied Mathematics at the Silesian University of Technology. My skills cover both data science (Python, Pandas, PyTorch) and web development (JavaScript, React), complemented by knowledge of C# and object-oriented programming applied in various projects. Eager to develop as a junior software engineer, I combine analytical thinking with practical coding skills. Outside of work, I enjoy chess, basketball, tech innovations and Chinese cuisine.',
      },
      skills: {
        title: 'Technologies',
        items: [
          'JavaScript',
          'React',
          'Python',
          'Pandas',
          'PyTorch',
          'C#',
          'Git',
          'SQL',
          'HTML & CSS',
        ],
      },
      languages: {
        title: 'Languages',
        items: [
          { name: 'Polish', level: 'Native' },
          { name: 'English', level: 'Fluent (C1)' },
          { name: 'Russian', level: 'Intermediate (B1)' },
          { name: 'Chinese', level: 'Basic (A1)' },
        ],
      },
      experience: {
        title: 'Experience',
        items: [
          {
            role: 'Programming and Data Analysis Interhip',
            company: 'IMMOQEE Sp. z o.o. (Jul 2024 - Sep 2024)',
            description:
              'Data processing and analysis, design and implementation of web-based interfaces for internal tools, IT support in the development, enhancement, and evaluation of research and operational tools.',
          },
          {
            role: 'Data Science Intership',
            company: 'Faculty of Applied Mathematics, Silesian University of Technology (Nov 2024 - Feb 2025)',
            description:
              'Data analysis of Eurostat ferry traffic and development of a web application.',
          },
          {
            role: 'Tutor',
            company: 'GoStudent (Oct 2021 - Mar 2025)',
            description:
              'Teaching Mathematics, Physics, and Computer Science at an advanced level, work effectively with diverse clients, including high school students, parents and college students',
          },
        ],
      },
      education: {
        title: 'Education',
        items: [
          {
            degree: 'Bachelor of Science in Computer Science',
            school: 'Silesian University of Technology (2021 - 2025)',
          },
          {
            degree: 'Summer School in Emerging Technologies in Electronics Engineering',
            school: 'Beijing Institute of Technology (2024)',
          },
        ],
      },
      certificates: {
        title: 'Certificates',
        items: [
          { name: 'English C1 Proficiency Certificate', path: '/certificate/english' },
          { name: 'Bachelor of Science Degree Diploma', path: '/certificate/diploma' },
          { name: 'Beijing Institute of Technology Certificate', path: '/certificate/china' },
        ],
      },
      projects: {
        title: 'Projects & Blog',
        description: 'Explore my previous projects and read detailed descriptions.',
        linkText: 'See my projects',
        path: '/projects',
      },
      contact: {
        title: 'Contact & GitHub',
        email: 'Email: zebrokkamil@outlook.com',
        phone: 'Phone: +48 603424709',
        linkedin: 'LinkedIn: www.linkedin.com/in/kamil-%C5%BCebrok-2a0a77257/',
        github: 'Github: github.com/kamizebrok',
      },
      footer: '© 2025 Kamil Żebrok',
    },
    pl: {
      header: {
        name: 'Kamil Żebrok',
        title: 'Inżynier Oprogramowania | Web Developer | Inżynier Analizy Danych',
      },
      about: {
        title: 'O Mnie',
        description:
          'Absolwent studiów inżynierskich na kierunku Informatyka o specjalności Inżynieria Analizy Danych, ukończonych na Wydziale Matematyki Stosowanej Politechniki Śląskiej. Moje umiejętności obejmują zarówno naukę o danych (Python, Pandas, PyTorch), jak i rozwój aplikacji webowych (JavaScript, React), uzupełnione wiedzą z zakresu C# oraz programowania obiektowego stosowanego w różnych projektach. Chętnie rozwijam się jako młodszy inżynier oprogramowania, łącząc myślenie analityczne z praktycznymi umiejętnościami kodowania. Poza pracą interesuję się szachami, koszykówką, nowinkami technologicznymi, uwielbiam chińską kuchnię.',
      },
      skills: {
        title: 'Technologie',
        items: [
          'JavaScript',
          'React',
          'Python',
          'Pandas',
          'PyTorch',
          'C#',
          'Git',
          'SQL',
          'HTML & CSS',
        ],
      },
      languages: {
        title: 'Znajomość Języków',
        items: [
          { name: 'Polski', level: 'Ojczysty' },
          { name: 'Angielski', level: 'Biegły (C1)' },
          { name: 'Rosyjski', level: 'Średniozaawansowany (B1)' },
          { name: 'Chiński', level: 'Podstawowy (A1)' },
        ],
      },
      experience: {
        title: 'Doświadczenie',
        items: [
          {
            role: 'Stażysta z zakresu programowania i analizy danych',
            company: 'IMMOQEE Sp. z o.o. (Lipiec 2024 - Wrzesień 2024)',
            description:
              'Analiza i przetwarzanie danych, projektowanie i wdrażanie interfejsów webowych dla narzędzi wewnętrznych, wsparcie informatyczne w zakresie rozwoju, doskonalenia i oceny narzędzi istniejących w firmie.',
          },
          {
            role: 'Praktykant',
            company: 'Wydział Matematyki Stosowanej, Politechnika Śląska (Listopad 2024 - Luty 2025)',
            description:
              'Analiza danych Eurostatu dotyczących ruchu promów, ich wizualizacja oraz tworzenie aplikacji webowej.',
          },
          {
            role: 'Korepetytor',
            company: 'GoStudent (Październik 2021 - Marzec 2025)',
            description:
              'Nauczanie matematyki, fizyki i informatyki z zakresu rozszerzonego, efektywna współpraca z różnorodnymi klientami, w tym uczniami szkół średnich, rodzicami i studentami.',
          },
        ],
      },
      education: {
        title: 'Edukacja',
        items: [
          {
            degree: 'Inżynier Informatyki',
            school: 'Politechnika Śląska (2021 - 2025)',
          },
          {
            degree: 'Letnia Szkoła w Zakresie Nowych Technologii w Inżynierii Elektroniki',
            school: 'Beijing Institute of Technology (2024)',
          },
        ],
      },
      certificates: {
        title: 'Certyfikaty',
        items: [
          { name: 'Zaświadczenie C1 z Języka Angielskiego', path: '/certificate/english' },
          { name: 'Dyplom Ukończenia Studiów', path: '/certificate/diploma' },
          { name: 'Certyfikat Beijing Institute of Technology', path: '/certificate/china' },
        ],
      },
      projects: {
        title: 'Projekty & Blog',
        description: 'Poznaj moje wcześniejsze projekty i przeczytaj ich opisy.',
        linkText: 'Zobacz projekty',
        path: '/projects',
      },
      contact: {
        title: 'Kontakt & Projekty GitHub',
        email: 'Email: zebrokkamil@outlook.com',
        phone: 'Telefon: +48 603424709',
        linkedin: 'LinkedIn: www.linkedin.com/in/kamil-%C5%BCebrok-2a0a77257/',
        github: 'Github: github.com/kamizebrok',
      },
      footer: '© 2025 Kamil Żebrok',
    },
  };

  const handleLanguageChange = (lang) => {
    setLanguage(lang);
  };

  const langContent = content[language];

  return (
    <BrowserRouter basename="/grad-cv">
      <div id="root">
        <header>
          <div className="language-toggle">
            <img
              src={enFlag}
              alt="English"
              onClick={() => handleLanguageChange('en')}
              className={language === 'en' ? 'active' : ''}
            />
            <img
              src={plFlag}
              alt="Polski"
              onClick={() => handleLanguageChange('pl')}
              className={language === 'pl' ? 'active' : ''}
            />
          </div>
          <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
            <img src={profilePic} alt="Profile" className="profile-pic" style={{ cursor: 'pointer' }} />
            <h1 style={{ cursor: 'pointer' }}>{langContent.header.name}</h1>
          </Link>
          <p>{langContent.header.title}</p>
        </header>

        <div className={`page-fade${pageVisible ? ' visible' : ''}`}>
          <Routes>
            <Route
              path="/"
              element={
                <main>
                  <section>
                    <h2>{langContent.about.title}</h2>
                    <p>{langContent.about.description}</p>
                  </section>

                  <section>
                    <h2>{langContent.skills.title}</h2>
                    <div className="skills-container">
                      {langContent.skills.items.map((skill, index) => (
                        <span key={index} className="skill-item">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </section>

                  <section>
                    <h2>{langContent.languages.title}</h2>
                    <table className="languages-table">
                      <tbody>
                        {langContent.languages.items.map((item, index) => (
                          <tr key={index}>
                            <td>
                              <strong>{item.name}</strong>
                            </td>
                            <td>{item.level}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </section>

                  <section>
                    <h2>{langContent.experience.title}</h2>
                    <div className="experience-list">
                      {langContent.experience.items.map((item, index) => (
                        <div className="experience-card" key={index}>
                          <span className="company">{item.company}</span>
                          <strong>{item.role}</strong>
                          <p>{item.description}</p>
                        </div>
                      ))}
                    </div>
                  </section>

                  <section className="education-container">
                    <h2>{langContent.education.title}</h2>
                    <div className="education-list">
                      {langContent.education.items.map((item, index) => (
                        <div className="education-card" key={index}>
                          <span className="degree">{item.degree}</span>
                          <div className="school">{item.school}</div>
                        </div>
                      ))}
                    </div>
                  </section>

                  <section className="certificates-container">
                    <h2>{langContent.certificates.title}</h2>
                    <div className="certificates-list">
                      {langContent.certificates.items.map((item, index) => (
                        <Link to={item.path} key={index} className="certificate-card">
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  </section>

                  <section className="projects-highlight">
                    <h2>{langContent.projects.title}</h2>
                    <p className="projects-invite">
                      {language === 'pl'
                        ? 'Sprawdź moje projekty i zobacz, jak łączę wiedzę z praktyką! Każdy projekt to konkretne rozwiązania i nowoczesne technologie.'
                        : 'Discover my projects and see how I turn knowledge into real solutions! Each project showcases modern technologies and practical skills.'}
                    </p>
                    <Link to={langContent.projects.path} className="projects-button">
                      {langContent.projects.linkText} 🚀
                    </Link>
                  </section>

                  <section>
                    <h2>{langContent.contact.title}</h2>
                    <div className="contact-cards">
                      <div className="contact-card">
                        <FaEnvelope className="contact-icon" />
                        <span>{langContent.contact.email.replace('Email: ', '')}</span>
                      </div>
                      <div className="contact-card">
                        <FaPhone className="contact-icon" />
                        <span>{langContent.contact.phone.replace(/(Phone: |Telefon: )/, '')}</span>
                      </div>
                      <a
                        className="contact-card"
                        href={`https://${langContent.contact.linkedin.split(': ')[1]}`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FaLinkedin className="contact-icon" />
                        <span>LinkedIn</span>
                      </a>
                      <a
                        className="contact-card"
                        href={`https://${langContent.contact.github.split(': ')[1]}`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FaGithub className="contact-icon" />
                        <span>GitHub</span>
                      </a>
                    </div>
                  </section>
                </main>
              }
            />
            <Route path="/certificate/english" element={<EnglishCertificate />} />
            <Route path="/certificate/diploma" element={<DegreeDiploma />} />
            <Route path="/certificate/china" element={<ChinaCertificate />} />
            <Route path="/projects" element={<Projects language={language} />} />
            <Route path="/projects/:projectId" element={<ProjectDetails language={language} />} />
            <Route path="/projects/grade-management-details" element={<GradeManagementPDF language={language} />} />
          </Routes>
        </div>

        <footer>
          <p>{langContent.footer}</p>
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
