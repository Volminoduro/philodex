const PHILOMON_DATA = {
  "statMeta": {
    "fr": {
      "INFLUENCE": { "role": "pool", "tip": "Masse de pensée accumulée. Combien de coups le système peut absorber avant d'être abandonné par l'histoire." },
      "RIGUEUR":   { "role": "atk",  "tip": "Force des arguments immanents — démonstration formelle, réfutation logique interne au champ de l'adversaire." },
      "ANCRAGE":   { "role": "def",  "tip": "Résistance aux réfutations immanentes reçues. Cohérence interne du système, imperméabilité à la contradiction dans le champ." },
      "PORTÉE":    { "role": "atk",  "tip": "Force des arguments transcendants — capacité à invalider le cadre adverse depuis l'extérieur, sans jouer selon ses règles." },
      "CLÔTURE":   { "role": "def",  "tip": "Résistance aux attaques transcendantes reçues. Le système peut-il survivre à un changement de cadre conceptuel ?" },
      "CLARTÉ":    { "role": "spd",  "tip": "Qui entre dans le débat en premier. Accessibilité de la thèse, vitesse de diffusion, immédiateté de l'impact public." }
    },
    "en": {
      "INFLUENCE": { "role": "pool", "tip": "Accumulated mass of thought. How many hits the system can absorb before being abandoned by history." },
      "RIGUEUR":   { "role": "atk",  "tip": "Strength of immanent arguments — formal demonstration, logical refutation within the opponent's own field." },
      "ANCRAGE":   { "role": "def",  "tip": "Resistance to immanent attacks received. Internal coherence of the system, impermeability to contradiction within the field." },
      "PORTÉE":    { "role": "atk",  "tip": "Strength of transcendent arguments — capacity to invalidate the opposing framework from outside, without playing by its rules." },
      "CLÔTURE":   { "role": "def",  "tip": "Resistance to transcendent attacks received. Can the system survive a paradigm shift?" },
      "CLARTÉ":    { "role": "spd",  "tip": "Who enters the debate first. Accessibility of the thesis, speed of diffusion, immediacy of public impact." }
    }
  },
  "philomon": [
    {
      "id": "001",
      "nom": "DESCARTES",
      "full": "René Descartes",
      "dates": "1596-1650",
      "types": ["Rationalisme"],
      "lieu": "France",
      "era": "MODERNE",
      "imgUrl": "https://upload.wikimedia.org/wikipedia/commons/7/73/Frans_Hals_-_Portret_van_Ren%C3%A9_Descartes.jpg",
      "stats": { "INFLUENCE": 92, "RIGUEUR": 95, "ANCRAGE": 80, "PORTÉE": 30, "CLÔTURE": 40, "CLARTÉ": 70 },
      "fr": {
        "oeuvre": "Méd. Métaphysiques",
        "entree": "Fondateur du rationalisme moderne, Descartes cherche un point de certitude absolue. En éliminant méthodiquement toute croyance incertaine, il découvre que l'acte même de douter prouve l'existence du sujet pensant.",
        "concepts": [
          { "nom": "LE COGITO",          "cat": "immanent",    "type": "Rationalisme", "puissance": 95, "desc": "Je pense donc je suis. Réfutation depuis l'intérieur même du doute — seule certitude qui résiste à toute tentative de mise en question." },
          { "nom": "DOUTE HYPERBOLIQUE", "cat": "immanent",    "type": "Rationalisme", "puissance": 80, "desc": "Procédure interne au champ épistémique : rejeter méthodiquement tout ce qui n'est pas absolument certain." },
          { "nom": "LE DUALISME",        "cat": "transcendant","type": "Idéalisme",    "puissance": 60, "desc": "Pose un cadre ontologique extérieur à l'épistémologie : corps et esprit sont deux substances radicalement distinctes." }
        ],
        "filiation": { "maitres": ["AUGUSTIN","PLATON"], "disciples": ["SPINOZA","LEIBNIZ","MALEBRANCHE"], "contre": ["HUME","LOCKE"] }
      },
      "en": {
        "oeuvre": "Meditations",
        "entree": "Founder of modern rationalism, Descartes seeks an unshakeable point of certainty. By methodically doubting everything that can be doubted, he discovers that the very act of doubting proves the existence of a thinking subject.",
        "concepts": [
          { "nom": "THE COGITO",       "cat": "immanent",    "type": "Rationalisme", "puissance": 95, "desc": "I think therefore I am. A refutation from within doubt itself — the sole certainty that survives any attempt at questioning." },
          { "nom": "HYPERBOLIC DOUBT", "cat": "immanent",    "type": "Rationalisme", "puissance": 80, "desc": "An internal epistemic procedure: methodically reject everything that is not absolutely certain." },
          { "nom": "DUALISM",          "cat": "transcendant","type": "Idéalisme",    "puissance": 60, "desc": "Posits an ontological framework external to epistemology: mind and body are two radically distinct substances." }
        ],
        "filiation": { "maitres": ["AUGUSTINE","PLATO"], "disciples": ["SPINOZA","LEIBNIZ","MALEBRANCHE"], "contre": ["HUME","LOCKE"] }
      }
    },
    {
      "id": "002",
      "nom": "HUME",
      "full": "David Hume",
      "dates": "1711-1776",
      "types": ["Empirisme","Scepticisme"],
      "lieu": "Écosse",
      "era": "MODERNE",
      "imgUrl": "https://upload.wikimedia.org/wikipedia/commons/e/ea/Painting_of_David_Hume.jpg",
      "stats": { "INFLUENCE": 90, "RIGUEUR": 85, "ANCRAGE": 55, "PORTÉE": 65, "CLÔTURE": 50, "CLARTÉ": 72 },
      "fr": {
        "oeuvre": "Traité Nature Humaine",
        "entree": "Hume pousse l'empirisme à ses limites radicales. Rien ne vient que de l'expérience — ni la causalité, ni le moi, ni Dieu. Ce scepticisme réveille Kant de son sommeil dogmatique.",
        "concepts": [
          { "nom": "CRITIQUE DE LA CAUSALITÉ", "cat": "immanent",    "type": "Scepticisme", "puissance": 92, "desc": "Argument interne au champ épistémique : la causalité n'est qu'une habitude psychologique, jamais une nécessité observable." },
          { "nom": "FAISCEAU DE PERCEPTIONS",  "cat": "immanent",    "type": "Empirisme",   "puissance": 78, "desc": "Le moi n'est pas une substance mais un flux de perceptions sans unité fixe — démonstration depuis l'expérience directe." },
          { "nom": "GUILLOTINE DE HUME",       "cat": "transcendant","type": "Scepticisme", "puissance": 85, "desc": "Change le cadre logique lui-même : on ne peut jamais dériver un devoir d'un fait — abîme entre descriptif et normatif." }
        ],
        "filiation": { "maitres": ["LOCKE","BERKELEY","BACON"], "disciples": ["KANT (réaction)","BENTHAM","MILL"], "contre": ["DESCARTES","LEIBNIZ"] }
      },
      "en": {
        "oeuvre": "Treatise of Human Nature",
        "entree": "Hume pushes empiricism to its radical limits. Nothing comes from anywhere but experience — not causality, not the self, not God. This skepticism awakens Kant from his dogmatic slumber.",
        "concepts": [
          { "nom": "CRITIQUE OF CAUSALITY",  "cat": "immanent",    "type": "Scepticisme", "puissance": 92, "desc": "Internal to the epistemic field: causality is merely a psychological habit, never an observable necessity." },
          { "nom": "BUNDLE THEORY OF SELF",  "cat": "immanent",    "type": "Empirisme",   "puissance": 78, "desc": "The self is not a substance but a stream of perceptions without fixed unity — argued from direct experience." },
          { "nom": "HUME'S GUILLOTINE",      "cat": "transcendant","type": "Scepticisme", "puissance": 85, "desc": "Shifts the logical frame itself: you can never derive an ought from an is — a chasm between descriptive and normative." }
        ],
        "filiation": { "maitres": ["LOCKE","BERKELEY","BACON"], "disciples": ["KANT (reaction)","BENTHAM","MILL"], "contre": ["DESCARTES","LEIBNIZ"] }
      }
    },
    {
      "id": "003",
      "nom": "NIETZSCHE",
      "full": "Friedrich Nietzsche",
      "dates": "1844-1900",
      "types": ["Existentialisme","Nihilisme"],
      "lieu": "Allemagne",
      "era": "CONTEMPORAINE",
      "imgUrl": "https://upload.wikimedia.org/wikipedia/commons/1/1b/Nietzsche187a.jpg",
      "stats": { "INFLUENCE": 96, "RIGUEUR": 20, "ANCRAGE": 30, "PORTÉE": 99, "CLÔTURE": 25, "CLARTÉ": 45 },
      "fr": {
        "oeuvre": "Zarathoustra",
        "entree": "Dieu est mort — c'est nous qui l'avons tué. Face au nihilisme, Nietzsche appelle à la transmutation de toutes les valeurs. La Volonté de puissance et l'Éternel Retour défient quiconque ose vivre sans illusions.",
        "concepts": [
          { "nom": "LA MORT DE DIEU",      "cat": "transcendant","type": "Nihilisme",       "puissance": 99, "desc": "Invalide le cadre de valeur entier de l'Occident depuis l'extérieur — pas une réfutation morale, une déclaration d'effondrement." },
          { "nom": "VOLONTÉ DE PUISSANCE", "cat": "transcendant","type": "Existentialisme", "puissance": 90, "desc": "Méta-éthique qui déborde tous les champs : évaluer les valeurs elles-mêmes selon le critère du dépassement créateur." },
          { "nom": "L'ÉTERNEL RETOUR",     "cat": "transcendant","type": "Existentialisme", "puissance": 82, "desc": "Expérience de pensée qui transcende l'éthique et l'ontologie : vivrais-tu ta vie à l'identique si elle se répétait infiniment ?" }
        ],
        "filiation": { "maitres": ["SCHOPENHAUER","HÉRACLITE"], "disciples": ["HEIDEGGER","DELEUZE","CAMUS"], "contre": ["KANT","HEGEL","SOCRATE"] }
      },
      "en": {
        "oeuvre": "Thus Spoke Zarathustra",
        "entree": "God is dead — and we have killed him. Facing nihilism, Nietzsche calls for a revaluation of all values. The Will to Power and Eternal Recurrence challenge anyone who dares to live without illusions.",
        "concepts": [
          { "nom": "DEATH OF GOD",       "cat": "transcendant","type": "Nihilisme",       "puissance": 99, "desc": "Invalidates the entire Western value framework from outside — not a moral refutation, a declaration of collapse." },
          { "nom": "WILL TO POWER",      "cat": "transcendant","type": "Existentialisme", "puissance": 90, "desc": "A meta-ethics that overflows all fields: evaluate values themselves by the criterion of creative self-overcoming." },
          { "nom": "ETERNAL RECURRENCE", "cat": "transcendant","type": "Existentialisme", "puissance": 82, "desc": "A thought-experiment transcending ethics and ontology: would you live your life identically if it repeated infinitely?" }
        ],
        "filiation": { "maitres": ["SCHOPENHAUER","HERACLITUS"], "disciples": ["HEIDEGGER","DELEUZE","CAMUS"], "contre": ["KANT","HEGEL","SOCRATES"] }
      }
    },
    {
      "id": "004",
      "nom": "EPICTETE",
      "full": "Épictète",
      "dates": "50-135 ap. J.-C.",
      "types": ["Stoïcisme"],
      "lieu": "Empire Romain",
      "era": "ANTIQUE",
      "imgUrl": "https://upload.wikimedia.org/wikipedia/commons/9/90/Epictetus.jpg",
      "stats": { "INFLUENCE": 82, "RIGUEUR": 60, "ANCRAGE": 70, "PORTÉE": 35, "CLÔTURE": 95, "CLARTÉ": 85 },
      "fr": {
        "oeuvre": "Manuel (Enchiridion)",
        "entree": "Ancien esclave devenu sage, Épictète enseigne que la liberté est la maîtrise de ce qui dépend de nous. Ce qui n'en dépend pas — maladie, mort, opinion d'autrui — ne mérite ni désir ni crainte.",
        "concepts": [
          { "nom": "DICHOTOMIE DU CONTRÔLE",      "cat": "immanent",    "type": "Stoïcisme", "puissance": 90, "desc": "Argument interne au champ existentiel : distinguer ce qui dépend de nous de ce qui n'en dépend pas — n'agir que sur le premier." },
          { "nom": "REPRÉSENTATION (PHANTASIA)",  "cat": "immanent",    "type": "Stoïcisme", "puissance": 72, "desc": "Ce ne sont pas les événements qui troublent mais nos représentations d'eux — transformation interne à la posture existentielle." },
          { "nom": "LE RÔLE (PROSÔPON)",          "cat": "transcendant","type": "Stoïcisme", "puissance": 60, "desc": "Jouer parfaitement le rôle que le destin nous a assigné — sort légèrement du champ en posant un cadre cosmique extérieur." }
        ],
        "filiation": { "maitres": ["ZÉNON DE CITIUM","CHRYSIPPE","MUSONIUS RUFUS"], "disciples": ["MARC AURÈLE","ARRIEN"], "contre": ["ÉPICURE"] }
      },
      "en": {
        "oeuvre": "Enchiridion (Manual)",
        "entree": "A former slave turned sage, Epictetus teaches that freedom is mastery over what depends on us. What does not — illness, death, others' opinions — deserves neither desire nor fear.",
        "concepts": [
          { "nom": "DICHOTOMY OF CONTROL",   "cat": "immanent",    "type": "Stoïcisme", "puissance": 90, "desc": "Internal to the existential field: distinguish what depends on us from what does not — act only on the former." },
          { "nom": "IMPRESSION (PHANTASIA)", "cat": "immanent",    "type": "Stoïcisme", "puissance": 72, "desc": "It is not events that disturb us, but our impressions of them — transformation within the existential stance." },
          { "nom": "ROLE (PROSÔPON)",        "cat": "transcendant","type": "Stoïcisme", "puissance": 60, "desc": "Play perfectly the role fate assigned us — steps slightly outside the field by positing an external cosmic framework." }
        ],
        "filiation": { "maitres": ["ZENO OF CITIUM","CHRYSIPPUS","MUSONIUS RUFUS"], "disciples": ["MARCUS AURELIUS","ARRIAN"], "contre": ["EPICURUS"] }
      }
    }
  ]
};
