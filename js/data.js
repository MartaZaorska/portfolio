const SKILLS = [
  "HTML / CSS / Sass / RWD",
  "JavaScript ES6",
  "React / React Router / React Hooks",
  "NodeJS / Express",
  "MongoDB / Mongoose",
  "GraphQL",
  "Progressive Web App",
  "Webpack / GIT",
];

const PROJECTS = [
  {
    name: "Time Tracker Application",
    github_url: "https://github.com/MartaZaorska/time_tracker_react_app",
    demo_url: "http://time-tracker-app-martazaorska.herokuapp.com/",
    description:
      "Aplikacja MERN z&nbsp;logowaniem/rejestracją użytkownika. Funkcjonalność: tworzenie, filtrowanie i&nbsp;usuwanie timerów, możliwość zakończenia aktywnego timera: w&nbsp;danym momencie lub wybieranie daty i&nbsp;godziny (np.&nbsp;jeśli użytkownik zapomniał zrobić to we właściwym czasie), analizowanie aktywności użytkownika na wykresach, które reprezentują procentowy udział kategorii dla wybranego okresu.",
    technologies: [
      "Express",
      "Mongoose",
      "GraphQL",
      "BcryptJS",
      "jwt",
      "React",
      "Chart.js",
      "Sass",
    ],
    image: "time.png",
    color: "#587b92",
  },
  {
    name: "YouTube Playlist App",
    github_url: "https://github.com/MartaZaorska/youtube_playlist_react_app",
    demo_url: "https://youtube-playlist-react-app-martazaorska.netlify.app/",
    description:
      "Aplikacja PWA stworzona przy użyciu React. Funkcjonalność: tworzenie, usuwanie, odtwarzanie playlist, wyszukiwanie i&nbsp;dodawanie filmów YouTube do kolekcji, dla video (utwór muzyczny) możliwość wyszukania i&nbsp;wyświetlania tekstu piosenki.",
    technologies: [
      "React",
      "React Router",
      "React Player",
      "Styled Components",
      "JavaScript",
    ],
    image: "playlist.png",
    color: "#738196",
  },
  {
    name: "Start Application",
    github_url: "https://github.com/MartaZaorska/start_app",
    demo_url: "https://martazaorska.github.io/start_app/",
    description:
      "Aplikacja PWA / strona startowa dla przeglądarki. Funkcjonalność: tworznie listy zadań, widgetu odliczania, zarządzanie linkami do ulubionych stron (tylko dla desktop), wyświetlanie danych: aktualna godzina i&nbsp;data, kurs wymiany popularnych walut, cytat na każdy dzień, słowo dnia do nauki języka angielskiego.",
    technologies: ["JavaScript", "Sass"],
    image: "start.png",
    color: "#889bb6",
  },
  {
    name: "Currency Application",
    github_url: "https://github.com/MartaZaorska/currency_app",
    demo_url: "https://currency-app-martazaorska.netlify.app/",
    description:
      'Aplikacja PWA. Funkcjonalność: przeglądanie kursu dla 32 walut, kalkulator walutowy, wykres prezentujący wartość kursu dla wybranej waluty z&nbsp;ostatnich 7 dni, możliwość ustalenia przez użytkownika walut "obserwowanych".',
    technologies: ["JavaScript", "Swiper", "Chart.js", "Sass"],
    image: "currency.png",
    color: "#6dc05e",
  },
  {
    name: "Cooking Calculator",
    github_url: "https://github.com/MartaZaorska/cooking_calculator_app",
    demo_url: "https://martazaorska.github.io/cooking_calculator_app/",
    description:
      "Aplikacja PWA. Funckjonalność: dodawanie składników (nazwa, ilość, jednostka), ilość składników aktualizowana po zmianie przez użytkownika wielkości porcji, konwersja temperatury Fahrenheita / Celsjusza.",
    technologies: ["JavaScript", "Sass"],
    image: "cooking.png",
    color: "#fdbb85",
  },
  {
    name: "Concentration Calculator",
    github_url: "https://github.com/MartaZaorska/concentration_calculator_app",
    demo_url: "https://martazaorska.github.io/concentration_calculator_app/",
    description:
      "Aplikacja PWA stworzona przy użyciu React. Funkcjonalność: obliczenie konwersji objętości, masy i&nbsp;jednostek stężenia, wyliczanie ilości substancji i&nbsp;rozpuszczalnika dla określonego stężenia (procentowego lub molowego), oblicznie ilości substancji (np. leku) i&nbsp;rozpuszczalnika do podanych danych.",
    technologies: ["React", "React Router", "JavaScript", "Sass"],
    image: "conc.png",
    color: "#ea4c89",
  },
  {
    name: "Shopping Online App",
    github_url: "https://github.com/MartaZaorska/shopping_online_react_app",
    demo_url: "https://shopping-online-react-app-martazaorska.netlify.app/",
    description:
      "Aplikacja PWA stworzona przy użyciu React. Funkcjonalność: przeglądanie, filtrowanie produktów, dodawanie i&nbsp;usuwanie produktu z&nbsp;koszyka, oblicznie wartości koszyka z&nbsp;produktami.",
    technologies: ["React", "React Router", "JavaScript", "Sass"],
    image: "shop.png",
    color: "#222222",
  },
  {
    name: "Get Text Application",
    github_url: "https://github.com/MartaZaorska/get_text_react_app",
    demo_url: "https://getext-react-app-martazaorska.netlify.app/",
    description:
      "Aplikacja PWA stworzona przy użyciu React. Funkcjonalność: tworzenie, zarządzanie i&nbsp;usuwanie grupy plików, dwie możliwości tworzenia nowego elementu: pusty plik (tekst dodawany ręcznie) lub wybór obrazu, z&nbsp;którego tekst zostanie odczytany (biblioteka Tesseract.js), możliwość łączenia wszystkich plików w&nbsp;danej grupie w&nbsp;jeden osobny plik, dwa schematy kolorów (ciemny i&nbsp;jasny).",
    technologies: [
      "React",
      "React Router",
      "Tesseract.js",
      "JavaScript",
      "Sass",
    ],
    image: "getext.png",
    color: "#e08ea7",
  },
  {
    name: "Movie Application",
    github_url: "https://github.com/MartaZaorska/movie_react_app",
    demo_url: "https://movie-react-app-martazaorska.netlify.app/",
    description:
      'Aplikacja PWA stworzona przy użyciu React. Funkcjonalność: wyszukiwanie filmów, seriali oraz twórców, ranking produkcji według oceny lub popularności, przeglądanie listy filmów aktulanie wyświetlanych w&nbsp;kinie lub najbliższych premier seriali, dodawanie produkcji do sekcji "ulubione" lub "chcę zobaczyć".',
    technologies: ["React", "React Router", "Sass", "JavaScript"],
    image: "movie.png",
    color: "#147aff",
  },
  {
    name: "Events Application",
    github_url: "https://github.com/MartaZaorska/events_app_react",
    demo_url: "https://events-app-react-martazaorska.netlify.app/",
    description:
      'Aplikacja PWA stworzona przy użyciu React. Funkcjonalność: przeglądanie, wyszukiwanie wydarzeń (m.in. wydarzeń muzycznych), możliwość dodania wydarzenia do sekcji "ulubione".',
    technologies: [
      "React",
      "React Router",
      "Styled Components",
      "JavaScript",
      "Sass",
    ],
    image: "events.png",
    color: "#949c9e",
  },
];
