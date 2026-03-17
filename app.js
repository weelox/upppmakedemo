const basePrompts = {
  sv: {
    category1: [
      "Har tre huvuden",
      "Är självlysande",
      "Sitter på toa",
      "Missar bussen",
      "Spelar trummor",
      "Sitter i en skön stol",
      "Har kaktushänder",
      "Är tyngdlös",
      "Är genomskinlig",
      "Har änglavingar",
      "Är en jätte",
      "Har ett ansikte på magen",
      "Är lika stor som en myra",
      "Är leopardmönstrad",
      "Är hälften häst",
      "Är zebramönstrad",
      "Har en kropp av glas",
      "Har en valfena",
      "Har tentakler",
      "Är en krabba",
      "Har 4 magar",
      "Är hälften struts",
      "Har ormar istället för hår",
      "Är underjordisk",
      "Är täckt av päls",
      "Är taggig",
      "Är en noshörning",
      "Är hälften fiskmås",
      "Är en seriefigur",
      "Är kamouflerad",
      "Är en sjöjungfru",
      "Är ett berg"
    ],
    category2: [
      "Åker skridskor",
      "Kör en bil",
      "Ute på vandring",
      "Läser en bok",
      "Sitter vid datorn",
      "Sjunger i en mikrofon",
      "Städar toaletten",
      "Spelar gitarr",
      "Kokar kaffe",
      "Läser tidningen",
      "Ute och cyklar",
      "Spelar trumpet",
      "Åker rullskridskor",
      "Spelar dragspel",
      "Ror en båt",
      "Bär på ved",
      "Klipper gräsmattan",
      "Gräver en grop",
      "Bär på ett svärd",
      "Sover gott",
      "Håller i en katt",
      "Är ute med hunden",
      "Sitter på en gunga",
      "Äter spaghetti",
      "Vattnar blommor",
      "Skalar en apelsin"
    ],
    category3: [
      "Har glasögon",
      "Har buskiga ögonbryn",
      "Har långt hår",
      "Bär en stor jacka",
      "Har stort skägg",
      "Har en stickad tröja",
      "Har en stor hatt",
      "Har tajta byxor",
      "Har en liten hatt",
      "Har 2 hundar",
      "Har ett fint leende",
      "Har färgglada kläder",
      "Har randig pyjamas",
      "Har clownsmink",
      "Har kepsen bak och fram",
      "Är ett barn",
      "Har regnkläder",
      "Är väldigt gammal",
      "Har en stor mustasch",
      "Har en blommig sjal",
      "Har långa flätor",
      "Har många halsband",
      "Har 4 ryggsäckar",
      "Har klackskor",
      "Har många tatueringar",
      "Bär hip hop-kläder"
    ]
  },
  en: {
    category1: [
      "Has three heads",
      "Is self-luminous",
      "Is sitting on the toilet",
      "Misses the bus",
      "Is playing drums",
      "Sits in a comfy chair",
      "Has cactus hands",
      "Is weightless",
      "Is transparent",
      "Has angel wings",
      "Is a giant",
      "Has a face on the stomach",
      "Is as small as an ant",
      "Is leopard-patterned",
      "Is half horse",
      "Is zebra-patterned",
      "Has a body made of glass",
      "Has a whale fin",
      "Has tentacles",
      "Is a crab",
      "Has four stomachs",
      "Is half ostrich",
      "Has snakes instead of hair",
      "Is underground",
      "Is covered in fur",
      "Is spiky",
      "Is a rhinoceros",
      "Is half seagull",
      "Is a cartoon character",
      "Is camouflaged",
      "Is a mermaid",
      "Is a mountain"
    ],
    category2: [
      "Is ice skating",
      "Is driving a car",
      "Is out hiking",
      "Is reading a book",
      "Is at a computer",
      "Is singing into a microphone",
      "Is cleaning the toilet",
      "Is playing guitar",
      "Is making coffee",
      "Is reading the newspaper",
      "Is biking outside",
      "Is playing trumpet",
      "Is roller skating",
      "Is playing accordion",
      "Is rowing a boat",
      "Is carrying firewood",
      "Is mowing the lawn",
      "Is digging a hole",
      "Is carrying a sword",
      "Is getting a good sleep",
      "Is holding a cat",
      "Is walking the dog",
      "Is on a swing",
      "Is eating spaghetti",
      "Is watering flowers",
      "Is peeling an orange"
    ],
    category3: [
      "Has glasses",
      "Has bushy eyebrows",
      "Has long hair",
      "Wears a big coat",
      "Has a big beard",
      "Is wearing a knitted sweater",
      "Wears a big hat",
      "Wears tight pants",
      "Wears a small hat",
      "Has two dogs",
      "Has a nice smile",
      "Wears colorful clothes",
      "Wears striped pajamas",
      "Has clown makeup",
      "Wears a backwards cap",
      "Is a child",
      "Is wearing rain clothes",
      "Is very old",
      "Has a large mustache",
      "Has a floral scarf",
      "Has long braids",
      "Has many necklaces",
      "Has four backpacks",
      "Wears high-heeled shoes",
      "Has many tattoos",
      "Wears hip-hop clothing"
    ]
  }
};

const promptSources = {
  sv: {
    has: ["tre huvuden", "ett regnbågsregn", "en osynlig rygg", "en fjäderdräkt", "en glittrig ö", "en kattnos", "en osannolik energi", "en svävande cirkel", "långpennor", "ett hemligt instrument", "en osynlig ryggsäck", "en teaternäsa", "en månstubbe", "tre röster"],
    state: ["under vattnet", "mycket glad", "helt lugn", "på väg till månen", "överraskad", "extremt snabb", "nästan genomskinlig", "fylld av glitter", "helt stilla", "halv elektrisk"],
    do: ["sjunger jazz", "spelar pingisboll", "målarmar i luften", "snurrar runt i timmar", "är ute med sin igelkott", "stirrar på en vägg", "byter hatt", "dricker regn", "dansar utan musik", "drömmer vilt", "bygger en bro av skumgummi", "vinner en osynlig tävling"]
  },
  en: {
    has: ["three glowing horns", "an umbrella crown", "a hidden engine", "a bright backpack", "a tiny umbrella", "a velvet coat", "a mirror beard", "a pocket universe", "a zipper in the elbow", "three extra arms", "a moonlit glow", "an invisible cape", "an extra sock pair"],
    state: ["under the sea", "too cheerful", "completely still", "half in dream mode", "full of glitter", "very confident", "almost transparent", "very impatient", "astronaut-calm", "strangely balanced"],
    do: ["singing jazz", "juggling pencils", "building a tiny house", "drawing circles", "walking with a penguin", "wearing glitter boots", "carrying a map", "whispering to the sky", "folding a flag", "dancing with no music", "inventing a new sport", "rehearsing dramatic exits"]
  }
};

const generatedPromptCount = 10;
const STORAGE_KEY = "sketchCustomPrompts";

const ROUND_SECONDS = 120;

const startBtn = document.getElementById("startBtn");
const settingsOpenBtn = document.getElementById("settingsOpenBtn");
const restartBtn = document.getElementById("restartBtn");
const resetBtn = document.getElementById("resetBtn");
const themeToggle = document.getElementById("themeToggle");
const langToggle = document.getElementById("langToggle");
const timerLabelEl = document.getElementById("ui-timer-label");
const finishedMessageEl = document.getElementById("ui-finished-message");

const screenStart = document.getElementById("screen-start");
const screenPlay = document.getElementById("screen-play");
const screenFinished = document.getElementById("screen-finished");
const screenSettings = document.getElementById("screen-settings");

const timeDisplay = document.getElementById("timeDisplay");
const promptEls = [
  document.getElementById("prompt1"),
  document.getElementById("prompt2"),
  document.getElementById("prompt3")
];

const settingsCategorySelect = document.getElementById("settingsCategorySelect");
const manualPromptInput = document.getElementById("manualPromptInput");
const manualAddBtn = document.getElementById("manualAddBtn");
const generatePromptsBtn = document.getElementById("generatePromptsBtn");
const generatedList = document.getElementById("generatedList");
const applyGeneratedBtn = document.getElementById("applyGeneratedBtn");
const customList = document.getElementById("customList");
const deleteSelectedBtn = document.getElementById("deleteSelectedBtn");
const closeSettingsBtn = document.getElementById("closeSettingsBtn");

const settingsTitle = document.getElementById("settings-title");
const settingsCategoryLabel = document.getElementById("settings-category-label");
const manualLabel = document.getElementById("manual-label");
const settingsGenerateTitle = document.getElementById("settings-generate-title");
const settingsCustomTitle = document.getElementById("settings-custom-title");

const i18n = {
  sv: {
    lang: "sv",
    title: "Sketch Challange",
    themeButtonLight: "Mörkt tema",
    themeButtonDark: "Ljust tema",
    themeAriaLabel: "Byt tema",
    languageButtonText: "English",
    languageAriaLabel: "Byt språk",
    startButton: "Starta ny runda",
    resetButton: "Börja om",
    timerLabel: "Tid kvar",
    finishedMessage: "Tiden är ute!",
    screenStartLabel: "Startskärm",
    screenPlayLabel: "Aktiv runda",
    screenFinishedLabel: "Rundan klar",
    screenSettingsLabel: "Inställningar",
    settingsTitle: "Inställningar",
    settingsCategoryLabel: "Kategori",
    settingsCategoryNames: ["Kategori 1", "Kategori 2", "Kategori 3"],
    manualLabel: "Lägg till prompt",
    manualAddButton: "Lägg till",
    manualPlaceholder: "Skriv in en egen prompt och tryck lägg till",
    generateTitle: "Generera nya förslag",
    generateButton: "Generera 10 nya prompts",
    applyGenerated: "Lägg till valda",
    customTitle: "Mina prompts i valda kategorin",
    deleteSelected: "Ta bort valda",
    openSettings: "Inställningar",
    closeSettings: "Tillbaka",
    noItems: "Inga förslag ännu"
  },
  en: {
    lang: "en",
    title: "Sketch Challange",
    themeButtonLight: "Dark theme",
    themeButtonDark: "Light theme",
    themeAriaLabel: "Toggle theme",
    languageButtonText: "Svenska",
    languageAriaLabel: "Change language",
    startButton: "Start new round",
    resetButton: "Reset",
    timerLabel: "Time left",
    finishedMessage: "Time is up!",
    screenStartLabel: "Start screen",
    screenPlayLabel: "Active round",
    screenFinishedLabel: "Round finished",
    screenSettingsLabel: "Settings",
    settingsTitle: "Settings",
    settingsCategoryLabel: "Category",
    settingsCategoryNames: ["Category 1", "Category 2", "Category 3"],
    manualLabel: "Add prompt",
    manualAddButton: "Add",
    manualPlaceholder: "Type your own prompt and press add",
    generateTitle: "Generate new suggestions",
    generateButton: "Generate 10 prompts",
    applyGenerated: "Add selected",
    customTitle: "My prompts in selected category",
    deleteSelected: "Delete selected",
    openSettings: "Settings",
    closeSettings: "Back",
    noItems: "No items yet"
  }
};

const startDefaults = {
  sv: { category1: [], category2: [], category3: [] },
  en: { category1: [], category2: [], category3: [] }
};

function clone(obj) {
  return JSON.parse(JSON.stringify(obj));
}

const customPrompts = loadCustomPrompts();

function loadCustomPrompts() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return clone(startDefaults);
    const parsed = JSON.parse(raw);

    const sanitized = {
      sv: {
        category1: ensureArray(parsed?.sv?.category1),
        category2: ensureArray(parsed?.sv?.category2),
        category3: ensureArray(parsed?.sv?.category3)
      },
      en: {
        category1: ensureArray(parsed?.en?.category1),
        category2: ensureArray(parsed?.en?.category2),
        category3: ensureArray(parsed?.en?.category3)
      }
    };

    return sanitized;
  } catch {
    return clone(startDefaults);
  }
}

function saveCustomPrompts() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(customPrompts));
}

function ensureArray(value) {
  return Array.isArray(value) ? value.filter((item) => typeof item === "string" && item.trim()) : [];
}

function initTheme() {
  const saved = localStorage.getItem("sketchTheme");
  if (saved === "light" || saved === "dark") {
    return saved;
  }
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

function initLanguage() {
  const saved = localStorage.getItem("sketchLanguage");
  if (saved === "sv" || saved === "en") {
    return saved;
  }
  return "sv";
}

let remainingSeconds = ROUND_SECONDS;
let timerId = null;
let currentTheme = initTheme();
let currentLanguage = initLanguage();

const categories = ["category1", "category2", "category3"];
let generatedPrompts = [];

function randomFrom(list) {
  return list[Math.floor(Math.random() * list.length)];
}

function formatTime(seconds) {
  const mins = Math.floor(seconds / 60);
  const secs = seconds % 60;
  const mm = String(mins).padStart(2, "0");
  const ss = String(secs).padStart(2, "0");
  return `${mm}:${ss}`;
}

function getCurrentPromptPool(language) {
  return {
    category1: [...basePrompts[language].category1, ...customPrompts[language].category1],
    category2: [...basePrompts[language].category2, ...customPrompts[language].category2],
    category3: [...basePrompts[language].category3, ...customPrompts[language].category3]
  };
}

function pickPrompts() {
  const selected = getCurrentPromptPool(currentLanguage);
  promptEls[0].textContent = randomFrom(selected.category1);
  promptEls[1].textContent = randomFrom(selected.category2);
  promptEls[2].textContent = randomFrom(selected.category3);
}

function showScreen(screen) {
  [screenStart, screenPlay, screenFinished, screenSettings].forEach((el) => el.classList.remove("active"));
  if (screen === "start") {
    screenStart.classList.add("active");
  } else if (screen === "play") {
    screenPlay.classList.add("active");
  } else if (screen === "finished") {
    screenFinished.classList.add("active");
  } else if (screen === "settings") {
    screenSettings.classList.add("active");
    renderSettings();
  }
}

function clearTimer() {
  if (timerId !== null) {
    clearInterval(timerId);
    timerId = null;
  }
}

function startTimer() {
  clearTimer();
  remainingSeconds = ROUND_SECONDS;
  timeDisplay.textContent = formatTime(remainingSeconds);

  timerId = setInterval(() => {
    remainingSeconds -= 1;

    if (remainingSeconds <= 0) {
      timeDisplay.textContent = "00:00";
      clearTimer();
      showScreen("finished");
      return;
    }

    timeDisplay.textContent = formatTime(remainingSeconds);
  }, 1000);
}

function startRound() {
  pickPrompts();
  showScreen("play");
  startTimer();
}

function resetRound() {
  clearTimer();
  remainingSeconds = ROUND_SECONDS;
  timeDisplay.textContent = formatTime(remainingSeconds);
  showScreen("start");
}

function applyTheme(theme) {
  const root = document.documentElement;
  if (theme === "dark") {
    root.classList.add("theme-dark");
  } else {
    root.classList.remove("theme-dark");
  }
}

function updateLanguageText(language) {
  const strings = i18n[language];

  startBtn.textContent = strings.startButton;
  settingsOpenBtn.textContent = strings.openSettings;
  restartBtn.textContent = strings.resetButton;
  resetBtn.textContent = strings.resetButton;

  langToggle.textContent = strings.languageButtonText;
  langToggle.setAttribute("aria-label", strings.languageAriaLabel);

  themeToggle.textContent = currentTheme === "dark" ? strings.themeButtonDark : strings.themeButtonLight;
  themeToggle.setAttribute("aria-label", strings.themeAriaLabel);

  timerLabelEl.textContent = strings.timerLabel;
  finishedMessageEl.textContent = strings.finishedMessage;

  screenStart.setAttribute("aria-label", strings.screenStartLabel);
  screenPlay.setAttribute("aria-label", strings.screenPlayLabel);
  screenFinished.setAttribute("aria-label", strings.screenFinishedLabel);
  screenSettings.setAttribute("aria-label", strings.screenSettingsLabel);

  settingsTitle.textContent = strings.settingsTitle;
  settingsCategoryLabel.textContent = strings.settingsCategoryLabel;
  manualLabel.textContent = strings.manualLabel;
  manualPromptInput.placeholder = strings.manualPlaceholder;
  settingsGenerateTitle.textContent = strings.generateTitle;
  settingsCustomTitle.textContent = strings.customTitle;
  generatePromptsBtn.textContent = strings.generateButton;
  applyGeneratedBtn.textContent = strings.applyGenerated;
  manualAddBtn.textContent = strings.manualAddButton;
  deleteSelectedBtn.textContent = strings.deleteSelected;
  closeSettingsBtn.textContent = strings.closeSettings;

  const categoryNames = strings.settingsCategoryNames;
  categories.forEach((category, index) => {
    const option = settingsCategorySelect.querySelector(`option[value="${category}"]`);
    if (option) option.textContent = categoryNames[index];
  });

  document.documentElement.lang = strings.lang;
  document.title = strings.title;

  if (screenSettings.classList.contains("active")) {
    renderSettings();
  }

  screenStart.querySelector(".play-actions")?.querySelector("button")?.setAttribute("title", strings.resetButton);
}

function addCustomPrompt(category, value) {
  const clean = value.trim();
  if (!clean) return false;

  const list = customPrompts[currentLanguage][category];
  if (list.includes(clean)) return false;
  if (isInBase(category, clean)) return false;

  list.push(clean);
  saveCustomPrompts();
  return true;
}

function removeCustomPrompts(category, valuesToRemove) {
  const list = customPrompts[currentLanguage][category];
  const removeSet = new Set(valuesToRemove);
  const filtered = list.filter((item) => !removeSet.has(item));
  customPrompts[currentLanguage][category] = filtered;
  saveCustomPrompts();
}

function isInBase(category, text) {
  return basePrompts[currentLanguage][category].includes(text);
}

function createCheckboxItem(text, checked = true) {
  const item = document.createElement("label");
  item.className = "prompt-item";

  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.value = text;
  checkbox.checked = checked;

  const label = document.createElement("span");
  label.textContent = text;

  item.append(checkbox, label);
  return item;
}

function renderGeneratedList(items) {
  generatedList.innerHTML = "";

  if (!items.length) {
    const emptyText = document.createElement("p");
    emptyText.textContent = i18n[currentLanguage].noItems;
    emptyText.style.margin = "0.2rem 0";
    generatedList.append(emptyText);
    return;
  }

  items.forEach((text) => {
    generatedList.append(createCheckboxItem(text, true));
  });
}

function renderCustomList(category) {
  const items = customPrompts[currentLanguage][category] || [];
  customList.innerHTML = "";

  if (!items.length) {
    const emptyText = document.createElement("p");
    emptyText.textContent = i18n[currentLanguage].noItems;
    emptyText.style.margin = "0.2rem 0";
    customList.append(emptyText);
    return;
  }

  items.forEach((text) => {
    customList.append(createCheckboxItem(text, false));
  });
}

function renderSettings() {
  const category = settingsCategorySelect.value;
  renderCustomList(category);
  renderGeneratedList(generatedPrompts);
}

function getCurrentCategoryLabel() {
  return settingsCategorySelect.value;
}

function randomGeneratedPrompt(language) {
  const seed = promptSources[language];
  const template = Math.floor(Math.random() * 3);
  if (template === 0) {
    if (language === "sv") {
      return `Har ${randomFrom(seed.has)}`;
    }
    return `Has ${randomFrom(seed.has)}`;
  }
  if (template === 1) {
    if (language === "sv") {
      return `Är ${randomFrom(seed.state)}`;
    }
    return `Is ${randomFrom(seed.state)}`;
  }

  return randomFrom(seed.do);
}

function generatePrompts() {
  const language = currentLanguage;
  const maxAttempts = 5000;
  let attempts = 0;
  const existing = new Set([
    ...basePrompts[language].category1,
    ...basePrompts[language].category2,
    ...basePrompts[language].category3,
    ...customPrompts[language].category1,
    ...customPrompts[language].category2,
    ...customPrompts[language].category3
  ]);

  const generated = new Set();
  while (generated.size < generatedPromptCount) {
    attempts += 1;
    if (attempts > maxAttempts) {
      break;
    }

    const maybePrompt = randomGeneratedPrompt(language);
    if (existing.has(maybePrompt) || generated.has(maybePrompt)) {
      continue;
    }
    generated.add(maybePrompt);
  }

  generatedPrompts = Array.from(generated);
  renderGeneratedList(generatedPrompts);
}

function applyGeneratedSelection() {
  const boxes = generatedList.querySelectorAll("input:checked");
  const category = getCurrentCategoryLabel();
  let added = false;

  boxes.forEach((box) => {
    if (addCustomPrompt(category, box.value)) {
      added = true;
    }
  });

  if (added) {
    renderCustomList(category);
    renderGeneratedList(generatedPrompts);
  }
}

function applyDeleteSelected() {
  const boxes = customList.querySelectorAll("input:checked");
  const category = getCurrentCategoryLabel();
  const toDelete = [];

  boxes.forEach((box) => {
    toDelete.push(box.value);
  });

  if (toDelete.length > 0) {
    removeCustomPrompts(category, toDelete);
    renderCustomList(category);
  }
}

function applyManualAdd() {
  const category = getCurrentCategoryLabel();
  const didAdd = addCustomPrompt(category, manualPromptInput.value);
  if (didAdd) {
    manualPromptInput.value = "";
    renderCustomList(category);
  }
}

themeToggle.addEventListener("click", () => {
  currentTheme = currentTheme === "light" ? "dark" : "light";
  applyTheme(currentTheme);
  localStorage.setItem("sketchTheme", currentTheme);
  updateLanguageText(currentLanguage);
});

langToggle.addEventListener("click", () => {
  currentLanguage = currentLanguage === "sv" ? "en" : "sv";
  localStorage.setItem("sketchLanguage", currentLanguage);
  updateLanguageText(currentLanguage);
  generatedPrompts = [];
  renderGeneratedList(generatedPrompts);
});

settingsCategorySelect.addEventListener("change", renderSettings);
manualAddBtn.addEventListener("click", applyManualAdd);
generatePromptsBtn.addEventListener("click", generatePrompts);
applyGeneratedBtn.addEventListener("click", applyGeneratedSelection);
deleteSelectedBtn.addEventListener("click", applyDeleteSelected);

startBtn.addEventListener("click", startRound);
restartBtn.addEventListener("click", resetRound);
resetBtn.addEventListener("click", resetRound);
settingsOpenBtn.addEventListener("click", () => showScreen("settings"));
closeSettingsBtn.addEventListener("click", () => {
  showScreen("start");
  generatedPrompts = [];
  renderGeneratedList(generatedPrompts);
});

applyTheme(currentTheme);
updateLanguageText(currentLanguage);

showScreen("start");
timeDisplay.textContent = formatTime(ROUND_SECONDS);
