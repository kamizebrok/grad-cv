import React, { useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import './App.css';
import enFlag from './assets/us-flag.png';
import plFlag from './assets/pl-flag.png';
import profilePic from './assets/profile.jpg';
import EnglishCertificate from './components/EnglishCertificate';
import DegreeDiploma from './components/DegreeDiploma';
import ChinaCertificate from './components/BIT';

function App() {
  const [language, setLanguage] = useState('en');

  const content = {
    en: {
      header: {
        name: 'Kamil Żebrok',
        title: 'Software Engineer | Web Developer | Data Scientist',
      },
      about: {
        title: 'About Me',
        description:
          'I am a passionate software engineer with experience in building web applications using modern technologies like React, Node.js, and more. I love solving problems and creating user-friendly solutions.',
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
            role: 'Programming and Data Analysis Apprentice',
            company: 'IMMOQEE Sp. z o.o. (Jul 2024 - Sep 2024)',
            description:
              'Data processing and analysis, Design and implementation of web-based interfaces for internal tools, IT support in the development, enhancement, and evaluation of research and operational tools existing within the company.',
          },
          {
            role: 'Tutor',
            company: 'GoStudent (Oct 2021 - Mar 2025)',
            description:
              'Teaching Mathematics, Physics, and Computer Science at an advanced level, Work effectively with diverse clients, including high school students, parents and college students',
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
          }
        ],
      },
      certificates: {
        title: 'Certificates',
        items: [
          { name: 'English Certificate', path: '/certificate/english' },
          { name: 'Degree Diploma', path: '/certificate/diploma' },
          { name: 'China Certificate', path: '/certificate/china' },
        ],
      },
      contact: {
        title: 'Contact & GitHub Projects',
        email: 'Email: zebrokkamil@outlook.com',
        phone: 'Phone: +123 456 7890',
        linkedin: 'LinkedIn: https://www.linkedin.com/in/kamil-%C5%BCebrok-2a0a77257/',
        github: 'Github: https://github.com/kamizebrok',
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
          'Jestem pasjonatem inżynierii oprogramowania z doświadczeniem w tworzeniu aplikacji internetowych przy użyciu nowoczesnych technologii, takich jak React, Node.js i inne. Uwielbiam rozwiązywać problemy i tworzyć przyjazne dla użytkownika rozwiązania.',
      },
      languages: {
        title: 'Znajomość Języków',
        items: [
          { name: 'Polski', level: 'Ojczysty' },
          { name: 'Angielski', level: 'Biegły (C1)' },
          { name: 'Rosyjski', level: 'Średniozaawansowany (B1)' },
          {name: 'Chiński', level: 'Podstawowy (A1)' },
        ],
      },
      experience: {
        title: 'Doświadczenie',
        items: [
          {
            role: 'Stażysta z zakresu programowania i analizy danych',
            company: 'IMMOQEE Sp. z o.o. (Lipiec 2024 - Wrzesień 2024)',
            description:
              'Analiza i przetwarzanie danych, projektowanie i wdrażanie interfejsów webowych dla narzędzi wewnętrznych, wsparcie informatyczne w zakresie rozwoju, doskonalenia i oceny narzędzi badawczych i operacyjnych istniejących w firmie',
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
          }

        ],
      },
      certificates: {
        title: 'Certyfikaty',
        items: [
          { name: 'Certyfikat z Angielskiego', path: '/certificate/english' },
          { name: 'Dyplom Ukończenia Studiów', path: '/certificate/diploma' },
          { name: 'Certyfikat Beijing Institute of Technology', path: '/certificate/china' },
        ],
      },
      contact: {
        title: 'Kontakt',
        email: 'Email: zebrokkamil@outlook.com',
        phone: 'Telefon: +123 456 7890',
        linkedin: 'LinkedIn: linkedin.com',
        github: 'Github: https://github.com/kamizebrok',
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
          <img src={profilePic} alt="Profile" className="profile-pic" />
          <h1>{langContent.header.name}</h1>
          <p>{langContent.header.title}</p>
        </header>

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
                  <h2>{langContent.languages.title}</h2>
                  <ul>
                    {langContent.languages.items.map((item, index) => (
                      <li key={index}>
                        <strong>{item.name}</strong>: {item.level}
                      </li>
                    ))}
                  </ul>
                </section>

                <section>
                  <h2>{langContent.experience.title}</h2>
                  <ul>
                    {langContent.experience.items.map((item, index) => (
                      <li key={index}>
                        <strong>{item.role}</strong> - {item.company}
                        <p>{item.description}</p>
                      </li>
                    ))}
                  </ul>
                </section>

                <section>
                  <h2>{langContent.education.title}</h2>
                  <ul>
                    {langContent.education.items.map((item, index) => (
                      <li key={index}>
                        <strong>{item.degree}</strong> - {item.school}
                      </li>
                    ))}
                  </ul>
                </section>

                <section>
                  <h2>{langContent.certificates.title}</h2>
                  <ul>
                    {langContent.certificates.items.map((item, index) => (
                      <li key={index}>
                        <Link to={item.path}>{item.name}</Link>
                      </li>
                    ))}
                  </ul>
                </section>

                <section>
                  <h2>{langContent.contact.title}</h2>
                  <p>{langContent.contact.email}</p>
                  <p>{langContent.contact.phone}</p>
                  <p>
                    {langContent.contact.linkedin.split(': ')[0]}:{' '}
                    <a
                      href={`https://${langContent.contact.linkedin.split(': ')[1]}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {langContent.contact.linkedin.split(': ')[1]}
                    </a>
                  </p>
                  <p>{langContent.contact.github.split(': ')[0]}:{' '}
                    <a
                      href={`https://${langContent.contact.github.split(': ')[1]}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {langContent.contact.github.split(': ')[1]}
                    </a>

                  </p>
                </section>
              </main>
            }
          />
          <Route path="/certificate/english" element={<EnglishCertificate />} />
          <Route path="/certificate/diploma" element={<DegreeDiploma />} />
          <Route path="/certificate/china" element={<ChinaCertificate />} />
        </Routes>

        <footer>
          <p>{langContent.footer}</p>
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
