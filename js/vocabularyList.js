const { computed, createApp, defineComponent, onMounted, onUnmounted, ref, watch } = Vue;

function useTheme() {
  const savedTheme = localStorage.getItem("ssquiz-theme");
  const darkMode = ref(
    savedTheme === "dark" ||
      (savedTheme === null &&
        window.matchMedia("(prefers-color-scheme: dark)").matches),
  );

  watch(
    darkMode,
    (enabled) => {
      document.documentElement.classList.toggle("dark-mode", enabled);
      localStorage.setItem("ssquiz-theme", enabled ? "dark" : "light");
    },
    { immediate: true },
  );

  return { darkMode };
}

const FlashcardCard = defineComponent({
  name: "FlashcardCard",
  props: {
    card: {
      type: Object,
      default: null,
    },
    flipped: Boolean,
    hasCategory: Boolean,
  },
  emits: ["toggle"],
  template: `
    <div class="flashcard" :class="{ rotate: flipped }" @click="$emit('toggle')">
      <div v-if="!hasCategory" class="flashcardCategory">
        wybierz kategorię i naciśnij na pole
        <p></p>
        <p>pojęcie -> definicja</p>
      </div>
      <template v-else-if="card">
        <div v-show="!flipped" class="front">{{ card.word }}</div>
        <div v-show="flipped" class="back">{{ card.definition }}</div>
      </template>
    </div>
  `,
});

const vocabulary = {
  common: [
    { word: "to bring", definition: "przynieść" },
    { word: "to manage", definition: "zdołać" },
    { word: "to predict", definition: "przewidywać" },
    { word: "to say", definition: "mówić" },
    { word: "to make", definition: "robić" },
    { word: "to know", definition: "wiedzieć" },
    { word: "to come", definition: "przyjść" },
    { word: "to find", definition: "znaleźć" },
    { word: "to call", definition: "dzwonić" },
    { word: "to play", definition: "grać" },
  ],
  pollution: [
    { word: "acid", definition: "kwas" },
    { word: "petrol", definition: "benzyna" },
    { word: "dioxide", definition: "dwutlenek" },
    { word: "sulpour", definition: "siarka" },
    { word: "soot", definition: "sadza" },
    { word: "exhaust", definition: "spaliny" },
    { word: "harmful", definition: "szkodliwy" },
    { word: "monoxide", definition: "tlenek" },
    { word: "nitrogen", definition: "azot" },
    { word: "particule", definition: "cząsteczka" },
  ],
  sport: [
    { word: "archery", definition: "łucznictwo" },
    { word: "basketball", definition: "koszykówka" },
    { word: "coach", definition: "trener" },
    { word: "draw", definition: "remis" },
    { word: "fencing", definition: "szermierka" },
    { word: "goalkeeper", definition: "bramkarz" },
    { word: "net", definition: "siatka" },
    { word: "pole vault", definition: "skok o tyczce" },
    { word: "racket", definition: "rakieta" },
    { word: "relay", definition: "sztafeta" },
  ],
};

createApp({
  components: { FlashcardCard },
  setup() {
    const { darkMode } = useTheme();
    const name = "SSMindGames";
    const category = ref(null);
    const currentIndex = ref(0);
    const isFlipped = ref(false);
    const menuOpen = ref(false);
    const showCategories = ref(false);
    const showFlashcardInfo = ref(false);
    const showAllWords = ref(false);

    const activeCards = computed(() =>
      category.value ? vocabulary[category.value] : [],
    );
    const currentCard = computed(
      () => activeCards.value[currentIndex.value] ?? null,
    );
    const hasCategory = computed(() => category.value !== null);

    watch(category, () => {
      currentIndex.value = 0;
      isFlipped.value = false;
      showAllWords.value = false;
    });

    const selectCategory = (name) => {
      category.value = name;
      showCategories.value = false;
    };

    const toggleMobileMenu = () => {
      menuOpen.value = !menuOpen.value;
      if (!menuOpen.value) showCategories.value = false;
    };

    const toggleCategories = () => {
      showCategories.value = !showCategories.value;
    };

    const toggleTheme = () => {
      darkMode.value = !darkMode.value;
    };

    const moveCard = (step) => {
      if (!activeCards.value.length) return;
      const length = activeCards.value.length;
      currentIndex.value = (currentIndex.value + step + length) % length;
      isFlipped.value = false;
    };

    const handleKeyDown = (event) => {
      const isCategoryInput = event.target.matches(
        '.flashcardButtons input[type="radio"][name="category"]',
      );
      if (event.altKey || event.ctrlKey || event.metaKey || event.shiftKey ||
          (!isCategoryInput && event.target.closest('input, textarea, select, [contenteditable], nav, .navbar, .shortcut-help'))) return;
      const categoryShortcut = { "1": "common", "2": "pollution", "3": "sport" }[event.key];
      if (categoryShortcut) {
        event.preventDefault();
        if (!event.repeat) selectCategory(categoryShortcut);
        return;
      }
      if (!hasCategory.value) return;
      if (!["ArrowLeft", "ArrowRight", " "].includes(event.key)) return;
      event.preventDefault();
      if (event.repeat) return;
      if (event.key === " ") isFlipped.value = !isFlipped.value;
      else moveCard(event.key === "ArrowLeft" ? -1 : 1);
    };

    onMounted(() => {
      document.title = "Vocabulary list";
      document.addEventListener("keydown", handleKeyDown);
    });
    onUnmounted(() => document.removeEventListener("keydown", handleKeyDown));

    return {
      activeCards,
      category,
      currentCard,
      darkMode,
      hasCategory,
      isFlipped,
      menuOpen,
      moveCard,
      selectCategory,
      showAllWords,
      showCategories,
      showFlashcardInfo,
      toggleCategories,
      toggleMobileMenu,
      toggleTheme,
      name,
    };
  },
}).mount("#app");
