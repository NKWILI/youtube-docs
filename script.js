document.addEventListener("DOMContentLoaded", () => {
  // Sample data for the videos with channel renamed to category and sponsor removed
  const videos = [
    {
      id: "1",
      title: "Comment les Narcos ont Envahi Miami dans les Années 80 ?",
      category: "Crime, Mafia & Cartels",
      description: "Une plongée dans l'explosion du trafic de drogue à Miami dans les années 80.",
      url: "https://youtu.be/GohIzlJV_8A?si=SgZvhMwQdR63XIgP",
    },
    {
      id: "2",
      title: "L'Ennemi juré de Pablo Escobar (Le Cartel de Cali)",
      category: " Crime, Mafia & Cartels",
      description: "Découverte du cartel rival de Pablo Escobar.",
      url: "https://youtu.be/I5lkEs6YtJo?si=4mOZBQL2X-eq1BsK",
    },
    {
      id: "3",
      title: "Guantánamo : une mauvaise base ?",
      category: "Politique, Dictature & Géopolitique",
      description: "Un reportage sur les enjeux politiques et humains liés à la prison de Guantánamo.",
      url: "https://youtu.be/OgYvEg6CfQc?si=ryCc6k0Zobfufcsb",
    },
    {
      id: "4",
      title: "L'Histoire du Dictateur Russe le Plus Meurtrier",
      category: "Politique, Dictature & Géopolitique",
      description: "Exploration du parcours sanglant du dictateur le plus meurtrier de Russie.",
      url: "https://youtu.be/7ziqAXuZwe8?si=8anKdlhhCNnG56sZ",
    },
    {
      id: "5",
      title: "L'incroyable histoire de Kadhafi | Partie 1",
      category: "Biographies & Figures Historiques",
      description: "Le parcours fascinant et tragique de Kadhafi, dictateur libyen.",
      url: "https://youtu.be/Xo32cvtnkl0?si=iW4otYeIs8LEUYdc",
    },
    {
      id: "6",
      title: "La scandaleuse histoire de la France en Afrique",
      category: "Politique, Dictature & Géopolitique",
      description: "Décryptage des relations postcoloniales entre la France et l'Afrique.",
      url: "https://youtu.be/drc6D-icdFk?si=kY2TTkJYT-PwaTf1",
    },
    {
      id: "7",
      title: "Le Dictateur le Plus Meurtrier de la Chine",
      category: "Politique, Dictature & Géopolitique",
      description: "Retour sur l'impact tragique du règne de Mao Zedong.",
      url: "https://youtu.be/3cV4QwA6wuA?si=lB90M3kQvMFKZV1p",
    },
    {
      id: "8",
      title: "Les 638 tentatives de la CIA pour assassiner Fidel Castro ?",
      category: "Politique, Dictature & Géopolitique",
      description: "Un épisode fascinant sur les multiples tentatives de la CIA contre Castro. ",
      url: "https://youtu.be/VTSeoh8hS2k?si=v2UouYmIZQEqbT6f",
    },
    {
      id: "9",
      title: "Les derniers secrets de l'affaire Kennedy",
      category: "Affaires, Enquêtes & Mystères Historiques",
      description: "Analyse des documents récemment déclassifiés sur l'affaire Kennedy.",
      url: "https://youtu.be/4URa7_2Z8hA?si=-4AallZyaeXbkieK",
    },
    {
      id: "10",
      title: "L'histoire du premier milliardaire du monde",
      category: "Finance, Richesse & Pouvoir",
      description: "Biographie du premier milliardaire de l'histoire.Monsieur Rockerfeller est un des plus grand milliardaires de l'histoire.",
      url: "https://youtu.be/_Bn7Mq9OuAI?si=941Eefu0oomM33ZW",
    },
    {
      id: "11",
      title: "Shazam : l’incroyable histoire de l’app la plus puissante du monde",
      category: "Technologie & Révolutions Modernes",
      description: `La vidéo retrace l'incroyable histoire de Shazam , née avant l'iPhone de la frustration de Chris Barton et concrétisée par la technologie d'Avery Wang. 
    Elle décrit les défis techniques pour reconnaître les chansons, la création d'une immense base de données, et son lancement initial par téléphone en 2002. 
    L'arrivée de l'App Store en 2008 a propulsé l'application, menant à son rachat stratégique par Apple en 2018.`,
      url: "https://youtu.be/H9xWk33zhro?si=HX2iuyArEeT8xNPx",
    },
    {
      id: "12",
      title: "Oppenheimer : Le père de la bombe atomique",
      category: "Biographies & Figures Historiques",
      description: `La vidéo décrit la biographie de Julius Robert Oppenheimer, le "père de la bombe atomique", explorant sa vie et son génie. 
    Elle détaille son rôle central à la tête du Projet Manhattan, travaillant avec des figures comme le général Leslie Groves et Edward Teller. 
    Le récit aborde les défis techniques et les profonds dilemmes éthiques rencontrés lors de la création de cette arme redoutable.`,
      url: "https://youtu.be/GIiqV8WvUpM?si=Pw1dC45oqMXDCIvq",
    },
    {
      id: "13",
      title: "Griselda Blanco : La Reine de la Cocaïne",
      category: "Crime, Mafia & Cartels",
      description: `La vidéo raconte l'histoire de Griselda Blanco, surnommée "la reine de la cocaïne", qui a mentoré Pablo Escobar. 
    Elle détaille son ascension violente, ses méthodes pionnières pour le trafic aux États-Unis avec **Alberto Bravo** et son rôle dans la guerre des "cocaine cowboys" à Miami. 
    Le récit se termine par son arrestation par l'agent Bob Palombo et son assassinat à Medellín.`,
      url: "https://youtu.be/dqrpBCnu_Rc?si=4YsZy3W-E0O7laVy",
    },
    {
      id: "14",
      title: "LUCKY LUCIANO : Chef Suprême de la Mafia Américaine",
      category: "Crime, Mafia & Cartels",
      description: `La vidéo raconte l'ascension de Lucky Luciano après l'élimination de Joe Masseria et Salvatore Maranzano, menant à la création de la Commission. 
    Elle décrit ses démêlés avec la justice menés par **Thomas Dewey**, son incarcération, sa déportation aidée par des figures comme Meyer Lansky. 
    Le récit culmine avec la conférence de La Havane où il réaffirme son leadership face à **Vito Genovese** et où la mort de Bugsy Siegel est décidée.`,
      url: "https://youtu.be/jUjJZO22XyA?si=KJ_kdqtPubzad5_W",
    },
    {
      id: "15",
      title: "L'assassinat de Malcolm X : L'histoire méconnue",
      category: "Affaires, Enquêtes & Mystères Historiques",
      description: `La vidéo retrace l'assassinat de Malcolm X le 21 février 1965 à Harlem. 
    Elle explore sa rupture avec la Nation of Islam d'Elijah Muhammad, les menaces qui en ont découlé et l'implication de membres comme Thomas Hagan, Norman Butler et Thomas Johnson dans sa mort. 
    Le récit aborde également ses efforts d'alliances (dont Martin Luther King) et les questions entourant le rôle potentiel d'agences comme le FBI de J. Edgar Hoover.`,
      url: "https://youtu.be/5l-lC3oVde4?si=wmgKTV8ALbXhd4CW",
    },
    {
      id: "16",
      title: "Martin Luther King, Jr., 'What Is Your Life's Blueprint?'",
      category: "Biographies & Figures Historiques",
      description: `La vidéo présente le discours du Révérend Dr. Martin Luther King Jr. s'adressant aux étudiants de Barrett Junior High School. 
    Il les exhorte à définir leur "plan de vie" en se basant sur une foi profonde en leur dignité et valeur personnelle. 
    Le plan inclut également un engagement à atteindre l'excellence et à participer à la lutte pour la liberté et la justice.`,
      url: "https://youtu.be/ZmtOGXreTOU?si=fWK1rQQ-i4LM41qG",
    },
    {
      id: "17",
      title: "L'Histoire du Plus Vicieux des 🇳azis !",
      category: "Politique, Dictature & Géopolitique",
      description: `La vidéo raconte la vie de Joseph Goebbels, le "génie diabolique" de la propagande nazie et l'un des manipulateurs les plus meurtriers du 20e siècle. 
    Elle détaille son admiration pour Adolf Hitler, son rôle dans l'ascension des nazis et l'instigation de persécutions, notamment contre les Juifs. 
    Le récit s'achève sur sa nomination comme chancelier après la mort d'Hitler et son suicide avec sa femme Magda après l'assassinat de leurs enfants.`,
      url: "https://youtu.be/AjUVxLu-iK8?si=6Ujllwl3WwWvv0kl",
    },
    {
      id: "18",
      title: "La sombre vérité de la famille la plus riche de l’Histoire..",
      category: "Finance, Richesse & Pouvoir",
      description: `La vidéo retrace l'histoire de la dynastie Rothschild, fondée par Mayer Amschel Rothschild à Francfort, décrivant son ascension d'agent de cour à banquier. 
    Elle explique comment ses cinq fils, dont Nathan à Londres et James à Paris, ont étendu leur réseau bancaire à travers l'Europe, finançant guerres et projets industriels. 
    Le récit aborde l'influence continue de la famille (avec des figures comme Guy et **Jacob Rothschild**), les persécutions subies et les théories de complot qui l'entourent.`,
      url: "https://youtu.be/9ZROQtBeLvE?si=zrI9yj1f_4Ka_tOP",
    },
    {
      id: "19",
      title: "La vie de Sam Altman : Visionnaire de l'IA",
      category: "Technologie & Révolutions Modernes",
      description: `La vidéo retrace la vie et l'ascension de **Sam Altman**, décrit comme un visionnaire et manipulateur visant à créer une IA surpassant l'homme. 
    Elle détaille son parcours, de Y Combinator (sous Paul Graham) à la co-fondation d'OpenAI (avec Elon Musk, Ilya Sutskever, Greg Brockman). 
    Le récit couvre le succès de ChatGPT, le partenariat avec Microsoft, sa rivalité avec **Musk** et les conflits internes qui ont mené à son bref licenciement puis retour à la tête d'OpenAI.`,
      url: "https://youtu.be/i-VYyq_nm2g?si=RKV6zIkyKB9sugLh",
    },
    {
      id: "20",
      title: "Dans les coulisses du blanchiment d'argent mondial",
      category: "Crime, Mafia & Cartels",
      description: `Plongez dans le monde secret où **pirates, trafiquants et criminels** s'ingénient à dissimuler l'origine illicite de leurs fortunes. 
      Des combines artisanales aux réseaux financiers complexes, découvrez comment **identités volées**, **sociétés écrans** dans des paradis fiscaux et **jeux d'argent massifs** sont utilisés pour "laver" des milliards.
      Même les **marchés virtuels de jeux vidéo** ou les **cryptomonnaies** deviennent des canaux discrets pour ces transactions douteuses.
      Explorez l'ingéniosité démoniaque de montages : **fausses factures**, **prêts adossés**, **banques complices** — autant d'armes dans cette guerre invisible contre la traçabilité.
      Une plongée fascinante dans un univers où l'argent sale, une fois blanchi, peut s'infiltrer et contrôler des pans entiers de l'économie mondiale.`,
      url: "https://www.youtube.com/watch?v=iL5LC0a7KJY&t=385s",
    },
    {
      id: "21",
      title: "Duolingo : La chouette qui a gamifié l'éducation",
      category: "Technologie & Révolutions Modernes",
      description: `Cette vidéo plonge au cœur du succès fulgurant de **Duolingo**, l'application à la célèbre chouette verte devenue incontournable dans l'apprentissage des langues. 
      Elle retrace le parcours de **Luis von Ahn**, son fondateur visionnaire et inventeur du **CAPTCHA**, qui a d'abord conçu Duolingo pour traduire le web avant de se tourner vers l'éducation linguistique.
      Grâce à une **gamification poussée**, l'application rend l'apprentissage aussi **addictif qu’un jeu vidéo**, utilisant des notifications personnalisées, de la culpabilisation, des classements, et des barres de progression.
      Si son modèle freemium et son taux de rétention impressionnent, certaines études interrogent son efficacité réelle pour atteindre la fluidité.
      On y découvre aussi **Duo**, la mascotte devenue un mème Internet, et **Duolingo Max**, une nouvelle fonctionnalité boostée à l'IA.
      Malgré des revenus inférieurs à certains concurrents, la société est valorisée à **15 milliards de dollars**, et Luis von Ahn est aujourd'hui milliardaire.`,
      url: "https://www.youtube.com/watch?v=csYRchkbomY",
    }
    
    
    
    
    
    
    
  ]

  // Clean and trim category strings
  videos.forEach((video) => {
    video.category = video.category.trim()
  })

  // DOM elements
  const searchInput = document.getElementById("search-input")
  const categoryDropdown = document.getElementById("category-dropdown")
  const categoryButton = categoryDropdown.querySelector(".dropdown-button")
  const categoryOptions = document.getElementById("category-options")
  const selectedCategory = document.getElementById("selected-category")
  const videoGrid = document.getElementById("video-grid")
  const resultsCount = document.getElementById("results-count")
  const noResults = document.getElementById("no-results")
  const videoCardTemplate = document.getElementById("video-card-template")

  // Extract unique sorted categories for filters
  const categories = [...new Set(videos.map((video) => video.category))].sort()

  // Current filter state
  let currentSearchQuery = ""
  let currentCategory = "All Categories"

  // Initialize the application
  function init() {
    populateCategoryOptions()
    setupEventListeners()
    renderVideos()
  }

  // Populate category dropdown options
  function populateCategoryOptions() {
    // Add "All Categories" option
    const allOption = document.createElement("div")
    allOption.className = "dropdown-option selected"
    allOption.textContent = "All Categories"
    allOption.dataset.value = "All Categories"
    categoryOptions.appendChild(allOption)

    // Add category options
    categories.forEach((category) => {
      const option = document.createElement("div")
      option.className = "dropdown-option"
      option.textContent = category
      option.dataset.value = category
      categoryOptions.appendChild(option)
    })
  }

  // Setup event listeners
  function setupEventListeners() {
    // Search input
    searchInput.addEventListener("input", function () {
      currentSearchQuery = this.value.toLowerCase()
      renderVideos()
    })

    // Category dropdown toggle
    categoryButton.addEventListener("click", () => {
      categoryOptions.classList.toggle("show")
    })

    // Category options selection
    categoryOptions.addEventListener("click", (e) => {
      if (e.target.classList.contains("dropdown-option")) {
        const value = e.target.dataset.value
        currentCategory = value
        selectedCategory.textContent = value

        // Update selected class
        categoryOptions.querySelectorAll(".dropdown-option").forEach((option) => {
          option.classList.remove("selected")
        })
        e.target.classList.add("selected")

        // Close dropdown
        categoryOptions.classList.remove("show")

        // Update videos
        renderVideos()
      }
    })

    // Close dropdown when clicking outside
    document.addEventListener("click", (e) => {
      if (!categoryDropdown.contains(e.target)) {
        categoryOptions.classList.remove("show")
      }
    })
  }

  // Function to extract YouTube video ID from various URL formats
  function extractYouTubeVideoId(url) {
    if (!url) return null

    let match

    if (url.includes("youtu.be/")) {
      match = url.match(/youtu\.be\/([^?&]+)/)
      if (match && match[1]) return match[1]
    }

    match = url.match(/(?:youtube\.com\/(?:[^/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?/\s]{11})/)
    if (match && match[1]) return match[1]

    if (url.includes("youtu.be/")) {
      const parts = url.split("youtu.be/")[1].split("?")[0].split("/")[0]
      if (parts) return parts
    }

    console.warn("Could not extract YouTube video ID from URL:", url)
    return "dQw4w9WgXcQ" // Default fallback
  }

  // Generate a YouTube thumbnail URL
  function getYouTubeThumbnail(url) {
    const videoId = extractYouTubeVideoId(url)
    return `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`
  }

  // Render videos based on current filters
  function renderVideos() {
    const filteredVideos = videos.filter((video) => {
      const matchesSearch =
        video.title.toLowerCase().includes(currentSearchQuery) ||
        video.description.toLowerCase().includes(currentSearchQuery)

      const matchesCategory =
        currentCategory === "All Categories" || video.category === currentCategory

      return matchesSearch && matchesCategory
    })

    resultsCount.textContent = `Showing ${filteredVideos.length} of ${videos.length} documentaries`

    videoGrid.innerHTML = ""

    if (filteredVideos.length === 0) {
      noResults.style.display = "block"
    } else {
      noResults.style.display = "none"

      filteredVideos.forEach((video) => {
        const videoCard = videoCardTemplate.content.cloneNode(true)
        videoCard.querySelector(".thumbnail").src = getYouTubeThumbnail(video.url)
        videoCard.querySelector(".thumbnail").alt = video.title
        videoCard.querySelector(".video-title").textContent = video.title
        videoCard.querySelector(".video-category").textContent = video.category
        videoCard.querySelector(".video-description").textContent = video.description
        videoCard.querySelector(".watch-button").href = video.url
        videoGrid.appendChild(videoCard)
      })
    }
  }

  // Initialize
  init()
})
