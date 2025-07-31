import React from 'react';
import { useParams, Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import project1Img from '../assets/project1.png';
import project1Img2 from '../assets/project1_2.png';
import project1Img3 from '../assets/project1_3.png';
import project1Img4 from '../assets/project1_4.png';
import project2Img from '../assets/project2.png';
import project3Img from '../assets/gladiators.png'; // Dodaj import obrazka projektu Gladiators

// Map placeholder names to imported images
const imageMap = {
  project1Img,
  project1Img2,
  project1Img3,
  project1Img4,
  project2Img,
  project3Img, // Dodaj obrazek do mapy
};

const detailsData = {
  project1: {
    en: {
      title: 'Metaheuristic Optimization',
      description: `

## Project Overview

This project is a .NET 6 WPF application designed for AI-based optimization experiments. It provides a graphical interface for users to select optimization algorithms and test functions (both as DLLs), configure experiment parameters, and run optimization tasks. The results are saved and reported in both text and PDF formats.

[See on GitHub](https://github.com/kamizebrok/Metaheuristic-Optimization)
---

![Screenshot 1](project1Img)

## Key Features

### 1. Dynamic Loading of Algorithms and Functions
- Users can add new optimization algorithms and test functions at runtime by selecting DLL files.
- The application copies these DLLs into project-specific folders and updates the project file to reference them.

### 2. Experiment Configuration
- Users can select which algorithms and test functions to use.
- Users can specify ranges and steps for iterations, dimensions, and population sizes.

### 3. Batch Experiment Execution
- The application runs all combinations of selected algorithms, functions, and parameter sets.
- Supports continuation of interrupted experiments.

### 4. Progress Reporting
- A progress bar with estimated time remaining is shown during experiment execution.

### 5. Result Management
- Results are saved incrementally to text files.
- The best results are summarized in a PDF report.

---

## Main Components

### 1. MainWindow (UI Layer)
**Purpose:** Provides the user interface for selecting algorithms, functions, and parameters, and for starting or continuing experiments.

**Key Controls:**
- ListBoxes for algorithms and test functions
- TextBoxes for parameter input (iterations, dimensions, population)
- Buttons for adding DLLs, running, and continuing experiments
- ProgressBar for visual feedback

### 2. ReferenceMenager (Core Logic)
**Purpose:** Manages references to algorithms and functions, runs experiments, and handles result storage and reporting.

**Key Responsibilities:**
- AddReference: Copies DLLs and updates the project file
- SetValues: Stores selected algorithms, functions, and parameter ranges
- RunProject: Executes all experiment combinations, manages progress, and saves results
- ContinueProject: Resumes from the last saved state
- RunFunction: Dynamically loads and invokes algorithm and function classes/methods via reflection
- Result Management: Tracks and saves results, finds best results, and generates reports

### 3. Supporting Classes
- FileMenager: Handles file operations (not shown in detail)
- TextReportGenerator / PdfReportGenerator: Generate text and PDF reports
- Result: Stores the outcome of a single experiment run

---

## How It Works

 **1. Adding Algorithms/Functions:**
   - User selects a DLL file
   - The DLL is copied to the appropriate folder and referenced in the project

 **2. Configuring Experiments:**
   - User selects algorithms and functions from the UI
   - User sets parameter ranges for iterations, dimensions, and population

 **3. Running Experiments:**
   - The application computes all combinations of selected options
   - For each combination, it:
     - Dynamically loads the algorithm and function classes
     - Sets up the algorithm with the function as a delegate
     - Runs the optimization and collects results
     - Progress is updated in the UI

 **4. Result Storage and Reporting:**
   - Each result is saved to a text file
   - The best result for each algorithm-function pair is summarized in a PDF

 **5. Continuation:**
   - If interrupted, the experiment can be resumed from the last saved state

---

## Extensibility

- **Adding New Algorithms/Functions:** Simply provide a compatible DLL implementing the required interface/methods
- **Parameterization:** Easily adjust experiment parameters via the UI

---

## Technologies Used

- .NET 6 (WPF)
- Reflection for dynamic loading and invocation
- MathNet.Numerics for numerical computations
- iText7 for PDF generation
- BouncyCastle for cryptographic support (used by iText7)
- Custom DLLs for algorithms and test functions

---

## File Structure of the Results
![Screenshot 2](project1Img3)

---
## Typical Use Case

> **Step 1:** Add new optimization algorithms and test functions as DLLs  
> **Step 2:** Select which algorithms and functions to test  
> **Step 3:** Configure the experiment parameters  
> **Step 4:** Run the experiment and monitor progress  
> **Step 5:** Results are saved and best results are summarized in a PDF  
> **Step 6:** If needed, the experiment can be continued after interruption

---
## Example best results generated by the application
![Screenshot 3](project1Img4)

[See on GitHub](https://github.com/kamizebrok/Metaheuristic-Optimization)
`,
      images: [project1Img, project1Img2],
    },
    pl: {
      title: 'Optymalizacja Metaheurystykami',
      description: '',
      images: [project1Img, project1Img2],
    },
  },
  project2: {
    en: {
      title: 'Grade Management System',
      description: 'Full English description of project 2 with more details, features, technologies, etc.',
      images: [project2Img],
    },
    pl: {
      title: 'System Zarządzania Ocenami',
      description: 'Pełny polski opis projektu 2 z większą ilością szczegółów, funkcji, technologii itd.',
      images: [project2Img],
    },
  },
  project3: {
    en: {
      title: 'Gladiators',
      description: `
![Gladiators Data Mining](project3Img)

# 🏛️ Gladiators: Data Mining Project

**Authors:** Kamil Żebrok, Grzegorz Mazur, Marcin Ryt 
[🔗 See on GitHub](https://github.com/kamizebrok/Gladiators-DataMining/blob/main/Projekt.ipynb)

---

## 🚀 Overview

A comprehensive data mining project analyzing a rich dataset of Roman gladiators.  
**Goal:** Uncover patterns, relationships, and predictive models for characteristics, fighting outcomes, and survival.

---

## 🛠️ Key Steps

**1. Data Preparation**  
• 29 columns: personal, physical, combat, socioeconomic, popularity, health, training, outcome  
• Libraries: pandas, numpy, matplotlib, seaborn, scikit-learn, prince, factor_analyzer, pgmpy, mlxtend, pyECLAT  
• Encoding categorical columns, handling missing values

**2. Dimensionality Reduction**  
• PCA, Factor Analysis, Correspondence Analysis, MCA  
• Visualizes relationships and reduces feature space

**3. Clustering & Classification**  
• KMeans, Ward’s Method, KNN, Naive Bayes, Bayesian Networks, Decision Trees, SVC  
• Reveals groups and predicts survival/age group

**4. Association Rule Mining**  
• Apriori, ECLAT  
• Finds frequent patterns and rules among attributes

---

## 💡 Insights

- Strong correlations: Age, Wins, Experience, Health, Public Favor
- Clustering reveals similar gladiator profiles
- Multiple algorithms for robust predictions
- Frequent patterns highlight typical attribute combinations

---

## 🧰 Technologies

\`Python\`, \`Jupyter Notebook\`, \`pandas\`, \`scikit-learn\`, \`matplotlib\`, \`mlxtend\`

---

> _This notebook demonstrates a complete data mining workflow, from preprocessing and dimensionality reduction to clustering, classification, and association rule mining, providing actionable insights into the world of gladiators._

---
`,
      images: [project3Img],
    },
    pl: {
      title: 'Gladiators',
      description: `
![Gladiators Data Mining](project3Img)

# 🏛️ Gladiators: Projekt Data Mining

**Autorzy:** Kamil Żebrok, Grzegorz Mazur, Marcin Ryt

[🔗 Zobacz na GitHubie](https://github.com/kamizebrok/Gladiators-DataMining/blob/main/Projekt.ipynb)

---

## 🚀 Opis

Kompleksowy projekt eksploracji danych analizujący rozbudowany zbiór danych o rzymskich gladiatorach.  
**Cel:** Odkrycie wzorców, zależności i modeli predykcyjnych dotyczących cech, wyników walk i przeżycia.

---

## 🛠️ Kluczowe kroki

**1. Przygotowanie danych**  
• 29 kolumn: osobowe, fizyczne, walka, socjoekonomiczne, popularność, zdrowie, trening, wynik  
• Biblioteki: pandas, numpy, matplotlib, seaborn, scikit-learn, prince, factor_analyzer, pgmpy, mlxtend, pyECLAT  
• Kodowanie kategorii, uzupełnianie braków

**2. Redukcja wymiarów**  
• PCA, analiza czynnikowa, analiza korespondencji, MCA  
• Wizualizacja zależności i redukcja cech

**3. Klasteryzacja i klasyfikacja**  
• KMeans, metoda Warda, KNN, Naiwny Bayes, sieci Bayesa, drzewa decyzyjne, SVC  
• Grupowanie i predykcja przeżycia/grupy wiekowej

**4. Reguły asocjacyjne**  
• Apriori, ECLAT  
• Wyszukiwanie częstych wzorców i reguł

---

## 💡 Wnioski

- Silne korelacje: wiek, zwycięstwa, doświadczenie, zdrowie, przychylność widzów
- Klasteryzacja ujawnia profile gladiatorów
- Różne algorytmy zapewniają trafne predykcje
- Częste wzorce wskazują typowe kombinacje cech

---

## 🧰 Technologie

\`Python\`, \`Jupyter Notebook\`, \`pandas\`, \`scikit-learn\`, \`matplotlib\`, \`mlxtend\`

---

> _Notebook prezentuje pełny workflow eksploracji danych: od przygotowania i redukcji wymiarów, przez klasteryzację i klasyfikację, po wydobywanie reguł asocjacyjnych, dostarczając praktycznych wniosków o świecie gladiatorów._

---
`,
      images: [project3Img],
    },
  },
};

function ProjectDetails({ language = 'en' }) {
  const { projectId } = useParams();
  const data = detailsData[projectId]?.[language] || detailsData[projectId]?.en;

  if (!data) return <div>Project not found</div>;

  return (
    <div className="project-details-page">
      <h2>{data.title}</h2>
      <ReactMarkdown
        components={{
          img: ({node, ...props}) => {
            const src = imageMap[props.src] || props.src;
            return <img {...props} src={src} style={{margin: '1rem'}} />;
          }
        }}
      >
        {data.description}
      </ReactMarkdown>
      <Link to="/projects" className="back-button">← Back to projects</Link>
    </div>
  );
}

// Polish description for project1
detailsData.project1.pl.description = `
## Przegląd Projektu

Ten projekt to aplikacja .NET 6 WPF zaprojektowana do eksperymentów optymalizacyjnych opartych na AI. Udostępnia graficzny interfejs do wyboru algorytmów optymalizacyjnych i funkcji testowych (oba jako DLL), konfiguracji parametrów eksperymentu oraz uruchamiania zadań optymalizacyjnych. Wyniki są zapisywane i raportowane w formatach tekstowych i PDF.

[Zobacz na GitHubie](https://github.com/kamizebrok/Metaheuristic-Optimization)
---

![Screenshot 1](project1Img)

## Kluczowe Funkcje

### 1. Dynamiczne ładowanie algorytmów i funkcji
- Użytkownicy mogą dodawać nowe algorytmy optymalizacyjne i funkcje testowe w czasie rzeczywistym, wybierając pliki DLL.
- Aplikacja kopiuje te DLL do odpowiednich folderów projektu i aktualizuje plik projektu, aby je uwzględnić.

### 2. Konfiguracja eksperymentu
- Użytkownicy mogą wybierać, które algorytmy i funkcje testowe mają być użyte.
- Możliwość określenia zakresów i kroków dla iteracji, wymiarów i rozmiarów populacji.

### 3. Wykonywanie eksperymentów wsadowych
- Aplikacja uruchamia wszystkie kombinacje wybranych algorytmów, funkcji i zestawów parametrów.
- Obsługuje kontynuację przerwanych eksperymentów.

### 4. Raportowanie postępu
- Podczas wykonywania eksperymentu wyświetlany jest pasek postępu z szacowanym czasem do zakończenia.

### 5. Zarządzanie wynikami
- Wyniki są zapisywane inkrementalnie do plików tekstowych.
- Najlepsze wyniki są podsumowywane w raporcie PDF.

---

## Główne komponenty

### 1. MainWindow (warstwa UI)
**Cel:** Udostępnia interfejs użytkownika do wyboru algorytmów, funkcji i parametrów oraz do uruchamiania lub kontynuowania eksperymentów.

**Główne kontrolki:**
- ListBoxy dla algorytmów i funkcji testowych
- TextBoxy do wprowadzania parametrów (iteracje, wymiary, populacja)
- Przyciski do dodawania DLL, uruchamiania i kontynuowania eksperymentów
- ProgressBar do wizualnej informacji zwrotnej

### 2. ReferenceMenager (logika główna)
**Cel:** Zarządza referencjami do algorytmów i funkcji, uruchamia eksperymenty oraz obsługuje zapisywanie i raportowanie wyników.

**Główne zadania:**
- AddReference: Kopiuje DLL i aktualizuje plik projektu
- SetValues: Przechowuje wybrane algorytmy, funkcje i zakresy parametrów
- RunProject: Wykonuje wszystkie kombinacje eksperymentów, zarządza postępem i zapisuje wyniki
- ContinueProject: Wznawia od ostatniego zapisanego stanu
- RunFunction: Dynamicznie ładuje i wywołuje klasy/metody algorytmów i funkcji przez refleksję
- Zarządzanie wynikami: Śledzi i zapisuje wyniki, znajduje najlepsze wyniki i generuje raporty

### 3. Klasy pomocnicze
- FileMenager: Obsługuje operacje na plikach (nie pokazano szczegółowo)
- TextReportGenerator / PdfReportGenerator: Generują raporty tekstowe i PDF
- Result: Przechowuje wynik pojedynczego uruchomienia eksperymentu

---

## Jak to działa

**1. Dodawanie algorytmów/funkcji:**
- Użytkownik wybiera plik DLL
- DLL jest kopiowany do odpowiedniego folderu i referencjonowany w projekcie

**2. Konfiguracja eksperymentu:**
- Użytkownik wybiera algorytmy i funkcje z UI
- Ustawia zakresy parametrów dla iteracji, wymiarów i populacji

**3. Uruchamianie eksperymentów:**
- Aplikacja wylicza wszystkie kombinacje wybranych opcji
- Dla każdej kombinacji:
  - Dynamicznie ładuje klasy algorytmu i funkcji
  - Konfiguruje algorytm z funkcją jako delegatem
  - Uruchamia optymalizację i zbiera wyniki
  - Postęp jest aktualizowany w UI

**4. Zapisywanie i raportowanie wyników:**
- Każdy wynik jest zapisywany do pliku tekstowego
- Najlepszy wynik dla każdej pary algorytm-funkcja jest podsumowywany w PDF

**5. Kontynuacja:**
- W przypadku przerwania eksperyment może być wznowiony od ostatniego zapisanego stanu

---

## Rozszerzalność

- **Dodawanie nowych algorytmów/funkcji:** Wystarczy dostarczyć kompatybilny DLL implementujący wymagany interfejs/metody
- **Parametryzacja:** Łatwa zmiana parametrów eksperymentu przez UI

---

## Użyte technologie

- .NET 6 (WPF)
- Refleksja do dynamicznego ładowania i wywoływania
- MathNet.Numerics do obliczeń numerycznych
- iText7 do generowania PDF
- BouncyCastle do obsługi kryptografii (używane przez iText7)
- Własne DLL z algorytmami i funkcjami testowymi

---

## Struktura plików wynikowych
![Screenshot 2](project1Img3)

---
## Typowy scenariusz użycia

**Krok 1:** Dodaj nowe algorytmy optymalizacyjne i funkcje testowe jako DLL  
**Krok 2:** Wybierz, które algorytmy i funkcje testować  
**Krok 3:** Skonfiguruj parametry eksperymentu  
**Krok 4:** Uruchom eksperyment i monitoruj postęp  
**Krok 5:** Wyniki są zapisywane, a najlepsze podsumowywane w PDF  
**Krok 6:** W razie potrzeby eksperyment można kontynuować po przerwaniu

---

## Przykładowe najlepsze wyniki wygenerowane przez aplikację
![Screenshot 3](project1Img4)

[Zobacz na GitHubie](https://github.com/kamizebrok/Metaheuristic-Optimization)
`;

export default ProjectDetails;