const PHILOMON_DATA = {
  "statMeta": {
    "fr": {
      "INFLUENCE": {
        "role": "pool",
        "tip": "Masse de pensée accumulée. Combien de coups le système peut absorber avant d'être abandonné par l'histoire."
      },
      "RIGUEUR": {
        "role": "atk",
        "tip": "Force des arguments immanents — démonstration formelle, réfutation logique interne au champ de l'adversaire."
      },
      "ANCRAGE": {
        "role": "def",
        "tip": "Résistance aux réfutations immanentes reçues. Cohérence interne du système, imperméabilité à la contradiction dans le champ."
      },
      "PORTÉE": {
        "role": "atk",
        "tip": "Force des arguments transcendants — capacité à invalider le cadre adverse depuis l'extérieur, sans jouer selon ses règles."
      },
      "CLÔTURE": {
        "role": "def",
        "tip": "Résistance aux attaques transcendantes reçues. Le système peut-il survivre à un changement de cadre conceptuel ?"
      },
      "CLARTÉ": {
        "role": "spd",
        "tip": "Qui entre dans le débat en premier. Accessibilité de la thèse, vitesse de diffusion, immédiateté de l'impact public."
      }
    },
    "en": {
      "INFLUENCE": {
        "role": "pool",
        "tip": "Accumulated mass of thought. How many hits the system can absorb before being abandoned by history."
      },
      "RIGUEUR": {
        "role": "atk",
        "tip": "Strength of immanent arguments — formal demonstration, logical refutation within the opponent's own field."
      },
      "ANCRAGE": {
        "role": "def",
        "tip": "Resistance to immanent attacks received. Internal coherence of the system, impermeability to contradiction within the field."
      },
      "PORTÉE": {
        "role": "atk",
        "tip": "Strength of transcendent arguments — capacity to invalidate the opposing framework from outside, without playing by its rules."
      },
      "CLÔTURE": {
        "role": "def",
        "tip": "Resistance to transcendent attacks received. Can the system survive a paradigm shift?"
      },
      "CLARTÉ": {
        "role": "spd",
        "tip": "Who enters the debate first. Accessibility of the thesis, speed of diffusion, immediacy of public impact."
      }
    }
  },
  "typechart": {
    "Rationalisme": {
      "Empirisme": 0.5,
      "Scepticisme": 0,
      "Existentialisme": 0.5,
      "Nihilisme": 2,
      "Mysticisme": 2,
      "Panthéisme": 0.5
    },
    "Empirisme": {
      "Rationalisme": 2,
      "Idéalisme": 2,
      "Scepticisme": 0.5,
      "Nihilisme": 0.5,
      "Mysticisme": 2,
      "Vedanta": 2
    },
    "Idéalisme": {
      "Empirisme": 0.5,
      "Matérialisme": 2,
      "Scepticisme": 0.5,
      "Existentialisme": 0.5,
      "Dualisme": 0.5
    },
    "Matérialisme": {
      "Idéalisme": 2,
      "Nihilisme": 0.5,
      "Mysticisme": 2,
      "Dualisme": 2,
      "Panthéisme": 2,
      "Vedanta": 2
    },
    "Réalisme": {
      "Idéalisme": 2,
      "Scepticisme": 0.5,
      "Constructivisme": 2,
      "Postmodernisme": 2
    },
    "Dualisme": {
      "Matérialisme": 0.5,
      "Idéalisme": 0.5,
      "Philo. Esprit": 2
    },
    "Panthéisme": {
      "Dualisme": 2,
      "Philo. Religion": 0.5,
      "Mysticisme": 0.5
    },
    "Mysticisme": {
      "Rationalisme": 0,
      "Logique": 0,
      "Empirisme": 0.5,
      "Philo. Religion": 0.5
    },
    "Scepticisme": {
      "Rationalisme": 2,
      "Empirisme": 2,
      "Idéalisme": 2,
      "Réalisme": 2,
      "Stoïcisme": 0.5,
      "Existentialisme": 0.5,
      "Positivisme": 2
    },
    "Positivisme": {
      "Mysticisme": 2,
      "Philo. Religion": 2,
      "Idéalisme": 2,
      "Herméneutique": 0.5
    },
    "Constructivisme": {
      "Réalisme": 2,
      "Positivisme": 0.5,
      "Philo. Sciences": 0.5
    },
    "Pragmatisme": {
      "Idéalisme": 2,
      "Rationalisme": 0.5,
      "Philo. Sciences": 0.5,
      "Nihilisme": 2
    },
    "Logique": {
      "Rhétorique": 2,
      "Mysticisme": 2,
      "Dialectique": 0.5,
      "Herméneutique": 0.5
    },
    "Dialectique": {
      "Logique": 0.5,
      "Rationalisme": 0.5,
      "Conservatisme": 2,
      "Libéralisme": 0.5
    },
    "Rhétorique": {
      "Logique": 0.5,
      "Dialectique": 0.5,
      "Philo. Langage": 0.5
    },
    "Stoïcisme": {
      "Hédonisme": 2,
      "Épicurisme": 2,
      "Nihilisme": 0.5,
      "Scepticisme": 0.5,
      "Existentialisme": 0.5
    },
    "Épicurisme": {
      "Stoïcisme": 0.5,
      "Déontologie": 2,
      "Cynisme": 0.5
    },
    "Hédonisme": {
      "Stoïcisme": 0,
      "Déontologie": 2,
      "Utilitarisme": 0.5
    },
    "Déontologie": {
      "Utilitarisme": 2,
      "Éthique du Soin": 0.5,
      "Nihilisme": 0.5
    },
    "Utilitarisme": {
      "Déontologie": 0.5,
      "Éthique des Vertus": 0.5,
      "Contractualisme": 0.5
    },
    "Éthique des Vertus": {
      "Nihilisme": 2,
      "Utilitarisme": 0.5,
      "Déontologie": 0.5
    },
    "Contractualisme": {
      "Anarchisme": 2,
      "Conservatisme": 0.5,
      "Marxisme": 0.5
    },
    "Éthique du Soin": {
      "Libéralisme": 0.5,
      "Utilitarisme": 0.5
    },
    "Cynisme": {
      "Philo. Politique": 2,
      "Utopisme": 2,
      "Stoïcisme": 0.5
    },
    "Existentialisme": {
      "Rationalisme": 2,
      "Idéalisme": 2,
      "Scepticisme": 0.5,
      "Stoïcisme": 0.5,
      "Nihilisme": 0.5
    },
    "Nihilisme": {
      "Rationalisme": 2,
      "Idéalisme": 2,
      "Stoïcisme": 0.5,
      "Existentialisme": 0.5,
      "Éthique des Vertus": 2
    },
    "Phénoménologie": {
      "Positivisme": 2,
      "Rationalisme": 0.5,
      "Logique": 0.5
    },
    "Libéralisme": {
      "Marxisme": 2,
      "Anarchisme": 0.5,
      "Conservatisme": 0.5,
      "Contractualisme": 0.5
    },
    "Marxisme": {
      "Libéralisme": 2,
      "Idéalisme": 2,
      "Conservatisme": 2,
      "Utopisme": 0.5
    },
    "Anarchisme": {
      "Contractualisme": 0,
      "Libéralisme": 0.5,
      "Marxisme": 0.5
    },
    "Conservatisme": {
      "Utopisme": 2,
      "Libéralisme": 0.5,
      "Anarchisme": 2
    },
    "Républicanisme": {
      "Libéralisme": 0.5,
      "Anarchisme": 0.5,
      "Conservatisme": 0.5
    },
    "Utopisme": {
      "Cynisme": 0,
      "Réalisme": 0.5,
      "Conservatisme": 0.5
    },
    "Philo. Politique": {
      "Éthique des Vertus": 0.5,
      "Phénoménologie": 0.5
    },
    "Philo. Langage": {
      "Herméneutique": 0.5,
      "Rhétorique": 0.5,
      "Structuralisme": 0.5
    },
    "Herméneutique": {
      "Positivisme": 2,
      "Logique": 0.5,
      "Structuralisme": 0.5
    },
    "Structuralisme": {
      "Existentialisme": 2,
      "Herméneutique": 0.5,
      "Phénoménologie": 0.5
    },
    "Philo. Sciences": {
      "Mysticisme": 2,
      "Positivisme": 0.5,
      "Constructivisme": 0.5,
      "Philo. Religion": 2
    },
    "Philo. Esprit": {
      "Matérialisme": 0.5,
      "Dualisme": 0.5,
      "Idéalisme": 0.5
    },
    "Esthétique": {
      "Positivisme": 0.5,
      "Logique": 0.5,
      "Nihilisme": 2
    },
    "Philo. Religion": {
      "Matérialisme": 2,
      "Nihilisme": 2,
      "Scepticisme": 0.5,
      "Mysticisme": 0.5
    },
    "Philo. Droit": {
      "Anarchisme": 2,
      "Contractualisme": 0.5,
      "Nihilisme": 0.5
    },
    "Philo. Histoire": {
      "Positivisme": 0.5,
      "Nihilisme": 0.5,
      "Structuralisme": 0.5
    },
    "Philo. Technique": {
      "Humanisme": 2,
      "Positivisme": 0.5,
      "Écophilosophie": 0.5
    },
    "Écophilosophie": {
      "Matérialisme": 0.5,
      "Libéralisme": 0.5,
      "Marxisme": 0.5
    },
    "Féminisme": {
      "Contractualisme": 0.5,
      "Libéralisme": 0.5,
      "Éthique du Soin": 0.5
    },
    "Postmodernisme": {
      "Réalisme": 2,
      "Positivisme": 2,
      "Rationalisme": 2,
      "Structuralisme": 0.5
    },
    "Théorie Critique": {
      "Positivisme": 2,
      "Libéralisme": 0.5,
      "Marxisme": 0.5,
      "Postmodernisme": 0.5
    },
    "Humanisme": {
      "Mysticisme": 0.5,
      "Nihilisme": 2,
      "Philo. Technique": 0.5
    },
    "Confucianisme": {
      "Anarchisme": 2,
      "Nihilisme": 2,
      "Libéralisme": 0.5,
      "Cynisme": 0.5
    },
    "Taoïsme": {
      "Logique": 0,
      "Rationalisme": 0,
      "Confucianisme": 0.5,
      "Mysticisme": 0.5
    },
    "Bouddhisme": {
      "Matérialisme": 2,
      "Nihilisme": 0.5,
      "Idéalisme": 0.5,
      "Mysticisme": 0.5,
      "Hédonisme": 2
    },
    "Philo. Islamique": {
      "Rationalisme": 0.5,
      "Mysticisme": 0.5,
      "Philo. Religion": 0.5,
      "Matérialisme": 2
    },
    "Vedanta": {
      "Matérialisme": 2,
      "Dualisme": 2,
      "Empirisme": 0.5,
      "Mysticisme": 0.5
    },
    "Philo. Africaine": {
      "Libéralisme": 2,
      "Nihilisme": 2,
      "Contractualisme": 0.5
    }
  },
  "philomon": [
    {
      "id": "001",
      "nom": "DESCARTES",
      "full": "René Descartes",
      "dates": "1596-1650",
      "types": [
        "Rationalisme"
      ],
      "lieu": "France",
      "era": "MODERNE",
      "imgUrl": "https://upload.wikimedia.org/wikipedia/commons/7/73/Frans_Hals_-_Portret_van_Ren%C3%A9_Descartes.jpg",
      "stats": {
        "INFLUENCE": 92,
        "RIGUEUR": 95,
        "ANCRAGE": 80,
        "PORTÉE": 30,
        "CLÔTURE": 40,
        "CLARTÉ": 70
      },
      "fr": {
        "oeuvre": "Méd. Métaphysiques",
        "entree": "Fondateur du rationalisme moderne, Descartes cherche un point de certitude absolue. En éliminant méthodiquement toute croyance incertaine, il découvre que l'acte même de douter prouve l'existence du sujet pensant.",
        "concepts": [
          {
            "nom": "LE COGITO",
            "cat": "immanent",
            "type": "Rationalisme",
            "puissance": 95,
            "desc": "Je pense donc je suis. Réfutation depuis l'intérieur même du doute — seule certitude qui résiste à toute tentative de mise en question."
          },
          {
            "nom": "DOUTE HYPERBOLIQUE",
            "cat": "immanent",
            "type": "Rationalisme",
            "puissance": 80,
            "desc": "Procédure interne au champ épistémique : rejeter méthodiquement tout ce qui n'est pas absolument certain."
          },
          {
            "nom": "LE DUALISME",
            "cat": "transcendant",
            "type": "Idéalisme",
            "puissance": 60,
            "desc": "Pose un cadre ontologique extérieur à l'épistémologie : corps et esprit sont deux substances radicalement distinctes."
          }
        ],
        "filiation": {
          "maitres": [
            "AUGUSTIN",
            "PLATON"
          ],
          "disciples": [
            "SPINOZA",
            "LEIBNIZ",
            "MALEBRANCHE"
          ],
          "contre": [
            "HUME",
            "LOCKE"
          ]
        }
      },
      "en": {
        "oeuvre": "Meditations",
        "entree": "Founder of modern rationalism, Descartes seeks an unshakeable point of certainty. By methodically doubting everything that can be doubted, he discovers that the very act of doubting proves the existence of a thinking subject.",
        "concepts": [
          {
            "nom": "THE COGITO",
            "cat": "immanent",
            "type": "Rationalisme",
            "puissance": 95,
            "desc": "I think therefore I am. A refutation from within doubt itself — the sole certainty that survives any attempt at questioning."
          },
          {
            "nom": "HYPERBOLIC DOUBT",
            "cat": "immanent",
            "type": "Rationalisme",
            "puissance": 80,
            "desc": "An internal epistemic procedure: methodically reject everything that is not absolutely certain."
          },
          {
            "nom": "DUALISM",
            "cat": "transcendant",
            "type": "Idéalisme",
            "puissance": 60,
            "desc": "Posits an ontological framework external to epistemology: mind and body are two radically distinct substances."
          }
        ],
        "filiation": {
          "maitres": [
            "AUGUSTINE",
            "PLATO"
          ],
          "disciples": [
            "SPINOZA",
            "LEIBNIZ",
            "MALEBRANCHE"
          ],
          "contre": [
            "HUME",
            "LOCKE"
          ]
        }
      }
    },
    {
      "id": "002",
      "nom": "HUME",
      "full": "David Hume",
      "dates": "1711-1776",
      "types": [
        "Empirisme",
        "Scepticisme"
      ],
      "lieu": "Écosse",
      "era": "MODERNE",
      "imgUrl": "https://upload.wikimedia.org/wikipedia/commons/e/ea/Painting_of_David_Hume.jpg",
      "stats": {
        "INFLUENCE": 90,
        "RIGUEUR": 85,
        "ANCRAGE": 55,
        "PORTÉE": 65,
        "CLÔTURE": 50,
        "CLARTÉ": 72
      },
      "fr": {
        "oeuvre": "Traité Nature Humaine",
        "entree": "Hume pousse l'empirisme à ses limites radicales. Rien ne vient que de l'expérience — ni la causalité, ni le moi, ni Dieu. Ce scepticisme réveille Kant de son sommeil dogmatique.",
        "concepts": [
          {
            "nom": "CRITIQUE DE LA CAUSALITÉ",
            "cat": "immanent",
            "type": "Scepticisme",
            "puissance": 92,
            "desc": "Argument interne au champ épistémique : la causalité n'est qu'une habitude psychologique, jamais une nécessité observable."
          },
          {
            "nom": "FAISCEAU DE PERCEPTIONS",
            "cat": "immanent",
            "type": "Empirisme",
            "puissance": 78,
            "desc": "Le moi n'est pas une substance mais un flux de perceptions sans unité fixe — démonstration depuis l'expérience directe."
          },
          {
            "nom": "GUILLOTINE DE HUME",
            "cat": "transcendant",
            "type": "Scepticisme",
            "puissance": 85,
            "desc": "Change le cadre logique lui-même : on ne peut jamais dériver un devoir d'un fait — abîme entre descriptif et normatif."
          }
        ],
        "filiation": {
          "maitres": [
            "LOCKE",
            "BERKELEY",
            "BACON"
          ],
          "disciples": [
            "KANT (réaction)",
            "BENTHAM",
            "MILL"
          ],
          "contre": [
            "DESCARTES",
            "LEIBNIZ"
          ]
        }
      },
      "en": {
        "oeuvre": "Treatise of Human Nature",
        "entree": "Hume pushes empiricism to its radical limits. Nothing comes from anywhere but experience — not causality, not the self, not God. This skepticism awakens Kant from his dogmatic slumber.",
        "concepts": [
          {
            "nom": "CRITIQUE OF CAUSALITY",
            "cat": "immanent",
            "type": "Scepticisme",
            "puissance": 92,
            "desc": "Internal to the epistemic field: causality is merely a psychological habit, never an observable necessity."
          },
          {
            "nom": "BUNDLE THEORY OF SELF",
            "cat": "immanent",
            "type": "Empirisme",
            "puissance": 78,
            "desc": "The self is not a substance but a stream of perceptions without fixed unity — argued from direct experience."
          },
          {
            "nom": "HUME'S GUILLOTINE",
            "cat": "transcendant",
            "type": "Scepticisme",
            "puissance": 85,
            "desc": "Shifts the logical frame itself: you can never derive an ought from an is — a chasm between descriptive and normative."
          }
        ],
        "filiation": {
          "maitres": [
            "LOCKE",
            "BERKELEY",
            "BACON"
          ],
          "disciples": [
            "KANT (reaction)",
            "BENTHAM",
            "MILL"
          ],
          "contre": [
            "DESCARTES",
            "LEIBNIZ"
          ]
        }
      }
    },
    {
      "id": "003",
      "nom": "NIETZSCHE",
      "full": "Friedrich Nietzsche",
      "dates": "1844-1900",
      "types": [
        "Existentialisme",
        "Nihilisme"
      ],
      "lieu": "Allemagne",
      "era": "CONTEMPORAINE",
      "imgUrl": "https://upload.wikimedia.org/wikipedia/commons/1/1b/Nietzsche187a.jpg",
      "stats": {
        "INFLUENCE": 96,
        "RIGUEUR": 20,
        "ANCRAGE": 30,
        "PORTÉE": 99,
        "CLÔTURE": 25,
        "CLARTÉ": 45
      },
      "fr": {
        "oeuvre": "Zarathoustra",
        "entree": "Dieu est mort — c'est nous qui l'avons tué. Face au nihilisme, Nietzsche appelle à la transmutation de toutes les valeurs. La Volonté de puissance et l'Éternel Retour défient quiconque ose vivre sans illusions.",
        "concepts": [
          {
            "nom": "LA MORT DE DIEU",
            "cat": "transcendant",
            "type": "Nihilisme",
            "puissance": 99,
            "desc": "Invalide le cadre de valeur entier de l'Occident depuis l'extérieur — pas une réfutation morale, une déclaration d'effondrement."
          },
          {
            "nom": "VOLONTÉ DE PUISSANCE",
            "cat": "transcendant",
            "type": "Existentialisme",
            "puissance": 90,
            "desc": "Méta-éthique qui déborde tous les champs : évaluer les valeurs elles-mêmes selon le critère du dépassement créateur."
          },
          {
            "nom": "L'ÉTERNEL RETOUR",
            "cat": "transcendant",
            "type": "Existentialisme",
            "puissance": 82,
            "desc": "Expérience de pensée qui transcende l'éthique et l'ontologie : vivrais-tu ta vie à l'identique si elle se répétait infiniment ?"
          }
        ],
        "filiation": {
          "maitres": [
            "SCHOPENHAUER",
            "HÉRACLITE"
          ],
          "disciples": [
            "HEIDEGGER",
            "DELEUZE",
            "CAMUS"
          ],
          "contre": [
            "KANT",
            "HEGEL",
            "SOCRATE"
          ]
        }
      },
      "en": {
        "oeuvre": "Thus Spoke Zarathustra",
        "entree": "God is dead — and we have killed him. Facing nihilism, Nietzsche calls for a revaluation of all values. The Will to Power and Eternal Recurrence challenge anyone who dares to live without illusions.",
        "concepts": [
          {
            "nom": "DEATH OF GOD",
            "cat": "transcendant",
            "type": "Nihilisme",
            "puissance": 99,
            "desc": "Invalidates the entire Western value framework from outside — not a moral refutation, a declaration of collapse."
          },
          {
            "nom": "WILL TO POWER",
            "cat": "transcendant",
            "type": "Existentialisme",
            "puissance": 90,
            "desc": "A meta-ethics that overflows all fields: evaluate values themselves by the criterion of creative self-overcoming."
          },
          {
            "nom": "ETERNAL RECURRENCE",
            "cat": "transcendant",
            "type": "Existentialisme",
            "puissance": 82,
            "desc": "A thought-experiment transcending ethics and ontology: would you live your life identically if it repeated infinitely?"
          }
        ],
        "filiation": {
          "maitres": [
            "SCHOPENHAUER",
            "HERACLITUS"
          ],
          "disciples": [
            "HEIDEGGER",
            "DELEUZE",
            "CAMUS"
          ],
          "contre": [
            "KANT",
            "HEGEL",
            "SOCRATES"
          ]
        }
      }
    },
    {
      "id": "004",
      "nom": "EPICTETE",
      "full": "Épictète",
      "dates": "50-135 ap. J.-C.",
      "types": [
        "Stoïcisme"
      ],
      "lieu": "Empire Romain",
      "era": "ANTIQUE",
      "imgUrl": "https://upload.wikimedia.org/wikipedia/commons/9/90/Epictetus.jpg",
      "stats": {
        "INFLUENCE": 82,
        "RIGUEUR": 60,
        "ANCRAGE": 70,
        "PORTÉE": 35,
        "CLÔTURE": 95,
        "CLARTÉ": 85
      },
      "fr": {
        "oeuvre": "Manuel (Enchiridion)",
        "entree": "Ancien esclave devenu sage, Épictète enseigne que la liberté est la maîtrise de ce qui dépend de nous. Ce qui n'en dépend pas — maladie, mort, opinion d'autrui — ne mérite ni désir ni crainte.",
        "concepts": [
          {
            "nom": "DICHOTOMIE DU CONTRÔLE",
            "cat": "immanent",
            "type": "Stoïcisme",
            "puissance": 90,
            "desc": "Argument interne au champ existentiel : distinguer ce qui dépend de nous de ce qui n'en dépend pas — n'agir que sur le premier."
          },
          {
            "nom": "REPRÉSENTATION (PHANTASIA)",
            "cat": "immanent",
            "type": "Stoïcisme",
            "puissance": 72,
            "desc": "Ce ne sont pas les événements qui troublent mais nos représentations d'eux — transformation interne à la posture existentielle."
          },
          {
            "nom": "LE RÔLE (PROSÔPON)",
            "cat": "transcendant",
            "type": "Stoïcisme",
            "puissance": 60,
            "desc": "Jouer parfaitement le rôle que le destin nous a assigné — sort légèrement du champ en posant un cadre cosmique extérieur."
          }
        ],
        "filiation": {
          "maitres": [
            "ZÉNON DE CITIUM",
            "CHRYSIPPE",
            "MUSONIUS RUFUS"
          ],
          "disciples": [
            "MARC AURÈLE",
            "ARRIEN"
          ],
          "contre": [
            "ÉPICURE"
          ]
        }
      },
      "en": {
        "oeuvre": "Enchiridion (Manual)",
        "entree": "A former slave turned sage, Epictetus teaches that freedom is mastery over what depends on us. What does not — illness, death, others' opinions — deserves neither desire nor fear.",
        "concepts": [
          {
            "nom": "DICHOTOMY OF CONTROL",
            "cat": "immanent",
            "type": "Stoïcisme",
            "puissance": 90,
            "desc": "Internal to the existential field: distinguish what depends on us from what does not — act only on the former."
          },
          {
            "nom": "IMPRESSION (PHANTASIA)",
            "cat": "immanent",
            "type": "Stoïcisme",
            "puissance": 72,
            "desc": "It is not events that disturb us, but our impressions of them — transformation within the existential stance."
          },
          {
            "nom": "ROLE (PROSÔPON)",
            "cat": "transcendant",
            "type": "Stoïcisme",
            "puissance": 60,
            "desc": "Play perfectly the role fate assigned us — steps slightly outside the field by positing an external cosmic framework."
          }
        ],
        "filiation": {
          "maitres": [
            "ZENO OF CITIUM",
            "CHRYSIPPUS",
            "MUSONIUS RUFUS"
          ],
          "disciples": [
            "MARCUS AURELIUS",
            "ARRIAN"
          ],
          "contre": [
            "EPICURUS"
          ]
        }
      }
    },
    {
      "id": "005",
      "nom": "SOCRATE",
      "full": "Socrate",
      "dates": "470-399 av. J.-C.",
      "types": [
        "Dialectique",
        "Éthique des Vertus"
      ],
      "lieu": "Grèce",
      "era": "ANTIQUE",
      "imgUrl": "https://upload.wikimedia.org/wikipedia/commons/b/bc/Socrate_du_Louvre.jpg",
      "stats": {
        "INFLUENCE": 99,
        "RIGUEUR": 78,
        "ANCRAGE": 35,
        "PORTÉE": 95,
        "CLÔTURE": 20,
        "CLARTÉ": 92
      },
      "fr": {
        "oeuvre": "Apologie de Socrate",
        "entree": "Socrate n'a rien écrit. Il interroge, déstabilise, démonte. Sa méthode — la maïeutique — fait accoucher les idées plutôt qu'elle ne les impose. Condamné à mort pour avoir trop bien posé des questions, il reste le modèle de la philosophie comme façon de vivre.",
        "concepts": [
          {
            "nom": "LA MAÏEUTIQUE",
            "cat": "immanent",
            "type": "Dialectique",
            "puissance": 92,
            "desc": "Art d'interroger pour révéler ce que l'interlocuteur croit savoir sans le savoir — réfutation interne de toutes les fausses certitudes."
          },
          {
            "nom": "L'IRONIE SOCRATIQUE",
            "cat": "immanent",
            "type": "Dialectique",
            "puissance": 82,
            "desc": "Feindre l'ignorance pour faire apparaître les contradictions internes de l'adversaire — victoire dans le champ même de l'autre."
          },
          {
            "nom": "JE SAIS QUE JE NE SAIS RIEN",
            "cat": "transcendant",
            "type": "Éthique des Vertus",
            "puissance": 95,
            "desc": "Invalide tout dogmatisme depuis un méta-niveau : la conscience de l'ignorance est la seule sagesse véritable."
          }
        ],
        "filiation": {
          "maitres": [
            "ANAXAGORE",
            "ARCHÉLAOS"
          ],
          "disciples": [
            "PLATON",
            "XÉNOPHON",
            "ALCIBIADE"
          ],
          "contre": [
            "PROTAGORAS",
            "SOPHISTES"
          ]
        }
      },
      "en": {
        "oeuvre": "Apology (via Plato)",
        "entree": "Socrates wrote nothing. He questions, destabilizes, dismantles. His method — maieutics — draws out ideas rather than imposing them. Condemned to death for asking too many good questions, he remains philosophy's model of a life examined.",
        "concepts": [
          {
            "nom": "MAIEUTICS",
            "cat": "immanent",
            "type": "Dialectique",
            "puissance": 92,
            "desc": "The art of questioning to reveal what the interlocutor believes they know but don't — internal refutation of all false certainties."
          },
          {
            "nom": "SOCRATIC IRONY",
            "cat": "immanent",
            "type": "Dialectique",
            "puissance": 82,
            "desc": "Feigning ignorance to expose the internal contradictions in the opponent's position — a victory on the other's own ground."
          },
          {
            "nom": "I KNOW THAT I KNOW NOTHING",
            "cat": "transcendant",
            "type": "Éthique des Vertus",
            "puissance": 95,
            "desc": "Invalidates all dogmatism from a meta-level: awareness of ignorance is the only genuine wisdom."
          }
        ],
        "filiation": {
          "maitres": [
            "ANAXAGORAS",
            "ARCHELAUS"
          ],
          "disciples": [
            "PLATON",
            "XENOPHON",
            "ALCIBIADES"
          ],
          "contre": [
            "PROTAGORAS",
            "THE SOPHISTS"
          ]
        }
      }
    },
    {
      "id": "006",
      "nom": "PLATON",
      "full": "Platon",
      "dates": "427-347 av. J.-C.",
      "types": [
        "Idéalisme",
        "Rationalisme"
      ],
      "lieu": "Grèce",
      "era": "ANTIQUE",
      "imgUrl": "https://upload.wikimedia.org/wikipedia/commons/8/88/Plato_Silanion_Musei_Capitolini_MC1377.jpg",
      "stats": {
        "INFLUENCE": 99,
        "RIGUEUR": 70,
        "ANCRAGE": 65,
        "PORTÉE": 99,
        "CLÔTURE": 45,
        "CLARTÉ": 72
      },
      "fr": {
        "oeuvre": "La République",
        "entree": "La réalité sensible n'est qu'une ombre — les Idées éternelles et immuables sont l'être véritable. Platon fonde l'idéalisme occidental et pose que la philosophie est une ascension hors de la caverne vers la lumière du Bien.",
        "concepts": [
          {
            "nom": "LA THÉORIE DES IDÉES",
            "cat": "transcendant",
            "type": "Idéalisme",
            "puissance": 99,
            "desc": "Bascule ontologique totale : les Formes immuables sont plus réelles que tout objet sensible — toute la pensée occidentale en découle."
          },
          {
            "nom": "L'ALLÉGORIE DE LA CAVERNE",
            "cat": "transcendant",
            "type": "Rationalisme",
            "puissance": 95,
            "desc": "Invalide le témoignage des sens depuis un cadre supérieur — seule la raison peut quitter l'ombre pour voir le soleil de la vérité."
          },
          {
            "nom": "LE PHILOSOPHE-ROI",
            "cat": "transcendant",
            "type": "Idéalisme",
            "puissance": 72,
            "desc": "La cité juste exige que le savoir gouverne — extension politique de la même rupture de cadre ontologique."
          }
        ],
        "filiation": {
          "maitres": [
            "SOCRATE",
            "PYTHAGORE"
          ],
          "disciples": [
            "ARISTOTE",
            "PLOTIN"
          ],
          "contre": [
            "SOPHISTES",
            "PROTAGORAS"
          ]
        }
      },
      "en": {
        "oeuvre": "The Republic",
        "entree": "Sensory reality is merely a shadow — the eternal, immutable Forms are true being. Plato founds Western idealism and argues that philosophy is an ascent from the cave toward the light of the Good.",
        "concepts": [
          {
            "nom": "THEORY OF FORMS",
            "cat": "transcendant",
            "type": "Idéalisme",
            "puissance": 99,
            "desc": "A total ontological reversal: immutable Forms are more real than any sensory object — the foundation of Western metaphysics."
          },
          {
            "nom": "ALLEGORY OF THE CAVE",
            "cat": "transcendant",
            "type": "Rationalisme",
            "puissance": 95,
            "desc": "Invalidates sense experience from a higher framework — only reason can leave the shadows and see the sun of truth."
          },
          {
            "nom": "THE PHILOSOPHER-KING",
            "cat": "transcendant",
            "type": "Idéalisme",
            "puissance": 72,
            "desc": "The just city requires knowledge to govern — the political extension of the same ontological rupture."
          }
        ],
        "filiation": {
          "maitres": [
            "SOCRATE",
            "PYTHAGORAS"
          ],
          "disciples": [
            "ARISTOTE",
            "PLOTINUS"
          ],
          "contre": [
            "THE SOPHISTS",
            "PROTAGORAS"
          ]
        }
      }
    },
    {
      "id": "007",
      "nom": "ARISTOTE",
      "full": "Aristote",
      "dates": "384-322 av. J.-C.",
      "types": [
        "Empirisme",
        "Logique",
        "Éthique des Vertus"
      ],
      "lieu": "Macédoine",
      "era": "ANTIQUE",
      "imgUrl": "https://upload.wikimedia.org/wikipedia/commons/a/ae/Aristotle_Altemps_Inv8575.jpg",
      "stats": {
        "INFLUENCE": 99,
        "RIGUEUR": 99,
        "ANCRAGE": 90,
        "PORTÉE": 78,
        "CLÔTURE": 72,
        "CLARTÉ": 75
      },
      "fr": {
        "oeuvre": "Éthique à Nicomaque",
        "entree": "Contre Platon, Aristote ramène la réalité dans les choses elles-mêmes. Il invente la logique formelle, classe le vivant, pense l'éthique comme réalisation de la nature humaine. La scholastique médiévale sera sa longue postérité.",
        "concepts": [
          {
            "nom": "LE SYLLOGISME",
            "cat": "immanent",
            "type": "Logique",
            "puissance": 99,
            "desc": "Première formalisation de la déduction valide — si les prémisses sont vraies, la conclusion ne peut être fausse."
          },
          {
            "nom": "LA EUDAIMONIA",
            "cat": "immanent",
            "type": "Éthique des Vertus",
            "puissance": 88,
            "desc": "Le bonheur est une activité, pas un état : la vie accomplie selon l'excellence propre à la nature humaine."
          },
          {
            "nom": "LES QUATRE CAUSES",
            "cat": "immanent",
            "type": "Empirisme",
            "puissance": 82,
            "desc": "Analyser tout phénomène par ses causes matérielle, formelle, efficiente et finale — grille qui épuise l'explication sans recourir aux Idées séparées."
          }
        ],
        "filiation": {
          "maitres": [
            "PLATON",
            "EUDOXE"
          ],
          "disciples": [
            "ALEXANDRE LE GRAND",
            "THÉOPHRASTE"
          ],
          "contre": [
            "PLATON (théorie des Idées)",
            "HÉRACLITE"
          ]
        }
      },
      "en": {
        "oeuvre": "Nicomachean Ethics",
        "entree": "Against Plato, Aristotle returns reality to things themselves. He invents formal logic, classifies living beings, and conceives ethics as the realization of human nature. Medieval scholasticism is his extended legacy.",
        "concepts": [
          {
            "nom": "THE SYLLOGISM",
            "cat": "immanent",
            "type": "Logique",
            "puissance": 99,
            "desc": "The first formalization of valid deduction — if the premises are true, the conclusion cannot be false."
          },
          {
            "nom": "EUDAIMONIA",
            "cat": "immanent",
            "type": "Éthique des Vertus",
            "puissance": 88,
            "desc": "Happiness is an activity, not a state: the fulfilled life according to the excellence proper to human nature."
          },
          {
            "nom": "THE FOUR CAUSES",
            "cat": "immanent",
            "type": "Empirisme",
            "puissance": 82,
            "desc": "Every phenomenon analyzed through material, formal, efficient, and final causes — explains without resorting to separate Forms."
          }
        ],
        "filiation": {
          "maitres": [
            "PLATON",
            "EUDOXUS"
          ],
          "disciples": [
            "ALEXANDER THE GREAT",
            "THEOPHRASTUS"
          ],
          "contre": [
            "PLATON (theory of Forms)",
            "HERACLITUS"
          ]
        }
      }
    },
    {
      "id": "008",
      "nom": "EPICURE",
      "full": "Épicure",
      "dates": "341-270 av. J.-C.",
      "types": [
        "Épicurisme",
        "Matérialisme"
      ],
      "lieu": "Samos",
      "era": "ANTIQUE",
      "imgUrl": "https://upload.wikimedia.org/wikipedia/commons/8/88/Epikouros_BM_1843.jpg",
      "stats": {
        "INFLUENCE": 82,
        "RIGUEUR": 68,
        "ANCRAGE": 78,
        "PORTÉE": 55,
        "CLÔTURE": 80,
        "CLARTÉ": 88
      },
      "fr": {
        "oeuvre": "Lettre à Ménécée",
        "entree": "Le plaisir est le commencement et la fin de la vie heureuse — mais pas n'importe lequel. Épicure distingue les plaisirs selon leur nature et défend l'ataraxie : la quiétude de l'âme libérée de la peur des dieux et de la mort.",
        "concepts": [
          {
            "nom": "L'ATARAXIE",
            "cat": "immanent",
            "type": "Épicurisme",
            "puissance": 88,
            "desc": "La paix de l'âme comme souverain bien — définition interne du bonheur qui contourne déontologie et vertu au profit de l'équilibre vécu."
          },
          {
            "nom": "LE TÉTRAPHARMAKOS",
            "cat": "immanent",
            "type": "Épicurisme",
            "puissance": 80,
            "desc": "Quadruple remède : les dieux ne nous menacent pas, la mort n'est rien pour nous, le bien est facile à obtenir, le mal est facile à supporter."
          },
          {
            "nom": "L'ATOMISME MORAL",
            "cat": "transcendant",
            "type": "Matérialisme",
            "puissance": 65,
            "desc": "La réalité est faite d'atomes et de vide — bascule ontologique qui dissout la crainte religieuse en réduisant l'âme à de la matière."
          }
        ],
        "filiation": {
          "maitres": [
            "DÉMOCRITE",
            "NAUSIPHANE"
          ],
          "disciples": [
            "LUCRÈCE",
            "MÉTRODORE"
          ],
          "contre": [
            "STOÏCISME",
            "PLATON"
          ]
        }
      },
      "en": {
        "oeuvre": "Letter to Menoeceus",
        "entree": "Pleasure is the beginning and end of the happy life — but not all pleasure. Epicurus distinguishes pleasures by their nature and champions ataraxia: the tranquility of a soul freed from fear of gods and death.",
        "concepts": [
          {
            "nom": "ATARAXIA",
            "cat": "immanent",
            "type": "Épicurisme",
            "puissance": 88,
            "desc": "Peace of the soul as the sovereign good — an internal definition of happiness that bypasses deontology and virtue in favor of lived equilibrium."
          },
          {
            "nom": "THE TETRAPHARMAKOS",
            "cat": "immanent",
            "type": "Épicurisme",
            "puissance": 80,
            "desc": "The four-fold cure: the gods don't threaten us, death is nothing to us, good is easy to obtain, evil easy to endure."
          },
          {
            "nom": "MORAL ATOMISM",
            "cat": "transcendant",
            "type": "Matérialisme",
            "puissance": 65,
            "desc": "Reality is atoms and void — an ontological shift that dissolves religious fear by reducing the soul to matter."
          }
        ],
        "filiation": {
          "maitres": [
            "DEMOCRITUS",
            "NAUSIPHANES"
          ],
          "disciples": [
            "LUCRETIUS",
            "METRODORUS"
          ],
          "contre": [
            "STOICISM",
            "PLATO"
          ]
        }
      }
    },
    {
      "id": "009",
      "nom": "DIOGENE",
      "full": "Diogène de Sinope",
      "dates": "404-323 av. J.-C.",
      "types": [
        "Cynisme"
      ],
      "lieu": "Sinope (Grèce)",
      "era": "ANTIQUE",
      "imgUrl": "https://upload.wikimedia.org/wikipedia/commons/b/b1/Diogenes-statue-Sinop.jpg",
      "stats": {
        "INFLUENCE": 72,
        "RIGUEUR": 28,
        "ANCRAGE": 18,
        "PORTÉE": 88,
        "CLÔTURE": 92,
        "CLARTÉ": 95
      },
      "fr": {
        "oeuvre": "Vie de Diogène (Diogène Laërce)",
        "entree": "Habitant d'un tonneau, mépriseur de conventions, chien de la philosophie. Diogène pratique le cynisme plutôt qu'il ne le théorise : en demandant à Alexandre de s'ôter de son soleil, il résume toute une éthique.",
        "concepts": [
          {
            "nom": "L'ANAIDEIA",
            "cat": "transcendant",
            "type": "Cynisme",
            "puissance": 85,
            "desc": "L'effronterie comme méthode : transgresser délibérément les normes sociales pour montrer qu'elles ne sont que des conventions arbitraires."
          },
          {
            "nom": "L'AUTARCIE",
            "cat": "immanent",
            "type": "Cynisme",
            "puissance": 78,
            "desc": "Se suffire à soi-même est la seule liberté véritable — réduction de tous les besoins au strict minimum naturel."
          },
          {
            "nom": "LA VIE SELON NATURE",
            "cat": "transcendant",
            "type": "Cynisme",
            "puissance": 82,
            "desc": "Toute institution sociale est une corruption du naturel — bascule radicale qui invalide la loi au profit de la physis."
          }
        ],
        "filiation": {
          "maitres": [
            "ANTISTHÈNE",
            "SOCRATE"
          ],
          "disciples": [
            "CRATÈS",
            "ZÉNON DE CITIUM"
          ],
          "contre": [
            "PLATON",
            "ARISTOTE"
          ]
        }
      },
      "en": {
        "oeuvre": "Life of Diogenes (Diogenes Laërtius)",
        "entree": "Barrel-dweller, convention-scorner, philosophy's dog. Diogenes practices cynicism rather than theorizing it: asking Alexander to step out of his sunlight, he summarizes an entire ethics in one gesture.",
        "concepts": [
          {
            "nom": "ANAIDEIA",
            "cat": "transcendant",
            "type": "Cynisme",
            "puissance": 85,
            "desc": "Shamelessness as method: deliberately transgressing social norms to show they are merely arbitrary conventions."
          },
          {
            "nom": "AUTARKY",
            "cat": "immanent",
            "type": "Cynisme",
            "puissance": 78,
            "desc": "Self-sufficiency is the only genuine freedom — reducing all needs to the bare natural minimum."
          },
          {
            "nom": "LIFE ACCORDING TO NATURE",
            "cat": "transcendant",
            "type": "Cynisme",
            "puissance": 82,
            "desc": "Every social institution corrupts nature — a radical shift that invalidates all convention in favor of physis."
          }
        ],
        "filiation": {
          "maitres": [
            "ANTISTHENES",
            "SOCRATE"
          ],
          "disciples": [
            "CRATES",
            "ZENO OF CITIUM"
          ],
          "contre": [
            "PLATON",
            "ARISTOTE"
          ]
        }
      }
    },
    {
      "id": "010",
      "nom": "AUGUSTIN",
      "full": "Saint Augustin",
      "dates": "354-430",
      "types": [
        "Philo. Religion",
        "Rationalisme"
      ],
      "lieu": "Hippone (Algérie)",
      "era": "ANTIQUE",
      "imgUrl": "https://upload.wikimedia.org/wikipedia/commons/6/6b/Sandro_Botticelli_050.jpg",
      "stats": {
        "INFLUENCE": 92,
        "RIGUEUR": 72,
        "ANCRAGE": 78,
        "PORTÉE": 82,
        "CLÔTURE": 55,
        "CLARTÉ": 70
      },
      "fr": {
        "oeuvre": "Les Confessions",
        "entree": "Notre cœur est sans repos jusqu'à ce qu'il trouve son repos en Toi. Augustin synthétise le platonisme et le christianisme, forge la théologie de la grâce, et anticipe Descartes de onze siècles : avant le Cogito, il écrit « si fallor, sum ».",
        "concepts": [
          {
            "nom": "SI FALLOR, SUM",
            "cat": "immanent",
            "type": "Rationalisme",
            "puissance": 85,
            "desc": "Si je me trompe, je suis — certitude de l'existence par la conscience même du doute, précédant Descartes de onze siècles."
          },
          {
            "nom": "LA GRÂCE DIVINE",
            "cat": "transcendant",
            "type": "Philo. Religion",
            "puissance": 88,
            "desc": "Bascule du cadre moral entier : le salut ne dépend pas du mérite humain mais de la grâce imméritée de Dieu — invalide tout pélagianisme."
          },
          {
            "nom": "LA CITÉ DE DIEU",
            "cat": "transcendant",
            "type": "Philo. Religion",
            "puissance": 80,
            "desc": "Oppose cité terrestre et cité céleste — recadrage politique qui subordonne toute autorité humaine à une fin transcendante."
          }
        ],
        "filiation": {
          "maitres": [
            "PLATON",
            "AMBROISE DE MILAN"
          ],
          "disciples": [
            "AQUIN",
            "LUTHER",
            "CALVIN"
          ],
          "contre": [
            "PÉLAGE",
            "MANICHÉISME"
          ]
        }
      },
      "en": {
        "oeuvre": "Confessions",
        "entree": "Our heart is restless until it reposes in Thee. Augustine synthesizes Platonism and Christianity, forges the theology of grace, and anticipates Descartes by eleven centuries: before the Cogito, he writes 'si fallor, sum'.",
        "concepts": [
          {
            "nom": "SI FALLOR, SUM",
            "cat": "immanent",
            "type": "Rationalisme",
            "puissance": 85,
            "desc": "If I am deceived, I am — existence certain through the very act of doubting, preceding Descartes by eleven centuries."
          },
          {
            "nom": "DIVINE GRACE",
            "cat": "transcendant",
            "type": "Philo. Religion",
            "puissance": 88,
            "desc": "A total moral framework shift: salvation depends not on merit but on God's undeserved grace — invalidates all Pelagianism."
          },
          {
            "nom": "THE CITY OF GOD",
            "cat": "transcendant",
            "type": "Philo. Religion",
            "puissance": 80,
            "desc": "Opposes earthly and heavenly cities — a political reframing subordinating all human authority to a transcendent end."
          }
        ],
        "filiation": {
          "maitres": [
            "PLATON",
            "AMBROSE OF MILAN"
          ],
          "disciples": [
            "AQUIN",
            "LUTHER",
            "CALVIN"
          ],
          "contre": [
            "PELAGIUS",
            "MANICHAEISM"
          ]
        }
      }
    },
    {
      "id": "011",
      "nom": "AQUIN",
      "full": "Thomas d'Aquin",
      "dates": "1225-1274",
      "types": [
        "Philo. Religion",
        "Logique"
      ],
      "lieu": "Italie",
      "era": "MÉDIÉVALE",
      "imgUrl": "https://upload.wikimedia.org/wikipedia/commons/e/e8/Thomas_Aquinas_by_Fra_Bartolommeo.jpg",
      "stats": {
        "INFLUENCE": 90,
        "RIGUEUR": 95,
        "ANCRAGE": 90,
        "PORTÉE": 65,
        "CLÔTURE": 60,
        "CLARTÉ": 52
      },
      "fr": {
        "oeuvre": "Somme Théologique",
        "entree": "La raison et la foi ne s'opposent pas — elles forment une hiérarchie. Aristote christianisé par Aquin devient la colonne vertébrale de la scholastique. Les cinq voies prouvent l'existence de Dieu par la seule raison naturelle.",
        "concepts": [
          {
            "nom": "LES CINQ VOIES",
            "cat": "immanent",
            "type": "Philo. Religion",
            "puissance": 88,
            "desc": "Cinq preuves cosmologiques de l'existence de Dieu par la raison : mouvement, causalité, contingence, degrés de perfection, finalité."
          },
          {
            "nom": "RAISON ET FOI",
            "cat": "transcendant",
            "type": "Philo. Religion",
            "puissance": 82,
            "desc": "La foi achève ce que la raison commence — bascule qui invalide autant le fidéisme que le rationalisme pur."
          },
          {
            "nom": "LE DROIT NATUREL",
            "cat": "immanent",
            "type": "Logique",
            "puissance": 75,
            "desc": "Loi morale universelle inscrite dans la nature humaine par Dieu — argument interne qui prétend ancrer le devoir dans l'être."
          }
        ],
        "filiation": {
          "maitres": [
            "AUGUSTIN",
            "ARISTOTE",
            "ALBERT LE GRAND"
          ],
          "disciples": [
            "DUNS SCOT",
            "SUÁREZ"
          ],
          "contre": [
            "AVERROÈS",
            "WILLIAM D'OCKHAM"
          ]
        }
      },
      "en": {
        "oeuvre": "Summa Theologica",
        "entree": "Reason and faith do not oppose each other — they form a hierarchy. Aristotle Christianized by Aquinas becomes the backbone of scholasticism. The five ways prove God's existence through reason alone.",
        "concepts": [
          {
            "nom": "THE FIVE WAYS",
            "cat": "immanent",
            "type": "Philo. Religion",
            "puissance": 88,
            "desc": "Five cosmological proofs of God's existence through reason: motion, causation, contingency, degrees of perfection, finality."
          },
          {
            "nom": "REASON AND FAITH",
            "cat": "transcendant",
            "type": "Philo. Religion",
            "puissance": 82,
            "desc": "Faith completes what reason begins — a shift that invalidates both pure fideism and pure rationalism."
          },
          {
            "nom": "NATURAL LAW",
            "cat": "immanent",
            "type": "Logique",
            "puissance": 75,
            "desc": "Universal moral law inscribed in human nature by God — an internal argument claiming to ground duty in being."
          }
        ],
        "filiation": {
          "maitres": [
            "AUGUSTIN",
            "ARISTOTLE",
            "ALBERT THE GREAT"
          ],
          "disciples": [
            "DUNS SCOTUS",
            "SUÁREZ"
          ],
          "contre": [
            "AVERROES",
            "WILLIAM OF OCKHAM"
          ]
        }
      }
    },
    {
      "id": "012",
      "nom": "SPINOZA",
      "full": "Baruch Spinoza",
      "dates": "1632-1677",
      "types": [
        "Panthéisme",
        "Rationalisme"
      ],
      "lieu": "Pays-Bas",
      "era": "MODERNE",
      "imgUrl": "https://upload.wikimedia.org/wikipedia/commons/e/ea/Spinoza.jpg",
      "stats": {
        "INFLUENCE": 88,
        "RIGUEUR": 95,
        "ANCRAGE": 85,
        "PORTÉE": 75,
        "CLÔTURE": 50,
        "CLARTÉ": 35
      },
      "fr": {
        "oeuvre": "L'Éthique",
        "entree": "Excommunié à 23 ans, Spinoza démontre la philosophie à la manière d'Euclide. Dieu et la Nature sont une seule et même substance. Il n'y a pas de libre arbitre, seulement la nécessité — et pourtant la liberté est possible.",
        "concepts": [
          {
            "nom": "DEUS SIVE NATURA",
            "cat": "transcendant",
            "type": "Panthéisme",
            "puissance": 95,
            "desc": "Dieu, c'est la Nature — rien d'autre. Bascule totale du cadre théologique : supprime le Dieu personnel, la création et la Providence."
          },
          {
            "nom": "LA SUBSTANCE UNIQUE",
            "cat": "immanent",
            "type": "Rationalisme",
            "puissance": 88,
            "desc": "Il n'existe qu'une seule substance aux attributs infinis — réfutation interne du dualisme cartésien depuis une ontologie plus cohérente."
          },
          {
            "nom": "CONATUS",
            "cat": "immanent",
            "type": "Panthéisme",
            "puissance": 78,
            "desc": "Chaque chose persiste dans son être — l'effort pour persévérer dans l'existence est l'essence même de tout ce qui est."
          }
        ],
        "filiation": {
          "maitres": [
            "DESCARTES",
            "GIORDANO BRUNO"
          ],
          "disciples": [
            "HEGEL",
            "MARX",
            "NIETZSCHE"
          ],
          "contre": [
            "DESCARTES (dualisme)",
            "LEIBNIZ"
          ]
        }
      },
      "en": {
        "oeuvre": "Ethics",
        "entree": "Excommunicated at 23, Spinoza proves philosophy in the manner of Euclid. God and Nature are one and the same substance. There is no free will, only necessity — and yet freedom is possible.",
        "concepts": [
          {
            "nom": "DEUS SIVE NATURA",
            "cat": "transcendant",
            "type": "Panthéisme",
            "puissance": 95,
            "desc": "God is Nature — and nothing else. A total theological rupture: removes the personal God, creation, and Providence."
          },
          {
            "nom": "SINGLE SUBSTANCE",
            "cat": "immanent",
            "type": "Rationalisme",
            "puissance": 88,
            "desc": "There is only one substance with infinite attributes — an internal refutation of Cartesian dualism from a more coherent ontology."
          },
          {
            "nom": "CONATUS",
            "cat": "immanent",
            "type": "Panthéisme",
            "puissance": 78,
            "desc": "Each thing persists in its being — the effort to persevere in existence is the very essence of everything that is."
          }
        ],
        "filiation": {
          "maitres": [
            "DESCARTES",
            "GIORDANO BRUNO"
          ],
          "disciples": [
            "HEGEL",
            "MARX",
            "NIETZSCHE"
          ],
          "contre": [
            "DESCARTES (dualism)",
            "LEIBNIZ"
          ]
        }
      }
    },
    {
      "id": "013",
      "nom": "LOCKE",
      "full": "John Locke",
      "dates": "1632-1704",
      "types": [
        "Empirisme",
        "Libéralisme"
      ],
      "lieu": "Angleterre",
      "era": "MODERNE",
      "imgUrl": "https://upload.wikimedia.org/wikipedia/commons/d/d6/John_Locke.jpg",
      "stats": {
        "INFLUENCE": 90,
        "RIGUEUR": 72,
        "ANCRAGE": 62,
        "PORTÉE": 78,
        "CLÔTURE": 55,
        "CLARTÉ": 82
      },
      "fr": {
        "oeuvre": "Essai sur l'entendement humain",
        "entree": "L'esprit est une table rase. Tout vient de l'expérience — pas d'idées innées, pas d'autorité divine. Locke fonde l'empirisme moderne et pose les droits naturels imprescriptibles qui inspireront les révolutions américaine et française.",
        "concepts": [
          {
            "nom": "LA TABULA RASA",
            "cat": "immanent",
            "type": "Empirisme",
            "puissance": 88,
            "desc": "L'esprit naît vide — toute connaissance vient de l'expérience sensorielle. Réfutation interne des idées innées cartésiennes et leibniziennes."
          },
          {
            "nom": "LES DROITS NATURELS",
            "cat": "transcendant",
            "type": "Libéralisme",
            "puissance": 90,
            "desc": "Vie, liberté, propriété comme droits antérieurs à tout État — bascule politique qui invalide le pouvoir absolu par nature."
          },
          {
            "nom": "LE CONSENTEMENT",
            "cat": "immanent",
            "type": "Libéralisme",
            "puissance": 82,
            "desc": "L'autorité légitime repose sur le consentement des gouvernés — argument interne qui fonde le droit à la résistance."
          }
        ],
        "filiation": {
          "maitres": [
            "BACON",
            "BOYLE",
            "NEWTON"
          ],
          "disciples": [
            "HUME",
            "VOLTAIRE",
            "JEFFERSON"
          ],
          "contre": [
            "DESCARTES",
            "HOBBES",
            "FILMER"
          ]
        }
      },
      "en": {
        "oeuvre": "Essay Concerning Human Understanding",
        "entree": "The mind is a blank slate. Everything comes from experience — no innate ideas, no divine authority. Locke founds modern empiricism and establishes the natural rights that will inspire the American and French revolutions.",
        "concepts": [
          {
            "nom": "TABULA RASA",
            "cat": "immanent",
            "type": "Empirisme",
            "puissance": 88,
            "desc": "The mind is born empty — all knowledge comes from sensory experience. An internal refutation of Cartesian and Leibnizian innate ideas."
          },
          {
            "nom": "NATURAL RIGHTS",
            "cat": "transcendant",
            "type": "Libéralisme",
            "puissance": 90,
            "desc": "Life, liberty, property as rights prior to any state — a framework shift that invalidates absolute power by nature."
          },
          {
            "nom": "CONSENT",
            "cat": "immanent",
            "type": "Libéralisme",
            "puissance": 82,
            "desc": "Legitimate political authority rests on the consent of the governed — grounds the right to resist tyranny."
          }
        ],
        "filiation": {
          "maitres": [
            "BACON",
            "BOYLE",
            "NEWTON"
          ],
          "disciples": [
            "HUME",
            "VOLTAIRE",
            "JEFFERSON"
          ],
          "contre": [
            "DESCARTES",
            "HOBBES",
            "FILMER"
          ]
        }
      }
    },
    {
      "id": "014",
      "nom": "KANT",
      "full": "Emmanuel Kant",
      "dates": "1724-1804",
      "types": [
        "Rationalisme",
        "Déontologie"
      ],
      "lieu": "Prusse",
      "era": "MODERNE",
      "imgUrl": "https://upload.wikimedia.org/wikipedia/commons/f/f2/Kant_gemaelde_3.jpg",
      "stats": {
        "INFLUENCE": 99,
        "RIGUEUR": 99,
        "ANCRAGE": 82,
        "PORTÉE": 90,
        "CLÔTURE": 65,
        "CLARTÉ": 22
      },
      "fr": {
        "oeuvre": "Critique de la Raison Pure",
        "entree": "Hume le réveille de son sommeil dogmatique. Kant réalise la révolution copernicienne en philosophie : ce n'est pas notre connaissance qui se règle sur les objets, mais les objets qui se règlent sur notre façon de connaître.",
        "concepts": [
          {
            "nom": "RÉVOLUTION COPERNICIENNE",
            "cat": "transcendant",
            "type": "Rationalisme",
            "puissance": 99,
            "desc": "Bascule du cadre épistémologique entier : le sujet structure l'objet, pas l'inverse — ni dogmatisme ni scepticisme pur."
          },
          {
            "nom": "L'IMPÉRATIF CATÉGORIQUE",
            "cat": "immanent",
            "type": "Déontologie",
            "puissance": 95,
            "desc": "Agis uniquement selon la maxime dont tu peux vouloir qu'elle devienne une loi universelle — la morale est la raison en acte."
          },
          {
            "nom": "LES FORMES A PRIORI",
            "cat": "immanent",
            "type": "Rationalisme",
            "puissance": 88,
            "desc": "Espace, temps, catégories : des structures qui précèdent toute expérience et la rendent possible."
          }
        ],
        "filiation": {
          "maitres": [
            "HUME",
            "LEIBNIZ",
            "ROUSSEAU"
          ],
          "disciples": [
            "FICHTE",
            "SCHELLING",
            "HEGEL"
          ],
          "contre": [
            "HUME (radicalisme)",
            "EMPIRISME PUR"
          ]
        }
      },
      "en": {
        "oeuvre": "Critique of Pure Reason",
        "entree": "Hume awakens him from dogmatic slumber. Kant enacts the Copernican revolution in philosophy: it is not our knowledge that conforms to objects, but objects that conform to our way of knowing.",
        "concepts": [
          {
            "nom": "COPERNICAN REVOLUTION",
            "cat": "transcendant",
            "type": "Rationalisme",
            "puissance": 99,
            "desc": "A total epistemological rupture: the subject structures the object, not the reverse — neither pure dogmatism nor pure skepticism."
          },
          {
            "nom": "CATEGORICAL IMPERATIVE",
            "cat": "immanent",
            "type": "Déontologie",
            "puissance": 95,
            "desc": "Act only according to the maxim you can will to become a universal law — morality is reason in action, independent of outcome."
          },
          {
            "nom": "A PRIORI FORMS",
            "cat": "immanent",
            "type": "Rationalisme",
            "puissance": 88,
            "desc": "Space, time, categories: structures that precede all experience and make it possible."
          }
        ],
        "filiation": {
          "maitres": [
            "HUME",
            "LEIBNIZ",
            "ROUSSEAU"
          ],
          "disciples": [
            "FICHTE",
            "SCHELLING",
            "HEGEL"
          ],
          "contre": [
            "HUME (radicalism)",
            "PURE EMPIRICISM"
          ]
        }
      }
    },
    {
      "id": "015",
      "nom": "ROUSSEAU",
      "full": "Jean-Jacques Rousseau",
      "dates": "1712-1778",
      "types": [
        "Contractualisme",
        "Républicanisme"
      ],
      "lieu": "Genève",
      "era": "MODERNE",
      "imgUrl": "https://upload.wikimedia.org/wikipedia/commons/a/a8/Jean-Jacques_Rousseau_%28painted_portrait%29.jpg",
      "stats": {
        "INFLUENCE": 90,
        "RIGUEUR": 58,
        "ANCRAGE": 52,
        "PORTÉE": 88,
        "CLÔTURE": 40,
        "CLARTÉ": 80
      },
      "fr": {
        "oeuvre": "Du Contrat Social",
        "entree": "L'homme est né libre, et partout il est dans les fers. Rousseau retourne Hobbes : la nature est bonne, c'est la société qui corrompt. La volonté générale, seule légitimité du pouvoir, ne peut aliéner sans détruire la liberté qu'elle garantit.",
        "concepts": [
          {
            "nom": "LA VOLONTÉ GÉNÉRALE",
            "cat": "immanent",
            "type": "Républicanisme",
            "puissance": 90,
            "desc": "La volonté du corps social comme un tout n'est pas la somme des volontés particulières — fondement interne de la légitimité politique."
          },
          {
            "nom": "LE CONTRAT SOCIAL",
            "cat": "transcendant",
            "type": "Contractualisme",
            "puissance": 88,
            "desc": "L'autorité ne vient ni de Dieu ni de la force mais du consentement collectif librement donné — bascule du cadre politique complet."
          },
          {
            "nom": "L'HOMME NATUREL",
            "cat": "transcendant",
            "type": "Contractualisme",
            "puissance": 78,
            "desc": "L'état de nature est bon et libre — invalide toute théorie du péché originel ou de la méchanceté naturelle de Hobbes."
          }
        ],
        "filiation": {
          "maitres": [
            "LOCKE",
            "GROTIUS"
          ],
          "disciples": [
            "KANT",
            "ROBESPIERRE",
            "MARX"
          ],
          "contre": [
            "HOBBES",
            "VOLTAIRE"
          ]
        }
      },
      "en": {
        "oeuvre": "The Social Contract",
        "entree": "Man is born free, and everywhere he is in chains. Rousseau inverts Hobbes: nature is good, society corrupts. The general will, the sole source of political legitimacy, cannot alienate without destroying the freedom it guarantees.",
        "concepts": [
          {
            "nom": "THE GENERAL WILL",
            "cat": "immanent",
            "type": "Républicanisme",
            "puissance": 90,
            "desc": "The will of the social body as a whole is not the sum of particular wills — the internal foundation of political legitimacy."
          },
          {
            "nom": "THE SOCIAL CONTRACT",
            "cat": "transcendant",
            "type": "Contractualisme",
            "puissance": 88,
            "desc": "Authority comes neither from God nor force but from freely given collective consent — a complete political framework shift."
          },
          {
            "nom": "NATURAL MAN",
            "cat": "transcendant",
            "type": "Contractualisme",
            "puissance": 78,
            "desc": "The state of nature is good and free — invalidates theories of original sin or Hobbes's natural wickedness."
          }
        ],
        "filiation": {
          "maitres": [
            "LOCKE",
            "GROTIUS"
          ],
          "disciples": [
            "KANT",
            "ROBESPIERRE",
            "MARX"
          ],
          "contre": [
            "HOBBES",
            "VOLTAIRE"
          ]
        }
      }
    },
    {
      "id": "016",
      "nom": "HEGEL",
      "full": "Georg Wilhelm Friedrich Hegel",
      "dates": "1770-1831",
      "types": [
        "Idéalisme",
        "Dialectique"
      ],
      "lieu": "Allemagne",
      "era": "MODERNE",
      "imgUrl": "https://upload.wikimedia.org/wikipedia/commons/a/ac/Georg_Wilhelm_Friedrich_Hegel00.jpg",
      "stats": {
        "INFLUENCE": 95,
        "RIGUEUR": 72,
        "ANCRAGE": 78,
        "PORTÉE": 95,
        "CLÔTURE": 70,
        "CLARTÉ": 15
      },
      "fr": {
        "oeuvre": "Phénoménologie de l'Esprit",
        "entree": "La réalité est l'Esprit se réalisant dans l'histoire. La dialectique hégélienne absorbe toute contradiction pour en faire un moteur. Thèse, antithèse, synthèse : rien n'est fixe, tout est devenir. L'histoire du monde est le tribunal du monde.",
        "concepts": [
          {
            "nom": "LA DIALECTIQUE",
            "cat": "immanent",
            "type": "Dialectique",
            "puissance": 95,
            "desc": "Toute réalité se développe par contradiction interne — thèse et antithèse engendrent une synthèse qui les dépasse et les conserve (Aufhebung)."
          },
          {
            "nom": "L'ESPRIT ABSOLU",
            "cat": "transcendant",
            "type": "Idéalisme",
            "puissance": 90,
            "desc": "La réalité entière est l'auto-développement de l'Esprit — bascule idéaliste qui fait de l'histoire universelle un processus logique."
          },
          {
            "nom": "MAÎTRE ET ESCLAVE",
            "cat": "immanent",
            "type": "Idéalisme",
            "puissance": 88,
            "desc": "La conscience ne se réalise qu'en étant reconnue par une autre — le soi ne se connaît qu'à travers l'autre et le conflit."
          }
        ],
        "filiation": {
          "maitres": [
            "KANT",
            "FICHTE",
            "SCHELLING"
          ],
          "disciples": [
            "MARX",
            "KIERKEGAARD (réaction)",
            "NIETZSCHE (réaction)"
          ],
          "contre": [
            "SCHOPENHAUER",
            "KANT (dépasse)"
          ]
        }
      },
      "en": {
        "oeuvre": "Phenomenology of Spirit",
        "entree": "Reality is Spirit realizing itself through history. Hegelian dialectics absorbs every contradiction to make it an engine. Thesis, antithesis, synthesis: nothing is fixed, all is becoming. World history is the world's court of judgment.",
        "concepts": [
          {
            "nom": "DIALECTICS",
            "cat": "immanent",
            "type": "Dialectique",
            "puissance": 95,
            "desc": "All reality develops through internal contradiction — thesis and antithesis generate a synthesis that surpasses and preserves them (Aufhebung)."
          },
          {
            "nom": "ABSOLUTE SPIRIT",
            "cat": "transcendant",
            "type": "Idéalisme",
            "puissance": 90,
            "desc": "All of reality is the self-development of Spirit — an idealist shift that makes universal history a logical process."
          },
          {
            "nom": "MASTER AND SLAVE",
            "cat": "immanent",
            "type": "Idéalisme",
            "puissance": 88,
            "desc": "Consciousness only realizes itself through recognition by another — the self knows itself only through conflict with the other."
          }
        ],
        "filiation": {
          "maitres": [
            "KANT",
            "FICHTE",
            "SCHELLING"
          ],
          "disciples": [
            "MARX",
            "KIERKEGAARD (reaction)",
            "NIETZSCHE (reaction)"
          ],
          "contre": [
            "SCHOPENHAUER",
            "KANT (surpassed)"
          ]
        }
      }
    },
    {
      "id": "017",
      "nom": "MARX",
      "full": "Karl Marx",
      "dates": "1818-1883",
      "types": [
        "Marxisme",
        "Dialectique",
        "Matérialisme"
      ],
      "lieu": "Prusse",
      "era": "CONTEMPORAINE",
      "imgUrl": "https://upload.wikimedia.org/wikipedia/commons/d/d4/Karl_Marx_001.jpg",
      "stats": {
        "INFLUENCE": 98,
        "RIGUEUR": 72,
        "ANCRAGE": 65,
        "PORTÉE": 92,
        "CLÔTURE": 50,
        "CLARTÉ": 68
      },
      "fr": {
        "oeuvre": "Le Capital",
        "entree": "Les philosophes n'ont fait qu'interpréter le monde ; il s'agit de le transformer. Marx renverse Hegel sur la tête : ce sont les conditions matérielles, pas l'Esprit, qui déterminent la conscience. Le capitalisme porte en lui les contradictions qui le feront s'effondrer.",
        "concepts": [
          {
            "nom": "LE MATÉRIALISME HISTORIQUE",
            "cat": "transcendant",
            "type": "Matérialisme",
            "puissance": 95,
            "desc": "Bascule du cadre hégélien : l'histoire n'est pas le développement de l'Esprit mais la lutte des classes — l'économie détermine les idées."
          },
          {
            "nom": "LA PLUS-VALUE",
            "cat": "immanent",
            "type": "Marxisme",
            "puissance": 88,
            "desc": "Le profit vient du travail non payé — argument interne à l'économie politique qui démonte de l'intérieur la légitimité du capitalisme."
          },
          {
            "nom": "LA PRAXIS",
            "cat": "transcendant",
            "type": "Marxisme",
            "puissance": 85,
            "desc": "La philosophie n'est vraie que lorsqu'elle se réalise dans la transformation effective du monde — théorie et pratique sont inséparables."
          }
        ],
        "filiation": {
          "maitres": [
            "HEGEL",
            "FEUERBACH",
            "SMITH",
            "RICARDO"
          ],
          "disciples": [
            "LÉNINE",
            "GRAMSCI",
            "LUKÁCS"
          ],
          "contre": [
            "PROUDHON",
            "BAKOUNINE",
            "LASSALLE"
          ]
        }
      },
      "en": {
        "oeuvre": "Capital",
        "entree": "Philosophers have only interpreted the world; the point is to change it. Marx turns Hegel upside down: it is material conditions, not Spirit, that determine consciousness. Capitalism carries within itself the contradictions that will bring about its collapse.",
        "concepts": [
          {
            "nom": "HISTORICAL MATERIALISM",
            "cat": "transcendant",
            "type": "Matérialisme",
            "puissance": 95,
            "desc": "A reversal of the Hegelian framework: history is not the development of Spirit but class struggle — economic conditions determine ideas."
          },
          {
            "nom": "SURPLUS VALUE",
            "cat": "immanent",
            "type": "Marxisme",
            "puissance": 88,
            "desc": "Profit comes from unpaid labor — an internal political economy argument that dismantles capitalism's legitimacy from within."
          },
          {
            "nom": "PRAXIS",
            "cat": "transcendant",
            "type": "Marxisme",
            "puissance": 85,
            "desc": "Philosophy is only true when it realizes itself in the effective transformation of the world — theory and practice are inseparable."
          }
        ],
        "filiation": {
          "maitres": [
            "HEGEL",
            "FEUERBACH",
            "SMITH",
            "RICARDO"
          ],
          "disciples": [
            "LENIN",
            "GRAMSCI",
            "LUKÁCS"
          ],
          "contre": [
            "PROUDHON",
            "BAKUNIN",
            "LASSALLE"
          ]
        }
      }
    },
    {
      "id": "018",
      "nom": "HUSSERL",
      "full": "Edmund Husserl",
      "dates": "1859-1938",
      "types": [
        "Phénoménologie",
        "Rationalisme"
      ],
      "lieu": "Autriche-Hongrie",
      "era": "CONTEMPORAINE",
      "imgUrl": "https://upload.wikimedia.org/wikipedia/commons/f/f8/Edmund_Husserl_1910s.jpg",
      "stats": {
        "INFLUENCE": 82,
        "RIGUEUR": 88,
        "ANCRAGE": 72,
        "PORTÉE": 70,
        "CLÔTURE": 58,
        "CLARTÉ": 32
      },
      "fr": {
        "oeuvre": "Idées directrices (Ideen)",
        "entree": "Retour aux choses elles-mêmes. Husserl fonde la phénoménologie comme science rigoureuse : mettre le monde entre parenthèses pour décrire purement ce qui apparaît à la conscience. La conscience est toujours conscience de quelque chose.",
        "concepts": [
          {
            "nom": "L'INTENTIONNALITÉ",
            "cat": "immanent",
            "type": "Phénoménologie",
            "puissance": 90,
            "desc": "La conscience est toujours conscience de quelque chose — structure fondamentale qui relie irréductiblement sujet et objet."
          },
          {
            "nom": "L'EPOCHÉ",
            "cat": "immanent",
            "type": "Phénoménologie",
            "puissance": 82,
            "desc": "Suspension du jugement sur l'existence du monde — méthode qui permet de décrire le pur flux de l'expérience sans présuppositions."
          },
          {
            "nom": "LE MONDE VÉCU (LEBENSWELT)",
            "cat": "transcendant",
            "type": "Phénoménologie",
            "puissance": 78,
            "desc": "Le monde de la vie précède et fonde les sciences — bascule contre le scientisme positiviste."
          }
        ],
        "filiation": {
          "maitres": [
            "BRENTANO",
            "FREGE"
          ],
          "disciples": [
            "HEIDEGGER",
            "SARTRE",
            "MERLEAU-PONTY"
          ],
          "contre": [
            "PSYCHOLOGISME",
            "POSITIVISME"
          ]
        }
      },
      "en": {
        "oeuvre": "Ideas (Ideen)",
        "entree": "Back to the things themselves. Husserl founds phenomenology as a rigorous science: bracketing the world to describe purely what appears to consciousness. Consciousness is always consciousness of something.",
        "concepts": [
          {
            "nom": "INTENTIONALITY",
            "cat": "immanent",
            "type": "Phénoménologie",
            "puissance": 90,
            "desc": "Consciousness is always consciousness of something — the fundamental structure irreducibly connecting subject and object."
          },
          {
            "nom": "EPOCHÉ",
            "cat": "immanent",
            "type": "Phénoménologie",
            "puissance": 82,
            "desc": "Suspension of judgment on the existence of the world — allows pure description of experience without presuppositions."
          },
          {
            "nom": "LIFEWORLD (LEBENSWELT)",
            "cat": "transcendant",
            "type": "Phénoménologie",
            "puissance": 78,
            "desc": "The lifeworld precedes and grounds the sciences — a shift against positivist scientism."
          }
        ],
        "filiation": {
          "maitres": [
            "BRENTANO",
            "FREGE"
          ],
          "disciples": [
            "HEIDEGGER",
            "SARTRE",
            "MERLEAU-PONTY"
          ],
          "contre": [
            "PSYCHOLOGISM",
            "POSITIVISM"
          ]
        }
      }
    },
    {
      "id": "019",
      "nom": "HEIDEGGER",
      "full": "Martin Heidegger",
      "dates": "1889-1976",
      "types": [
        "Existentialisme",
        "Phénoménologie"
      ],
      "lieu": "Allemagne",
      "era": "CONTEMPORAINE",
      "imgUrl": "https://upload.wikimedia.org/wikipedia/commons/9/9f/Martin_Heidegger_portrait.jpg",
      "stats": {
        "INFLUENCE": 90,
        "RIGUEUR": 42,
        "ANCRAGE": 55,
        "PORTÉE": 90,
        "CLÔTURE": 35,
        "CLARTÉ": 12
      },
      "fr": {
        "oeuvre": "Être et Temps",
        "entree": "La philosophie a oublié la question de l'Être. Heidegger reprend tout depuis le début : l'Être-là (Dasein) est jeté dans le monde, temporel, confronté à sa propre mort. L'authenticité exige d'assumer cette finitude sans la fuir.",
        "concepts": [
          {
            "nom": "L'ÊTRE-DANS-LE-MONDE",
            "cat": "transcendant",
            "type": "Phénoménologie",
            "puissance": 90,
            "desc": "Le Dasein n'est pas d'abord un sujet connaissant mais un être déjà engagé dans un monde pratique — bascule du cadre sujet/objet."
          },
          {
            "nom": "L'ÊTRE-VERS-LA-MORT",
            "cat": "immanent",
            "type": "Existentialisme",
            "puissance": 88,
            "desc": "La mort comme possibilité la plus propre — seule son anticipation lucide permet l'authenticité face à l'inauthentique quotidien."
          },
          {
            "nom": "LA QUESTION DE L'ÊTRE",
            "cat": "transcendant",
            "type": "Phénoménologie",
            "puissance": 85,
            "desc": "Toute la tradition a oublié la différence ontologique (être vs étant) — Heidegger change le cadre entier de la philosophie occidentale."
          }
        ],
        "filiation": {
          "maitres": [
            "HUSSERL",
            "ARISTOTE",
            "KIERKEGAARD"
          ],
          "disciples": [
            "SARTRE",
            "GADAMER",
            "DERRIDA"
          ],
          "contre": [
            "HUSSERL (dépasse)",
            "NÉOKANTISME"
          ]
        }
      },
      "en": {
        "oeuvre": "Being and Time",
        "entree": "Philosophy has forgotten the question of Being. Heidegger starts over: Dasein is thrown into the world, temporal, confronted with its own death. Authenticity demands owning this finitude without fleeing it.",
        "concepts": [
          {
            "nom": "BEING-IN-THE-WORLD",
            "cat": "transcendant",
            "type": "Phénoménologie",
            "puissance": 90,
            "desc": "Dasein is not primarily a knowing subject but a being already engaged in a practical world — a shift past the subject/object frame."
          },
          {
            "nom": "BEING-TOWARD-DEATH",
            "cat": "immanent",
            "type": "Existentialisme",
            "puissance": 88,
            "desc": "Death as the ownmost possibility — only its lucid anticipation enables authenticity against the inauthenticity of everyday life."
          },
          {
            "nom": "THE QUESTION OF BEING",
            "cat": "transcendant",
            "type": "Phénoménologie",
            "puissance": 85,
            "desc": "The entire tradition forgot the ontological difference (Being vs beings) — Heidegger shifts the whole frame of Western philosophy."
          }
        ],
        "filiation": {
          "maitres": [
            "HUSSERL",
            "ARISTOTLE",
            "KIERKEGAARD"
          ],
          "disciples": [
            "SARTRE",
            "GADAMER",
            "DERRIDA"
          ],
          "contre": [
            "HUSSERL (surpassed)",
            "NEO-KANTIANISM"
          ]
        }
      }
    },
    {
      "id": "020",
      "nom": "SARTRE",
      "full": "Jean-Paul Sartre",
      "dates": "1905-1980",
      "types": [
        "Existentialisme"
      ],
      "lieu": "France",
      "era": "CONTEMPORAINE",
      "imgUrl": "https://upload.wikimedia.org/wikipedia/commons/a/ad/Jean-Paul_Sartre_FP.jpg",
      "stats": {
        "INFLUENCE": 92,
        "RIGUEUR": 65,
        "ANCRAGE": 45,
        "PORTÉE": 90,
        "CLÔTURE": 35,
        "CLARTÉ": 72
      },
      "fr": {
        "oeuvre": "L'Être et le Néant",
        "entree": "L'existence précède l'essence. Condamné à être libre, l'homme n'a aucune nature donnée d'avance — il est ce qu'il se fait. La mauvaise foi est le refus de cette liberté absolue en se prenant pour une chose.",
        "concepts": [
          {
            "nom": "L'EXISTENCE PRÉCÈDE L'ESSENCE",
            "cat": "transcendant",
            "type": "Existentialisme",
            "puissance": 99,
            "desc": "Bascule anthropologique totale : l'homme n'a pas de nature fixe — il se définit par ses choix. Invalide tout essentialisme moral ou religieux."
          },
          {
            "nom": "LA MAUVAISE FOI",
            "cat": "immanent",
            "type": "Existentialisme",
            "puissance": 88,
            "desc": "Se mentir à soi-même sur sa propre liberté — fuir l'angoisse de la condition humaine en prétendant qu'on n'a pas le choix."
          },
          {
            "nom": "L'ENGAGEMENT",
            "cat": "immanent",
            "type": "Existentialisme",
            "puissance": 82,
            "desc": "Ne pas s'engager est encore un choix qui engage — l'authenticité exige de prendre position, il n'y a pas de neutralité possible."
          }
        ],
        "filiation": {
          "maitres": [
            "HEIDEGGER",
            "HUSSERL",
            "HEGEL"
          ],
          "disciples": [
            "FANON",
            "BEAUVOIR"
          ],
          "contre": [
            "CAMUS",
            "STRUCTURALISME",
            "ALTHUSSER"
          ]
        }
      },
      "en": {
        "oeuvre": "Being and Nothingness",
        "entree": "Existence precedes essence. Condemned to be free, man has no nature given in advance — he is what he makes of himself. Bad faith is the refusal of this absolute freedom by treating oneself as a thing.",
        "concepts": [
          {
            "nom": "EXISTENCE PRECEDES ESSENCE",
            "cat": "transcendant",
            "type": "Existentialisme",
            "puissance": 99,
            "desc": "A total anthropological shift: man has no fixed nature — he defines himself through his choices. Invalidates all moral or religious essentialism."
          },
          {
            "nom": "BAD FAITH",
            "cat": "immanent",
            "type": "Existentialisme",
            "puissance": 88,
            "desc": "Lying to oneself about one's own freedom — fleeing the anguish of the human condition by pretending one has no choice."
          },
          {
            "nom": "COMMITMENT",
            "cat": "immanent",
            "type": "Existentialisme",
            "puissance": 82,
            "desc": "Not engaging is still a choice — authenticity demands taking a position; there is no possible neutrality."
          }
        ],
        "filiation": {
          "maitres": [
            "HEIDEGGER",
            "HUSSERL",
            "HEGEL"
          ],
          "disciples": [
            "FANON",
            "BEAUVOIR"
          ],
          "contre": [
            "CAMUS",
            "STRUCTURALISM",
            "ALTHUSSER"
          ]
        }
      }
    },
    {
      "id": "021",
      "nom": "BEAUVOIR",
      "full": "Simone de Beauvoir",
      "dates": "1908-1986",
      "types": [
        "Féminisme",
        "Existentialisme"
      ],
      "lieu": "France",
      "era": "CONTEMPORAINE",
      "imgUrl": "https://upload.wikimedia.org/wikipedia/commons/a/ab/Simone_de_Beauvoir2.png",
      "stats": {
        "INFLUENCE": 90,
        "RIGUEUR": 75,
        "ANCRAGE": 65,
        "PORTÉE": 90,
        "CLÔTURE": 55,
        "CLARTÉ": 78
      },
      "fr": {
        "oeuvre": "Le Deuxième Sexe",
        "entree": "On ne naît pas femme, on le devient. Beauvoir applique l'existentialisme à la condition féminine : la femme est construite comme l'Autre de l'homme. Cette altérité n'est pas naturelle — elle est produite par l'histoire et les structures sociales.",
        "concepts": [
          {
            "nom": "ON NE NAÎT PAS FEMME",
            "cat": "transcendant",
            "type": "Féminisme",
            "puissance": 99,
            "desc": "Bascule du cadre biologiste : le féminin est une construction sociale, pas une essence — invalide tout naturalisme sexiste."
          },
          {
            "nom": "L'ALTÉRITÉ ABSOLUE",
            "cat": "transcendant",
            "type": "Féminisme",
            "puissance": 88,
            "desc": "La femme construite comme l'Autre de l'homme — recadrage existentialiste qui révèle la dissymétrie comme produit historique."
          },
          {
            "nom": "L'ÉTHIQUE DE L'AMBIGUÏTÉ",
            "cat": "immanent",
            "type": "Existentialisme",
            "puissance": 80,
            "desc": "Assumer l'ambiguïté de la condition humaine — ni pur en-soi ni pur pour-soi — comme fondement d'une éthique concrète de la liberté."
          }
        ],
        "filiation": {
          "maitres": [
            "SARTRE",
            "HEGEL",
            "MERLEAU-PONTY"
          ],
          "disciples": [
            "BUTLER",
            "IRIGARAY",
            "HOOKS"
          ],
          "contre": [
            "FREUD",
            "ESSENTIALISME DE GENRE"
          ]
        }
      },
      "en": {
        "oeuvre": "The Second Sex",
        "entree": "One is not born, but rather becomes, a woman. Beauvoir applies existentialism to the feminine condition: woman is constructed as man's Other. This alterity is not natural — it is produced by history and social structures.",
        "concepts": [
          {
            "nom": "ONE IS NOT BORN A WOMAN",
            "cat": "transcendant",
            "type": "Féminisme",
            "puissance": 99,
            "desc": "A break from biologism: the feminine is a social construction, not an essence — invalidates all naturalistic sexism."
          },
          {
            "nom": "ABSOLUTE ALTERITY",
            "cat": "transcendant",
            "type": "Féminisme",
            "puissance": 88,
            "desc": "Woman constructed as man's absolute Other — an existentialist reframing that reveals asymmetry as a historical product."
          },
          {
            "nom": "ETHICS OF AMBIGUITY",
            "cat": "immanent",
            "type": "Existentialisme",
            "puissance": 80,
            "desc": "Embracing the ambiguity of the human condition as the ground of a concrete ethics of freedom."
          }
        ],
        "filiation": {
          "maitres": [
            "SARTRE",
            "HEGEL",
            "MERLEAU-PONTY"
          ],
          "disciples": [
            "BUTLER",
            "IRIGARAY",
            "HOOKS"
          ],
          "contre": [
            "FREUD",
            "GENDER ESSENTIALISM"
          ]
        }
      }
    },
    {
      "id": "022",
      "nom": "CAMUS",
      "full": "Albert Camus",
      "dates": "1913-1960",
      "types": [
        "Existentialisme",
        "Nihilisme"
      ],
      "lieu": "Algérie",
      "era": "CONTEMPORAINE",
      "imgUrl": "https://upload.wikimedia.org/wikipedia/commons/0/08/Albert_Camus%2C_gagnant_de_prix_Nobel%2C_portrait_en_buste%2C_pos%C3%A9_au_bureau%2C_faisant_face_-%C3%A0_gauche%2C_19__.jpg",
      "stats": {
        "INFLUENCE": 85,
        "RIGUEUR": 40,
        "ANCRAGE": 45,
        "PORTÉE": 80,
        "CLÔTURE": 38,
        "CLARTÉ": 88
      },
      "fr": {
        "oeuvre": "Le Mythe de Sisyphe",
        "entree": "Il n'y a qu'un problème philosophique vraiment sérieux : c'est le suicide. Face à l'absurde — l'homme qui demande du sens à un monde muet — Camus refuse aussi bien le saut dans la foi que la résignation nihiliste. Il faut imaginer Sisyphe heureux.",
        "concepts": [
          {
            "nom": "L'ABSURDE",
            "cat": "transcendant",
            "type": "Existentialisme",
            "puissance": 88,
            "desc": "Bascule du cadre existentiel : l'absurde naît de la confrontation entre l'exigence humaine de sens et le silence irrationnel du monde."
          },
          {
            "nom": "LA RÉVOLTE",
            "cat": "immanent",
            "type": "Existentialisme",
            "puissance": 85,
            "desc": "Refus du suicide et de l'espoir — persévérer lucidement dans la vie face à l'absurde, sans en sortir par le haut."
          },
          {
            "nom": "LE REFUS DU SAUT",
            "cat": "transcendant",
            "type": "Nihilisme",
            "puissance": 78,
            "desc": "Invalide aussi bien la foi (Kierkegaard) que la résignation nihiliste — l'absurde doit être vécu, pas transcendé."
          }
        ],
        "filiation": {
          "maitres": [
            "DOSTOÏEVSKI",
            "NIETZSCHE",
            "KIERKEGAARD (critique)"
          ],
          "disciples": [
            "AUCUN — refuse l'école"
          ],
          "contre": [
            "SARTRE",
            "MARXISME",
            "RELIGION"
          ]
        }
      },
      "en": {
        "oeuvre": "The Myth of Sisyphus",
        "entree": "There is but one truly serious philosophical problem, and that is suicide. Facing the absurd — a man demanding meaning from a silent world — Camus refuses both the leap of faith and nihilist resignation. We must imagine Sisyphus happy.",
        "concepts": [
          {
            "nom": "THE ABSURD",
            "cat": "transcendant",
            "type": "Existentialisme",
            "puissance": 88,
            "desc": "A shift in the existential frame: the absurd arises from the confrontation between humanity's demand for meaning and the world's irrational silence."
          },
          {
            "nom": "REVOLT",
            "cat": "immanent",
            "type": "Existentialisme",
            "puissance": 85,
            "desc": "Refusal of both suicide and hope — persisting lucidly in the face of the absurd, without escaping upward."
          },
          {
            "nom": "REFUSAL OF THE LEAP",
            "cat": "transcendant",
            "type": "Nihilisme",
            "puissance": 78,
            "desc": "Invalidates both the leap of faith (Kierkegaard) and nihilist resignation — the absurd must be lived, not transcended."
          }
        ],
        "filiation": {
          "maitres": [
            "DOSTOEVSKY",
            "NIETZSCHE",
            "KIERKEGAARD (critique)"
          ],
          "disciples": [
            "NONE — refuses the school"
          ],
          "contre": [
            "SARTRE",
            "MARXISM",
            "RELIGION"
          ]
        }
      }
    },
    {
      "id": "023",
      "nom": "WITTGSTN",
      "full": "Ludwig Wittgenstein",
      "dates": "1889-1951",
      "types": [
        "Philo. Langage",
        "Logique"
      ],
      "lieu": "Autriche",
      "era": "CONTEMPORAINE",
      "imgUrl": "https://upload.wikimedia.org/wikipedia/commons/4/42/Ludwig_Wittgenstein_in_1910.jpg",
      "stats": {
        "INFLUENCE": 92,
        "RIGUEUR": 95,
        "ANCRAGE": 58,
        "PORTÉE": 95,
        "CLÔTURE": 40,
        "CLARTÉ": 22
      },
      "fr": {
        "oeuvre": "Tractatus + Inv. Philosophiques",
        "entree": "Sur ce dont on ne peut pas parler, il faut garder le silence. Wittgenstein pose deux révolutions : le Tractatus fixe le langage sur le monde, les Investigations le libèrent dans ses usages. Ce dont on croyait débattre n'était que confusion grammaticale.",
        "concepts": [
          {
            "nom": "LA THÉORIE PICTURALE",
            "cat": "immanent",
            "type": "Logique",
            "puissance": 88,
            "desc": "Le langage représente le monde comme une image représente un fait — réfutation interne de tout discours métaphysique sans corrélat factuel."
          },
          {
            "nom": "LES JEUX DE LANGAGE",
            "cat": "transcendant",
            "type": "Philo. Langage",
            "puissance": 95,
            "desc": "Le sens vient de l'usage dans des formes de vie — bascule sémantique totale qui invalide le Tractatus lui-même."
          },
          {
            "nom": "LE SILENCE",
            "cat": "transcendant",
            "type": "Philo. Langage",
            "puissance": 85,
            "desc": "Ce qui ne peut être dit ne peut qu'être montré — les limites du langage sont les limites de mon monde."
          }
        ],
        "filiation": {
          "maitres": [
            "FREGE",
            "RUSSELL",
            "SCHOPENHAUER"
          ],
          "disciples": [
            "AUSTIN",
            "RYLE",
            "ANSCOMBE"
          ],
          "contre": [
            "RUSSELL (dépasse)",
            "PHILOSOPHIE TRADITIONNELLE"
          ]
        }
      },
      "en": {
        "oeuvre": "Tractatus + Phil. Investigations",
        "entree": "Whereof one cannot speak, thereof one must be silent. Wittgenstein enacts two revolutions: the Tractatus fixes language on the world; the Investigations free it into uses. What we thought we were debating was merely grammatical confusion.",
        "concepts": [
          {
            "nom": "PICTURE THEORY",
            "cat": "immanent",
            "type": "Logique",
            "puissance": 88,
            "desc": "Language depicts the world as a picture depicts a fact — an internal refutation of any metaphysical discourse without factual correlate."
          },
          {
            "nom": "LANGUAGE GAMES",
            "cat": "transcendant",
            "type": "Philo. Langage",
            "puissance": 95,
            "desc": "Meaning comes from use in forms of life — a total semantic shift that invalidates the Tractatus itself."
          },
          {
            "nom": "SILENCE",
            "cat": "transcendant",
            "type": "Philo. Langage",
            "puissance": 85,
            "desc": "What cannot be said can only be shown — the limits of my language are the limits of my world."
          }
        ],
        "filiation": {
          "maitres": [
            "FREGE",
            "RUSSELL",
            "SCHOPENHAUER"
          ],
          "disciples": [
            "AUSTIN",
            "RYLE",
            "ANSCOMBE"
          ],
          "contre": [
            "RUSSELL (surpassed)",
            "TRADITIONAL PHILOSOPHY"
          ]
        }
      }
    },
    {
      "id": "024",
      "nom": "RAWLS",
      "full": "John Rawls",
      "dates": "1921-2002",
      "types": [
        "Contractualisme",
        "Libéralisme"
      ],
      "lieu": "États-Unis",
      "era": "CONTEMPORAINE",
      "imgUrl": "https://upload.wikimedia.org/wikipedia/commons/1/19/John_Rawls.jpg",
      "stats": {
        "INFLUENCE": 88,
        "RIGUEUR": 88,
        "ANCRAGE": 78,
        "PORTÉE": 72,
        "CLÔTURE": 65,
        "CLARTÉ": 72
      },
      "fr": {
        "oeuvre": "Théorie de la Justice",
        "entree": "Derrière un voile d'ignorance, sans savoir quelle place tu occuperas dans la société, quelles règles choisirais-tu ? Rawls réinvente le contrat social : la justice comme équité exige que les inégalités profitent aux plus défavorisés.",
        "concepts": [
          {
            "nom": "LE VOILE D'IGNORANCE",
            "cat": "immanent",
            "type": "Contractualisme",
            "puissance": 92,
            "desc": "Choisir les principes de justice sans savoir sa place dans la société — garantit l'impartialité par construction."
          },
          {
            "nom": "LE PRINCIPE DE DIFFÉRENCE",
            "cat": "immanent",
            "type": "Contractualisme",
            "puissance": 85,
            "desc": "Les inégalités ne sont justifiées que si elles profitent aux membres les moins favorisés — tempère le libéralisme par la solidarité."
          },
          {
            "nom": "LA POSITION ORIGINELLE",
            "cat": "transcendant",
            "type": "Libéralisme",
            "puissance": 80,
            "desc": "Bascule du cadre utilitariste : la justice ne maximise pas le bonheur total mais garantit des droits individuels inaliénables."
          }
        ],
        "filiation": {
          "maitres": [
            "KANT",
            "LOCKE",
            "ROUSSEAU"
          ],
          "disciples": [
            "COHEN",
            "DWORKIN",
            "NOZICK (réaction)"
          ],
          "contre": [
            "UTILITARISME",
            "NOZICK (libertarien)"
          ]
        }
      },
      "en": {
        "oeuvre": "A Theory of Justice",
        "entree": "Behind a veil of ignorance, not knowing what position you will occupy in society, what rules would you choose? Rawls reinvents the social contract: justice as fairness requires that inequalities benefit the least advantaged.",
        "concepts": [
          {
            "nom": "VEIL OF IGNORANCE",
            "cat": "immanent",
            "type": "Contractualisme",
            "puissance": 92,
            "desc": "Choosing principles of justice without knowing one's place in society — guarantees impartiality by construction."
          },
          {
            "nom": "DIFFERENCE PRINCIPLE",
            "cat": "immanent",
            "type": "Contractualisme",
            "puissance": 85,
            "desc": "Inequalities are only justified if they benefit the least advantaged — tempers liberalism with solidarity."
          },
          {
            "nom": "ORIGINAL POSITION",
            "cat": "transcendant",
            "type": "Libéralisme",
            "puissance": 80,
            "desc": "A shift from the utilitarian framework: justice does not maximize total happiness but guarantees inalienable individual rights."
          }
        ],
        "filiation": {
          "maitres": [
            "KANT",
            "LOCKE",
            "ROUSSEAU"
          ],
          "disciples": [
            "COHEN",
            "DWORKIN",
            "NOZICK (reaction)"
          ],
          "contre": [
            "UTILITARIANISM",
            "NOZICK (libertarian)"
          ]
        }
      }
    },
    {
      "id": "025",
      "nom": "THALES",
      "full": "Thalès de Milet",
      "dates": "c. 624-546 av. J.-C.",
      "types": [
        "Matérialisme"
      ],
      "lieu": "Milet",
      "era": "ANTIQUE",
      "imgUrl": "https://upload.wikimedia.org/wikipedia/commons/c/c6/Illustrerad_Verldshistoria_band_I_Ill_107.jpg",
      "stats": {
        "INFLUENCE": 80,
        "RIGUEUR": 35,
        "ANCRAGE": 50,
        "PORTÉE": 82,
        "CLÔTURE": 55,
        "CLARTÉ": 70
      },
      "fr": {
        "oeuvre": "Aucun écrit conservé",
        "entree": "Premier philosophe de la tradition occidentale, Thalès cherche une explication naturelle de l'univers sans recourir aux mythes. Tout est eau — dans cette affirmation simple se loge la rupture fondatrice entre mythe et logos.",
        "concepts": [
          {
            "nom": "TOUT EST EAU",
            "cat": "transcendant",
            "type": "Matérialisme",
            "puissance": 75,
            "desc": "Première réduction naturaliste : un seul principe matériel explique toute la diversité du réel sans invoquer les dieux."
          },
          {
            "nom": "L'AIMANT A UNE ÂME",
            "cat": "immanent",
            "type": "Matérialisme",
            "puissance": 50,
            "desc": "Hylozoïsme : la matière elle-même est animée — il n'y a pas de coupure entre vivant et inerte."
          },
          {
            "nom": "PRÉDIRE L'ÉCLIPSE",
            "cat": "immanent",
            "type": "Matérialisme",
            "puissance": 65,
            "desc": "Connaissance pratique et mathématique mise au service de la compréhension du monde — l'astronomie comme philosophie en acte."
          }
        ],
        "filiation": {
          "maitres": [],
          "disciples": [
            "ANAXIMANDRE",
            "ANAXIMÈNE"
          ],
          "contre": [
            "MYTHOLOGIE GRECQUE"
          ]
        }
      },
      "en": {
        "oeuvre": "No writings preserved",
        "entree": "The first philosopher of the Western tradition, Thales seeks a natural explanation for the universe without myth. Everything is water — in this simple claim lies the founding rupture between mythos and logos.",
        "concepts": [
          {
            "nom": "EVERYTHING IS WATER",
            "cat": "transcendant",
            "type": "Matérialisme",
            "puissance": 75,
            "desc": "First naturalist reduction: a single material principle explains all diversity without invoking the gods."
          },
          {
            "nom": "THE MAGNET HAS A SOUL",
            "cat": "immanent",
            "type": "Matérialisme",
            "puissance": 50,
            "desc": "Hylozoism: matter itself is animated — no fundamental cut between living and inert."
          },
          {
            "nom": "PREDICTING THE ECLIPSE",
            "cat": "immanent",
            "type": "Matérialisme",
            "puissance": 65,
            "desc": "Mathematical and practical knowledge in service of understanding the world — astronomy as philosophy in action."
          }
        ],
        "filiation": {
          "maitres": [],
          "disciples": [
            "ANAXIMANDRE",
            "ANAXIMENES"
          ],
          "contre": [
            "GREEK MYTHOLOGY"
          ]
        }
      }
    },
    {
      "id": "026",
      "nom": "AXMANDRE",
      "full": "Anaximandre de Milet",
      "dates": "610-546 av. J.-C.",
      "types": [
        "Matérialisme"
      ],
      "lieu": "Milet",
      "era": "ANTIQUE",
      "imgUrl": "https://upload.wikimedia.org/wikipedia/commons/0/07/Pietro_Bellotti_%28attr%29_Anaximander.jpg",
      "stats": {
        "INFLUENCE": 72,
        "RIGUEUR": 40,
        "ANCRAGE": 55,
        "PORTÉE": 78,
        "CLÔTURE": 52,
        "CLARTÉ": 60
      },
      "fr": {
        "oeuvre": "Aucun écrit conservé",
        "entree": "Élève de Thalès, Anaximandre dépasse son maître en posant l'apeiron — l'indéfini, l'infini — comme principe premier. Plus abstrait que l'eau, l'apeiron ne peut se réduire à aucun élément fini.",
        "concepts": [
          {
            "nom": "L'APEIRON",
            "cat": "transcendant",
            "type": "Matérialisme",
            "puissance": 82,
            "desc": "L'indéfini/infini comme substrat premier — plus abstrait que tout élément déterminé, il engendre le monde par séparation interne."
          },
          {
            "nom": "LA JUSTICE COSMIQUE",
            "cat": "immanent",
            "type": "Matérialisme",
            "puissance": 65,
            "desc": "Les choses se rendent justice les unes aux autres selon l'ordre du temps — morale projetée sur la cosmologie."
          },
          {
            "nom": "L'ORIGINE DES VIVANTS",
            "cat": "immanent",
            "type": "Matérialisme",
            "puissance": 60,
            "desc": "Les êtres vivants naquirent du milieu humide sous l'effet de la chaleur ; l'humain est issu d'un autre animal."
          }
        ],
        "filiation": {
          "maitres": [
            "THALES"
          ],
          "disciples": [
            "ANAXIMÈNE",
            "PYTHAGORE"
          ],
          "contre": []
        }
      },
      "en": {
        "oeuvre": "No writings preserved",
        "entree": "A student of Thales, Anaximander surpasses his teacher by positing the apeiron — the indefinite, the infinite — as the first principle. More abstract than water, the apeiron cannot be reduced to any finite element.",
        "concepts": [
          {
            "nom": "THE APEIRON",
            "cat": "transcendant",
            "type": "Matérialisme",
            "puissance": 82,
            "desc": "The indefinite/infinite as the primary substrate — more abstract than any determined element, it generates the world through internal separation."
          },
          {
            "nom": "COSMIC JUSTICE",
            "cat": "immanent",
            "type": "Matérialisme",
            "puissance": 65,
            "desc": "Things pay retribution to each other according to the ordering of time — ethics projected onto cosmology."
          },
          {
            "nom": "ORIGIN OF LIVING BEINGS",
            "cat": "immanent",
            "type": "Matérialisme",
            "puissance": 60,
            "desc": "Living beings arose from moisture under heat; humans descended from another kind of animal."
          }
        ],
        "filiation": {
          "maitres": [
            "THALES"
          ],
          "disciples": [
            "ANAXIMENES",
            "PYTHAGORAS"
          ],
          "contre": []
        }
      }
    },
    {
      "id": "027",
      "nom": "AXMENES",
      "full": "Anaximène de Milet",
      "dates": "585-528 av. J.-C.",
      "types": [
        "Matérialisme"
      ],
      "lieu": "Milet",
      "era": "ANTIQUE",
      "imgUrl": "https://upload.wikimedia.org/wikipedia/commons/7/7b/Anaximenes_Milesius_-_Illustrium_philosophorum_et_sapientum_effigies_ab_eorum_numistatibus_extractae.png",
      "stats": {
        "INFLUENCE": 62,
        "RIGUEUR": 38,
        "ANCRAGE": 50,
        "PORTÉE": 65,
        "CLÔTURE": 48,
        "CLARTÉ": 65
      },
      "fr": {
        "oeuvre": "Aucun écrit conservé",
        "entree": "Anaximène revient à un élément déterminé : l'air. Mais son apport décisif est le mécanisme de transformation — condensation et raréfaction — qui explique comment un seul principe produit toutes les choses.",
        "concepts": [
          {
            "nom": "TOUT EST AIR",
            "cat": "transcendant",
            "type": "Matérialisme",
            "puissance": 68,
            "desc": "L'air comme substrat premier : plus étendu que l'eau, il enveloppe et contient le monde comme l'âme contient le corps."
          },
          {
            "nom": "CONDENSATION/RARÉFACTION",
            "cat": "immanent",
            "type": "Matérialisme",
            "puissance": 75,
            "desc": "Premier mécanisme explicatif de la transformation : condensé l'air devient eau et terre, raréfié il devient feu."
          },
          {
            "nom": "L'ÂME EST AIR",
            "cat": "immanent",
            "type": "Matérialisme",
            "puissance": 58,
            "desc": "Continuité entre cosmologie et anthropologie : l'âme qui nous tient ensemble est de la même nature que ce qui tient le monde."
          }
        ],
        "filiation": {
          "maitres": [
            "AXMANDRE"
          ],
          "disciples": [
            "DIOGENE D'APOLLONIE"
          ],
          "contre": []
        }
      },
      "en": {
        "oeuvre": "No writings preserved",
        "entree": "Anaximenes returns to a determinate element: air. His decisive contribution is the mechanism of transformation — condensation and rarefaction — explaining how a single principle produces all things.",
        "concepts": [
          {
            "nom": "EVERYTHING IS AIR",
            "cat": "transcendant",
            "type": "Matérialisme",
            "puissance": 68,
            "desc": "Air as the primary substrate: more pervasive than water, it envelops and contains the world as soul contains the body."
          },
          {
            "nom": "CONDENSATION/RAREFACTION",
            "cat": "immanent",
            "type": "Matérialisme",
            "puissance": 75,
            "desc": "First explanatory mechanism of transformation: condensed air becomes water and earth, rarefied it becomes fire."
          },
          {
            "nom": "THE SOUL IS AIR",
            "cat": "immanent",
            "type": "Matérialisme",
            "puissance": 58,
            "desc": "Continuity between cosmology and anthropology: the soul that holds us together is the same nature as what holds the world."
          }
        ],
        "filiation": {
          "maitres": [
            "AXMANDRE"
          ],
          "disciples": [
            "DIOGENES OF APOLLONIA"
          ],
          "contre": []
        }
      }
    },
    {
      "id": "028",
      "nom": "PYTHAGORE",
      "full": "Pythagore de Samos",
      "dates": "570-497 av. J.-C.",
      "types": [
        "Rationalisme",
        "Mysticisme"
      ],
      "lieu": "Samos",
      "era": "ANTIQUE",
      "imgUrl": "https://upload.wikimedia.org/wikipedia/commons/e/e0/Pythagoras_in_the_Roman_Forum%2C_Colosseum.jpg",
      "stats": {
        "INFLUENCE": 90,
        "RIGUEUR": 55,
        "ANCRAGE": 60,
        "PORTÉE": 90,
        "CLÔTURE": 62,
        "CLARTÉ": 60
      },
      "fr": {
        "oeuvre": "Aucun écrit conservé",
        "entree": "Pythagore fonde une communauté philosophico-religieuse et proclame que tout est nombre. Ce geste fonde autant les mathématiques que la musique harmonique et la cosmologie. La transmigration des âmes lie son rationalisme à une vision mystique du cosmos.",
        "concepts": [
          {
            "nom": "TOUT EST NOMBRE",
            "cat": "transcendant",
            "type": "Rationalisme",
            "puissance": 92,
            "desc": "Bascule ontologique : la structure mathématique est plus réelle que la matière — fondation du rationalisme scientifique occidental."
          },
          {
            "nom": "MÉTEMPSYCOSE",
            "cat": "transcendant",
            "type": "Mysticisme",
            "puissance": 75,
            "desc": "L'âme est immortelle et transmigre d'un corps à l'autre — ascèse morale et végétarisme comme purification progressive."
          },
          {
            "nom": "L'HARMONIE DES SPHÈRES",
            "cat": "immanent",
            "type": "Mysticisme",
            "puissance": 72,
            "desc": "Les corps célestes produisent une musique mathématique inaudible — le cosmos est accord et proportion."
          }
        ],
        "filiation": {
          "maitres": [
            "AXMANDRE"
          ],
          "disciples": [
            "PHILOLAUS",
            "ARCHYTAS",
            "PLATON"
          ],
          "contre": [
            "HÉRACLITE"
          ]
        }
      },
      "en": {
        "oeuvre": "No writings preserved",
        "entree": "Pythagoras founds a philosophical-religious community and declares that everything is number. This gesture founds mathematics, musical harmony, and cosmology. The transmigration of souls links his rationalism to a mystical vision of the cosmos.",
        "concepts": [
          {
            "nom": "EVERYTHING IS NUMBER",
            "cat": "transcendant",
            "type": "Rationalisme",
            "puissance": 92,
            "desc": "Ontological shift: mathematical structure is more real than matter — foundation of Western scientific rationalism."
          },
          {
            "nom": "METEMPSYCHOSIS",
            "cat": "transcendant",
            "type": "Mysticisme",
            "puissance": 75,
            "desc": "The soul is immortal and migrates from body to body — moral asceticism and vegetarianism as progressive purification."
          },
          {
            "nom": "HARMONY OF THE SPHERES",
            "cat": "immanent",
            "type": "Mysticisme",
            "puissance": 72,
            "desc": "Celestial bodies produce inaudible mathematical music — the cosmos is accord and proportion."
          }
        ],
        "filiation": {
          "maitres": [
            "AXMANDRE"
          ],
          "disciples": [
            "PHILOLAUS",
            "ARCHYTAS",
            "PLATON"
          ],
          "contre": [
            "HERACLITUS"
          ]
        }
      }
    },
    {
      "id": "029",
      "nom": "XENOPHANE",
      "full": "Xénophane de Colophon",
      "dates": "570-475 av. J.-C.",
      "types": [
        "Philo. Religion",
        "Scepticisme"
      ],
      "lieu": "Colophon",
      "era": "ANTIQUE",
      "imgUrl": "https://upload.wikimedia.org/wikipedia/commons/5/5f/Xenophanes_in_Thomas_Stanley_History_of_Philosophy.jpg",
      "stats": {
        "INFLUENCE": 70,
        "RIGUEUR": 60,
        "ANCRAGE": 58,
        "PORTÉE": 80,
        "CLÔTURE": 55,
        "CLARTÉ": 75
      },
      "fr": {
        "oeuvre": "Fragments",
        "entree": "Xénophane attaque la religion traditionnelle par son argument le plus durable : les humains projettent sur les dieux leur propre image. Si les chevaux avaient des dieux, leurs dieux seraient des chevaux. Il pose ainsi la critique de l'anthropomorphisme religieux.",
        "concepts": [
          {
            "nom": "CRITIQUE DE L'ANTHROPOMORPHISME",
            "cat": "transcendant",
            "type": "Philo. Religion",
            "puissance": 88,
            "desc": "Bascule du cadre religieux : les dieux traditionnels ne sont que des projections humaines — premier argument contre le polythéisme populaire."
          },
          {
            "nom": "UN DIEU UNIQUE",
            "cat": "transcendant",
            "type": "Philo. Religion",
            "puissance": 78,
            "desc": "Un seul dieu, sans ressemblance humaine, gouvernant tout par la pensée seule — monothéisme philosophique antérieur au christianisme."
          },
          {
            "nom": "SCEPTICISME ÉPISTÉMIQUE",
            "cat": "immanent",
            "type": "Scepticisme",
            "puissance": 72,
            "desc": "Nous ne pouvons avoir que des opinions (dokos) sur le réel — même si une opinion peut être plus vraie qu'une autre, nulle n'est certaine."
          }
        ],
        "filiation": {
          "maitres": [],
          "disciples": [
            "PARMENIDE",
            "ZÉNON D'ÉLÉE"
          ],
          "contre": [
            "HOMÈRE",
            "HÉSIODE"
          ]
        }
      },
      "en": {
        "oeuvre": "Fragments",
        "entree": "Xenophanes attacks traditional religion with his most enduring argument: humans project their own image onto the gods. If horses had gods, their gods would look like horses. He inaugurates the critique of religious anthropomorphism.",
        "concepts": [
          {
            "nom": "CRITIQUE OF ANTHROPOMORPHISM",
            "cat": "transcendant",
            "type": "Philo. Religion",
            "puissance": 88,
            "desc": "A shift in the religious framework: traditional gods are mere human projections — the first argument against popular polytheism."
          },
          {
            "nom": "ONE GOD",
            "cat": "transcendant",
            "type": "Philo. Religion",
            "puissance": 78,
            "desc": "One god, unlike humans in form, governing everything by thought alone — philosophical monotheism predating Christianity."
          },
          {
            "nom": "EPISTEMIC SKEPTICISM",
            "cat": "immanent",
            "type": "Scepticisme",
            "puissance": 72,
            "desc": "We can only have opinions (dokos) about reality — even if one opinion is closer to truth than another, none is certain."
          }
        ],
        "filiation": {
          "maitres": [],
          "disciples": [
            "PARMENIDE",
            "ZENO OF ELEA"
          ],
          "contre": [
            "HOMER",
            "HESIOD"
          ]
        }
      }
    },
    {
      "id": "030",
      "nom": "HERACLITE",
      "full": "Héraclite d'Éphèse",
      "dates": "535-475 av. J.-C.",
      "types": [
        "Dialectique",
        "Matérialisme"
      ],
      "lieu": "Éphèse",
      "era": "ANTIQUE",
      "imgUrl": "https://upload.wikimedia.org/wikipedia/commons/2/24/Heraclitus_b_4_compressed.jpg",
      "stats": {
        "INFLUENCE": 85,
        "RIGUEUR": 52,
        "ANCRAGE": 48,
        "PORTÉE": 88,
        "CLÔTURE": 50,
        "CLARTÉ": 38
      },
      "fr": {
        "oeuvre": "Fragments (Peri Physeos)",
        "entree": "On ne peut entrer deux fois dans le même fleuve. Héraclite, le philosophe obscur, pose le flux universel et l'unité des contraires comme structure fondamentale du réel. Le logos — raison cachée — gouverne tout, mais la plupart des hommes vivent comme s'ils dormaient.",
        "concepts": [
          {
            "nom": "PANTA RHEI",
            "cat": "transcendant",
            "type": "Dialectique",
            "puissance": 90,
            "desc": "Tout coule, rien ne demeure — la réalité est processus pur, le repos n'est qu'une illusion momentanée. Bascule contra Parménide."
          },
          {
            "nom": "LE LOGOS",
            "cat": "immanent",
            "type": "Dialectique",
            "puissance": 85,
            "desc": "Raison universelle cachée qui gouverne le devenir — accessible seulement à ceux qui savent écouter au-delà des apparences."
          },
          {
            "nom": "L'UNITÉ DES CONTRAIRES",
            "cat": "immanent",
            "type": "Dialectique",
            "puissance": 82,
            "desc": "Guerre est père et roi de tout — les opposés sont la même chose (voie montante/descendante, vie/mort) ; leur tension produit l'harmonie."
          }
        ],
        "filiation": {
          "maitres": [],
          "disciples": [
            "CRATYLE",
            "HEGEL (inspiration)",
            "NIETZSCHE (inspiration)"
          ],
          "contre": [
            "PYTHAGORE",
            "XÉNOPHANE"
          ]
        }
      },
      "en": {
        "oeuvre": "Fragments (On Nature)",
        "entree": "You cannot step into the same river twice. Heraclitus, the Obscure, posits universal flux and the unity of opposites as the fundamental structure of reality. The logos — hidden reason — governs all, but most men live as if asleep.",
        "concepts": [
          {
            "nom": "PANTA RHEI",
            "cat": "transcendant",
            "type": "Dialectique",
            "puissance": 90,
            "desc": "Everything flows, nothing remains — reality is pure process, rest is momentary illusion. A shift against Parmenides."
          },
          {
            "nom": "THE LOGOS",
            "cat": "immanent",
            "type": "Dialectique",
            "puissance": 85,
            "desc": "A hidden universal reason governing all becoming — accessible only to those who listen beyond appearances."
          },
          {
            "nom": "UNITY OF OPPOSITES",
            "cat": "immanent",
            "type": "Dialectique",
            "puissance": 82,
            "desc": "War is father and king of all — opposites are the same thing (way up/down, life/death); their tension produces harmony."
          }
        ],
        "filiation": {
          "maitres": [],
          "disciples": [
            "CRATYLUS",
            "HEGEL (inspired)",
            "NIETZSCHE (inspired)"
          ],
          "contre": [
            "PYTHAGORAS",
            "XENOPHANES"
          ]
        }
      }
    },
    {
      "id": "031",
      "nom": "PARMENIDE",
      "full": "Parménide d'Élée",
      "dates": "515-460 av. J.-C.",
      "types": [
        "Rationalisme",
        "Idéalisme"
      ],
      "lieu": "Élée",
      "era": "ANTIQUE",
      "imgUrl": "https://upload.wikimedia.org/wikipedia/commons/f/fc/Busto_di_Parmenide_%28cropped%29.jpg",
      "stats": {
        "INFLUENCE": 82,
        "RIGUEUR": 75,
        "ANCRAGE": 72,
        "PORTÉE": 92,
        "CLÔTURE": 60,
        "CLARTÉ": 55
      },
      "fr": {
        "oeuvre": "Le Poème (Peri Physeos)",
        "entree": "L'Être est, le Non-Être n'est pas. Parménide fonde la métaphysique occidentale par cette seule affirmation. Le changement, la pluralité, le mouvement sont des illusions — seule la raison pure, non les sens, atteint la vérité de l'être.",
        "concepts": [
          {
            "nom": "L'ÊTRE EST",
            "cat": "transcendant",
            "type": "Rationalisme",
            "puissance": 95,
            "desc": "Bascule fondamentale : le Non-Être est impensable car le penser c'est déjà l'être — tout le réel est Un, éternel, immuable."
          },
          {
            "nom": "LA VOIE DE VÉRITÉ",
            "cat": "immanent",
            "type": "Rationalisme",
            "puissance": 88,
            "desc": "Seule la raison accède à l'être véritable — la voie des sens est la voie de l'opinion (doxa), non de la connaissance."
          },
          {
            "nom": "LE REFUS DU DEVENIR",
            "cat": "transcendant",
            "type": "Idéalisme",
            "puissance": 82,
            "desc": "Le mouvement et le changement sont contradictoires avec l'être — invalide d'un coup toute la physique ionienne et Héraclite."
          }
        ],
        "filiation": {
          "maitres": [
            "XENOPHANE"
          ],
          "disciples": [
            "ZENON ELE",
            "MELISSOS",
            "PLATON"
          ],
          "contre": [
            "HERACLITE",
            "IONIENS"
          ]
        }
      },
      "en": {
        "oeuvre": "The Poem (On Nature)",
        "entree": "Being is, Non-Being is not. Parmenides founds Western metaphysics with this single claim. Change, plurality, motion are illusions — only pure reason, not the senses, reaches the truth of being.",
        "concepts": [
          {
            "nom": "BEING IS",
            "cat": "transcendant",
            "type": "Rationalisme",
            "puissance": 95,
            "desc": "Foundational shift: Non-Being is unthinkable, for to think it is already to be — all of reality is One, eternal, unchanging."
          },
          {
            "nom": "THE WAY OF TRUTH",
            "cat": "immanent",
            "type": "Rationalisme",
            "puissance": 88,
            "desc": "Only reason accesses true being — the way of the senses is the way of opinion (doxa), not knowledge."
          },
          {
            "nom": "REJECTION OF BECOMING",
            "cat": "transcendant",
            "type": "Idéalisme",
            "puissance": 82,
            "desc": "Motion and change contradict being — in one stroke invalidates all Ionian physics and Heraclitus."
          }
        ],
        "filiation": {
          "maitres": [
            "XENOPHANE"
          ],
          "disciples": [
            "ZENONELE",
            "MELISSUS",
            "PLATON"
          ],
          "contre": [
            "HERACLITE",
            "THE IONIANS"
          ]
        }
      }
    },
    {
      "id": "032",
      "nom": "EMPEDOCLE",
      "full": "Empédocle d'Agrigente",
      "dates": "490-430 av. J.-C.",
      "types": [
        "Matérialisme",
        "Mysticisme"
      ],
      "lieu": "Sicile",
      "era": "ANTIQUE",
      "imgUrl": "https://upload.wikimedia.org/wikipedia/commons/7/79/Empedokles.jpeg",
      "stats": {
        "INFLUENCE": 72,
        "RIGUEUR": 45,
        "ANCRAGE": 52,
        "PORTÉE": 72,
        "CLÔTURE": 50,
        "CLARTÉ": 60
      },
      "fr": {
        "oeuvre": "De la Nature / Purifications",
        "entree": "Empédocle concilie les Ioniens et Parménide : rien ne naît ni ne périt, mais les quatre éléments éternels (feu, eau, terre, air) se mêlent et se séparent sous l'effet de l'Amour et de la Discorde.",
        "concepts": [
          {
            "nom": "LES QUATRE ÉLÉMENTS",
            "cat": "immanent",
            "type": "Matérialisme",
            "puissance": 85,
            "desc": "Feu, eau, terre, air : racines éternelles et indestructibles dont toutes choses sont des mélanges — dépasse la monolgie ionienne."
          },
          {
            "nom": "AMOUR ET DISCORDE",
            "cat": "transcendant",
            "type": "Matérialisme",
            "puissance": 80,
            "desc": "Deux forces cosmiques : l'Amour unit les éléments, la Discorde les sépare — l'histoire du cosmos est leur lutte cyclique."
          },
          {
            "nom": "MÉTEMPSYCOSE",
            "cat": "transcendant",
            "type": "Mysticisme",
            "puissance": 62,
            "desc": "L'âme transmigre à travers toutes les formes de vie — le végétarisme s'impose comme conséquence éthique."
          }
        ],
        "filiation": {
          "maitres": [
            "PARMENIDE",
            "PYTHAGORE"
          ],
          "disciples": [
            "ARISTOTE (critique)"
          ],
          "contre": [
            "PARMENIDE (mouvement)",
            "IONIENS (monisme)"
          ]
        }
      },
      "en": {
        "oeuvre": "On Nature / Purifications",
        "entree": "Empedocles reconciles the Ionians and Parmenides: nothing is born or perishes, but the four eternal elements (fire, water, earth, air) mix and separate through Love and Strife.",
        "concepts": [
          {
            "nom": "THE FOUR ELEMENTS",
            "cat": "immanent",
            "type": "Matérialisme",
            "puissance": 85,
            "desc": "Fire, water, earth, air: eternal indestructible roots of which all things are mixtures — surpasses Ionian monism."
          },
          {
            "nom": "LOVE AND STRIFE",
            "cat": "transcendant",
            "type": "Matérialisme",
            "puissance": 80,
            "desc": "Two cosmic forces: Love unites elements, Strife separates them — the history of the cosmos is their cyclical struggle."
          },
          {
            "nom": "METEMPSYCHOSIS",
            "cat": "transcendant",
            "type": "Mysticisme",
            "puissance": 62,
            "desc": "The soul transmigrates through all forms of life — vegetarianism follows as an ethical consequence."
          }
        ],
        "filiation": {
          "maitres": [
            "PARMENIDE",
            "PYTHAGORE"
          ],
          "disciples": [
            "ARISTOTE (critique)"
          ],
          "contre": [
            "PARMENIDE (motion)",
            "THE IONIANS (monism)"
          ]
        }
      }
    },
    {
      "id": "033",
      "nom": "PROTAGORAS",
      "full": "Protagoras d'Abdère",
      "dates": "c. 490-420 av. J.-C.",
      "types": [
        "Scepticisme",
        "Rhétorique"
      ],
      "lieu": "Abdère",
      "era": "ANTIQUE",
      "imgUrl": "https://upload.wikimedia.org/wikipedia/commons/1/1e/Ribera_-_Protagoras%2C_1637.jpg",
      "stats": {
        "INFLUENCE": 78,
        "RIGUEUR": 50,
        "ANCRAGE": 42,
        "PORTÉE": 82,
        "CLÔTURE": 38,
        "CLARTÉ": 80
      },
      "fr": {
        "oeuvre": "La Vérité / Sur les Dieux",
        "entree": "L'homme est la mesure de toutes choses. Protagoras fonde le relativisme philosophique : il n'y a pas de vérité absolue, seulement des perspectives humaines. Premier sophiste, il enseigne l'art de rendre le plus faible des arguments le plus fort.",
        "concepts": [
          {
            "nom": "L'HOMME MESURE",
            "cat": "transcendant",
            "type": "Scepticisme",
            "puissance": 90,
            "desc": "Bascule relativiste totale : aucune vérité n'existe indépendamment d'un sujet — chaque homme mesure le réel depuis sa perspective."
          },
          {
            "nom": "L'ANTILOGIE",
            "cat": "immanent",
            "type": "Rhétorique",
            "puissance": 78,
            "desc": "L'art de défendre également les deux thèses contraires — la rhétorique comme pouvoir de rendre le plus faible argument le plus fort."
          },
          {
            "nom": "L'AGNOSTICISME",
            "cat": "immanent",
            "type": "Scepticisme",
            "puissance": 72,
            "desc": "Sur les dieux, je ne sais ni s'ils sont ni comment ils sont — suspension des jugements religieux au nom des limites de la connaissance humaine."
          }
        ],
        "filiation": {
          "maitres": [
            "DEMOCRITE"
          ],
          "disciples": [
            "LES SOPHISTES"
          ],
          "contre": [
            "SOCRATE",
            "PLATON"
          ]
        }
      },
      "en": {
        "oeuvre": "The Truth / On the Gods",
        "entree": "Man is the measure of all things. Protagoras founds philosophical relativism: there is no absolute truth, only human perspectives. The first sophist, he teaches the art of making the weaker argument the stronger.",
        "concepts": [
          {
            "nom": "MAN IS THE MEASURE",
            "cat": "transcendant",
            "type": "Scepticisme",
            "puissance": 90,
            "desc": "Total relativist shift: no truth exists independently of a subject — each person measures reality from their own perspective."
          },
          {
            "nom": "ANTILOGIC",
            "cat": "immanent",
            "type": "Rhétorique",
            "puissance": 78,
            "desc": "The art of defending both sides of any question equally — rhetoric as the power to make the weaker argument stronger."
          },
          {
            "nom": "AGNOSTICISM",
            "cat": "immanent",
            "type": "Scepticisme",
            "puissance": 72,
            "desc": "Concerning the gods, I know neither whether they are nor what they are like — suspension of religious judgment."
          }
        ],
        "filiation": {
          "maitres": [
            "DEMOCRITE"
          ],
          "disciples": [
            "THE SOPHISTS"
          ],
          "contre": [
            "SOCRATE",
            "PLATON"
          ]
        }
      }
    },
    {
      "id": "034",
      "nom": "DEMOCRITE",
      "full": "Démocrite d'Abdère",
      "dates": "460-370 av. J.-C.",
      "types": [
        "Matérialisme"
      ],
      "lieu": "Abdère",
      "era": "ANTIQUE",
      "imgUrl": "https://upload.wikimedia.org/wikipedia/commons/7/76/Unknown_greek_pushkin.jpg",
      "stats": {
        "INFLUENCE": 85,
        "RIGUEUR": 60,
        "ANCRAGE": 68,
        "PORTÉE": 90,
        "CLÔTURE": 65,
        "CLARTÉ": 70
      },
      "fr": {
        "oeuvre": "Aucun écrit conservé",
        "entree": "Avec Leucippe, Démocrite pose la théorie atomiste : seuls existent les atomes et le vide. Cette thèse matérialiste radicale exclut tout finalisme, toute âme divine, tout libre arbitre. L'univers est déterminisme pur.",
        "concepts": [
          {
            "nom": "ATOMES ET VIDE",
            "cat": "transcendant",
            "type": "Matérialisme",
            "puissance": 95,
            "desc": "Seuls les atomes indivisibles et le vide existent — toute qualité sensible (couleur, saveur) est conventionnelle, non réelle."
          },
          {
            "nom": "DÉTERMINISME ABSOLU",
            "cat": "immanent",
            "type": "Matérialisme",
            "puissance": 85,
            "desc": "Rien n'arrive par hasard — tout suit une nécessité mécanique. Première formulation du physicalisme déterministe."
          },
          {
            "nom": "L'EUTHYMIE",
            "cat": "immanent",
            "type": "Matérialisme",
            "puissance": 65,
            "desc": "Le bonheur (euthymia) vient de la modération et de la sagesse, non des biens extérieurs — éthique déduite du matérialisme."
          }
        ],
        "filiation": {
          "maitres": [
            "LEUCIPPE",
            "ANAXAGORE"
          ],
          "disciples": [
            "EPICURE",
            "LUCRÈCE"
          ],
          "contre": [
            "PLATON",
            "ARISTOTE (finalisme)"
          ]
        }
      },
      "en": {
        "oeuvre": "No writings preserved",
        "entree": "With Leucippus, Democritus posits atomic theory: only atoms and void exist. This radical materialist thesis excludes all teleology, divine soul, and free will. The universe is pure determinism.",
        "concepts": [
          {
            "nom": "ATOMS AND VOID",
            "cat": "transcendant",
            "type": "Matérialisme",
            "puissance": 95,
            "desc": "Only indivisible atoms and void exist — all sensory qualities (color, taste) are conventional, not real."
          },
          {
            "nom": "ABSOLUTE DETERMINISM",
            "cat": "immanent",
            "type": "Matérialisme",
            "puissance": 85,
            "desc": "Nothing happens by chance — everything follows mechanical necessity. The first formulation of deterministic physicalism."
          },
          {
            "nom": "EUTHYMIA",
            "cat": "immanent",
            "type": "Matérialisme",
            "puissance": 65,
            "desc": "Happiness (euthymia) comes from moderation and wisdom, not external goods — ethics deduced from materialism."
          }
        ],
        "filiation": {
          "maitres": [
            "LEUCIPPUS",
            "ANAXAGORAS"
          ],
          "disciples": [
            "EPICURE",
            "LUCRETIUS"
          ],
          "contre": [
            "PLATON",
            "ARISTOTE (teleology)"
          ]
        }
      }
    },
    {
      "id": "035",
      "nom": "ZENONELE",
      "full": "Zénon d'Élée",
      "dates": "490-430 av. J.-C.",
      "types": [
        "Logique",
        "Rationalisme"
      ],
      "lieu": "Élée",
      "era": "ANTIQUE",
      "imgUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Portretbuste_van_Zeno_van_Elea_Paradigmata_graphices_variorum_artificum_%28serietitel%29%2C_RP-P-1907-4495.jpg/3840px-Portretbuste_van_Zeno_van_Elea_Paradigmata_graphices_variorum_artificum_%28serietitel%29%2C_RP-P-1907-4495.jpg",
      "stats": {
        "INFLUENCE": 78,
        "RIGUEUR": 82,
        "ANCRAGE": 65,
        "PORTÉE": 80,
        "CLÔTURE": 58,
        "CLARTÉ": 58
      },
      "fr": {
        "oeuvre": "Fragments",
        "entree": "Disciple de Parménide, Zénon d'Élée défend le monisme de son maître par l'arme du paradoxe. Achille ne rattrapera jamais la tortue. La flèche en vol est immobile. Ces arguments sont les premières applications de la réductio ad absurdum.",
        "concepts": [
          {
            "nom": "PARADOXE D'ACHILLE",
            "cat": "immanent",
            "type": "Logique",
            "puissance": 90,
            "desc": "Achille ne peut rattraper la tortue car il doit d'abord atteindre là où elle était, puis là où elle est, à l'infini — défense du monisme parménidéen."
          },
          {
            "nom": "PARADOXE DE LA FLÈCHE",
            "cat": "immanent",
            "type": "Logique",
            "puissance": 85,
            "desc": "À chaque instant la flèche occupe un espace précis — donc elle est au repos à chaque instant — donc elle ne bouge pas."
          },
          {
            "nom": "RÉDUCTIO AD ABSURDUM",
            "cat": "immanent",
            "type": "Logique",
            "puissance": 80,
            "desc": "Premier usage systématique de la démonstration par l'absurde — si la pluralité existait, elle serait à la fois finie et infinie."
          }
        ],
        "filiation": {
          "maitres": [
            "PARMENIDE"
          ],
          "disciples": [],
          "contre": [
            "HÉRACLITE",
            "IONIENS"
          ]
        }
      },
      "en": {
        "oeuvre": "Fragments",
        "entree": "A disciple of Parmenides, Zeno of Elea defends his master's monism through the weapon of paradox. Achilles will never catch the tortoise. The flying arrow is motionless. These arguments are the first systematic applications of reductio ad absurdum.",
        "concepts": [
          {
            "nom": "ACHILLES' PARADOX",
            "cat": "immanent",
            "type": "Logique",
            "puissance": 90,
            "desc": "Achilles cannot catch the tortoise because he must first reach where it was, then where it is, ad infinitum — a defense of Parmenidean monism."
          },
          {
            "nom": "THE ARROW PARADOX",
            "cat": "immanent",
            "type": "Logique",
            "puissance": 85,
            "desc": "At each instant the arrow occupies a precise space — thus it is at rest at each instant — thus it does not move."
          },
          {
            "nom": "REDUCTIO AD ABSURDUM",
            "cat": "immanent",
            "type": "Logique",
            "puissance": 80,
            "desc": "First systematic use of proof by contradiction — if plurality existed, it would be both finite and infinite."
          }
        ],
        "filiation": {
          "maitres": [
            "PARMENIDE"
          ],
          "disciples": [],
          "contre": [
            "HERACLITE",
            "THE IONIANS"
          ]
        }
      }
    },
    {
      "id": "036",
      "nom": "ARISTIPPE",
      "full": "Aristippe de Cyrène",
      "dates": "435-356 av. J.-C.",
      "types": [
        "Hédonisme"
      ],
      "lieu": "Cyrène",
      "era": "ANTIQUE",
      "imgUrl": "https://upload.wikimedia.org/wikipedia/commons/2/25/Aristippus.jpg",
      "stats": {
        "INFLUENCE": 62,
        "RIGUEUR": 42,
        "ANCRAGE": 48,
        "PORTÉE": 65,
        "CLÔTURE": 55,
        "CLARTÉ": 85
      },
      "fr": {
        "oeuvre": "Aucun écrit conservé",
        "entree": "Fondateur de l'école cyrénaïque, Aristippe pose que le plaisir corporel immédiat est le seul bien réel. Contrairement à Épicure, il ne cherche pas la paix de l'âme mais l'intensité du moment présent.",
        "concepts": [
          {
            "nom": "LE PLAISIR CORPOREL",
            "cat": "immanent",
            "type": "Hédonisme",
            "puissance": 82,
            "desc": "Le plaisir du corps est le seul bien — plus intense que le plaisir de l'âme et immédiatement accessible."
          },
          {
            "nom": "L'INSTANT PRÉSENT",
            "cat": "immanent",
            "type": "Hédonisme",
            "puissance": 78,
            "desc": "Seul le présent existe — le passé est révolu, le futur incertain ; seule la jouissance actuelle importe."
          },
          {
            "nom": "LA MAÎTRISE DE SOI",
            "cat": "transcendant",
            "type": "Hédonisme",
            "puissance": 65,
            "desc": "Je possède le plaisir sans être possédé par lui — l'homme sage jouit sans être esclave de ses désirs."
          }
        ],
        "filiation": {
          "maitres": [
            "SOCRATE"
          ],
          "disciples": [
            "THÉODORE",
            "HÉGÉSIAS"
          ],
          "contre": [
            "PLATON",
            "EPICURE (différence sur la qualité du plaisir)"
          ]
        }
      },
      "en": {
        "oeuvre": "No writings preserved",
        "entree": "Founder of the Cyrenaic school, Aristippus holds that immediate bodily pleasure is the only real good. Unlike Epicurus, he seeks not peace of soul but the intensity of the present moment.",
        "concepts": [
          {
            "nom": "BODILY PLEASURE",
            "cat": "immanent",
            "type": "Hédonisme",
            "puissance": 82,
            "desc": "Bodily pleasure is the only good — more intense than pleasure of soul and immediately accessible."
          },
          {
            "nom": "THE PRESENT MOMENT",
            "cat": "immanent",
            "type": "Hédonisme",
            "puissance": 78,
            "desc": "Only the present exists — the past is gone, the future uncertain; only current enjoyment matters."
          },
          {
            "nom": "SELF-MASTERY",
            "cat": "transcendant",
            "type": "Hédonisme",
            "puissance": 65,
            "desc": "I possess pleasure without being possessed by it — the wise man enjoys without being enslaved to desire."
          }
        ],
        "filiation": {
          "maitres": [
            "SOCRATE"
          ],
          "disciples": [
            "THEODORUS",
            "HEGESIAS"
          ],
          "contre": [
            "PLATON",
            "EPICURE (on quality of pleasure)"
          ]
        }
      }
    },
    {
      "id": "037",
      "nom": "EUBULIDE",
      "full": "Eubulidès de Mégare",
      "dates": "4e siècle av. J.-C.",
      "types": [
        "Logique"
      ],
      "lieu": "Mégare",
      "era": "ANTIQUE",
      "imgUrl": "https://upload.wikimedia.org/wikipedia/commons/8/8c/Vaticano_2011_%2888%29_Eubulides.JPG",
      "stats": {
        "INFLUENCE": 55,
        "RIGUEUR": 78,
        "ANCRAGE": 55,
        "PORTÉE": 72,
        "CLÔTURE": 50,
        "CLARTÉ": 68
      },
      "fr": {
        "oeuvre": "Aucun écrit conservé",
        "entree": "Eubulidès, chef de l'école mégarique, invente ou systématise les paradoxes logiques les plus durables de la philosophie. Le Menteur et le Tas (Sorite) restent au cœur des débats contemporains sur la vagueness et la sémantique.",
        "concepts": [
          {
            "nom": "LE PARADOXE DU MENTEUR",
            "cat": "immanent",
            "type": "Logique",
            "puissance": 90,
            "desc": "\"Cette affirmation est fausse\" — si vraie, elle est fausse ; si fausse, elle est vraie. Auto-référence qui brise la logique bivalente."
          },
          {
            "nom": "LE SORITE (TAS)",
            "cat": "immanent",
            "type": "Logique",
            "puissance": 82,
            "desc": "Un grain de sable n'est pas un tas ; ajouter un grain à un non-tas ne fait pas un tas — paradoxe de la vagueness des prédicats."
          },
          {
            "nom": "LE VOILÉ",
            "cat": "immanent",
            "type": "Logique",
            "puissance": 65,
            "desc": "Tu connais ton père ; cet homme voilé est ton père ; donc tu connais cet homme voilé — paradoxe de l'identité et de la connaissance."
          }
        ],
        "filiation": {
          "maitres": [
            "EUCLIDE DE MÉGARE"
          ],
          "disciples": [
            "CHRYSIPPE (réponse)"
          ],
          "contre": [
            "ARISTOTE"
          ]
        }
      },
      "en": {
        "oeuvre": "No writings preserved",
        "entree": "Eubulides, head of the Megarian school, invents or systematizes the most enduring logical paradoxes in philosophy. The Liar and the Heap (Sorites) remain central to contemporary debates on vagueness and semantics.",
        "concepts": [
          {
            "nom": "THE LIAR PARADOX",
            "cat": "immanent",
            "type": "Logique",
            "puissance": 90,
            "desc": "\"This statement is false\" — if true, it is false; if false, it is true. Self-reference that breaks bivalent logic."
          },
          {
            "nom": "THE SORITES (HEAP)",
            "cat": "immanent",
            "type": "Logique",
            "puissance": 82,
            "desc": "One grain is not a heap; adding one grain to a non-heap does not make a heap — paradox of the vagueness of predicates."
          },
          {
            "nom": "THE VEILED MAN",
            "cat": "immanent",
            "type": "Logique",
            "puissance": 65,
            "desc": "You know your father; this veiled man is your father; therefore you know this veiled man — paradox of identity and knowledge."
          }
        ],
        "filiation": {
          "maitres": [
            "EUCLID OF MEGARA"
          ],
          "disciples": [
            "CHRYSIPPUS (response)"
          ],
          "contre": [
            "ARISTOTE"
          ]
        }
      }
    },
    {
      "id": "038",
      "nom": "PYRRHO",
      "full": "Pyrrhon d'Élis",
      "dates": "360-270 av. J.-C.",
      "types": [
        "Scepticisme"
      ],
      "lieu": "Élis",
      "era": "ANTIQUE",
      "imgUrl": "https://upload.wikimedia.org/wikipedia/commons/1/1b/Philosopher%2C_marble_head%2C_Roman_copy%2C_AM_Corfu%2C_Krfm22.jpg",
      "stats": {
        "INFLUENCE": 75,
        "RIGUEUR": 58,
        "ANCRAGE": 35,
        "PORTÉE": 80,
        "CLÔTURE": 90,
        "CLARTÉ": 68
      },
      "fr": {
        "oeuvre": "Aucun écrit conservé",
        "entree": "Pyrrhon fonde le scepticisme radical. Aucune chose n'est ni belle ni laide, ni juste ni injuste — tout est indifférent. La suspension du jugement (epoché) mène à l'ataraxie. Il pratique sa philosophie de façon spectaculaire, indifférent aux dangers.",
        "concepts": [
          {
            "nom": "L'EPOCHÈ",
            "cat": "immanent",
            "type": "Scepticisme",
            "puissance": 90,
            "desc": "Suspension de tout jugement sur la nature des choses — ni affirmer ni nier, pour dissoudre l'anxiété épistémique."
          },
          {
            "nom": "L'ISOSTHÉNIE",
            "cat": "immanent",
            "type": "Scepticisme",
            "puissance": 85,
            "desc": "Tout argument a un contre-argument de force égale — l'équilibre des raisons contraires justifie le silence."
          },
          {
            "nom": "L'ATARAXIE PYRR.",
            "cat": "immanent",
            "type": "Scepticisme",
            "puissance": 80,
            "desc": "La paix de l'âme découle de la suspension du jugement — cesser de chercher la vérité absolue, c'est cesser de souffrir."
          }
        ],
        "filiation": {
          "maitres": [
            "ANAXARQUE",
            "PENSÉE INDIENNE"
          ],
          "disciples": [
            "TIMON",
            "ÉNÉSIDÈME",
            "SEXTUS EMPIRICUS"
          ],
          "contre": [
            "DOGMATIQUES"
          ]
        }
      },
      "en": {
        "oeuvre": "No writings preserved",
        "entree": "Pyrrho founds radical skepticism. No thing is beautiful or ugly, just or unjust — all is indifferent. Suspension of judgment (epoché) leads to ataraxia. He lived his philosophy spectacularly, indifferent to dangers.",
        "concepts": [
          {
            "nom": "EPOCHÉ",
            "cat": "immanent",
            "type": "Scepticisme",
            "puissance": 90,
            "desc": "Suspension of all judgment on the nature of things — neither affirm nor deny, dissolving epistemic anxiety."
          },
          {
            "nom": "ISOSTHENIA",
            "cat": "immanent",
            "type": "Scepticisme",
            "puissance": 85,
            "desc": "Every argument has an equally strong counter-argument — the balance of opposing reasons justifies silence."
          },
          {
            "nom": "PYRRHONIST ATARAXIA",
            "cat": "immanent",
            "type": "Scepticisme",
            "puissance": 80,
            "desc": "Peace of soul follows from suspension of judgment — cease seeking absolute truth, cease suffering."
          }
        ],
        "filiation": {
          "maitres": [
            "ANAXARCHUS",
            "INDIAN THOUGHT"
          ],
          "disciples": [
            "TIMON",
            "AENESIDEMUS",
            "SEXTUS EMPIRICUS"
          ],
          "contre": [
            "THE DOGMATISTS"
          ]
        }
      }
    },
    {
      "id": "039",
      "nom": "ZENOCITI",
      "full": "Zénon de Kition",
      "dates": "334-262 av. J.-C.",
      "types": [
        "Stoïcisme"
      ],
      "lieu": "Kition (Chypre)",
      "era": "ANTIQUE",
      "imgUrl": "https://upload.wikimedia.org/wikipedia/commons/b/bc/Paolo_Monti_-_Servizio_fotografico_%28Napoli%2C_1969%29_-_BEIC_6353768.jpg",
      "stats": {
        "INFLUENCE": 85,
        "RIGUEUR": 70,
        "ANCRAGE": 75,
        "PORTÉE": 80,
        "CLÔTURE": 78,
        "CLARTÉ": 72
      },
      "fr": {
        "oeuvre": "Aucun écrit conservé",
        "entree": "Fondateur du stoïcisme, Zénon de Kition enseigne dans le Portique peint (Stoa Poikilé) d'Athènes. Le logos universel imprègne le cosmos. La vertu seule est un bien ; tout le reste est indifférent. Vivre selon la nature, c'est vivre selon la raison.",
        "concepts": [
          {
            "nom": "LA RAISON UNIVERSELLE",
            "cat": "transcendant",
            "type": "Stoïcisme",
            "puissance": 88,
            "desc": "Le logos divin pénètre et gouverne tout — la réalité est rationnelle par nature, pas arbitraire ni chaotique."
          },
          {
            "nom": "LA VERTU SEULE EST BIEN",
            "cat": "immanent",
            "type": "Stoïcisme",
            "puissance": 90,
            "desc": "Seule la vertu morale est un bien ; richesse, santé, réputation sont des \"indifférents\" — invalide tout hédonisme et tout matérialisme moral."
          },
          {
            "nom": "VIVRE SELON NATURE",
            "cat": "immanent",
            "type": "Stoïcisme",
            "puissance": 82,
            "desc": "L'excellence humaine consiste à vivre en accord avec la nature rationnelle — la raison nous définit et nous oblige."
          }
        ],
        "filiation": {
          "maitres": [
            "DIOGENE",
            "CRATÈS",
            "STILPON"
          ],
          "disciples": [
            "CLÉANTHE",
            "CHRYSIPPE"
          ],
          "contre": [
            "EPICURE",
            "CYNIQUES (dépasse)"
          ]
        }
      },
      "en": {
        "oeuvre": "No writings preserved",
        "entree": "Founder of Stoicism, Zeno of Citium teaches in the Painted Porch (Stoa Poikilé) in Athens. The universal logos pervades the cosmos. Virtue alone is a good; everything else is indifferent. To live according to nature is to live according to reason.",
        "concepts": [
          {
            "nom": "UNIVERSAL REASON",
            "cat": "transcendant",
            "type": "Stoïcisme",
            "puissance": 88,
            "desc": "Divine logos pervades and governs all — reality is rational by nature, not arbitrary or chaotic."
          },
          {
            "nom": "VIRTUE ALONE IS GOOD",
            "cat": "immanent",
            "type": "Stoïcisme",
            "puissance": 90,
            "desc": "Only moral virtue is a good; wealth, health, reputation are 'indifferents' — invalidates all hedonism and moral materialism."
          },
          {
            "nom": "LIVE ACCORDING TO NATURE",
            "cat": "immanent",
            "type": "Stoïcisme",
            "puissance": 82,
            "desc": "Human excellence consists in living in accord with rational nature — reason defines us and obligates us."
          }
        ],
        "filiation": {
          "maitres": [
            "DIOGENE",
            "CRATES",
            "STILPO"
          ],
          "disciples": [
            "CLEANTHES",
            "CHRYSIPPUS"
          ],
          "contre": [
            "EPICURE",
            "THE CYNICS (surpassed)"
          ]
        }
      }
    },
    {
      "id": "040",
      "nom": "TIMON",
      "full": "Timon de Phlionte",
      "dates": "320-230 av. J.-C.",
      "types": [
        "Scepticisme"
      ],
      "lieu": "Phlionte",
      "era": "ANTIQUE",
      "imgUrl": "https://upload.wikimedia.org/wikipedia/commons/6/69/Timon_in_Thomas_Stanley_History_of_Philosophy.jpg",
      "stats": {
        "INFLUENCE": 52,
        "RIGUEUR": 55,
        "ANCRAGE": 38,
        "PORTÉE": 62,
        "CLÔTURE": 72,
        "CLARTÉ": 65
      },
      "fr": {
        "oeuvre": "Les Silloi",
        "entree": "Principal disciple de Pyrrhon, Timon systématise le pyrrhonisme et le diffuse par ses écrits satiriques, les Silloi. Il ridiculise les philosophes dogmatiques, ironisant sur leur prétention à connaître la vérité.",
        "concepts": [
          {
            "nom": "L'ACATALEPSIE",
            "cat": "immanent",
            "type": "Scepticisme",
            "puissance": 78,
            "desc": "Rien ne peut être appréhendé avec certitude — nos facultés cognitives sont fondamentalement non-fiables."
          },
          {
            "nom": "L'APHASIE",
            "cat": "immanent",
            "type": "Scepticisme",
            "puissance": 72,
            "desc": "Face à l'incertitude radicale, le sage garde le silence plutôt que de proférer des affirmations dogmatiques."
          },
          {
            "nom": "LA SATIRE SCEPTIQUE",
            "cat": "immanent",
            "type": "Scepticisme",
            "puissance": 65,
            "desc": "Les Silloi raillent les grands philosophes — la poésie comme arme sceptique contre la prétention dogmatique."
          }
        ],
        "filiation": {
          "maitres": [
            "PYRRHO"
          ],
          "disciples": [
            "ÉNÉSIDÈME"
          ],
          "contre": [
            "PHILOSOPHES DOGMATIQUES"
          ]
        }
      },
      "en": {
        "oeuvre": "The Silloi",
        "entree": "Pyrrho's principal disciple, Timon systematizes Pyrrhonism and spreads it through his satirical writings, the Silloi. He ridicules dogmatic philosophers, ironizing their pretension to know the truth.",
        "concepts": [
          {
            "nom": "ACATALEPSY",
            "cat": "immanent",
            "type": "Scepticisme",
            "puissance": 78,
            "desc": "Nothing can be apprehended with certainty — our cognitive faculties are fundamentally unreliable."
          },
          {
            "nom": "APHASIA",
            "cat": "immanent",
            "type": "Scepticisme",
            "puissance": 72,
            "desc": "Faced with radical uncertainty, the wise man keeps silent rather than making dogmatic assertions."
          },
          {
            "nom": "SKEPTICAL SATIRE",
            "cat": "immanent",
            "type": "Scepticisme",
            "puissance": 65,
            "desc": "The Silloi mock the great philosophers — poetry as a skeptical weapon against dogmatic pretension."
          }
        ],
        "filiation": {
          "maitres": [
            "PYRRHO"
          ],
          "disciples": [
            "AENESIDEMUS"
          ],
          "contre": [
            "DOGMATIC PHILOSOPHERS"
          ]
        }
      }
    },
    {
      "id": "041",
      "nom": "MARCAURE",
      "full": "Marc Aurèle",
      "dates": "121-180",
      "types": [
        "Stoïcisme"
      ],
      "lieu": "Rome",
      "era": "ANTIQUE",
      "imgUrl": "https://upload.wikimedia.org/wikipedia/commons/1/17/Aurelius_of_Rome_Honorius_bust_01_plain.jpg",
      "stats": {
        "INFLUENCE": 88,
        "RIGUEUR": 58,
        "ANCRAGE": 82,
        "PORTÉE": 62,
        "CLÔTURE": 88,
        "CLARTÉ": 90
      },
      "fr": {
        "oeuvre": "Pensées (Meditations)",
        "entree": "Empereurphilosophe stoïcien, Marc Aurèle écrit ses Pensées non pour publier mais pour se gouverner lui-même. Le stoïcisme y devient une pratique intérieure constante : s'examiner, se corriger, résister aux passions en gouvernant l'empire avec justice.",
        "concepts": [
          {
            "nom": "L'INTÉRIEUR INVIOLABLE",
            "cat": "immanent",
            "type": "Stoïcisme",
            "puissance": 90,
            "desc": "Nul ne peut me nuire sans mon consentement — la citadelle intérieure reste inexpugnable quoi que fasse le monde extérieur."
          },
          {
            "nom": "MEMENTO MORI",
            "cat": "immanent",
            "type": "Stoïcisme",
            "puissance": 85,
            "desc": "La mort constamment à l'esprit dissout les vaines ambitions et concentre l'attention sur l'action juste du moment présent."
          },
          {
            "nom": "LE DEVOIR DE GOUVERNER",
            "cat": "immanent",
            "type": "Stoïcisme",
            "puissance": 72,
            "desc": "Gouverner avec justice est un devoir stoïcien — le sage agit même dans les rôles imposés par le destin sans s'y attacher."
          }
        ],
        "filiation": {
          "maitres": [
            "EPICTETE",
            "RUSTICUS"
          ],
          "disciples": [],
          "contre": []
        }
      },
      "en": {
        "oeuvre": "Meditations",
        "entree": "Philosopher-emperor and Stoic, Marcus Aurelius writes his Meditations not for publication but for self-governance. Stoicism becomes a constant interior practice: self-examination, self-correction, resisting passion while governing the empire with justice.",
        "concepts": [
          {
            "nom": "THE INVIOLABLE INNER",
            "cat": "immanent",
            "type": "Stoïcisme",
            "puissance": 90,
            "desc": "No one can harm me without my consent — the inner citadel remains impregnable whatever the outside world does."
          },
          {
            "nom": "MEMENTO MORI",
            "cat": "immanent",
            "type": "Stoïcisme",
            "puissance": 85,
            "desc": "Keeping death constantly in mind dissolves vain ambitions and focuses attention on the just action of the present moment."
          },
          {
            "nom": "THE DUTY TO GOVERN",
            "cat": "immanent",
            "type": "Stoïcisme",
            "puissance": 72,
            "desc": "Governing justly is a Stoic duty — the wise man acts even in roles imposed by fate without becoming attached to them."
          }
        ],
        "filiation": {
          "maitres": [
            "EPICTETE",
            "RUSTICUS"
          ],
          "disciples": [],
          "contre": []
        }
      }
    },
    {
      "id": "042",
      "nom": "PLOTIN",
      "full": "Plotin",
      "dates": "204-270",
      "types": [
        "Idéalisme",
        "Mysticisme"
      ],
      "lieu": "Égypte",
      "era": "ANTIQUE",
      "imgUrl": "https://upload.wikimedia.org/wikipedia/commons/e/ee/Plotinos.jpg",
      "stats": {
        "INFLUENCE": 80,
        "RIGUEUR": 60,
        "ANCRAGE": 62,
        "PORTÉE": 85,
        "CLÔTURE": 55,
        "CLARTÉ": 38
      },
      "fr": {
        "oeuvre": "Les Ennéades",
        "entree": "Plotin fonde le néoplatonisme : toute réalité émane de l'Un, principe absolu au-delà de l'être et de la pensée. De l'Un procède le Nous (Intelligence), puis l'Âme, puis la Matière. La philosophie est l'ascension de l'âme vers l'Un.",
        "concepts": [
          {
            "nom": "L'UN",
            "cat": "transcendant",
            "type": "Mysticisme",
            "puissance": 90,
            "desc": "Principe absolu au-delà de tout prédicat — ni être ni pensée mais source de tout. Bascule totale du cadre métaphysique platonicien."
          },
          {
            "nom": "L'ÉMANATION",
            "cat": "immanent",
            "type": "Idéalisme",
            "puissance": 85,
            "desc": "La réalité procède de l'Un par débordement nécessaire : Un → Nous → Âme → Matière, en degrés décroissants de perfection."
          },
          {
            "nom": "LA CONTEMPLATION",
            "cat": "immanent",
            "type": "Mysticisme",
            "puissance": 82,
            "desc": "L'âme peut remonter jusqu'à l'Un par la philosophie et la contemplation — la mystique comme achèvement de la métaphysique."
          }
        ],
        "filiation": {
          "maitres": [
            "PLATON",
            "AMMONIUS SACCAS"
          ],
          "disciples": [
            "PORPHYRE",
            "JAMBLIQUE",
            "PROCLUS"
          ],
          "contre": [
            "GNOSTIQUES",
            "MATÉRIALISTES"
          ]
        }
      },
      "en": {
        "oeuvre": "The Enneads",
        "entree": "Plotinus founds Neoplatonism: all reality emanates from the One, an absolute principle beyond being and thought. From the One proceeds Nous (Intelligence), then Soul, then Matter. Philosophy is the soul's ascent toward the One.",
        "concepts": [
          {
            "nom": "THE ONE",
            "cat": "transcendant",
            "type": "Mysticisme",
            "puissance": 90,
            "desc": "Absolute principle beyond all predication — neither being nor thought but source of all. A total shift of the Platonic metaphysical frame."
          },
          {
            "nom": "EMANATION",
            "cat": "immanent",
            "type": "Idéalisme",
            "puissance": 85,
            "desc": "Reality proceeds from the One by necessary overflow: One → Nous → Soul → Matter, in decreasing degrees of perfection."
          },
          {
            "nom": "CONTEMPLATION",
            "cat": "immanent",
            "type": "Mysticisme",
            "puissance": 82,
            "desc": "The soul can ascend back to the One through philosophy and contemplation — mysticism as the fulfillment of metaphysics."
          }
        ],
        "filiation": {
          "maitres": [
            "PLATON",
            "AMMONIUS SACCAS"
          ],
          "disciples": [
            "PORPHYRY",
            "IAMBLICHUS",
            "PROCLUS"
          ],
          "contre": [
            "THE GNOSTICS",
            "THE MATERIALISTS"
          ]
        }
      }
    },
    {
      "id": "043",
      "nom": "ERIGENE",
      "full": "Jean Scot Érigène",
      "dates": "815-877",
      "types": [
        "Philo. Religion",
        "Idéalisme"
      ],
      "lieu": "Irlande",
      "era": "MÉDIÉVALE",
      "imgUrl": "",
      "stats": {
        "INFLUENCE": 65,
        "RIGUEUR": 62,
        "ANCRAGE": 60,
        "PORTÉE": 72,
        "CLÔTURE": 55,
        "CLARTÉ": 42
      },
      "fr": {
        "oeuvre": "De Divisione Naturae",
        "entree": "Érigène, seul grand philosophe spéculatif du haut Moyen Âge occidental, divise la Nature en quatre modes. Dieu est la Nature qui crée sans être créée. Sa synthèse néoplatonicienne et chrétienne sera jugée panthéiste par l'Église.",
        "concepts": [
          {
            "nom": "LA DIVISION DE LA NATURE",
            "cat": "transcendant",
            "type": "Philo. Religion",
            "puissance": 78,
            "desc": "Nature divisée en quatre : qui crée sans être créée (Dieu), créée et crée (Idées), créée sans créer (monde), ni créée ni crée (Dieu comme fin)."
          },
          {
            "nom": "L'APOPHASE",
            "cat": "transcendant",
            "type": "Philo. Religion",
            "puissance": 75,
            "desc": "Dieu transcende toute catégorie — on ne peut dire que ce qu'Il n'est pas. Théologie négative radicale."
          },
          {
            "nom": "RAISON ET RÉVÉLATION",
            "cat": "immanent",
            "type": "Philo. Religion",
            "puissance": 70,
            "desc": "La vraie raison et la vraie autorité ne peuvent se contredire — l'Écriture doit être interprétée allégoriquement quand elle contredit la raison."
          }
        ],
        "filiation": {
          "maitres": [
            "PSEUDO-DENYS",
            "MAXIME LE CONFESSEUR",
            "AUGUSTIN"
          ],
          "disciples": [
            "AMALRIC DE BÈNE"
          ],
          "contre": [
            "ORTHODOXIE CATHOLIQUE"
          ]
        }
      },
      "en": {
        "oeuvre": "De Divisione Naturae",
        "entree": "Eriugena, the only major speculative philosopher of the early Western Middle Ages, divides Nature into four modes. God is the Nature that creates without being created. His Neoplatonic-Christian synthesis will be condemned as pantheist by the Church.",
        "concepts": [
          {
            "nom": "DIVISION OF NATURE",
            "cat": "transcendant",
            "type": "Philo. Religion",
            "puissance": 78,
            "desc": "Nature divided into four: that which creates but is not created (God), created and creates (Ideas), created but does not create (world), neither created nor creates (God as end)."
          },
          {
            "nom": "APOPHASIS",
            "cat": "transcendant",
            "type": "Philo. Religion",
            "puissance": 75,
            "desc": "God transcends all categories — one can only say what He is not. Radical negative theology."
          },
          {
            "nom": "REASON AND REVELATION",
            "cat": "immanent",
            "type": "Philo. Religion",
            "puissance": 70,
            "desc": "True reason and true authority cannot contradict each other — Scripture must be interpreted allegorically when it conflicts with reason."
          }
        ],
        "filiation": {
          "maitres": [
            "PSEUDO-DIONYSIUS",
            "MAXIMUS THE CONFESSOR",
            "AUGUSTIN"
          ],
          "disciples": [
            "AMALRIC OF BENA"
          ],
          "contre": [
            "CATHOLIC ORTHODOXY"
          ]
        }
      }
    },
    {
      "id": "044",
      "nom": "ANSELME",
      "full": "Saint Anselme de Cantorbéry",
      "dates": "1033-1109",
      "types": [
        "Philo. Religion",
        "Rationalisme"
      ],
      "lieu": "Aoste (Italie)",
      "era": "MÉDIÉVALE",
      "imgUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Anselm_of_Canterbury%2C_seal.svg/960px-Anselm_of_Canterbury%2C_seal.svg.png",
      "stats": {
        "INFLUENCE": 80,
        "RIGUEUR": 82,
        "ANCRAGE": 72,
        "PORTÉE": 72,
        "CLÔTURE": 65,
        "CLARTÉ": 62
      },
      "fr": {
        "oeuvre": "Proslogion",
        "entree": "Anselme formule l'argument ontologique : Dieu est ce dont on ne peut rien concevoir de plus grand. Exist-il seulement en pensée ou aussi en réalité ? L'existence en réalité est plus grande — donc Dieu existe nécessairement.",
        "concepts": [
          {
            "nom": "L'ARGUMENT ONTOLOGIQUE",
            "cat": "immanent",
            "type": "Philo. Religion",
            "puissance": 90,
            "desc": "Dieu = ce dont rien de plus grand ne peut être conçu. Exister en réalité > exister en pensée seulement ; donc Dieu existe en réalité."
          },
          {
            "nom": "CUR DEUS HOMO",
            "cat": "transcendant",
            "type": "Philo. Religion",
            "puissance": 78,
            "desc": "Pourquoi Dieu s'est-il fait homme ? Seul un Dieu-homme peut offrir une satisfaction infinie pour le péché humain fini."
          },
          {
            "nom": "FIDES QUAERENS INTELLECTUM",
            "cat": "immanent",
            "type": "Rationalisme",
            "puissance": 72,
            "desc": "La foi cherche la compréhension — on croit pour comprendre, non comprend pour croire. La raison éclaire la foi sans la précéder."
          }
        ],
        "filiation": {
          "maitres": [
            "AUGUSTIN",
            "PLATON"
          ],
          "disciples": [
            "AQUIN",
            "DESCARTES (argum. ontol.)"
          ],
          "contre": [
            "GAUNILO",
            "KANT (critique de l'argum. ontol.)"
          ]
        }
      },
      "en": {
        "oeuvre": "Proslogion",
        "entree": "Anselm formulates the ontological argument: God is that than which nothing greater can be conceived. Does He exist only in thought or also in reality? Existence in reality is greater — therefore God necessarily exists.",
        "concepts": [
          {
            "nom": "THE ONTOLOGICAL ARGUMENT",
            "cat": "immanent",
            "type": "Philo. Religion",
            "puissance": 90,
            "desc": "God = that than which nothing greater can be conceived. Existing in reality > existing in thought only; therefore God exists in reality."
          },
          {
            "nom": "CUR DEUS HOMO",
            "cat": "transcendant",
            "type": "Philo. Religion",
            "puissance": 78,
            "desc": "Why did God become man? Only a God-man can provide infinite satisfaction for finite human sin."
          },
          {
            "nom": "FAITH SEEKING UNDERSTANDING",
            "cat": "immanent",
            "type": "Rationalisme",
            "puissance": 72,
            "desc": "One believes in order to understand, not understands in order to believe. Reason illuminates faith without preceding it."
          }
        ],
        "filiation": {
          "maitres": [
            "AUGUSTIN",
            "PLATON"
          ],
          "disciples": [
            "AQUIN",
            "DESCARTES (ontol. arg.)"
          ],
          "contre": [
            "GAUNILO",
            "KANT (critique of ontol. arg.)"
          ]
        }
      }
    },
    {
      "id": "045",
      "nom": "OCKHAM",
      "full": "Guillaume d'Ockham",
      "dates": "1287-1347",
      "types": [
        "Logique",
        "Scepticisme"
      ],
      "lieu": "Angleterre",
      "era": "MÉDIÉVALE",
      "imgUrl": "https://upload.wikimedia.org/wikipedia/commons/7/70/William_of_Ockham.png",
      "stats": {
        "INFLUENCE": 85,
        "RIGUEUR": 90,
        "ANCRAGE": 72,
        "PORTÉE": 82,
        "CLÔTURE": 58,
        "CLARTÉ": 68
      },
      "fr": {
        "oeuvre": "Somme de Logique",
        "entree": "Le rasoir d'Ockham : ne pas multiplier les entités sans nécessité. Ockham pose le nominalisme — les universaux ne sont que des noms, seuls les individus existent. Ce geste brise la scolastique thomiste et prépare la révolution scientifique.",
        "concepts": [
          {
            "nom": "LE RASOIR D'OCKHAM",
            "cat": "immanent",
            "type": "Logique",
            "puissance": 95,
            "desc": "Principe d'économie : ne pas multiplier les entités sans nécessité — l'explication la plus simple est préférable."
          },
          {
            "nom": "LE NOMINALISME",
            "cat": "transcendant",
            "type": "Logique",
            "puissance": 88,
            "desc": "Seuls les individus existent — les universaux sont de simples noms sans réalité extramentale. Bascule qui invalide le réalisme platonicien."
          },
          {
            "nom": "FOI ET RAISON SÉPARÉES",
            "cat": "transcendant",
            "type": "Scepticisme",
            "puissance": 80,
            "desc": "La théologie ne peut être prouvée par la raison — foi et raison opèrent dans des domaines totalement distincts."
          }
        ],
        "filiation": {
          "maitres": [
            "DUNS SCOT",
            "ARISTOTE (logique)"
          ],
          "disciples": [
            "LUTHER (influence)",
            "PHILOSOPHIE ANALYTIQUE (influence)"
          ],
          "contre": [
            "AQUIN",
            "SCOTUS (réalisme)"
          ]
        }
      },
      "en": {
        "oeuvre": "Summa Logicae",
        "entree": "Ockham's razor: do not multiply entities beyond necessity. Ockham posits nominalism — universals are mere names, only individuals exist. This gesture breaks Thomistic scholasticism and prepares the scientific revolution.",
        "concepts": [
          {
            "nom": "OCKHAM'S RAZOR",
            "cat": "immanent",
            "type": "Logique",
            "puissance": 95,
            "desc": "Principle of parsimony: do not multiply entities beyond necessity — the simplest explanation is preferable."
          },
          {
            "nom": "NOMINALISM",
            "cat": "transcendant",
            "type": "Logique",
            "puissance": 88,
            "desc": "Only individuals exist — universals are mere names with no extra-mental reality. Invalidates Platonic realism."
          },
          {
            "nom": "FAITH AND REASON APART",
            "cat": "transcendant",
            "type": "Scepticisme",
            "puissance": 80,
            "desc": "Theology cannot be proved by reason — faith and reason operate in entirely separate domains."
          }
        ],
        "filiation": {
          "maitres": [
            "DUNS SCOTUS",
            "ARISTOTLE (logic)"
          ],
          "disciples": [
            "LUTHER (influence)",
            "ANALYTIC PHILOSOPHY (influence)"
          ],
          "contre": [
            "AQUIN",
            "SCOTUS (realism)"
          ]
        }
      }
    },
    {
      "id": "046",
      "nom": "MACHIAVEL",
      "full": "Nicolas Machiavel",
      "dates": "1469-1527",
      "types": [
        "Philo. Politique",
        "Réalisme"
      ],
      "lieu": "Florence",
      "era": "RENAISSANCE",
      "imgUrl": "https://upload.wikimedia.org/wikipedia/commons/c/c4/Portrait_of_Niccol%C3%B2_Machiavelli_by_Santi_di_Tito.jpg",
      "stats": {
        "INFLUENCE": 90,
        "RIGUEUR": 75,
        "ANCRAGE": 70,
        "PORTÉE": 92,
        "CLÔTURE": 62,
        "CLARTÉ": 88
      },
      "fr": {
        "oeuvre": "Le Prince",
        "entree": "Machiavel sépare la politique de la morale : le prince doit être observé tel qu'il est, non tel qu'il devrait être. Cette rupture inaugurale fait de lui le fondateur de la science politique moderne.",
        "concepts": [
          {
            "nom": "LA VIRTÙ",
            "cat": "immanent",
            "type": "Philo. Politique",
            "puissance": 88,
            "desc": "L'excellence politique = capacité à saisir la Fortune par la force, la ruse et l'adaptabilité — vertu sans morale au sens chrétien."
          },
          {
            "nom": "LE RÉALISME POLITIQUE",
            "cat": "transcendant",
            "type": "Réalisme",
            "puissance": 90,
            "desc": "Bascule fondatrice : étudier la politique comme elle est, non comme elle devrait être — la morale n'a pas sa place dans la raison d'État."
          },
          {
            "nom": "LE LION ET LE RENARD",
            "cat": "immanent",
            "type": "Philo. Politique",
            "puissance": 82,
            "desc": "Le prince doit combiner force et ruse — ni l'un ni l'autre ne suffit seul pour gouverner efficacement."
          }
        ],
        "filiation": {
          "maitres": [
            "THUCYDIDE",
            "POLYBE"
          ],
          "disciples": [
            "HOBBES",
            "SPINOZA (politique)",
            "GRAMSCI"
          ],
          "contre": [
            "HUMANISME CHRÉTIEN",
            "CICÉRON"
          ]
        }
      },
      "en": {
        "oeuvre": "The Prince",
        "entree": "Machiavelli separates politics from morality: the prince must be studied as he is, not as he should be. This inaugural rupture makes him the founder of modern political science.",
        "concepts": [
          {
            "nom": "VIRTÙ",
            "cat": "immanent",
            "type": "Philo. Politique",
            "puissance": 88,
            "desc": "Political excellence = the capacity to seize Fortune through force, cunning, and adaptability — virtue without Christian morality."
          },
          {
            "nom": "POLITICAL REALISM",
            "cat": "transcendant",
            "type": "Réalisme",
            "puissance": 90,
            "desc": "A founding shift: study politics as it is, not as it should be — morality has no place in reason of state."
          },
          {
            "nom": "THE LION AND THE FOX",
            "cat": "immanent",
            "type": "Philo. Politique",
            "puissance": 82,
            "desc": "The prince must combine force and cunning — neither alone suffices for effective governance."
          }
        ],
        "filiation": {
          "maitres": [
            "THUCYDIDES",
            "POLYBIUS"
          ],
          "disciples": [
            "HOBBES",
            "SPINOZA (politics)",
            "GRAMSCI"
          ],
          "contre": [
            "CHRISTIAN HUMANISM",
            "CICERO"
          ]
        }
      }
    },
    {
      "id": "047",
      "nom": "BACON",
      "full": "Francis Bacon",
      "dates": "1561-1626",
      "types": [
        "Empirisme",
        "Philo. Sciences"
      ],
      "lieu": "Angleterre",
      "era": "RENAISSANCE",
      "imgUrl": "https://upload.wikimedia.org/wikipedia/commons/5/5c/Francis_Bacon%2C_Viscount_St_Alban_from_NPG_%282%29.jpg",
      "stats": {
        "INFLUENCE": 85,
        "RIGUEUR": 68,
        "ANCRAGE": 62,
        "PORTÉE": 85,
        "CLÔTURE": 55,
        "CLARTÉ": 78
      },
      "fr": {
        "oeuvre": "Novum Organum",
        "entree": "Bacon renverse Aristote : la connaissance ne vient pas de la déduction syllogistique mais de l'observation systématique et de l'induction. Savoir c'est pouvoir — la science doit maîtriser la nature pour le bénéfice de l'humanité.",
        "concepts": [
          {
            "nom": "LES IDOLES",
            "cat": "transcendant",
            "type": "Empirisme",
            "puissance": 85,
            "desc": "Quatre illusions qui faussent notre connaissance : idoles de la tribu, de la caverne, du forum, du théâtre — doivent être éliminées avant toute enquête."
          },
          {
            "nom": "L'INDUCTION NOUVELLE",
            "cat": "immanent",
            "type": "Philo. Sciences",
            "puissance": 88,
            "desc": "La méthode scientifique part de l'observation et monte vers les principes par élimination graduelle — contre la déduction scolastique."
          },
          {
            "nom": "SAVOIR C'EST POUVOIR",
            "cat": "transcendant",
            "type": "Philo. Sciences",
            "puissance": 80,
            "desc": "Bascule du cadre contemplatif : la science ne vise pas la vérité pour elle-même mais la domination de la nature au profit de l'homme."
          }
        ],
        "filiation": {
          "maitres": [
            "ARISTOTE (contre)"
          ],
          "disciples": [
            "LOCKE",
            "HUME",
            "PHILOSOPHIE EMPIRISTE"
          ],
          "contre": [
            "SCOLASTIQUE",
            "ARISTOTE (méthode)"
          ]
        }
      },
      "en": {
        "oeuvre": "Novum Organum",
        "entree": "Bacon overturns Aristotle: knowledge comes not from syllogistic deduction but from systematic observation and induction. Knowledge is power — science must master nature for the benefit of humanity.",
        "concepts": [
          {
            "nom": "THE IDOLS",
            "cat": "transcendant",
            "type": "Empirisme",
            "puissance": 85,
            "desc": "Four illusions distorting knowledge: idols of tribe, cave, marketplace, and theatre — must be cleared away before any inquiry."
          },
          {
            "nom": "THE NEW INDUCTION",
            "cat": "immanent",
            "type": "Philo. Sciences",
            "puissance": 88,
            "desc": "The scientific method starts from observation and rises to principles by gradual elimination — against scholastic deduction."
          },
          {
            "nom": "KNOWLEDGE IS POWER",
            "cat": "transcendant",
            "type": "Philo. Sciences",
            "puissance": 80,
            "desc": "A shift from the contemplative frame: science aims not at truth for its own sake but at mastery of nature for human benefit."
          }
        ],
        "filiation": {
          "maitres": [
            "ARISTOTLE (against)"
          ],
          "disciples": [
            "LOCKE",
            "HUME",
            "EMPIRICIST PHILOSOPHY"
          ],
          "contre": [
            "SCHOLASTICISM",
            "ARISTOTLE (method)"
          ]
        }
      }
    },
    {
      "id": "048",
      "nom": "HOBBES",
      "full": "Thomas Hobbes",
      "dates": "1588-1679",
      "types": [
        "Contractualisme",
        "Matérialisme"
      ],
      "lieu": "Angleterre",
      "era": "MODERNE",
      "imgUrl": "https://upload.wikimedia.org/wikipedia/commons/d/d8/Thomas_Hobbes_%28portrait%29.jpg",
      "stats": {
        "INFLUENCE": 90,
        "RIGUEUR": 80,
        "ANCRAGE": 72,
        "PORTÉE": 85,
        "CLÔTURE": 60,
        "CLARTÉ": 82
      },
      "fr": {
        "oeuvre": "Léviathan",
        "entree": "Sans État, la vie humaine est solitaire, pauvre, horrible, brutale et courte. Hobbes fonde le contractualisme moderne par la peur : les hommes abdiquent leurs droits naturels au profit d'un souverain absolu pour fuir la guerre de tous contre tous.",
        "concepts": [
          {
            "nom": "L'ÉTAT DE NATURE",
            "cat": "transcendant",
            "type": "Contractualisme",
            "puissance": 88,
            "desc": "Sans gouvernement : guerre de tous contre tous — la vie humaine est un état de conflit permanent dont seul l'État peut sortir."
          },
          {
            "nom": "LE LÉVIATHAN",
            "cat": "immanent",
            "type": "Contractualisme",
            "puissance": 85,
            "desc": "Le contrat social transfère tous les droits naturels à un souverain absolu en échange de la sécurité — la peur comme fondement du politique."
          },
          {
            "nom": "LE MATÉRIALISME TOTAL",
            "cat": "transcendant",
            "type": "Matérialisme",
            "puissance": 80,
            "desc": "Tout est corps en mouvement — pensées, sentiments, moral : toute réalité est physique. Bascule qui invalide l'âme immortelle et Dieu."
          }
        ],
        "filiation": {
          "maitres": [
            "MACHIAVEL",
            "BACON",
            "GALILÉE"
          ],
          "disciples": [
            "LOCKE (réaction)",
            "ROUSSEAU (réaction)"
          ],
          "contre": [
            "ARISTOTLE (political animal)",
            "ROBERT FILMER"
          ]
        }
      },
      "en": {
        "oeuvre": "Leviathan",
        "entree": "Without a state, human life is solitary, poor, nasty, brutish, and short. Hobbes founds modern contractualism through fear: men abdicate their natural rights to an absolute sovereign to escape the war of all against all.",
        "concepts": [
          {
            "nom": "THE STATE OF NATURE",
            "cat": "transcendant",
            "type": "Contractualisme",
            "puissance": 88,
            "desc": "Without government: war of all against all — human life is a state of permanent conflict from which only the state can rescue."
          },
          {
            "nom": "THE LEVIATHAN",
            "cat": "immanent",
            "type": "Contractualisme",
            "puissance": 85,
            "desc": "The social contract transfers all natural rights to an absolute sovereign in exchange for security — fear as the foundation of politics."
          },
          {
            "nom": "TOTAL MATERIALISM",
            "cat": "transcendant",
            "type": "Matérialisme",
            "puissance": 80,
            "desc": "Everything is body in motion — thoughts, feelings, morality: all reality is physical. Invalidates the immortal soul and God."
          }
        ],
        "filiation": {
          "maitres": [
            "MACHIAVEL",
            "BACON",
            "GALILEO"
          ],
          "disciples": [
            "LOCKE (reaction)",
            "ROUSSEAU (reaction)"
          ],
          "contre": [
            "ARISTOTLE (political animal)",
            "ROBERT FILMER"
          ]
        }
      }
    },
    {
      "id": "049",
      "nom": "PASCAL",
      "full": "Blaise Pascal",
      "dates": "1623-1662",
      "types": [
        "Philo. Religion",
        "Scepticisme"
      ],
      "lieu": "France",
      "era": "MODERNE",
      "imgUrl": "https://upload.wikimedia.org/wikipedia/commons/c/c1/Blaise_Pascal_Versailles.JPG",
      "stats": {
        "INFLUENCE": 85,
        "RIGUEUR": 75,
        "ANCRAGE": 58,
        "PORTÉE": 82,
        "CLÔTURE": 48,
        "CLARTÉ": 88
      },
      "fr": {
        "oeuvre": "Pensées",
        "entree": "L'homme est un roseau pensant — le plus fragile de la nature, mais il sait qu'il meurt. Pascal articule la grandeur et la misère de la condition humaine, puis propose son pari rationnel pour Dieu face à une raison incapable d'atteindre l'infini.",
        "concepts": [
          {
            "nom": "LE PARI DE PASCAL",
            "cat": "immanent",
            "type": "Philo. Religion",
            "puissance": 90,
            "desc": "Si Dieu existe et vous croyez : gain infini. S'Il n'existe pas : perte finie. La rationalité exige de parier sur Dieu."
          },
          {
            "nom": "L'ESPRIT DE FINESSE",
            "cat": "immanent",
            "type": "Scepticisme",
            "puissance": 80,
            "desc": "Opposé à l'esprit de géométrie : la raison intuitive et holistique accède à des vérités que la déduction formelle ne peut atteindre."
          },
          {
            "nom": "LE DIEU CACHÉ",
            "cat": "transcendant",
            "type": "Philo. Religion",
            "puissance": 78,
            "desc": "Dieu se cache — les preuves ne sont ni assez claires pour imposer la foi ni assez vides pour justifier l'athéisme : condition de la liberté humaine."
          }
        ],
        "filiation": {
          "maitres": [
            "AUGUSTIN",
            "JANSÉNISME"
          ],
          "disciples": [
            "KIERKEGAARD (influence)"
          ],
          "contre": [
            "DESCARTES",
            "JÉSUITES"
          ]
        }
      },
      "en": {
        "oeuvre": "Pensées",
        "entree": "Man is a thinking reed — the weakest in nature, yet he knows that he dies. Pascal articulates the greatness and misery of the human condition, then proposes his rational wager for God, since reason cannot reach the infinite.",
        "concepts": [
          {
            "nom": "PASCAL'S WAGER",
            "cat": "immanent",
            "type": "Philo. Religion",
            "puissance": 90,
            "desc": "If God exists and you believe: infinite gain. If He doesn't: finite loss. Rationality demands betting on God."
          },
          {
            "nom": "ESPRIT DE FINESSE",
            "cat": "immanent",
            "type": "Scepticisme",
            "puissance": 80,
            "desc": "Opposed to geometric reason: intuitive, holistic thinking accesses truths that formal deduction cannot reach."
          },
          {
            "nom": "THE HIDDEN GOD",
            "cat": "transcendant",
            "type": "Philo. Religion",
            "puissance": 78,
            "desc": "God hides himself — evidence is neither clear enough to compel faith nor empty enough to justify atheism: a condition of human freedom."
          }
        ],
        "filiation": {
          "maitres": [
            "AUGUSTIN",
            "JANSENISM"
          ],
          "disciples": [
            "KIERKEGAARD (influence)"
          ],
          "contre": [
            "DESCARTES",
            "THE JESUITS"
          ]
        }
      }
    },
    {
      "id": "050",
      "nom": "CONWAY",
      "full": "Anne Conway",
      "dates": "1631-1679",
      "types": [
        "Idéalisme",
        "Philo. Esprit"
      ],
      "lieu": "Angleterre",
      "era": "MODERNE",
      "imgUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Samuel_van_Hoogstraten_-_Perspective_View_with_a_Woman_Reading_a_Letter_-_66_-_Mauritshuis.jpg/3840px-Samuel_van_Hoogstraten_-_Perspective_View_with_a_Woman_Reading_a_Letter_-_66_-_Mauritshuis.jpg",
      "stats": {
        "INFLUENCE": 52,
        "RIGUEUR": 62,
        "ANCRAGE": 58,
        "PORTÉE": 68,
        "CLÔTURE": 55,
        "CLARTÉ": 58
      },
      "fr": {
        "oeuvre": "Principes de la philosophie ancienne et nouvelle",
        "entree": "Anne Conway est l'une des rares femmes philosophes reconnues au XVIIe siècle. Contre Descartes et Hobbes, elle défend un monisme vital où corps et esprit ne sont pas séparés mais des degrés d'une même substance créée.",
        "concepts": [
          {
            "nom": "LA SUBSTANCE VITALE",
            "cat": "transcendant",
            "type": "Idéalisme",
            "puissance": 72,
            "desc": "Toute la réalité créée est une seule substance vitale entre Dieu et la pure matière — Dieu seul est immuable ; les créatures évoluent."
          },
          {
            "nom": "CONTRE LE DUALISME",
            "cat": "immanent",
            "type": "Philo. Esprit",
            "puissance": 75,
            "desc": "Corps et esprit ne sont pas deux substances radicalement distinctes — réfutation interne de Descartes depuis un monisme alternatif."
          },
          {
            "nom": "LA GRADATION DES ÊTRES",
            "cat": "immanent",
            "type": "Idéalisme",
            "puissance": 65,
            "desc": "Tout être existe sur un continuum de perfection et peut se transformer — pas de hiérarchie fixe entre corps et âme."
          }
        ],
        "filiation": {
          "maitres": [
            "HENRY MORE",
            "KABBALAH",
            "LEIBNIZ (échange)"
          ],
          "disciples": [
            "LEIBNIZ (influence)"
          ],
          "contre": [
            "DESCARTES",
            "HOBBES"
          ]
        }
      },
      "en": {
        "oeuvre": "Principles of the Most Ancient and Modern Philosophy",
        "entree": "Anne Conway is one of the rare women philosophers recognized in the 17th century. Against Descartes and Hobbes, she defends a vital monism where body and spirit are not separate but degrees of one created substance.",
        "concepts": [
          {
            "nom": "VITAL SUBSTANCE",
            "cat": "transcendant",
            "type": "Idéalisme",
            "puissance": 72,
            "desc": "All created reality is a single vital substance between God and pure matter — God alone is immutable; creatures evolve."
          },
          {
            "nom": "AGAINST DUALISM",
            "cat": "immanent",
            "type": "Philo. Esprit",
            "puissance": 75,
            "desc": "Body and spirit are not two radically distinct substances — an internal refutation of Descartes from an alternative monism."
          },
          {
            "nom": "GRADATION OF BEINGS",
            "cat": "immanent",
            "type": "Idéalisme",
            "puissance": 65,
            "desc": "Every being exists on a continuum of perfection and can transform — no fixed hierarchy between body and soul."
          }
        ],
        "filiation": {
          "maitres": [
            "HENRY MORE",
            "KABBALAH",
            "LEIBNIZ (exchange)"
          ],
          "disciples": [
            "LEIBNIZ (influenced)"
          ],
          "contre": [
            "DESCARTES",
            "HOBBES"
          ]
        }
      }
    },
    {
      "id": "051",
      "nom": "LEIBNIZ",
      "full": "Gottfried Wilhelm Leibniz",
      "dates": "1646-1716",
      "types": [
        "Rationalisme",
        "Idéalisme"
      ],
      "lieu": "Allemagne",
      "era": "MODERNE",
      "imgUrl": "https://upload.wikimedia.org/wikipedia/commons/6/6a/Gottfried_Wilhelm_von_Leibniz.jpg",
      "stats": {
        "INFLUENCE": 90,
        "RIGUEUR": 92,
        "ANCRAGE": 72,
        "PORTÉE": 85,
        "CLÔTURE": 62,
        "CLARTÉ": 45
      },
      "fr": {
        "oeuvre": "Monadologie",
        "entree": "Leibniz est l'un des plus grands esprits universels : mathématicien (calcul infinitésimal), logicien, métaphysicien. Sa Monadologie pose que le réel est composé de substances simples (monades), chacune reflétant l'univers entier depuis sa perspective.",
        "concepts": [
          {
            "nom": "LES MONADES",
            "cat": "transcendant",
            "type": "Idéalisme",
            "puissance": 92,
            "desc": "Le réel est composé d'une infinité de substances simples sans fenêtres — chaque monade reflète le cosmos entier depuis son point de vue."
          },
          {
            "nom": "HARMONIE PRÉÉTABLIE",
            "cat": "transcendant",
            "type": "Rationalisme",
            "puissance": 85,
            "desc": "Dieu synchronise toutes les monades — corps et âme s'accordent sans causalité réelle entre eux, comme deux horloges réglées ensemble."
          },
          {
            "nom": "PRINCIPE DE RAISON SUFFISANTE",
            "cat": "immanent",
            "type": "Rationalisme",
            "puissance": 88,
            "desc": "Rien n'existe sans raison suffisante — tout fait a une explication ; même Dieu choisit le meilleur des mondes possibles."
          }
        ],
        "filiation": {
          "maitres": [
            "DESCARTES",
            "SPINOZA",
            "PASCAL"
          ],
          "disciples": [
            "WOLFF",
            "KANT (réaction)"
          ],
          "contre": [
            "NEWTON (querelle du calcul)",
            "LOCKE"
          ]
        }
      },
      "en": {
        "oeuvre": "Monadology",
        "entree": "Leibniz is one of the greatest universal minds: mathematician (calculus), logician, metaphysician. His Monadology posits that reality consists of simple substances (monads), each reflecting the entire universe from its own perspective.",
        "concepts": [
          {
            "nom": "THE MONADS",
            "cat": "transcendant",
            "type": "Idéalisme",
            "puissance": 92,
            "desc": "Reality consists of infinite simple substances without windows — each monad reflects the entire cosmos from its own point of view."
          },
          {
            "nom": "PRE-ESTABLISHED HARMONY",
            "cat": "transcendant",
            "type": "Rationalisme",
            "puissance": 85,
            "desc": "God synchronizes all monads — body and soul accord without real causality between them, like two clocks set together."
          },
          {
            "nom": "PRINCIPLE OF SUFFICIENT REASON",
            "cat": "immanent",
            "type": "Rationalisme",
            "puissance": 88,
            "desc": "Nothing exists without sufficient reason — every fact has an explanation; even God chooses the best of all possible worlds."
          }
        ],
        "filiation": {
          "maitres": [
            "DESCARTES",
            "SPINOZA",
            "PASCAL"
          ],
          "disciples": [
            "WOLFF",
            "KANT (reaction)"
          ],
          "contre": [
            "NEWTON (calculus dispute)",
            "LOCKE"
          ]
        }
      }
    },
    {
      "id": "052",
      "nom": "BERKELEY",
      "full": "George Berkeley",
      "dates": "1685-1753",
      "types": [
        "Idéalisme",
        "Philo. Religion"
      ],
      "lieu": "Irlande",
      "era": "MODERNE",
      "imgUrl": "https://upload.wikimedia.org/wikipedia/commons/3/32/George_Berkeley_by_John_Smibert.jpg",
      "stats": {
        "INFLUENCE": 78,
        "RIGUEUR": 80,
        "ANCRAGE": 60,
        "PORTÉE": 85,
        "CLÔTURE": 48,
        "CLARTÉ": 72
      },
      "fr": {
        "oeuvre": "Traité sur les principes de la connaissance humaine",
        "entree": "Esse est percipi — être c'est être perçu. Berkeley pousse l'empirisme jusqu'à l'idéalisme : la matière n'existe pas indépendamment des esprits qui la perçoivent. Seuls Dieu et les esprits sont réels.",
        "concepts": [
          {
            "nom": "ESSE EST PERCIPI",
            "cat": "transcendant",
            "type": "Idéalisme",
            "puissance": 92,
            "desc": "Être c'est être perçu — bascule ontologique totale : la matière sans esprit qui la perçoit est un non-sens."
          },
          {
            "nom": "IMMATÉRIALISME",
            "cat": "transcendant",
            "type": "Idéalisme",
            "puissance": 85,
            "desc": "La matière n'existe pas — seuls les esprits (Dieu, âmes) et leurs idées sont réels. Réfutation du matérialisme lockéen."
          },
          {
            "nom": "DIEU COMME PERCEPTEUR",
            "cat": "immanent",
            "type": "Philo. Religion",
            "puissance": 78,
            "desc": "Le monde subsiste parce que Dieu le perçoit continuellement — l'idéalisme comme preuve de l'existence divine."
          }
        ],
        "filiation": {
          "maitres": [
            "LOCKE",
            "MALEBRANCHE"
          ],
          "disciples": [
            "HUME (critique)",
            "KANT (réaction)"
          ],
          "contre": [
            "LOCKE (matière)",
            "NEWTON",
            "MATÉRIALISTES"
          ]
        }
      },
      "en": {
        "oeuvre": "Treatise Concerning the Principles of Human Knowledge",
        "entree": "Esse est percipi — to be is to be perceived. Berkeley pushes empiricism to idealism: matter does not exist independently of the minds that perceive it. Only God and spirits are real.",
        "concepts": [
          {
            "nom": "ESSE EST PERCIPI",
            "cat": "transcendant",
            "type": "Idéalisme",
            "puissance": 92,
            "desc": "To be is to be perceived — a total ontological shift: matter without a perceiving mind is nonsensical."
          },
          {
            "nom": "IMMATERIALISM",
            "cat": "transcendant",
            "type": "Idéalisme",
            "puissance": 85,
            "desc": "Matter does not exist — only spirits (God, souls) and their ideas are real. A refutation of Lockean materialism."
          },
          {
            "nom": "GOD AS PERCEIVER",
            "cat": "immanent",
            "type": "Philo. Religion",
            "puissance": 78,
            "desc": "The world subsists because God perceives it continuously — idealism as a proof of divine existence."
          }
        ],
        "filiation": {
          "maitres": [
            "LOCKE",
            "MALEBRANCHE"
          ],
          "disciples": [
            "HUME (critique)",
            "KANT (reaction)"
          ],
          "contre": [
            "LOCKE (matter)",
            "NEWTON",
            "THE MATERIALISTS"
          ]
        }
      }
    },
    {
      "id": "053",
      "nom": "HUTCHESON",
      "full": "Francis Hutcheson",
      "dates": "1694-1746",
      "types": [
        "Éthique des Vertus",
        "Utilitarisme"
      ],
      "lieu": "Irlande",
      "era": "MODERNE",
      "imgUrl": "https://upload.wikimedia.org/wikipedia/commons/0/06/Francis_Hutcheson_%281694%E2%80%931746%29%2C_Professor_of_Moral_Philosophy_at_the_University_of_Glasgow.jpg",
      "stats": {
        "INFLUENCE": 65,
        "RIGUEUR": 62,
        "ANCRAGE": 58,
        "PORTÉE": 68,
        "CLÔTURE": 52,
        "CLARTÉ": 70
      },
      "fr": {
        "oeuvre": "Enquête sur la beauté et la vertu",
        "entree": "Hutcheson pose un sens moral inné — une faculté qui perçoit naturellement la vertu comme agréable et le vice comme désagréable. Il formule aussi, avant Bentham, l'idée que la plus grande action est celle qui procure le plus grand bonheur au plus grand nombre.",
        "concepts": [
          {
            "nom": "LE SENS MORAL",
            "cat": "immanent",
            "type": "Éthique des Vertus",
            "puissance": 80,
            "desc": "Faculté naturelle de percevoir la vertu — la bonté morale est saisie immédiatement comme la beauté est saisie par le goût."
          },
          {
            "nom": "LE PLUS GRAND BONHEUR",
            "cat": "immanent",
            "type": "Utilitarisme",
            "puissance": 75,
            "desc": "La meilleure action est celle qui procure le plus grand bonheur au plus grand nombre — formule proto-utilitariste."
          },
          {
            "nom": "LE SENS ESTHÉTIQUE",
            "cat": "immanent",
            "type": "Esthétique",
            "puissance": 68,
            "desc": "La beauté est perçue par un sens intérieur non réductible à l'utilité ou à la raison — analogie entre sens moral et sens esthétique."
          }
        ],
        "filiation": {
          "maitres": [
            "SHAFTESBURY"
          ],
          "disciples": [
            "HUME",
            "ADAM SMITH",
            "BENTHAM (influence)"
          ],
          "contre": [
            "HOBBES",
            "MANDEVILLE"
          ]
        }
      },
      "en": {
        "oeuvre": "Inquiry into the Original of Our Ideas of Beauty and Virtue",
        "entree": "Hutcheson posits an innate moral sense — a faculty that naturally perceives virtue as pleasant and vice as disagreeable. He also formulates, before Bentham, the idea that the best action is that which produces the greatest happiness for the greatest number.",
        "concepts": [
          {
            "nom": "THE MORAL SENSE",
            "cat": "immanent",
            "type": "Éthique des Vertus",
            "puissance": 80,
            "desc": "A natural faculty for perceiving virtue — moral goodness is grasped immediately as beauty is grasped by taste."
          },
          {
            "nom": "THE GREATEST HAPPINESS",
            "cat": "immanent",
            "type": "Utilitarisme",
            "puissance": 75,
            "desc": "The best action is that producing the greatest happiness for the greatest number — a proto-utilitarian formula."
          },
          {
            "nom": "THE AESTHETIC SENSE",
            "cat": "immanent",
            "type": "Esthétique",
            "puissance": 68,
            "desc": "Beauty is perceived by an inner sense irreducible to utility or reason — analogy between moral and aesthetic sense."
          }
        ],
        "filiation": {
          "maitres": [
            "SHAFTESBURY"
          ],
          "disciples": [
            "HUME",
            "ADAM SMITH",
            "BENTHAM (influence)"
          ],
          "contre": [
            "HOBBES",
            "MANDEVILLE"
          ]
        }
      }
    },
    {
      "id": "054",
      "nom": "REID",
      "full": "Thomas Reid",
      "dates": "1710-1796",
      "types": [
        "Réalisme",
        "Empirisme"
      ],
      "lieu": "Écosse",
      "era": "MODERNE",
      "imgUrl": "https://upload.wikimedia.org/wikipedia/commons/9/92/ThomasReid.jpg",
      "stats": {
        "INFLUENCE": 62,
        "RIGUEUR": 70,
        "ANCRAGE": 68,
        "PORTÉE": 65,
        "CLÔTURE": 62,
        "CLARTÉ": 75
      },
      "fr": {
        "oeuvre": "Enquête sur l'esprit humain selon les principes du sens commun",
        "entree": "Reid fonde la philosophie du sens commun en réaction au scepticisme de Hume. Nous percevons directement le monde extérieur — il n'y a pas d'intermédiaire d'idées entre l'esprit et les choses. Le sens commun est une autorité épistémique légitime.",
        "concepts": [
          {
            "nom": "LE RÉALISME DIRECT",
            "cat": "transcendant",
            "type": "Réalisme",
            "puissance": 80,
            "desc": "Nous percevons les objets eux-mêmes, non des idées de ces objets — réfutation du voile de perception lockéen."
          },
          {
            "nom": "LE SENS COMMUN",
            "cat": "immanent",
            "type": "Réalisme",
            "puissance": 78,
            "desc": "Certaines vérités premières sont immédiatement évidentes à tout être raisonnable — elles ne peuvent être réfutées sans absurdité."
          },
          {
            "nom": "CONTRE LE SCEPTICISME",
            "cat": "immanent",
            "type": "Empirisme",
            "puissance": 72,
            "desc": "Le scepticisme de Hume est le résultat d'une mauvaise théorie de la représentation mentale — retour aux données immédiates de l'expérience."
          }
        ],
        "filiation": {
          "maitres": [
            "HUTCHESON",
            "LOCKE"
          ],
          "disciples": [
            "MOORE (sens commun)",
            "ÉCOLE ÉCOSSAISE"
          ],
          "contre": [
            "HUME",
            "BERKELEY"
          ]
        }
      },
      "en": {
        "oeuvre": "Inquiry into the Human Mind on the Principles of Common Sense",
        "entree": "Reid founds the common-sense philosophy in reaction to Hume's skepticism. We perceive the external world directly — there is no intermediary of ideas between mind and things. Common sense is a legitimate epistemic authority.",
        "concepts": [
          {
            "nom": "DIRECT REALISM",
            "cat": "transcendant",
            "type": "Réalisme",
            "puissance": 80,
            "desc": "We perceive objects themselves, not ideas of those objects — a refutation of the Lockean veil of perception."
          },
          {
            "nom": "COMMON SENSE",
            "cat": "immanent",
            "type": "Réalisme",
            "puissance": 78,
            "desc": "Certain first truths are immediately evident to any rational being — they cannot be refuted without absurdity."
          },
          {
            "nom": "AGAINST SKEPTICISM",
            "cat": "immanent",
            "type": "Empirisme",
            "puissance": 72,
            "desc": "Hume's skepticism results from a bad theory of mental representation — return to the immediate data of experience."
          }
        ],
        "filiation": {
          "maitres": [
            "HUTCHESON",
            "LOCKE"
          ],
          "disciples": [
            "MOORE (common sense)",
            "SCOTTISH SCHOOL"
          ],
          "contre": [
            "HUME",
            "BERKELEY"
          ]
        }
      }
    },
    {
      "id": "055",
      "nom": "BURKE",
      "full": "Edmund Burke",
      "dates": "1729-1797",
      "types": [
        "Conservatisme",
        "Philo. Politique"
      ],
      "lieu": "Irlande",
      "era": "MODERNE",
      "imgUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b3/Sir_Joshua_Reynolds_-_Edmund_Burke%2C_1729_-_1797._Statesman%2C_orator_and_author_-_PG_2362_-_National_Galleries_of_Scotland.jpg/3840px-Sir_Joshua_Reynolds_-_Edmund_Burke%2C_1729_-_1797._Statesman%2C_orator_and_author_-_PG_2362_-_National_Galleries_of_Scotland.jpg",
      "stats": {
        "INFLUENCE": 80,
        "RIGUEUR": 65,
        "ANCRAGE": 72,
        "PORTÉE": 80,
        "CLÔTURE": 68,
        "CLARTÉ": 78
      },
      "fr": {
        "oeuvre": "Réflexions sur la Révolution en France",
        "entree": "Burke fonde le conservatisme moderne en attaquant la Révolution française. La société n'est pas un contrat rationnel entre individus mais un partenariat entre les morts, les vivants et les non encore nés. Les traditions accumulées valent mieux que les abstractions.",
        "concepts": [
          {
            "nom": "LA TRADITION COMME SAGESSE",
            "cat": "transcendant",
            "type": "Conservatisme",
            "puissance": 85,
            "desc": "Bascule contre le rationalisme révolutionnaire : les institutions héritées condensent une sagesse pratique que nulle théorie ne peut remplacer."
          },
          {
            "nom": "LE CONTRAT INTERGÉNÉRATIONNEL",
            "cat": "immanent",
            "type": "Conservatisme",
            "puissance": 82,
            "desc": "La société est un partenariat entre les morts, les vivants et les à-naître — invalide le contrat social d'individus contemporains."
          },
          {
            "nom": "LE PRÉJUGÉ COMME RAISON",
            "cat": "immanent",
            "type": "Conservatisme",
            "puissance": 75,
            "desc": "Le préjugé n'est pas ignorance mais sagesse collective sédimentée — à préférer aux abstractions de la raison pure."
          }
        ],
        "filiation": {
          "maitres": [
            "HUME",
            "MONTESQUIEU"
          ],
          "disciples": [
            "DE MAISTRE",
            "TOCQUEVILLE",
            "OAKESHOTT"
          ],
          "contre": [
            "ROUSSEAU",
            "PAINE",
            "RÉVOLUTIONNAIRES FRANÇAIS"
          ]
        }
      },
      "en": {
        "oeuvre": "Reflections on the Revolution in France",
        "entree": "Burke founds modern conservatism by attacking the French Revolution. Society is not a rational contract between individuals but a partnership between the dead, the living, and the yet unborn. Accumulated traditions are worth more than abstractions.",
        "concepts": [
          {
            "nom": "TRADITION AS WISDOM",
            "cat": "transcendant",
            "type": "Conservatisme",
            "puissance": 85,
            "desc": "A shift against revolutionary rationalism: inherited institutions condense a practical wisdom that no theory can replace."
          },
          {
            "nom": "THE INTERGENERATIONAL CONTRACT",
            "cat": "immanent",
            "type": "Conservatisme",
            "puissance": 82,
            "desc": "Society is a partnership between the dead, the living, and the unborn — invalidates the social contract of contemporary individuals."
          },
          {
            "nom": "PREJUDICE AS REASON",
            "cat": "immanent",
            "type": "Conservatisme",
            "puissance": 75,
            "desc": "Prejudice is not ignorance but accumulated collective wisdom — to be preferred to the abstractions of pure reason."
          }
        ],
        "filiation": {
          "maitres": [
            "HUME",
            "MONTESQUIEU"
          ],
          "disciples": [
            "DE MAISTRE",
            "TOCQUEVILLE",
            "OAKESHOTT"
          ],
          "contre": [
            "ROUSSEAU",
            "PAINE",
            "FRENCH REVOLUTIONARIES"
          ]
        }
      }
    },
    {
      "id": "056",
      "nom": "BENTHAM",
      "full": "Jeremy Bentham",
      "dates": "1748-1832",
      "types": [
        "Utilitarisme"
      ],
      "lieu": "Angleterre",
      "era": "MODERNE",
      "imgUrl": "https://upload.wikimedia.org/wikipedia/commons/e/e8/Jeremy_Bentham_by_Henry_William_Pickersgill.jpg",
      "stats": {
        "INFLUENCE": 82,
        "RIGUEUR": 75,
        "ANCRAGE": 65,
        "PORTÉE": 80,
        "CLÔTURE": 55,
        "CLARTÉ": 78
      },
      "fr": {
        "oeuvre": "Introduction aux principes de morale et de législation",
        "entree": "La nature a placé l'humanité sous le gouvernement de deux maîtres souverains : la peine et le plaisir. Bentham fonde l'utilitarisme : l'action morale est celle qui maximise le bonheur global, calculable par le calcul des plaisirs (hédonique).",
        "concepts": [
          {
            "nom": "LE PRINCIPE D'UTILITÉ",
            "cat": "transcendant",
            "type": "Utilitarisme",
            "puissance": 88,
            "desc": "L'action juste est celle qui produit le plus grand bonheur pour le plus grand nombre — la morale devient calcul rationnel."
          },
          {
            "nom": "LE CALCUL HÉDONIQUE",
            "cat": "immanent",
            "type": "Utilitarisme",
            "puissance": 80,
            "desc": "On peut mesurer les plaisirs et peines selon 7 dimensions (intensité, durée, etc.) — la morale comme arithmétique des sentiments."
          },
          {
            "nom": "LE PANOPTICON",
            "cat": "immanent",
            "type": "Utilitarisme",
            "puissance": 72,
            "desc": "Prison idéale où les détenus se savent observables à tout moment — la surveillance comme outil d'utilité sociale."
          }
        ],
        "filiation": {
          "maitres": [
            "HUTCHESON",
            "HUME",
            "HELVETIUS"
          ],
          "disciples": [
            "J.S. MILL",
            "SIDGWICK"
          ],
          "contre": [
            "KANT",
            "DÉONTOLOGIE"
          ]
        }
      },
      "en": {
        "oeuvre": "Introduction to the Principles of Morals and Legislation",
        "entree": "Nature has placed mankind under the governance of two sovereign masters: pain and pleasure. Bentham founds utilitarianism: the moral action is that which maximizes overall happiness, calculable through the hedonic calculus.",
        "concepts": [
          {
            "nom": "THE UTILITY PRINCIPLE",
            "cat": "transcendant",
            "type": "Utilitarisme",
            "puissance": 88,
            "desc": "The right action is that producing the greatest happiness for the greatest number — morality becomes rational calculation."
          },
          {
            "nom": "THE HEDONIC CALCULUS",
            "cat": "immanent",
            "type": "Utilitarisme",
            "puissance": 80,
            "desc": "Pleasures and pains can be measured along 7 dimensions (intensity, duration, etc.) — morality as arithmetic of sentiments."
          },
          {
            "nom": "THE PANOPTICON",
            "cat": "immanent",
            "type": "Utilitarisme",
            "puissance": 72,
            "desc": "An ideal prison where inmates know they may be watched at any moment — surveillance as a tool of social utility."
          }
        ],
        "filiation": {
          "maitres": [
            "HUTCHESON",
            "HUME",
            "HELVETIUS"
          ],
          "disciples": [
            "J.S. MILL",
            "SIDGWICK"
          ],
          "contre": [
            "KANT",
            "DEONTOLOGY"
          ]
        }
      }
    },
    {
      "id": "057",
      "nom": "WOLLSTON",
      "full": "Mary Wollstonecraft",
      "dates": "1759-1797",
      "types": [
        "Féminisme",
        "Libéralisme"
      ],
      "lieu": "Angleterre",
      "era": "MODERNE",
      "imgUrl": "https://upload.wikimedia.org/wikipedia/commons/3/36/Mary_Wollstonecraft_by_John_Opie_%28c._1797%29.jpg",
      "stats": {
        "INFLUENCE": 88,
        "RIGUEUR": 72,
        "ANCRAGE": 65,
        "PORTÉE": 88,
        "CLÔTURE": 55,
        "CLARTÉ": 82
      },
      "fr": {
        "oeuvre": "Défense des droits de la femme",
        "entree": "Wollstonecraft applique les droits naturels lockéens aux femmes. Si la raison est la base des droits politiques, et si les femmes sont douées de raison, leur exclusion de l'éducation et de la vie publique est une injustice fondamentale.",
        "concepts": [
          {
            "nom": "LES DROITS DE LA FEMME",
            "cat": "transcendant",
            "type": "Féminisme",
            "puissance": 92,
            "desc": "Bascule : si les droits naturels reposent sur la raison, et les femmes ont la raison, alors leur exclusion politique est une contradiction performative."
          },
          {
            "nom": "L'ÉDUCATION ÉGALE",
            "cat": "immanent",
            "type": "Libéralisme",
            "puissance": 85,
            "desc": "L'infériorité féminine est produite par une éducation inférieure — non une infériorité naturelle mais une oppression sociale construite."
          },
          {
            "nom": "LA VERTU UNIVERSELLE",
            "cat": "immanent",
            "type": "Féminisme",
            "puissance": 78,
            "desc": "Il ne peut y avoir qu'une seule vertu pour l'humanité entière — la morale fondée sur la raison transcende le sexe."
          }
        ],
        "filiation": {
          "maitres": [
            "LOCKE",
            "ROUSSEAU (critique)",
            "PRICE"
          ],
          "disciples": [
            "BEAUVOIR",
            "FÉMINISME LIBÉRAL"
          ],
          "contre": [
            "BURKE",
            "ROUSSEAU (éducation des femmes)"
          ]
        }
      },
      "en": {
        "oeuvre": "A Vindication of the Rights of Woman",
        "entree": "Wollstonecraft applies Lockean natural rights to women. If reason is the basis of political rights, and women are endowed with reason, their exclusion from education and public life is a fundamental injustice.",
        "concepts": [
          {
            "nom": "RIGHTS OF WOMAN",
            "cat": "transcendant",
            "type": "Féminisme",
            "puissance": 92,
            "desc": "A shift: if natural rights rest on reason, and women have reason, their political exclusion is a performative contradiction."
          },
          {
            "nom": "EQUAL EDUCATION",
            "cat": "immanent",
            "type": "Libéralisme",
            "puissance": 85,
            "desc": "Female inferiority is produced by inferior education — not a natural inferiority but a socially constructed oppression."
          },
          {
            "nom": "UNIVERSAL VIRTUE",
            "cat": "immanent",
            "type": "Féminisme",
            "puissance": 78,
            "desc": "There can be only one virtue for all of humanity — morality grounded in reason transcends sex."
          }
        ],
        "filiation": {
          "maitres": [
            "LOCKE",
            "ROUSSEAU (critique)",
            "PRICE"
          ],
          "disciples": [
            "BEAUVOIR",
            "LIBERAL FEMINISM"
          ],
          "contre": [
            "BURKE",
            "ROUSSEAU (women's education)"
          ]
        }
      }
    },
    {
      "id": "058",
      "nom": "PALEY",
      "full": "William Paley",
      "dates": "1743-1805",
      "types": [
        "Philo. Religion"
      ],
      "lieu": "Angleterre",
      "era": "MODERNE",
      "imgUrl": "https://upload.wikimedia.org/wikipedia/commons/1/13/William_Paley_by_George_Romney.jpg",
      "stats": {
        "INFLUENCE": 62,
        "RIGUEUR": 65,
        "ANCRAGE": 55,
        "PORTÉE": 68,
        "CLÔTURE": 45,
        "CLARTÉ": 80
      },
      "fr": {
        "oeuvre": "Théologie naturelle",
        "entree": "Paley formule l'argument de la montre : si je trouve une montre sur la lande, sa complexité implique un horloger. De même, la complexité des organismes vivants implique un Créateur. Cet argument sera directement visé par Darwin.",
        "concepts": [
          {
            "nom": "L'ARGUMENT DE LA MONTRE",
            "cat": "immanent",
            "type": "Philo. Religion",
            "puissance": 80,
            "desc": "La complexité adaptée de la nature — comme une montre — témoigne d'un dessin intentionnel : argument du dessein pour l'existence de Dieu."
          },
          {
            "nom": "LA THÉOLOGIE NATURELLE",
            "cat": "transcendant",
            "type": "Philo. Religion",
            "puissance": 72,
            "desc": "Dieu peut être connu par la raison naturelle à travers l'étude des œuvres de la création — sans recours à la révélation."
          },
          {
            "nom": "L'UTILITARISME DIVIN",
            "cat": "immanent",
            "type": "Utilitarisme",
            "puissance": 60,
            "desc": "Dieu veut le bonheur de ses créatures — l'éthique utilitariste est fondée sur la volonté divine."
          }
        ],
        "filiation": {
          "maitres": [
            "CLARKE",
            "NEWTON"
          ],
          "disciples": [],
          "contre": [
            "HUME (sur les miracles)",
            "DARWIN (démolit l'argument)"
          ]
        }
      },
      "en": {
        "oeuvre": "Natural Theology",
        "entree": "Paley formulates the watchmaker argument: if I find a watch on a heath, its complexity implies a watchmaker. Likewise, the complexity of living organisms implies a Creator. This argument will be directly targeted by Darwin.",
        "concepts": [
          {
            "nom": "THE WATCHMAKER ARGUMENT",
            "cat": "immanent",
            "type": "Philo. Religion",
            "puissance": 80,
            "desc": "The adapted complexity of nature — like a watch — testifies to intentional design: the argument from design for God's existence."
          },
          {
            "nom": "NATURAL THEOLOGY",
            "cat": "transcendant",
            "type": "Philo. Religion",
            "puissance": 72,
            "desc": "God can be known through natural reason by studying the works of creation — without recourse to revelation."
          },
          {
            "nom": "DIVINE UTILITARIANISM",
            "cat": "immanent",
            "type": "Utilitarisme",
            "puissance": 60,
            "desc": "God wills the happiness of His creatures — utilitarian ethics is grounded in divine will."
          }
        ],
        "filiation": {
          "maitres": [
            "CLARKE",
            "NEWTON"
          ],
          "disciples": [],
          "contre": [
            "HUME (on miracles)",
            "DARWIN (demolishes the argument)"
          ]
        }
      }
    },
    {
      "id": "059",
      "nom": "FICHTE",
      "full": "Johann Gottlieb Fichte",
      "dates": "1762-1814",
      "types": [
        "Idéalisme",
        "Rationalisme"
      ],
      "lieu": "Allemagne",
      "era": "MODERNE",
      "imgUrl": "https://upload.wikimedia.org/wikipedia/commons/8/8d/Johann_Gottlieb_Fichte.jpg",
      "stats": {
        "INFLUENCE": 75,
        "RIGUEUR": 78,
        "ANCRAGE": 62,
        "PORTÉE": 80,
        "CLÔTURE": 55,
        "CLARTÉ": 35
      },
      "fr": {
        "oeuvre": "Doctrine de la Science (Wissenschaftslehre)",
        "entree": "Fichte radicalise Kant : le Moi absolu pose le Non-Moi. L'idéalisme transcendantal devient idéalisme subjectif absolu. Son nationalisme philosophique — les Discours à la nation allemande — influencera profondément le XIXe siècle.",
        "concepts": [
          {
            "nom": "LE MOI ABSOLU",
            "cat": "transcendant",
            "type": "Idéalisme",
            "puissance": 82,
            "desc": "Le Moi pose son propre être — puis pose le Non-Moi pour se limiter lui-même. La conscience comme activité auto-posante."
          },
          {
            "nom": "L'ACTION (TATHANDLUNG)",
            "cat": "immanent",
            "type": "Rationalisme",
            "puissance": 78,
            "desc": "Le fondement de toute réalité est une activité, non un être — contre la chose-en-soi kantienne, la réalité est acte."
          },
          {
            "nom": "LA NATION CULTURELLE",
            "cat": "transcendant",
            "type": "Humanisme",
            "puissance": 72,
            "desc": "La langue et la culture constituent une identité nationale — Discours à la nation allemande comme réponse philosophique à l'occupation napoléonienne."
          }
        ],
        "filiation": {
          "maitres": [
            "KANT",
            "SPINOZA"
          ],
          "disciples": [
            "SCHELLING",
            "HEGEL"
          ],
          "contre": [
            "KANT (chose-en-soi)",
            "REALISME"
          ]
        }
      },
      "en": {
        "oeuvre": "Doctrine of Science (Wissenschaftslehre)",
        "entree": "Fichte radicalizes Kant: the absolute Ego posits the Non-Ego. Transcendental idealism becomes absolute subjective idealism. His philosophical nationalism — the Addresses to the German Nation — will profoundly influence the 19th century.",
        "concepts": [
          {
            "nom": "THE ABSOLUTE EGO",
            "cat": "transcendant",
            "type": "Idéalisme",
            "puissance": 82,
            "desc": "The Ego posits its own being — then posits the Non-Ego to limit itself. Consciousness as self-positing activity."
          },
          {
            "nom": "TATHANDLUNG (ACT)",
            "cat": "immanent",
            "type": "Rationalisme",
            "puissance": 78,
            "desc": "The foundation of all reality is an activity, not a being — against Kantian thing-in-itself, reality is act."
          },
          {
            "nom": "THE CULTURAL NATION",
            "cat": "transcendant",
            "type": "Humanisme",
            "puissance": 72,
            "desc": "Language and culture constitute national identity — Addresses to the German Nation as philosophical response to Napoleonic occupation."
          }
        ],
        "filiation": {
          "maitres": [
            "KANT",
            "SPINOZA"
          ],
          "disciples": [
            "SCHELLING",
            "HEGEL"
          ],
          "contre": [
            "KANT (thing-in-itself)",
            "REALISM"
          ]
        }
      }
    },
    {
      "id": "060",
      "nom": "SCHELLING",
      "full": "Friedrich Schelling",
      "dates": "1775-1854",
      "types": [
        "Idéalisme",
        "Mysticisme"
      ],
      "lieu": "Allemagne",
      "era": "MODERNE",
      "imgUrl": "https://upload.wikimedia.org/wikipedia/commons/e/ee/Nb_pinacoteca_stieler_friedrich_wilhelm_joseph_von_schelling.jpg",
      "stats": {
        "INFLUENCE": 72,
        "RIGUEUR": 62,
        "ANCRAGE": 55,
        "PORTÉE": 78,
        "CLÔTURE": 50,
        "CLARTÉ": 32
      },
      "fr": {
        "oeuvre": "Philosophie de la nature / Philosophie de la mythologie",
        "entree": "Schelling franchit plusieurs étapes : philosophie de la nature, idéalisme transcendantal, philosophie de l'identité, puis philosophie positive tardive. Il cherche à surmonter la dichotomie sujet/objet en une identité absolue de l'esprit et de la nature.",
        "concepts": [
          {
            "nom": "L'IDENTITÉ ABSOLUE",
            "cat": "transcendant",
            "type": "Idéalisme",
            "puissance": 80,
            "desc": "Nature et esprit sont une seule et même réalité absolue envisagée sous deux angles — l'Absolu précède leur distinction."
          },
          {
            "nom": "LA PHILOSOPHIE DE NATURE",
            "cat": "immanent",
            "type": "Idéalisme",
            "puissance": 75,
            "desc": "La nature est esprit visible, l'esprit est nature invisible — la philosophie de la nature réconcilie science et métaphysique."
          },
          {
            "nom": "LA LIBERTÉ HUMAINE",
            "cat": "transcendant",
            "type": "Mysticisme",
            "puissance": 72,
            "desc": "Le mal est une possibilité de la liberté — Dieu lui-même contient un fond obscur qui est la condition de sa révélation."
          }
        ],
        "filiation": {
          "maitres": [
            "KANT",
            "FICHTE",
            "SPINOZA"
          ],
          "disciples": [
            "HEGEL (réaction)",
            "SCHOPENHAUER (influence)"
          ],
          "contre": [
            "HEGEL (dépasse)",
            "FICHTE (dépasse)"
          ]
        }
      },
      "en": {
        "oeuvre": "Philosophy of Nature / Philosophy of Mythology",
        "entree": "Schelling passes through several stages: philosophy of nature, transcendental idealism, philosophy of identity, then late positive philosophy. He seeks to overcome the subject/object dichotomy in an absolute identity of spirit and nature.",
        "concepts": [
          {
            "nom": "ABSOLUTE IDENTITY",
            "cat": "transcendant",
            "type": "Idéalisme",
            "puissance": 80,
            "desc": "Nature and spirit are one and the same absolute reality viewed from two angles — the Absolute precedes their distinction."
          },
          {
            "nom": "PHILOSOPHY OF NATURE",
            "cat": "immanent",
            "type": "Idéalisme",
            "puissance": 75,
            "desc": "Nature is visible spirit, spirit is invisible nature — the philosophy of nature reconciles science and metaphysics."
          },
          {
            "nom": "HUMAN FREEDOM",
            "cat": "transcendant",
            "type": "Mysticisme",
            "puissance": 72,
            "desc": "Evil is a possibility of freedom — God himself contains a dark ground which is the condition of his revelation."
          }
        ],
        "filiation": {
          "maitres": [
            "KANT",
            "FICHTE",
            "SPINOZA"
          ],
          "disciples": [
            "HEGEL (reaction)",
            "SCHOPENHAUER (influence)"
          ],
          "contre": [
            "HEGEL (surpassed by)",
            "FICHTE (surpassed by)"
          ]
        }
      }
    },
    {
      "id": "061",
      "nom": "SCHOPNHR",
      "full": "Arthur Schopenhauer",
      "dates": "1788-1860",
      "types": [
        "Idéalisme",
        "Mysticisme"
      ],
      "lieu": "Allemagne",
      "era": "MODERNE",
      "imgUrl": "https://upload.wikimedia.org/wikipedia/commons/9/9f/Schopenhauer.jpg",
      "stats": {
        "INFLUENCE": 88,
        "RIGUEUR": 72,
        "ANCRAGE": 60,
        "PORTÉE": 90,
        "CLÔTURE": 45,
        "CLARTÉ": 78
      },
      "fr": {
        "oeuvre": "Le Monde comme Volonté et Représentation",
        "entree": "Le monde est ma représentation — mais derrière le voile apparaît la Volonté : aveugle, irrationnelle, insatiable. Schopenhauer brise le rationalisme hégélien et ouvre la voie à Nietzsche, Freud et la pensée bouddhiste en Europe.",
        "concepts": [
          {
            "nom": "LA VOLONTÉ",
            "cat": "transcendant",
            "type": "Idéalisme",
            "puissance": 90,
            "desc": "La chose-en-soi kantienne révélée : une Volonté aveugle, irrationnelle, infinie, source de toute souffrance. Bascule contre l'optimisme hégélien."
          },
          {
            "nom": "LE MONDE COMME REPR.",
            "cat": "immanent",
            "type": "Idéalisme",
            "puissance": 82,
            "desc": "Tout ce qui existe n'existe que comme représentation pour un sujet — le monde phénoménal est voile devant la Volonté."
          },
          {
            "nom": "LA DÉLIVRANCE",
            "cat": "transcendant",
            "type": "Mysticisme",
            "puissance": 80,
            "desc": "Nier la Volonté par l'ascèse, la pitié et l'art — seule issue à la souffrance inhérente à l'existence."
          }
        ],
        "filiation": {
          "maitres": [
            "KANT",
            "PLATON",
            "BOUDDHISME",
            "UPANISHADS"
          ],
          "disciples": [
            "NIETZSCHE",
            "FREUD",
            "WAGNER",
            "BECKETT"
          ],
          "contre": [
            "HEGEL",
            "FICHTE",
            "LEIBNIZ (optimisme)"
          ]
        }
      },
      "en": {
        "oeuvre": "The World as Will and Representation",
        "entree": "The world is my representation — but behind the veil appears the Will: blind, irrational, insatiable. Schopenhauer breaks Hegelian rationalism and opens the way to Nietzsche, Freud, and Buddhist thought in Europe.",
        "concepts": [
          {
            "nom": "THE WILL",
            "cat": "transcendant",
            "type": "Idéalisme",
            "puissance": 90,
            "desc": "The Kantian thing-in-itself revealed: a blind, irrational, infinite Will, source of all suffering. A shift against Hegelian optimism."
          },
          {
            "nom": "WORLD AS REPRESENTATION",
            "cat": "immanent",
            "type": "Idéalisme",
            "puissance": 82,
            "desc": "Everything that exists does so only as representation for a subject — the phenomenal world is a veil over the Will."
          },
          {
            "nom": "DELIVERANCE",
            "cat": "transcendant",
            "type": "Mysticisme",
            "puissance": 80,
            "desc": "Deny the Will through asceticism, compassion, and art — the only exit from the suffering inherent in existence."
          }
        ],
        "filiation": {
          "maitres": [
            "KANT",
            "PLATON",
            "BUDDHISM",
            "UPANISHADS"
          ],
          "disciples": [
            "NIETZSCHE",
            "FREUD",
            "WAGNER",
            "BECKETT"
          ],
          "contre": [
            "HEGEL",
            "FICHTE",
            "LEIBNIZ (optimism)"
          ]
        }
      }
    },
    {
      "id": "062",
      "nom": "FEUERBACH",
      "full": "Ludwig Feuerbach",
      "dates": "1804-1872",
      "types": [
        "Matérialisme",
        "Humanisme"
      ],
      "lieu": "Allemagne",
      "era": "CONTEMPORAINE",
      "imgUrl": "https://upload.wikimedia.org/wikipedia/commons/6/63/Ludwig_Feuerbach-1.2_V01-1.1.1_cropped_and_rotated.jpg",
      "stats": {
        "INFLUENCE": 72,
        "RIGUEUR": 68,
        "ANCRAGE": 58,
        "PORTÉE": 80,
        "CLÔTURE": 50,
        "CLARTÉ": 72
      },
      "fr": {
        "oeuvre": "L'Essence du christianisme",
        "entree": "Feuerbach renverse Hegel par le bas : Dieu n'est pas l'Esprit qui se réalise dans l'histoire, mais une projection de l'essence humaine sur un écran infini. La théologie est une anthropologie méconnue d'elle-même.",
        "concepts": [
          {
            "nom": "DIEU COMME PROJECTION",
            "cat": "transcendant",
            "type": "Humanisme",
            "puissance": 88,
            "desc": "Dieu est l'essence humaine aliénée — nous attribuons à Dieu nos propres perfections et nous nous diminuons en proportion."
          },
          {
            "nom": "L'ALIÉNATION RELIGIEUSE",
            "cat": "immanent",
            "type": "Matérialisme",
            "puissance": 82,
            "desc": "La religion est une auto-aliénation : l'homme perd ses qualités en les transférant à un être fictif. Marx reprendra ce schème."
          },
          {
            "nom": "L'HOMME EST CE QU'IL MANGE",
            "cat": "immanent",
            "type": "Matérialisme",
            "puissance": 70,
            "desc": "Le matérialisme sensoriel : la conscience est conditionnée par l'alimentation, le corps, les conditions matérielles."
          }
        ],
        "filiation": {
          "maitres": [
            "HEGEL",
            "SPINOZA"
          ],
          "disciples": [
            "MARX",
            "ENGELS",
            "STIRNER (critique)"
          ],
          "contre": [
            "HEGEL",
            "RELIGION CHRÉTIENNE"
          ]
        }
      },
      "en": {
        "oeuvre": "The Essence of Christianity",
        "entree": "Feuerbach inverts Hegel from below: God is not Spirit realizing itself in history, but a projection of human essence onto an infinite screen. Theology is an anthropology that misunderstands itself.",
        "concepts": [
          {
            "nom": "GOD AS PROJECTION",
            "cat": "transcendant",
            "type": "Humanisme",
            "puissance": 88,
            "desc": "God is alienated human essence — we attribute our own perfections to God and diminish ourselves proportionally."
          },
          {
            "nom": "RELIGIOUS ALIENATION",
            "cat": "immanent",
            "type": "Matérialisme",
            "puissance": 82,
            "desc": "Religion is self-alienation: man loses his qualities by transferring them to a fictional being. Marx will take up this schema."
          },
          {
            "nom": "MAN IS WHAT HE EATS",
            "cat": "immanent",
            "type": "Matérialisme",
            "puissance": 70,
            "desc": "Sensory materialism: consciousness is conditioned by food, body, material conditions."
          }
        ],
        "filiation": {
          "maitres": [
            "HEGEL",
            "SPINOZA"
          ],
          "disciples": [
            "MARX",
            "ENGELS",
            "STIRNER (critique)"
          ],
          "contre": [
            "HEGEL",
            "CHRISTIAN RELIGION"
          ]
        }
      }
    },
    {
      "id": "063",
      "nom": "J.AUSTIN",
      "full": "John Austin",
      "dates": "1790-1859",
      "types": [
        "Philo. Droit"
      ],
      "lieu": "Angleterre",
      "era": "MODERNE",
      "imgUrl": "https://upload.wikimedia.org/wikipedia/commons/9/93/John_Austin_%28cropped%29.jpg",
      "stats": {
        "INFLUENCE": 65,
        "RIGUEUR": 78,
        "ANCRAGE": 68,
        "PORTÉE": 68,
        "CLÔTURE": 58,
        "CLARTÉ": 72
      },
      "fr": {
        "oeuvre": "La Province de la jurisprudence déterminée",
        "entree": "Austin fonde le positivisme juridique : le droit est le commandement du souverain, distinct de la morale. Cette séparation tranchée entre droit positif et droit naturel structure toute la philosophie du droit analytique.",
        "concepts": [
          {
            "nom": "LE DROIT COMME COMMANDEMENT",
            "cat": "transcendant",
            "type": "Philo. Droit",
            "puissance": 82,
            "desc": "Le droit = commandement d'un souverain sanctionné par des sanctions — tranche nettement droit et morale, droit naturel et droit positif."
          },
          {
            "nom": "LA SOUVERAINETÉ",
            "cat": "immanent",
            "type": "Philo. Droit",
            "puissance": 75,
            "desc": "Le souverain est celui qui obéit à personne et à qui tous obéissent habituellement — définition purement factuelle du pouvoir."
          },
          {
            "nom": "LA SÉPARATION DROIT/MORALE",
            "cat": "immanent",
            "type": "Philo. Droit",
            "puissance": 72,
            "desc": "L'existence d'une loi est une chose ; son mérite ou démérite, une autre — distingue description et évaluation en jurisprudence."
          }
        ],
        "filiation": {
          "maitres": [
            "BENTHAM"
          ],
          "disciples": [
            "H.L.A. HART",
            "KELSEN"
          ],
          "contre": [
            "DROIT NATUREL",
            "BLACKSTONE"
          ]
        }
      },
      "en": {
        "oeuvre": "The Province of Jurisprudence Determined",
        "entree": "Austin founds legal positivism: law is the command of the sovereign, distinct from morality. This sharp separation between positive law and natural law structures all analytic philosophy of law.",
        "concepts": [
          {
            "nom": "LAW AS COMMAND",
            "cat": "transcendant",
            "type": "Philo. Droit",
            "puissance": 82,
            "desc": "Law = a sovereign's command backed by sanctions — sharply separates law from morality, positive from natural law."
          },
          {
            "nom": "SOVEREIGNTY",
            "cat": "immanent",
            "type": "Philo. Droit",
            "puissance": 75,
            "desc": "The sovereign is whoever obeys no one and to whom everyone habitually obeys — a purely factual definition of power."
          },
          {
            "nom": "LAW/MORALITY SEPARATION",
            "cat": "immanent",
            "type": "Philo. Droit",
            "puissance": 72,
            "desc": "The existence of a law is one thing; its merit or demerit another — separates description from evaluation in jurisprudence."
          }
        ],
        "filiation": {
          "maitres": [
            "BENTHAM"
          ],
          "disciples": [
            "H.L.A. HART",
            "KELSEN"
          ],
          "contre": [
            "NATURAL LAW",
            "BLACKSTONE"
          ]
        }
      }
    },
    {
      "id": "064",
      "nom": "J.S.MILL",
      "full": "John Stuart Mill",
      "dates": "1806-1873",
      "types": [
        "Utilitarisme",
        "Libéralisme"
      ],
      "lieu": "Angleterre",
      "era": "CONTEMPORAINE",
      "imgUrl": "https://upload.wikimedia.org/wikipedia/commons/9/99/John_Stuart_Mill_by_London_Stereoscopic_Company%2C_c1870.jpg",
      "stats": {
        "INFLUENCE": 90,
        "RIGUEUR": 78,
        "ANCRAGE": 68,
        "PORTÉE": 82,
        "CLÔTURE": 58,
        "CLARTÉ": 82
      },
      "fr": {
        "oeuvre": "De la liberté / L'Utilitarisme",
        "entree": "Mill raffine Bentham : les plaisirs ne se valent pas tous — mieux vaut être Socrate insatisfait que un sot satisfait. Son principe de liberté — l'État ne peut contraindre l'individu que pour prévenir un tort à autrui — fonde le libéralisme classique.",
        "concepts": [
          {
            "nom": "LA QUALITÉ DES PLAISIRS",
            "cat": "immanent",
            "type": "Utilitarisme",
            "puissance": 85,
            "desc": "Il existe des plaisirs supérieurs et inférieurs — l'utilitarisme doit peser la qualité, pas seulement la quantité des bonheurs."
          },
          {
            "nom": "LE PRINCIPE DE LIBERTÉ",
            "cat": "transcendant",
            "type": "Libéralisme",
            "puissance": 90,
            "desc": "Bascule libérale : la seule raison légitime de contraindre un individu est de prévenir un tort à autrui. La sphère privée est inviolable."
          },
          {
            "nom": "LA LIBERTÉ DE L'ESPRIT",
            "cat": "immanent",
            "type": "Libéralisme",
            "puissance": 82,
            "desc": "La liberté d'expression et de pensée est absolument nécessaire — même une opinion fausse doit pouvoir s'exprimer car la vérité a besoin de contradiction."
          }
        ],
        "filiation": {
          "maitres": [
            "BENTHAM",
            "LOCKE",
            "TOCQUEVILLE"
          ],
          "disciples": [
            "SIDGWICK",
            "RAWLS (influence)",
            "FÉMINISME LIBÉRAL"
          ],
          "contre": [
            "BENTHAM (raffinement)",
            "CONSERVATISME"
          ]
        }
      },
      "en": {
        "oeuvre": "On Liberty / Utilitarianism",
        "entree": "Mill refines Bentham: not all pleasures are equal — better to be Socrates dissatisfied than a fool satisfied. His harm principle — the state can only coerce individuals to prevent harm to others — founds classical liberalism.",
        "concepts": [
          {
            "nom": "QUALITY OF PLEASURES",
            "cat": "immanent",
            "type": "Utilitarisme",
            "puissance": 85,
            "desc": "There are higher and lower pleasures — utilitarianism must weigh quality, not only quantity of happiness."
          },
          {
            "nom": "THE HARM PRINCIPLE",
            "cat": "transcendant",
            "type": "Libéralisme",
            "puissance": 90,
            "desc": "A liberal shift: the only legitimate reason to coerce an individual is to prevent harm to others. The private sphere is inviolable."
          },
          {
            "nom": "LIBERTY OF THOUGHT",
            "cat": "immanent",
            "type": "Libéralisme",
            "puissance": 82,
            "desc": "Freedom of expression and thought is absolutely necessary — even a false opinion must be allowed since truth needs contradiction."
          }
        ],
        "filiation": {
          "maitres": [
            "BENTHAM",
            "LOCKE",
            "TOCQUEVILLE"
          ],
          "disciples": [
            "SIDGWICK",
            "RAWLS (influence)",
            "LIBERAL FEMINISM"
          ],
          "contre": [
            "BENTHAM (refined)",
            "CONSERVATISM"
          ]
        }
      }
    },
    {
      "id": "065",
      "nom": "DARWIN",
      "full": "Charles Darwin",
      "dates": "1809-1882",
      "types": [
        "Philo. Sciences",
        "Matérialisme"
      ],
      "lieu": "Angleterre",
      "era": "CONTEMPORAINE",
      "imgUrl": "https://upload.wikimedia.org/wikipedia/commons/2/2e/Charles_Darwin_seated_crop.jpg",
      "stats": {
        "INFLUENCE": 98,
        "RIGUEUR": 88,
        "ANCRAGE": 85,
        "PORTÉE": 99,
        "CLÔTURE": 72,
        "CLARTÉ": 80
      },
      "fr": {
        "oeuvre": "De l'origine des espèces",
        "entree": "Darwin opère la plus grande révolution conceptuelle après Copernic : les espèces ne sont pas fixes et créées mais évoluent par sélection naturelle. La finalité disparaît du vivant — le hasard et la nécessité remplacent Dieu comme explication.",
        "concepts": [
          {
            "nom": "LA SÉLECTION NATURELLE",
            "cat": "transcendant",
            "type": "Philo. Sciences",
            "puissance": 99,
            "desc": "Bascule totale : les organismes adaptés survivent et se reproduisent plus — toute la diversité du vivant s'explique sans dessein."
          },
          {
            "nom": "L'ÉVOLUTION DES ESPÈCES",
            "cat": "immanent",
            "type": "Philo. Sciences",
            "puissance": 95,
            "desc": "Les espèces dérivent d'ancêtres communs par transformation graduelle — invalide le fixisme créationniste et la téléologie divine."
          },
          {
            "nom": "LA LUTTE POUR LA VIE",
            "cat": "immanent",
            "type": "Matérialisme",
            "puissance": 85,
            "desc": "La compétition pour les ressources est le moteur de l'évolution — la nature n'est ni morale ni purposive."
          }
        ],
        "filiation": {
          "maitres": [
            "MALTHUS",
            "LYELL",
            "LAMARCK"
          ],
          "disciples": [
            "HUXLEY",
            "SPENCER",
            "BIOLOGIE MODERNE"
          ],
          "contre": [
            "CRÉATIONNISME",
            "PALEY"
          ]
        }
      },
      "en": {
        "oeuvre": "On the Origin of Species",
        "entree": "Darwin enacts the greatest conceptual revolution since Copernicus: species are not fixed and created but evolve through natural selection. Teleology disappears from life — chance and necessity replace God as explanation.",
        "concepts": [
          {
            "nom": "NATURAL SELECTION",
            "cat": "transcendant",
            "type": "Philo. Sciences",
            "puissance": 99,
            "desc": "A total shift: adapted organisms survive and reproduce more — all diversity of life explained without design."
          },
          {
            "nom": "EVOLUTION OF SPECIES",
            "cat": "immanent",
            "type": "Philo. Sciences",
            "puissance": 95,
            "desc": "Species derive from common ancestors through gradual transformation — invalidates creationist fixism and divine teleology."
          },
          {
            "nom": "THE STRUGGLE FOR LIFE",
            "cat": "immanent",
            "type": "Matérialisme",
            "puissance": 85,
            "desc": "Competition for resources drives evolution — nature is neither moral nor purposive."
          }
        ],
        "filiation": {
          "maitres": [
            "MALTHUS",
            "LYELL",
            "LAMARCK"
          ],
          "disciples": [
            "HUXLEY",
            "SPENCER",
            "MODERN BIOLOGY"
          ],
          "contre": [
            "CREATIONISM",
            "PALEY"
          ]
        }
      }
    },
    {
      "id": "066",
      "nom": "KIERKGRD",
      "full": "Søren Kierkegaard",
      "dates": "1813-1855",
      "types": [
        "Existentialisme",
        "Philo. Religion"
      ],
      "lieu": "Danemark",
      "era": "CONTEMPORAINE",
      "imgUrl": "https://upload.wikimedia.org/wikipedia/commons/d/d4/S%C3%B8ren_Kierkegaard_%281813-1855%29_-_%28cropped%29.jpg",
      "stats": {
        "INFLUENCE": 88,
        "RIGUEUR": 55,
        "ANCRAGE": 42,
        "PORTÉE": 88,
        "CLÔTURE": 35,
        "CLARTÉ": 62
      },
      "fr": {
        "oeuvre": "Ou bien... ou bien / Crainte et Tremblement",
        "entree": "Père de l'existentialisme, Kierkegaard attaque Hegel : la philosophie systématique efface l'individu singulier. L'existence précède l'essence. La vérité est subjective. Il faut choisir : stade esthétique, éthique ou religieux.",
        "concepts": [
          {
            "nom": "LES TROIS STADES",
            "cat": "immanent",
            "type": "Existentialisme",
            "puissance": 85,
            "desc": "Esthétique (plaisir), éthique (devoir), religieux (foi) — trois modes d'existence dont le passage est un saut qualitatif, non un progrès rationnel."
          },
          {
            "nom": "LE SAUT DANS LA FOI",
            "cat": "transcendant",
            "type": "Philo. Religion",
            "puissance": 82,
            "desc": "La foi transcende la raison — Abraham sur le mont Moriah accomplit l'absurde suspens téléologique de l'éthique."
          },
          {
            "nom": "LA VÉRITÉ SUBJECTIVE",
            "cat": "transcendant",
            "type": "Existentialisme",
            "puissance": 80,
            "desc": "Bascule contre Hegel : la vérité n'est pas un système objectif mais une appropriation intérieure passionnée — le subjectif est la vérité."
          }
        ],
        "filiation": {
          "maitres": [
            "SOCRATE",
            "AUGUSTIN",
            "PASCAL"
          ],
          "disciples": [
            "HEIDEGGER",
            "SARTRE",
            "CAMUS",
            "BARTH"
          ],
          "contre": [
            "HEGEL",
            "SYSTÈME RATIONNEL"
          ]
        }
      },
      "en": {
        "oeuvre": "Either/Or / Fear and Trembling",
        "entree": "Father of existentialism, Kierkegaard attacks Hegel: systematic philosophy erases the singular individual. Existence precedes essence. Truth is subjectivity. One must choose: aesthetic, ethical, or religious stage.",
        "concepts": [
          {
            "nom": "THE THREE STAGES",
            "cat": "immanent",
            "type": "Existentialisme",
            "puissance": 85,
            "desc": "Aesthetic (pleasure), ethical (duty), religious (faith) — three modes of existence whose transition is a qualitative leap, not rational progress."
          },
          {
            "nom": "THE LEAP OF FAITH",
            "cat": "transcendant",
            "type": "Philo. Religion",
            "puissance": 82,
            "desc": "Faith transcends reason — Abraham on Mount Moriah enacts the absurd teleological suspension of the ethical."
          },
          {
            "nom": "SUBJECTIVE TRUTH",
            "cat": "transcendant",
            "type": "Existentialisme",
            "puissance": 80,
            "desc": "A shift against Hegel: truth is not an objective system but passionate inward appropriation — subjectivity is truth."
          }
        ],
        "filiation": {
          "maitres": [
            "SOCRATE",
            "AUGUSTIN",
            "PASCAL"
          ],
          "disciples": [
            "HEIDEGGER",
            "SARTRE",
            "CAMUS",
            "BARTH"
          ],
          "contre": [
            "HEGEL",
            "RATIONAL SYSTEM"
          ]
        }
      }
    },
    {
      "id": "067",
      "nom": "BRENTANO",
      "full": "Franz Brentano",
      "dates": "1838-1917",
      "types": [
        "Phénoménologie",
        "Empirisme"
      ],
      "lieu": "Autriche",
      "era": "CONTEMPORAINE",
      "imgUrl": "https://upload.wikimedia.org/wikipedia/commons/7/72/Franz_Brentano_in_Vienna%2C_1890_%28cropped%29.png",
      "stats": {
        "INFLUENCE": 70,
        "RIGUEUR": 78,
        "ANCRAGE": 65,
        "PORTÉE": 70,
        "CLÔTURE": 58,
        "CLARTÉ": 65
      },
      "fr": {
        "oeuvre": "Psychologie du point de vue empirique",
        "entree": "Brentano introduit le concept d'intentionnalité — toute conscience est conscience de quelque chose — et fonde la psychologie descriptive. Ce concept, transmis à Husserl, sera le cœur de la phénoménologie.",
        "concepts": [
          {
            "nom": "L'INTENTIONNALITÉ",
            "cat": "immanent",
            "type": "Phénoménologie",
            "puissance": 92,
            "desc": "Caractère intrinsèque de tout phénomène psychique d'être dirigé vers un objet — distingue le mental du physique."
          },
          {
            "nom": "LA PSYCHOLOGIE DESCRIPTIVE",
            "cat": "immanent",
            "type": "Empirisme",
            "puissance": 78,
            "desc": "Décrire les phénomènes mentaux tels qu'ils se donnent à la conscience, sans réduction physiologique préalable."
          },
          {
            "nom": "L'ÉVIDENCE IMMÉDIATE",
            "cat": "immanent",
            "type": "Empirisme",
            "puissance": 72,
            "desc": "Certains jugements sont immédiatement évidents pour la conscience — fondement d'une épistémologie sans rationalisme pur."
          }
        ],
        "filiation": {
          "maitres": [
            "ARISTOTE",
            "MILL",
            "SCHOLASTIQUE"
          ],
          "disciples": [
            "HUSSERL",
            "MEINONG",
            "TWARDOWSKI"
          ],
          "contre": [
            "ASSOCIATIONNISME",
            "PSYCHOLOGIE EXPÉRIMENTALE PURE"
          ]
        }
      },
      "en": {
        "oeuvre": "Psychology from an Empirical Standpoint",
        "entree": "Brentano introduces the concept of intentionality — every consciousness is consciousness of something — and founds descriptive psychology. This concept, passed to Husserl, will be the core of phenomenology.",
        "concepts": [
          {
            "nom": "INTENTIONALITY",
            "cat": "immanent",
            "type": "Phénoménologie",
            "puissance": 92,
            "desc": "The intrinsic character of every mental phenomenon of being directed toward an object — distinguishes the mental from the physical."
          },
          {
            "nom": "DESCRIPTIVE PSYCHOLOGY",
            "cat": "immanent",
            "type": "Empirisme",
            "puissance": 78,
            "desc": "Describe mental phenomena as they give themselves to consciousness, without prior physiological reduction."
          },
          {
            "nom": "IMMEDIATE EVIDENCE",
            "cat": "immanent",
            "type": "Empirisme",
            "puissance": 72,
            "desc": "Certain judgments are immediately evident to consciousness — the foundation of an epistemology without pure rationalism."
          }
        ],
        "filiation": {
          "maitres": [
            "ARISTOTLE",
            "MILL",
            "SCHOLASTICISM"
          ],
          "disciples": [
            "HUSSERL",
            "MEINONG",
            "TWARDOWSKI"
          ],
          "contre": [
            "ASSOCIATIONISM",
            "PURE EXPERIMENTAL PSYCHOLOGY"
          ]
        }
      }
    },
    {
      "id": "068",
      "nom": "PEIRCE",
      "full": "Charles Sanders Peirce",
      "dates": "1839-1914",
      "types": [
        "Pragmatisme",
        "Logique"
      ],
      "lieu": "États-Unis",
      "era": "CONTEMPORAINE",
      "imgUrl": "https://upload.wikimedia.org/wikipedia/commons/b/b6/Charles_Sanders_Peirce.png",
      "stats": {
        "INFLUENCE": 78,
        "RIGUEUR": 90,
        "ANCRAGE": 68,
        "PORTÉE": 78,
        "CLÔTURE": 62,
        "CLARTÉ": 40
      },
      "fr": {
        "oeuvre": "Comment rendre nos idées claires",
        "entree": "Fondateur du pragmatisme et de la sémiotique, Peirce définit le sens d'un concept par ses conséquences pratiques concevables. Sa logique et sa théorie des signes influenceront durablement la philosophie analytique et les sciences cognitives.",
        "concepts": [
          {
            "nom": "LE PRINCIPE PRAGMATISTE",
            "cat": "transcendant",
            "type": "Pragmatisme",
            "puissance": 88,
            "desc": "Le sens d'un concept réside dans la totalité de ses effets pratiques concevables — pas de différence réelle sans différence pratique."
          },
          {
            "nom": "LA TRIADE SÉMIOTIQUE",
            "cat": "immanent",
            "type": "Logique",
            "puissance": 85,
            "desc": "Tout signe implique trois éléments : le representamen, l'objet et l'interprétant — théorie universelle de la signification."
          },
          {
            "nom": "L'ABDUCTION",
            "cat": "immanent",
            "type": "Logique",
            "puissance": 80,
            "desc": "Troisième forme d'inférence après déduction et induction : l'abduction consiste à inférer l'hypothèse la plus explicative."
          }
        ],
        "filiation": {
          "maitres": [
            "KANT",
            "WHEWELL",
            "BOOLE"
          ],
          "disciples": [
            "W. JAMES",
            "DEWEY",
            "SÉMIOTIQUE MODERNE"
          ],
          "contre": [
            "CARTÉSIANISME",
            "INTUITIONISME"
          ]
        }
      },
      "en": {
        "oeuvre": "How to Make Our Ideas Clear",
        "entree": "Founder of pragmatism and semiotics, Peirce defines the meaning of a concept by its conceivable practical consequences. His logic and theory of signs will durably influence analytic philosophy and cognitive science.",
        "concepts": [
          {
            "nom": "THE PRAGMATIST PRINCIPLE",
            "cat": "transcendant",
            "type": "Pragmatisme",
            "puissance": 88,
            "desc": "The meaning of a concept lies in the totality of its conceivable practical effects — no real difference without a practical difference."
          },
          {
            "nom": "THE SEMIOTIC TRIAD",
            "cat": "immanent",
            "type": "Logique",
            "puissance": 85,
            "desc": "Every sign involves three elements: the representamen, the object, and the interpretant — a universal theory of signification."
          },
          {
            "nom": "ABDUCTION",
            "cat": "immanent",
            "type": "Logique",
            "puissance": 80,
            "desc": "A third form of inference after deduction and induction: abduction infers the most explanatory hypothesis from observed facts."
          }
        ],
        "filiation": {
          "maitres": [
            "KANT",
            "WHEWELL",
            "BOOLE"
          ],
          "disciples": [
            "W. JAMES",
            "DEWEY",
            "MODERN SEMIOTICS"
          ],
          "contre": [
            "CARTESIANISM",
            "INTUITIONISM"
          ]
        }
      }
    },
    {
      "id": "069",
      "nom": "W.JAMES",
      "full": "William James",
      "dates": "1842-1910",
      "types": [
        "Pragmatisme",
        "Philo. Religion"
      ],
      "lieu": "États-Unis",
      "era": "CONTEMPORAINE",
      "imgUrl": "https://upload.wikimedia.org/wikipedia/commons/9/9c/William_James_b1842c.jpg",
      "stats": {
        "INFLUENCE": 82,
        "RIGUEUR": 65,
        "ANCRAGE": 60,
        "PORTÉE": 78,
        "CLÔTURE": 55,
        "CLARTÉ": 85
      },
      "fr": {
        "oeuvre": "Le Pragmatisme / Les Variétés de l'expérience religieuse",
        "entree": "James popularise le pragmatisme et l'étend à la religion : une croyance est vraie si elle fonctionne, si elle satisfait nos besoins vitaux. L'expérience religieuse mérite une étude empirique sérieuse, indépendamment de la vérité métaphysique des religions.",
        "concepts": [
          {
            "nom": "LA VÉRITÉ COMME UTILITÉ",
            "cat": "transcendant",
            "type": "Pragmatisme",
            "puissance": 85,
            "desc": "Bascule épistémique : vrai = ce qui fonctionne, ce qui satisfait, ce qui « paie » — la vérité est un processus, non un état."
          },
          {
            "nom": "LE PLURALISME RADICAL",
            "cat": "immanent",
            "type": "Pragmatisme",
            "puissance": 78,
            "desc": "L'univers est radicalement pluriel et inachevé — ni monisme idéaliste ni dualisme strict, mais un empirisme radical."
          },
          {
            "nom": "L'EXPÉRIENCE RELIGIEUSE",
            "cat": "immanent",
            "type": "Philo. Religion",
            "puissance": 80,
            "desc": "Les expériences mystiques et religieuses sont des données empiriques réelles — leur valeur pratique légitime leur étude philosophique."
          }
        ],
        "filiation": {
          "maitres": [
            "PEIRCE",
            "DARWIN",
            "RENOUVIER"
          ],
          "disciples": [
            "DEWEY",
            "RORTY (influence)"
          ],
          "contre": [
            "HEGEL",
            "BRADLEY",
            "RATIONALISME ABSOLU"
          ]
        }
      },
      "en": {
        "oeuvre": "Pragmatism / The Varieties of Religious Experience",
        "entree": "James popularizes pragmatism and extends it to religion: a belief is true if it works, if it satisfies our vital needs. Religious experience deserves serious empirical study, independent of the metaphysical truth of religions.",
        "concepts": [
          {
            "nom": "TRUTH AS UTILITY",
            "cat": "transcendant",
            "type": "Pragmatisme",
            "puissance": 85,
            "desc": "An epistemic shift: true = what works, what satisfies, what 'pays' — truth is a process, not a state."
          },
          {
            "nom": "RADICAL PLURALISM",
            "cat": "immanent",
            "type": "Pragmatisme",
            "puissance": 78,
            "desc": "The universe is radically plural and unfinished — neither idealist monism nor strict dualism, but a radical empiricism."
          },
          {
            "nom": "RELIGIOUS EXPERIENCE",
            "cat": "immanent",
            "type": "Philo. Religion",
            "puissance": 80,
            "desc": "Mystical and religious experiences are real empirical data — their practical value legitimizes their philosophical study."
          }
        ],
        "filiation": {
          "maitres": [
            "PEIRCE",
            "DARWIN",
            "RENOUVIER"
          ],
          "disciples": [
            "DEWEY",
            "RORTY (influence)"
          ],
          "contre": [
            "HEGEL",
            "BRADLEY",
            "ABSOLUTE RATIONALISM"
          ]
        }
      }
    },
    {
      "id": "070",
      "nom": "BRADLEY",
      "full": "Francis Herbert Bradley",
      "dates": "1846-1924",
      "types": [
        "Idéalisme"
      ],
      "lieu": "Angleterre",
      "era": "CONTEMPORAINE",
      "imgUrl": "https://upload.wikimedia.org/wikipedia/commons/0/0d/F.H._Bradley.png",
      "stats": {
        "INFLUENCE": 60,
        "RIGUEUR": 72,
        "ANCRAGE": 58,
        "PORTÉE": 65,
        "CLÔTURE": 52,
        "CLARTÉ": 38
      },
      "fr": {
        "oeuvre": "Apparence et Réalité",
        "entree": "Bradley est le chef de file de l'idéalisme britannique. Le monde ordinaire — relations, espace, temps, moi — n'est qu'apparence contradictoire. Seule l'Expérience Absolue, au-delà des distinctions, est réelle.",
        "concepts": [
          {
            "nom": "L'ABSOLU",
            "cat": "transcendant",
            "type": "Idéalisme",
            "puissance": 80,
            "desc": "La réalité ultime est une Expérience Absolue unifiée transcendant toutes les distinctions — monisme absolu contre pluralisme."
          },
          {
            "nom": "LA RÉGRESSION RELATIONNELLE",
            "cat": "immanent",
            "type": "Logique",
            "puissance": 78,
            "desc": "Toute relation requiert une nouvelle relation pour unir ses termes, à l'infini — les relations ne sont pas ontologiquement réelles."
          },
          {
            "nom": "APPARENCE ET RÉALITÉ",
            "cat": "immanent",
            "type": "Idéalisme",
            "puissance": 72,
            "desc": "Le monde quotidien est plein de contradictions internes — la réalité vraie doit les dépasser dans une totalité cohérente."
          }
        ],
        "filiation": {
          "maitres": [
            "HEGEL",
            "KANT"
          ],
          "disciples": [
            "MCTAGGART",
            "BOSANQUET"
          ],
          "contre": [
            "RUSSELL (réaction contre)",
            "MOORE (réaction contre)",
            "JAMES"
          ]
        }
      },
      "en": {
        "oeuvre": "Appearance and Reality",
        "entree": "Bradley is the leader of British Idealism. The ordinary world — relations, space, time, self — is only contradictory appearance. Only Absolute Experience, beyond all distinctions, is real.",
        "concepts": [
          {
            "nom": "THE ABSOLUTE",
            "cat": "transcendant",
            "type": "Idéalisme",
            "puissance": 80,
            "desc": "Ultimate reality is a unified Absolute Experience transcending all distinctions — absolute monism against pluralism."
          },
          {
            "nom": "THE RELATIONAL REGRESS",
            "cat": "immanent",
            "type": "Logique",
            "puissance": 78,
            "desc": "Every relation requires a new relation to unite its terms, ad infinitum — relations are not ontologically real."
          },
          {
            "nom": "APPEARANCE AND REALITY",
            "cat": "immanent",
            "type": "Idéalisme",
            "puissance": 72,
            "desc": "The everyday world is full of internal contradictions — true reality must overcome them in a coherent totality."
          }
        ],
        "filiation": {
          "maitres": [
            "HEGEL",
            "KANT"
          ],
          "disciples": [
            "MCTAGGART",
            "BOSANQUET"
          ],
          "contre": [
            "RUSSELL (reacted against)",
            "MOORE (reacted against)",
            "JAMES"
          ]
        }
      }
    },
    {
      "id": "071",
      "nom": "FREGE",
      "full": "Gottlob Frege",
      "dates": "1848-1925",
      "types": [
        "Logique",
        "Philo. Langage"
      ],
      "lieu": "Allemagne",
      "era": "CONTEMPORAINE",
      "imgUrl": "https://upload.wikimedia.org/wikipedia/commons/9/99/Young_frege.jpg",
      "stats": {
        "INFLUENCE": 88,
        "RIGUEUR": 99,
        "ANCRAGE": 75,
        "PORTÉE": 90,
        "CLÔTURE": 60,
        "CLARTÉ": 40
      },
      "fr": {
        "oeuvre": "Begriffsschrift / Les Fondements de l'arithmétique",
        "entree": "Frege invente la logique moderne. Son Begriffsschrift est la première logique formelle avec quantificateurs — surpasse la syllogistique aristotélicienne de 2000 ans. Il tente de dériver l'arithmétique de la logique pure (logicisme).",
        "concepts": [
          {
            "nom": "LA LOGIQUE DES PRÉDICATS",
            "cat": "immanent",
            "type": "Logique",
            "puissance": 99,
            "desc": "Premier système logique avec quantificateurs universels et existentiels — fonde la logique mathématique moderne."
          },
          {
            "nom": "SENS ET RÉFÉRENCE",
            "cat": "immanent",
            "type": "Philo. Langage",
            "puissance": 92,
            "desc": "L'Étoile du matin et l'Étoile du soir ont le même référent (Vénus) mais un sens différent — distinction fondatrice de la sémantique analytique."
          },
          {
            "nom": "LE LOGICISME",
            "cat": "transcendant",
            "type": "Logique",
            "puissance": 82,
            "desc": "L'arithmétique est réductible à la logique pure — programme fondationnaliste détruit par le paradoxe de Russell."
          }
        ],
        "filiation": {
          "maitres": [
            "LEIBNIZ",
            "BOOLE",
            "KANT (réaction)"
          ],
          "disciples": [
            "RUSSELL",
            "WITTGENSTN",
            "CARNAP"
          ],
          "contre": [
            "PSYCHOLOGISME",
            "KANTISME EN MATHÉMATIQUES"
          ]
        }
      },
      "en": {
        "oeuvre": "Begriffsschrift / The Foundations of Arithmetic",
        "entree": "Frege invents modern logic. His Begriffsschrift is the first formal logic with quantifiers — surpasses Aristotelian syllogistic after 2000 years. He attempts to derive arithmetic from pure logic (logicism).",
        "concepts": [
          {
            "nom": "PREDICATE LOGIC",
            "cat": "immanent",
            "type": "Logique",
            "puissance": 99,
            "desc": "First logical system with universal and existential quantifiers — founds modern mathematical logic."
          },
          {
            "nom": "SENSE AND REFERENCE",
            "cat": "immanent",
            "type": "Philo. Langage",
            "puissance": 92,
            "desc": "The Morning Star and Evening Star share the same reference (Venus) but differ in sense — the founding distinction of analytic semantics."
          },
          {
            "nom": "LOGICISM",
            "cat": "transcendant",
            "type": "Logique",
            "puissance": 82,
            "desc": "Arithmetic is reducible to pure logic — a foundationalist program destroyed by Russell's paradox."
          }
        ],
        "filiation": {
          "maitres": [
            "LEIBNIZ",
            "BOOLE",
            "KANT (reaction)"
          ],
          "disciples": [
            "RUSSELL",
            "WITTGSTN",
            "CARNAP"
          ],
          "contre": [
            "PSYCHOLOGISM",
            "KANTIANISM IN MATHEMATICS"
          ]
        }
      }
    },
    {
      "id": "072",
      "nom": "POINCARE",
      "full": "Henri Poincaré",
      "dates": "1854-1912",
      "types": [
        "Philo. Sciences",
        "Constructivisme"
      ],
      "lieu": "France",
      "era": "CONTEMPORAINE",
      "imgUrl": "https://upload.wikimedia.org/wikipedia/commons/f/f4/PSM_V82_D416_Henri_Poincare.png",
      "stats": {
        "INFLUENCE": 72,
        "RIGUEUR": 90,
        "ANCRAGE": 70,
        "PORTÉE": 75,
        "CLÔTURE": 65,
        "CLARTÉ": 68
      },
      "fr": {
        "oeuvre": "La Science et l'Hypothèse",
        "entree": "Mathématicien et philosophe des sciences, Poincaré défend le conventionnalisme : les axiomes de la géométrie sont des conventions commodes, non des vérités absolues. La science construit des représentations utiles, non une copie de la réalité.",
        "concepts": [
          {
            "nom": "LE CONVENTIONNALISME",
            "cat": "transcendant",
            "type": "Constructivisme",
            "puissance": 85,
            "desc": "Les principes fondamentaux de la science (géométrie, mécanique) sont des conventions librement choisies pour leur commodité — non des vérités empiriques."
          },
          {
            "nom": "L'INTUITION MATHÉMATIQUE",
            "cat": "immanent",
            "type": "Rationalisme",
            "puissance": 80,
            "desc": "Les mathématiques requièrent une intuition pure (récurrence) irréductible à la logique formelle pure — contre le logicisme de Frege."
          },
          {
            "nom": "LA COMMODITÉ DES THÉORIES",
            "cat": "immanent",
            "type": "Philo. Sciences",
            "puissance": 75,
            "desc": "Le critère de choix entre théories scientifiques est la commodité, non la vérité absolue — science comme instrument."
          }
        ],
        "filiation": {
          "maitres": [
            "KANT",
            "MACH"
          ],
          "disciples": [
            "DUHEM",
            "LE ROY"
          ],
          "contre": [
            "FREGE (logicisme)",
            "RÉALISME SCIENTIFIQUE NAÏF"
          ]
        }
      },
      "en": {
        "oeuvre": "Science and Hypothesis",
        "entree": "Mathematician and philosopher of science, Poincaré defends conventionalism: the axioms of geometry are convenient conventions, not absolute truths. Science constructs useful representations, not a copy of reality.",
        "concepts": [
          {
            "nom": "CONVENTIONALISM",
            "cat": "transcendant",
            "type": "Constructivisme",
            "puissance": 85,
            "desc": "The fundamental principles of science (geometry, mechanics) are freely chosen conventions for their convenience — not empirical truths."
          },
          {
            "nom": "MATHEMATICAL INTUITION",
            "cat": "immanent",
            "type": "Rationalisme",
            "puissance": 80,
            "desc": "Mathematics requires a pure intuition (recurrence) irreducible to pure formal logic — against Frege's logicism."
          },
          {
            "nom": "THEORETICAL CONVENIENCE",
            "cat": "immanent",
            "type": "Philo. Sciences",
            "puissance": 75,
            "desc": "The criterion for choosing between scientific theories is convenience, not absolute truth — science as instrument."
          }
        ],
        "filiation": {
          "maitres": [
            "KANT",
            "MACH"
          ],
          "disciples": [
            "DUHEM",
            "LE ROY"
          ],
          "contre": [
            "FREGE (logicism)",
            "NAIVE SCIENTIFIC REALISM"
          ]
        }
      }
    },
    {
      "id": "073",
      "nom": "FREUD",
      "full": "Sigmund Freud",
      "dates": "1856-1939",
      "types": [
        "Philo. Esprit",
        "Existentialisme"
      ],
      "lieu": "Autriche",
      "era": "CONTEMPORAINE",
      "imgUrl": "https://upload.wikimedia.org/wikipedia/commons/1/12/Sigmund_Freud_LIFE.jpg",
      "stats": {
        "INFLUENCE": 95,
        "RIGUEUR": 42,
        "ANCRAGE": 45,
        "PORTÉE": 95,
        "CLÔTURE": 38,
        "CLARTÉ": 72
      },
      "fr": {
        "oeuvre": "L'Interprétation des rêves",
        "entree": "Le moi n'est pas maître dans sa propre maison. Freud découvre l'inconscient structuré comme un désir — le ça, le moi, le surmoi. La psychanalyse renverse l'humanisme des Lumières en révélant l'irrationalité fondamentale de la vie psychique.",
        "concepts": [
          {
            "nom": "L'INCONSCIENT",
            "cat": "transcendant",
            "type": "Philo. Esprit",
            "puissance": 95,
            "desc": "Bascule anthropologique majeure : la vie psychique obéit à des forces inconscientes que le sujet ne contrôle ni ne connaît."
          },
          {
            "nom": "LE ÇA / MOI / SURMOI",
            "cat": "immanent",
            "type": "Philo. Esprit",
            "puissance": 85,
            "desc": "Topique structurale : le ça (pulsions), le moi (réalité), le surmoi (interdit) — le moi est le jouet de leurs conflits."
          },
          {
            "nom": "LA SUBLIMATION",
            "cat": "immanent",
            "type": "Existentialisme",
            "puissance": 78,
            "desc": "Les pulsions refoulées se transforment en créations culturelles — l'art, la science, la morale comme dérivations du désir."
          }
        ],
        "filiation": {
          "maitres": [
            "CHARCOT",
            "BREUER",
            "SCHOPENHAUER"
          ],
          "disciples": [
            "JUNG",
            "LACAN",
            "ADLER"
          ],
          "contre": [
            "ADLER (séparation)",
            "JUNG (séparation)"
          ]
        }
      },
      "en": {
        "oeuvre": "The Interpretation of Dreams",
        "entree": "The ego is not master in its own house. Freud discovers the unconscious structured like a desire — id, ego, superego. Psychoanalysis overturns Enlightenment humanism by revealing the fundamental irrationality of psychic life.",
        "concepts": [
          {
            "nom": "THE UNCONSCIOUS",
            "cat": "transcendant",
            "type": "Philo. Esprit",
            "puissance": 95,
            "desc": "A major anthropological shift: psychic life obeys unconscious forces that the subject neither controls nor knows."
          },
          {
            "nom": "ID / EGO / SUPEREGO",
            "cat": "immanent",
            "type": "Philo. Esprit",
            "puissance": 85,
            "desc": "Structural topography: the id (drives), the ego (reality), the superego (prohibition) — the ego is the plaything of their conflicts."
          },
          {
            "nom": "SUBLIMATION",
            "cat": "immanent",
            "type": "Existentialisme",
            "puissance": 78,
            "desc": "Repressed drives transform into cultural creations — art, science, morality as derivatives of desire."
          }
        ],
        "filiation": {
          "maitres": [
            "CHARCOT",
            "BREUER",
            "SCHOPENHAUER"
          ],
          "disciples": [
            "JUNG",
            "LACAN",
            "ADLER"
          ],
          "contre": [
            "ADLER (split)",
            "JUNG (split)"
          ]
        }
      }
    },
    {
      "id": "074",
      "nom": "SAUSSURE",
      "full": "Ferdinand de Saussure",
      "dates": "1857-1913",
      "types": [
        "Structuralisme",
        "Philo. Langage"
      ],
      "lieu": "Suisse",
      "era": "CONTEMPORAINE",
      "imgUrl": "https://upload.wikimedia.org/wikipedia/commons/6/69/Ferdinand_de_Saussure_by_Jullien_Restored.png",
      "stats": {
        "INFLUENCE": 85,
        "RIGUEUR": 82,
        "ANCRAGE": 70,
        "PORTÉE": 88,
        "CLÔTURE": 58,
        "CLARTÉ": 68
      },
      "fr": {
        "oeuvre": "Cours de linguistique générale",
        "entree": "Saussure fonde la linguistique moderne et le structuralisme. Le signe linguistique unit un signifiant et un signifié par une relation arbitraire. La langue est un système de différences sans termes positifs. Ce geste inaugure le tournant structuraliste en sciences humaines.",
        "concepts": [
          {
            "nom": "LE SIGNE ARBITRAIRE",
            "cat": "transcendant",
            "type": "Structuralisme",
            "puissance": 90,
            "desc": "Bascule : aucun lien naturel entre le son (signifiant) et le concept (signifié) — la langue est convention pure, structure différentielle."
          },
          {
            "nom": "LANGUE ET PAROLE",
            "cat": "immanent",
            "type": "Philo. Langage",
            "puissance": 85,
            "desc": "Distinction entre le système abstrait (langue) et son actualisation individuelle (parole) — la linguistique étudie la langue."
          },
          {
            "nom": "LA VALEUR DIFFÉRENTIELLE",
            "cat": "immanent",
            "type": "Structuralisme",
            "puissance": 82,
            "desc": "Un signe ne vaut que par opposition aux autres — le sens est relationnel, non substantiel. \"Chien\" signifie ce que \"chat\" ne signifie pas."
          }
        ],
        "filiation": {
          "maitres": [
            "WHITNEY",
            "NEO-GRAMMAIRIENS"
          ],
          "disciples": [
            "JAKOBSON",
            "LÉVI-STRAUSS",
            "BARTHES",
            "LACAN"
          ],
          "contre": [
            "LINGUISTIQUE HISTORIQUE PURE"
          ]
        }
      },
      "en": {
        "oeuvre": "Course in General Linguistics",
        "entree": "Saussure founds modern linguistics and structuralism. The linguistic sign unites signifier and signified through an arbitrary relation. Language is a system of differences without positive terms. This gesture inaugurates the structuralist turn in the human sciences.",
        "concepts": [
          {
            "nom": "THE ARBITRARY SIGN",
            "cat": "transcendant",
            "type": "Structuralisme",
            "puissance": 90,
            "desc": "A shift: no natural link between sound (signifier) and concept (signified) — language is pure convention, differential structure."
          },
          {
            "nom": "LANGUE AND PAROLE",
            "cat": "immanent",
            "type": "Philo. Langage",
            "puissance": 85,
            "desc": "Distinction between the abstract system (langue) and its individual actualization (parole) — linguistics studies langue."
          },
          {
            "nom": "DIFFERENTIAL VALUE",
            "cat": "immanent",
            "type": "Structuralisme",
            "puissance": 82,
            "desc": "A sign has value only through opposition to others — meaning is relational, not substantial."
          }
        ],
        "filiation": {
          "maitres": [
            "WHITNEY",
            "NEO-GRAMMARIANS"
          ],
          "disciples": [
            "JAKOBSON",
            "LÉVI-STRAUSS",
            "BARTHES",
            "LACAN"
          ],
          "contre": [
            "PURE HISTORICAL LINGUISTICS"
          ]
        }
      }
    },
    {
      "id": "075",
      "nom": "BERGSON",
      "full": "Henri Bergson",
      "dates": "1859-1941",
      "types": [
        "Idéalisme",
        "Phénoménologie"
      ],
      "lieu": "France",
      "era": "CONTEMPORAINE",
      "imgUrl": "https://upload.wikimedia.org/wikipedia/commons/9/9d/Henri_Bergson_02.jpg",
      "stats": {
        "INFLUENCE": 80,
        "RIGUEUR": 60,
        "ANCRAGE": 58,
        "PORTÉE": 82,
        "CLÔTURE": 50,
        "CLARTÉ": 68
      },
      "fr": {
        "oeuvre": "L'Évolution créatrice",
        "entree": "Bergson attaque le mécanisme et le déterminisme scientifiques au nom de la durée vécue. Le temps de la science est spatial — le vrai temps est la durée, intuition pure du devenir. L'évolution est créatrice, non mécanique.",
        "concepts": [
          {
            "nom": "LA DURÉE",
            "cat": "transcendant",
            "type": "Phénoménologie",
            "puissance": 88,
            "desc": "Bascule : le temps réel n'est pas l'espace ni la mesure mais la durée vécue, hétérogène et continue — irréductible à la physique."
          },
          {
            "nom": "L'INTUITION",
            "cat": "immanent",
            "type": "Idéalisme",
            "puissance": 82,
            "desc": "La méthode philosophique : coïncider avec le mouvement réel des choses par intuition, au lieu de les fragmenter par l'analyse."
          },
          {
            "nom": "L'ÉLAN VITAL",
            "cat": "transcendant",
            "type": "Idéalisme",
            "puissance": 78,
            "desc": "Force créatrice qui traverse la matière et produit l'évolution — contre le mécanisme darwinien pur, l'évolution a une direction."
          }
        ],
        "filiation": {
          "maitres": [
            "SPENCER (critique)",
            "DARWIN (critique)"
          ],
          "disciples": [
            "MERLEAU-PONTY",
            "DELEUZE",
            "W. JAMES (influence mutuelle)"
          ],
          "contre": [
            "MÉCANISME",
            "POSITIVISME",
            "KANT"
          ]
        }
      },
      "en": {
        "oeuvre": "Creative Evolution",
        "entree": "Bergson attacks scientific mechanism and determinism in the name of lived duration. Scientific time is spatial — real time is duration, pure intuition of becoming. Evolution is creative, not mechanical.",
        "concepts": [
          {
            "nom": "DURATION",
            "cat": "transcendant",
            "type": "Phénoménologie",
            "puissance": 88,
            "desc": "A shift: real time is not space or measurement but lived duration, heterogeneous and continuous — irreducible to physics."
          },
          {
            "nom": "INTUITION",
            "cat": "immanent",
            "type": "Idéalisme",
            "puissance": 82,
            "desc": "The philosophical method: coincide with the real movement of things through intuition, rather than fragmenting them by analysis."
          },
          {
            "nom": "ÉLAN VITAL",
            "cat": "transcendant",
            "type": "Idéalisme",
            "puissance": 78,
            "desc": "A creative force traversing matter and producing evolution — against pure Darwinian mechanism, evolution has a direction."
          }
        ],
        "filiation": {
          "maitres": [
            "SPENCER (critique)",
            "DARWIN (critique)"
          ],
          "disciples": [
            "MERLEAU-PONTY",
            "DELEUZE",
            "W. JAMES (mutual influence)"
          ],
          "contre": [
            "MECHANISM",
            "POSITIVISM",
            "KANT"
          ]
        }
      }
    },
    {
      "id": "076",
      "nom": "DEWEY",
      "full": "John Dewey",
      "dates": "1859-1952",
      "types": [
        "Pragmatisme"
      ],
      "lieu": "États-Unis",
      "era": "CONTEMPORAINE",
      "imgUrl": "https://upload.wikimedia.org/wikipedia/commons/e/ef/John_Dewey_cph.3a51565.jpg",
      "stats": {
        "INFLUENCE": 82,
        "RIGUEUR": 65,
        "ANCRAGE": 62,
        "PORTÉE": 78,
        "CLÔTURE": 55,
        "CLARTÉ": 72
      },
      "fr": {
        "oeuvre": "Logique : la théorie de l'enquête",
        "entree": "Dewey réinterprète le pragmatisme comme instrumentalisme : les idées sont des outils pour résoudre des problèmes. L'enquête remplace la contemplation. La démocratie est une manière de vivre ensemble fondée sur l'expérimentation et la communication.",
        "concepts": [
          {
            "nom": "L'INSTRUMENTALISME",
            "cat": "immanent",
            "type": "Pragmatisme",
            "puissance": 85,
            "desc": "Les idées ne sont pas des représentations du réel mais des instruments d'action — elles sont vraies si elles résolvent des problèmes."
          },
          {
            "nom": "LA DÉMOCRATIE VÉCUE",
            "cat": "transcendant",
            "type": "Pragmatisme",
            "puissance": 80,
            "desc": "La démocratie n'est pas un régime politique mais un mode de vie communautaire basé sur la participation, l'expérimentation sociale."
          },
          {
            "nom": "L'ÉDUCATION ACTIVE",
            "cat": "immanent",
            "type": "Pragmatisme",
            "puissance": 78,
            "desc": "L'éducation est l'expérience vécue, non la transmission passive — apprendre en faisant, enquêter, résoudre."
          }
        ],
        "filiation": {
          "maitres": [
            "PEIRCE",
            "W. JAMES",
            "HEGEL"
          ],
          "disciples": [
            "RORTY",
            "PHILOSOPHIE DE L'ÉDUCATION"
          ],
          "contre": [
            "DUALISME SUJET/OBJET",
            "ÉDUCATION PASSIVE"
          ]
        }
      },
      "en": {
        "oeuvre": "Logic: The Theory of Inquiry",
        "entree": "Dewey reinterprets pragmatism as instrumentalism: ideas are tools for solving problems. Inquiry replaces contemplation. Democracy is a way of living together grounded in experimentation and communication.",
        "concepts": [
          {
            "nom": "INSTRUMENTALISM",
            "cat": "immanent",
            "type": "Pragmatisme",
            "puissance": 85,
            "desc": "Ideas are not representations of reality but instruments of action — they are true if they solve problems."
          },
          {
            "nom": "LIVED DEMOCRACY",
            "cat": "transcendant",
            "type": "Pragmatisme",
            "puissance": 80,
            "desc": "Democracy is not a political regime but a communal way of life based on participation and social experimentation."
          },
          {
            "nom": "ACTIVE EDUCATION",
            "cat": "immanent",
            "type": "Pragmatisme",
            "puissance": 78,
            "desc": "Education is lived experience, not passive transmission — learn by doing, inquiring, problem-solving."
          }
        ],
        "filiation": {
          "maitres": [
            "PEIRCE",
            "W. JAMES",
            "HEGEL"
          ],
          "disciples": [
            "RORTY",
            "PHILOSOPHY OF EDUCATION"
          ],
          "contre": [
            "SUBJECT/OBJECT DUALISM",
            "PASSIVE EDUCATION"
          ]
        }
      }
    },
    {
      "id": "077",
      "nom": "DUHEM",
      "full": "Pierre Duhem",
      "dates": "1861-1916",
      "types": [
        "Philo. Sciences",
        "Constructivisme"
      ],
      "lieu": "France",
      "era": "CONTEMPORAINE",
      "imgUrl": "https://upload.wikimedia.org/wikipedia/commons/5/5f/Pierre_Duhem.jpg",
      "stats": {
        "INFLUENCE": 68,
        "RIGUEUR": 85,
        "ANCRAGE": 70,
        "PORTÉE": 72,
        "CLÔTURE": 62,
        "CLARTÉ": 65
      },
      "fr": {
        "oeuvre": "La Théorie physique : son objet et sa structure",
        "entree": "Duhem établit la thèse de la sous-détermination (holisme de Duhem-Quine) : une théorie physique est un réseau de propositions, et une expérience réfute le réseau entier, jamais une hypothèse isolée.",
        "concepts": [
          {
            "nom": "LE HOLISME DE DUHEM",
            "cat": "transcendant",
            "type": "Philo. Sciences",
            "puissance": 88,
            "desc": "On ne peut jamais tester une hypothèse isolée — une expérience cruciale infirme le réseau complet de théories auxiliaires."
          },
          {
            "nom": "LA THÉORIE COMME INSTRUMENT",
            "cat": "immanent",
            "type": "Constructivisme",
            "puissance": 80,
            "desc": "La théorie physique ne décrit pas la réalité mais classe des phénomènes — l'instrumentalisme scientifique contre le réalisme."
          },
          {
            "nom": "LE BON SENS DU PHYSICIEN",
            "cat": "immanent",
            "type": "Philo. Sciences",
            "puissance": 72,
            "desc": "Face à l'indétermination, le bon sens du physicien — non la logique — décide quelle hypothèse réviser."
          }
        ],
        "filiation": {
          "maitres": [
            "MACH",
            "POINCARÉ"
          ],
          "disciples": [
            "QUINE (thèse Duhem-Quine)",
            "KUHN (influence)"
          ],
          "contre": [
            "RÉALISME SCIENTIFIQUE",
            "VÉRIFICATIONISME SIMPLE"
          ]
        }
      },
      "en": {
        "oeuvre": "The Aim and Structure of Physical Theory",
        "entree": "Duhem establishes the underdetermination thesis (Duhem-Quine holism): a physical theory is a network of propositions, and an experiment refutes the entire network, never an isolated hypothesis.",
        "concepts": [
          {
            "nom": "DUHEM'S HOLISM",
            "cat": "transcendant",
            "type": "Philo. Sciences",
            "puissance": 88,
            "desc": "An isolated hypothesis can never be tested — a crucial experiment disconfirms the entire network of auxiliary theories."
          },
          {
            "nom": "THEORY AS INSTRUMENT",
            "cat": "immanent",
            "type": "Constructivisme",
            "puissance": 80,
            "desc": "Physical theory does not describe reality but classifies phenomena — scientific instrumentalism against realism."
          },
          {
            "nom": "THE PHYSICIST'S COMMON SENSE",
            "cat": "immanent",
            "type": "Philo. Sciences",
            "puissance": 72,
            "desc": "Facing underdetermination, the physicist's common sense — not logic — decides which hypothesis to revise."
          }
        ],
        "filiation": {
          "maitres": [
            "MACH",
            "POINCARÉ"
          ],
          "disciples": [
            "QUINE (Duhem-Quine thesis)",
            "KUHN (influence)"
          ],
          "contre": [
            "SCIENTIFIC REALISM",
            "SIMPLE VERIFICATIONISM"
          ]
        }
      }
    },
    {
      "id": "078",
      "nom": "SANTAYAN",
      "full": "George Santayana",
      "dates": "1863-1952",
      "types": [
        "Esthétique",
        "Réalisme"
      ],
      "lieu": "États-Unis",
      "era": "CONTEMPORAINE",
      "imgUrl": "https://upload.wikimedia.org/wikipedia/commons/4/4c/Photogravure_portrait_of_George_Santayana_%281931%29.jpg",
      "stats": {
        "INFLUENCE": 62,
        "RIGUEUR": 65,
        "ANCRAGE": 60,
        "PORTÉE": 65,
        "CLÔTURE": 55,
        "CLARTÉ": 72
      },
      "fr": {
        "oeuvre": "Le Sens de la beauté",
        "entree": "Santayana défend un naturalisme esthétique : la beauté est un plaisir objectivé — nous projetons notre sentiment de plaisir sur l'objet lui-même. Réaliste critique, il maintient que la matière existe indépendamment de l'esprit.",
        "concepts": [
          {
            "nom": "LA BEAUTÉ OBJECTIVÉE",
            "cat": "immanent",
            "type": "Esthétique",
            "puissance": 80,
            "desc": "La beauté est le plaisir regardé comme une qualité de l'objet — objectivation du sentiment subjectif sur le monde."
          },
          {
            "nom": "LE RÉALISME CRITIQUE",
            "cat": "immanent",
            "type": "Réalisme",
            "puissance": 72,
            "desc": "La matière est réelle et indépendante de l'esprit — mais nous ne la connaissons que par des essences, non par contact direct."
          },
          {
            "nom": "CEUX QUI OUBLIENT",
            "cat": "transcendant",
            "type": "Humanisme",
            "puissance": 78,
            "desc": "Ceux qui ne se souviennent pas du passé sont condamnés à le répéter — la mémoire historique comme condition de la liberté."
          }
        ],
        "filiation": {
          "maitres": [
            "PLATON",
            "SPINOZA",
            "W. JAMES (critique)"
          ],
          "disciples": [
            "RÉALISME CRITIQUE AMÉRICAIN"
          ],
          "contre": [
            "IDÉALISME ABSOLU",
            "PRAGMATISME DE JAMES"
          ]
        }
      },
      "en": {
        "oeuvre": "The Sense of Beauty",
        "entree": "Santayana defends aesthetic naturalism: beauty is objectified pleasure — we project our feeling of pleasure onto the object itself. A critical realist, he maintains that matter exists independently of mind.",
        "concepts": [
          {
            "nom": "OBJECTIFIED BEAUTY",
            "cat": "immanent",
            "type": "Esthétique",
            "puissance": 80,
            "desc": "Beauty is pleasure regarded as a quality of the object — objectification of the subjective feeling onto the world."
          },
          {
            "nom": "CRITICAL REALISM",
            "cat": "immanent",
            "type": "Réalisme",
            "puissance": 72,
            "desc": "Matter is real and independent of mind — but we know it only through essences, not by direct contact."
          },
          {
            "nom": "THOSE WHO FORGET",
            "cat": "transcendant",
            "type": "Humanisme",
            "puissance": 78,
            "desc": "Those who cannot remember the past are condemned to repeat it — historical memory as a condition of freedom."
          }
        ],
        "filiation": {
          "maitres": [
            "PLATON",
            "SPINOZA",
            "W. JAMES (critique)"
          ],
          "disciples": [
            "AMERICAN CRITICAL REALISM"
          ],
          "contre": [
            "ABSOLUTE IDEALISM",
            "JAMES'S PRAGMATISM"
          ]
        }
      }
    },
    {
      "id": "079",
      "nom": "MCTAGGRT",
      "full": "J.E. McTaggart",
      "dates": "1866-1925",
      "types": [
        "Idéalisme",
        "Philo. Religion"
      ],
      "lieu": "Angleterre",
      "era": "CONTEMPORAINE",
      "imgUrl": "https://upload.wikimedia.org/wikipedia/en/c/c3/John_Mctaggart_Ellis_McTaggart.jpg",
      "stats": {
        "INFLUENCE": 52,
        "RIGUEUR": 80,
        "ANCRAGE": 60,
        "PORTÉE": 68,
        "CLÔTURE": 52,
        "CLARTÉ": 45
      },
      "fr": {
        "oeuvre": "La Nature de l'existence",
        "entree": "McTaggart nie l'existence de la matière et du temps — seules des âmes immortelles en relations d'amour constituent la réalité ultime. Son argument contre le temps distingue la série A (passé/présent/futur) et la série B (avant/après).",
        "concepts": [
          {
            "nom": "L'IRRÉALITÉ DU TEMPS",
            "cat": "transcendant",
            "type": "Idéalisme",
            "puissance": 85,
            "desc": "La série A (tenses) est indispensable au temps mais contradiction interne — donc le temps est irréel. Argument influent en métaphysique du temps."
          },
          {
            "nom": "SÉRIES A ET B",
            "cat": "immanent",
            "type": "Idéalisme",
            "puissance": 80,
            "desc": "Distinction entre positions temporelles absolues (passé/présent/futur) et relations de succession — fondamentale pour la philosophie du temps."
          },
          {
            "nom": "LES ÂMES IMMORTELLES",
            "cat": "immanent",
            "type": "Philo. Religion",
            "puissance": 68,
            "desc": "La réalité ultime consiste en âmes éternelles liées par des relations d'amour — idéalisme personnel contre l'Absolu impersonnel de Bradley."
          }
        ],
        "filiation": {
          "maitres": [
            "HEGEL",
            "BRADLEY"
          ],
          "disciples": [
            "PHILOSOPHIE DU TEMPS CONTEMPORAINE"
          ],
          "contre": [
            "MATÉRIALISME",
            "RÉALISME"
          ]
        }
      },
      "en": {
        "oeuvre": "The Nature of Existence",
        "entree": "McTaggart denies the existence of matter and time — only immortal souls in relations of love constitute ultimate reality. His argument against time distinguishes the A-series (past/present/future) from the B-series (before/after).",
        "concepts": [
          {
            "nom": "THE UNREALITY OF TIME",
            "cat": "transcendant",
            "type": "Idéalisme",
            "puissance": 85,
            "desc": "The A-series (tenses) is indispensable for time but involves internal contradiction — therefore time is unreal."
          },
          {
            "nom": "A-SERIES AND B-SERIES",
            "cat": "immanent",
            "type": "Idéalisme",
            "puissance": 80,
            "desc": "Distinction between absolute temporal positions (past/present/future) and succession relations — fundamental for philosophy of time."
          },
          {
            "nom": "IMMORTAL SOULS",
            "cat": "immanent",
            "type": "Philo. Religion",
            "puissance": 68,
            "desc": "Ultimate reality consists of eternal souls bound by relations of love — personal idealism against Bradley's impersonal Absolute."
          }
        ],
        "filiation": {
          "maitres": [
            "HEGEL",
            "BRADLEY"
          ],
          "disciples": [
            "CONTEMPORARY PHILOSOPHY OF TIME"
          ],
          "contre": [
            "MATERIALISM",
            "REALISM"
          ]
        }
      }
    },
    {
      "id": "080",
      "nom": "CROCE",
      "full": "Benedetto Croce",
      "dates": "1866-1952",
      "types": [
        "Esthétique",
        "Idéalisme"
      ],
      "lieu": "Italie",
      "era": "CONTEMPORAINE",
      "imgUrl": "https://upload.wikimedia.org/wikipedia/commons/4/4c/Benedetto_Croce_01.jpg",
      "stats": {
        "INFLUENCE": 68,
        "RIGUEUR": 68,
        "ANCRAGE": 62,
        "PORTÉE": 70,
        "CLÔTURE": 58,
        "CLARTÉ": 62
      },
      "fr": {
        "oeuvre": "Esthétique comme science de l'expression",
        "entree": "Croce fait de l'esthétique le fondement de toute connaissance : l'intuition artistique est la forme primaire de la connaissance humaine. L'art n'est pas représentation mais expression lyrique — toute connaissance commence par l'intuition.",
        "concepts": [
          {
            "nom": "L'ART COMME INTUITION",
            "cat": "transcendant",
            "type": "Esthétique",
            "puissance": 82,
            "desc": "L'art n'est pas imitation ni représentation mais intuition pure — expression lyrique irréductible aux catégories conceptuelles."
          },
          {
            "nom": "INTUITION=EXPRESSION",
            "cat": "immanent",
            "type": "Esthétique",
            "puissance": 78,
            "desc": "Intuitionner = exprimer — pas d'intuition sans expression, pas d'expression sans intuition préalable."
          },
          {
            "nom": "L'HISTOIRE VIVANTE",
            "cat": "immanent",
            "type": "Idéalisme",
            "puissance": 72,
            "desc": "L'histoire est toujours histoire contemporaine — nous connaissons le passé à partir de nos problèmes présents."
          }
        ],
        "filiation": {
          "maitres": [
            "HEGEL",
            "VICO"
          ],
          "disciples": [
            "COLLINGWOOD"
          ],
          "contre": [
            "POSITIVISME",
            "NATURALISME EN ESTHÉTIQUE"
          ]
        }
      },
      "en": {
        "oeuvre": "Aesthetic as Science of Expression",
        "entree": "Croce makes aesthetics the foundation of all knowledge: artistic intuition is the primary form of human knowledge. Art is not representation but lyrical expression — all knowledge begins with intuition.",
        "concepts": [
          {
            "nom": "ART AS INTUITION",
            "cat": "transcendant",
            "type": "Esthétique",
            "puissance": 82,
            "desc": "Art is not imitation or representation but pure intuition — lyrical expression irreducible to conceptual categories."
          },
          {
            "nom": "INTUITION=EXPRESSION",
            "cat": "immanent",
            "type": "Esthétique",
            "puissance": 78,
            "desc": "To intuit = to express — no intuition without expression, no expression without prior intuition."
          },
          {
            "nom": "LIVING HISTORY",
            "cat": "immanent",
            "type": "Idéalisme",
            "puissance": 72,
            "desc": "History is always contemporary history — we know the past from our present problems."
          }
        ],
        "filiation": {
          "maitres": [
            "HEGEL",
            "VICO"
          ],
          "disciples": [
            "COLLINGWOOD"
          ],
          "contre": [
            "POSITIVISM",
            "NATURALISM IN AESTHETICS"
          ]
        }
      }
    },
    {
      "id": "081",
      "nom": "CLIVEBELL",
      "full": "Clive Bell",
      "dates": "1881-1964",
      "types": [
        "Esthétique"
      ],
      "lieu": "Angleterre",
      "era": "CONTEMPORAINE",
      "imgUrl": "https://upload.wikimedia.org/wikipedia/commons/4/4b/Clive_Bell.jpg",
      "stats": {
        "INFLUENCE": 55,
        "RIGUEUR": 55,
        "ANCRAGE": 50,
        "PORTÉE": 62,
        "CLÔTURE": 48,
        "CLARTÉ": 72
      },
      "fr": {
        "oeuvre": "Art",
        "entree": "Bell propose la théorie de la forme significante : ce qui distingue l'art des autres objets, c'est la présence d'une forme significante capable de provoquer une émotion esthétique spécifique, distincte de toute émotion ordinaire.",
        "concepts": [
          {
            "nom": "LA FORME SIGNIFICANTE",
            "cat": "transcendant",
            "type": "Esthétique",
            "puissance": 78,
            "desc": "L'art est défini par la présence d'une forme significante — propriété formelle déclenchant une émotion esthétique spécifique."
          },
          {
            "nom": "L'ÉMOTION ESTHÉTIQUE",
            "cat": "immanent",
            "type": "Esthétique",
            "puissance": 72,
            "desc": "Émotion distincte de toute autre émotion ordinaire — produite uniquement par la forme significante, indépendamment du contenu."
          },
          {
            "nom": "L'AUTONOMIE DE L'ART",
            "cat": "immanent",
            "type": "Esthétique",
            "puissance": 68,
            "desc": "L'art doit être évalué par ses propres critères formels, non par ses effets sociaux, moraux ou représentatifs."
          }
        ],
        "filiation": {
          "maitres": [
            "FRY",
            "BLOOMSBURY GROUP"
          ],
          "disciples": [
            "FORMALISME ESTHÉTIQUE ANGLAIS"
          ],
          "contre": [
            "ART REPRÉSENTATIF",
            "CONTENU NARRATIF EN ART"
          ]
        }
      },
      "en": {
        "oeuvre": "Art",
        "entree": "Bell proposes the theory of significant form: what distinguishes art from other objects is the presence of a significant form capable of provoking a specific aesthetic emotion, distinct from all ordinary emotion.",
        "concepts": [
          {
            "nom": "SIGNIFICANT FORM",
            "cat": "transcendant",
            "type": "Esthétique",
            "puissance": 78,
            "desc": "Art is defined by the presence of significant form — a formal property triggering a specific aesthetic emotion."
          },
          {
            "nom": "AESTHETIC EMOTION",
            "cat": "immanent",
            "type": "Esthétique",
            "puissance": 72,
            "desc": "An emotion distinct from all ordinary emotions — produced only by significant form, independent of content."
          },
          {
            "nom": "AUTONOMY OF ART",
            "cat": "immanent",
            "type": "Esthétique",
            "puissance": 68,
            "desc": "Art must be evaluated by its own formal criteria, not by social, moral, or representational effects."
          }
        ],
        "filiation": {
          "maitres": [
            "FRY",
            "BLOOMSBURY GROUP"
          ],
          "disciples": [
            "ENGLISH AESTHETIC FORMALISM"
          ],
          "contre": [
            "REPRESENTATIONAL ART",
            "NARRATIVE CONTENT IN ART"
          ]
        }
      }
    },
    {
      "id": "082",
      "nom": "KELSEN",
      "full": "Hans Kelsen",
      "dates": "1881-1973",
      "types": [
        "Philo. Droit"
      ],
      "lieu": "Autriche",
      "era": "CONTEMPORAINE",
      "imgUrl": "https://upload.wikimedia.org/wikipedia/commons/c/c0/Hans_Kelsen_%281881%E2%80%931973%29_~1930_%C2%A9_Georg_Fayer_%281892%E2%80%931950%29_OeNB_8026867.jpg",
      "stats": {
        "INFLUENCE": 78,
        "RIGUEUR": 88,
        "ANCRAGE": 72,
        "PORTÉE": 78,
        "CLÔTURE": 62,
        "CLARTÉ": 65
      },
      "fr": {
        "oeuvre": "Théorie pure du droit",
        "entree": "Kelsen radicalise le positivisme juridique : la science du droit doit être pure — débarrassée de toute considération sociologique, morale ou politique. Le droit forme une pyramide de normes dont la norme fondamentale (Grundnorm) est le fondement ultime.",
        "concepts": [
          {
            "nom": "LA THÉORIE PURE",
            "cat": "transcendant",
            "type": "Philo. Droit",
            "puissance": 85,
            "desc": "Le droit est une science normative autonome — purger toute contamination sociologique, morale ou politique de la jurisprudence."
          },
          {
            "nom": "LA PYRAMIDE DES NORMES",
            "cat": "immanent",
            "type": "Philo. Droit",
            "puissance": 82,
            "desc": "Chaque norme tire sa validité d'une norme supérieure — le système juridique forme une hiérarchie pyramidale cohérente."
          },
          {
            "nom": "LA GRUNDNORM",
            "cat": "immanent",
            "type": "Philo. Droit",
            "puissance": 78,
            "desc": "Norme fondamentale hypothétique qui fonde la validité de tout le système — non une norme réelle mais une présupposition transcendantale."
          }
        ],
        "filiation": {
          "maitres": [
            "J. AUSTIN",
            "KANT (méthode)"
          ],
          "disciples": [
            "HART (critique)",
            "DROIT CONSTITUTIONNEL MODERNE"
          ],
          "contre": [
            "DROIT NATUREL",
            "SOCIOLOGIE DU DROIT"
          ]
        }
      },
      "en": {
        "oeuvre": "Pure Theory of Law",
        "entree": "Kelsen radicalizes legal positivism: the science of law must be pure — freed from all sociological, moral, or political considerations. Law forms a pyramid of norms whose basic norm (Grundnorm) is the ultimate foundation.",
        "concepts": [
          {
            "nom": "THE PURE THEORY",
            "cat": "transcendant",
            "type": "Philo. Droit",
            "puissance": 85,
            "desc": "Law is an autonomous normative science — purge all sociological, moral, or political contamination from jurisprudence."
          },
          {
            "nom": "THE PYRAMID OF NORMS",
            "cat": "immanent",
            "type": "Philo. Droit",
            "puissance": 82,
            "desc": "Each norm derives its validity from a higher norm — the legal system forms a coherent pyramidal hierarchy."
          },
          {
            "nom": "THE GRUNDNORM",
            "cat": "immanent",
            "type": "Philo. Droit",
            "puissance": 78,
            "desc": "The hypothetical basic norm grounding the validity of the entire system — not a real norm but a transcendental presupposition."
          }
        ],
        "filiation": {
          "maitres": [
            "J. AUSTIN",
            "KANT (method)"
          ],
          "disciples": [
            "HART (critique)",
            "MODERN CONSTITUTIONAL LAW"
          ],
          "contre": [
            "NATURAL LAW",
            "SOCIOLOGY OF LAW"
          ]
        }
      }
    },
    {
      "id": "083",
      "nom": "GE.MOORE",
      "full": "G.E. Moore",
      "dates": "1873-1958",
      "types": [
        "Réalisme",
        "Éthique des Vertus"
      ],
      "lieu": "Angleterre",
      "era": "CONTEMPORAINE",
      "imgUrl": "https://upload.wikimedia.org/wikipedia/commons/b/b9/1914_George_Edward_Moore_%28cropped%29.jpg",
      "stats": {
        "INFLUENCE": 75,
        "RIGUEUR": 82,
        "ANCRAGE": 68,
        "PORTÉE": 78,
        "CLÔTURE": 60,
        "CLARTÉ": 72
      },
      "fr": {
        "oeuvre": "Principia Ethica",
        "entree": "Moore attaque l'idéalisme britannique et pose le réalisme du sens commun. En éthique, il réfute le naturalisme moral via la « question ouverte » : définir le bon par des propriétés naturelles commet le sophisme naturaliste.",
        "concepts": [
          {
            "nom": "LE SOPHISME NATURALISTE",
            "cat": "transcendant",
            "type": "Éthique des Vertus",
            "puissance": 85,
            "desc": "Définir 'bien' par une propriété naturelle (plaisir, désir, etc.) commet une erreur — 'bien' est une propriété simple, indéfinissable."
          },
          {
            "nom": "LE RÉALISME DU SENS COMMUN",
            "cat": "transcendant",
            "type": "Réalisme",
            "puissance": 80,
            "desc": "Bascule contre l'idéalisme : le monde ordinaire existe réellement. Réfutation pratique du scepticisme."
          },
          {
            "nom": "L'INTUITIONNISME MORAL",
            "cat": "immanent",
            "type": "Éthique des Vertus",
            "puissance": 75,
            "desc": "Le bien est une propriété simple, non naturelle, perçue par intuition directe — l'éthique est irréductible à la science naturelle."
          }
        ],
        "filiation": {
          "maitres": [
            "SIDGWICK",
            "RUSSELL (ami)"
          ],
          "disciples": [
            "AYER",
            "INTUITIONNISME MORAL"
          ],
          "contre": [
            "BRADLEY",
            "IDÉALISME BRITANNIQUE",
            "NATURALISME MORAL"
          ]
        }
      },
      "en": {
        "oeuvre": "Principia Ethica",
        "entree": "Moore attacks British Idealism and posits common-sense realism. In ethics, he refutes moral naturalism via the 'open question argument': defining the good through natural properties commits the naturalistic fallacy.",
        "concepts": [
          {
            "nom": "NATURALISTIC FALLACY",
            "cat": "transcendant",
            "type": "Éthique des Vertus",
            "puissance": 85,
            "desc": "Defining 'good' by a natural property (pleasure, desire, etc.) commits an error — 'good' is a simple, undefinable property."
          },
          {
            "nom": "COMMON SENSE REALISM",
            "cat": "transcendant",
            "type": "Réalisme",
            "puissance": 80,
            "desc": "A shift against idealism: the ordinary world really exists. A practical refutation of skepticism."
          },
          {
            "nom": "MORAL INTUITIONISM",
            "cat": "immanent",
            "type": "Éthique des Vertus",
            "puissance": 75,
            "desc": "The good is a simple, non-natural property perceived by direct intuition — ethics is irreducible to natural science."
          }
        ],
        "filiation": {
          "maitres": [
            "SIDGWICK",
            "RUSSELL (friend)"
          ],
          "disciples": [
            "AYER",
            "MORAL INTUITIONISM"
          ],
          "contre": [
            "BRADLEY",
            "BRITISH IDEALISM",
            "MORAL NATURALISM"
          ]
        }
      }
    },
    {
      "id": "084",
      "nom": "RUSSELL",
      "full": "Bertrand Russell",
      "dates": "1872-1970",
      "types": [
        "Logique",
        "Empirisme"
      ],
      "lieu": "Angleterre",
      "era": "CONTEMPORAINE",
      "imgUrl": "https://upload.wikimedia.org/wikipedia/commons/5/5a/Bertrand_Russell_1957.jpg",
      "stats": {
        "INFLUENCE": 92,
        "RIGUEUR": 95,
        "ANCRAGE": 70,
        "PORTÉE": 90,
        "CLÔTURE": 62,
        "CLARTÉ": 78
      },
      "fr": {
        "oeuvre": "Principia Mathematica (avec Whitehead)",
        "entree": "Russell co-fonde la logique mathématique moderne, découvre le paradoxe de Russell et développe la théorie des types. Son atomisme logique et son empirisme logique transforment la philosophie en une discipline rigoureuse.",
        "concepts": [
          {
            "nom": "LE PARADOXE DE RUSSELL",
            "cat": "transcendant",
            "type": "Logique",
            "puissance": 92,
            "desc": "L'ensemble de tous les ensembles qui ne s'appartiennent pas à eux-mêmes — détruit le programme logiciste de Frege."
          },
          {
            "nom": "L'ATOMISME LOGIQUE",
            "cat": "immanent",
            "type": "Logique",
            "puissance": 85,
            "desc": "Le monde consiste en faits atomiques correspondant aux propositions atomiques — la philosophie = analyse logique du langage."
          },
          {
            "nom": "LA THÉORIE DES DESCRIPTIONS",
            "cat": "immanent",
            "type": "Philo. Langage",
            "puissance": 88,
            "desc": "Les descriptions définies n'ont pas de dénotation directe — analyser 'le roi de France est chauve' révèle sa forme logique réelle."
          }
        ],
        "filiation": {
          "maitres": [
            "FREGE",
            "MOORE",
            "LEIBNIZ"
          ],
          "disciples": [
            "WITTGSTN",
            "CARNAP",
            "PHILOSOPHIE ANALYTIQUE"
          ],
          "contre": [
            "BRADLEY",
            "IDÉALISME BRITANNIQUE"
          ]
        }
      },
      "en": {
        "oeuvre": "Principia Mathematica (with Whitehead)",
        "entree": "Russell co-founds modern mathematical logic, discovers Russell's paradox, and develops type theory. His logical atomism and logical empiricism transform philosophy into a rigorous discipline.",
        "concepts": [
          {
            "nom": "RUSSELL'S PARADOX",
            "cat": "transcendant",
            "type": "Logique",
            "puissance": 92,
            "desc": "The set of all sets that do not belong to themselves — destroys Frege's logicist program."
          },
          {
            "nom": "LOGICAL ATOMISM",
            "cat": "immanent",
            "type": "Logique",
            "puissance": 85,
            "desc": "The world consists of atomic facts corresponding to atomic propositions — philosophy = logical analysis of language."
          },
          {
            "nom": "THEORY OF DESCRIPTIONS",
            "cat": "immanent",
            "type": "Philo. Langage",
            "puissance": 88,
            "desc": "Definite descriptions have no direct denotation — analyzing 'the King of France is bald' reveals its actual logical form."
          }
        ],
        "filiation": {
          "maitres": [
            "FREGE",
            "MOORE",
            "LEIBNIZ"
          ],
          "disciples": [
            "WITTGSTN",
            "CARNAP",
            "ANALYTIC PHILOSOPHY"
          ],
          "contre": [
            "BRADLEY",
            "BRITISH IDEALISM"
          ]
        }
      }
    },
    {
      "id": "085",
      "nom": "EDDINGT",
      "full": "Arthur Eddington",
      "dates": "1882-1944",
      "types": [
        "Philo. Sciences",
        "Idéalisme"
      ],
      "lieu": "Angleterre",
      "era": "CONTEMPORAINE",
      "imgUrl": "https://upload.wikimedia.org/wikipedia/commons/2/24/Arthur_Stanley_Eddington.jpg",
      "stats": {
        "INFLUENCE": 58,
        "RIGUEUR": 72,
        "ANCRAGE": 55,
        "PORTÉE": 65,
        "CLÔTURE": 50,
        "CLARTÉ": 68
      },
      "fr": {
        "oeuvre": "La Nature du monde physique",
        "entree": "Astrophysicien qui confirme la relativité générale d'Einstein, Eddington défend un idéalisme sélectif : la physique ne révèle pas les objets tels qu'ils sont en soi, mais seulement leurs relations structurelles — et les structures sont mentales.",
        "concepts": [
          {
            "nom": "LE SÉLECTIVISME ÉPISTÉMIQUE",
            "cat": "immanent",
            "type": "Philo. Sciences",
            "puissance": 78,
            "desc": "La physique ne peut mesurer que ce que les instruments conçus pour mesurer permettent — la connaissance physique est partielle et structurelle."
          },
          {
            "nom": "L'IDÉALISME STRUCTURAL",
            "cat": "transcendant",
            "type": "Idéalisme",
            "puissance": 72,
            "desc": "Le monde physique est une structure mathématique dont les éléments ultimes sont de nature mentale ou proto-mentale."
          },
          {
            "nom": "LA TABLE DU PHYSICIEN",
            "cat": "immanent",
            "type": "Philo. Sciences",
            "puissance": 68,
            "desc": "La table solide du sens commun vs la table vide du physicien — dualité irréductible entre monde vécu et description scientifique."
          }
        ],
        "filiation": {
          "maitres": [
            "EINSTEIN",
            "KANT"
          ],
          "disciples": [
            "RÉALISME STRUCTURAL"
          ],
          "contre": [
            "MATÉRIALISME NAÏF",
            "RÉALISME DIRECT"
          ]
        }
      },
      "en": {
        "oeuvre": "The Nature of the Physical World",
        "entree": "Astrophysicist who confirmed Einstein's general relativity, Eddington defends selective idealism: physics does not reveal objects as they are in themselves, but only their structural relations — and structures are mental.",
        "concepts": [
          {
            "nom": "EPISTEMIC SELECTIVISM",
            "cat": "immanent",
            "type": "Philo. Sciences",
            "puissance": 78,
            "desc": "Physics can only measure what instruments designed to measure allow — physical knowledge is partial and structural."
          },
          {
            "nom": "STRUCTURAL IDEALISM",
            "cat": "transcendant",
            "type": "Idéalisme",
            "puissance": 72,
            "desc": "The physical world is a mathematical structure whose ultimate elements are mental or proto-mental in nature."
          },
          {
            "nom": "THE PHYSICIST'S TABLE",
            "cat": "immanent",
            "type": "Philo. Sciences",
            "puissance": 68,
            "desc": "The solid table of common sense vs the physicist's empty table — irreducible duality between lived world and scientific description."
          }
        ],
        "filiation": {
          "maitres": [
            "EINSTEIN",
            "KANT"
          ],
          "disciples": [
            "STRUCTURAL REALISM"
          ],
          "contre": [
            "NAIVE MATERIALISM",
            "DIRECT REALISM"
          ]
        }
      }
    },
    {
      "id": "086",
      "nom": "RAMSEY",
      "full": "Frank Ramsey",
      "dates": "1903-1930",
      "types": [
        "Logique",
        "Pragmatisme"
      ],
      "lieu": "Angleterre",
      "era": "CONTEMPORAINE",
      "imgUrl": "https://upload.wikimedia.org/wikipedia/en/f/f3/Frank_Plumpton_Ramsey.JPG",
      "stats": {
        "INFLUENCE": 70,
        "RIGUEUR": 95,
        "ANCRAGE": 68,
        "PORTÉE": 72,
        "CLÔTURE": 58,
        "CLARTÉ": 60
      },
      "fr": {
        "oeuvre": "Les Fondements des mathématiques / Vérité et probabilité",
        "entree": "Génie mort à 26 ans, Ramsey résout des problèmes fondamentaux en logique, économie et probabilités. Il fonde l'interprétation subjective des probabilités comme croyances rationnelles, et anticipe des théories de la vérité et de la décision.",
        "concepts": [
          {
            "nom": "LES PROBABILITÉS SUBJECTIVES",
            "cat": "transcendant",
            "type": "Pragmatisme",
            "puissance": 85,
            "desc": "Les probabilités mesurent des degrés de croyance cohérents — non des fréquences objectives mais des états subjectifs rationnels."
          },
          {
            "nom": "LES PHRASES RAMSEY",
            "cat": "immanent",
            "type": "Logique",
            "puissance": 82,
            "desc": "Éliminer les termes théoriques d'une théorie en les remplaçant par des quantificateurs existentiels — préfigure le structuralisme."
          },
          {
            "nom": "LA VÉRITÉ RAMSEYISTE",
            "cat": "immanent",
            "type": "Logique",
            "puissance": 78,
            "desc": "Dire 'il est vrai que p' n'ajoute rien à dire 'p' — la vérité est un prédicat redondant (théorie déflationniste)."
          }
        ],
        "filiation": {
          "maitres": [
            "RUSSELL",
            "WITTGSTN",
            "KEYNES"
          ],
          "disciples": [
            "THÉORIE DE LA DÉCISION",
            "DÉFLATIONNISME DE LA VÉRITÉ"
          ],
          "contre": [
            "FORMALISME PUR DE HILBERT"
          ]
        }
      },
      "en": {
        "oeuvre": "Foundations of Mathematics / Truth and Probability",
        "entree": "A genius who died at 26, Ramsey solved fundamental problems in logic, economics, and probability. He founds the subjective interpretation of probabilities as rational beliefs, anticipating decision theory and deflationary theories of truth.",
        "concepts": [
          {
            "nom": "SUBJECTIVE PROBABILITY",
            "cat": "transcendant",
            "type": "Pragmatisme",
            "puissance": 85,
            "desc": "Probabilities measure coherent degrees of belief — not objective frequencies but rational subjective states."
          },
          {
            "nom": "RAMSEY SENTENCES",
            "cat": "immanent",
            "type": "Logique",
            "puissance": 82,
            "desc": "Eliminate theoretical terms from a theory by replacing them with existential quantifiers — prefigures structural realism."
          },
          {
            "nom": "RAMSEYIAN TRUTH",
            "cat": "immanent",
            "type": "Logique",
            "puissance": 78,
            "desc": "Saying 'it is true that p' adds nothing to saying 'p' — truth is a redundant predicate (deflationary theory)."
          }
        ],
        "filiation": {
          "maitres": [
            "RUSSELL",
            "WITTGSTN",
            "KEYNES"
          ],
          "disciples": [
            "DECISION THEORY",
            "DEFLATIONISM ABOUT TRUTH"
          ],
          "contre": [
            "HILBERT'S PURE FORMALISM"
          ]
        }
      }
    },
    {
      "id": "087",
      "nom": "CARNAP",
      "full": "Rudolf Carnap",
      "dates": "1891-1970",
      "types": [
        "Positivisme",
        "Logique"
      ],
      "lieu": "Allemagne / États-Unis",
      "era": "CONTEMPORAINE",
      "imgUrl": "https://upload.wikimedia.org/wikipedia/en/9/98/Rudolf_Carnap_1930.jpeg",
      "stats": {
        "INFLUENCE": 78,
        "RIGUEUR": 92,
        "ANCRAGE": 65,
        "PORTÉE": 80,
        "CLÔTURE": 55,
        "CLARTÉ": 58
      },
      "fr": {
        "oeuvre": "La Construction logique du monde",
        "entree": "Chef de file du Cercle de Vienne, Carnap radicalise le positivisme logique. Les énoncés métaphysiques sont dénués de sens — seuls les énoncés empiriquement vérifiables ou analytiques ont un sens. Plus tard, il développe la sémantique des langages formels.",
        "concepts": [
          {
            "nom": "L'EMPIRISME LOGIQUE",
            "cat": "transcendant",
            "type": "Positivisme",
            "puissance": 88,
            "desc": "Seuls deux types d'énoncés ont du sens : les analytiques (tautologies) et les synthétiques vérifiables empiriquement — la métaphysique est un non-sens."
          },
          {
            "nom": "LA TOLÉRANCE SYNTAXIQUE",
            "cat": "immanent",
            "type": "Logique",
            "puissance": 82,
            "desc": "En logique, chacun est libre de construire son propre système formel — il n'y a pas de morale logique, seulement des choix de cadres."
          },
          {
            "nom": "LES CADRES LINGUISTIQUES",
            "cat": "immanent",
            "type": "Positivisme",
            "puissance": 78,
            "desc": "Les questions d'existence se posent à l'intérieur d'un cadre linguistique ou à l'extérieur (pragmatique) — pas une vérité absolue."
          }
        ],
        "filiation": {
          "maitres": [
            "FREGE",
            "RUSSELL",
            "MACH",
            "WITTGSTN"
          ],
          "disciples": [
            "QUINE (réaction)",
            "CERCLE DE VIENNE"
          ],
          "contre": [
            "MÉTAPHYSIQUE TRADITIONNELLE",
            "HEIDEGGER"
          ]
        }
      },
      "en": {
        "oeuvre": "The Logical Construction of the World",
        "entree": "Leader of the Vienna Circle, Carnap radicalizes logical positivism. Metaphysical statements are meaningless — only empirically verifiable or analytic statements have meaning. Later he develops the semantics of formal languages.",
        "concepts": [
          {
            "nom": "LOGICAL EMPIRICISM",
            "cat": "transcendant",
            "type": "Positivisme",
            "puissance": 88,
            "desc": "Only two types of statements have meaning: analytic (tautologies) and synthetically verifiable ones — metaphysics is meaningless."
          },
          {
            "nom": "SYNTACTIC TOLERANCE",
            "cat": "immanent",
            "type": "Logique",
            "puissance": 82,
            "desc": "In logic, each person is free to build their own formal system — there is no logical morality, only choices of frameworks."
          },
          {
            "nom": "LINGUISTIC FRAMEWORKS",
            "cat": "immanent",
            "type": "Positivisme",
            "puissance": 78,
            "desc": "Existence questions arise within a linguistic framework (internal) or about it (external/pragmatic) — no absolute truth."
          }
        ],
        "filiation": {
          "maitres": [
            "FREGE",
            "RUSSELL",
            "MACH",
            "WITTGSTN"
          ],
          "disciples": [
            "QUINE (reaction)",
            "VIENNA CIRCLE"
          ],
          "contre": [
            "TRADITIONAL METAPHYSICS",
            "HEIDEGGER"
          ]
        }
      }
    },
    {
      "id": "088",
      "nom": "STEBBING",
      "full": "Susan Stebbing",
      "dates": "1885-1943",
      "types": [
        "Logique",
        "Philo. Sciences"
      ],
      "lieu": "Angleterre",
      "era": "CONTEMPORAINE",
      "imgUrl": "https://upload.wikimedia.org/wikipedia/en/d/df/Philosopher_Lizzie_Susan_Stebbing_%281885_%E2%80%93_1943%29.jpg",
      "stats": {
        "INFLUENCE": 48,
        "RIGUEUR": 80,
        "ANCRAGE": 65,
        "PORTÉE": 58,
        "CLÔTURE": 55,
        "CLARTÉ": 78
      },
      "fr": {
        "oeuvre": "La Pensée moderne et ses fondements",
        "entree": "Première femme professeur de philosophie au Royaume-Uni, Stebbing popularise la philosophie analytique et critique les abus de langage dans la philosophie de la physique nouvelle. Elle défend un réalisme fondé sur la logique.",
        "concepts": [
          {
            "nom": "L'ANALYSE DIRIGÉE",
            "cat": "immanent",
            "type": "Logique",
            "puissance": 78,
            "desc": "L'analyse logique révèle la structure réelle des faits — distingue analyse directionnelle (du complexe au simple) et analyse régressive."
          },
          {
            "nom": "LA PENSÉE CLAIRE",
            "cat": "immanent",
            "type": "Logique",
            "puissance": 75,
            "desc": "La philosophie a pour tâche de débarrasser la pensée des métaphores trompeuses — application de la logique au discours ordinaire."
          },
          {
            "nom": "LE RÉALISME PHYSIQUE",
            "cat": "immanent",
            "type": "Philo. Sciences",
            "puissance": 68,
            "desc": "Critique des interprétations idéalistes de la physique quantique — la physique ne parle pas de tables qui disparaissent."
          }
        ],
        "filiation": {
          "maitres": [
            "RUSSELL",
            "MOORE",
            "WHITEHEAD"
          ],
          "disciples": [
            "LOGIQUE ANGLAISE"
          ],
          "contre": [
            "EDDINGTON",
            "JEANS (idéalisme physique)"
          ]
        }
      },
      "en": {
        "oeuvre": "Modern Introduction to Logic",
        "entree": "The first female philosophy professor in the UK, Stebbing popularizes analytic philosophy and critiques language misuse in the philosophy of new physics. She defends a realism grounded in logic.",
        "concepts": [
          {
            "nom": "DIRECTED ANALYSIS",
            "cat": "immanent",
            "type": "Logique",
            "puissance": 78,
            "desc": "Logical analysis reveals the real structure of facts — distinguishes directional analysis (complex to simple) from regressive analysis."
          },
          {
            "nom": "CLEAR THINKING",
            "cat": "immanent",
            "type": "Logique",
            "puissance": 75,
            "desc": "Philosophy's task is to rid thought of misleading metaphors — application of logic to ordinary discourse."
          },
          {
            "nom": "PHYSICAL REALISM",
            "cat": "immanent",
            "type": "Philo. Sciences",
            "puissance": 68,
            "desc": "Critique of idealist interpretations of quantum physics — physics does not speak of tables that disappear."
          }
        ],
        "filiation": {
          "maitres": [
            "RUSSELL",
            "MOORE",
            "WHITEHEAD"
          ],
          "disciples": [
            "ENGLISH LOGIC"
          ],
          "contre": [
            "EDDINGTON",
            "JEANS (physical idealism)"
          ]
        }
      }
    },
    {
      "id": "089",
      "nom": "GRAMSCI",
      "full": "Antonio Gramsci",
      "dates": "1891-1937",
      "types": [
        "Marxisme",
        "Philo. Politique"
      ],
      "lieu": "Italie",
      "era": "CONTEMPORAINE",
      "imgUrl": "https://upload.wikimedia.org/wikipedia/commons/e/e6/Gramsci.png",
      "stats": {
        "INFLUENCE": 85,
        "RIGUEUR": 65,
        "ANCRAGE": 62,
        "PORTÉE": 88,
        "CLÔTURE": 58,
        "CLARTÉ": 62
      },
      "fr": {
        "oeuvre": "Cahiers de prison",
        "entree": "Gramsci enrichit le marxisme avec le concept d'hégémonie culturelle : les classes dominantes maintiennent leur pouvoir non seulement par la force mais par le consentement culturel. Les intellectuels organiques et la société civile jouent un rôle central.",
        "concepts": [
          {
            "nom": "L'HÉGÉMONIE CULTURELLE",
            "cat": "transcendant",
            "type": "Marxisme",
            "puissance": 90,
            "desc": "Bascule marxiste : la domination passe par le consentement culturel autant que par la force — la superstructure a une autonomie relative."
          },
          {
            "nom": "L'INTELLECTUEL ORGANIQUE",
            "cat": "immanent",
            "type": "Philo. Politique",
            "puissance": 82,
            "desc": "Chaque classe produit ses propres intellectuels organiques — l'intellectuel n'est pas autonome mais lié à une classe sociale."
          },
          {
            "nom": "LA GUERRE DE POSITION",
            "cat": "immanent",
            "type": "Marxisme",
            "puissance": 78,
            "desc": "Dans les sociétés civiles avancées, la révolution doit passer par une longue guerre de position culturelle avant toute prise du pouvoir."
          }
        ],
        "filiation": {
          "maitres": [
            "MARX",
            "LÉNINE",
            "CROCE (critique)"
          ],
          "disciples": [
            "ALTHUSSER",
            "HALL",
            "ÉTUDES CULTURELLES"
          ],
          "contre": [
            "ÉCONOMISME MARXISTE",
            "MÉCANICISME"
          ]
        }
      },
      "en": {
        "oeuvre": "Prison Notebooks",
        "entree": "Gramsci enriches Marxism with the concept of cultural hegemony: ruling classes maintain power not only through force but through cultural consent. Organic intellectuals and civil society play a central role.",
        "concepts": [
          {
            "nom": "CULTURAL HEGEMONY",
            "cat": "transcendant",
            "type": "Marxisme",
            "puissance": 90,
            "desc": "A Marxist shift: domination operates through cultural consent as much as force — the superstructure has relative autonomy."
          },
          {
            "nom": "ORGANIC INTELLECTUAL",
            "cat": "immanent",
            "type": "Philo. Politique",
            "puissance": 82,
            "desc": "Each class produces its own organic intellectuals — the intellectual is not autonomous but linked to a social class."
          },
          {
            "nom": "WAR OF POSITION",
            "cat": "immanent",
            "type": "Marxisme",
            "puissance": 78,
            "desc": "In advanced civil societies, revolution must pass through a long cultural war of position before any seizure of power."
          }
        ],
        "filiation": {
          "maitres": [
            "MARX",
            "LÉNIN",
            "CROCE (critique)"
          ],
          "disciples": [
            "ALTHUSSER",
            "HALL",
            "CULTURAL STUDIES"
          ],
          "contre": [
            "MARXIST ECONOMISM",
            "MECHANISM"
          ]
        }
      }
    },
    {
      "id": "090",
      "nom": "BENJAMIN",
      "full": "Walter Benjamin",
      "dates": "1892-1940",
      "types": [
        "Théorie Critique",
        "Esthétique"
      ],
      "lieu": "Allemagne",
      "era": "CONTEMPORAINE",
      "imgUrl": "https://upload.wikimedia.org/wikipedia/commons/c/cc/Walter_Benjamin_vers_1928.jpg",
      "stats": {
        "INFLUENCE": 88,
        "RIGUEUR": 55,
        "ANCRAGE": 48,
        "PORTÉE": 90,
        "CLÔTURE": 40,
        "CLARTÉ": 50
      },
      "fr": {
        "oeuvre": "L'Œuvre d'art à l'époque de sa reproductibilité technique",
        "entree": "Benjamin mêle marxisme, théologie juive et critique culturelle pour penser la modernité. La reproduction technique détruit l'aura de l'œuvre d'art — mais ouvre peut-être un potentiel révolutionnaire. L'ange de l'histoire regarde les ruines du passé.",
        "concepts": [
          {
            "nom": "L'AURA DE L'ŒUVRE",
            "cat": "transcendant",
            "type": "Esthétique",
            "puissance": 88,
            "desc": "Bascule : la reproduction technique détruit l'unicité et l'authenticité de l'œuvre d'art — l'ici-et-maintenant singulier de l'aura disparaît."
          },
          {
            "nom": "LE TEMPS MESSIANIQUE",
            "cat": "transcendant",
            "type": "Théorie Critique",
            "puissance": 85,
            "desc": "Contre le progrès linéaire : le temps révolutionnaire fait sauter le continuum de l'histoire — l'instant-maintenant comme porte du Messie."
          },
          {
            "nom": "L'ANGE DE L'HISTOIRE",
            "cat": "immanent",
            "type": "Théorie Critique",
            "puissance": 82,
            "desc": "L'ange de Klee voit la catastrophe s'accumuler — la philosophie de l'histoire comme regard sur les ruines du progrès."
          }
        ],
        "filiation": {
          "maitres": [
            "MARX",
            "SCHOLEM",
            "KAFKA",
            "BAUDELAIRE"
          ],
          "disciples": [
            "ADORNO",
            "ÉCOLE DE FRANCFORT",
            "ÉTUDES CULTURELLES"
          ],
          "contre": [
            "SOCIAL-DÉMOCRATIE",
            "PROGRÈS LINÉAIRE"
          ]
        }
      },
      "en": {
        "oeuvre": "The Work of Art in the Age of Mechanical Reproduction",
        "entree": "Benjamin blends Marxism, Jewish theology, and cultural criticism to think modernity. Technical reproduction destroys the aura of the work of art — but perhaps opens a revolutionary potential. The angel of history gazes at the ruins of the past.",
        "concepts": [
          {
            "nom": "THE AURA OF ART",
            "cat": "transcendant",
            "type": "Esthétique",
            "puissance": 88,
            "desc": "A shift: technical reproduction destroys the uniqueness and authenticity of the artwork — the singular here-and-now of the aura vanishes."
          },
          {
            "nom": "MESSIANIC TIME",
            "cat": "transcendant",
            "type": "Théorie Critique",
            "puissance": 85,
            "desc": "Against linear progress: revolutionary time blasts open the continuum of history — the now-moment as the gate of the Messiah."
          },
          {
            "nom": "THE ANGEL OF HISTORY",
            "cat": "immanent",
            "type": "Théorie Critique",
            "puissance": 82,
            "desc": "Klee's angel sees catastrophe accumulate — philosophy of history as a gaze upon the ruins of progress."
          }
        ],
        "filiation": {
          "maitres": [
            "MARX",
            "SCHOLEM",
            "KAFKA",
            "BAUDELAIRE"
          ],
          "disciples": [
            "ADORNO",
            "FRANKFURT SCHOOL",
            "CULTURAL STUDIES"
          ],
          "contre": [
            "SOCIAL DEMOCRACY",
            "LINEAR PROGRESS"
          ]
        }
      }
    },
    {
      "id": "091",
      "nom": "S.LANGER",
      "full": "Suzanne Langer",
      "dates": "1895-1985",
      "types": [
        "Esthétique",
        "Philo. Esprit"
      ],
      "lieu": "États-Unis",
      "era": "CONTEMPORAINE",
      "imgUrl": "https://upload.wikimedia.org/wikipedia/en/2/2c/Susanne_Langer_1945.jpg",
      "stats": {
        "INFLUENCE": 55,
        "RIGUEUR": 68,
        "ANCRAGE": 62,
        "PORTÉE": 62,
        "CLÔTURE": 55,
        "CLARTÉ": 75
      },
      "fr": {
        "oeuvre": "Philosophie en nouvelle tonalité",
        "entree": "Langer distingue symbolisme discursif (langage) et symbolisme présentatif (art) : l'art exprime une forme symbolique des sentiments humains que le langage ordinaire ne peut formuler. La musique est une image du temps vécu.",
        "concepts": [
          {
            "nom": "LE SYMBOLE PRÉSENTATIF",
            "cat": "transcendant",
            "type": "Esthétique",
            "puissance": 82,
            "desc": "L'art n'est pas langage mais symbole présentatif — il présente la forme du sentiment, non en le décrivant mais en l'incarnant."
          },
          {
            "nom": "LA FORME DU SENTIMENT",
            "cat": "immanent",
            "type": "Esthétique",
            "puissance": 78,
            "desc": "L'art symbolise la forme dynamique de la vie émotionnelle — morphologie de l'émotion plutôt que son expression brute."
          },
          {
            "nom": "LA VIRTUALITÉ EN ART",
            "cat": "immanent",
            "type": "Philo. Esprit",
            "puissance": 70,
            "desc": "Chaque art crée un espace virtuel spécifique — la musique crée un temps virtuel, la peinture un espace virtuel."
          }
        ],
        "filiation": {
          "maitres": [
            "CASSIRER",
            "WHITEHEAD",
            "WITTGSTN"
          ],
          "disciples": [
            "ESTHÉTIQUE AMÉRICAINE CONTEMPORAINE"
          ],
          "contre": [
            "EXPRESSIONNISME ROMANTIQUE NAÏF"
          ]
        }
      },
      "en": {
        "oeuvre": "Philosophy in a New Key",
        "entree": "Langer distinguishes discursive symbolism (language) from presentational symbolism (art): art expresses a symbolic form of human feelings that ordinary language cannot formulate. Music is an image of lived time.",
        "concepts": [
          {
            "nom": "PRESENTATIONAL SYMBOL",
            "cat": "transcendant",
            "type": "Esthétique",
            "puissance": 82,
            "desc": "Art is not language but a presentational symbol — it presents the form of feeling, not by describing it but by embodying it."
          },
          {
            "nom": "THE FORM OF FEELING",
            "cat": "immanent",
            "type": "Esthétique",
            "puissance": 78,
            "desc": "Art symbolizes the dynamic form of emotional life — morphology of emotion rather than its crude expression."
          },
          {
            "nom": "VIRTUALITY IN ART",
            "cat": "immanent",
            "type": "Philo. Esprit",
            "puissance": 70,
            "desc": "Each art creates a specific virtual space — music creates virtual time, painting a virtual space."
          }
        ],
        "filiation": {
          "maitres": [
            "CASSIRER",
            "WHITEHEAD",
            "WITTGSTN"
          ],
          "disciples": [
            "CONTEMPORARY AMERICAN AESTHETICS"
          ],
          "contre": [
            "NAIVE ROMANTIC EXPRESSIONISM"
          ]
        }
      }
    },
    {
      "id": "092",
      "nom": "SKINNER",
      "full": "B.F. Skinner",
      "dates": "1904-1990",
      "types": [
        "Empirisme",
        "Matérialisme"
      ],
      "lieu": "États-Unis",
      "era": "CONTEMPORAINE",
      "imgUrl": "https://upload.wikimedia.org/wikipedia/commons/3/3c/B.F._Skinner_at_Harvard_circa_1950_%28cropped%29.jpg",
      "stats": {
        "INFLUENCE": 75,
        "RIGUEUR": 72,
        "ANCRAGE": 65,
        "PORTÉE": 75,
        "CLÔTURE": 58,
        "CLARTÉ": 80
      },
      "fr": {
        "oeuvre": "Le Comportement des organismes",
        "entree": "Skinner radicalise le béhaviorisme : la psychologie doit se limiter aux comportements observables et à leurs renforcements, bannissant tout concept mentaliste. Son conditionnement opérant influence profondément psychologie et éducation.",
        "concepts": [
          {
            "nom": "LE CONDITIONNEMENT OPÉRANT",
            "cat": "transcendant",
            "type": "Empirisme",
            "puissance": 82,
            "desc": "Bascule : le comportement est façonné par ses conséquences (renforcements/punitions) — la psychologie sans états mentaux."
          },
          {
            "nom": "LE BÉHAVIORISME RADICAL",
            "cat": "immanent",
            "type": "Matérialisme",
            "puissance": 78,
            "desc": "Tous les comportements, y compris le langage et la pensée, sont des comportements soumis aux lois du renforcement."
          },
          {
            "nom": "L'INGÉNIERIE SOCIALE",
            "cat": "immanent",
            "type": "Empirisme",
            "puissance": 68,
            "desc": "Si le comportement est entièrement déterminé par l'environnement, une bonne société peut être conçue scientifiquement."
          }
        ],
        "filiation": {
          "maitres": [
            "WATSON",
            "THORNDIKE",
            "PAVLOV"
          ],
          "disciples": [
            "THÉRAPIE COMPORTEMENTALE"
          ],
          "contre": [
            "CHOMSKY (critique du béhaviorisme)",
            "COGNITIVISME"
          ]
        }
      },
      "en": {
        "oeuvre": "The Behavior of Organisms",
        "entree": "Skinner radicalizes behaviorism: psychology must be limited to observable behaviors and their reinforcements, banning all mentalist concepts. His operant conditioning deeply influences psychology and education.",
        "concepts": [
          {
            "nom": "OPERANT CONDITIONING",
            "cat": "transcendant",
            "type": "Empirisme",
            "puissance": 82,
            "desc": "A shift: behavior is shaped by its consequences (reinforcements/punishments) — psychology without mental states."
          },
          {
            "nom": "RADICAL BEHAVIORISM",
            "cat": "immanent",
            "type": "Matérialisme",
            "puissance": 78,
            "desc": "All behaviors, including language and thought, are behaviors subject to the laws of reinforcement."
          },
          {
            "nom": "SOCIAL ENGINEERING",
            "cat": "immanent",
            "type": "Empirisme",
            "puissance": 68,
            "desc": "If behavior is entirely determined by environment, a good society can be scientifically designed."
          }
        ],
        "filiation": {
          "maitres": [
            "WATSON",
            "THORNDIKE",
            "PAVLOV"
          ],
          "disciples": [
            "BEHAVIORAL THERAPY"
          ],
          "contre": [
            "CHOMSKY (critique of behaviorism)",
            "COGNITIVISM"
          ]
        }
      }
    },
    {
      "id": "093",
      "nom": "HEMPEL",
      "full": "Carl Hempel",
      "dates": "1905-1997",
      "types": [
        "Positivisme",
        "Philo. Sciences"
      ],
      "lieu": "Allemagne / États-Unis",
      "era": "CONTEMPORAINE",
      "imgUrl": "https://upload.wikimedia.org/wikipedia/en/b/ba/Carl_Gustav_Hempel.jpg",
      "stats": {
        "INFLUENCE": 72,
        "RIGUEUR": 88,
        "ANCRAGE": 68,
        "PORTÉE": 72,
        "CLÔTURE": 60,
        "CLARTÉ": 75
      },
      "fr": {
        "oeuvre": "Aspects de l'explication scientifique",
        "entree": "Hempel formalise le modèle nomologico-déductif de l'explication scientifique : expliquer un fait, c'est le déduire à partir de lois générales et de conditions initiales. Il développe aussi le paradoxe du corbeau.",
        "concepts": [
          {
            "nom": "LE MODÈLE N-D",
            "cat": "immanent",
            "type": "Philo. Sciences",
            "puissance": 85,
            "desc": "Expliquer = déduire l'explanandum à partir de lois générales (explanans) — la structure logique de toute explication scientifique."
          },
          {
            "nom": "LE PARADOXE DU CORBEAU",
            "cat": "immanent",
            "type": "Positivisme",
            "puissance": 80,
            "desc": "Une chaussure rouge confirme 'tous les corbeaux sont noirs' — révèle la complexité de la confirmation et de l'induction."
          },
          {
            "nom": "LE DILEMME DU THÉORICIEN",
            "cat": "immanent",
            "type": "Positivisme",
            "puissance": 72,
            "desc": "Si les termes théoriques sont nécessaires, ils ne peuvent être éliminés — sinon ils sont superflus. Tension entre utilité et signification empirique."
          }
        ],
        "filiation": {
          "maitres": [
            "CARNAP",
            "CERCLE DE VIENNE"
          ],
          "disciples": [
            "PHILOSOPHIE DES SCIENCES ANALYTIQUE"
          ],
          "contre": [
            "ANTIRÉALISME EXTRÊME",
            "VITALISME"
          ]
        }
      },
      "en": {
        "oeuvre": "Aspects of Scientific Explanation",
        "entree": "Hempel formalizes the nomological-deductive model of scientific explanation: to explain a fact is to deduce it from general laws and initial conditions. He also develops the raven paradox.",
        "concepts": [
          {
            "nom": "THE D-N MODEL",
            "cat": "immanent",
            "type": "Philo. Sciences",
            "puissance": 85,
            "desc": "To explain = to deduce the explanandum from general laws (explanans) — the logical structure of all scientific explanation."
          },
          {
            "nom": "THE RAVEN PARADOX",
            "cat": "immanent",
            "type": "Positivisme",
            "puissance": 80,
            "desc": "A red shoe confirms 'all ravens are black' — reveals the complexity of confirmation and induction."
          },
          {
            "nom": "THE THEORETICIAN'S DILEMMA",
            "cat": "immanent",
            "type": "Positivisme",
            "puissance": 72,
            "desc": "If theoretical terms are necessary they cannot be eliminated — otherwise they are superfluous. Tension between utility and empirical significance."
          }
        ],
        "filiation": {
          "maitres": [
            "CARNAP",
            "VIENNA CIRCLE"
          ],
          "disciples": [
            "ANALYTIC PHILOSOPHY OF SCIENCE"
          ],
          "contre": [
            "EXTREME ANTI-REALISM",
            "VITALISM"
          ]
        }
      }
    },
    {
      "id": "094",
      "nom": "POPPER",
      "full": "Karl Popper",
      "dates": "1902-1994",
      "types": [
        "Philo. Sciences",
        "Libéralisme"
      ],
      "lieu": "Autriche / Angleterre",
      "era": "CONTEMPORAINE",
      "imgUrl": "https://upload.wikimedia.org/wikipedia/commons/4/43/Karl_Popper.jpg",
      "stats": {
        "INFLUENCE": 90,
        "RIGUEUR": 82,
        "ANCRAGE": 68,
        "PORTÉE": 88,
        "CLÔTURE": 62,
        "CLARTÉ": 78
      },
      "fr": {
        "oeuvre": "La Logique de la découverte scientifique",
        "entree": "Popper remplace la vérification par la réfutabilité : une théorie est scientifique si elle peut être réfutée. La science progresse par conjectures et réfutations. Politiquement, il défend la société ouverte contre le totalitarisme.",
        "concepts": [
          {
            "nom": "LA FALSIFIABILITÉ",
            "cat": "transcendant",
            "type": "Philo. Sciences",
            "puissance": 92,
            "desc": "Bascule épistémique : une théorie est scientifique si et seulement si elle peut être réfutée par l'expérience — contre le vérificationisme."
          },
          {
            "nom": "CONJECTURES ET RÉFUTATIONS",
            "cat": "immanent",
            "type": "Philo. Sciences",
            "puissance": 88,
            "desc": "La science progresse par des hypothèses audacieuses testées et réfutées — non par accumulation inductive."
          },
          {
            "nom": "LA SOCIÉTÉ OUVERTE",
            "cat": "transcendant",
            "type": "Libéralisme",
            "puissance": 85,
            "desc": "Contre Platon, Hegel, Marx — le totalitarisme est la conséquence de l'historicisme et de la certitude intellectuelle. La société ouverte accueille la critique."
          }
        ],
        "filiation": {
          "maitres": [
            "EINSTEIN",
            "KANT",
            "HUME"
          ],
          "disciples": [
            "LAKATOS",
            "FEYERABEND (critique)"
          ],
          "contre": [
            "CARNAP",
            "MARXISME",
            "PSYCHANALYSE (pseudo-science)"
          ]
        }
      },
      "en": {
        "oeuvre": "The Logic of Scientific Discovery",
        "entree": "Popper replaces verification with falsifiability: a theory is scientific if it can be refuted. Science progresses through conjectures and refutations. Politically, he defends open society against totalitarianism.",
        "concepts": [
          {
            "nom": "FALSIFIABILITY",
            "cat": "transcendant",
            "type": "Philo. Sciences",
            "puissance": 92,
            "desc": "An epistemic shift: a theory is scientific if and only if it can be refuted by experience — against verificationism."
          },
          {
            "nom": "CONJECTURES AND REFUTATIONS",
            "cat": "immanent",
            "type": "Philo. Sciences",
            "puissance": 88,
            "desc": "Science progresses through bold hypotheses tested and refuted — not through inductive accumulation."
          },
          {
            "nom": "THE OPEN SOCIETY",
            "cat": "transcendant",
            "type": "Libéralisme",
            "puissance": 85,
            "desc": "Against Plato, Hegel, Marx — totalitarianism follows from historicism and intellectual certainty. The open society welcomes criticism."
          }
        ],
        "filiation": {
          "maitres": [
            "EINSTEIN",
            "KANT",
            "HUME"
          ],
          "disciples": [
            "LAKATOS",
            "FEYERABEND (critique)"
          ],
          "contre": [
            "CARNAP",
            "MARXISM",
            "PSYCHOANALYSIS (pseudo-science)"
          ]
        }
      }
    },
    {
      "id": "095",
      "nom": "RYLE",
      "full": "Gilbert Ryle",
      "dates": "1900-1976",
      "types": [
        "Philo. Esprit",
        "Philo. Langage"
      ],
      "lieu": "Angleterre",
      "era": "CONTEMPORAINE",
      "imgUrl": "https://upload.wikimedia.org/wikipedia/en/e/e8/Gilbert_Ryle_%28by_Rex_Whistler%29.jpg",
      "stats": {
        "INFLUENCE": 72,
        "RIGUEUR": 82,
        "ANCRAGE": 68,
        "PORTÉE": 75,
        "CLÔTURE": 62,
        "CLARTÉ": 80
      },
      "fr": {
        "oeuvre": "La Notion d'esprit",
        "entree": "Ryle démonte le dualisme cartésien avec la métaphore du « fantôme dans la machine ». Descartes a commis une erreur catégorielle : l'esprit n'est pas une chose (res cogitans) mais une manière de se comporter.",
        "concepts": [
          {
            "nom": "LE FANTÔME DANS LA MACHINE",
            "cat": "transcendant",
            "type": "Philo. Esprit",
            "puissance": 85,
            "desc": "Bascule anti-dualiste : le dualisme cartésien est une erreur catégorielle — attribuer à l'esprit un type d'existence qu'il n'a pas."
          },
          {
            "nom": "L'ERREUR CATÉGORIELLE",
            "cat": "immanent",
            "type": "Philo. Langage",
            "puissance": 82,
            "desc": "Confondre deux catégories logiquement différentes — l'esprit n'est pas une chose cachée mais des dispositions comportementales."
          },
          {
            "nom": "SAVOIR COMMENT / QUE",
            "cat": "immanent",
            "type": "Philo. Esprit",
            "puissance": 78,
            "desc": "Distinction entre connaissance pratique (savoir nager) et connaissance propositionnelle (savoir que l'eau est H2O) — irréductibilité du pratique au théorique."
          }
        ],
        "filiation": {
          "maitres": [
            "WITTGSTN",
            "MOORE"
          ],
          "disciples": [
            "PHILOSOPHIE ANALYTIQUE DE L'ESPRIT"
          ],
          "contre": [
            "DESCARTES",
            "DUALISME"
          ]
        }
      },
      "en": {
        "oeuvre": "The Concept of Mind",
        "entree": "Ryle dismantles Cartesian dualism with the metaphor of the 'ghost in the machine'. Descartes committed a category mistake: the mind is not a thing (res cogitans) but a way of behaving.",
        "concepts": [
          {
            "nom": "THE GHOST IN THE MACHINE",
            "cat": "transcendant",
            "type": "Philo. Esprit",
            "puissance": 85,
            "desc": "An anti-dualist shift: Cartesian dualism is a category mistake — attributing to mind a type of existence it does not have."
          },
          {
            "nom": "THE CATEGORY MISTAKE",
            "cat": "immanent",
            "type": "Philo. Langage",
            "puissance": 82,
            "desc": "Confusing two logically different categories — the mind is not a hidden thing but behavioral dispositions."
          },
          {
            "nom": "KNOWING HOW / KNOWING THAT",
            "cat": "immanent",
            "type": "Philo. Esprit",
            "puissance": 78,
            "desc": "Distinction between practical knowledge (knowing how to swim) and propositional knowledge (knowing that water is H2O)."
          }
        ],
        "filiation": {
          "maitres": [
            "WITTGSTN",
            "MOORE"
          ],
          "disciples": [
            "ANALYTIC PHILOSOPHY OF MIND"
          ],
          "contre": [
            "DESCARTES",
            "DUALISM"
          ]
        }
      }
    },
    {
      "id": "096",
      "nom": "GODEL",
      "full": "Kurt Gödel",
      "dates": "1906-1978",
      "types": [
        "Logique",
        "Philo. Sciences"
      ],
      "lieu": "Autriche / États-Unis",
      "era": "CONTEMPORAINE",
      "imgUrl": "https://upload.wikimedia.org/wikipedia/commons/4/42/Kurt_g%C3%B6del.jpg",
      "stats": {
        "INFLUENCE": 92,
        "RIGUEUR": 99,
        "ANCRAGE": 72,
        "PORTÉE": 95,
        "CLÔTURE": 68,
        "CLARTÉ": 45
      },
      "fr": {
        "oeuvre": "Sur les propositions formellement indécidables",
        "entree": "Gödel publie les théorèmes d'incomplétude en 1931 — le résultat le plus profond des mathématiques du XXe siècle. Tout système formel suffisamment puissant contient des vérités qu'il ne peut démontrer, et ne peut prouver sa propre cohérence.",
        "concepts": [
          {
            "nom": "L'INCOMPLÉTUDE",
            "cat": "transcendant",
            "type": "Logique",
            "puissance": 99,
            "desc": "Bascule fondationnelle : tout système formel assez riche contient des propositions vraies mais indémontrables — la vérité dépasse la démonstration."
          },
          {
            "nom": "L'INCOHÉRENCE INDÉMONTRABLE",
            "cat": "immanent",
            "type": "Logique",
            "puissance": 95,
            "desc": "Aucun système formel cohérent ne peut prouver sa propre cohérence — détruit le programme de Hilbert."
          },
          {
            "nom": "LE RÉALISME PLATONICIEN",
            "cat": "transcendant",
            "type": "Réalisme",
            "puissance": 80,
            "desc": "Gödel est platonicien : les objets mathématiques existent indépendamment de l'esprit — leurs vérités sont découvertes, non inventées."
          }
        ],
        "filiation": {
          "maitres": [
            "FREGE",
            "HILBERT (réfute)",
            "BROUWER"
          ],
          "disciples": [
            "THÉORIE DE L'INFORMATION",
            "INFORMATIQUE THÉORIQUE"
          ],
          "contre": [
            "HILBERT (programme)",
            "FORMALISME PUR"
          ]
        }
      },
      "en": {
        "oeuvre": "On Formally Undecidable Propositions",
        "entree": "Gödel publishes the incompleteness theorems in 1931 — the deepest result of 20th-century mathematics. Any sufficiently powerful formal system contains truths it cannot prove, and cannot prove its own consistency.",
        "concepts": [
          {
            "nom": "INCOMPLETENESS",
            "cat": "transcendant",
            "type": "Logique",
            "puissance": 99,
            "desc": "A foundational shift: any sufficiently rich formal system contains true but unprovable propositions — truth outstrips provability."
          },
          {
            "nom": "UNPROVABLE CONSISTENCY",
            "cat": "immanent",
            "type": "Logique",
            "puissance": 95,
            "desc": "No consistent formal system can prove its own consistency — destroys Hilbert's program."
          },
          {
            "nom": "PLATONIST REALISM",
            "cat": "transcendant",
            "type": "Réalisme",
            "puissance": 80,
            "desc": "Gödel is a Platonist: mathematical objects exist independently of mind — their truths are discovered, not invented."
          }
        ],
        "filiation": {
          "maitres": [
            "FREGE",
            "HILBERT (refutes)",
            "BROUWER"
          ],
          "disciples": [
            "INFORMATION THEORY",
            "THEORETICAL COMPUTER SCIENCE"
          ],
          "contre": [
            "HILBERT (program)",
            "PURE FORMALISM"
          ]
        }
      }
    },
    {
      "id": "097",
      "nom": "TARSKI",
      "full": "Alfred Tarski",
      "dates": "1901-1983",
      "types": [
        "Logique",
        "Philo. Langage"
      ],
      "lieu": "Pologne / États-Unis",
      "era": "CONTEMPORAINE",
      "imgUrl": "https://upload.wikimedia.org/wikipedia/commons/5/56/Alfred_Tarski_1968_%28as-is%2C_cropped%29_%28cropped%29.jpg",
      "stats": {
        "INFLUENCE": 80,
        "RIGUEUR": 98,
        "ANCRAGE": 70,
        "PORTÉE": 78,
        "CLÔTURE": 65,
        "CLARTÉ": 55
      },
      "fr": {
        "oeuvre": "La Notion de vérité dans les langages formalisés",
        "entree": "Tarski fournit la première définition formelle rigoureuse de la vérité pour les langages formels. La convention T : 'La neige est blanche' est vraie si et seulement si la neige est blanche. Il distingue langage-objet et métalangage pour éviter les paradoxes.",
        "concepts": [
          {
            "nom": "LA DÉFINITION DE LA VÉRITÉ",
            "cat": "immanent",
            "type": "Logique",
            "puissance": 92,
            "desc": "La vérité est une relation de correspondance formellement définissable entre énoncés et faits — dans un métalangage."
          },
          {
            "nom": "LA CONVENTION T",
            "cat": "immanent",
            "type": "Philo. Langage",
            "puissance": 85,
            "desc": "'p' est vraie si et seulement si p — schéma biconditionnnel définissant la vérité pour tout énoncé d'un langage formel."
          },
          {
            "nom": "OBJ./MÉTALANGAGE",
            "cat": "immanent",
            "type": "Logique",
            "puissance": 82,
            "desc": "Pour éviter le paradoxe du menteur, séparer le langage décrit (objet) du langage qui décrit (méta) — hiérarchie sémantique."
          }
        ],
        "filiation": {
          "maitres": [
            "FREGE",
            "RUSSELL",
            "ÉCOLE DE LWÓW-VARSOVIE"
          ],
          "disciples": [
            "DAVIDSON",
            "THÉORIE DES MODÈLES"
          ],
          "contre": [
            "PARADOXE DU MENTEUR",
            "PSYCHOLOGISME"
          ]
        }
      },
      "en": {
        "oeuvre": "The Concept of Truth in Formalized Languages",
        "entree": "Tarski provides the first rigorous formal definition of truth for formal languages. Convention T: 'Snow is white' is true if and only if snow is white. He distinguishes object language and metalanguage to avoid paradoxes.",
        "concepts": [
          {
            "nom": "SEMANTIC DEF. OF TRUTH",
            "cat": "immanent",
            "type": "Logique",
            "puissance": 92,
            "desc": "Truth is a formally definable correspondence relation between sentences and facts — articulated in a metalanguage."
          },
          {
            "nom": "CONVENTION T",
            "cat": "immanent",
            "type": "Philo. Langage",
            "puissance": 85,
            "desc": "'p' is true if and only if p — biconditional schema defining truth for every sentence of a formal language."
          },
          {
            "nom": "OBJECT/METALANGUAGE",
            "cat": "immanent",
            "type": "Logique",
            "puissance": 82,
            "desc": "To avoid the liar paradox, separate the language described (object) from the language doing the describing (meta) — semantic hierarchy."
          }
        ],
        "filiation": {
          "maitres": [
            "FREGE",
            "RUSSELL",
            "LWÓW-WARSAW SCHOOL"
          ],
          "disciples": [
            "DAVIDSON",
            "MODEL THEORY"
          ],
          "contre": [
            "THE LIAR PARADOX",
            "PSYCHOLOGISM"
          ]
        }
      }
    },
    {
      "id": "098",
      "nom": "MAYR",
      "full": "Ernst Mayr",
      "dates": "1904-2005",
      "types": [
        "Philo. Sciences"
      ],
      "lieu": "Allemagne / États-Unis",
      "era": "CONTEMPORAINE",
      "imgUrl": "https://upload.wikimedia.org/wikipedia/commons/a/af/Ernst_Mayr_PLoS.jpg",
      "stats": {
        "INFLUENCE": 65,
        "RIGUEUR": 82,
        "ANCRAGE": 68,
        "PORTÉE": 65,
        "CLÔTURE": 62,
        "CLARTÉ": 72
      },
      "fr": {
        "oeuvre": "Systématique et l'origine des espèces",
        "entree": "Mayr co-fonde la synthèse évolutive moderne et propose le concept biologique d'espèce : une espèce est un groupe de populations réellement ou potentiellement interfécondes, reprodutivement isolées des autres. Il défend l'autonomie de la biologie.",
        "concepts": [
          {
            "nom": "LE CONCEPT BIOLOGIQUE D'ESPÈCE",
            "cat": "immanent",
            "type": "Philo. Sciences",
            "puissance": 82,
            "desc": "Espèce = groupe de populations réellement ou potentiellement interfécondes — redéfinit l'espèce en termes de reproduction plutôt que de morphologie."
          },
          {
            "nom": "LA PENSÉE POPULATIONNELLE",
            "cat": "transcendant",
            "type": "Philo. Sciences",
            "puissance": 80,
            "desc": "Contre l'essentialisme typologique : les populations sont des ensembles de variantes uniques, non des copies d'un type idéal."
          },
          {
            "nom": "L'AUTONOMIE DE LA BIOLOGIE",
            "cat": "immanent",
            "type": "Philo. Sciences",
            "puissance": 75,
            "desc": "La biologie a ses propres lois (téléonomiques) irréductibles à la physique — la causalité finale en biologie est légitime."
          }
        ],
        "filiation": {
          "maitres": [
            "DARWIN",
            "DOBZHANSKY"
          ],
          "disciples": [
            "BIOLOGIE ÉVOLUTIVE MODERNE"
          ],
          "contre": [
            "RÉDUCTIONNISME PHYSICALISTE",
            "ESSENTIALISME TYPOLOGIQUE"
          ]
        }
      },
      "en": {
        "oeuvre": "Systematics and the Origin of Species",
        "entree": "Mayr co-founds the modern evolutionary synthesis and proposes the biological species concept: a species is a group of actually or potentially interbreeding populations, reproductively isolated from others. He defends the autonomy of biology.",
        "concepts": [
          {
            "nom": "BIOLOGICAL SPECIES CONCEPT",
            "cat": "immanent",
            "type": "Philo. Sciences",
            "puissance": 82,
            "desc": "Species = group of actually or potentially interbreeding populations — redefines species in terms of reproduction rather than morphology."
          },
          {
            "nom": "POPULATION THINKING",
            "cat": "transcendant",
            "type": "Philo. Sciences",
            "puissance": 80,
            "desc": "Against typological essentialism: populations are collections of unique variants, not copies of an ideal type."
          },
          {
            "nom": "AUTONOMY OF BIOLOGY",
            "cat": "immanent",
            "type": "Philo. Sciences",
            "puissance": 75,
            "desc": "Biology has its own (teleomatic) laws irreducible to physics — final causation in biology is legitimate."
          }
        ],
        "filiation": {
          "maitres": [
            "DARWIN",
            "DOBZHANSKY"
          ],
          "disciples": [
            "MODERN EVOLUTIONARY BIOLOGY"
          ],
          "contre": [
            "PHYSICALIST REDUCTIONISM",
            "TYPOLOGICAL ESSENTIALISM"
          ]
        }
      }
    },
    {
      "id": "099",
      "nom": "BATAILLE",
      "full": "Georges Bataille",
      "dates": "1897-1962",
      "types": [
        "Existentialisme",
        "Esthétique"
      ],
      "lieu": "France",
      "era": "CONTEMPORAINE",
      "imgUrl": "https://upload.wikimedia.org/wikipedia/commons/7/7a/Georges_Bataille_vers_1943.jpg",
      "stats": {
        "INFLUENCE": 75,
        "RIGUEUR": 40,
        "ANCRAGE": 38,
        "PORTÉE": 85,
        "CLÔTURE": 32,
        "CLARTÉ": 42
      },
      "fr": {
        "oeuvre": "La Part maudite",
        "entree": "Bataille pense l'économie générale de la dépense : contre l'économie restreinte de l'utilité et de l'accumulation, la vraie vie humaine est affaire de dépense somptuaire, de sacrifice et d'érotisme. La transgression définit les limites qu'elle franchit.",
        "concepts": [
          {
            "nom": "LA DÉPENSE",
            "cat": "transcendant",
            "type": "Existentialisme",
            "puissance": 82,
            "desc": "Bascule contre l'utilité : l'excès, le sacrifice, le luxe et le jeu sont plus fondamentaux que l'accumulation — économie générale contre économie restreinte."
          },
          {
            "nom": "L'ÉROTISME",
            "cat": "immanent",
            "type": "Existentialisme",
            "puissance": 80,
            "desc": "L'érotisme est l'approbation de la vie jusque dans la mort — passage de la discontinuité individuelle à la continuité dans la transgression."
          },
          {
            "nom": "LA TRANSGRESSION",
            "cat": "immanent",
            "type": "Esthétique",
            "puissance": 78,
            "desc": "La transgression ne supprime pas l'interdit mais le complète — l'interdit et sa violation sont dialectiquement liés."
          }
        ],
        "filiation": {
          "maitres": [
            "NIETZSCHE",
            "MAUSS",
            "HEGEL (via Kojève)"
          ],
          "disciples": [
            "DERRIDA",
            "FOUCAULT",
            "BAUDRILLARD"
          ],
          "contre": [
            "UTILITÉ",
            "ÉCONOMIE BOURGEOISE"
          ]
        }
      },
      "en": {
        "oeuvre": "The Accursed Share",
        "entree": "Bataille thinks the general economy of expenditure: against the restricted economy of utility and accumulation, true human life is about sumptuary expenditure, sacrifice, and eroticism. Transgression defines the limits it crosses.",
        "concepts": [
          {
            "nom": "EXPENDITURE",
            "cat": "transcendant",
            "type": "Existentialisme",
            "puissance": 82,
            "desc": "A shift against utility: excess, sacrifice, luxury, and play are more fundamental than accumulation — general vs restricted economy."
          },
          {
            "nom": "EROTICISM",
            "cat": "immanent",
            "type": "Existentialisme",
            "puissance": 80,
            "desc": "Eroticism is the affirmation of life all the way into death — passage from individual discontinuity to continuity through transgression."
          },
          {
            "nom": "TRANSGRESSION",
            "cat": "immanent",
            "type": "Esthétique",
            "puissance": 78,
            "desc": "Transgression does not abolish the prohibition but completes it — prohibition and its violation are dialectically linked."
          }
        ],
        "filiation": {
          "maitres": [
            "NIETZSCHE",
            "MAUSS",
            "HEGEL (via Kojève)"
          ],
          "disciples": [
            "DERRIDA",
            "FOUCAULT",
            "BAUDRILLARD"
          ],
          "contre": [
            "UTILITY",
            "BOURGEOIS ECONOMY"
          ]
        }
      }
    },
    {
      "id": "100",
      "nom": "LACAN",
      "full": "Jacques Lacan",
      "dates": "1901-1981",
      "types": [
        "Structuralisme",
        "Philo. Esprit"
      ],
      "lieu": "France",
      "era": "CONTEMPORAINE",
      "imgUrl": "https://upload.wikimedia.org/wikipedia/commons/2/25/Jacques_Lacan_during_an_interview_1969.jpg",
      "stats": {
        "INFLUENCE": 85,
        "RIGUEUR": 28,
        "ANCRAGE": 30,
        "PORTÉE": 92,
        "CLÔTURE": 35,
        "CLARTÉ": 15
      },
      "fr": {
        "oeuvre": "Écrits",
        "entree": "Lacan relit Freud à travers Saussure et Lévi-Strauss : l'inconscient est structuré comme un langage. Le sujet est constitué par le manque dans le symbolique. Le réel, le symbolique et l'imaginaire forment le nœud borroméen de la psyché.",
        "concepts": [
          {
            "nom": "L'INCONSCIENT COMME LANGAGE",
            "cat": "transcendant",
            "type": "Structuralisme",
            "puissance": 88,
            "desc": "Bascule : l'inconscient n'est pas un réservoir d'images mais une structure de signifiants — la psychanalyse redéfinie par la linguistique."
          },
          {
            "nom": "LE STADE DU MIROIR",
            "cat": "immanent",
            "type": "Philo. Esprit",
            "puissance": 82,
            "desc": "L'enfant constitue son moi en s'identifiant à son image dans le miroir — le moi est aliénation fondatrice, non donné naturel."
          },
          {
            "nom": "RSI",
            "cat": "immanent",
            "type": "Philo. Esprit",
            "puissance": 80,
            "desc": "Trois registres de l'existence humaine : le symbolique (langage), l'imaginaire (image/moi), le réel (ce qui résiste à toute symbolisation)."
          }
        ],
        "filiation": {
          "maitres": [
            "FREUD",
            "SAUSSURE",
            "HEGEL (via Kojève)",
            "LÉVI-STRAUSS"
          ],
          "disciples": [
            "IRIGARAY",
            "ŽIŽEK",
            "PSYCHANALYSE LACANIENNE"
          ],
          "contre": [
            "PSYCHOLOGIE DU MOI",
            "FREUD (certains aspects)"
          ]
        }
      },
      "en": {
        "oeuvre": "Écrits",
        "entree": "Lacan rereads Freud through Saussure and Lévi-Strauss: the unconscious is structured like a language. The subject is constituted by lack in the symbolic. The real, the symbolic, and the imaginary form the Borromean knot of the psyche.",
        "concepts": [
          {
            "nom": "UNCONSCIOUS AS LANGUAGE",
            "cat": "transcendant",
            "type": "Structuralisme",
            "puissance": 88,
            "desc": "A shift: the unconscious is not a reservoir of images but a structure of signifiers — psychoanalysis redefined by linguistics."
          },
          {
            "nom": "THE MIRROR STAGE",
            "cat": "immanent",
            "type": "Philo. Esprit",
            "puissance": 82,
            "desc": "The child constitutes its ego by identifying with its image in the mirror — the ego is foundational alienation, not a natural given."
          },
          {
            "nom": "RSI (REAL/SYM./IMAG.)",
            "cat": "immanent",
            "type": "Philo. Esprit",
            "puissance": 80,
            "desc": "Three registers of human existence: the symbolic (language), the imaginary (image/ego), the real (that which resists all symbolization)."
          }
        ],
        "filiation": {
          "maitres": [
            "FREUD",
            "SAUSSURE",
            "HEGEL (via Kojève)",
            "LÉVI-STRAUSS"
          ],
          "disciples": [
            "IRIGARAY",
            "ŽIŽEK",
            "LACANIAN PSYCHOANALYSIS"
          ],
          "contre": [
            "EGO PSYCHOLOGY",
            "FREUD (certain aspects)"
          ]
        }
      }
    },
    {
      "id": "101",
      "nom": "ADORNO",
      "full": "Theodor Adorno",
      "dates": "1903-1969",
      "types": [
        "Théorie Critique",
        "Esthétique"
      ],
      "lieu": "Allemagne",
      "era": "CONTEMPORAINE",
      "imgUrl": "https://upload.wikimedia.org/wikipedia/commons/1/18/Theodor_W._Adorno.jpg",
      "stats": {
        "INFLUENCE": 85,
        "RIGUEUR": 60,
        "ANCRAGE": 52,
        "PORTÉE": 88,
        "CLÔTURE": 45,
        "CLARTÉ": 28
      },
      "fr": {
        "oeuvre": "Dialectique de la Raison (avec Horkheimer) / Théorie Esthétique",
        "entree": "Adorno diagnostique le retournement des Lumières en barbarie. La raison instrumentale produit la domination, l'industrie culturelle annihile l'art authentique. Sa pensée négative refuse toute identité close — l'art résiste comme énigme.",
        "concepts": [
          {
            "nom": "LA RAISON INSTRUMENTALE",
            "cat": "transcendant",
            "type": "Théorie Critique",
            "puissance": 90,
            "desc": "Bascule : les Lumières ont produit leur contraire — la raison technique devient instrument de domination plutôt que d'émancipation."
          },
          {
            "nom": "L'INDUSTRIE CULTURELLE",
            "cat": "immanent",
            "type": "Esthétique",
            "puissance": 85,
            "desc": "La culture de masse standardise et administre les besoins — l'art authentique doit résister à la réification par son non-identique."
          },
          {
            "nom": "LA DIALECTIQUE NÉGATIVE",
            "cat": "immanent",
            "type": "Théorie Critique",
            "puissance": 82,
            "desc": "Refus de tout système clos et de toute identité positive — la pensée doit maintenir la tension du non-identique contre la totalisation."
          }
        ],
        "filiation": {
          "maitres": [
            "HEGEL",
            "MARX",
            "FREUD",
            "BENJAMIN"
          ],
          "disciples": [
            "HABERMAS (critique)",
            "THÉORIE CRITIQUE CONTEMPORAINE"
          ],
          "contre": [
            "POSITIVISME",
            "IDENTITÉ FACILE",
            "INDUSTRIE CULTURELLE"
          ]
        }
      },
      "en": {
        "oeuvre": "Dialectic of Enlightenment (with Horkheimer) / Aesthetic Theory",
        "entree": "Adorno diagnoses the reversal of Enlightenment into barbarism. Instrumental reason produces domination; the culture industry annihilates authentic art. His negative thinking refuses all closed identity — art resists as enigma.",
        "concepts": [
          {
            "nom": "INSTRUMENTAL REASON",
            "cat": "transcendant",
            "type": "Théorie Critique",
            "puissance": 90,
            "desc": "A shift: the Enlightenment produced its opposite — technical reason becomes an instrument of domination rather than emancipation."
          },
          {
            "nom": "CULTURE INDUSTRY",
            "cat": "immanent",
            "type": "Esthétique",
            "puissance": 85,
            "desc": "Mass culture standardizes and administers needs — authentic art must resist reification through its non-identical."
          },
          {
            "nom": "NEGATIVE DIALECTICS",
            "cat": "immanent",
            "type": "Théorie Critique",
            "puissance": 82,
            "desc": "Refusal of all closed systems and positive identity — thought must maintain the tension of the non-identical against totalization."
          }
        ],
        "filiation": {
          "maitres": [
            "HEGEL",
            "MARX",
            "FREUD",
            "BENJAMIN"
          ],
          "disciples": [
            "HABERMAS (critique)",
            "CONTEMPORARY CRITICAL THEORY"
          ],
          "contre": [
            "POSITIVISM",
            "EASY IDENTITY",
            "CULTURE INDUSTRY"
          ]
        }
      }
    },
    {
      "id": "102",
      "nom": "ARENDT",
      "full": "Hannah Arendt",
      "dates": "1906-1975",
      "types": [
        "Philo. Politique",
        "Existentialisme"
      ],
      "lieu": "Allemagne / États-Unis",
      "era": "CONTEMPORAINE",
      "imgUrl": "https://upload.wikimedia.org/wikipedia/commons/2/26/Hannah_Arendt_1975_%28rechts_bijgesneden%29.jpg",
      "stats": {
        "INFLUENCE": 90,
        "RIGUEUR": 68,
        "ANCRAGE": 62,
        "PORTÉE": 88,
        "CLÔTURE": 55,
        "CLARTÉ": 75
      },
      "fr": {
        "oeuvre": "Les Origines du totalitarisme / La Condition de l'homme moderne",
        "entree": "Arendt pense le politique à partir de la pluralité humaine. Elle analyse le totalitarisme comme rupture radicale avec la tradition politique. Son concept de banalité du mal désigne la capacité du mal ordinaire à opérer sans intention maligne.",
        "concepts": [
          {
            "nom": "LA BANALITÉ DU MAL",
            "cat": "transcendant",
            "type": "Existentialisme",
            "puissance": 90,
            "desc": "Bascule : Eichmann n'est pas monstrueux mais ordinaire — le mal totalitaire se produit sans pensée, sans intention maligne, par abdication de la réflexion."
          },
          {
            "nom": "L'ACTION ET LE DISCOURS",
            "cat": "immanent",
            "type": "Philo. Politique",
            "puissance": 85,
            "desc": "La politique est l'espace de l'action collective et du discours partagé entre égaux-distincts — la pluralité humaine est sa condition."
          },
          {
            "nom": "LE TOTALITARISME",
            "cat": "immanent",
            "type": "Philo. Politique",
            "puissance": 88,
            "desc": "Rupture radicale avec toute tradition politique — le totalitarisme vise à détruire la pluralité humaine et à rendre les hommes superflus."
          }
        ],
        "filiation": {
          "maitres": [
            "HEIDEGGER",
            "JASPERS",
            "KANT (politique)"
          ],
          "disciples": [
            "THÉORIE POLITIQUE CONTEMPORAINE"
          ],
          "contre": [
            "TOTALITARISME",
            "STALINISME",
            "NAZISME"
          ]
        }
      },
      "en": {
        "oeuvre": "The Origins of Totalitarianism / The Human Condition",
        "entree": "Arendt thinks the political from human plurality. She analyzes totalitarianism as a radical break with political tradition. Her concept of the banality of evil designates the capacity of ordinary evil to operate without malicious intent.",
        "concepts": [
          {
            "nom": "THE BANALITY OF EVIL",
            "cat": "transcendant",
            "type": "Existentialisme",
            "puissance": 90,
            "desc": "A shift: Eichmann is not monstrous but ordinary — totalitarian evil operates without thought, without malicious intent, through abdication of reflection."
          },
          {
            "nom": "ACTION AND SPEECH",
            "cat": "immanent",
            "type": "Philo. Politique",
            "puissance": 85,
            "desc": "Politics is the space of collective action and shared discourse between equal-distinct beings — human plurality is its condition."
          },
          {
            "nom": "TOTALITARIANISM",
            "cat": "immanent",
            "type": "Philo. Politique",
            "puissance": 88,
            "desc": "A radical break with all political tradition — totalitarianism aims to destroy human plurality and render humans superfluous."
          }
        ],
        "filiation": {
          "maitres": [
            "HEIDEGGER",
            "JASPERS",
            "KANT (politics)"
          ],
          "disciples": [
            "CONTEMPORARY POLITICAL THEORY"
          ],
          "contre": [
            "TOTALITARIANISM",
            "STALINISM",
            "NAZISM"
          ]
        }
      }
    },
    {
      "id": "103",
      "nom": "M-PONTY",
      "full": "Maurice Merleau-Ponty",
      "dates": "1908-1961",
      "types": [
        "Phénoménologie",
        "Existentialisme"
      ],
      "lieu": "France",
      "era": "CONTEMPORAINE",
      "imgUrl": "https://upload.wikimedia.org/wikipedia/commons/9/98/Maurice_Merleau-Ponty.jpg",
      "stats": {
        "INFLUENCE": 82,
        "RIGUEUR": 72,
        "ANCRAGE": 65,
        "PORTÉE": 80,
        "CLÔTURE": 55,
        "CLARTÉ": 60
      },
      "fr": {
        "oeuvre": "Phénoménologie de la perception",
        "entree": "Merleau-Ponty dépasse le dualisme corps/esprit par la notion de corps propre : nous ne sommes pas un esprit qui habite un corps, mais un corps qui perçoit et comprend. La chair est l'entrelacs du percevant et du perçu.",
        "concepts": [
          {
            "nom": "LE CORPS PROPRE",
            "cat": "transcendant",
            "type": "Phénoménologie",
            "puissance": 88,
            "desc": "Bascule : ni objet ni sujet, le corps propre est la condition primordiale de toute expérience — l'intentionnalité est motrice avant d'être intellectuelle."
          },
          {
            "nom": "LA CHAIR DU MONDE",
            "cat": "immanent",
            "type": "Phénoménologie",
            "puissance": 82,
            "desc": "La chair est l'étoffe commune du percevant et du perçu — le monde n'est pas face à moi mais enveloppant, je suis partie de lui."
          },
          {
            "nom": "L'AMBIGUÏTÉ",
            "cat": "immanent",
            "type": "Existentialisme",
            "puissance": 75,
            "desc": "L'existence humaine est fondamentalement ambiguë — ni liberté absolue (Sartre) ni déterminisme — une liberté incarnée et situationnelle."
          }
        ],
        "filiation": {
          "maitres": [
            "HUSSERL",
            "HEIDEGGER",
            "GESTALTISME"
          ],
          "disciples": [
            "SCIENCES COGNITIVES INCARNÉES",
            "VARELA"
          ],
          "contre": [
            "DUALISME CARTÉSIEN",
            "SARTRE (liberté absolue)"
          ]
        }
      },
      "en": {
        "oeuvre": "Phenomenology of Perception",
        "entree": "Merleau-Ponty overcomes the body/mind dualism through the notion of the lived body: we are not a mind inhabiting a body, but a body that perceives and understands. The flesh is the intertwining of the perceiving and the perceived.",
        "concepts": [
          {
            "nom": "THE LIVED BODY",
            "cat": "transcendant",
            "type": "Phénoménologie",
            "puissance": 88,
            "desc": "A shift: neither object nor subject, the lived body is the primordial condition of all experience — intentionality is motor before it is intellectual."
          },
          {
            "nom": "THE FLESH OF THE WORLD",
            "cat": "immanent",
            "type": "Phénoménologie",
            "puissance": 82,
            "desc": "Flesh is the common fabric of the perceiving and the perceived — the world does not face me but envelops me; I am part of it."
          },
          {
            "nom": "AMBIGUITY",
            "cat": "immanent",
            "type": "Existentialisme",
            "puissance": 75,
            "desc": "Human existence is fundamentally ambiguous — neither absolute freedom (Sartre) nor determinism — an embodied, situational freedom."
          }
        ],
        "filiation": {
          "maitres": [
            "HUSSERL",
            "HEIDEGGER",
            "GESTALTISM"
          ],
          "disciples": [
            "EMBODIED COGNITIVE SCIENCE",
            "VARELA"
          ],
          "contre": [
            "CARTESIAN DUALISM",
            "SARTRE (absolute freedom)"
          ]
        }
      }
    },
    {
      "id": "104",
      "nom": "HART",
      "full": "H.L.A. Hart",
      "dates": "1907-1992",
      "types": [
        "Philo. Droit"
      ],
      "lieu": "Angleterre",
      "era": "CONTEMPORAINE",
      "imgUrl": "https://upload.wikimedia.org/wikipedia/commons/d/de/H.L.A.Hart.jpg",
      "stats": {
        "INFLUENCE": 80,
        "RIGUEUR": 88,
        "ANCRAGE": 72,
        "PORTÉE": 78,
        "CLÔTURE": 65,
        "CLARTÉ": 78
      },
      "fr": {
        "oeuvre": "Le Concept de droit",
        "entree": "Hart renouvelle le positivisme juridique en distinguant règles primaires (obligations) et règles secondaires (reconnaissance, adjudication, changement). Sa règle de reconnaissance remplace la Grundnorm kelsenienne et ouvre le débat Dworkin.",
        "concepts": [
          {
            "nom": "LA RÈGLE DE RECONNAISSANCE",
            "cat": "immanent",
            "type": "Philo. Droit",
            "puissance": 88,
            "desc": "Règle sociale de validation des normes — le fondement du droit est une pratique sociale acceptée, non une norme hypothétique kelsenienne."
          },
          {
            "nom": "RÈGLES PRIMAIRES/SECONDAIRES",
            "cat": "immanent",
            "type": "Philo. Droit",
            "puissance": 85,
            "desc": "Primaires : obligations de conduites. Secondaires : méta-règles d'identification, changement, adjudication — structure complète du système juridique."
          },
          {
            "nom": "LE TEXTE À TEXTURE OUVERTE",
            "cat": "immanent",
            "type": "Philo. Droit",
            "puissance": 78,
            "desc": "Les règles juridiques ont des cas centraux (clairement applicables) et une pénombre d'incertitude — le pouvoir discrétionnaire judiciaire est irréductible."
          }
        ],
        "filiation": {
          "maitres": [
            "J. AUSTIN",
            "WITTGSTN",
            "KELSEN (critique)"
          ],
          "disciples": [
            "DWORKIN (critique)",
            "RAZ"
          ],
          "contre": [
            "KELSEN",
            "DWORKIN (thèse de la seule bonne réponse)"
          ]
        }
      },
      "en": {
        "oeuvre": "The Concept of Law",
        "entree": "Hart renews legal positivism by distinguishing primary rules (obligations) from secondary rules (recognition, adjudication, change). His rule of recognition replaces Kelsen's Grundnorm and opens the Dworkin debate.",
        "concepts": [
          {
            "nom": "THE RULE OF RECOGNITION",
            "cat": "immanent",
            "type": "Philo. Droit",
            "puissance": 88,
            "desc": "A social rule for validating norms — the foundation of law is an accepted social practice, not a Kelsenian hypothetical norm."
          },
          {
            "nom": "PRIMARY/SECONDARY RULES",
            "cat": "immanent",
            "type": "Philo. Droit",
            "puissance": 85,
            "desc": "Primary: conduct obligations. Secondary: meta-rules of identification, change, adjudication — the complete structure of a legal system."
          },
          {
            "nom": "OPEN TEXTURE",
            "cat": "immanent",
            "type": "Philo. Droit",
            "puissance": 78,
            "desc": "Legal rules have core cases (clearly applicable) and a penumbra of uncertainty — judicial discretion is irreducible."
          }
        ],
        "filiation": {
          "maitres": [
            "J. AUSTIN",
            "WITTGSTN",
            "KELSEN (critique)"
          ],
          "disciples": [
            "DWORKIN (critique)",
            "RAZ"
          ],
          "contre": [
            "KELSEN",
            "DWORKIN (one-right-answer thesis)"
          ]
        }
      }
    },
    {
      "id": "105",
      "nom": "AYER",
      "full": "A.J. Ayer",
      "dates": "1910-1989",
      "types": [
        "Positivisme",
        "Empirisme"
      ],
      "lieu": "Angleterre",
      "era": "CONTEMPORAINE",
      "imgUrl": "https://upload.wikimedia.org/wikipedia/commons/2/2f/Alfred_Jules_Ayer.png",
      "stats": {
        "INFLUENCE": 72,
        "RIGUEUR": 78,
        "ANCRAGE": 60,
        "PORTÉE": 78,
        "CLÔTURE": 50,
        "CLARTÉ": 85
      },
      "fr": {
        "oeuvre": "Langage, vérité et logique",
        "entree": "Ayer popularise le positivisme logique en Angleterre. Les énoncés qui ne peuvent être vérifiés empiriquement ni être analytiquement vrais sont dépourvus de sens — ce qui élimine la métaphysique, la théologie et même l'éthique comme non-cognitif.",
        "concepts": [
          {
            "nom": "LE PRINCIPE DE VÉRIFICATION",
            "cat": "transcendant",
            "type": "Positivisme",
            "puissance": 85,
            "desc": "Bascule : un énoncé n'a de sens que s'il peut être vérifié empiriquement ou s'il est analytique — la métaphysique est un non-sens littéral."
          },
          {
            "nom": "L'ÉMOTIVISME MORAL",
            "cat": "immanent",
            "type": "Empirisme",
            "puissance": 80,
            "desc": "Les énoncés moraux n'expriment pas de faits mais des émotions et des prescriptions — l'éthique n'est pas cognitive."
          },
          {
            "nom": "LE PHÉNOMÉNALISME",
            "cat": "immanent",
            "type": "Empirisme",
            "puissance": 72,
            "desc": "Les objets physiques sont des constructions logiques à partir de données sensorielles immédiates — empirisme radical."
          }
        ],
        "filiation": {
          "maitres": [
            "CARNAP",
            "RUSSELL",
            "HUME"
          ],
          "disciples": [
            "PHILOSOPHIE ANALYTIQUE ANGLAISE"
          ],
          "contre": [
            "MÉTAPHYSIQUE",
            "ÉTHIQUE COGNITIVE",
            "THÉOLOGIE"
          ]
        }
      },
      "en": {
        "oeuvre": "Language, Truth and Logic",
        "entree": "Ayer popularizes logical positivism in England. Statements that can neither be empirically verified nor analytically true are meaningless — eliminating metaphysics, theology, and even ethics as non-cognitive.",
        "concepts": [
          {
            "nom": "THE VERIFICATION PRINCIPLE",
            "cat": "transcendant",
            "type": "Positivisme",
            "puissance": 85,
            "desc": "A shift: a statement has meaning only if it can be empirically verified or is analytic — metaphysics is literally nonsense."
          },
          {
            "nom": "MORAL EMOTIVISM",
            "cat": "immanent",
            "type": "Empirisme",
            "puissance": 80,
            "desc": "Moral statements do not express facts but emotions and prescriptions — ethics is not cognitive."
          },
          {
            "nom": "PHENOMENALISM",
            "cat": "immanent",
            "type": "Empirisme",
            "puissance": 72,
            "desc": "Physical objects are logical constructions from immediate sensory data — radical empiricism."
          }
        ],
        "filiation": {
          "maitres": [
            "CARNAP",
            "RUSSELL",
            "HUME"
          ],
          "disciples": [
            "ENGLISH ANALYTIC PHILOSOPHY"
          ],
          "contre": [
            "METAPHYSICS",
            "COGNITIVE ETHICS",
            "THEOLOGY"
          ]
        }
      }
    },
    {
      "id": "106",
      "nom": "JL.AUSTIN",
      "full": "J.L. Austin",
      "dates": "1911-1960",
      "types": [
        "Philo. Langage"
      ],
      "lieu": "Angleterre",
      "era": "CONTEMPORAINE",
      "imgUrl": "https://upload.wikimedia.org/wikipedia/en/f/f1/J._L._Austin_%28philosopher%29_1951.jpg",
      "stats": {
        "INFLUENCE": 78,
        "RIGUEUR": 85,
        "ANCRAGE": 70,
        "PORTÉE": 75,
        "CLÔTURE": 62,
        "CLARTÉ": 72
      },
      "fr": {
        "oeuvre": "Quand dire, c'est faire",
        "entree": "Austin découvre les actes de langage : dire n'est pas seulement décrire mais faire — promettre, ordonner, marier sont des performatifs. Sa théorie des actes illocutoires révolutionne la linguistique et la philosophie du langage.",
        "concepts": [
          {
            "nom": "LES ACTES DE LANGAGE",
            "cat": "transcendant",
            "type": "Philo. Langage",
            "puissance": 92,
            "desc": "Bascule : le langage ne sert pas seulement à décrire mais à agir — promettre, ordonner, déclarer sont des actes, non des descriptions."
          },
          {
            "nom": "LOCUTOIRE/ILLOCUTOIRE/PERLOCUTOIRE",
            "cat": "immanent",
            "type": "Philo. Langage",
            "puissance": 85,
            "desc": "Trois dimensions de l'acte de parole : dire quelque chose (locutoire), faire quelque chose en disant (illocutoire), produire un effet (perlocutoire)."
          },
          {
            "nom": "LE PERFORMATIF",
            "cat": "immanent",
            "type": "Philo. Langage",
            "puissance": 80,
            "desc": "Certains énoncés font ce qu'ils disent — 'je vous déclare mariés' accomplit le mariage, non le décrit."
          }
        ],
        "filiation": {
          "maitres": [
            "MOORE",
            "WITTGSTN (usage)"
          ],
          "disciples": [
            "SEARLE",
            "HABERMAS (actes de langage)"
          ],
          "contre": [
            "POSITIVISME LOGIQUE",
            "RÉDUCTIONNISME VÉRIFICATIONISTE"
          ]
        }
      },
      "en": {
        "oeuvre": "How to Do Things with Words",
        "entree": "Austin discovers speech acts: saying is not only describing but doing — promising, ordering, marrying are performatives. His theory of illocutionary acts revolutionizes linguistics and philosophy of language.",
        "concepts": [
          {
            "nom": "SPEECH ACTS",
            "cat": "transcendant",
            "type": "Philo. Langage",
            "puissance": 92,
            "desc": "A shift: language does not only describe but acts — promising, ordering, declaring are acts, not descriptions."
          },
          {
            "nom": "LOCUTIONARY/ILLOCUTIONARY/PERLOCUTIONARY",
            "cat": "immanent",
            "type": "Philo. Langage",
            "puissance": 85,
            "desc": "Three dimensions of the speech act: saying something (locutionary), doing something in saying (illocutionary), producing an effect (perlocutionary)."
          },
          {
            "nom": "THE PERFORMATIVE",
            "cat": "immanent",
            "type": "Philo. Langage",
            "puissance": 80,
            "desc": "Certain utterances do what they say — 'I now pronounce you married' accomplishes the marriage, does not describe it."
          }
        ],
        "filiation": {
          "maitres": [
            "MOORE",
            "WITTGSTN (usage)"
          ],
          "disciples": [
            "SEARLE",
            "HABERMAS (speech acts)"
          ],
          "contre": [
            "LOGICAL POSITIVISM",
            "VERIFICATIONIST REDUCTIONISM"
          ]
        }
      }
    },
    {
      "id": "107",
      "nom": "GOMBRICH",
      "full": "Ernst Gombrich",
      "dates": "1909-2001",
      "types": [
        "Esthétique",
        "Philo. Sciences"
      ],
      "lieu": "Autriche / Angleterre",
      "era": "CONTEMPORAINE",
      "imgUrl": "https://upload.wikimedia.org/wikipedia/commons/d/d4/Ernst_Gombrich.JPG",
      "stats": {
        "INFLUENCE": 75,
        "RIGUEUR": 78,
        "ANCRAGE": 72,
        "PORTÉE": 72,
        "CLÔTURE": 62,
        "CLARTÉ": 82
      },
      "fr": {
        "oeuvre": "L'Art et l'illusion",
        "entree": "Gombrich révolutionne l'histoire de l'art en y appliquant la psychologie de la perception. Il n'y a pas d'œil innocent — toute perception visuelle est conditionnée par des schèmes préalables. L'art est un processus de fabrication et de reconnaissance.",
        "concepts": [
          {
            "nom": "L'ŒIL INNOCENT N'EXISTE PAS",
            "cat": "transcendant",
            "type": "Esthétique",
            "puissance": 85,
            "desc": "Bascule : toute perception est médiatisée par des schèmes culturels et perceptifs — contre l'immédiateté romantique et la pureté optique."
          },
          {
            "nom": "SCHÈME ET CORRECTION",
            "cat": "immanent",
            "type": "Esthétique",
            "puissance": 80,
            "desc": "L'artiste part d'un schème existant et le corrige selon l'expérience — l'art progresse comme la science par essais et erreurs."
          },
          {
            "nom": "LA CONVENTION EN ART",
            "cat": "immanent",
            "type": "Philo. Sciences",
            "puissance": 75,
            "desc": "La représentation artistique n'est pas copie du réel mais convention symbolique — la ressemblance est construite, non naturelle."
          }
        ],
        "filiation": {
          "maitres": [
            "POPPER",
            "PSYCHOLOGIE DE LA GESTALT"
          ],
          "disciples": [
            "HISTOIRE DE L'ART CONTEMPORAINE"
          ],
          "contre": [
            "EXPRESSIONNISME PUR",
            "FORMALISME ABSOLU",
            "ŒIL INNOCENT"
          ]
        }
      },
      "en": {
        "oeuvre": "Art and Illusion",
        "entree": "Gombrich revolutionizes art history by applying perceptual psychology to it. There is no innocent eye — all visual perception is conditioned by prior schemata. Art is a process of making and matching.",
        "concepts": [
          {
            "nom": "NO INNOCENT EYE",
            "cat": "transcendant",
            "type": "Esthétique",
            "puissance": 85,
            "desc": "A shift: all perception is mediated by cultural and perceptual schemata — against Romantic immediacy and optical purity."
          },
          {
            "nom": "SCHEMA AND CORRECTION",
            "cat": "immanent",
            "type": "Esthétique",
            "puissance": 80,
            "desc": "The artist starts from an existing schema and corrects it through experience — art progresses like science through trial and error."
          },
          {
            "nom": "CONVENTION IN ART",
            "cat": "immanent",
            "type": "Philo. Sciences",
            "puissance": 75,
            "desc": "Artistic representation is not a copy of reality but a symbolic convention — resemblance is constructed, not natural."
          }
        ],
        "filiation": {
          "maitres": [
            "POPPER",
            "GESTALT PSYCHOLOGY"
          ],
          "disciples": [
            "CONTEMPORARY ART HISTORY"
          ],
          "contre": [
            "PURE EXPRESSIONISM",
            "ABSOLUTE FORMALISM",
            "INNOCENT EYE"
          ]
        }
      }
    },
    {
      "id": "108",
      "nom": "N.GOODMN",
      "full": "Nelson Goodman",
      "dates": "1906-1998",
      "types": [
        "Esthétique",
        "Constructivisme"
      ],
      "lieu": "États-Unis",
      "era": "CONTEMPORAINE",
      "imgUrl": "https://upload.wikimedia.org/wikipedia/en/9/9d/Nelson_Goodman.jpg",
      "stats": {
        "INFLUENCE": 72,
        "RIGUEUR": 88,
        "ANCRAGE": 68,
        "PORTÉE": 80,
        "CLÔTURE": 58,
        "CLARTÉ": 55
      },
      "fr": {
        "oeuvre": "Langages de l'art / Façons de faire des mondes",
        "entree": "Goodman défend un pluralisme radical : il n'y a pas un monde mais des versions-de-monde construites par des systèmes symboliques différents. L'art comme la science produit des mondes. Les critères esthétiques sont cognitifs, non émotifs.",
        "concepts": [
          {
            "nom": "LES FAÇONS DE FAIRE DES MONDES",
            "cat": "transcendant",
            "type": "Constructivisme",
            "puissance": 85,
            "desc": "Bascule : il n'y a pas de monde unique — chaque système symbolique (science, art, perception) construit sa propre version-de-monde."
          },
          {
            "nom": "LES SYMBOLES ESTHÉTIQUES",
            "cat": "immanent",
            "type": "Esthétique",
            "puissance": 82,
            "desc": "L'art fonctionne par des systèmes de symbolisation — la peinture ne ressemble pas aux choses, elle les exemplifie ou les exprime selon des conventions."
          },
          {
            "nom": "LE PROBLÈME DE GOODMAN",
            "cat": "immanent",
            "type": "Constructivisme",
            "puissance": 78,
            "desc": "Le problème de 'grue' (vert+bleu) montre que l'induction dépend de prédicats antérieurement projetés — toute induction est convention."
          }
        ],
        "filiation": {
          "maitres": [
            "CARNAP",
            "QUINE",
            "LEWIS (C.I.)"
          ],
          "disciples": [
            "SÉMIOTIQUE DE L'ART",
            "PHILOSOPHIE DE L'ART ANALYTIQUE"
          ],
          "contre": [
            "RÉALISME NAÏF",
            "ESTHÉTIQUE ÉMOTIVISTE"
          ]
        }
      },
      "en": {
        "oeuvre": "Languages of Art / Ways of Worldmaking",
        "entree": "Goodman defends a radical pluralism: there is not one world but world-versions constructed by different symbolic systems. Art like science produces worlds. Aesthetic criteria are cognitive, not emotive.",
        "concepts": [
          {
            "nom": "WAYS OF WORLDMAKING",
            "cat": "transcendant",
            "type": "Constructivisme",
            "puissance": 85,
            "desc": "A shift: there is no single world — each symbolic system (science, art, perception) constructs its own world-version."
          },
          {
            "nom": "AESTHETIC SYMBOLS",
            "cat": "immanent",
            "type": "Esthétique",
            "puissance": 82,
            "desc": "Art operates through symbolization systems — paintings do not resemble things, they exemplify or express them according to conventions."
          },
          {
            "nom": "GOODMAN'S RIDDLE",
            "cat": "immanent",
            "type": "Constructivisme",
            "puissance": 78,
            "desc": "The 'grue' problem (green+blue) shows induction depends on previously projected predicates — all induction is convention."
          }
        ],
        "filiation": {
          "maitres": [
            "CARNAP",
            "QUINE",
            "C.I. LEWIS"
          ],
          "disciples": [
            "SEMIOTICS OF ART",
            "ANALYTIC PHILOSOPHY OF ART"
          ],
          "contre": [
            "NAIVE REALISM",
            "EMOTIVIST AESTHETICS"
          ]
        }
      }
    },
    {
      "id": "109",
      "nom": "QUINE",
      "full": "W.V.O. Quine",
      "dates": "1908-2000",
      "types": [
        "Empirisme",
        "Philo. Langage"
      ],
      "lieu": "États-Unis",
      "era": "CONTEMPORAINE",
      "imgUrl": "https://upload.wikimedia.org/wikipedia/commons/c/cd/Willard_Van_Orman_Quine_on_Bluenose_II_in_Halifax_NS_harbor_1980.jpg",
      "stats": {
        "INFLUENCE": 88,
        "RIGUEUR": 92,
        "ANCRAGE": 70,
        "PORTÉE": 88,
        "CLÔTURE": 62,
        "CLARTÉ": 60
      },
      "fr": {
        "oeuvre": "Deux dogmes de l'empirisme",
        "entree": "Quine détruit les deux dogmes du positivisme : la distinction analytique/synthétique et le réductionnisme vérificationiste. Le holisme quineien : nos croyances forment un réseau, et toute révision touche l'ensemble. La traduction radicale est indéterminée.",
        "concepts": [
          {
            "nom": "CONTRE LES DEUX DOGMES",
            "cat": "transcendant",
            "type": "Empirisme",
            "puissance": 92,
            "desc": "Bascule : la distinction analytique/synthétique et le réductionnisme sont des dogmes infondés — l'empirisme doit être holistique."
          },
          {
            "nom": "LE HOLISME ÉPISTÉMIQUE",
            "cat": "immanent",
            "type": "Empirisme",
            "puissance": 88,
            "desc": "Nos croyances forment une toile — aucune assertion n'est testable isolément, toute révision touche le réseau entier."
          },
          {
            "nom": "L'INDÉTERMINATION DE LA TRADUCTION",
            "cat": "immanent",
            "type": "Philo. Langage",
            "puissance": 85,
            "desc": "Des manuels de traduction radicalement différents peuvent être compatibles avec les mêmes comportements — le sens est indéterminé."
          }
        ],
        "filiation": {
          "maitres": [
            "CARNAP (critique)",
            "FREGE",
            "DUHEM"
          ],
          "disciples": [
            "DAVIDSON",
            "PHILOSOPHIE NATURALISTE"
          ],
          "contre": [
            "CARNAP",
            "EMPIRISME ATOMISTE",
            "DUALISME SCHÈME/CONTENU"
          ]
        }
      },
      "en": {
        "oeuvre": "Two Dogmas of Empiricism",
        "entree": "Quine destroys the two dogmas of positivism: the analytic/synthetic distinction and verificational reductionism. Quinean holism: our beliefs form a web, and any revision touches the whole. Radical translation is indeterminate.",
        "concepts": [
          {
            "nom": "AGAINST THE TWO DOGMAS",
            "cat": "transcendant",
            "type": "Empirisme",
            "puissance": 92,
            "desc": "A shift: the analytic/synthetic distinction and reductionism are unfounded dogmas — empiricism must be holistic."
          },
          {
            "nom": "EPISTEMIC HOLISM",
            "cat": "immanent",
            "type": "Empirisme",
            "puissance": 88,
            "desc": "Our beliefs form a web — no assertion is testable in isolation; any revision touches the entire network."
          },
          {
            "nom": "INDETERMINACY OF TRANSLATION",
            "cat": "immanent",
            "type": "Philo. Langage",
            "puissance": 85,
            "desc": "Radically different translation manuals can be compatible with the same behaviors — meaning is indeterminate."
          }
        ],
        "filiation": {
          "maitres": [
            "CARNAP (critique)",
            "FREGE",
            "DUHEM"
          ],
          "disciples": [
            "DAVIDSON",
            "NATURALIST PHILOSOPHY"
          ],
          "contre": [
            "CARNAP",
            "ATOMIST EMPIRICISM",
            "SCHEME/CONTENT DUALISM"
          ]
        }
      }
    },
    {
      "id": "110",
      "nom": "FRANKENA",
      "full": "William Frankena",
      "dates": "1908-1994",
      "types": [
        "Éthique des Vertus",
        "Déontologie"
      ],
      "lieu": "États-Unis",
      "era": "CONTEMPORAINE",
      "imgUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/William_Frankena%2C_UM_Philosophy_Dept._Portrait.jpg/3840px-William_Frankena%2C_UM_Philosophy_Dept._Portrait.jpg",
      "stats": {
        "INFLUENCE": 52,
        "RIGUEUR": 78,
        "ANCRAGE": 70,
        "PORTÉE": 55,
        "CLÔTURE": 65,
        "CLARTÉ": 80
      },
      "fr": {
        "oeuvre": "Éthique",
        "entree": "Frankena est un métaéthicien analytique rigoureux qui cartographie les positions éthiques fondamentales. Il critique le sophisme naturaliste de Moore tout en défendant un pluralisme éthique fondé sur deux principes : bienfaisance et justice.",
        "concepts": [
          {
            "nom": "LE PLURALISME ÉTHIQUE",
            "cat": "immanent",
            "type": "Déontologie",
            "puissance": 75,
            "desc": "L'éthique requiert au moins deux principes irréductibles : la bienfaisance (faire le bien) et la justice (traiter également)."
          },
          {
            "nom": "LA CRITIQUE DU NATURALISM",
            "cat": "immanent",
            "type": "Éthique des Vertus",
            "puissance": 72,
            "desc": "Continuation du débat Moore : le sophisme naturaliste reste un problème central — distinguer faits et valeurs est nécessaire."
          },
          {
            "nom": "LA MÉTA-ÉTHIQUE ANALYTIQUE",
            "cat": "immanent",
            "type": "Déontologie",
            "puissance": 68,
            "desc": "Cartographie systématique des positions éthiques (déontologie, téléologie, intuitionnisme) — cadre conceptuel pour la philosophie morale."
          }
        ],
        "filiation": {
          "maitres": [
            "MOORE",
            "SIDGWICK",
            "KANT"
          ],
          "disciples": [
            "PHILOSOPHIE MORALE ANALYTIQUE"
          ],
          "contre": [
            "RÉDUCTIONNISME ÉTHIQUE"
          ]
        }
      },
      "en": {
        "oeuvre": "Ethics",
        "entree": "Frankena is a rigorous analytic metaethicist who maps the fundamental ethical positions. He critiques Moore's naturalistic fallacy while defending an ethical pluralism grounded in two principles: beneficence and justice.",
        "concepts": [
          {
            "nom": "ETHICAL PLURALISM",
            "cat": "immanent",
            "type": "Déontologie",
            "puissance": 75,
            "desc": "Ethics requires at least two irreducible principles: beneficence (doing good) and justice (treating equally)."
          },
          {
            "nom": "CRITIQUE OF NATURALISM",
            "cat": "immanent",
            "type": "Éthique des Vertus",
            "puissance": 72,
            "desc": "Continuation of the Moore debate: the naturalistic fallacy remains a central problem — distinguishing facts and values is necessary."
          },
          {
            "nom": "ANALYTIC META-ETHICS",
            "cat": "immanent",
            "type": "Déontologie",
            "puissance": 68,
            "desc": "Systematic mapping of ethical positions (deontology, teleology, intuitionism) — conceptual framework for moral philosophy."
          }
        ],
        "filiation": {
          "maitres": [
            "MOORE",
            "SIDGWICK",
            "KANT"
          ],
          "disciples": [
            "ANALYTIC MORAL PHILOSOPHY"
          ],
          "contre": [
            "ETHICAL REDUCTIONISM"
          ]
        }
      }
    },
    {
      "id": "111",
      "nom": "GREENBG",
      "full": "Clement Greenberg",
      "dates": "1909-1994",
      "types": [
        "Esthétique"
      ],
      "lieu": "États-Unis",
      "era": "CONTEMPORAINE",
      "imgUrl": "https://upload.wikimedia.org/wikipedia/en/c/cb/Clement_Greenberg.jpg",
      "stats": {
        "INFLUENCE": 68,
        "RIGUEUR": 62,
        "ANCRAGE": 58,
        "PORTÉE": 70,
        "CLÔTURE": 52,
        "CLARTÉ": 75
      },
      "fr": {
        "oeuvre": "Art et culture",
        "entree": "Greenberg est le théoricien du formalisme moderniste en art : chaque art doit se purifier pour n'être que lui-même. La peinture doit affirmer sa planéité. L'art moderniste est une autocritique permanente du médium.",
        "concepts": [
          {
            "nom": "LA PLANÉITÉ DE LA PEINTURE",
            "cat": "transcendant",
            "type": "Esthétique",
            "puissance": 80,
            "desc": "Bascule : la peinture moderne doit affirmer sa bidimensionnalité contre l'illusion — la vérité du médium est son programme esthétique."
          },
          {
            "nom": "L'AUTOCRITIQUE DU MÉDIUM",
            "cat": "immanent",
            "type": "Esthétique",
            "puissance": 78,
            "desc": "Chaque art se purifie en révélant et exploitant ce qui lui est propre — le modernisme est l'autocritique du médium artistique."
          },
          {
            "nom": "AVANT-GARDE ET KITSCH",
            "cat": "immanent",
            "type": "Esthétique",
            "puissance": 72,
            "desc": "L'avant-garde maintient la qualité culturelle contre le kitsch de masse — tension entre culture authentique et culture commerciale."
          }
        ],
        "filiation": {
          "maitres": [
            "KANT (esthétique)",
            "BELL"
          ],
          "disciples": [
            "EXPRESSIONNISME ABSTRAIT",
            "MINIMALISME"
          ],
          "contre": [
            "POP ART",
            "POSTMODERNISME EN ART"
          ]
        }
      },
      "en": {
        "oeuvre": "Art and Culture",
        "entree": "Greenberg is the theorist of modernist formalism in art: each art must purify itself to be only itself. Painting must affirm its flatness. Modernist art is a permanent self-critique of the medium.",
        "concepts": [
          {
            "nom": "FLATNESS OF PAINTING",
            "cat": "transcendant",
            "type": "Esthétique",
            "puissance": 80,
            "desc": "A shift: modern painting must affirm its two-dimensionality against illusion — the truth of the medium is its aesthetic program."
          },
          {
            "nom": "SELF-CRITIQUE OF MEDIUM",
            "cat": "immanent",
            "type": "Esthétique",
            "puissance": 78,
            "desc": "Each art purifies itself by revealing and exploiting what is proper to it — modernism is the self-critique of the artistic medium."
          },
          {
            "nom": "AVANT-GARDE AND KITSCH",
            "cat": "immanent",
            "type": "Esthétique",
            "puissance": 72,
            "desc": "The avant-garde maintains cultural quality against mass kitsch — tension between authentic and commercial culture."
          }
        ],
        "filiation": {
          "maitres": [
            "KANT (aesthetics)",
            "BELL"
          ],
          "disciples": [
            "ABSTRACT EXPRESSIONISM",
            "MINIMALISM"
          ],
          "contre": [
            "POP ART",
            "POSTMODERNISM IN ART"
          ]
        }
      }
    },
    {
      "id": "112",
      "nom": "SELLARS",
      "full": "Wilfrid Sellars",
      "dates": "1912-1989",
      "types": [
        "Réalisme",
        "Philo. Esprit"
      ],
      "lieu": "États-Unis",
      "era": "CONTEMPORAINE",
      "imgUrl": "https://upload.wikimedia.org/wikipedia/commons/d/d2/Wilfrid_Sellars_Faculty_Photo.jpg",
      "stats": {
        "INFLUENCE": 72,
        "RIGUEUR": 88,
        "ANCRAGE": 68,
        "PORTÉE": 80,
        "CLÔTURE": 62,
        "CLARTÉ": 38
      },
      "fr": {
        "oeuvre": "Empirisme et philosophie de l'esprit",
        "entree": "Sellars attaque le mythe du donné — l'idée que certaines données sensorielles sont épistémiquement immédiates et fondationnelles. Toute connaissance est médiatisée par des normes conceptuelles. Il distingue l'image manifeste et l'image scientifique.",
        "concepts": [
          {
            "nom": "LE MYTHE DU DONNÉ",
            "cat": "transcendant",
            "type": "Réalisme",
            "puissance": 88,
            "desc": "Bascule : il n'y a pas de données sensorielles brutes épistémiquement fondationnelles — tout le donné est conceptuellement médiatisé."
          },
          {
            "nom": "IMAGE MANIFESTE / SCIENTIFIQUE",
            "cat": "immanent",
            "type": "Philo. Esprit",
            "puissance": 82,
            "desc": "L'image manifeste (monde ordinaire des personnes) et l'image scientifique (physique) sont irréductibles mais doivent être intégrées."
          },
          {
            "nom": "L'ESPACE DES RAISONS",
            "cat": "immanent",
            "type": "Réalisme",
            "puissance": 80,
            "desc": "Les états mentaux appartiennent à l'espace des raisons (normativité), non à l'espace des causes — la psychologie n'est pas réductible à la physique."
          }
        ],
        "filiation": {
          "maitres": [
            "CARNAP",
            "KANT",
            "PEIRCE"
          ],
          "disciples": [
            "MCDOMELL",
            "RORTY",
            "BRANDOM"
          ],
          "contre": [
            "FONDATIONNISME EMPIRISTE",
            "MYTHE DU DONNÉ"
          ]
        }
      },
      "en": {
        "oeuvre": "Empiricism and the Philosophy of Mind",
        "entree": "Sellars attacks the myth of the given — the idea that certain sense data are epistemically immediate and foundational. All knowledge is mediated by conceptual norms. He distinguishes the manifest image from the scientific image.",
        "concepts": [
          {
            "nom": "THE MYTH OF THE GIVEN",
            "cat": "transcendant",
            "type": "Réalisme",
            "puissance": 88,
            "desc": "A shift: there are no epistemically foundational raw sense data — all the given is conceptually mediated."
          },
          {
            "nom": "MANIFEST/SCIENTIFIC IMAGE",
            "cat": "immanent",
            "type": "Philo. Esprit",
            "puissance": 82,
            "desc": "The manifest image (ordinary world of persons) and the scientific image (physics) are irreducible but must be integrated."
          },
          {
            "nom": "SPACE OF REASONS",
            "cat": "immanent",
            "type": "Réalisme",
            "puissance": 80,
            "desc": "Mental states belong to the space of reasons (normativity), not the space of causes — psychology is not reducible to physics."
          }
        ],
        "filiation": {
          "maitres": [
            "CARNAP",
            "KANT",
            "PEIRCE"
          ],
          "disciples": [
            "MCDOWELL",
            "RORTY",
            "BRANDOM"
          ],
          "contre": [
            "EMPIRICIST FOUNDATIONALISM",
            "MYTH OF THE GIVEN"
          ]
        }
      }
    },
    {
      "id": "113",
      "nom": "P.STRAWS",
      "full": "Peter Strawson",
      "dates": "1919-2006",
      "types": [
        "Réalisme",
        "Philo. Langage"
      ],
      "lieu": "Angleterre",
      "era": "CONTEMPORAINE",
      "imgUrl": "https://upload.wikimedia.org/wikipedia/en/7/76/P._F._Strawson.jpg",
      "stats": {
        "INFLUENCE": 72,
        "RIGUEUR": 85,
        "ANCRAGE": 72,
        "PORTÉE": 75,
        "CLÔTURE": 65,
        "CLARTÉ": 72
      },
      "fr": {
        "oeuvre": "Les Individus / Introduction à la théorie logique",
        "entree": "Strawson défend une métaphysique descriptive du sens commun. Sa critique de Russell sur les descriptions définies montre que la référence présuppose une relation au contexte. L'ontologie de base du monde ordinaire est constituée de personnes et de corps matériels.",
        "concepts": [
          {
            "nom": "LA MÉTAPHYSIQUE DESCRIPTIVE",
            "cat": "immanent",
            "type": "Réalisme",
            "puissance": 82,
            "desc": "La philosophie doit décrire la structure conceptuelle que nous utilisons pour penser le monde ordinaire — non la réviser (métaphysique révisionnaire)."
          },
          {
            "nom": "LA PRÉSUPPOSITION",
            "cat": "immanent",
            "type": "Philo. Langage",
            "puissance": 80,
            "desc": "Contre Russell : 'Le roi de France est chauve' n'est ni vrai ni faux — il présuppose l'existence du roi de France sans l'affirmer."
          },
          {
            "nom": "LES PERSONNES COMME PRIMITIFS",
            "cat": "immanent",
            "type": "Réalisme",
            "puissance": 75,
            "desc": "Les personnes sont des entités primitives irréductibles — ni corps pur ni âme pure, on leur attribue états mentaux et corporels également."
          }
        ],
        "filiation": {
          "maitres": [
            "WITTGSTN",
            "MOORE",
            "KANT"
          ],
          "disciples": [
            "PHILOSOPHIE ANALYTIQUE OXFORDIENNE"
          ],
          "contre": [
            "RUSSELL (descriptions)",
            "MÉTAPHYSIQUE RÉVISIONNAIRE"
          ]
        }
      },
      "en": {
        "oeuvre": "Individuals / Introduction to Logical Theory",
        "entree": "Strawson defends a descriptive metaphysics of common sense. His critique of Russell on definite descriptions shows that reference presupposes a relation to context. The basic ontology of the ordinary world consists of persons and material bodies.",
        "concepts": [
          {
            "nom": "DESCRIPTIVE METAPHYSICS",
            "cat": "immanent",
            "type": "Réalisme",
            "puissance": 82,
            "desc": "Philosophy should describe the conceptual structure we use to think about the ordinary world — not revise it (revisionary metaphysics)."
          },
          {
            "nom": "PRESUPPOSITION",
            "cat": "immanent",
            "type": "Philo. Langage",
            "puissance": 80,
            "desc": "Against Russell: 'The King of France is bald' is neither true nor false — it presupposes the King's existence without asserting it."
          },
          {
            "nom": "PERSONS AS PRIMITIVES",
            "cat": "immanent",
            "type": "Réalisme",
            "puissance": 75,
            "desc": "Persons are primitive irreducible entities — neither pure body nor pure soul; mental and corporeal states are attributed equally."
          }
        ],
        "filiation": {
          "maitres": [
            "WITTGSTN",
            "MOORE",
            "KANT"
          ],
          "disciples": [
            "OXFORD ANALYTIC PHILOSOPHY"
          ],
          "contre": [
            "RUSSELL (descriptions)",
            "REVISIONARY METAPHYSICS"
          ]
        }
      }
    },
    {
      "id": "114",
      "nom": "GRICE",
      "full": "Paul Grice",
      "dates": "1913-1988",
      "types": [
        "Philo. Langage"
      ],
      "lieu": "Angleterre / États-Unis",
      "era": "CONTEMPORAINE",
      "imgUrl": "https://upload.wikimedia.org/wikipedia/en/c/c4/Herbert_Paul_Grice%2C_philosopher%2C_%281913_%E2%80%93_1988%29_photograph.jpg",
      "stats": {
        "INFLUENCE": 72,
        "RIGUEUR": 88,
        "ANCRAGE": 72,
        "PORTÉE": 72,
        "CLÔTURE": 65,
        "CLARTÉ": 70
      },
      "fr": {
        "oeuvre": "Logique et conversation",
        "entree": "Grice distingue ce qu'on dit (sémantique) et ce qu'on implique (implicature). Sa théorie des maximes conversationnelles (quantité, qualité, relation, manière) explique comment nous communiquons plus que nous ne disons littéralement.",
        "concepts": [
          {
            "nom": "LES IMPLICATURES",
            "cat": "transcendant",
            "type": "Philo. Langage",
            "puissance": 85,
            "desc": "Bascule : la signification dépasse le sens littéral — nous implicaturons constamment en respectant ou violant des maximes coopératives."
          },
          {
            "nom": "LES MAXIMES CONVERSATIONNELLES",
            "cat": "immanent",
            "type": "Philo. Langage",
            "puissance": 82,
            "desc": "Quantité, qualité, relation, manière — quatre maximes implicites régissant la coopération communicative entre locuteurs."
          },
          {
            "nom": "LE PRINCIPE DE COOPÉRATION",
            "cat": "immanent",
            "type": "Philo. Langage",
            "puissance": 78,
            "desc": "Les interlocuteurs supposent mutuellement que leurs contributions sont appropriées au contexte conversationnel en cours."
          }
        ],
        "filiation": {
          "maitres": [
            "JL. AUSTIN",
            "WITTGSTN",
            "STRAWSON"
          ],
          "disciples": [
            "PRAGMATIQUE LINGUISTIQUE MODERNE",
            "SPERBER-WILSON"
          ],
          "contre": [
            "SÉMANTIQUE FORMELLE PURE"
          ]
        }
      },
      "en": {
        "oeuvre": "Logic and Conversation",
        "entree": "Grice distinguishes what is said (semantics) from what is implicated (implicature). His theory of conversational maxims (quantity, quality, relation, manner) explains how we communicate more than we literally say.",
        "concepts": [
          {
            "nom": "IMPLICATURES",
            "cat": "transcendant",
            "type": "Philo. Langage",
            "puissance": 85,
            "desc": "A shift: meaning goes beyond literal sense — we constantly implicate by respecting or flouting cooperative maxims."
          },
          {
            "nom": "CONVERSATIONAL MAXIMS",
            "cat": "immanent",
            "type": "Philo. Langage",
            "puissance": 82,
            "desc": "Quantity, quality, relation, manner — four implicit maxims governing communicative cooperation between speakers."
          },
          {
            "nom": "COOPERATION PRINCIPLE",
            "cat": "immanent",
            "type": "Philo. Langage",
            "puissance": 78,
            "desc": "Interlocutors mutually assume that their contributions are appropriate to the current conversational context."
          }
        ],
        "filiation": {
          "maitres": [
            "JL. AUSTIN",
            "WITTGSTN",
            "STRAWSON"
          ],
          "disciples": [
            "MODERN LINGUISTIC PRAGMATICS",
            "SPERBER-WILSON"
          ],
          "contre": [
            "PURE FORMAL SEMANTICS"
          ]
        }
      }
    },
    {
      "id": "115",
      "nom": "D.CAMPBL",
      "full": "Donald Campbell",
      "dates": "1916-1996",
      "types": [
        "Philo. Sciences"
      ],
      "lieu": "États-Unis",
      "era": "CONTEMPORAINE",
      "imgUrl": "https://upload.wikimedia.org/wikipedia/en/0/02/Donald_T_Campbell-lg.jpg",
      "stats": {
        "INFLUENCE": 55,
        "RIGUEUR": 75,
        "ANCRAGE": 68,
        "PORTÉE": 60,
        "CLÔTURE": 60,
        "CLARTÉ": 68
      },
      "fr": {
        "oeuvre": "Connaissance évolutionniste",
        "entree": "Campbell développe l'épistémologie évolutionniste : la connaissance évolue par variation aveugle et rétention sélective, comme les organismes biologiques. Toutes nos méthodes de connaissance sont faillibles et corrigibles.",
        "concepts": [
          {
            "nom": "L'ÉPISTÉMOLOGIE ÉVOLUTIONNISTE",
            "cat": "immanent",
            "type": "Philo. Sciences",
            "puissance": 80,
            "desc": "La connaissance évolue par variation aveugle et rétention sélective — les théories scientifiques sont soumises aux mêmes pressions sélectives que les traits biologiques."
          },
          {
            "nom": "LE RÉALISME CRITIQUE",
            "cat": "immanent",
            "type": "Philo. Sciences",
            "puissance": 75,
            "desc": "Nos théories atteignent une vérité partielle et fallible sur le monde — le réalisme est compatible avec le faillibilisme épistémique."
          },
          {
            "nom": "LE TRIANGULATION MÉTHODOLOGIQUE",
            "cat": "immanent",
            "type": "Philo. Sciences",
            "puissance": 68,
            "desc": "Converger sur un objet par plusieurs méthodes indépendantes renforce la confiance — la corroboration multi-méthodes réduit les biais."
          }
        ],
        "filiation": {
          "maitres": [
            "POPPER",
            "DARWIN",
            "JAMES"
          ],
          "disciples": [
            "ÉPISTÉMOLOGIE ÉVOLUTIONNISTE"
          ],
          "contre": [
            "RELATIVISME ÉPISTÉMIQUE",
            "CONSTRUCTIVISME RADICAL"
          ]
        }
      },
      "en": {
        "oeuvre": "Evolutionary Epistemology",
        "entree": "Campbell develops evolutionary epistemology: knowledge evolves through blind variation and selective retention, like biological organisms. All our methods of knowing are fallible and corrigible.",
        "concepts": [
          {
            "nom": "EVOLUTIONARY EPISTEMOLOGY",
            "cat": "immanent",
            "type": "Philo. Sciences",
            "puissance": 80,
            "desc": "Knowledge evolves through blind variation and selective retention — scientific theories are subject to the same selective pressures as biological traits."
          },
          {
            "nom": "CRITICAL REALISM",
            "cat": "immanent",
            "type": "Philo. Sciences",
            "puissance": 75,
            "desc": "Our theories achieve partial, fallible truth about the world — realism is compatible with epistemic fallibilism."
          },
          {
            "nom": "METHODOLOGICAL TRIANGULATION",
            "cat": "immanent",
            "type": "Philo. Sciences",
            "puissance": 68,
            "desc": "Converging on an object through multiple independent methods strengthens confidence — multi-method corroboration reduces bias."
          }
        ],
        "filiation": {
          "maitres": [
            "POPPER",
            "DARWIN",
            "JAMES"
          ],
          "disciples": [
            "EVOLUTIONARY EPISTEMOLOGY"
          ],
          "contre": [
            "EPISTEMIC RELATIVISM",
            "RADICAL CONSTRUCTIVISM"
          ]
        }
      }
    },
    {
      "id": "116",
      "nom": "BEARDSLEY",
      "full": "Monroe Beardsley",
      "dates": "1915-1985",
      "types": [
        "Esthétique"
      ],
      "lieu": "États-Unis",
      "era": "CONTEMPORAINE",
      "imgUrl": "",
      "stats": {
        "INFLUENCE": 60,
        "RIGUEUR": 78,
        "ANCRAGE": 68,
        "PORTÉE": 62,
        "CLÔTURE": 58,
        "CLARTÉ": 78
      },
      "fr": {
        "oeuvre": "Esthétique : problèmes de philosophie critique de l'art",
        "entree": "Beardsley co-formule le principe de l'intention hors-texte (la mort de l'auteur analytique) avec Wimsatt. L'œuvre d'art doit être évaluée sur ses propriétés internes, non les intentions de l'auteur. L'expérience esthétique est une fin en soi.",
        "concepts": [
          {
            "nom": "L'ERREUR INTENTIONNELLE",
            "cat": "transcendant",
            "type": "Esthétique",
            "puissance": 82,
            "desc": "Bascule : l'intention de l'auteur est hors-texte et non pertinente pour l'évaluation critique — seules les propriétés de l'œuvre comptent."
          },
          {
            "nom": "L'EXPÉRIENCE ESTHÉTIQUE",
            "cat": "immanent",
            "type": "Esthétique",
            "puissance": 78,
            "desc": "L'expérience esthétique est intense, cohérente et complexe — elle a une valeur intrinsèque irréductible aux effets psychologiques ordinaires."
          },
          {
            "nom": "L'AUTONOMIE DE L'ŒUVRE",
            "cat": "immanent",
            "type": "Esthétique",
            "puissance": 75,
            "desc": "L'œuvre d'art est un objet avec ses propres propriétés objectivement describables — l'analyse formelle prime sur la biographie."
          }
        ],
        "filiation": {
          "maitres": [
            "DEWEY",
            "NEW CRITICISM"
          ],
          "disciples": [
            "ESTHÉTIQUE ANALYTIQUE AMÉRICAINE"
          ],
          "contre": [
            "INTENTIONNALISME",
            "CRITIQUE BIOGRAPHIQUE"
          ]
        }
      },
      "en": {
        "oeuvre": "Aesthetics: Problems in the Philosophy of Criticism",
        "entree": "Beardsley co-formulates the intentional fallacy with Wimsatt. The artwork must be evaluated on its internal properties, not the author's intentions. Aesthetic experience is an end in itself.",
        "concepts": [
          {
            "nom": "THE INTENTIONAL FALLACY",
            "cat": "transcendant",
            "type": "Esthétique",
            "puissance": 82,
            "desc": "A shift: the author's intention is outside the text and irrelevant for critical evaluation — only the work's properties matter."
          },
          {
            "nom": "AESTHETIC EXPERIENCE",
            "cat": "immanent",
            "type": "Esthétique",
            "puissance": 78,
            "desc": "Aesthetic experience is intense, coherent, and complex — it has intrinsic value irreducible to ordinary psychological effects."
          },
          {
            "nom": "AUTONOMY OF THE WORK",
            "cat": "immanent",
            "type": "Esthétique",
            "puissance": 75,
            "desc": "The artwork is an object with its own objectively describable properties — formal analysis takes precedence over biography."
          }
        ],
        "filiation": {
          "maitres": [
            "DEWEY",
            "NEW CRITICISM"
          ],
          "disciples": [
            "AMERICAN ANALYTIC AESTHETICS"
          ],
          "contre": [
            "INTENTIONALISM",
            "BIOGRAPHICAL CRITICISM"
          ]
        }
      }
    },
    {
      "id": "117",
      "nom": "M.WEITZ",
      "full": "Morris Weitz",
      "dates": "1916-1981",
      "types": [
        "Esthétique"
      ],
      "lieu": "États-Unis",
      "era": "CONTEMPORAINE",
      "imgUrl": "https://upload.wikimedia.org/wikipedia/en/4/4e/Morris_Weitz_%28Philosopher%29.jpg",
      "stats": {
        "INFLUENCE": 58,
        "RIGUEUR": 75,
        "ANCRAGE": 65,
        "PORTÉE": 65,
        "CLÔTURE": 55,
        "CLARTÉ": 75
      },
      "fr": {
        "oeuvre": "Le Rôle de la théorie en esthétique",
        "entree": "Weitz applique Wittgenstein à l'esthétique : l'art est un concept à texture ouverte — il est impossible et non souhaitable de le définir. Les ressemblances de famille entre œuvres remplacent les conditions nécessaires et suffisantes.",
        "concepts": [
          {
            "nom": "L'INDÉFINISSABILITÉ DE L'ART",
            "cat": "transcendant",
            "type": "Esthétique",
            "puissance": 82,
            "desc": "Bascule : définir l'art est impossible — c'est un concept ouvert, évolutif, ne pouvant être capturé par des conditions nécessaires et suffisantes."
          },
          {
            "nom": "LES RESSEMBLANCES DE FAMILLE",
            "cat": "immanent",
            "type": "Esthétique",
            "puissance": 78,
            "desc": "Les œuvres d'art partagent des ressemblances de famille (Wittgenstein) — un réseau de traits partiels plutôt qu'une essence commune."
          },
          {
            "nom": "LA TEXTURE OUVERTE",
            "cat": "immanent",
            "type": "Esthétique",
            "puissance": 72,
            "desc": "Les concepts esthétiques sont ouverts — la créativité de l'art exige que de nouveaux cas puissent être inclus ou exclus selon les contextes."
          }
        ],
        "filiation": {
          "maitres": [
            "WITTGSTN",
            "WAISMANN"
          ],
          "disciples": [
            "ESTHÉTIQUE POST-DÉFINITIONNELLE",
            "DANTO (débat)"
          ],
          "contre": [
            "THÉORIES ESSENTIALISTES DE L'ART",
            "FORMALISME CLOS"
          ]
        }
      },
      "en": {
        "oeuvre": "The Role of Theory in Aesthetics",
        "entree": "Weitz applies Wittgenstein to aesthetics: art is an open-textured concept — it is impossible and undesirable to define it. Family resemblances between works replace necessary and sufficient conditions.",
        "concepts": [
          {
            "nom": "INDEFINABILITY OF ART",
            "cat": "transcendant",
            "type": "Esthétique",
            "puissance": 82,
            "desc": "A shift: defining art is impossible — it is an open, evolving concept that cannot be captured by necessary and sufficient conditions."
          },
          {
            "nom": "FAMILY RESEMBLANCES",
            "cat": "immanent",
            "type": "Esthétique",
            "puissance": 78,
            "desc": "Works of art share family resemblances (Wittgenstein) — a network of partial traits rather than a shared essence."
          },
          {
            "nom": "OPEN TEXTURE",
            "cat": "immanent",
            "type": "Esthétique",
            "puissance": 72,
            "desc": "Aesthetic concepts are open — the creativity of art demands that new cases can be included or excluded according to context."
          }
        ],
        "filiation": {
          "maitres": [
            "WITTGSTN",
            "WAISMANN"
          ],
          "disciples": [
            "POST-DEFINITIONAL AESTHETICS",
            "DANTO (debate)"
          ],
          "contre": [
            "ESSENTIALIST THEORIES OF ART",
            "CLOSED FORMALISM"
          ]
        }
      }
    },
    {
      "id": "118",
      "nom": "BARTHES",
      "full": "Roland Barthes",
      "dates": "1915-1980",
      "types": [
        "Structuralisme",
        "Esthétique"
      ],
      "lieu": "France",
      "era": "CONTEMPORAINE",
      "imgUrl": "https://upload.wikimedia.org/wikipedia/commons/b/bf/Roland_Barthes_ca_1970.jpg",
      "stats": {
        "INFLUENCE": 85,
        "RIGUEUR": 60,
        "ANCRAGE": 55,
        "PORTÉE": 85,
        "CLÔTURE": 48,
        "CLARTÉ": 68
      },
      "fr": {
        "oeuvre": "Mythologies / La Mort de l'auteur / Le Plaisir du texte",
        "entree": "Barthes démystifie les idéologies culturelles comme mythes naturalisés, puis proclame la mort de l'auteur : l'interprétation appartient au lecteur. Sa théorie du texte distingue plaisir (confort) et jouissance (rupture).",
        "concepts": [
          {
            "nom": "LE MYTHE COMME IDÉOLOGIE",
            "cat": "transcendant",
            "type": "Structuralisme",
            "puissance": 88,
            "desc": "Bascule : les mythes culturels transforment l'histoire en nature — la culture bourgeoise naturalise ses contingences comme évidences."
          },
          {
            "nom": "LA MORT DE L'AUTEUR",
            "cat": "transcendant",
            "type": "Esthétique",
            "puissance": 85,
            "desc": "Bascule : la naissance du lecteur doit se payer de la mort de l'Auteur — l'interprétation n'est plus liée à l'intention originale."
          },
          {
            "nom": "PLAISIR ET JOUISSANCE",
            "cat": "immanent",
            "type": "Esthétique",
            "puissance": 80,
            "desc": "Le plaisir confirme les codes culturels ; la jouissance les brise et déstabilise — deux rapports au texte fondamentalement différents."
          }
        ],
        "filiation": {
          "maitres": [
            "SAUSSURE",
            "SARTRE",
            "BRECHT"
          ],
          "disciples": [
            "ÉTUDES CULTURELLES",
            "SÉMIOLOGIE"
          ],
          "contre": [
            "CRITIQUE BIOGRAPHIQUE",
            "HERMÉNEUTIQUE INTENTIONNALISTE"
          ]
        }
      },
      "en": {
        "oeuvre": "Mythologies / The Death of the Author / The Pleasure of the Text",
        "entree": "Barthes demystifies cultural ideologies as naturalized myths, then proclaims the death of the author: interpretation belongs to the reader. His theory of the text distinguishes pleasure (comfort) from jouissance (rupture).",
        "concepts": [
          {
            "nom": "MYTH AS IDEOLOGY",
            "cat": "transcendant",
            "type": "Structuralisme",
            "puissance": 88,
            "desc": "A shift: cultural myths transform history into nature — bourgeois culture naturalizes its contingencies as self-evident."
          },
          {
            "nom": "DEATH OF THE AUTHOR",
            "cat": "transcendant",
            "type": "Esthétique",
            "puissance": 85,
            "desc": "A shift: the birth of the reader must come at the cost of the death of the Author — interpretation is no longer tied to original intent."
          },
          {
            "nom": "PLEASURE AND JOUISSANCE",
            "cat": "immanent",
            "type": "Esthétique",
            "puissance": 80,
            "desc": "Pleasure confirms cultural codes; jouissance breaks them and destabilizes — two fundamentally different relations to the text."
          }
        ],
        "filiation": {
          "maitres": [
            "SAUSSURE",
            "SARTRE",
            "BRECHT"
          ],
          "disciples": [
            "CULTURAL STUDIES",
            "SEMIOLOGY"
          ],
          "contre": [
            "BIOGRAPHICAL CRITICISM",
            "INTENTIONALIST HERMENEUTICS"
          ]
        }
      }
    },
    {
      "id": "119",
      "nom": "P.GEACH",
      "full": "Peter Geach",
      "dates": "1916-2013",
      "types": [
        "Logique",
        "Philo. Religion"
      ],
      "lieu": "Angleterre",
      "era": "CONTEMPORAINE",
      "imgUrl": "https://upload.wikimedia.org/wikipedia/en/3/3b/Philosopher_Peter_Geach_in_1990.jpg",
      "stats": {
        "INFLUENCE": 58,
        "RIGUEUR": 88,
        "ANCRAGE": 70,
        "PORTÉE": 62,
        "CLÔTURE": 65,
        "CLARTÉ": 60
      },
      "fr": {
        "oeuvre": "Référence et généralité",
        "entree": "Geach renouvelle la logique médiévale et thomiste par les outils analytiques. Il distingue prédication attributive et prédication prédicative, et met en évidence l'incomplétion des prédicats logiques. Thomiste convaincu, il défend la philosophie de la religion.",
        "concepts": [
          {
            "nom": "LA PRÉDICATION ATTRIBUTIVE",
            "cat": "immanent",
            "type": "Logique",
            "puissance": 80,
            "desc": "Distingue 'x est un grand chirurgien' (attrib.) de 'x est grand' et 'x est chirurgien' — les adjectifs attributifs ne se distribuent pas."
          },
          {
            "nom": "L'INCOMPLÉTUDE DU PRÉDICAT",
            "cat": "immanent",
            "type": "Logique",
            "puissance": 75,
            "desc": "Les prédicats logiques sont essentiellement incomplets — ils requièrent un terme sujet pour avoir une valeur de vérité déterminée."
          },
          {
            "nom": "LE RÉALISME THOMISTE",
            "cat": "immanent",
            "type": "Philo. Religion",
            "puissance": 72,
            "desc": "La métaphysique d'Aristote-Thomas d'Aquin reste viable — substance, forme, acte et puissance sont des catégories réelles."
          }
        ],
        "filiation": {
          "maitres": [
            "FREGE",
            "WITTGSTN",
            "ANSCOMBE (épouse)",
            "THOMAS D'AQUIN"
          ],
          "disciples": [
            "LOGIQUE THOMISTE CONTEMPORAINE"
          ],
          "contre": [
            "EXTENSIONNALISME PUR",
            "NATURALISME RÉDUCTEUR"
          ]
        }
      },
      "en": {
        "oeuvre": "Reference and Generality",
        "entree": "Geach renews medieval and Thomistic logic with analytic tools. He distinguishes attributive from predicative predication, and highlights the incompleteness of logical predicates. A committed Thomist, he defends philosophy of religion.",
        "concepts": [
          {
            "nom": "ATTRIBUTIVE PREDICATION",
            "cat": "immanent",
            "type": "Logique",
            "puissance": 80,
            "desc": "Distinguishes 'x is a great surgeon' (attributive) from 'x is great' and 'x is a surgeon' — attributive adjectives do not distribute."
          },
          {
            "nom": "INCOMPLETENESS OF PREDICATE",
            "cat": "immanent",
            "type": "Logique",
            "puissance": 75,
            "desc": "Logical predicates are essentially incomplete — they require a subject term to have a determinate truth value."
          },
          {
            "nom": "THOMISTIC REALISM",
            "cat": "immanent",
            "type": "Philo. Religion",
            "puissance": 72,
            "desc": "The Aristotle-Aquinas metaphysics remains viable — substance, form, act and potency are real categories."
          }
        ],
        "filiation": {
          "maitres": [
            "FREGE",
            "WITTGSTN",
            "ANSCOMBE (spouse)",
            "THOMAS AQUINAS"
          ],
          "disciples": [
            "CONTEMPORARY THOMISTIC LOGIC"
          ],
          "contre": [
            "PURE EXTENSIONALISM",
            "REDUCTIVE NATURALISM"
          ]
        }
      }
    },
    {
      "id": "120",
      "nom": "ANSCOMBE",
      "full": "G.E.M. Anscombe",
      "dates": "1919-2001",
      "types": [
        "Éthique des Vertus",
        "Philo. Esprit"
      ],
      "lieu": "Angleterre",
      "era": "CONTEMPORAINE",
      "imgUrl": "https://upload.wikimedia.org/wikipedia/en/0/02/Gertrude_Elizabeth_Margaret_Anscombe.jpg",
      "stats": {
        "INFLUENCE": 78,
        "RIGUEUR": 88,
        "ANCRAGE": 72,
        "PORTÉE": 82,
        "CLÔTURE": 65,
        "CLARTÉ": 62
      },
      "fr": {
        "oeuvre": "L'Intention / La Philosophie morale moderne",
        "entree": "Anscombe relance l'éthique des vertus avec sa critique devastatrice de la philosophie morale moderne : les concepts d'obligation et de devoir sans Dieu sont des survivances vides. Elle fonde la théorie analytique de l'intentionnalité de l'action.",
        "concepts": [
          {
            "nom": "CONTRE LA PHILOSOPHIE MORALE MODERNE",
            "cat": "transcendant",
            "type": "Éthique des Vertus",
            "puissance": 88,
            "desc": "Bascule : sans concept de législateur divin, les notions d'obligation et de devoir moral sont des survivances conceptuelles sans fondement."
          },
          {
            "nom": "L'INTENTION DE L'ACTION",
            "cat": "immanent",
            "type": "Philo. Esprit",
            "puissance": 85,
            "desc": "L'intention n'est pas un état mental précédant l'action mais une description sous laquelle l'action est délibérément effectuée."
          },
          {
            "nom": "LE FAIT BRUT VS INSTITUTIONNEL",
            "cat": "immanent",
            "type": "Philo. Esprit",
            "puissance": 78,
            "desc": "Distinction entre faits bruts (naturels) et faits institutionnels (constitués par des conventions humaines) — préfigure Searle."
          }
        ],
        "filiation": {
          "maitres": [
            "WITTGSTN",
            "THOMAS D'AQUIN",
            "ARISTOTE"
          ],
          "disciples": [
            "MACINTYRE",
            "FOOT",
            "ÉTHIQUE DES VERTUS"
          ],
          "contre": [
            "KANT (obligation)",
            "BENTHAM",
            "HARE (préscrip.)"
          ]
        }
      },
      "en": {
        "oeuvre": "Intention / Modern Moral Philosophy",
        "entree": "Anscombe relaunches virtue ethics with her devastating critique of modern moral philosophy: the concepts of obligation and duty without God are empty survivals. She founds the analytic theory of the intentionality of action.",
        "concepts": [
          {
            "nom": "AGAINST MODERN MORAL PHILOSOPHY",
            "cat": "transcendant",
            "type": "Éthique des Vertus",
            "puissance": 88,
            "desc": "A shift: without a divine legislator, the notions of moral obligation and duty are conceptual survivals without foundation."
          },
          {
            "nom": "THE INTENTION OF ACTION",
            "cat": "immanent",
            "type": "Philo. Esprit",
            "puissance": 85,
            "desc": "Intention is not a mental state preceding action but a description under which action is deliberately performed."
          },
          {
            "nom": "BRUTE vs. INSTITUTIONAL FACT",
            "cat": "immanent",
            "type": "Philo. Esprit",
            "puissance": 78,
            "desc": "Distinction between brute facts (natural) and institutional facts (constituted by human conventions) — prefigures Searle."
          }
        ],
        "filiation": {
          "maitres": [
            "WITTGSTN",
            "THOMAS AQUINAS",
            "ARISTOTLE"
          ],
          "disciples": [
            "MACINTYRE",
            "FOOT",
            "VIRTUE ETHICS"
          ],
          "contre": [
            "KANT (obligation)",
            "BENTHAM",
            "HARE (prescriptivism)"
          ]
        }
      }
    },
    {
      "id": "121",
      "nom": "P.WINCH",
      "full": "Peter Winch",
      "dates": "1926-1997",
      "types": [
        "Philo. Langage",
        "Philo. Sciences"
      ],
      "lieu": "Angleterre",
      "era": "CONTEMPORAINE",
      "imgUrl": "https://upload.wikimedia.org/wikipedia/en/9/91/Philosopher_Peter_Winch_%281926-1997%29in_1984.jpg",
      "stats": {
        "INFLUENCE": 55,
        "RIGUEUR": 72,
        "ANCRAGE": 62,
        "PORTÉE": 65,
        "CLÔTURE": 58,
        "CLARTÉ": 65
      },
      "fr": {
        "oeuvre": "L'Idée d'une science sociale",
        "entree": "Winch applique Wittgenstein aux sciences sociales : comprendre un comportement social requiert de suivre des règles de l'intérieur, non d'appliquer des lois causales. Les sciences sociales sont des disciplines interprétatives, non nomologiques.",
        "concepts": [
          {
            "nom": "LE SUIVI DE RÈGLES SOCIALES",
            "cat": "transcendant",
            "type": "Philo. Sciences",
            "puissance": 80,
            "desc": "Bascule : la vie sociale est constituée de pratiques réglées — la comprendre exige de saisir les règles de l'intérieur, non des lois causales."
          },
          {
            "nom": "LE RELATIVISME DES FORMES DE VIE",
            "cat": "immanent",
            "type": "Philo. Langage",
            "puissance": 75,
            "desc": "Chaque forme de vie a ses propres critères de sens et de rationalité — la rationalité n'est pas trans-culturelle mais interne à une pratique."
          },
          {
            "nom": "LA COMPRÉHENSION VS EXPLICATION",
            "cat": "immanent",
            "type": "Philo. Sciences",
            "puissance": 72,
            "desc": "Les sciences sociales visent la compréhension (verstehen) du sens, non l'explication causale — distinction nomologique/herméneutique."
          }
        ],
        "filiation": {
          "maitres": [
            "WITTGSTN",
            "WEBER"
          ],
          "disciples": [
            "HERMÉNEUTIQUE DES SCIENCES SOCIALES"
          ],
          "contre": [
            "POSITIVISME EN SCIENCES SOCIALES",
            "POPPER (naturalisme social)"
          ]
        }
      },
      "en": {
        "oeuvre": "The Idea of a Social Science",
        "entree": "Winch applies Wittgenstein to the social sciences: understanding social behavior requires following rules from the inside, not applying causal laws. Social sciences are interpretive, not nomological disciplines.",
        "concepts": [
          {
            "nom": "FOLLOWING SOCIAL RULES",
            "cat": "transcendant",
            "type": "Philo. Sciences",
            "puissance": 80,
            "desc": "A shift: social life is constituted by rule-governed practices — understanding it requires grasping rules from the inside, not causal laws."
          },
          {
            "nom": "RELATIVISM OF FORMS OF LIFE",
            "cat": "immanent",
            "type": "Philo. Langage",
            "puissance": 75,
            "desc": "Each form of life has its own criteria of sense and rationality — rationality is not trans-cultural but internal to a practice."
          },
          {
            "nom": "UNDERSTANDING vs EXPLANATION",
            "cat": "immanent",
            "type": "Philo. Sciences",
            "puissance": 72,
            "desc": "Social sciences aim at understanding (verstehen) of meaning, not causal explanation — nomological/hermeneutic distinction."
          }
        ],
        "filiation": {
          "maitres": [
            "WITTGSTN",
            "WEBER"
          ],
          "disciples": [
            "HERMENEUTICS OF SOCIAL SCIENCE"
          ],
          "contre": [
            "POSITIVISM IN SOCIAL SCIENCE",
            "POPPER (social naturalism)"
          ]
        }
      }
    },
    {
      "id": "122",
      "nom": "DAVIDSON",
      "full": "Donald Davidson",
      "dates": "1917-2003",
      "types": [
        "Philo. Langage",
        "Philo. Esprit"
      ],
      "lieu": "États-Unis",
      "era": "CONTEMPORAINE",
      "imgUrl": "https://upload.wikimedia.org/wikipedia/en/6/6a/Davidson_pyke.jpg",
      "stats": {
        "INFLUENCE": 80,
        "RIGUEUR": 90,
        "ANCRAGE": 70,
        "PORTÉE": 82,
        "CLÔTURE": 65,
        "CLARTÉ": 52
      },
      "fr": {
        "oeuvre": "Vérité et interprétation",
        "entree": "Davidson développe une théorie de la vérité et du sens fondée sur Tarski, et une philosophie de l'esprit non réductive (monisme anomal). Les événements mentaux sont identiques à des événements physiques mais ne se placent pas sous des lois strictes.",
        "concepts": [
          {
            "nom": "LE MONISME ANOMAL",
            "cat": "transcendant",
            "type": "Philo. Esprit",
            "puissance": 85,
            "desc": "Bascule : les événements mentaux sont des événements physiques mais il n'y a pas de lois psychophysiques strictes — élimine le dualisme sans réduire le mental."
          },
          {
            "nom": "L'INTERPRÉTATION RADICALE",
            "cat": "immanent",
            "type": "Philo. Langage",
            "puissance": 82,
            "desc": "Comprendre une langue requiert de supposer la charité maximale — attribuer des croyances vraies en priorité pour rendre le comportement rationnel."
          },
          {
            "nom": "LE TRIANGULATION",
            "cat": "immanent",
            "type": "Philo. Esprit",
            "puissance": 78,
            "desc": "L'esprit, le monde et l'autre agent forment un triangle — la pensée et la signification n'émergent que dans des interactions triangulaires."
          }
        ],
        "filiation": {
          "maitres": [
            "TARSKI",
            "QUINE",
            "WITTGSTN"
          ],
          "disciples": [
            "PHILOSOPHIE DE L'ESPRIT ANALYTIQUE",
            "MCDOMELL"
          ],
          "contre": [
            "DUALISME",
            "RÉDUCTIONNISME PHYSICALISTE STRICT"
          ]
        }
      },
      "en": {
        "oeuvre": "Truth and Interpretation",
        "entree": "Davidson develops a truth-based theory of meaning grounded in Tarski, and a non-reductive philosophy of mind (anomalous monism). Mental events are identical to physical events but do not fall under strict laws.",
        "concepts": [
          {
            "nom": "ANOMALOUS MONISM",
            "cat": "transcendant",
            "type": "Philo. Esprit",
            "puissance": 85,
            "desc": "A shift: mental events are physical events but there are no strict psychophysical laws — eliminates dualism without reducing the mental."
          },
          {
            "nom": "RADICAL INTERPRETATION",
            "cat": "immanent",
            "type": "Philo. Langage",
            "puissance": 82,
            "desc": "Understanding a language requires assuming maximal charity — attributing true beliefs by default to render behavior rational."
          },
          {
            "nom": "TRIANGULATION",
            "cat": "immanent",
            "type": "Philo. Esprit",
            "puissance": 78,
            "desc": "Mind, world, and the other agent form a triangle — thought and meaning emerge only in triangular interactions."
          }
        ],
        "filiation": {
          "maitres": [
            "TARSKI",
            "QUINE",
            "WITTGSTN"
          ],
          "disciples": [
            "ANALYTIC PHILOSOPHY OF MIND",
            "MCDOWELL"
          ],
          "contre": [
            "DUALISM",
            "STRICT PHYSICALIST REDUCTIONISM"
          ]
        }
      }
    },
    {
      "id": "123",
      "nom": "MELDEN",
      "full": "Abraham Melden",
      "dates": "1910-1991",
      "types": [
        "Philo. Esprit",
        "Éthique des Vertus"
      ],
      "lieu": "États-Unis",
      "era": "CONTEMPORAINE",
      "imgUrl": "",
      "stats": {
        "INFLUENCE": 42,
        "RIGUEUR": 72,
        "ANCRAGE": 65,
        "PORTÉE": 52,
        "CLÔTURE": 58,
        "CLARTÉ": 68
      },
      "fr": {
        "oeuvre": "Actions libres",
        "entree": "Melden défend que les actions humaines ne sont pas des mouvements causés par des états mentaux préalables, mais des comportements constitués par des intentions — la causalité mentale est conceptuellement inappropriée pour les actions.",
        "concepts": [
          {
            "nom": "L'ACTION VS LE MOUVEMENT",
            "cat": "immanent",
            "type": "Philo. Esprit",
            "puissance": 75,
            "desc": "Les actions ne sont pas des mouvements causés par des désirs — elles sont constituées conceptuellement par des intentions."
          },
          {
            "nom": "CONTRE LA CAUSALITÉ MENTALE",
            "cat": "transcendant",
            "type": "Philo. Esprit",
            "puissance": 72,
            "desc": "Bascule : la causalité est une relation nomologique — les raisons ne peuvent pas être des causes au sens scientifique strict."
          },
          {
            "nom": "LES DROITS COMME RELATIONS",
            "cat": "immanent",
            "type": "Éthique des Vertus",
            "puissance": 65,
            "desc": "Les droits ne sont pas des propriétés abstraites mais des relations entre personnes au sein de pratiques sociales concrètes."
          }
        ],
        "filiation": {
          "maitres": [
            "WITTGSTN",
            "RYLE",
            "ANSCOMBE"
          ],
          "disciples": [
            "PHILOSOPHIE DE L'ACTION"
          ],
          "contre": [
            "CAUSALISME EN PHILOSOPHIE DE L'ACTION",
            "HUME (causalité des désirs)"
          ]
        }
      },
      "en": {
        "oeuvre": "Free Action",
        "entree": "Melden argues that human actions are not movements caused by prior mental states, but behaviors constituted by intentions — mental causation is conceptually inappropriate for actions.",
        "concepts": [
          {
            "nom": "ACTION vs MOVEMENT",
            "cat": "immanent",
            "type": "Philo. Esprit",
            "puissance": 75,
            "desc": "Actions are not movements caused by desires — they are conceptually constituted by intentions."
          },
          {
            "nom": "AGAINST MENTAL CAUSATION",
            "cat": "transcendant",
            "type": "Philo. Esprit",
            "puissance": 72,
            "desc": "A shift: causality is a nomological relation — reasons cannot be causes in the strict scientific sense."
          },
          {
            "nom": "RIGHTS AS RELATIONS",
            "cat": "immanent",
            "type": "Éthique des Vertus",
            "puissance": 65,
            "desc": "Rights are not abstract properties but relations between persons within concrete social practices."
          }
        ],
        "filiation": {
          "maitres": [
            "WITTGSTN",
            "RYLE",
            "ANSCOMBE"
          ],
          "disciples": [
            "PHILOSOPHY OF ACTION"
          ],
          "contre": [
            "CAUSALISM IN PHILOSOPHY OF ACTION",
            "HUME (desire causation)"
          ]
        }
      }
    },
    {
      "id": "124",
      "nom": "JJC.SMRT",
      "full": "J.J.C. Smart",
      "dates": "1920-2012",
      "types": [
        "Utilitarisme",
        "Philo. Esprit"
      ],
      "lieu": "Australie",
      "era": "CONTEMPORAINE",
      "imgUrl": "https://upload.wikimedia.org/wikipedia/en/1/17/JJC_Smart.jpg",
      "stats": {
        "INFLUENCE": 65,
        "RIGUEUR": 80,
        "ANCRAGE": 68,
        "PORTÉE": 70,
        "CLÔTURE": 60,
        "CLARTÉ": 75
      },
      "fr": {
        "oeuvre": "Une théorie de l'esprit / Utilitarisme : pour et contre",
        "entree": "Smart défend la théorie de l'identité psychophysique : les états mentaux sont identiques à des états cérébraux. En éthique, il défend l'utilitarisme de l'acte contre l'utilitarisme de la règle.",
        "concepts": [
          {
            "nom": "LA THÉORIE DE L'IDENTITÉ",
            "cat": "transcendant",
            "type": "Philo. Esprit",
            "puissance": 82,
            "desc": "Bascule matérialiste : les états mentaux (douleur, etc.) sont identiques à des états neurologiques — réductionnisme psychophysique direct."
          },
          {
            "nom": "L'UTILITARISME DE L'ACTE",
            "cat": "immanent",
            "type": "Utilitarisme",
            "puissance": 78,
            "desc": "Chaque acte doit être évalué directement par ses conséquences pour le bonheur total — sans médiation par des règles générales."
          },
          {
            "nom": "LE RÉALISME SCIENTIFIQUE",
            "cat": "immanent",
            "type": "Réalisme",
            "puissance": 72,
            "desc": "Les entités théoriques de la science existent réellement — l'électron est aussi réel que la table."
          }
        ],
        "filiation": {
          "maitres": [
            "BENTHAM",
            "RYLE (critique)",
            "CARNAP"
          ],
          "disciples": [
            "MATÉRIALISME AUSTRALIEN",
            "LEWIS"
          ],
          "contre": [
            "DUALISME",
            "UTILITARISME DE LA RÈGLE"
          ]
        }
      },
      "en": {
        "oeuvre": "An Outline of a System of Utilitarian Ethics / Utilitarianism For and Against",
        "entree": "Smart defends the mind-brain identity theory: mental states are identical to brain states. In ethics, he defends act utilitarianism against rule utilitarianism.",
        "concepts": [
          {
            "nom": "IDENTITY THEORY",
            "cat": "transcendant",
            "type": "Philo. Esprit",
            "puissance": 82,
            "desc": "A materialist shift: mental states (pain, etc.) are identical to neurological states — direct psychophysical reductionism."
          },
          {
            "nom": "ACT UTILITARIANISM",
            "cat": "immanent",
            "type": "Utilitarisme",
            "puissance": 78,
            "desc": "Each act must be evaluated directly by its consequences for total happiness — without mediation by general rules."
          },
          {
            "nom": "SCIENTIFIC REALISM",
            "cat": "immanent",
            "type": "Réalisme",
            "puissance": 72,
            "desc": "The theoretical entities of science really exist — the electron is as real as the table."
          }
        ],
        "filiation": {
          "maitres": [
            "BENTHAM",
            "RYLE (critique)",
            "CARNAP"
          ],
          "disciples": [
            "AUSTRALIAN MATERIALISM",
            "LEWIS"
          ],
          "contre": [
            "DUALISM",
            "RULE UTILITARIANISM"
          ]
        }
      }
    },
    {
      "id": "125",
      "nom": "HARE",
      "full": "Richard Hare",
      "dates": "1919-2002",
      "types": [
        "Déontologie",
        "Utilitarisme"
      ],
      "lieu": "Angleterre",
      "era": "CONTEMPORAINE",
      "imgUrl": "https://upload.wikimedia.org/wikipedia/commons/2/2d/R._M._Hare_%28c._1988%29.png",
      "stats": {
        "INFLUENCE": 68,
        "RIGUEUR": 82,
        "ANCRAGE": 65,
        "PORTÉE": 70,
        "CLÔTURE": 60,
        "CLARTÉ": 72
      },
      "fr": {
        "oeuvre": "Le Langage de la morale",
        "entree": "Hare développe le prescriptivisme universel : les jugements moraux sont universellement prescriptifs — dire 'x est bien' implique prescriptions universelles. Ce formalisme mène finalement à une convergence avec l'utilitarisme préférentiel.",
        "concepts": [
          {
            "nom": "LE PRESCRIPTIVISME UNIVERSEL",
            "cat": "transcendant",
            "type": "Déontologie",
            "puissance": 82,
            "desc": "Bascule méta-éthique : les jugements moraux sont prescriptifs et universalisables — la logique du 'dois' diffère de celle du 'est'."
          },
          {
            "nom": "L'UNIVERSALISABILITÉ",
            "cat": "immanent",
            "type": "Déontologie",
            "puissance": 80,
            "desc": "Toute évaluation morale doit être appliquée à tous les cas similaires — condition formelle de la morale, non contenu particulier."
          },
          {
            "nom": "L'UTILITARISME PRÉFÉRENTIEL",
            "cat": "immanent",
            "type": "Utilitarisme",
            "puissance": 75,
            "desc": "Le prescriptivisme universel implique de prendre en compte les préférences de tous les affectés — convergence avec l'utilitarisme des préférences."
          }
        ],
        "filiation": {
          "maitres": [
            "KANT",
            "MOORE (critique)",
            "AYER (critique)"
          ],
          "disciples": [
            "ÉTHIQUE MÉTA-ANALYTIQUE",
            "SINGER (utilitarisme préférentiel)"
          ],
          "contre": [
            "INTUITIONNISME",
            "NATURALISME MORAL"
          ]
        }
      },
      "en": {
        "oeuvre": "The Language of Morals",
        "entree": "Hare develops universal prescriptivism: moral judgments are universally prescriptive — saying 'x is good' implies universal prescriptions. This formalism ultimately converges with preferential utilitarianism.",
        "concepts": [
          {
            "nom": "UNIVERSAL PRESCRIPTIVISM",
            "cat": "transcendant",
            "type": "Déontologie",
            "puissance": 82,
            "desc": "A meta-ethical shift: moral judgments are prescriptive and universalizable — the logic of 'ought' differs from that of 'is'."
          },
          {
            "nom": "UNIVERSALIZABILITY",
            "cat": "immanent",
            "type": "Déontologie",
            "puissance": 80,
            "desc": "Every moral evaluation must be applied to all similar cases — the formal condition of morality, not its particular content."
          },
          {
            "nom": "PREFERENCE UTILITARIANISM",
            "cat": "immanent",
            "type": "Utilitarisme",
            "puissance": 75,
            "desc": "Universal prescriptivism implies taking into account the preferences of all affected — convergence with preference utilitarianism."
          }
        ],
        "filiation": {
          "maitres": [
            "KANT",
            "MOORE (critique)",
            "AYER (critique)"
          ],
          "disciples": [
            "ANALYTIC META-ETHICS",
            "SINGER (preference utilitarianism)"
          ],
          "contre": [
            "INTUITIONISM",
            "MORAL NATURALISM"
          ]
        }
      }
    },
    {
      "id": "126",
      "nom": "MACKIE",
      "full": "John Mackie",
      "dates": "1917-1981",
      "types": [
        "Scepticisme",
        "Éthique des Vertus"
      ],
      "lieu": "Australie",
      "era": "CONTEMPORAINE",
      "imgUrl": "https://upload.wikimedia.org/wikipedia/en/7/76/John_Leslie_Mackie.jpg",
      "stats": {
        "INFLUENCE": 68,
        "RIGUEUR": 85,
        "ANCRAGE": 68,
        "PORTÉE": 80,
        "CLÔTURE": 58,
        "CLARTÉ": 78
      },
      "fr": {
        "oeuvre": "L'Éthique : inventer le bien et le mal",
        "entree": "Mackie défend l'erreur-théorie en éthique : les jugements moraux prétendent à une objectivité qui n'existe pas. Il n'y a pas de faits moraux objectifs dans le monde — toute éthique objective est une erreur, mais nous en avons besoin pour vivre ensemble.",
        "concepts": [
          {
            "nom": "LA THÉORIE DE L'ERREUR",
            "cat": "transcendant",
            "type": "Scepticisme",
            "puissance": 88,
            "desc": "Bascule nihiliste : les jugements moraux présupposent des faits moraux objectifs qui n'existent pas — l'éthique objective est systématiquement fausse."
          },
          {
            "nom": "L'ARGUMENT DE LA BIZARRERIE",
            "cat": "immanent",
            "type": "Scepticisme",
            "puissance": 82,
            "desc": "Des propriétés morales objectives seraient ontologiquement étranges (queer) — entités sui generis irréductibles au monde naturel."
          },
          {
            "nom": "L'ÉTHIQUE CONSTRUCTÉE",
            "cat": "immanent",
            "type": "Éthique des Vertus",
            "puissance": 75,
            "desc": "Même si l'éthique objective est une erreur, nous pouvons construire des normes rationnellement justifiées pour la coopération sociale."
          }
        ],
        "filiation": {
          "maitres": [
            "HUME",
            "AYER",
            "MOORE (critique)"
          ],
          "disciples": [
            "NIHILISME MORAL",
            "ERREUR-THÉORIE CONTEMPORAINE"
          ],
          "contre": [
            "RÉALISME MORAL",
            "INTUITIONNISME",
            "NATURALISME MORAL"
          ]
        }
      },
      "en": {
        "oeuvre": "Ethics: Inventing Right and Wrong",
        "entree": "Mackie defends error theory in ethics: moral judgments claim an objectivity that does not exist. There are no objective moral facts in the world — all objective ethics is an error, but we need it to live together.",
        "concepts": [
          {
            "nom": "ERROR THEORY",
            "cat": "transcendant",
            "type": "Scepticisme",
            "puissance": 88,
            "desc": "A nihilist shift: moral judgments presuppose objective moral facts that do not exist — objective ethics is systematically false."
          },
          {
            "nom": "THE ARGUMENT FROM QUEERNESS",
            "cat": "immanent",
            "type": "Scepticisme",
            "puissance": 82,
            "desc": "Objective moral properties would be ontologically strange (queer) — sui generis entities irreducible to the natural world."
          },
          {
            "nom": "CONSTRUCTED ETHICS",
            "cat": "immanent",
            "type": "Éthique des Vertus",
            "puissance": 75,
            "desc": "Even if objective ethics is an error, we can construct rationally justified norms for social cooperation."
          }
        ],
        "filiation": {
          "maitres": [
            "HUME",
            "AYER",
            "MOORE (critique)"
          ],
          "disciples": [
            "MORAL NIHILISM",
            "CONTEMPORARY ERROR THEORY"
          ],
          "contre": [
            "MORAL REALISM",
            "INTUITIONISM",
            "MORAL NATURALISM"
          ]
        }
      }
    },
    {
      "id": "127",
      "nom": "PH.FOOT",
      "full": "Philippa Foot",
      "dates": "1920-2010",
      "types": [
        "Éthique des Vertus"
      ],
      "lieu": "Angleterre",
      "era": "CONTEMPORAINE",
      "imgUrl": "https://upload.wikimedia.org/wikipedia/en/0/03/PhilippaFoot1939.jpg",
      "stats": {
        "INFLUENCE": 75,
        "RIGUEUR": 82,
        "ANCRAGE": 72,
        "PORTÉE": 78,
        "CLÔTURE": 65,
        "CLARTÉ": 75
      },
      "fr": {
        "oeuvre": "Les Vertus et les vices / La Bonté naturelle",
        "entree": "Foot réhabilite l'éthique aristotélicienne des vertus en réponse au non-cognitivisme. Sa théorie de la bonté naturelle : un être humain bon est un bon spécimen de l'espèce humaine, comme un loup qui a les qualités d'un bon loup. Le trolley problem est son invention.",
        "concepts": [
          {
            "nom": "LA BONTÉ NATURELLE",
            "cat": "transcendant",
            "type": "Éthique des Vertus",
            "puissance": 85,
            "desc": "Bascule naturaliste : la bonté humaine peut être dérivée de la nature humaine — comme pour les plantes et animaux, un bon humain est un spécimen flourishing."
          },
          {
            "nom": "LE PROBLÈME DU TRAMWAY",
            "cat": "immanent",
            "type": "Déontologie",
            "puissance": 82,
            "desc": "Expérience de pensée fondatrice de l'éthique contemporaine : peut-on rediriger un tramway pour tuer 1 en sauvant 5 ? Distinction doing/allowing."
          },
          {
            "nom": "LES VERTUS COMME BIENFAITS",
            "cat": "immanent",
            "type": "Éthique des Vertus",
            "puissance": 78,
            "desc": "Les vertus bénéficient à celui qui les possède — contre l'idée kantienne qu'une vertu pourrait nuire à son porteur."
          }
        ],
        "filiation": {
          "maitres": [
            "ARISTOTE",
            "ANSCOMBE",
            "WITTGSTN"
          ],
          "disciples": [
            "MACINTYRE",
            "THOMSON (trolley)",
            "ÉTHIQUE DES VERTUS"
          ],
          "contre": [
            "NON-COGNITIVISME",
            "HARE",
            "MACKIE"
          ]
        }
      },
      "en": {
        "oeuvre": "Virtues and Vices / Natural Goodness",
        "entree": "Foot rehabilitates Aristotelian virtue ethics in response to non-cognitivism. Her theory of natural goodness: a good human being is a good specimen of the human species, as a good wolf has the qualities of a good wolf. The trolley problem is her invention.",
        "concepts": [
          {
            "nom": "NATURAL GOODNESS",
            "cat": "transcendant",
            "type": "Éthique des Vertus",
            "puissance": 85,
            "desc": "A naturalist shift: human goodness can be derived from human nature — as with plants and animals, a good human is a flourishing specimen."
          },
          {
            "nom": "THE TROLLEY PROBLEM",
            "cat": "immanent",
            "type": "Déontologie",
            "puissance": 82,
            "desc": "Foundational thought experiment of contemporary ethics: may one redirect a trolley to kill 1 in saving 5? Doing/allowing distinction."
          },
          {
            "nom": "VIRTUES AS BENEFITS",
            "cat": "immanent",
            "type": "Éthique des Vertus",
            "puissance": 78,
            "desc": "Virtues benefit the one who possesses them — against the Kantian idea that a virtue could harm its bearer."
          }
        ],
        "filiation": {
          "maitres": [
            "ARISTOTLE",
            "ANSCOMBE",
            "WITTGSTN"
          ],
          "disciples": [
            "MACINTYRE",
            "THOMSON (trolley)",
            "VIRTUE ETHICS"
          ],
          "contre": [
            "NON-COGNITIVISM",
            "HARE",
            "MACKIE"
          ]
        }
      }
    },
    {
      "id": "128",
      "nom": "F.SIBLEY",
      "full": "Frank Sibley",
      "dates": "1923-1996",
      "types": [
        "Esthétique"
      ],
      "lieu": "Angleterre / États-Unis",
      "era": "CONTEMPORAINE",
      "imgUrl": "",
      "stats": {
        "INFLUENCE": 52,
        "RIGUEUR": 80,
        "ANCRAGE": 68,
        "PORTÉE": 60,
        "CLÔTURE": 62,
        "CLARTÉ": 72
      },
      "fr": {
        "oeuvre": "Concepts esthétiques",
        "entree": "Sibley distingue les concepts esthétiques (gracieux, élégant, délicat) des concepts non-esthétiques (rouge, triangulaire) : les premiers requièrent une sensibilité perceptive particulière — le goût — que nul argument ne peut garantir.",
        "concepts": [
          {
            "nom": "LES CONCEPTS ESTHÉTIQUES",
            "cat": "transcendant",
            "type": "Esthétique",
            "puissance": 82,
            "desc": "Bascule : certains termes (gracieux, élégant) requièrent une sensibilité particulière pour être appliqués — irréductibles à des critères non-esthétiques."
          },
          {
            "nom": "LE GOÛT COMME CONDITION",
            "cat": "immanent",
            "type": "Esthétique",
            "puissance": 78,
            "desc": "La perception esthétique n'est pas réductible à des conditions nécessaires et suffisantes — elle requiert la sensibilité du regardeur."
          },
          {
            "nom": "L'APPLICABILITÉ SANS RÈGLE",
            "cat": "immanent",
            "type": "Esthétique",
            "puissance": 72,
            "desc": "Aucune liste de conditions générales ne garantit l'applicabilité des concepts esthétiques — chaque cas exige une vision nouvelle."
          }
        ],
        "filiation": {
          "maitres": [
            "WITTGSTN",
            "KANT (jugement de goût)"
          ],
          "disciples": [
            "ESTHÉTIQUE ANALYTIQUE"
          ],
          "contre": [
            "FORMALISME RÉDUCTEUR",
            "CRITÉRIALISME ESTHÉTIQUE"
          ]
        }
      },
      "en": {
        "oeuvre": "Aesthetic Concepts",
        "entree": "Sibley distinguishes aesthetic concepts (graceful, elegant, delicate) from non-aesthetic ones (red, triangular): the former require a particular perceptive sensitivity — taste — that no argument can guarantee.",
        "concepts": [
          {
            "nom": "AESTHETIC CONCEPTS",
            "cat": "transcendant",
            "type": "Esthétique",
            "puissance": 82,
            "desc": "A shift: certain terms (graceful, elegant) require a particular sensitivity to apply — irreducible to non-aesthetic criteria."
          },
          {
            "nom": "TASTE AS CONDITION",
            "cat": "immanent",
            "type": "Esthétique",
            "puissance": 78,
            "desc": "Aesthetic perception is not reducible to necessary and sufficient conditions — it requires the sensitivity of the beholder."
          },
          {
            "nom": "APPLICATION WITHOUT RULES",
            "cat": "immanent",
            "type": "Esthétique",
            "puissance": 72,
            "desc": "No list of general conditions guarantees the applicability of aesthetic concepts — each case demands fresh vision."
          }
        ],
        "filiation": {
          "maitres": [
            "WITTGSTN",
            "KANT (judgment of taste)"
          ],
          "disciples": [
            "ANALYTIC AESTHETICS"
          ],
          "contre": [
            "REDUCTIVE FORMALISM",
            "AESTHETIC CRITERIALISM"
          ]
        }
      }
    },
    {
      "id": "129",
      "nom": "KUHN",
      "full": "Thomas Kuhn",
      "dates": "1922-1996",
      "types": [
        "Philo. Sciences",
        "Constructivisme"
      ],
      "lieu": "États-Unis",
      "era": "CONTEMPORAINE",
      "imgUrl": "https://upload.wikimedia.org/wikipedia/commons/1/10/Thomas_Kuhn_%281977%29_%28cropped%29.jpg",
      "stats": {
        "INFLUENCE": 92,
        "RIGUEUR": 68,
        "ANCRAGE": 62,
        "PORTÉE": 92,
        "CLÔTURE": 55,
        "CLARTÉ": 82
      },
      "fr": {
        "oeuvre": "La Structure des révolutions scientifiques",
        "entree": "Kuhn bouleverse l'image de la science comme progrès cumulatif. La science progresse par révolutions de paradigme : des périodes de science normale sont interrompues par des crises et des changements de paradigme incommensurables. La révolution copernicienne est son exemple central.",
        "concepts": [
          {
            "nom": "LE PARADIGME",
            "cat": "transcendant",
            "type": "Philo. Sciences",
            "puissance": 92,
            "desc": "Bascule : la science n'est pas une collection de faits mais un paradigme — une matrice disciplinaire qui définit les problèmes légitimes et les solutions acceptables."
          },
          {
            "nom": "L'INCOMMENSURABILITÉ",
            "cat": "immanent",
            "type": "Constructivisme",
            "puissance": 88,
            "desc": "Les paradigmes successifs ne peuvent être comparés objectivement — les termes changent de sens lors d'une révolution scientifique."
          },
          {
            "nom": "LA SCIENCE NORMALE",
            "cat": "immanent",
            "type": "Philo. Sciences",
            "puissance": 82,
            "desc": "La science ordinaire consiste à résoudre des problèmes sous un paradigme donné — pas à remettre en question les fondements."
          }
        ],
        "filiation": {
          "maitres": [
            "POPPER (critique)",
            "FLECK",
            "DUHEM"
          ],
          "disciples": [
            "FEYERABEND",
            "SOCIOLOGIE DES SCIENCES"
          ],
          "contre": [
            "POPPER (falsificationisme)",
            "PROGRÈS LINÉAIRE DE LA SCIENCE"
          ]
        }
      },
      "en": {
        "oeuvre": "The Structure of Scientific Revolutions",
        "entree": "Kuhn upends the image of science as cumulative progress. Science progresses through paradigm revolutions: periods of normal science are interrupted by crises and incommensurable paradigm changes. The Copernican revolution is his central example.",
        "concepts": [
          {
            "nom": "THE PARADIGM",
            "cat": "transcendant",
            "type": "Philo. Sciences",
            "puissance": 92,
            "desc": "A shift: science is not a collection of facts but a paradigm — a disciplinary matrix defining legitimate problems and acceptable solutions."
          },
          {
            "nom": "INCOMMENSURABILITY",
            "cat": "immanent",
            "type": "Constructivisme",
            "puissance": 88,
            "desc": "Successive paradigms cannot be objectively compared — terms change meaning during a scientific revolution."
          },
          {
            "nom": "NORMAL SCIENCE",
            "cat": "immanent",
            "type": "Philo. Sciences",
            "puissance": 82,
            "desc": "Ordinary science consists in solving puzzles under a given paradigm — not questioning the foundations."
          }
        ],
        "filiation": {
          "maitres": [
            "POPPER (critique)",
            "FLECK",
            "DUHEM"
          ],
          "disciples": [
            "FEYERABEND",
            "SOCIOLOGY OF SCIENCE"
          ],
          "contre": [
            "POPPER (falsificationism)",
            "LINEAR PROGRESS OF SCIENCE"
          ]
        }
      }
    },
    {
      "id": "130",
      "nom": "LAKATOS",
      "full": "Imre Lakatos",
      "dates": "1922-1974",
      "types": [
        "Philo. Sciences"
      ],
      "lieu": "Hongrie / Angleterre",
      "era": "CONTEMPORAINE",
      "imgUrl": "https://upload.wikimedia.org/wikipedia/commons/c/c0/Professor_Imre_Lakatos%2C_c1960s.jpg",
      "stats": {
        "INFLUENCE": 72,
        "RIGUEUR": 85,
        "ANCRAGE": 68,
        "PORTÉE": 72,
        "CLÔTURE": 62,
        "CLARTÉ": 68
      },
      "fr": {
        "oeuvre": "Preuves et réfutations / La Méthodologie des programmes de recherche scientifiques",
        "entree": "Lakatos synthétise Popper et Kuhn : la science progresse par programmes de recherche, chacun avec un noyau dur protégé par une ceinture auxiliaire d'hypothèses. Un programme est dégénératif ou progressif selon qu'il recule ou avance.",
        "concepts": [
          {
            "nom": "LE PROGRAMME DE RECHERCHE",
            "cat": "immanent",
            "type": "Philo. Sciences",
            "puissance": 85,
            "desc": "Unité d'analyse de la science : un noyau dur d'hypothèses irréfutables entouré d'une ceinture auxiliaire modifiable — science comme stratégie."
          },
          {
            "nom": "NOYAU DUR / CEINTURE AUXILIAIRE",
            "cat": "immanent",
            "type": "Philo. Sciences",
            "puissance": 82,
            "desc": "Le noyau est protégé par convention des réfutations — seule la ceinture auxiliaire absorbe les anomalies."
          },
          {
            "nom": "DÉGÉNÉRATIF vs PROGRESSIF",
            "cat": "immanent",
            "type": "Philo. Sciences",
            "puissance": 78,
            "desc": "Un programme régressif produit des hypothèses ad hoc sans nouvelles prédictions ; un programme progressif prédit des faits nouveaux."
          }
        ],
        "filiation": {
          "maitres": [
            "POPPER",
            "KUHN",
            "POLYA"
          ],
          "disciples": [
            "PHILOSOPHIE DES SCIENCES CONTEMPORAINE"
          ],
          "contre": [
            "FEYERABEND (critique)",
            "FALSIFICATIONISME NAÏF"
          ]
        }
      },
      "en": {
        "oeuvre": "Proofs and Refutations / The Methodology of Scientific Research Programmes",
        "entree": "Lakatos synthesizes Popper and Kuhn: science progresses through research programs, each with a hard core protected by an auxiliary belt of hypotheses. A program is degenerative or progressive depending on whether it retreats or advances.",
        "concepts": [
          {
            "nom": "THE RESEARCH PROGRAM",
            "cat": "immanent",
            "type": "Philo. Sciences",
            "puissance": 85,
            "desc": "The unit of analysis for science: a hard core of irrefutable hypotheses surrounded by a modifiable protective belt — science as strategy."
          },
          {
            "nom": "HARD CORE / PROTECTIVE BELT",
            "cat": "immanent",
            "type": "Philo. Sciences",
            "puissance": 82,
            "desc": "The core is conventionally protected from refutations — only the auxiliary belt absorbs anomalies."
          },
          {
            "nom": "DEGENERATIVE vs PROGRESSIVE",
            "cat": "immanent",
            "type": "Philo. Sciences",
            "puissance": 78,
            "desc": "A regressive program produces ad hoc hypotheses without new predictions; a progressive one predicts novel facts."
          }
        ],
        "filiation": {
          "maitres": [
            "POPPER",
            "KUHN",
            "POLYA"
          ],
          "disciples": [
            "CONTEMPORARY PHILOSOPHY OF SCIENCE"
          ],
          "contre": [
            "FEYERABEND (critique)",
            "NAIVE FALSIFICATIONISM"
          ]
        }
      }
    },
    {
      "id": "131",
      "nom": "FEYERABND",
      "full": "Paul Feyerabend",
      "dates": "1924-1994",
      "types": [
        "Philo. Sciences",
        "Anarchisme"
      ],
      "lieu": "Autriche / États-Unis",
      "era": "CONTEMPORAINE",
      "imgUrl": "https://upload.wikimedia.org/wikipedia/commons/e/e2/Paul_Feyerabend_Berkeley.jpg",
      "stats": {
        "INFLUENCE": 72,
        "RIGUEUR": 55,
        "ANCRAGE": 42,
        "PORTÉE": 82,
        "CLÔTURE": 35,
        "CLARTÉ": 78
      },
      "fr": {
        "oeuvre": "Contre la méthode",
        "entree": "Feyerabend prône un anarchisme épistémologique : « tout est bon » (anything goes). Il n'y a pas de méthode scientifique universelle — Galilée a réussi en violant les règles. La science n'est pas supérieure aux autres formes de connaissance.",
        "concepts": [
          {
            "nom": "ANYTHING GOES",
            "cat": "transcendant",
            "type": "Anarchisme",
            "puissance": 88,
            "desc": "Bascule : aucune règle méthodologique n'est universellement valide — les grandes avancées scientifiques ont toujours violé les règles établies."
          },
          {
            "nom": "L'ANARCHISME ÉPISTÉMOLOGIQUE",
            "cat": "immanent",
            "type": "Philo. Sciences",
            "puissance": 82,
            "desc": "La prolifération de théories alternatives est bénéfique à la science — un pluralisme méthodologique radical contre le monisme méthodologique."
          },
          {
            "nom": "CONTRE LE SCIENTISME",
            "cat": "transcendant",
            "type": "Anarchisme",
            "puissance": 80,
            "desc": "La science est une idéologie parmi d'autres — l'État devrait être séparé de la science comme il l'est de l'Église."
          }
        ],
        "filiation": {
          "maitres": [
            "POPPER (critique)",
            "LAKATOS (ami)",
            "KUHN"
          ],
          "disciples": [
            "RELATIVISME ÉPISTÉMOLOGIQUE",
            "ÉTUDES SOCIOLOGIQUES DES SCIENCES"
          ],
          "contre": [
            "POPPER",
            "LAKATOS",
            "RATIONALISME MÉTHODOLOGIQUE"
          ]
        }
      },
      "en": {
        "oeuvre": "Against Method",
        "entree": "Feyerabend advocates epistemic anarchism: 'anything goes'. There is no universal scientific method — Galileo succeeded by violating the rules. Science is not superior to other forms of knowledge.",
        "concepts": [
          {
            "nom": "ANYTHING GOES",
            "cat": "transcendant",
            "type": "Anarchisme",
            "puissance": 88,
            "desc": "A shift: no methodological rule is universally valid — the great advances in science always violated established rules."
          },
          {
            "nom": "EPISTEMIC ANARCHISM",
            "cat": "immanent",
            "type": "Philo. Sciences",
            "puissance": 82,
            "desc": "Proliferation of alternative theories benefits science — a radical methodological pluralism against methodological monism."
          },
          {
            "nom": "AGAINST SCIENTISM",
            "cat": "transcendant",
            "type": "Anarchisme",
            "puissance": 80,
            "desc": "Science is an ideology among others — the state should be separated from science as it is from the church."
          }
        ],
        "filiation": {
          "maitres": [
            "POPPER (critique)",
            "LAKATOS (friend)",
            "KUHN"
          ],
          "disciples": [
            "EPISTEMIC RELATIVISM",
            "SCIENCE STUDIES"
          ],
          "contre": [
            "POPPER",
            "LAKATOS",
            "METHODOLOGICAL RATIONALISM"
          ]
        }
      }
    },
    {
      "id": "132",
      "nom": "ALTHUSSER",
      "full": "Louis Althusser",
      "dates": "1918-1990",
      "types": [
        "Marxisme",
        "Structuralisme"
      ],
      "lieu": "France",
      "era": "CONTEMPORAINE",
      "imgUrl": "https://upload.wikimedia.org/wikipedia/en/5/51/Althusser.jpg",
      "stats": {
        "INFLUENCE": 80,
        "RIGUEUR": 65,
        "ANCRAGE": 55,
        "PORTÉE": 82,
        "CLÔTURE": 48,
        "CLARTÉ": 40
      },
      "fr": {
        "oeuvre": "Pour Marx / Lire le Capital",
        "entree": "Althusser relit Marx à travers le structuralisme pour dégager un Marx scientifique contre le Marx humaniste. La coupure épistémologique sépare le jeune Marx (idéologie) du Marx mature (science). L'idéologie interpelle les individus en sujets.",
        "concepts": [
          {
            "nom": "LA COUPURE ÉPISTÉMOLOGIQUE",
            "cat": "transcendant",
            "type": "Marxisme",
            "puissance": 85,
            "desc": "Bascule : rupture radicale entre le jeune Marx humaniste (idéologique) et le Marx mature de l'analyse du Capital (scientifique)."
          },
          {
            "nom": "LES APPAREILS IDÉOLOGIQUES D'ÉTAT",
            "cat": "immanent",
            "type": "Structuralisme",
            "puissance": 82,
            "desc": "École, Église, famille, médias — les AIE reproduisent idéologiquement les rapports de production sans recours direct à la violence."
          },
          {
            "nom": "L'INTERPELLATION IDÉOLOGIQUE",
            "cat": "immanent",
            "type": "Structuralisme",
            "puissance": 80,
            "desc": "L'idéologie interpelle les individus en sujets — 'Hé, toi là !' : la constitution du sujet est un effet idéologique, non un donné."
          }
        ],
        "filiation": {
          "maitres": [
            "MARX",
            "SPINOZA",
            "BACHELARD"
          ],
          "disciples": [
            "BADIOU",
            "ÉTUDES CULTURELLES",
            "LACLAU"
          ],
          "contre": [
            "HUMANISME MARXISTE",
            "HEGEL (réducteur)",
            "ÉCONOMISME"
          ]
        }
      },
      "en": {
        "oeuvre": "For Marx / Reading Capital",
        "entree": "Althusser rereads Marx through structuralism to extract a scientific Marx against the humanist Marx. The epistemological break separates the young Marx (ideology) from the mature Marx (science). Ideology interpellates individuals as subjects.",
        "concepts": [
          {
            "nom": "EPISTEMOLOGICAL BREAK",
            "cat": "transcendant",
            "type": "Marxisme",
            "puissance": 85,
            "desc": "A shift: radical rupture between the young humanist Marx (ideological) and the mature Marx of Capital analysis (scientific)."
          },
          {
            "nom": "IDEOLOGICAL STATE APPARATUSES",
            "cat": "immanent",
            "type": "Structuralisme",
            "puissance": 82,
            "desc": "School, Church, family, media — ISAs ideologically reproduce the relations of production without recourse to direct violence."
          },
          {
            "nom": "IDEOLOGICAL INTERPELLATION",
            "cat": "immanent",
            "type": "Structuralisme",
            "puissance": 80,
            "desc": "Ideology interpellates individuals as subjects — 'Hey, you there!': the constitution of the subject is an ideological effect, not a given."
          }
        ],
        "filiation": {
          "maitres": [
            "MARX",
            "SPINOZA",
            "BACHELARD"
          ],
          "disciples": [
            "BADIOU",
            "CULTURAL STUDIES",
            "LACLAU"
          ],
          "contre": [
            "MARXIST HUMANISM",
            "HEGEL (reductive)",
            "ECONOMISM"
          ]
        }
      }
    },
    {
      "id": "133",
      "nom": "FOUCAULT",
      "full": "Michel Foucault",
      "dates": "1926-1984",
      "types": [
        "Postmodernisme",
        "Théorie Critique"
      ],
      "lieu": "France",
      "era": "CONTEMPORAINE",
      "imgUrl": "https://upload.wikimedia.org/wikipedia/commons/d/d6/Michel_Foucault%2C_1974_%28cropped%29.jpg",
      "stats": {
        "INFLUENCE": 95,
        "RIGUEUR": 55,
        "ANCRAGE": 48,
        "PORTÉE": 95,
        "CLÔTURE": 42,
        "CLARTÉ": 52
      },
      "fr": {
        "oeuvre": "Surveiller et punir / Histoire de la sexualité",
        "entree": "Foucault analyse les relations entre savoir et pouvoir. Tout savoir est traversé par des dispositifs de pouvoir qui définissent le normal et le pathologique. L'archéologie et la généalogie révèlent l'historicité radicale de ce que nous considérons comme vérités universelles.",
        "concepts": [
          {
            "nom": "SAVOIR-POUVOIR",
            "cat": "transcendant",
            "type": "Théorie Critique",
            "puissance": 92,
            "desc": "Bascule fondamentale : tout savoir est traversé par des relations de pouvoir — la vérité est produite, non découverte, dans des dispositifs de domination."
          },
          {
            "nom": "LE DISPOSITIF",
            "cat": "immanent",
            "type": "Postmodernisme",
            "puissance": 88,
            "desc": "Réseau hétérogène d'institutions, discours, pratiques et lois qui produit des sujets et des vérités — la prison, la clinique, la sexualité."
          },
          {
            "nom": "LA BIOPOLITIQUE",
            "cat": "transcendant",
            "type": "Théorie Critique",
            "puissance": 85,
            "desc": "Bascule : depuis le XVIIIe siècle, le pouvoir ne s'exerce plus sur les individus seuls mais sur la vie des populations entières."
          }
        ],
        "filiation": {
          "maitres": [
            "NIETZSCHE",
            "CANGUILHEM",
            "BATAILLE"
          ],
          "disciples": [
            "DERRIDA (dialogue)",
            "BUTLER",
            "AGAMBEN"
          ],
          "contre": [
            "HUMANISME UNIVERSEL",
            "FREUDO-MARXISME",
            "SUJET CONSTITUANT"
          ]
        }
      },
      "en": {
        "oeuvre": "Discipline and Punish / History of Sexuality",
        "entree": "Foucault analyzes the relations between knowledge and power. All knowledge is traversed by power dispositifs that define the normal and the pathological. Archaeology and genealogy reveal the radical historicity of what we consider universal truths.",
        "concepts": [
          {
            "nom": "POWER/KNOWLEDGE",
            "cat": "transcendant",
            "type": "Théorie Critique",
            "puissance": 92,
            "desc": "A fundamental shift: all knowledge is traversed by power relations — truth is produced, not discovered, within dispositifs of domination."
          },
          {
            "nom": "THE DISPOSITIF",
            "cat": "immanent",
            "type": "Postmodernisme",
            "puissance": 88,
            "desc": "A heterogeneous network of institutions, discourses, practices, and laws that produces subjects and truths — the prison, the clinic, sexuality."
          },
          {
            "nom": "BIOPOLITICS",
            "cat": "transcendant",
            "type": "Théorie Critique",
            "puissance": 85,
            "desc": "A shift: since the 18th century, power is exercised not only on individuals but on the life of entire populations."
          }
        ],
        "filiation": {
          "maitres": [
            "NIETZSCHE",
            "CANGUILHEM",
            "BATAILLE"
          ],
          "disciples": [
            "DERRIDA (dialogue)",
            "BUTLER",
            "AGAMBEN"
          ],
          "contre": [
            "UNIVERSAL HUMANISM",
            "FREUDO-MARXISM",
            "CONSTITUTING SUBJECT"
          ]
        }
      }
    },
    {
      "id": "134",
      "nom": "LYOTARD",
      "full": "Jean-François Lyotard",
      "dates": "1924-1998",
      "types": [
        "Postmodernisme"
      ],
      "lieu": "France",
      "era": "CONTEMPORAINE",
      "imgUrl": "https://upload.wikimedia.org/wikipedia/commons/4/46/Jean-Francois_Lyotard_cropped.jpg",
      "stats": {
        "INFLUENCE": 78,
        "RIGUEUR": 52,
        "ANCRAGE": 45,
        "PORTÉE": 82,
        "CLÔTURE": 40,
        "CLARTÉ": 55
      },
      "fr": {
        "oeuvre": "La Condition postmoderne",
        "entree": "Lyotard diagnostique la fin des grands récits de légitimation — la science, le marxisme, les Lumières. La condition postmoderne est incrédulité envers les métarécits. La légitimité se fragmente en micro-récits et jeux de langage locaux.",
        "concepts": [
          {
            "nom": "LA FIN DES GRANDS RÉCITS",
            "cat": "transcendant",
            "type": "Postmodernisme",
            "puissance": 88,
            "desc": "Bascule : la postmodernité = incrédulité envers les métarécits (Lumières, marxisme, progrès) — la légitimité se fragmente en micro-récits."
          },
          {
            "nom": "LE DIFFÉREND",
            "cat": "immanent",
            "type": "Postmodernisme",
            "puissance": 82,
            "desc": "Différend irréductible entre des parties qui ne partagent pas le même régime de phrases — l'injustice de réduire un différend à un litige."
          },
          {
            "nom": "LES JEUX DE LANGAGE",
            "cat": "immanent",
            "type": "Postmodernisme",
            "puissance": 78,
            "desc": "Chaque domaine a ses propres règles et critères de validité incommensurables — pas de métalangage universel pour les arbitrer."
          }
        ],
        "filiation": {
          "maitres": [
            "WITTGSTN",
            "LEVINAS",
            "KANT (sublime)"
          ],
          "disciples": [
            "POSTMODERNISME ACADÉMIQUE"
          ],
          "contre": [
            "HABERMAS (raison communicationnelle)",
            "GRANDS RÉCITS DE LÉGITIMATION"
          ]
        }
      },
      "en": {
        "oeuvre": "The Postmodern Condition",
        "entree": "Lyotard diagnoses the end of the grand narratives of legitimation — science, Marxism, the Enlightenment. The postmodern condition is incredulity toward metanarratives. Legitimacy fragments into local micro-narratives and language games.",
        "concepts": [
          {
            "nom": "END OF GRAND NARRATIVES",
            "cat": "transcendant",
            "type": "Postmodernisme",
            "puissance": 88,
            "desc": "A shift: postmodernity = incredulity toward metanarratives (Enlightenment, Marxism, progress) — legitimacy fragments into micro-narratives."
          },
          {
            "nom": "THE DIFFÉREND",
            "cat": "immanent",
            "type": "Postmodernisme",
            "puissance": 82,
            "desc": "An irreducible dispute between parties who do not share the same phrase regime — the injustice of reducing a différend to a litigation."
          },
          {
            "nom": "LANGUAGE GAMES",
            "cat": "immanent",
            "type": "Postmodernisme",
            "puissance": 78,
            "desc": "Each domain has its own incommensurable rules and validity criteria — no universal metalanguage to arbitrate between them."
          }
        ],
        "filiation": {
          "maitres": [
            "WITTGSTN",
            "LEVINAS",
            "KANT (sublime)"
          ],
          "disciples": [
            "ACADEMIC POSTMODERNISM"
          ],
          "contre": [
            "HABERMAS (communicative reason)",
            "GRAND NARRATIVES OF LEGITIMATION"
          ]
        }
      }
    },
    {
      "id": "135",
      "nom": "DELEUZE",
      "full": "Gilles Deleuze",
      "dates": "1925-1995",
      "types": [
        "Postmodernisme",
        "Philo. Technique"
      ],
      "lieu": "France",
      "era": "CONTEMPORAINE",
      "imgUrl": "https://upload.wikimedia.org/wikipedia/en/7/7e/Gilles_Deleuze.webp",
      "stats": {
        "INFLUENCE": 88,
        "RIGUEUR": 45,
        "ANCRAGE": 40,
        "PORTÉE": 92,
        "CLÔTURE": 35,
        "CLARTÉ": 30
      },
      "fr": {
        "oeuvre": "L'Anti-Œdipe (avec Guattari) / Mille Plateaux",
        "entree": "Deleuze construit une ontologie du devenir, de la différence et du désir contre l'identité, la représentation et le manque. Le rhizome contre l'arbre, la déterritorialisation contre la capture — une philosophie de l'immanence radicale.",
        "concepts": [
          {
            "nom": "LE RHIZOME",
            "cat": "transcendant",
            "type": "Postmodernisme",
            "puissance": 88,
            "desc": "Bascule : contre l'arbre (racine, hiérarchie), le rhizome — réseau horizontal sans centre, sans début ni fin, modèle de pensée et d'organisation."
          },
          {
            "nom": "LA DIFFÉRENCE EN SOI",
            "cat": "transcendant",
            "type": "Postmodernisme",
            "puissance": 85,
            "desc": "La différence n'est pas dérivée de l'identité — elle est première, positive, productive. L'être est différence avant d'être identité."
          },
          {
            "nom": "LES MACHINES DÉSIRANTES",
            "cat": "immanent",
            "type": "Philo. Technique",
            "puissance": 82,
            "desc": "Le désir n'est pas manque (Lacan, Platon) mais production — les machines désirantes branchent et découpent des flux."
          }
        ],
        "filiation": {
          "maitres": [
            "NIETZSCHE",
            "SPINOZA",
            "BERGSON",
            "HUME"
          ],
          "disciples": [
            "ÉTUDES CULTURELLES",
            "PHILOSOPHIE DU DEVENIR",
            "DH"
          ],
          "contre": [
            "HEGEL",
            "FREUD/LACAN (désir comme manque)",
            "REPRÉSENTATION"
          ]
        }
      },
      "en": {
        "oeuvre": "Anti-Oedipus (with Guattari) / A Thousand Plateaus",
        "entree": "Deleuze constructs an ontology of becoming, difference, and desire against identity, representation, and lack. The rhizome against the tree, deterritorialization against capture — a philosophy of radical immanence.",
        "concepts": [
          {
            "nom": "THE RHIZOME",
            "cat": "transcendant",
            "type": "Postmodernisme",
            "puissance": 88,
            "desc": "A shift: against the tree (root, hierarchy), the rhizome — a horizontal network without center, without beginning or end, as a model of thought and organization."
          },
          {
            "nom": "DIFFERENCE IN ITSELF",
            "cat": "transcendant",
            "type": "Postmodernisme",
            "puissance": 85,
            "desc": "Difference is not derived from identity — it is primary, positive, productive. Being is difference before it is identity."
          },
          {
            "nom": "DESIRING-MACHINES",
            "cat": "immanent",
            "type": "Philo. Technique",
            "puissance": 82,
            "desc": "Desire is not lack (Lacan, Plato) but production — desiring-machines connect and cut flows."
          }
        ],
        "filiation": {
          "maitres": [
            "NIETZSCHE",
            "SPINOZA",
            "BERGSON",
            "HUME"
          ],
          "disciples": [
            "CULTURAL STUDIES",
            "PHILOSOPHY OF BECOMING",
            "DH"
          ],
          "contre": [
            "HEGEL",
            "FREUD/LACAN (desire as lack)",
            "REPRESENTATION"
          ]
        }
      }
    },
    {
      "id": "136",
      "nom": "DANTO",
      "full": "Arthur Danto",
      "dates": "1924-2013",
      "types": [
        "Esthétique",
        "Philo. Histoire"
      ],
      "lieu": "États-Unis",
      "era": "CONTEMPORAINE",
      "imgUrl": "https://upload.wikimedia.org/wikipedia/commons/4/46/Arthur_Danto%2C_2012.jpg",
      "stats": {
        "INFLUENCE": 75,
        "RIGUEUR": 78,
        "ANCRAGE": 68,
        "PORTÉE": 80,
        "CLÔTURE": 60,
        "CLARTÉ": 78
      },
      "fr": {
        "oeuvre": "Le Monde de l'art / La Transfiguration du banal",
        "entree": "Danto répond à l'art conceptuel (Warhol's Brillo Boxes) par la théorie du monde de l'art : une œuvre d'art est un objet immergé dans une atmosphère de théorie artistique et d'histoire de l'art. L'indiscernabilité visuelle n'implique pas l'identité ontologique.",
        "concepts": [
          {
            "nom": "LE MONDE DE L'ART",
            "cat": "transcendant",
            "type": "Esthétique",
            "puissance": 85,
            "desc": "Bascule institutionnelle : ce qui fait d'un objet une œuvre d'art, c'est son inscription dans le monde de l'art — une atmosphère de théorie et d'histoire."
          },
          {
            "nom": "LA TRANSFIGURATION DU BANAL",
            "cat": "immanent",
            "type": "Esthétique",
            "puissance": 82,
            "desc": "Deux objets visuellement identiques peuvent l'un être une œuvre d'art et l'autre non — l'art est une catégorie ontologique, non perceptive."
          },
          {
            "nom": "LA FIN DE L'ART",
            "cat": "transcendant",
            "type": "Philo. Histoire",
            "puissance": 78,
            "desc": "Après Warhol, l'art a atteint sa fin philosophique — non qu'il cesse, mais qu'il perd son projet définitionnel : toute chose peut être art."
          }
        ],
        "filiation": {
          "maitres": [
            "HEGEL",
            "WITTGSTN",
            "WEITZ (débat)"
          ],
          "disciples": [
            "ESTHÉTIQUE INSTITUTIONNELLE",
            "PHILOSOPHIE DE L'ART CONTEMPORAIN"
          ],
          "contre": [
            "WEITZ (art indéfinissable)",
            "FORMALISME",
            "EXPRESSIONNISME"
          ]
        }
      },
      "en": {
        "oeuvre": "The Artworld / The Transfiguration of the Commonplace",
        "entree": "Danto responds to conceptual art (Warhol's Brillo Boxes) with the artworld theory: a work of art is an object immersed in an atmosphere of artistic theory and art history. Visual indiscernibility does not imply ontological identity.",
        "concepts": [
          {
            "nom": "THE ARTWORLD",
            "cat": "transcendant",
            "type": "Esthétique",
            "puissance": 85,
            "desc": "An institutional shift: what makes an object a work of art is its inscription in the artworld — an atmosphere of theory and history."
          },
          {
            "nom": "TRANSFIGURATION OF THE COMMONPLACE",
            "cat": "immanent",
            "type": "Esthétique",
            "puissance": 82,
            "desc": "Two visually identical objects can differ ontologically: one is a work of art and the other is not — art is an ontological, not perceptual category."
          },
          {
            "nom": "THE END OF ART",
            "cat": "transcendant",
            "type": "Philo. Histoire",
            "puissance": 78,
            "desc": "After Warhol, art has reached its philosophical end — not that it stops, but that it loses its definitional project: anything can be art."
          }
        ],
        "filiation": {
          "maitres": [
            "HEGEL",
            "WITTGSTN",
            "WEITZ (debate)"
          ],
          "disciples": [
            "INSTITUTIONAL AESTHETICS",
            "PHILOSOPHY OF CONTEMPORARY ART"
          ],
          "contre": [
            "WEITZ (art undefinable)",
            "FORMALISM",
            "EXPRESSIONISM"
          ]
        }
      }
    },
    {
      "id": "137",
      "nom": "G.DICKIE",
      "full": "George Dickie",
      "dates": "1926-2020",
      "types": [
        "Esthétique"
      ],
      "lieu": "États-Unis",
      "era": "CONTEMPORAINE",
      "imgUrl": "",
      "stats": {
        "INFLUENCE": 55,
        "RIGUEUR": 72,
        "ANCRAGE": 65,
        "PORTÉE": 60,
        "CLÔTURE": 58,
        "CLARTÉ": 75
      },
      "fr": {
        "oeuvre": "L'Art et l'esthétique",
        "entree": "Dickie systématise la théorie institutionnelle de l'art amorcée par Danto. Une œuvre d'art est un artefact auquel une personne ou une institution habilitée par le monde de l'art a conféré le statut de candidat à l'appréciation.",
        "concepts": [
          {
            "nom": "LA THÉORIE INSTITUTIONNELLE",
            "cat": "immanent",
            "type": "Esthétique",
            "puissance": 80,
            "desc": "L'art = artefact + statut conféré par une personne habilitée du monde de l'art — définition procédurale contre définition par l'essence."
          },
          {
            "nom": "LE MONDE DE L'ART COMME INSTITUTION",
            "cat": "immanent",
            "type": "Esthétique",
            "puissance": 75,
            "desc": "Le monde de l'art est une institution informelle mais réelle — ses membres habilitent des artefacts comme candidats à l'appréciation."
          },
          {
            "nom": "L'APPRÉCIATION SANS CONDITION",
            "cat": "immanent",
            "type": "Esthétique",
            "puissance": 68,
            "desc": "Le statut d'art ne requiert aucune qualité perceptive particulière — c'est un statut institutionnel, non une propriété intrinsèque."
          }
        ],
        "filiation": {
          "maitres": [
            "DANTO",
            "WEITZ"
          ],
          "disciples": [
            "ESTHÉTIQUE INSTITUTIONNELLE"
          ],
          "contre": [
            "EXPRESSIONNISME",
            "ESTHÉTIQUE FORMELLE PURE"
          ]
        }
      },
      "en": {
        "oeuvre": "Art and the Aesthetic",
        "entree": "Dickie systematizes the institutional theory of art initiated by Danto. A work of art is an artifact to which a person or institution empowered by the artworld has conferred the status of candidate for appreciation.",
        "concepts": [
          {
            "nom": "INSTITUTIONAL THEORY",
            "cat": "immanent",
            "type": "Esthétique",
            "puissance": 80,
            "desc": "Art = artifact + status conferred by an empowered artworld person — procedural definition against definition by essence."
          },
          {
            "nom": "THE ARTWORLD AS INSTITUTION",
            "cat": "immanent",
            "type": "Esthétique",
            "puissance": 75,
            "desc": "The artworld is an informal but real institution — its members empower artifacts as candidates for appreciation."
          },
          {
            "nom": "APPRECIATION WITHOUT CONDITIONS",
            "cat": "immanent",
            "type": "Esthétique",
            "puissance": 68,
            "desc": "Art status requires no particular perceptive quality — it is an institutional status, not an intrinsic property."
          }
        ],
        "filiation": {
          "maitres": [
            "DANTO",
            "WEITZ"
          ],
          "disciples": [
            "INSTITUTIONAL AESTHETICS"
          ],
          "contre": [
            "EXPRESSIONISM",
            "PURE FORMAL AESTHETICS"
          ]
        }
      }
    },
    {
      "id": "138",
      "nom": "DUMMETT",
      "full": "Michael Dummett",
      "dates": "1925-2011",
      "types": [
        "Logique",
        "Philo. Langage"
      ],
      "lieu": "Angleterre",
      "era": "CONTEMPORAINE",
      "imgUrl": "https://upload.wikimedia.org/wikipedia/commons/0/07/Michael_Dummett_September_2004.jpg",
      "stats": {
        "INFLUENCE": 72,
        "RIGUEUR": 92,
        "ANCRAGE": 68,
        "PORTÉE": 78,
        "CLÔTURE": 65,
        "CLARTÉ": 50
      },
      "fr": {
        "oeuvre": "Frege : philosophie du langage / Les Éléments de l'intuitionnisme",
        "entree": "Dummett défend l'anti-réalisme sémantique : la signification est liée à la vérifiabilité, non à des conditions de vérité transcendantes. Cela conduit au logique intuitioniste, qui rejette le principe du tiers-exclu pour les propositions non décidées.",
        "concepts": [
          {
            "nom": "L'ANTI-RÉALISME SÉMANTIQUE",
            "cat": "transcendant",
            "type": "Philo. Langage",
            "puissance": 85,
            "desc": "Bascule : la signification n'est pas liée à des conditions de vérité transcendantes mais à la justifiabilité — ce que nous pouvons vérifier."
          },
          {
            "nom": "LE REJET DU TIERS-EXCLU",
            "cat": "immanent",
            "type": "Logique",
            "puissance": 82,
            "desc": "Pour les propositions indécidables, il ne faut ni affirmer ni nier P — l'intuitionnisme logique contre la logique classique bivalente."
          },
          {
            "nom": "LA SIGNIFICATION COMME USAGE",
            "cat": "immanent",
            "type": "Philo. Langage",
            "puissance": 78,
            "desc": "Hériter de Wittgenstein : comprendre une expression = savoir comment l'utiliser pour prouver des assertions."
          }
        ],
        "filiation": {
          "maitres": [
            "FREGE",
            "WITTGSTN",
            "BROUWER"
          ],
          "disciples": [
            "LOGIQUE INTUITIONISTE",
            "ANTI-RÉALISME"
          ],
          "contre": [
            "RÉALISME SÉMANTIQUE",
            "LOGIQUE CLASSIQUE BIVALENTE"
          ]
        }
      },
      "en": {
        "oeuvre": "Frege: Philosophy of Language / Elements of Intuitionism",
        "entree": "Dummett defends semantic anti-realism: meaning is tied to verifiability, not to transcendent truth conditions. This leads to intuitionist logic, which rejects the law of excluded middle for undecided propositions.",
        "concepts": [
          {
            "nom": "SEMANTIC ANTI-REALISM",
            "cat": "transcendant",
            "type": "Philo. Langage",
            "puissance": 85,
            "desc": "A shift: meaning is not tied to transcendent truth conditions but to justifiability — what we can verify."
          },
          {
            "nom": "REJECTION OF EXCLUDED MIDDLE",
            "cat": "immanent",
            "type": "Logique",
            "puissance": 82,
            "desc": "For undecidable propositions, one should neither affirm nor deny P — intuitionist logic against classical bivalent logic."
          },
          {
            "nom": "MEANING AS USE",
            "cat": "immanent",
            "type": "Philo. Langage",
            "puissance": 78,
            "desc": "Inheriting from Wittgenstein: to understand an expression = to know how to use it in proving assertions."
          }
        ],
        "filiation": {
          "maitres": [
            "FREGE",
            "WITTGSTN",
            "BROUWER"
          ],
          "disciples": [
            "INTUITIONIST LOGIC",
            "ANTI-REALISM"
          ],
          "contre": [
            "SEMANTIC REALISM",
            "CLASSICAL BIVALENT LOGIC"
          ]
        }
      }
    },
    {
      "id": "139",
      "nom": "H.PUTNAM",
      "full": "Hilary Putnam",
      "dates": "1926-2016",
      "types": [
        "Réalisme",
        "Pragmatisme"
      ],
      "lieu": "États-Unis",
      "era": "CONTEMPORAINE",
      "imgUrl": "https://upload.wikimedia.org/wikipedia/commons/6/62/Hilary_Putnam.jpg",
      "stats": {
        "INFLUENCE": 80,
        "RIGUEUR": 85,
        "ANCRAGE": 65,
        "PORTÉE": 82,
        "CLÔTURE": 58,
        "CLARTÉ": 68
      },
      "fr": {
        "oeuvre": "Raison, Vérité et Histoire / Le Réalisme à visage humain",
        "entree": "Putnam traverse plusieurs positions philosophiques radicales. Son réalisme interne s'oppose au réalisme métaphysique : la vérité est relative à un schème conceptuel. Ses arguments contre le cerveau dans la cuve et pour le réalisme scientifique restent fondamentaux.",
        "concepts": [
          {
            "nom": "LE CERVEAU DANS LA CUVE",
            "cat": "transcendant",
            "type": "Réalisme",
            "puissance": 85,
            "desc": "Argument anti-sceptique : si j'étais un cerveau dans une cuve, le mot 'cuve' référerait à une image simulée, non une vraie cuve — l'argument se réfute lui-même."
          },
          {
            "nom": "LE RÉALISME INTERNE",
            "cat": "immanent",
            "type": "Réalisme",
            "puissance": 82,
            "desc": "La vérité est relative à un schème conceptuel — ni relativisme radical ni réalisme métaphysique absolu, mais vérité comme idéalisation de la justification."
          },
          {
            "nom": "LA SIGNIFICATION ET L'EAU",
            "cat": "transcendant",
            "type": "Philo. Langage",
            "puissance": 80,
            "desc": "Earth/Twin Earth : 'eau' réfère à H2O même si nos ancêtres ne connaissaient pas la chimie — le sens est dans le monde, pas dans la tête."
          }
        ],
        "filiation": {
          "maitres": [
            "QUINE",
            "WITTGSTN",
            "JAMES"
          ],
          "disciples": [
            "PHILOSOPHIE ANALYTIQUE CONTEMPORAINE"
          ],
          "contre": [
            "RÉALISME MÉTAPHYSIQUE (abandon)",
            "RELATIVISME RADICAL"
          ]
        }
      },
      "en": {
        "oeuvre": "Reason, Truth and History / Realism with a Human Face",
        "entree": "Putnam traverses several radical philosophical positions. His internal realism opposes metaphysical realism: truth is relative to a conceptual scheme. His arguments against the brain in a vat and for scientific realism remain fundamental.",
        "concepts": [
          {
            "nom": "BRAIN IN A VAT",
            "cat": "transcendant",
            "type": "Réalisme",
            "puissance": 85,
            "desc": "Anti-skeptical argument: if I were a brain in a vat, the word 'vat' would refer to a simulated image, not a real vat — the argument refutes itself."
          },
          {
            "nom": "INTERNAL REALISM",
            "cat": "immanent",
            "type": "Réalisme",
            "puissance": 82,
            "desc": "Truth is relative to a conceptual scheme — neither radical relativism nor absolute metaphysical realism, but truth as idealization of justification."
          },
          {
            "nom": "MEANING AND WATER",
            "cat": "transcendant",
            "type": "Philo. Langage",
            "puissance": 80,
            "desc": "Earth/Twin Earth: 'water' refers to H2O even if our ancestors didn't know chemistry — meaning is in the world, not in the head."
          }
        ],
        "filiation": {
          "maitres": [
            "QUINE",
            "WITTGSTN",
            "JAMES"
          ],
          "disciples": [
            "CONTEMPORARY ANALYTIC PHILOSOPHY"
          ],
          "contre": [
            "METAPHYSICAL REALISM (abandoned)",
            "RADICAL RELATIVISM"
          ]
        }
      }
    },
    {
      "id": "140",
      "nom": "E.GETTIR",
      "full": "Edmund Gettier",
      "dates": "1927-2021",
      "types": [
        "Scepticisme",
        "Empirisme"
      ],
      "lieu": "États-Unis",
      "era": "CONTEMPORAINE",
      "imgUrl": "https://upload.wikimedia.org/wikipedia/commons/a/ad/Edmund_L_Gettier_III_ca_1960s_umass.jpg",
      "stats": {
        "INFLUENCE": 80,
        "RIGUEUR": 98,
        "ANCRAGE": 72,
        "PORTÉE": 85,
        "CLÔTURE": 65,
        "CLARTÉ": 92
      },
      "fr": {
        "oeuvre": "La Croyance vraie justifiée est-elle la connaissance ?",
        "entree": "Dans un article de 3 pages publié en 1963, Gettier détruit 2500 ans d'épistémologie. La connaissance = croyance vraie justifiée (définition standard depuis Platon). Gettier produit deux contre-exemples montrant qu'on peut avoir une croyance vraie justifiée sans avoir de connaissance.",
        "concepts": [
          {
            "nom": "LES CONTRE-EXEMPLES DE GETTIER",
            "cat": "transcendant",
            "type": "Scepticisme",
            "puissance": 98,
            "desc": "Bascule : on peut avoir une croyance vraie justifiée sans avoir de connaissance — la définition tripartite standard est réfutée en 3 pages."
          },
          {
            "nom": "LE PROBLÈME DE GETTIER",
            "cat": "immanent",
            "type": "Empirisme",
            "puissance": 90,
            "desc": "Comment ajouter une quatrième condition à la définition de la connaissance pour exclure les cas Gettier — problème non résolu depuis 60 ans."
          },
          {
            "nom": "LA CONNEXION CAUSALE",
            "cat": "immanent",
            "type": "Empirisme",
            "puissance": 78,
            "desc": "Une solution proposée : la connaissance requiert une connexion causale appropriée entre la croyance et le fait qui la rend vraie."
          }
        ],
        "filiation": {
          "maitres": [
            "PLATON (réfute)",
            "RUSSELL",
            "AYER"
          ],
          "disciples": [
            "ÉPISTÉMOLOGIE ANALYTIQUE CONTEMPORAINE"
          ],
          "contre": [
            "DÉFINITION TRIPARTITE DE LA CONNAISSANCE",
            "FONDATIONNISME"
          ]
        }
      },
      "en": {
        "oeuvre": "Is Justified True Belief Knowledge?",
        "entree": "In a 3-page article published in 1963, Gettier destroys 2500 years of epistemology. Knowledge = justified true belief (the standard definition since Plato). Gettier produces two counterexamples showing that one can have justified true belief without knowledge.",
        "concepts": [
          {
            "nom": "GETTIER COUNTEREXAMPLES",
            "cat": "transcendant",
            "type": "Scepticisme",
            "puissance": 98,
            "desc": "A shift: one can have justified true belief without having knowledge — the standard tripartite definition is refuted in 3 pages."
          },
          {
            "nom": "THE GETTIER PROBLEM",
            "cat": "immanent",
            "type": "Empirisme",
            "puissance": 90,
            "desc": "How to add a fourth condition to the definition of knowledge to exclude Gettier cases — a problem unsolved for 60 years."
          },
          {
            "nom": "THE CAUSAL CONNECTION",
            "cat": "immanent",
            "type": "Empirisme",
            "puissance": 78,
            "desc": "A proposed solution: knowledge requires an appropriate causal connection between the belief and the fact that makes it true."
          }
        ],
        "filiation": {
          "maitres": [
            "PLATON (refutes)",
            "RUSSELL",
            "AYER"
          ],
          "disciples": [
            "CONTEMPORARY ANALYTIC EPISTEMOLOGY"
          ],
          "contre": [
            "TRIPARTITE DEFINITION OF KNOWLEDGE",
            "FOUNDATIONALISM"
          ]
        }
      }
    },
    {
      "id": "141",
      "nom": "CHOMSKY",
      "full": "Noam Chomsky",
      "dates": "1928-",
      "types": [
        "Philo. Langage",
        "Anarchisme"
      ],
      "lieu": "États-Unis",
      "era": "CONTEMPORAINE",
      "imgUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Noam_Chomsky_portrait_2015.jpg/640px-Noam_Chomsky_portrait_2015.jpg",
      "stats": {
        "INFLUENCE": 92,
        "RIGUEUR": 82,
        "ANCRAGE": 68,
        "PORTÉE": 88,
        "CLÔTURE": 58,
        "CLARTÉ": 70
      },
      "fr": {
        "oeuvre": "Structures syntaxiques / La Révolution de Chomsky",
        "entree": "Chomsky révolutionne la linguistique avec la grammaire générative : la compétence linguistique repose sur une grammaire universelle innée, propre à l'espèce humaine. Il réfute Skinner et fonde la linguistique cognitive. Politiquement, il est un anarcho-syndicaliste radical.",
        "concepts": [
          {
            "nom": "LA GRAMMAIRE GÉNÉRATIVE",
            "cat": "transcendant",
            "type": "Philo. Langage",
            "puissance": 90,
            "desc": "Bascule : la compétence linguistique est une structure mentale innée — toutes les langues partagent une grammaire universelle profonde."
          },
          {
            "nom": "L'INNÉISME LINGUISTIQUE",
            "cat": "immanent",
            "type": "Philo. Esprit",
            "puissance": 85,
            "desc": "La rapidité d'acquisition du langage malgré des données insuffisantes (argument de la pauvreté du stimulus) implique une grammaire innée."
          },
          {
            "nom": "LE FABRIQUANT DE CONSENTEMENT",
            "cat": "transcendant",
            "type": "Anarchisme",
            "puissance": 82,
            "desc": "Les médias de masse fabriquent le consentement — les pouvoirs économiques et étatiques contrôlent l'information pour manipuler l'opinion publique."
          }
        ],
        "filiation": {
          "maitres": [
            "HUMBOLDT",
            "RUSSELL",
            "DEWEY"
          ],
          "disciples": [
            "LINGUISTIQUE COGNITIVE",
            "PINKER"
          ],
          "contre": [
            "SKINNER (béhaviorisme)",
            "SAUSSURE",
            "MÉDIAS DOMINANTS"
          ]
        }
      },
      "en": {
        "oeuvre": "Syntactic Structures / Manufacturing Consent",
        "entree": "Chomsky revolutionizes linguistics with generative grammar: linguistic competence rests on an innate universal grammar, specific to the human species. He refutes Skinner and founds cognitive linguistics. Politically, he is a radical anarcho-syndicalist.",
        "concepts": [
          {
            "nom": "GENERATIVE GRAMMAR",
            "cat": "transcendant",
            "type": "Philo. Langage",
            "puissance": 90,
            "desc": "A shift: linguistic competence is an innate mental structure — all languages share a deep universal grammar."
          },
          {
            "nom": "LINGUISTIC INNATISM",
            "cat": "immanent",
            "type": "Philo. Esprit",
            "puissance": 85,
            "desc": "The speed of language acquisition despite insufficient data (poverty of the stimulus argument) implies an innate grammar."
          },
          {
            "nom": "MANUFACTURING CONSENT",
            "cat": "transcendant",
            "type": "Anarchisme",
            "puissance": 82,
            "desc": "Mass media manufacture consent — economic and state powers control information to manipulate public opinion."
          }
        ],
        "filiation": {
          "maitres": [
            "HUMBOLDT",
            "RUSSELL",
            "DEWEY"
          ],
          "disciples": [
            "COGNITIVE LINGUISTICS",
            "PINKER"
          ],
          "contre": [
            "SKINNER (behaviorism)",
            "SAUSSURE",
            "DOMINANT MEDIA"
          ]
        }
      }
    },
    {
      "id": "142",
      "nom": "BAUDRILD",
      "full": "Jean Baudrillard",
      "dates": "1929-2007",
      "types": [
        "Postmodernisme"
      ],
      "lieu": "France",
      "era": "CONTEMPORAINE",
      "imgUrl": "https://upload.wikimedia.org/wikipedia/commons/e/ef/WikipediaBaudrillard20040612-cropped.png",
      "stats": {
        "INFLUENCE": 80,
        "RIGUEUR": 38,
        "ANCRAGE": 35,
        "PORTÉE": 88,
        "CLÔTURE": 30,
        "CLARTÉ": 55
      },
      "fr": {
        "oeuvre": "Simulacres et Simulation",
        "entree": "Baudrillard diagnostique le règne de la simulation : nous vivons dans un hyperréel où les signes ne renvoient plus à aucun réel — ils ne sont que signes de signes. Disneyland existe pour faire croire que l'Amérique est réelle.",
        "concepts": [
          {
            "nom": "LE SIMULACRE",
            "cat": "transcendant",
            "type": "Postmodernisme",
            "puissance": 90,
            "desc": "Bascule : le signe ne renvoie plus à un référent réel — nous sommes dans l'ère de la pure simulation, l'hyperréel précède et produit le réel."
          },
          {
            "nom": "L'HYPERRÉEL",
            "cat": "immanent",
            "type": "Postmodernisme",
            "puissance": 85,
            "desc": "Le réel est remplacé par ses signes — Disneyland est plus réel que l'Amérique, le modèle précède le territoire."
          },
          {
            "nom": "LA MORT DU RÉEL",
            "cat": "immanent",
            "type": "Postmodernisme",
            "puissance": 80,
            "desc": "La distinction réel/représentation s'effondre — les médias ne reflètent pas le réel mais le constituent et le remplacent."
          }
        ],
        "filiation": {
          "maitres": [
            "BATAILLE",
            "MAUSS",
            "SITUATIONNISTES"
          ],
          "disciples": [
            "THÉORIES DES MÉDIAS",
            "CYBERPUNK"
          ],
          "contre": [
            "MARXISME (valeur d'usage réelle)",
            "RÉFÉRENTIALISME"
          ]
        }
      },
      "en": {
        "oeuvre": "Simulacra and Simulation",
        "entree": "Baudrillard diagnoses the reign of simulation: we live in a hyperreal where signs no longer refer to any reality — they are only signs of signs. Disneyland exists to make us believe America is real.",
        "concepts": [
          {
            "nom": "THE SIMULACRUM",
            "cat": "transcendant",
            "type": "Postmodernisme",
            "puissance": 90,
            "desc": "A shift: the sign no longer refers to a real referent — we are in the era of pure simulation, the hyperreal precedes and produces the real."
          },
          {
            "nom": "THE HYPERREAL",
            "cat": "immanent",
            "type": "Postmodernisme",
            "puissance": 85,
            "desc": "Reality is replaced by its signs — Disneyland is more real than America, the model precedes the territory."
          },
          {
            "nom": "THE DEATH OF THE REAL",
            "cat": "immanent",
            "type": "Postmodernisme",
            "puissance": 80,
            "desc": "The real/representation distinction collapses — media do not reflect reality but constitute and replace it."
          }
        ],
        "filiation": {
          "maitres": [
            "BATAILLE",
            "MAUSS",
            "SITUATIONISTS"
          ],
          "disciples": [
            "MEDIA THEORIES",
            "CYBERPUNK"
          ],
          "contre": [
            "MARXISM (real use-value)",
            "REFERENTIALISM"
          ]
        }
      }
    },
    {
      "id": "143",
      "nom": "LEWONTIN",
      "full": "Richard Lewontin",
      "dates": "1929-2021",
      "types": [
        "Philo. Sciences",
        "Matérialisme"
      ],
      "lieu": "États-Unis",
      "era": "CONTEMPORAINE",
      "imgUrl": "https://upload.wikimedia.org/wikipedia/en/0/00/Richard_Lewontin.jpg",
      "stats": {
        "INFLUENCE": 62,
        "RIGUEUR": 82,
        "ANCRAGE": 70,
        "PORTÉE": 68,
        "CLÔTURE": 62,
        "CLARTÉ": 72
      },
      "fr": {
        "oeuvre": "La Triple Hélice / Biologie comme idéologie",
        "entree": "Biologiste marxiste, Lewontin dénonce le réductionnisme génétique et le déterminisme biologique. Les organismes ne sont pas des produits passifs de leurs gènes mais des agents qui construisent leur niche écologique. L'environnement et l'organisme sont codéterminés.",
        "concepts": [
          {
            "nom": "CONTRE LE RÉDUCTIONNISME GÉNÉTIQUE",
            "cat": "transcendant",
            "type": "Philo. Sciences",
            "puissance": 82,
            "desc": "Bascule : les gènes ne déterminent pas les organismes — l'organisme construit son environnement, qui construit en retour l'organisme."
          },
          {
            "nom": "LA CONSTRUCTION DE NICHE",
            "cat": "immanent",
            "type": "Matérialisme",
            "puissance": 78,
            "desc": "Les organismes ne s'adaptent pas passivement à l'environnement — ils le construisent activement, transformant les pressions sélectives."
          },
          {
            "nom": "BIOLOGIE ET IDÉOLOGIE",
            "cat": "immanent",
            "type": "Philo. Sciences",
            "puissance": 75,
            "desc": "Le déterminisme biologique sert des intérêts politiques conservateurs — la biologie n'est pas neutre, ses métaphores véhiculent des idéologies."
          }
        ],
        "filiation": {
          "maitres": [
            "DARWIN",
            "MARX",
            "LEVINS"
          ],
          "disciples": [
            "BIOLOGIE CRITIQUE",
            "ÉTUDES STS"
          ],
          "contre": [
            "DÉTERMINISME GÉNÉTIQUE",
            "SOCIOBIOLOGIE",
            "DAWKINS (gène égoïste)"
          ]
        }
      },
      "en": {
        "oeuvre": "The Triple Helix / Biology as Ideology",
        "entree": "A Marxist biologist, Lewontin denounces genetic reductionism and biological determinism. Organisms are not passive products of their genes but agents that construct their ecological niche. Environment and organism are codetermined.",
        "concepts": [
          {
            "nom": "AGAINST GENETIC REDUCTIONISM",
            "cat": "transcendant",
            "type": "Philo. Sciences",
            "puissance": 82,
            "desc": "A shift: genes do not determine organisms — the organism constructs its environment, which in turn constructs the organism."
          },
          {
            "nom": "NICHE CONSTRUCTION",
            "cat": "immanent",
            "type": "Matérialisme",
            "puissance": 78,
            "desc": "Organisms do not passively adapt to environment — they actively construct it, transforming selective pressures."
          },
          {
            "nom": "BIOLOGY AND IDEOLOGY",
            "cat": "immanent",
            "type": "Philo. Sciences",
            "puissance": 75,
            "desc": "Biological determinism serves conservative political interests — biology is not neutral, its metaphors carry ideologies."
          }
        ],
        "filiation": {
          "maitres": [
            "DARWIN",
            "MARX",
            "LEVINS"
          ],
          "disciples": [
            "CRITICAL BIOLOGY",
            "STS STUDIES"
          ],
          "contre": [
            "GENETIC DETERMINISM",
            "SOCIOBIOLOGY",
            "DAWKINS (selfish gene)"
          ]
        }
      }
    },
    {
      "id": "144",
      "nom": "FRANKFURT",
      "full": "Harry Frankfurt",
      "dates": "1929-2023",
      "types": [
        "Philo. Esprit",
        "Éthique des Vertus"
      ],
      "lieu": "États-Unis",
      "era": "CONTEMPORAINE",
      "imgUrl": "https://upload.wikimedia.org/wikipedia/commons/0/0f/Harry_Frankfurt_at_2017_ACLS_Annual_Meeting.jpg",
      "stats": {
        "INFLUENCE": 68,
        "RIGUEUR": 85,
        "ANCRAGE": 70,
        "PORTÉE": 75,
        "CLÔTURE": 65,
        "CLARTÉ": 78
      },
      "fr": {
        "oeuvre": "La Liberté et la volonté / De l'art de dire des conneries (On Bullshit)",
        "entree": "Frankfurt analyse la liberté de la volonté à travers la hiérarchie des désirs : les humains ont des désirs sur leurs désirs (désirs du second ordre). La liberté est la cohérence entre désirs du premier et du second ordre. Son essai sur le bullshit devient un classique de philosophie populaire.",
        "concepts": [
          {
            "nom": "LES DÉSIRS DU SECOND ORDRE",
            "cat": "transcendant",
            "type": "Philo. Esprit",
            "puissance": 85,
            "desc": "Bascule : les humains ont des désirs sur leurs désirs — la volonté libre est l'alignement entre désir et volonté de second ordre."
          },
          {
            "nom": "LA VOLONTÉ LIBRE",
            "cat": "immanent",
            "type": "Philo. Esprit",
            "puissance": 80,
            "desc": "Agir librement = agir selon la volonté qu'on voudrait avoir — l'autonomie comme cohérence hiérarchique des désirs."
          },
          {
            "nom": "LE BULLSHIT",
            "cat": "transcendant",
            "type": "Éthique des Vertus",
            "puissance": 78,
            "desc": "Bascule : le bullshitter est pire que le menteur — le menteur se soucie de la vérité (pour la dissimuler), le bullshitter s'en fout."
          }
        ],
        "filiation": {
          "maitres": [
            "LOCKE",
            "KANT",
            "HUME"
          ],
          "disciples": [
            "PHILOSOPHIE DE L'ACTION",
            "THÉORIE DE LA LIBERTÉ"
          ],
          "contre": [
            "COMPATIBILISME SIMPLE",
            "DÉTERMINISME"
          ]
        }
      },
      "en": {
        "oeuvre": "Freedom of the Will / On Bullshit",
        "entree": "Frankfurt analyzes freedom of will through the hierarchy of desires: humans have desires about their desires (second-order desires). Freedom is the coherence between first- and second-order desires. His essay on bullshit becomes a classic of popular philosophy.",
        "concepts": [
          {
            "nom": "SECOND-ORDER DESIRES",
            "cat": "transcendant",
            "type": "Philo. Esprit",
            "puissance": 85,
            "desc": "A shift: humans have desires about their desires — free will is alignment between desire and second-order volition."
          },
          {
            "nom": "FREE WILL",
            "cat": "immanent",
            "type": "Philo. Esprit",
            "puissance": 80,
            "desc": "Acting freely = acting according to the will one would want to have — autonomy as hierarchical coherence of desires."
          },
          {
            "nom": "BULLSHIT",
            "cat": "transcendant",
            "type": "Éthique des Vertus",
            "puissance": 78,
            "desc": "A shift: the bullshitter is worse than the liar — the liar cares about truth (to conceal it), the bullshitter doesn't care at all."
          }
        ],
        "filiation": {
          "maitres": [
            "LOCKE",
            "KANT",
            "HUME"
          ],
          "disciples": [
            "PHILOSOPHY OF ACTION",
            "THEORY OF FREEDOM"
          ],
          "contre": [
            "SIMPLE COMPATIBILISM",
            "DETERMINISM"
          ]
        }
      }
    },
    {
      "id": "145",
      "nom": "B.WILLMS",
      "full": "Bernard Williams",
      "dates": "1929-2003",
      "types": [
        "Éthique des Vertus",
        "Scepticisme"
      ],
      "lieu": "Angleterre",
      "era": "CONTEMPORAINE",
      "imgUrl": "https://upload.wikimedia.org/wikipedia/en/a/a6/BernardWilliams.jpg",
      "stats": {
        "INFLUENCE": 78,
        "RIGUEUR": 82,
        "ANCRAGE": 68,
        "PORTÉE": 80,
        "CLÔTURE": 60,
        "CLARTÉ": 78
      },
      "fr": {
        "oeuvre": "Intégrité morale / L'Éthique et les limites de la philosophie",
        "entree": "Williams attaque la systématisation éthique — kantianisme et utilitarisme — au nom de l'intégrité de la personne et de sa vie. Les projets personnels constituent notre identité : l'impartialité exigée par l'éthique peut exiger qu'on trahisse ce qu'on est.",
        "concepts": [
          {
            "nom": "L'INTÉGRITÉ PERSONNELLE",
            "cat": "transcendant",
            "type": "Éthique des Vertus",
            "puissance": 88,
            "desc": "Bascule : les projets qui constituent notre identité ne peuvent être sacrifiés à l'impartialité morale — le moi n'est pas un lieu neutre."
          },
          {
            "nom": "LES ENGAGEMENTS FONDAMENTAUX",
            "cat": "immanent",
            "type": "Éthique des Vertus",
            "puissance": 82,
            "desc": "Certains engagements définissent ce que nous sommes — les abandonner par principe moral serait une forme d'aliénation de soi."
          },
          {
            "nom": "CONTRE LA THÉORIE MORALE",
            "cat": "immanent",
            "type": "Scepticisme",
            "puissance": 78,
            "desc": "Les théories morales systématiques ne peuvent capturer la complexité de la vie éthique réelle — scepticisme envers l'éthique philosophique."
          }
        ],
        "filiation": {
          "maitres": [
            "ARISTOTE",
            "WITTGSTN",
            "NIETZSCHE"
          ],
          "disciples": [
            "ÉTHIQUE ANTITHÉORIQUE",
            "ÉTHIQUE DES VERTUS"
          ],
          "contre": [
            "KANT",
            "BENTHAM",
            "UTILITARISME DE SMART"
          ]
        }
      },
      "en": {
        "oeuvre": "Moral Integrity / Ethics and the Limits of Philosophy",
        "entree": "Williams attacks ethical systematization — Kantianism and utilitarianism — in the name of personal integrity and one's life. Personal projects constitute our identity: the impartiality demanded by ethics can require betraying who we are.",
        "concepts": [
          {
            "nom": "PERSONAL INTEGRITY",
            "cat": "transcendant",
            "type": "Éthique des Vertus",
            "puissance": 88,
            "desc": "A shift: the projects constituting our identity cannot be sacrificed to moral impartiality — the self is not a neutral location."
          },
          {
            "nom": "GROUND PROJECTS",
            "cat": "immanent",
            "type": "Éthique des Vertus",
            "puissance": 82,
            "desc": "Certain commitments define what we are — abandoning them on moral principle would be a form of self-alienation."
          },
          {
            "nom": "AGAINST MORAL THEORY",
            "cat": "immanent",
            "type": "Scepticisme",
            "puissance": 78,
            "desc": "Systematic moral theories cannot capture the complexity of real ethical life — skepticism toward philosophical ethics."
          }
        ],
        "filiation": {
          "maitres": [
            "ARISTOTLE",
            "WITTGSTN",
            "NIETZSCHE"
          ],
          "disciples": [
            "ANTI-THEORETICAL ETHICS",
            "VIRTUE ETHICS"
          ],
          "contre": [
            "KANT",
            "BENTHAM",
            "SMART'S UTILITARIANISM"
          ]
        }
      }
    },
    {
      "id": "146",
      "nom": "J.THOMSN",
      "full": "Judith Jarvis Thomson",
      "dates": "1929-2020",
      "types": [
        "Déontologie"
      ],
      "lieu": "États-Unis",
      "era": "CONTEMPORAINE",
      "imgUrl": "https://upload.wikimedia.org/wikipedia/en/3/3f/Judith_Jarvis_Thomson%2C_philosopher_%281929_%E2%80%93_2020%29.jpg",
      "stats": {
        "INFLUENCE": 70,
        "RIGUEUR": 88,
        "ANCRAGE": 72,
        "PORTÉE": 78,
        "CLÔTURE": 65,
        "CLARTÉ": 82
      },
      "fr": {
        "oeuvre": "Se défendre / Les Droits, la restitution et le tort",
        "entree": "Thomson développe la philosophie du trolley problem de Foot et défend les droits individuels comme contraintes absolues. Son argument du violoniste pour les droits reproductifs reste l'une des expériences de pensée les plus influentes de la philosophie contemporaine.",
        "concepts": [
          {
            "nom": "L'ARGUMENT DU VIOLONISTE",
            "cat": "transcendant",
            "type": "Déontologie",
            "puissance": 88,
            "desc": "Bascule : être relié à un violoniste talentueux pour le sauver n'implique pas l'obligation de rester — argument pour l'autonomie corporelle."
          },
          {
            "nom": "LES DROITS COMME TRUMPS",
            "cat": "immanent",
            "type": "Déontologie",
            "puissance": 82,
            "desc": "Les droits individuels fonctionnent comme des atouts (trumps) qui ne peuvent être overridés par des calculs conséquentialistes."
          },
          {
            "nom": "LE DIFFÉREND TRAMWAY/PASSERELLE",
            "cat": "immanent",
            "type": "Déontologie",
            "puissance": 80,
            "desc": "Distinctions entre cas trolley : rediriger vs pousser quelqu'un — la moralité dépend de la structure de l'action, non de ses seuls effets."
          }
        ],
        "filiation": {
          "maitres": [
            "FOOT",
            "NOZICK",
            "RAWLS"
          ],
          "disciples": [
            "DÉONTOLOGIE ANALYTIQUE CONTEMPORAINE"
          ],
          "contre": [
            "UTILITARISME (conséquentialisme)",
            "CALCULABILITÉ MORALE"
          ]
        }
      },
      "en": {
        "oeuvre": "Self-Defense / Rights, Restitution, and Risk",
        "entree": "Thomson develops Foot's trolley problem philosophy and defends individual rights as absolute constraints. Her violinist argument for reproductive rights remains one of the most influential thought experiments in contemporary philosophy.",
        "concepts": [
          {
            "nom": "THE VIOLINIST ARGUMENT",
            "cat": "transcendant",
            "type": "Déontologie",
            "puissance": 88,
            "desc": "A shift: being connected to a talented violinist to save him does not imply the obligation to remain — argument for bodily autonomy."
          },
          {
            "nom": "RIGHTS AS TRUMPS",
            "cat": "immanent",
            "type": "Déontologie",
            "puissance": 82,
            "desc": "Individual rights function as trumps that cannot be overridden by consequentialist calculations."
          },
          {
            "nom": "TROLLEY/FOOTBRIDGE DISTINCTION",
            "cat": "immanent",
            "type": "Déontologie",
            "puissance": 80,
            "desc": "Distinctions between trolley cases: redirecting vs pushing someone — morality depends on the structure of action, not its effects alone."
          }
        ],
        "filiation": {
          "maitres": [
            "FOOT",
            "NOZICK",
            "RAWLS"
          ],
          "disciples": [
            "CONTEMPORARY ANALYTIC DEONTOLOGY"
          ],
          "contre": [
            "UTILITARIANISM (consequentialism)",
            "MORAL CALCULABILITY"
          ]
        }
      }
    },
    {
      "id": "147",
      "nom": "DERRIDA",
      "full": "Jacques Derrida",
      "dates": "1930-2004",
      "types": [
        "Postmodernisme",
        "Philo. Langage"
      ],
      "lieu": "France / Algérie",
      "era": "CONTEMPORAINE",
      "imgUrl": "https://upload.wikimedia.org/wikipedia/commons/a/a4/Derrida_EHESS_%28cropped%29.png",
      "stats": {
        "INFLUENCE": 88,
        "RIGUEUR": 38,
        "ANCRAGE": 32,
        "PORTÉE": 92,
        "CLÔTURE": 35,
        "CLARTÉ": 18
      },
      "fr": {
        "oeuvre": "De la grammatologie / L'Écriture et la différence",
        "entree": "Derrida déconstruit la métaphysique occidentale comme métaphysique de la présence. Toute signification est différée — la différance produit des traces sans origine. Il n'y a pas de hors-texte, de présence pleine, d'origine non-différée.",
        "concepts": [
          {
            "nom": "LA DIFFÉRANCE",
            "cat": "transcendant",
            "type": "Postmodernisme",
            "puissance": 90,
            "desc": "Bascule : le signe ne renvoie jamais à une présence pleine — la signification est produite par un jeu de différences et de renvois sans fin."
          },
          {
            "nom": "LA DÉCONSTRUCTION",
            "cat": "immanent",
            "type": "Philo. Langage",
            "puissance": 88,
            "desc": "Stratégie de lecture qui révèle les hiérarchies implicites d'un texte, les renverse, puis dissout la hiérarchie elle-même."
          },
          {
            "nom": "IL N'Y A PAS DE HORS-TEXTE",
            "cat": "immanent",
            "type": "Postmodernisme",
            "puissance": 82,
            "desc": "Tout contexte est un texte — il n'y a pas d'accès direct à un référent ou une intention hors de la chaîne des renvois textuels."
          }
        ],
        "filiation": {
          "maitres": [
            "HEIDEGGER",
            "SAUSSURE",
            "FREUD",
            "LEVINAS"
          ],
          "disciples": [
            "ÉTUDES LITTÉRAIRES",
            "ÉTUDES COLONIALES",
            "BUTLER"
          ],
          "contre": [
            "MÉTAPHYSIQUE DE LA PRÉSENCE",
            "PHÉNOMÉNOLOGIE PURE",
            "SEARLE"
          ]
        }
      },
      "en": {
        "oeuvre": "Of Grammatology / Writing and Difference",
        "entree": "Derrida deconstructs Western metaphysics as a metaphysics of presence. All meaning is deferred — différance produces traces without origin. There is no outside-text, no full presence, no non-deferred origin.",
        "concepts": [
          {
            "nom": "DIFFÉRANCE",
            "cat": "transcendant",
            "type": "Postmodernisme",
            "puissance": 90,
            "desc": "A shift: the sign never refers to a full presence — meaning is produced by an endless play of differences and deferrals."
          },
          {
            "nom": "DECONSTRUCTION",
            "cat": "immanent",
            "type": "Philo. Langage",
            "puissance": 88,
            "desc": "A reading strategy that reveals the implicit hierarchies of a text, reverses them, then dissolves the hierarchy itself."
          },
          {
            "nom": "THERE IS NO OUTSIDE-TEXT",
            "cat": "immanent",
            "type": "Postmodernisme",
            "puissance": 82,
            "desc": "Every context is a text — there is no direct access to a referent or intention outside the chain of textual referrals."
          }
        ],
        "filiation": {
          "maitres": [
            "HEIDEGGER",
            "SAUSSURE",
            "FREUD",
            "LEVINAS"
          ],
          "disciples": [
            "LITERARY STUDIES",
            "COLONIAL STUDIES",
            "BUTLER"
          ],
          "contre": [
            "METAPHYSICS OF PRESENCE",
            "PURE PHENOMENOLOGY",
            "SEARLE"
          ]
        }
      }
    },
    {
      "id": "148",
      "nom": "PLANTGA",
      "full": "Alvin Plantinga",
      "dates": "1932-",
      "types": [
        "Philo. Religion"
      ],
      "lieu": "États-Unis",
      "era": "CONTEMPORAINE",
      "imgUrl": "https://upload.wikimedia.org/wikipedia/commons/9/9a/Alvin_Plantinga.jpg",
      "stats": {
        "INFLUENCE": 72,
        "RIGUEUR": 88,
        "ANCRAGE": 65,
        "PORTÉE": 72,
        "CLÔTURE": 62,
        "CLARTÉ": 65
      },
      "fr": {
        "oeuvre": "Dieu, la Liberté et le Mal / La Garantie",
        "entree": "Plantinga renouvelle la philosophie analytique de la religion. Sa défense de la liberté répond au problème du mal : la liberté humaine explique le mal moral. Son argument ontologique modal pour l'existence de Dieu exploite la logique des mondes possibles.",
        "concepts": [
          {
            "nom": "LA DÉFENSE DE LA LIBERTÉ",
            "cat": "immanent",
            "type": "Philo. Religion",
            "puissance": 82,
            "desc": "Réponse au problème du mal : un monde avec des êtres libres capables de choisir le bien vaut mieux qu'un monde de robots moraux."
          },
          {
            "nom": "L'ARGUMENT ONTOLOGIQUE MODAL",
            "cat": "immanent",
            "type": "Logique",
            "puissance": 80,
            "desc": "Si Dieu est possible (existant dans un monde possible) et si Dieu est nécessairement grand, alors Dieu existe dans tous les mondes possibles."
          },
          {
            "nom": "LA CROYANCE PROPREMENT BASIQUE",
            "cat": "transcendant",
            "type": "Philo. Religion",
            "puissance": 78,
            "desc": "Bascule : la croyance en Dieu peut être rationnellement appropriée sans preuve — elle est une croyance de base, comme la croyance au monde extérieur."
          }
        ],
        "filiation": {
          "maitres": [
            "AUGUSTIN",
            "LEIBNIZ",
            "DESCARTES"
          ],
          "disciples": [
            "PHILOSOPHIE ANALYTIQUE DE LA RELIGION"
          ],
          "contre": [
            "ATHÉISME LOGIQUE",
            "MACKIE (problème du mal)"
          ]
        }
      },
      "en": {
        "oeuvre": "God, Freedom, and Evil / Warrant",
        "entree": "Plantinga renews analytic philosophy of religion. His free will defense responds to the problem of evil: human freedom explains moral evil. His modal ontological argument for God's existence exploits the logic of possible worlds.",
        "concepts": [
          {
            "nom": "THE FREE WILL DEFENSE",
            "cat": "immanent",
            "type": "Philo. Religion",
            "puissance": 82,
            "desc": "A response to the problem of evil: a world with free beings capable of choosing the good is better than a world of moral robots."
          },
          {
            "nom": "MODAL ONTOLOGICAL ARGUMENT",
            "cat": "immanent",
            "type": "Logique",
            "puissance": 80,
            "desc": "If God is possible (existing in a possible world) and God is maximally great, then God exists in all possible worlds."
          },
          {
            "nom": "PROPERLY BASIC BELIEF",
            "cat": "transcendant",
            "type": "Philo. Religion",
            "puissance": 78,
            "desc": "A shift: belief in God can be rationally appropriate without proof — it is a basic belief, like belief in the external world."
          }
        ],
        "filiation": {
          "maitres": [
            "AUGUSTINE",
            "LEIBNIZ",
            "DESCARTES"
          ],
          "disciples": [
            "ANALYTIC PHILOSOPHY OF RELIGION"
          ],
          "contre": [
            "LOGICAL ATHEISM",
            "MACKIE (problem of evil)"
          ]
        }
      }
    },
    {
      "id": "149",
      "nom": "IRIGARAY",
      "full": "Luce Irigaray",
      "dates": "1932-",
      "types": [
        "Féminisme",
        "Phénoménologie"
      ],
      "lieu": "Belgique / France",
      "era": "CONTEMPORAINE",
      "imgUrl": "",
      "stats": {
        "INFLUENCE": 75,
        "RIGUEUR": 55,
        "ANCRAGE": 48,
        "PORTÉE": 82,
        "CLÔTURE": 42,
        "CLARTÉ": 42
      },
      "fr": {
        "oeuvre": "Speculum de l'autre femme / Ce sexe qui n'en est pas un",
        "entree": "Irigaray déconstruit la philosophie occidentale comme phallogocentrique : le sujet universel est toujours-déjà masculin. Elle cherche un langage et une symbolique de la féminité irréductible au masculin — une écriture du corps féminin.",
        "concepts": [
          {
            "nom": "LE PHALLOGOCENTRISME",
            "cat": "transcendant",
            "type": "Féminisme",
            "puissance": 88,
            "desc": "Bascule : la philosophie occidentale présuppose un sujet universel qui est en réalité masculin — le féminin n'est que l'envers du masculin."
          },
          {
            "nom": "LE SUJET FÉMININ",
            "cat": "immanent",
            "type": "Féminisme",
            "puissance": 82,
            "desc": "Il faut construire une symbolique féminine irréductible au paradigme masculin — non l'égalité dans le même, mais la différence dans sa positivité."
          },
          {
            "nom": "LA MORPHOLOGIE DU FÉMININ",
            "cat": "immanent",
            "type": "Phénoménologie",
            "puissance": 78,
            "desc": "Les deux lèvres qui se touchent — une morphologie du corps féminin comme modèle d'une autre logique : ni un ni deux, mais contact."
          }
        ],
        "filiation": {
          "maitres": [
            "LACAN (critique)",
            "FREUD (critique)",
            "HEIDEGGER",
            "DERRIDA"
          ],
          "disciples": [
            "FÉMINISME DE LA DIFFÉRENCE",
            "ÉTUDES DE GENRE"
          ],
          "contre": [
            "FÉMINISME DE L'ÉGALITÉ",
            "PHALLOLOGOCENTRISME"
          ]
        }
      },
      "en": {
        "oeuvre": "Speculum of the Other Woman / This Sex Which Is Not One",
        "entree": "Irigaray deconstructs Western philosophy as phallogocentric: the universal subject is always-already masculine. She seeks a language and symbolic of femininity irreducible to the masculine — a writing of the female body.",
        "concepts": [
          {
            "nom": "PHALLOGOCENTRISM",
            "cat": "transcendant",
            "type": "Féminisme",
            "puissance": 88,
            "desc": "A shift: Western philosophy presupposes a universal subject that is actually masculine — the feminine is only the reverse of the masculine."
          },
          {
            "nom": "THE FEMININE SUBJECT",
            "cat": "immanent",
            "type": "Féminisme",
            "puissance": 82,
            "desc": "A feminine symbolic irreducible to the masculine paradigm must be constructed — not equality in the same, but difference in its positivity."
          },
          {
            "nom": "FEMININE MORPHOLOGY",
            "cat": "immanent",
            "type": "Phénoménologie",
            "puissance": 78,
            "desc": "Two lips touching — a morphology of the female body as model for another logic: neither one nor two, but contact."
          }
        ],
        "filiation": {
          "maitres": [
            "LACAN (critique)",
            "FREUD (critique)",
            "HEIDEGGER",
            "DERRIDA"
          ],
          "disciples": [
            "DIFFERENCE FEMINISM",
            "GENDER STUDIES"
          ],
          "contre": [
            "EQUALITY FEMINISM",
            "PHALLOGOCENTRISM"
          ]
        }
      }
    },
    {
      "id": "150",
      "nom": "SEARLE",
      "full": "John Searle",
      "dates": "1932-",
      "types": [
        "Philo. Langage",
        "Philo. Esprit"
      ],
      "lieu": "États-Unis",
      "era": "CONTEMPORAINE",
      "imgUrl": "https://upload.wikimedia.org/wikipedia/commons/f/f4/John_Searle_speaking_at_Google_4_%28cropped%29.jpg",
      "stats": {
        "INFLUENCE": 82,
        "RIGUEUR": 85,
        "ANCRAGE": 70,
        "PORTÉE": 85,
        "CLÔTURE": 62,
        "CLARTÉ": 80
      },
      "fr": {
        "oeuvre": "Les Actes de langage / L'Intentionnalité",
        "entree": "Searle développe la théorie des actes de langage d'Austin en ajoutant les conditions de sincérité. Son argument de la chambre chinoise réfute le fonctionnalisme computationnel : un programme syntaxique ne produit pas de sémantique, et donc pas de conscience.",
        "concepts": [
          {
            "nom": "LA CHAMBRE CHINOISE",
            "cat": "transcendant",
            "type": "Philo. Esprit",
            "puissance": 90,
            "desc": "Bascule : un programme qui manipule des symboles chinois sans les comprendre montre que la syntaxe n'est pas suffisante pour la sémantique — l'IA forte est impossible."
          },
          {
            "nom": "LES CONDITIONS ILLOCUTOIRES",
            "cat": "immanent",
            "type": "Philo. Langage",
            "puissance": 82,
            "desc": "Conditions de contenu propositionnel, préparatoire et de sincérité — structure interne de tout acte de langage illocutoire."
          },
          {
            "nom": "LES FAITS INSTITUTIONNELS",
            "cat": "immanent",
            "type": "Philo. Langage",
            "puissance": 80,
            "desc": "L'argent, le mariage, le gouvernement — des faits constitués par des règles collectives : X compte comme Y dans le contexte C."
          }
        ],
        "filiation": {
          "maitres": [
            "JL. AUSTIN",
            "WITTGSTN",
            "ANSCOMBE"
          ],
          "disciples": [
            "PHILOSOPHIE DES ACTES DE LANGAGE",
            "IA ET CONSCIENCE"
          ],
          "contre": [
            "FONCTIONNALISME COMPUTATIONNEL",
            "DERRIDA (débat actes de langage)"
          ]
        }
      },
      "en": {
        "oeuvre": "Speech Acts / Intentionality",
        "entree": "Searle develops Austin's speech act theory by adding sincerity conditions. His Chinese Room argument refutes computational functionalism: a syntactic program does not produce semantics, and therefore not consciousness.",
        "concepts": [
          {
            "nom": "THE CHINESE ROOM",
            "cat": "transcendant",
            "type": "Philo. Esprit",
            "puissance": 90,
            "desc": "A shift: a program manipulating Chinese symbols without understanding them shows syntax is insufficient for semantics — strong AI is impossible."
          },
          {
            "nom": "ILLOCUTIONARY CONDITIONS",
            "cat": "immanent",
            "type": "Philo. Langage",
            "puissance": 82,
            "desc": "Conditions of propositional content, preparatory, and sincerity — the internal structure of every illocutionary speech act."
          },
          {
            "nom": "INSTITUTIONAL FACTS",
            "cat": "immanent",
            "type": "Philo. Langage",
            "puissance": 80,
            "desc": "Money, marriage, government — facts constituted by collective rules: X counts as Y in context C."
          }
        ],
        "filiation": {
          "maitres": [
            "JL. AUSTIN",
            "WITTGSTN",
            "ANSCOMBE"
          ],
          "disciples": [
            "PHILOSOPHY OF SPEECH ACTS",
            "AI AND CONSCIOUSNESS"
          ],
          "contre": [
            "COMPUTATIONAL FUNCTIONALISM",
            "DERRIDA (speech act debate)"
          ]
        }
      }
    },
    {
      "id": "151",
      "nom": "HABERMAS",
      "full": "Jürgen Habermas",
      "dates": "1929-",
      "types": [
        "Théorie Critique",
        "Pragmatisme"
      ],
      "lieu": "Allemagne",
      "era": "CONTEMPORAINE",
      "imgUrl": "https://upload.wikimedia.org/wikipedia/commons/7/75/JuergenHabermas_crop1.jpg",
      "stats": {
        "INFLUENCE": 88,
        "RIGUEUR": 78,
        "ANCRAGE": 65,
        "PORTÉE": 85,
        "CLÔTURE": 60,
        "CLARTÉ": 58
      },
      "fr": {
        "oeuvre": "Théorie de l'agir communicationnel",
        "entree": "Habermas reconstruit le projet des Lumières contre la Théorie critique pessimiste d'Adorno et Horkheimer. La raison communicationnelle oriente vers un consensus idéal — l'agir communicationnel (orienté vers l'entente) s'oppose à l'agir stratégique (orienté vers le succès).",
        "concepts": [
          {
            "nom": "L'AGIR COMMUNICATIONNEL",
            "cat": "transcendant",
            "type": "Théorie Critique",
            "puissance": 88,
            "desc": "Bascule : contre l'agir stratégique, l'agir communicationnel vise l'entente intersubjective — la raison n'est pas seulement instrumentale."
          },
          {
            "nom": "LA SITUATION DE PAROLE IDÉALE",
            "cat": "immanent",
            "type": "Pragmatisme",
            "puissance": 82,
            "desc": "Norme contrefactuelle présupposée dans toute discussion : symétrie des participants, liberté de parole, absence de contrainte — horizon régulateur."
          },
          {
            "nom": "L'ESPACE PUBLIC",
            "cat": "immanent",
            "type": "Philo. Politique",
            "puissance": 80,
            "desc": "La démocratie délibérative requiert un espace public où les raisons circulent librement — contre l'instrumentalisation politique de la communication."
          }
        ],
        "filiation": {
          "maitres": [
            "ADORNO",
            "HORKHEIMER",
            "WEBER",
            "MEAD"
          ],
          "disciples": [
            "DÉMOCRATIE DÉLIBÉRATIVE",
            "THÉORIE CRITIQUE CONTEMPORAINE"
          ],
          "contre": [
            "LYOTARD (grands récits)",
            "FOUCAULT (raison = pouvoir)"
          ]
        }
      },
      "en": {
        "oeuvre": "The Theory of Communicative Action",
        "entree": "Habermas reconstructs the Enlightenment project against the pessimistic Critical Theory of Adorno and Horkheimer. Communicative reason orients toward ideal consensus — communicative action (oriented toward understanding) opposes strategic action (oriented toward success).",
        "concepts": [
          {
            "nom": "COMMUNICATIVE ACTION",
            "cat": "transcendant",
            "type": "Théorie Critique",
            "puissance": 88,
            "desc": "A shift: against strategic action, communicative action aims at intersubjective understanding — reason is not merely instrumental."
          },
          {
            "nom": "IDEAL SPEECH SITUATION",
            "cat": "immanent",
            "type": "Pragmatisme",
            "puissance": 82,
            "desc": "A counterfactual norm presupposed in every discussion: symmetry of participants, freedom of speech, absence of constraint — a regulative horizon."
          },
          {
            "nom": "THE PUBLIC SPHERE",
            "cat": "immanent",
            "type": "Philo. Politique",
            "puissance": 80,
            "desc": "Deliberative democracy requires a public sphere where reasons circulate freely — against the political instrumentalization of communication."
          }
        ],
        "filiation": {
          "maitres": [
            "ADORNO",
            "HORKHEIMER",
            "WEBER",
            "MEAD"
          ],
          "disciples": [
            "DELIBERATIVE DEMOCRACY",
            "CONTEMPORARY CRITICAL THEORY"
          ],
          "contre": [
            "LYOTARD (grand narratives)",
            "FOUCAULT (reason = power)"
          ]
        }
      }
    },
    {
      "id": "152",
      "nom": "RORTY",
      "full": "Richard Rorty",
      "dates": "1931-2007",
      "types": [
        "Pragmatisme",
        "Postmodernisme"
      ],
      "lieu": "États-Unis",
      "era": "CONTEMPORAINE",
      "imgUrl": "https://upload.wikimedia.org/wikipedia/commons/a/af/Una_foto_en_la_ventana_de_Rorty_en_Barcelona.jpg",
      "stats": {
        "INFLUENCE": 80,
        "RIGUEUR": 58,
        "ANCRAGE": 48,
        "PORTÉE": 85,
        "CLÔTURE": 42,
        "CLARTÉ": 75
      },
      "fr": {
        "oeuvre": "La Philosophie et le miroir de la nature",
        "entree": "Rorty liquide l'épistémologie comme projet de fonder la connaissance sur des représentations exactes de la réalité. La philosophie ne doit pas chercher la Vérité mais contribuer à la conversation humaine. La solidarité remplace l'objectivité.",
        "concepts": [
          {
            "nom": "ANTI-REPRÉSENTATIONALISME",
            "cat": "transcendant",
            "type": "Pragmatisme",
            "puissance": 88,
            "desc": "Bascule : l'esprit ne mirror pas le monde — la connaissance n'est pas représentation exacte mais outil pour naviguer l'expérience."
          },
          {
            "nom": "LA SOLIDARITÉ CONTRE L'OBJECTIVITÉ",
            "cat": "immanent",
            "type": "Pragmatisme",
            "puissance": 82,
            "desc": "Nous ne pouvons fonder nos convictions sur une réalité objective — nous pouvons seulement élargir la communauté de ceux à qui nous nous sentons solidaires."
          },
          {
            "nom": "LE NÉOPRAGMATISME",
            "cat": "immanent",
            "type": "Postmodernisme",
            "puissance": 78,
            "desc": "Synthèse de Dewey, Wittgenstein et Heidegger : la philosophie comme thérapie culturelle contre l'illusion des Fondements."
          }
        ],
        "filiation": {
          "maitres": [
            "DEWEY",
            "WITTGSTN",
            "HEIDEGGER",
            "QUINE"
          ],
          "disciples": [
            "PRAGMATISME CONTEMPORAIN",
            "ÉTUDES CULTURELLES"
          ],
          "contre": [
            "RÉALISME ÉPISTÉMIQUE",
            "HABERMAS",
            "RAWLS (vérité morale)"
          ]
        }
      },
      "en": {
        "oeuvre": "Philosophy and the Mirror of Nature",
        "entree": "Rorty liquidates epistemology as a project of grounding knowledge on accurate representations of reality. Philosophy should not seek Truth but contribute to human conversation. Solidarity replaces objectivity.",
        "concepts": [
          {
            "nom": "ANTI-REPRESENTATIONALISM",
            "cat": "transcendant",
            "type": "Pragmatisme",
            "puissance": 88,
            "desc": "A shift: the mind does not mirror the world — knowledge is not accurate representation but a tool for navigating experience."
          },
          {
            "nom": "SOLIDARITY OVER OBJECTIVITY",
            "cat": "immanent",
            "type": "Pragmatisme",
            "puissance": 82,
            "desc": "We cannot ground our convictions in objective reality — we can only widen the community of those with whom we feel solidarity."
          },
          {
            "nom": "NEOPRAGMATISM",
            "cat": "immanent",
            "type": "Postmodernisme",
            "puissance": 78,
            "desc": "Synthesis of Dewey, Wittgenstein, and Heidegger: philosophy as cultural therapy against the illusion of Foundations."
          }
        ],
        "filiation": {
          "maitres": [
            "DEWEY",
            "WITTGSTN",
            "HEIDEGGER",
            "QUINE"
          ],
          "disciples": [
            "CONTEMPORARY PRAGMATISM",
            "CULTURAL STUDIES"
          ],
          "contre": [
            "EPISTEMIC REALISM",
            "HABERMAS",
            "RAWLS (moral truth)"
          ]
        }
      }
    },
    {
      "id": "153",
      "nom": "J.FODOR",
      "full": "Jerry Fodor",
      "dates": "1935-2017",
      "types": [
        "Philo. Esprit",
        "Philo. Langage"
      ],
      "lieu": "États-Unis",
      "era": "CONTEMPORAINE",
      "imgUrl": "https://upload.wikimedia.org/wikipedia/commons/e/ed/Jerry_Fodor.jpg",
      "stats": {
        "INFLUENCE": 78,
        "RIGUEUR": 88,
        "ANCRAGE": 62,
        "PORTÉE": 80,
        "CLÔTURE": 55,
        "CLARTÉ": 68
      },
      "fr": {
        "oeuvre": "Le Langage de la pensée / La Modularité de l'esprit",
        "entree": "Fodor défend le mentalisme computationnel : la cognition opère sur des représentations dans un langage de la pensée (Mentalese). L'esprit est modulaire : ses systèmes d'entrée sont encapsulés informationnellement, mais le système central reste mystérieux.",
        "concepts": [
          {
            "nom": "LE LANGAGE DE LA PENSÉE",
            "cat": "transcendant",
            "type": "Philo. Esprit",
            "puissance": 85,
            "desc": "Bascule : la cognition opère sur des représentations mentales dans un langage symbolique inné — le Mentalese, antérieur aux langues naturelles."
          },
          {
            "nom": "LA MODULARITÉ",
            "cat": "immanent",
            "type": "Philo. Esprit",
            "puissance": 82,
            "desc": "Les systèmes perceptifs sont des modules encapsulés informationnellement — ils ne peuvent être pénétrés par les croyances générales."
          },
          {
            "nom": "LE PROBLÈME DU SYSTÈME CENTRAL",
            "cat": "immanent",
            "type": "Philo. Esprit",
            "puissance": 78,
            "desc": "Si les modules sont encapsulés, le système central d'inférence reste inexplicable par les sciences cognitives actuelles — aveu d'échec courageux."
          }
        ],
        "filiation": {
          "maitres": [
            "CHOMSKY",
            "PUTNAM",
            "TURING"
          ],
          "disciples": [
            "SCIENCES COGNITIVES",
            "PSYCHOLOGIE COMPUTATIONNELLE"
          ],
          "contre": [
            "CONNEXIONNISME",
            "BÉHAVIORISME",
            "HOLISME QUINIEN"
          ]
        }
      },
      "en": {
        "oeuvre": "The Language of Thought / The Modularity of Mind",
        "entree": "Fodor defends computational mentalism: cognition operates on representations in a language of thought (Mentalese). The mind is modular: its input systems are informationally encapsulated, but the central system remains mysterious.",
        "concepts": [
          {
            "nom": "LANGUAGE OF THOUGHT",
            "cat": "transcendant",
            "type": "Philo. Esprit",
            "puissance": 85,
            "desc": "A shift: cognition operates on mental representations in an innate symbolic language — Mentalese, prior to natural languages."
          },
          {
            "nom": "MODULARITY",
            "cat": "immanent",
            "type": "Philo. Esprit",
            "puissance": 82,
            "desc": "Perceptual systems are informationally encapsulated modules — they cannot be penetrated by general beliefs."
          },
          {
            "nom": "THE CENTRAL SYSTEM PROBLEM",
            "cat": "immanent",
            "type": "Philo. Esprit",
            "puissance": 78,
            "desc": "If modules are encapsulated, the central inference system remains inexplicable by current cognitive sciences — a courageous admission of failure."
          }
        ],
        "filiation": {
          "maitres": [
            "CHOMSKY",
            "PUTNAM",
            "TURING"
          ],
          "disciples": [
            "COGNITIVE SCIENCE",
            "COMPUTATIONAL PSYCHOLOGY"
          ],
          "contre": [
            "CONNECTIONISM",
            "BEHAVIORISM",
            "QUINEAN HOLISM"
          ]
        }
      }
    },
    {
      "id": "154",
      "nom": "NAGEL",
      "full": "Thomas Nagel",
      "dates": "1937-",
      "types": [
        "Philo. Esprit",
        "Éthique des Vertus"
      ],
      "lieu": "États-Unis",
      "era": "CONTEMPORAINE",
      "imgUrl": "https://upload.wikimedia.org/wikipedia/commons/c/c3/Thomas_Nagel_%28cropped%29.jpg",
      "stats": {
        "INFLUENCE": 80,
        "RIGUEUR": 85,
        "ANCRAGE": 68,
        "PORTÉE": 82,
        "CLÔTURE": 62,
        "CLARTÉ": 78
      },
      "fr": {
        "oeuvre": "Quel effet cela fait-il d'être une chauve-souris ? / L'Esprit et le cosmos",
        "entree": "Nagel pose le problème difficile de la conscience avec une clarté exemplaire : l'expérience subjective (qualia) est irréductible à toute description physique objective. La question « quel effet cela fait-il ? » ne peut trouver de réponse dans le vocabulaire de la physique.",
        "concepts": [
          {
            "nom": "L'EFFET QUE CELA FAIT",
            "cat": "transcendant",
            "type": "Philo. Esprit",
            "puissance": 90,
            "desc": "Bascule : la conscience a un caractère subjectif irréductible — quel effet cela fait-il d'être une chauve-souris ? Aucune physique ne peut répondre."
          },
          {
            "nom": "LE PROBLÈME DIFFICILE",
            "cat": "immanent",
            "type": "Philo. Esprit",
            "puissance": 85,
            "desc": "Pourquoi des processus physiques produisent-ils une expérience subjective ? La réduction du subjectif à l'objectif est philosophiquement impossible."
          },
          {
            "nom": "LE VUE DE NULLE PART",
            "cat": "immanent",
            "type": "Éthique des Vertus",
            "puissance": 80,
            "desc": "La tension entre le point de vue personnel et le point de vue objectif (de nulle part) est irréductible — en éthique comme en épistémologie."
          }
        ],
        "filiation": {
          "maitres": [
            "DESCARTES",
            "JAMES",
            "WITTGSTN"
          ],
          "disciples": [
            "CHALMERS",
            "THÉORIES DE LA CONSCIENCE"
          ],
          "contre": [
            "RÉDUCTIONNISME PHYSICALISTE",
            "FONCTIONNALISME",
            "DENNETT"
          ]
        }
      },
      "en": {
        "oeuvre": "What Is It Like to Be a Bat? / Mind and Cosmos",
        "entree": "Nagel poses the hard problem of consciousness with exemplary clarity: subjective experience (qualia) is irreducible to any objective physical description. The question 'what is it like?' cannot find an answer in the vocabulary of physics.",
        "concepts": [
          {
            "nom": "WHAT IS IT LIKE",
            "cat": "transcendant",
            "type": "Philo. Esprit",
            "puissance": 90,
            "desc": "A shift: consciousness has an irreducible subjective character — what is it like to be a bat? No physics can answer."
          },
          {
            "nom": "THE HARD PROBLEM",
            "cat": "immanent",
            "type": "Philo. Esprit",
            "puissance": 85,
            "desc": "Why do physical processes produce subjective experience? The reduction of the subjective to the objective is philosophically impossible."
          },
          {
            "nom": "THE VIEW FROM NOWHERE",
            "cat": "immanent",
            "type": "Éthique des Vertus",
            "puissance": 80,
            "desc": "The tension between the personal and objective (view from nowhere) viewpoints is irreducible — in ethics as in epistemology."
          }
        ],
        "filiation": {
          "maitres": [
            "DESCARTES",
            "JAMES",
            "WITTGSTN"
          ],
          "disciples": [
            "CHALMERS",
            "THEORIES OF CONSCIOUSNESS"
          ],
          "contre": [
            "PHYSICALIST REDUCTIONISM",
            "FUNCTIONALISM",
            "DENNETT"
          ]
        }
      }
    },
    {
      "id": "155",
      "nom": "HARDING",
      "full": "Sandra Harding",
      "dates": "1935-2025",
      "types": [
        "Féminisme",
        "Philo. Sciences"
      ],
      "lieu": "États-Unis",
      "era": "CONTEMPORAINE",
      "imgUrl": "",
      "stats": {
        "INFLUENCE": 68,
        "RIGUEUR": 68,
        "ANCRAGE": 58,
        "PORTÉE": 75,
        "CLÔTURE": 52,
        "CLARTÉ": 70
      },
      "fr": {
        "oeuvre": "La Question de la science dans le féminisme",
        "entree": "Harding fonde l'épistémologie du point de vue féministe (standpoint epistemology) : les positions sociales marginalisées produisent une connaissance plus objective. Le « démarrage fort » féministe contre la fausse neutralité de la science dominante.",
        "concepts": [
          {
            "nom": "L'ÉPISTÉMOLOGIE DU POINT DE VUE",
            "cat": "transcendant",
            "type": "Féminisme",
            "puissance": 82,
            "desc": "Bascule : les positions sociales marginalisées donnent accès à des vérités invisibles depuis les positions dominantes — la marginalité comme ressource épistémique."
          },
          {
            "nom": "LE DÉMARRAGE FORT",
            "cat": "immanent",
            "type": "Philo. Sciences",
            "puissance": 78,
            "desc": "Les sciences féministes sont plus objectives que les sciences mainstream — leur réflexivité sur les biais idéologiques améliore la connaissance."
          },
          {
            "nom": "LA SCIENCE SITUÉE",
            "cat": "immanent",
            "type": "Féminisme",
            "puissance": 75,
            "desc": "Toute connaissance est produite depuis une position sociale — la neutralité est une idéologie qui masque le point de vue dominant masculin."
          }
        ],
        "filiation": {
          "maitres": [
            "HARTSOCK",
            "MARX",
            "MANNHEIM"
          ],
          "disciples": [
            "ÉTUDES FÉMINISTES DES SCIENCES",
            "ÉPISTÉMOLOGIE SOCIALE"
          ],
          "contre": [
            "NEUTRALITÉ SCIENTIFIQUE",
            "POSITIVISME",
            "SCIENTISME"
          ]
        }
      },
      "en": {
        "oeuvre": "The Science Question in Feminism",
        "entree": "Harding founds feminist standpoint epistemology: marginalized social positions produce more objective knowledge. The feminist 'strong start' against the false neutrality of mainstream science.",
        "concepts": [
          {
            "nom": "STANDPOINT EPISTEMOLOGY",
            "cat": "transcendant",
            "type": "Féminisme",
            "puissance": 82,
            "desc": "A shift: marginalized social positions provide access to truths invisible from dominant positions — marginality as epistemic resource."
          },
          {
            "nom": "STRONG OBJECTIVITY",
            "cat": "immanent",
            "type": "Philo. Sciences",
            "puissance": 78,
            "desc": "Feminist sciences are more objective than mainstream ones — their reflexivity on ideological biases improves knowledge."
          },
          {
            "nom": "SITUATED SCIENCE",
            "cat": "immanent",
            "type": "Féminisme",
            "puissance": 75,
            "desc": "All knowledge is produced from a social position — neutrality is an ideology masking the dominant masculine viewpoint."
          }
        ],
        "filiation": {
          "maitres": [
            "HARTSOCK",
            "MARX",
            "MANNHEIM"
          ],
          "disciples": [
            "FEMINIST SCIENCE STUDIES",
            "SOCIAL EPISTEMOLOGY"
          ],
          "contre": [
            "SCIENTIFIC NEUTRALITY",
            "POSITIVISM",
            "SCIENTISM"
          ]
        }
      }
    },
    {
      "id": "156",
      "nom": "GILLIGAN",
      "full": "Carol Gilligan",
      "dates": "1936-",
      "types": [
        "Éthique du Soin",
        "Féminisme"
      ],
      "lieu": "États-Unis",
      "era": "CONTEMPORAINE",
      "imgUrl": "https://upload.wikimedia.org/wikipedia/commons/0/0b/Carol_Gilligan_P1010970_-_cropped.jpg",
      "stats": {
        "INFLUENCE": 75,
        "RIGUEUR": 65,
        "ANCRAGE": 62,
        "PORTÉE": 78,
        "CLÔTURE": 58,
        "CLARTÉ": 80
      },
      "fr": {
        "oeuvre": "Une si grande différence",
        "entree": "Gilligan critique les théories du développement moral de Kohlberg, fondées sur des études d'hommes uniquement. Il existe une voix différente, féminine, centrée sur le soin, la relation et le contexte — non inférieure mais différente de la morale kantienne abstraite.",
        "concepts": [
          {
            "nom": "L'ÉTHIQUE DU SOIN",
            "cat": "transcendant",
            "type": "Éthique du Soin",
            "puissance": 85,
            "desc": "Bascule : une orientation morale fondée sur la relation, le contexte et le soin est distincte de — et complémentaire à — la morale de la justice."
          },
          {
            "nom": "LA VOIX DIFFÉRENTE",
            "cat": "immanent",
            "type": "Féminisme",
            "puissance": 80,
            "desc": "La psychologie morale dominante est biaisée — les femmes développent une orientation au soin systématiquement ignorée par Kohlberg."
          },
          {
            "nom": "LE CONTEXTE CONTRE L'ABSTRACTION",
            "cat": "immanent",
            "type": "Éthique du Soin",
            "puissance": 75,
            "desc": "La résolution morale n'est pas l'application de règles abstraites mais la réponse sensible à la singularité des personnes et des relations."
          }
        ],
        "filiation": {
          "maitres": [
            "KOHLBERG (critique)",
            "CHODOROW",
            "NODDINGS"
          ],
          "disciples": [
            "ÉTHIQUE DU SOIN",
            "FÉMINISME MORAL"
          ],
          "contre": [
            "KOHLBERG",
            "KANT",
            "RAWLS (abstraction)"
          ]
        }
      },
      "en": {
        "oeuvre": "In a Different Voice",
        "entree": "Gilligan critiques Kohlberg's theories of moral development, based on studies of men only. There is a different, feminine voice centered on care, relationship, and context — not inferior but different from abstract Kantian morality.",
        "concepts": [
          {
            "nom": "THE ETHICS OF CARE",
            "cat": "transcendant",
            "type": "Éthique du Soin",
            "puissance": 85,
            "desc": "A shift: a moral orientation based on relationship, context, and care is distinct from — and complementary to — the morality of justice."
          },
          {
            "nom": "THE DIFFERENT VOICE",
            "cat": "immanent",
            "type": "Féminisme",
            "puissance": 80,
            "desc": "Dominant moral psychology is biased — women develop a care orientation systematically ignored by Kohlberg."
          },
          {
            "nom": "CONTEXT OVER ABSTRACTION",
            "cat": "immanent",
            "type": "Éthique du Soin",
            "puissance": 75,
            "desc": "Moral resolution is not the application of abstract rules but sensitive response to the singularity of persons and relationships."
          }
        ],
        "filiation": {
          "maitres": [
            "KOHLBERG (critique)",
            "CHODOROW",
            "NODDINGS"
          ],
          "disciples": [
            "CARE ETHICS",
            "MORAL FEMINISM"
          ],
          "contre": [
            "KOHLBERG",
            "KANT",
            "RAWLS (abstraction)"
          ]
        }
      }
    },
    {
      "id": "157",
      "nom": "D.HULL",
      "full": "David Hull",
      "dates": "1935-2010",
      "types": [
        "Philo. Sciences",
        "Matérialisme"
      ],
      "lieu": "États-Unis",
      "era": "CONTEMPORAINE",
      "imgUrl": "",
      "stats": {
        "INFLUENCE": 55,
        "RIGUEUR": 82,
        "ANCRAGE": 68,
        "PORTÉE": 62,
        "CLÔTURE": 62,
        "CLARTÉ": 70
      },
      "fr": {
        "oeuvre": "La Philosophie de la biologie",
        "entree": "Hull développe une philosophie de la biologie évolutionnaire rigoureuse. Il défend une conception des espèces comme individus (non classes) et applique la sélection darwinienne à l'évolution conceptuelle elle-même — les idées évoluent comme des organismes.",
        "concepts": [
          {
            "nom": "LES ESPÈCES COMME INDIVIDUS",
            "cat": "transcendant",
            "type": "Philo. Sciences",
            "puissance": 80,
            "desc": "Bascule ontologique : les espèces sont des individus historiques, non des classes naturelles — elles ont un début, une fin, pas d'essence immuable."
          },
          {
            "nom": "LA SÉLECTION CONCEPTUELLE",
            "cat": "immanent",
            "type": "Philo. Sciences",
            "puissance": 75,
            "desc": "Les idées scientifiques évoluent par sélection — réplication, variation, sélection s'appliquent à l'histoire des théories."
          },
          {
            "nom": "LE DARWINISME GÉNÉRALISÉ",
            "cat": "immanent",
            "type": "Matérialisme",
            "puissance": 72,
            "desc": "Le mécanisme darwinien (variation, sélection, hérédité) s'applique à toute entité évolutionnaire — biologique, culturelle, conceptuelle."
          }
        ],
        "filiation": {
          "maitres": [
            "DARWIN",
            "POPPER",
            "GHISELIN"
          ],
          "disciples": [
            "PHILOSOPHIE DE LA BIOLOGIE",
            "ÉVOLUTION CULTURELLE"
          ],
          "contre": [
            "ESSENTIALISME BIOLOGIQUE",
            "CRÉATIONNISME"
          ]
        }
      },
      "en": {
        "oeuvre": "The Philosophy of Biological Science",
        "entree": "Hull develops a rigorous evolutionary philosophy of biology. He defends a conception of species as individuals (not classes) and applies Darwinian selection to conceptual evolution itself — ideas evolve like organisms.",
        "concepts": [
          {
            "nom": "SPECIES AS INDIVIDUALS",
            "cat": "transcendant",
            "type": "Philo. Sciences",
            "puissance": 80,
            "desc": "An ontological shift: species are historical individuals, not natural classes — they have a beginning, an end, no immutable essence."
          },
          {
            "nom": "CONCEPTUAL SELECTION",
            "cat": "immanent",
            "type": "Philo. Sciences",
            "puissance": 75,
            "desc": "Scientific ideas evolve by selection — replication, variation, and selection apply to the history of theories."
          },
          {
            "nom": "GENERALIZED DARWINISM",
            "cat": "immanent",
            "type": "Matérialisme",
            "puissance": 72,
            "desc": "The Darwinian mechanism (variation, selection, heredity) applies to any evolutionary entity — biological, cultural, conceptual."
          }
        ],
        "filiation": {
          "maitres": [
            "DARWIN",
            "POPPER",
            "GHISELIN"
          ],
          "disciples": [
            "PHILOSOPHY OF BIOLOGY",
            "CULTURAL EVOLUTION"
          ],
          "contre": [
            "BIOLOGICAL ESSENTIALISM",
            "CREATIONISM"
          ]
        }
      }
    },
    {
      "id": "158",
      "nom": "A.GOLDMN",
      "full": "Alvin Goldman",
      "dates": "1938-2024",
      "types": [
        "Empirisme",
        "Réalisme"
      ],
      "lieu": "États-Unis",
      "era": "CONTEMPORAINE",
      "imgUrl": "https://upload.wikimedia.org/wikipedia/commons/8/81/Alvin_Goldman_1966.jpg",
      "stats": {
        "INFLUENCE": 70,
        "RIGUEUR": 85,
        "ANCRAGE": 68,
        "PORTÉE": 72,
        "CLÔTURE": 62,
        "CLARTÉ": 75
      },
      "fr": {
        "oeuvre": "Connaissance dans un monde social",
        "entree": "Goldman fonde l'épistémologie fiabiliste : une croyance est justifiée si elle est produite par un processus cognitif fiable. Cette approche naturaliste répond aux contre-exemples de Gettier sans recourir à des conditions purement logiques.",
        "concepts": [
          {
            "nom": "LE FIABILISME",
            "cat": "transcendant",
            "type": "Empirisme",
            "puissance": 82,
            "desc": "Bascule naturaliste : la justification épistémique n'est pas interne mais causale — une croyance est justifiée si produite par un processus fiable."
          },
          {
            "nom": "LA THÉORIE CAUSALE DE LA CONNAISSANCE",
            "cat": "immanent",
            "type": "Empirisme",
            "puissance": 80,
            "desc": "Réponse à Gettier : la connaissance requiert une connexion causale appropriée entre le fait et la croyance vraie."
          },
          {
            "nom": "L'ÉPISTÉMOLOGIE SOCIALE",
            "cat": "immanent",
            "type": "Réalisme",
            "puissance": 75,
            "desc": "La connaissance est une activité sociale — les institutions et pratiques épistémiques peuvent être évaluées comme conductrices ou non à la vérité."
          }
        ],
        "filiation": {
          "maitres": [
            "QUINE",
            "GETTIER (réponse)",
            "ARMSTRONG"
          ],
          "disciples": [
            "ÉPISTÉMOLOGIE NATURALISÉE",
            "ÉPISTÉMOLOGIE SOCIALE"
          ],
          "contre": [
            "INTERNALISME ÉPISTÉMIQUE",
            "IDÉALISME ÉPISTÉMIQUE"
          ]
        }
      },
      "en": {
        "oeuvre": "Knowledge in a Social World",
        "entree": "Goldman founds reliabilist epistemology: a belief is justified if produced by a reliable cognitive process. This naturalistic approach responds to Gettier counterexamples without resorting to purely logical conditions.",
        "concepts": [
          {
            "nom": "RELIABILISM",
            "cat": "transcendant",
            "type": "Empirisme",
            "puissance": 82,
            "desc": "A naturalist shift: epistemic justification is not internal but causal — a belief is justified if produced by a reliable process."
          },
          {
            "nom": "CAUSAL THEORY OF KNOWLEDGE",
            "cat": "immanent",
            "type": "Empirisme",
            "puissance": 80,
            "desc": "A response to Gettier: knowledge requires an appropriate causal connection between the fact and the true belief."
          },
          {
            "nom": "SOCIAL EPISTEMOLOGY",
            "cat": "immanent",
            "type": "Réalisme",
            "puissance": 75,
            "desc": "Knowledge is a social activity — epistemic institutions and practices can be evaluated as conducive or not to truth."
          }
        ],
        "filiation": {
          "maitres": [
            "QUINE",
            "GETTIER (response)",
            "ARMSTRONG"
          ],
          "disciples": [
            "NATURALIZED EPISTEMOLOGY",
            "SOCIAL EPISTEMOLOGY"
          ],
          "contre": [
            "EPISTEMIC INTERNALISM",
            "EPISTEMIC IDEALISM"
          ]
        }
      }
    },
    {
      "id": "159",
      "nom": "E.HIRSCH",
      "full": "Eli Hirsch",
      "dates": "1938-",
      "types": [
        "Réalisme",
        "Métaphysique"
      ],
      "lieu": "États-Unis",
      "era": "CONTEMPORAINE",
      "imgUrl": "",
      "stats": {
        "INFLUENCE": 50,
        "RIGUEUR": 80,
        "ANCRAGE": 65,
        "PORTÉE": 60,
        "CLÔTURE": 60,
        "CLARTÉ": 72
      },
      "fr": {
        "oeuvre": "La Permanence des objets",
        "entree": "Hirsch défend le sens commun contre les révisions ontologiques radicales. Ses adversaires (van Inwagen, Sider) prétendent réviser nos croyances sur l'existence des objets — Hirsch répond qu'ils changent simplement de langage, pas de vérité.",
        "concepts": [
          {
            "nom": "LE RELATIVISME QUANTIFICATIONNEL",
            "cat": "transcendant",
            "type": "Réalisme",
            "puissance": 78,
            "desc": "Bascule : les disputes ontologiques ne portent pas sur les faits mais sur la façon de quantifier — elles se résolvent par la charité linguistique."
          },
          {
            "nom": "LA CHARITÉ LINGUISTIQUE",
            "cat": "immanent",
            "type": "Réalisme",
            "puissance": 75,
            "desc": "En interprétant une communauté, on doit lui attribuer les croyances qui maximisent sa cohérence — le sens commun est généralement correct."
          },
          {
            "nom": "LA PERMANENCE DES OBJETS",
            "cat": "immanent",
            "type": "Métaphysique",
            "puissance": 70,
            "desc": "Les objets ordinaires persistent à travers le temps — contre le quatre-dimensionnalisme et le nihilisme compositionnel qui les eliminent."
          }
        ],
        "filiation": {
          "maitres": [
            "QUINE",
            "PUTNAM",
            "WITTGSTN"
          ],
          "disciples": [
            "MÉTAPHYSIQUE DU SENS COMMUN"
          ],
          "contre": [
            "VAN INWAGEN",
            "SIDER",
            "NIHILISME COMPOSITIONNEL"
          ]
        }
      },
      "en": {
        "oeuvre": "The Persistence of Objects",
        "entree": "Hirsch defends common sense against radical ontological revisions. His opponents (van Inwagen, Sider) claim to revise our beliefs about the existence of objects — Hirsch responds that they are simply changing language, not truth.",
        "concepts": [
          {
            "nom": "QUANTIFIER VARIANTISM",
            "cat": "transcendant",
            "type": "Réalisme",
            "puissance": 78,
            "desc": "A shift: ontological disputes are not about facts but about how to quantify — they dissolve through linguistic charity."
          },
          {
            "nom": "LINGUISTIC CHARITY",
            "cat": "immanent",
            "type": "Réalisme",
            "puissance": 75,
            "desc": "In interpreting a community, one must attribute the beliefs that maximize its coherence — common sense is generally correct."
          },
          {
            "nom": "PERSISTENCE OF OBJECTS",
            "cat": "immanent",
            "type": "Métaphysique",
            "puissance": 70,
            "desc": "Ordinary objects persist through time — against four-dimensionalism and compositional nihilism that eliminate them."
          }
        ],
        "filiation": {
          "maitres": [
            "QUINE",
            "PUTNAM",
            "WITTGSTN"
          ],
          "disciples": [
            "COMMON SENSE METAPHYSICS"
          ],
          "contre": [
            "VAN INWAGEN",
            "SIDER",
            "COMPOSITIONAL NIHILISM"
          ]
        }
      }
    },
    {
      "id": "160",
      "nom": "NOZICK",
      "full": "Robert Nozick",
      "dates": "1938-2002",
      "types": [
        "Libéralisme",
        "Éthique des Vertus"
      ],
      "lieu": "États-Unis",
      "era": "CONTEMPORAINE",
      "imgUrl": "https://upload.wikimedia.org/wikipedia/commons/c/cb/Robert_Nozick_1977_Libertarian_Review_cover_%284x5_cropped%29.jpg",
      "stats": {
        "INFLUENCE": 82,
        "RIGUEUR": 82,
        "ANCRAGE": 62,
        "PORTÉE": 85,
        "CLÔTURE": 55,
        "CLARTÉ": 80
      },
      "fr": {
        "oeuvre": "Anarchie, État et Utopie",
        "entree": "Nozick répond à Rawls avec une théorie libertarienne des droits : l'État minimal est le seul légitime. Les individus ont des droits inviolables d'auto-propriété — toute redistribution forcée est illégitime même si elle améliore la situation des plus pauvres.",
        "concepts": [
          {
            "nom": "LES DROITS COMME CONTRAINTES ABSOLUES",
            "cat": "transcendant",
            "type": "Libéralisme",
            "puissance": 88,
            "desc": "Bascule : les individus ont des droits inviolables — aucun bien collectif ne justifie leur violation. « Les individus existent, les groupes non »."
          },
          {
            "nom": "L'ÉTAT MINIMAL",
            "cat": "immanent",
            "type": "Libéralisme",
            "puissance": 85,
            "desc": "Seul l'État minimal (protection des droits) est légitime — l'État-providence redistribue de façon illégitime des ressources appartenant à des individus."
          },
          {
            "nom": "LA THÉORIE DE L'HABILITATION",
            "cat": "immanent",
            "type": "Libéralisme",
            "puissance": 82,
            "desc": "Une distribution est juste si elle résulte d'une séquence de transferts volontaires légitimes depuis une acquisition initiale légitime — contre Rawls."
          }
        ],
        "filiation": {
          "maitres": [
            "LOCKE",
            "KANT",
            "HAYEK"
          ],
          "disciples": [
            "LIBERTARIANISME",
            "DROITE LIBÉRALE"
          ],
          "contre": [
            "RAWLS",
            "SOCIALISME",
            "UTILITARISME"
          ]
        }
      },
      "en": {
        "oeuvre": "Anarchy, State, and Utopia",
        "entree": "Nozick responds to Rawls with a libertarian theory of rights: the minimal state is the only legitimate one. Individuals have inviolable rights of self-ownership — any forced redistribution is illegitimate even if it improves the situation of the poorest.",
        "concepts": [
          {
            "nom": "RIGHTS AS SIDE CONSTRAINTS",
            "cat": "transcendant",
            "type": "Libéralisme",
            "puissance": 88,
            "desc": "A shift: individuals have inviolable rights — no collective good justifies their violation. 'Individuals exist; groups do not.'"
          },
          {
            "nom": "THE MINIMAL STATE",
            "cat": "immanent",
            "type": "Libéralisme",
            "puissance": 85,
            "desc": "Only the minimal state (rights protection) is legitimate — the welfare state illegitimately redistributes resources belonging to individuals."
          },
          {
            "nom": "ENTITLEMENT THEORY",
            "cat": "immanent",
            "type": "Libéralisme",
            "puissance": 82,
            "desc": "A distribution is just if it results from a sequence of voluntary legitimate transfers from a legitimate initial acquisition — against Rawls."
          }
        ],
        "filiation": {
          "maitres": [
            "LOCKE",
            "KANT",
            "HAYEK"
          ],
          "disciples": [
            "LIBERTARIANISM",
            "LIBERAL RIGHT"
          ],
          "contre": [
            "RAWLS",
            "SOCIALISM",
            "UTILITARIANISM"
          ]
        }
      }
    },
    {
      "id": "161",
      "nom": "KRIPKE",
      "full": "Saul Kripke",
      "dates": "1940-2022",
      "types": [
        "Logique",
        "Réalisme"
      ],
      "lieu": "États-Unis",
      "era": "CONTEMPORAINE",
      "imgUrl": "https://upload.wikimedia.org/wikipedia/commons/d/d4/Kripke.JPG",
      "stats": {
        "INFLUENCE": 88,
        "RIGUEUR": 95,
        "ANCRAGE": 72,
        "PORTÉE": 90,
        "CLÔTURE": 65,
        "CLARTÉ": 70
      },
      "fr": {
        "oeuvre": "La Logique des noms propres / Wittgenstein : règles et langage privé",
        "entree": "Kripke révolutionne la philosophie du langage et la métaphysique. Les noms propres sont des désignateurs rigides — ils réfèrent au même individu dans tous les mondes possibles. L'eau = H2O est nécessaire a posteriori : une nouvelle catégorie contre Kant.",
        "concepts": [
          {
            "nom": "LES DÉSIGNATEURS RIGIDES",
            "cat": "transcendant",
            "type": "Logique",
            "puissance": 90,
            "desc": "Bascule : les noms propres désignent le même objet dans tous les mondes possibles — contre les descriptions définies frégéennes."
          },
          {
            "nom": "LE NÉCESSAIRE A POSTERIORI",
            "cat": "transcendant",
            "type": "Réalisme",
            "puissance": 88,
            "desc": "L'eau = H2O est nécessairement vraie mais connue a posteriori — réfutation de l'identité kantienne nécessaire = a priori."
          },
          {
            "nom": "LA SÉMANTIQUE DES MONDES POSSIBLES",
            "cat": "immanent",
            "type": "Logique",
            "puissance": 85,
            "desc": "Formalisation de la modalité : un énoncé est nécessairement vrai si vrai dans tous les mondes possibles accessibles — Kripke frames pour les logiques modales."
          }
        ],
        "filiation": {
          "maitres": [
            "FREGE (critique)",
            "RUSSELL (critique)",
            "CARNAP (critique)"
          ],
          "disciples": [
            "PHILOSOPHIE ANALYTIQUE CONTEMPORAINE",
            "MÉTAPHYSIQUE MODALE"
          ],
          "contre": [
            "THÉORIE DESCRIPTIVISTE DES NOMS",
            "FREGE",
            "RUSSELL"
          ]
        }
      },
      "en": {
        "oeuvre": "Naming and Necessity / Wittgenstein on Rules and Private Language",
        "entree": "Kripke revolutionizes philosophy of language and metaphysics. Proper names are rigid designators — they refer to the same individual in all possible worlds. Water = H2O is necessary a posteriori: a new category against Kant.",
        "concepts": [
          {
            "nom": "RIGID DESIGNATORS",
            "cat": "transcendant",
            "type": "Logique",
            "puissance": 90,
            "desc": "A shift: proper names designate the same object in all possible worlds — against Fregean definite descriptions."
          },
          {
            "nom": "NECESSARY A POSTERIORI",
            "cat": "transcendant",
            "type": "Réalisme",
            "puissance": 88,
            "desc": "Water = H2O is necessarily true but known a posteriori — refutation of the Kantian identity necessary = a priori."
          },
          {
            "nom": "POSSIBLE WORLDS SEMANTICS",
            "cat": "immanent",
            "type": "Logique",
            "puissance": 85,
            "desc": "Formalization of modality: a statement is necessarily true if true in all accessible possible worlds — Kripke frames for modal logics."
          }
        ],
        "filiation": {
          "maitres": [
            "FREGE (critique)",
            "RUSSELL (critique)",
            "CARNAP (critique)"
          ],
          "disciples": [
            "CONTEMPORARY ANALYTIC PHILOSOPHY",
            "MODAL METAPHYSICS"
          ],
          "contre": [
            "DESCRIPTIVIST THEORY OF NAMES",
            "FREGE",
            "RUSSELL"
          ]
        }
      }
    },
    {
      "id": "162",
      "nom": "L.LAUDAN",
      "full": "Larry Laudan",
      "dates": "1941-2022",
      "types": [
        "Philo. Sciences",
        "Scepticisme"
      ],
      "lieu": "États-Unis",
      "era": "CONTEMPORAINE",
      "imgUrl": "",
      "stats": {
        "INFLUENCE": 60,
        "RIGUEUR": 85,
        "ANCRAGE": 65,
        "PORTÉE": 72,
        "CLÔTURE": 60,
        "CLARTÉ": 75
      },
      "fr": {
        "oeuvre": "Le Progrès et ses problèmes",
        "entree": "Laudan attaque le réalisme scientifique par la méta-induction pessimiste : l'histoire de la science est jonchée de théories très réussies qui se sont révélées fausses (éther, calorie, phlogistique) — le succès prédictif ne garantit pas la vérité.",
        "concepts": [
          {
            "nom": "LA MÉTA-INDUCTION PESSIMISTE",
            "cat": "transcendant",
            "type": "Scepticisme",
            "puissance": 88,
            "desc": "Bascule anti-réaliste : les théories passées très réussies étaient fausses — rien ne garantit que nos théories actuelles réussies sont vraies."
          },
          {
            "nom": "LA RÉSOLUTION DES ANOMALIES",
            "cat": "immanent",
            "type": "Philo. Sciences",
            "puissance": 78,
            "desc": "Le progrès scientifique se mesure à la résolution de problèmes empiriques et conceptuels — pas à la vérité ou à la vérisimilitude."
          },
          {
            "nom": "CONTRE LE RÉALISME CONVERGENT",
            "cat": "immanent",
            "type": "Scepticisme",
            "puissance": 75,
            "desc": "La science ne converge pas vers la vérité — les entités théoriques changent radicalement entre révolutions scientifiques."
          }
        ],
        "filiation": {
          "maitres": [
            "KUHN",
            "LAUDAN SR.",
            "LAKATOS"
          ],
          "disciples": [
            "ANTI-RÉALISME SCIENTIFIQUE"
          ],
          "contre": [
            "RÉALISME SCIENTIFIQUE",
            "PUTNAM",
            "BOYD"
          ]
        }
      },
      "en": {
        "oeuvre": "Progress and Its Problems",
        "entree": "Laudan attacks scientific realism with the pessimistic meta-induction: the history of science is littered with very successful theories that turned out to be false (ether, caloric, phlogiston) — predictive success does not guarantee truth.",
        "concepts": [
          {
            "nom": "PESSIMISTIC META-INDUCTION",
            "cat": "transcendant",
            "type": "Scepticisme",
            "puissance": 88,
            "desc": "An anti-realist shift: past very successful theories were false — nothing guarantees that our current successful theories are true."
          },
          {
            "nom": "PROBLEM-SOLVING",
            "cat": "immanent",
            "type": "Philo. Sciences",
            "puissance": 78,
            "desc": "Scientific progress is measured by the resolution of empirical and conceptual problems — not by truth or verisimilitude."
          },
          {
            "nom": "AGAINST CONVERGENT REALISM",
            "cat": "immanent",
            "type": "Scepticisme",
            "puissance": 75,
            "desc": "Science does not converge toward truth — theoretical entities change radically between scientific revolutions."
          }
        ],
        "filiation": {
          "maitres": [
            "KUHN",
            "LAKATOS"
          ],
          "disciples": [
            "SCIENTIFIC ANTI-REALISM"
          ],
          "contre": [
            "SCIENTIFIC REALISM",
            "PUTNAM",
            "BOYD"
          ]
        }
      }
    },
    {
      "id": "163",
      "nom": "VAN.FRAS",
      "full": "Bas van Fraassen",
      "dates": "1941-",
      "types": [
        "Philo. Sciences",
        "Scepticisme"
      ],
      "lieu": "Pays-Bas / États-Unis",
      "era": "CONTEMPORAINE",
      "imgUrl": "",
      "stats": {
        "INFLUENCE": 72,
        "RIGUEUR": 88,
        "ANCRAGE": 68,
        "PORTÉE": 78,
        "CLÔTURE": 62,
        "CLARTÉ": 68
      },
      "fr": {
        "oeuvre": "L'Image scientifique",
        "entree": "Van Fraassen défend l'empirisme constructif contre le réalisme scientifique : accepter une théorie, c'est croire qu'elle est empiriquement adéquate (qu'elle décrit correctement les phénomènes observables), pas qu'elle est vraie sur les entités inobservables.",
        "concepts": [
          {
            "nom": "L'EMPIRISME CONSTRUCTIF",
            "cat": "transcendant",
            "type": "Scepticisme",
            "puissance": 85,
            "desc": "Bascule : l'acceptation d'une théorie n'engage qu'à son adéquation empirique — les entités inobservables (électrons, quarks) restent épistémiquement neutres."
          },
          {
            "nom": "L'ADÉQUATION EMPIRIQUE",
            "cat": "immanent",
            "type": "Philo. Sciences",
            "puissance": 82,
            "desc": "Une théorie est empiriquement adéquate si ce qu'elle dit des phénomènes observables est vrai — critère modeste contre la vérité réaliste."
          },
          {
            "nom": "LA DISTINCTION OBSERVABLE/INOBSERVABLE",
            "cat": "immanent",
            "type": "Scepticisme",
            "puissance": 78,
            "desc": "La ligne entre observable et inobservable est contextuelle et pragmatique — non métaphysique mais épistémiquement cruciale."
          }
        ],
        "filiation": {
          "maitres": [
            "MACH",
            "DUHEM",
            "CARNAP"
          ],
          "disciples": [
            "ANTI-RÉALISME SCIENTIFIQUE",
            "STRUCTURAL REALISM (réponse)"
          ],
          "contre": [
            "RÉALISME SCIENTIFIQUE",
            "BOYD",
            "PUTNAM"
          ]
        }
      },
      "en": {
        "oeuvre": "The Scientific Image",
        "entree": "Van Fraassen defends constructive empiricism against scientific realism: accepting a theory means believing it is empirically adequate (that it correctly describes observable phenomena), not that it is true about unobservable entities.",
        "concepts": [
          {
            "nom": "CONSTRUCTIVE EMPIRICISM",
            "cat": "transcendant",
            "type": "Scepticisme",
            "puissance": 85,
            "desc": "A shift: accepting a theory commits only to its empirical adequacy — unobservable entities (electrons, quarks) remain epistemically neutral."
          },
          {
            "nom": "EMPIRICAL ADEQUACY",
            "cat": "immanent",
            "type": "Philo. Sciences",
            "puissance": 82,
            "desc": "A theory is empirically adequate if what it says about observable phenomena is true — a modest criterion against realist truth."
          },
          {
            "nom": "OBSERVABLE/UNOBSERVABLE DISTINCTION",
            "cat": "immanent",
            "type": "Scepticisme",
            "puissance": 78,
            "desc": "The line between observable and unobservable is contextual and pragmatic — not metaphysical but epistemically crucial."
          }
        ],
        "filiation": {
          "maitres": [
            "MACH",
            "DUHEM",
            "CARNAP"
          ],
          "disciples": [
            "SCIENTIFIC ANTI-REALISM",
            "STRUCTURAL REALISM (response)"
          ],
          "contre": [
            "SCIENTIFIC REALISM",
            "BOYD",
            "PUTNAM"
          ]
        }
      }
    },
    {
      "id": "164",
      "nom": "JACKSON",
      "full": "Frank Jackson",
      "dates": "1943-",
      "types": [
        "Philo. Esprit",
        "Dualisme"
      ],
      "lieu": "Australie",
      "era": "CONTEMPORAINE",
      "imgUrl": "https://upload.wikimedia.org/wikipedia/commons/8/85/FrankJackson.jpg",
      "stats": {
        "INFLUENCE": 72,
        "RIGUEUR": 88,
        "ANCRAGE": 62,
        "PORTÉE": 80,
        "CLÔTURE": 58,
        "CLARTÉ": 82
      },
      "fr": {
        "oeuvre": "Épiphénoménalisme des qualia",
        "entree": "Jackson formule l'argument de la connaissance (Mary la savante des couleurs) : Mary connaît tout sur la physique des couleurs mais vit dans un monde noir et blanc. En sortant, elle apprend quelque chose de nouveau — donc la conscience n'est pas réductible à la physique.",
        "concepts": [
          {
            "nom": "L'ARGUMENT DE MARY",
            "cat": "transcendant",
            "type": "Dualisme",
            "puissance": 90,
            "desc": "Bascule : Mary sait tout sur la physique de la couleur mais apprend quelque chose en voyant du rouge pour la première fois — les qualia sont au-delà de la physique."
          },
          {
            "nom": "L'ÉPIPHÉNOMÉNALISME",
            "cat": "immanent",
            "type": "Dualisme",
            "puissance": 82,
            "desc": "Les qualia existent mais n'ont aucun pouvoir causal — ils accompagnent les processus physiques sans les influencer."
          },
          {
            "nom": "L'ARGUMENT DE LA CONNAISSANCE",
            "cat": "immanent",
            "type": "Philo. Esprit",
            "puissance": 78,
            "desc": "Réfutation du physicalisme : si tout le savoir physique ne suffit pas, il y a des faits non-physiques — argument classique contre la réduction."
          }
        ],
        "filiation": {
          "maitres": [
            "NAGEL",
            "DESCARTES",
            "LEVINE"
          ],
          "disciples": [
            "THÉORIES DE LA CONSCIENCE",
            "DUALISME CONTEMPORAIN"
          ],
          "contre": [
            "PHYSICALISME",
            "FONCTIONNALISME",
            "DENNETT"
          ]
        }
      },
      "en": {
        "oeuvre": "Epiphenomenal Qualia",
        "entree": "Jackson formulates the knowledge argument (Mary the color scientist): Mary knows everything about the physics of color but lives in a black-and-white world. Upon leaving, she learns something new — so consciousness is not reducible to physics.",
        "concepts": [
          {
            "nom": "MARY'S ARGUMENT",
            "cat": "transcendant",
            "type": "Dualisme",
            "puissance": 90,
            "desc": "A shift: Mary knows all the physics of color but learns something upon seeing red for the first time — qualia are beyond physics."
          },
          {
            "nom": "EPIPHENOMENALISM",
            "cat": "immanent",
            "type": "Dualisme",
            "puissance": 82,
            "desc": "Qualia exist but have no causal power — they accompany physical processes without influencing them."
          },
          {
            "nom": "THE KNOWLEDGE ARGUMENT",
            "cat": "immanent",
            "type": "Philo. Esprit",
            "puissance": 78,
            "desc": "Refutation of physicalism: if all physical knowledge is insufficient, there are non-physical facts — a classic argument against reduction."
          }
        ],
        "filiation": {
          "maitres": [
            "NAGEL",
            "DESCARTES",
            "LEVINE"
          ],
          "disciples": [
            "THEORIES OF CONSCIOUSNESS",
            "CONTEMPORARY DUALISM"
          ],
          "contre": [
            "PHYSICALISM",
            "FUNCTIONALISM",
            "DENNETT"
          ]
        }
      }
    },
    {
      "id": "165",
      "nom": "D.LEWIS",
      "full": "David Lewis",
      "dates": "1941-2001",
      "types": [
        "Réalisme",
        "Métaphysique"
      ],
      "lieu": "États-Unis / Australie",
      "era": "CONTEMPORAINE",
      "imgUrl": "https://upload.wikimedia.org/wikipedia/commons/4/42/David_Lewis_%281962%29_%28cropped%29.webp",
      "stats": {
        "INFLUENCE": 88,
        "RIGUEUR": 95,
        "ANCRAGE": 68,
        "PORTÉE": 85,
        "CLÔTURE": 60,
        "CLARTÉ": 62
      },
      "fr": {
        "oeuvre": "De la pluralité des mondes",
        "entree": "Lewis défend le réalisme modal : les mondes possibles sont réels, concrets, causalement isolés du nôtre. Ce « réalisme modal » est la thèse la plus audacieuse de la philosophie analytique — mais il en fait découler une métaphysique d'une puissance explicative remarquable.",
        "concepts": [
          {
            "nom": "LE RÉALISME MODAL",
            "cat": "transcendant",
            "type": "Réalisme",
            "puissance": 92,
            "desc": "Bascule : les mondes possibles sont aussi réels que le monde actuel — entités concrètes, spatio-temporellement isolées, permettant d'analyser la modalité, les propriétés, la causalité."
          },
          {
            "nom": "LES CONTREPARTIES",
            "cat": "immanent",
            "type": "Métaphysique",
            "puissance": 85,
            "desc": "Dans le réalisme modal, nous n'existons pas dans d'autres mondes — nos contreparties y existent, partageant nos propriétés essentielles."
          },
          {
            "nom": "L'ANALYSE DES CONDITIONNELS",
            "cat": "immanent",
            "type": "Logique",
            "puissance": 82,
            "desc": "Les conditionnels contrefactuels sont vrais ssi dans les mondes possibles les plus proches où l'antécédent est vrai, le conséquent l'est aussi."
          }
        ],
        "filiation": {
          "maitres": [
            "QUINE",
            "CARNAP",
            "KRIPKE (débat)"
          ],
          "disciples": [
            "MÉTAPHYSIQUE ANALYTIQUE",
            "SÉMANTIQUE DES MONDES POSSIBLES"
          ],
          "contre": [
            "ACTUALISME",
            "NOMINALISME STRICT",
            "ANTI-RÉALISME MODAL"
          ]
        }
      },
      "en": {
        "oeuvre": "On the Plurality of Worlds",
        "entree": "Lewis defends modal realism: possible worlds are real, concrete, causally isolated from ours. This 'modal realism' is the boldest thesis in analytic philosophy — but from it he derives a metaphysics of remarkable explanatory power.",
        "concepts": [
          {
            "nom": "MODAL REALISM",
            "cat": "transcendant",
            "type": "Réalisme",
            "puissance": 92,
            "desc": "A shift: possible worlds are as real as the actual world — concrete entities, spatiotemporally isolated, allowing analysis of modality, properties, and causation."
          },
          {
            "nom": "COUNTERPARTS",
            "cat": "immanent",
            "type": "Métaphysique",
            "puissance": 85,
            "desc": "In modal realism, we do not exist in other worlds — our counterparts exist there, sharing our essential properties."
          },
          {
            "nom": "ANALYSIS OF CONDITIONALS",
            "cat": "immanent",
            "type": "Logique",
            "puissance": 82,
            "desc": "Counterfactual conditionals are true iff in the closest possible worlds where the antecedent is true, the consequent is also true."
          }
        ],
        "filiation": {
          "maitres": [
            "QUINE",
            "CARNAP",
            "KRIPKE (debate)"
          ],
          "disciples": [
            "ANALYTIC METAPHYSICS",
            "POSSIBLE WORLDS SEMANTICS"
          ],
          "contre": [
            "ACTUALISM",
            "STRICT NOMINALISM",
            "MODAL ANTI-REALISM"
          ]
        }
      }
    },
    {
      "id": "166",
      "nom": "BOYD",
      "full": "Richard Boyd",
      "dates": "1942-2021",
      "types": [
        "Philo. Sciences",
        "Réalisme"
      ],
      "lieu": "États-Unis",
      "era": "CONTEMPORAINE",
      "imgUrl": "",
      "stats": {
        "INFLUENCE": 58,
        "RIGUEUR": 82,
        "ANCRAGE": 65,
        "PORTÉE": 68,
        "CLÔTURE": 60,
        "CLARTÉ": 68
      },
      "fr": {
        "oeuvre": "Réalisme, anti-fondationnisme et l'enthousiasme pour la science naturelle",
        "entree": "Boyd défend le réalisme scientifique par l'argument de la non-miraculeuse réussite : le succès des théories scientifiques serait miraculeux si elles ne référaient pas approximativement à des entités réelles. La science converge vers la vérité.",
        "concepts": [
          {
            "nom": "L'ARGUMENT DU NON-MIRACLE",
            "cat": "transcendant",
            "type": "Réalisme",
            "puissance": 82,
            "desc": "Bascule réaliste : le succès de la science serait un miracle inexplicable si ses théories ne décrivaient pas approximativement le monde réel."
          },
          {
            "nom": "LE RÉALISME SCIENTIFIQUE",
            "cat": "immanent",
            "type": "Philo. Sciences",
            "puissance": 78,
            "desc": "Les entités postulées par les meilleures théories scientifiques existent réellement — les électrons, les gènes, les champs sont réels."
          },
          {
            "nom": "LA CONVERGENCE VERS LA VÉRITÉ",
            "cat": "immanent",
            "type": "Réalisme",
            "puissance": 72,
            "desc": "La science progresse en se rapprochant de la vérité — contre la méta-induction pessimiste de Laudan."
          }
        ],
        "filiation": {
          "maitres": [
            "PUTNAM",
            "QUINE",
            "SELLARS"
          ],
          "disciples": [
            "RÉALISME SCIENTIFIQUE CONTEMPORAIN"
          ],
          "contre": [
            "VAN FRAASSEN",
            "LAUDAN",
            "KUHN"
          ]
        }
      },
      "en": {
        "oeuvre": "Realism, Anti-Foundationalism and the Enthusiasm for Natural Science",
        "entree": "Boyd defends scientific realism through the no-miracles argument: the success of scientific theories would be miraculous if they did not approximately refer to real entities. Science converges toward truth.",
        "concepts": [
          {
            "nom": "THE NO-MIRACLES ARGUMENT",
            "cat": "transcendant",
            "type": "Réalisme",
            "puissance": 82,
            "desc": "A realist shift: the success of science would be an inexplicable miracle if its theories did not approximately describe the real world."
          },
          {
            "nom": "SCIENTIFIC REALISM",
            "cat": "immanent",
            "type": "Philo. Sciences",
            "puissance": 78,
            "desc": "The entities posited by the best scientific theories really exist — electrons, genes, fields are real."
          },
          {
            "nom": "CONVERGENCE TOWARD TRUTH",
            "cat": "immanent",
            "type": "Réalisme",
            "puissance": 72,
            "desc": "Science progresses by approaching truth — against Laudan's pessimistic meta-induction."
          }
        ],
        "filiation": {
          "maitres": [
            "PUTNAM",
            "QUINE",
            "SELLARS"
          ],
          "disciples": [
            "CONTEMPORARY SCIENTIFIC REALISM"
          ],
          "contre": [
            "VAN FRAASSEN",
            "LAUDAN",
            "KUHN"
          ]
        }
      }
    },
    {
      "id": "167",
      "nom": "MCDOWELL",
      "full": "John McDowell",
      "dates": "1942-",
      "types": [
        "Réalisme",
        "Philo. Esprit"
      ],
      "lieu": "Afrique du Sud / Angleterre",
      "era": "CONTEMPORAINE",
      "imgUrl": "https://upload.wikimedia.org/wikipedia/commons/9/94/John_McDowell_%28cropped%29.JPG",
      "stats": {
        "INFLUENCE": 68,
        "RIGUEUR": 82,
        "ANCRAGE": 65,
        "PORTÉE": 72,
        "CLÔTURE": 62,
        "CLARTÉ": 45
      },
      "fr": {
        "oeuvre": "Esprit et Monde",
        "entree": "McDowell résout le conflit entre l'empirisme (données brutes) et le cohérentisme (web of beliefs) : la perception elle-même a une structure conceptuelle. L'expérience n'est pas une donnée brute pré-conceptuelle — elle est déjà conceptualisée.",
        "concepts": [
          {
            "nom": "LE CONCEPTUALISME PERCEPTIF",
            "cat": "transcendant",
            "type": "Philo. Esprit",
            "puissance": 82,
            "desc": "Bascule : la perception n'est pas un donné brut — elle a une structure conceptuelle d'emblée, permettant de répondre au scepticisme et à la régression épistémique."
          },
          {
            "nom": "LA SECONDE NATURE",
            "cat": "immanent",
            "type": "Réalisme",
            "puissance": 78,
            "desc": "Par l'éducation, l'homme devient capable de répondre rationnellement au monde — la culture est une seconde nature qui articule l'animal rationnel."
          },
          {
            "nom": "DÉPASSER LE MYTHE DU DONNÉ",
            "cat": "immanent",
            "type": "Philo. Esprit",
            "puissance": 75,
            "desc": "Sellars avait raison : le mythe du donné est une erreur — mais McDowell refuse le cohérentisme pur en maintenant un contact avec le monde."
          }
        ],
        "filiation": {
          "maitres": [
            "KANT",
            "WITTGSTN",
            "SELLARS",
            "ARISTOTLE"
          ],
          "disciples": [
            "PHILOSOPHIE ANALYTIQUE CONTEMPORAINE"
          ],
          "contre": [
            "DAVIDSON (cohérentisme pur)",
            "EVANS",
            "DRETSKE"
          ]
        }
      },
      "en": {
        "oeuvre": "Mind and World",
        "entree": "McDowell resolves the conflict between empiricism (raw data) and coherentism (web of beliefs): perception itself has a conceptual structure. Experience is not pre-conceptual raw data — it is already conceptualized.",
        "concepts": [
          {
            "nom": "PERCEPTUAL CONCEPTUALISM",
            "cat": "transcendant",
            "type": "Philo. Esprit",
            "puissance": 82,
            "desc": "A shift: perception is not raw data — it already has a conceptual structure, allowing response to skepticism and epistemic regress."
          },
          {
            "nom": "SECOND NATURE",
            "cat": "immanent",
            "type": "Réalisme",
            "puissance": 78,
            "desc": "Through education, the human becomes capable of rationally responding to the world — culture is a second nature articulating the rational animal."
          },
          {
            "nom": "BEYOND THE MYTH OF THE GIVEN",
            "cat": "immanent",
            "type": "Philo. Esprit",
            "puissance": 75,
            "desc": "Sellars was right: the myth of the given is an error — but McDowell refuses pure coherentism by maintaining contact with the world."
          }
        ],
        "filiation": {
          "maitres": [
            "KANT",
            "WITTGSTN",
            "SELLARS",
            "ARISTOTLE"
          ],
          "disciples": [
            "CONTEMPORARY ANALYTIC PHILOSOPHY"
          ],
          "contre": [
            "DAVIDSON (pure coherentism)",
            "EVANS",
            "DRETSKE"
          ]
        }
      }
    },
    {
      "id": "168",
      "nom": "SCANLON",
      "full": "Tim Scanlon",
      "dates": "1940-",
      "types": [
        "Contractualisme",
        "Déontologie"
      ],
      "lieu": "États-Unis",
      "era": "CONTEMPORAINE",
      "imgUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Kissel_Lecture_with_Philippe_Van_Parijs_%2841326690252%29.jpg/3840px-Kissel_Lecture_with_Philippe_Van_Parijs_%2841326690252%29.jpg",
      "stats": {
        "INFLUENCE": 72,
        "RIGUEUR": 88,
        "ANCRAGE": 68,
        "PORTÉE": 75,
        "CLÔTURE": 65,
        "CLARTÉ": 72
      },
      "fr": {
        "oeuvre": "Ce que nous nous devons mutuellement",
        "entree": "Scanlon fonde le contractualisme moral sur la raison intersubjective : un acte est moralement mauvais si son principe ne peut être raisonnablement rejeté par quelqu'un dont les intérêts sont affectés. La morale comme accord possible entre personnes raisonnables.",
        "concepts": [
          {
            "nom": "LE REJET RAISONNABLE",
            "cat": "transcendant",
            "type": "Contractualisme",
            "puissance": 85,
            "desc": "Bascule : un principe est moral si personne ne peut raisonnablement le rejeter — la morale est ce sur quoi des personnes raisonnables pourraient s'accorder."
          },
          {
            "nom": "LA MORALE DE CE QU'ON SE DOIT",
            "cat": "immanent",
            "type": "Contractualisme",
            "puissance": 82,
            "desc": "La morale interpersonnelle porte sur ce que nous nous devons mutuellement — une sphère restreinte mais la plus importante de la morale."
          },
          {
            "nom": "LA RAISONNABILITÉ COMME FONDEMENT",
            "cat": "immanent",
            "type": "Déontologie",
            "puissance": 78,
            "desc": "Contre l'utilitarisme et le kantisme : ce n'est pas la maximisation du bien ni le devoir a priori, mais ce qu'on ne peut raisonnablement refuser."
          }
        ],
        "filiation": {
          "maitres": [
            "RAWLS",
            "KANT",
            "CONTRACTUALISME"
          ],
          "disciples": [
            "ÉTHIQUE CONTRACTUALISTE"
          ],
          "contre": [
            "UTILITARISME",
            "ÉTHIQUE DES VERTUS (contexte)"
          ]
        }
      },
      "en": {
        "oeuvre": "What We Owe to Each Other",
        "entree": "Scanlon founds moral contractualism on intersubjective reason: an act is morally wrong if its principle cannot be reasonably rejected by someone whose interests are affected. Morality as possible agreement between reasonable persons.",
        "concepts": [
          {
            "nom": "REASONABLE REJECTION",
            "cat": "transcendant",
            "type": "Contractualisme",
            "puissance": 85,
            "desc": "A shift: a principle is moral if no one can reasonably reject it — morality is what reasonable persons could agree to."
          },
          {
            "nom": "MORALITY OF WHAT WE OWE",
            "cat": "immanent",
            "type": "Contractualisme",
            "puissance": 82,
            "desc": "Interpersonal morality concerns what we owe each other — a restricted but most important sphere of morality."
          },
          {
            "nom": "REASONABLENESS AS FOUNDATION",
            "cat": "immanent",
            "type": "Déontologie",
            "puissance": 78,
            "desc": "Against utilitarianism and Kantianism: not maximization of good nor a priori duty, but what one cannot reasonably refuse."
          }
        ],
        "filiation": {
          "maitres": [
            "RAWLS",
            "KANT",
            "CONTRACTUALISM"
          ],
          "disciples": [
            "CONTRACTUALIST ETHICS"
          ],
          "contre": [
            "UTILITARIANISM",
            "VIRTUE ETHICS (context)"
          ]
        }
      }
    },
    {
      "id": "169",
      "nom": "PARFIT",
      "full": "Derek Parfit",
      "dates": "1942-2017",
      "types": [
        "Déontologie",
        "Philo. Esprit"
      ],
      "lieu": "Angleterre",
      "era": "CONTEMPORAINE",
      "imgUrl": "https://upload.wikimedia.org/wikipedia/commons/d/d7/Derek_Parfit_at_Harvard-April_21%2C_2015-Effective_Altruism_%28cropped%29.jpg",
      "stats": {
        "INFLUENCE": 82,
        "RIGUEUR": 90,
        "ANCRAGE": 68,
        "PORTÉE": 85,
        "CLÔTURE": 62,
        "CLARTÉ": 72
      },
      "fr": {
        "oeuvre": "Raisons et personnes",
        "entree": "Parfit reconstruit l'identité personnelle et l'éthique à partir de zéro. L'identité personnelle n'est pas ce qui compte — ce qui compte est la relation de continuité psychologique. Ses paradoxes de la non-identité défient nos intuitions morales sur les générations futures.",
        "concepts": [
          {
            "nom": "L'IDENTITÉ N'EST PAS CE QUI COMPTE",
            "cat": "transcendant",
            "type": "Philo. Esprit",
            "puissance": 88,
            "desc": "Bascule : l'identité personnelle n'est pas une relation tout-ou-rien — ce qui compte c'est la continuité psychologique, pas l'identité numérique."
          },
          {
            "nom": "LE PROBLÈME DE LA NON-IDENTITÉ",
            "cat": "immanent",
            "type": "Déontologie",
            "puissance": 85,
            "desc": "Comment nuire à des personnes dont l'existence dépend de nos actes ? Des choix politiques pires créent des personnes différentes — défi pour l'éthique intergénérationnelle."
          },
          {
            "nom": "LA CONVERGENCE DES THÉORIES",
            "cat": "immanent",
            "type": "Déontologie",
            "puissance": 80,
            "desc": "Au terme de Raisons et Personnes : conséquentialisme, contractualisme et déontologie convergent dans leurs prescriptions — un optimisme éthique."
          }
        ],
        "filiation": {
          "maitres": [
            "SIDGWICK",
            "RAWLS",
            "WILLIAMS (réponse)"
          ],
          "disciples": [
            "ÉTHIQUE ANALYTIQUE CONTEMPORAINE",
            "ÉTHIQUE INTERGÉNÉRATIONNELLE"
          ],
          "contre": [
            "IDENTITÉ PERSONNELLE SIMPLE",
            "ÉGOÏSME RATIONNEL"
          ]
        }
      },
      "en": {
        "oeuvre": "Reasons and Persons",
        "entree": "Parfit reconstructs personal identity and ethics from scratch. Personal identity is not what matters — what matters is the relation of psychological continuity. His non-identity paradoxes challenge our moral intuitions about future generations.",
        "concepts": [
          {
            "nom": "IDENTITY IS NOT WHAT MATTERS",
            "cat": "transcendant",
            "type": "Philo. Esprit",
            "puissance": 88,
            "desc": "A shift: personal identity is not an all-or-nothing relation — what matters is psychological continuity, not numerical identity."
          },
          {
            "nom": "THE NON-IDENTITY PROBLEM",
            "cat": "immanent",
            "type": "Déontologie",
            "puissance": 85,
            "desc": "How to harm persons whose existence depends on our acts? Worse policy choices create different persons — a challenge for intergenerational ethics."
          },
          {
            "nom": "CONVERGENCE OF THEORIES",
            "cat": "immanent",
            "type": "Déontologie",
            "puissance": 80,
            "desc": "At the end of Reasons and Persons: consequentialism, contractualism, and deontology converge in their prescriptions — an ethical optimism."
          }
        ],
        "filiation": {
          "maitres": [
            "SIDGWICK",
            "RAWLS",
            "WILLIAMS (response)"
          ],
          "disciples": [
            "CONTEMPORARY ANALYTIC ETHICS",
            "INTERGENERATIONAL ETHICS"
          ],
          "contre": [
            "SIMPLE PERSONAL IDENTITY",
            "RATIONAL EGOISM"
          ]
        }
      }
    },
    {
      "id": "170",
      "nom": "DAWKINS",
      "full": "Richard Dawkins",
      "dates": "1941-",
      "types": [
        "Philo. Sciences",
        "Matérialisme"
      ],
      "lieu": "Angleterre",
      "era": "CONTEMPORAINE",
      "imgUrl": "https://upload.wikimedia.org/wikipedia/commons/8/82/Dinner_with_Richard_Dawkins_and_CFI..._like_a_candle_in_the_dark.jpg",
      "stats": {
        "INFLUENCE": 85,
        "RIGUEUR": 68,
        "ANCRAGE": 55,
        "PORTÉE": 85,
        "CLÔTURE": 48,
        "CLARTÉ": 90
      },
      "fr": {
        "oeuvre": "Le Gène égoïste / L'Horloger aveugle",
        "entree": "Dawkins reformule la théorie évolutionnaire du point de vue du gène : les organismes sont des « machines à survie » construites par les gènes pour se répliquer. Il forge le concept de mème (unité de réplication culturelle) et défend l'athéisme militaire.",
        "concepts": [
          {
            "nom": "LE GÈNE ÉGOÏSTE",
            "cat": "transcendant",
            "type": "Philo. Sciences",
            "puissance": 88,
            "desc": "Bascule : l'unité de sélection naturelle est le gène, non l'individu ni le groupe — les organismes sont des véhicules au service des réplicateurs génétiques."
          },
          {
            "nom": "LE MÈME",
            "cat": "transcendant",
            "type": "Matérialisme",
            "puissance": 82,
            "desc": "Unité de réplication culturelle — idées, mélodies, modes se répliquent par imitation, sujettes à variation et sélection comme les gènes."
          },
          {
            "nom": "L'HORLOGER AVEUGLE",
            "cat": "immanent",
            "type": "Philo. Sciences",
            "puissance": 80,
            "desc": "La sélection naturelle simule un concepteur intelligent sans l'être — argument définitif contre l'argument téléologique pour l'existence de Dieu."
          }
        ],
        "filiation": {
          "maitres": [
            "DARWIN",
            "HAMILTON",
            "WILLIAMS G.C."
          ],
          "disciples": [
            "SOCIOBIOLOGIE",
            "PSYCHOLOGIE ÉVOLUTIONNAIRE"
          ],
          "contre": [
            "SÉLECTION DE GROUPE",
            "CRÉATIONNISME",
            "RELIGION"
          ]
        }
      },
      "en": {
        "oeuvre": "The Selfish Gene / The Blind Watchmaker",
        "entree": "Dawkins reformulates evolutionary theory from the gene's point of view: organisms are 'survival machines' built by genes to replicate themselves. He coins the concept of meme (unit of cultural replication) and defends militant atheism.",
        "concepts": [
          {
            "nom": "THE SELFISH GENE",
            "cat": "transcendant",
            "type": "Philo. Sciences",
            "puissance": 88,
            "desc": "A shift: the unit of natural selection is the gene, not the individual or group — organisms are vehicles in service of genetic replicators."
          },
          {
            "nom": "THE MEME",
            "cat": "transcendant",
            "type": "Matérialisme",
            "puissance": 82,
            "desc": "A unit of cultural replication — ideas, melodies, fashions replicate by imitation, subject to variation and selection like genes."
          },
          {
            "nom": "THE BLIND WATCHMAKER",
            "cat": "immanent",
            "type": "Philo. Sciences",
            "puissance": 80,
            "desc": "Natural selection simulates an intelligent designer without being one — the definitive argument against the teleological argument for God."
          }
        ],
        "filiation": {
          "maitres": [
            "DARWIN",
            "HAMILTON",
            "WILLIAMS G.C."
          ],
          "disciples": [
            "SOCIOBIOLOGY",
            "EVOLUTIONARY PSYCHOLOGY"
          ],
          "contre": [
            "GROUP SELECTION",
            "CREATIONISM",
            "RELIGION"
          ]
        }
      }
    },
    {
      "id": "171",
      "nom": "DENNETT",
      "full": "Daniel Dennett",
      "dates": "1942-2024",
      "types": [
        "Philo. Esprit",
        "Matérialisme"
      ],
      "lieu": "États-Unis",
      "era": "CONTEMPORAINE",
      "imgUrl": "https://upload.wikimedia.org/wikipedia/commons/3/3e/Daniel_Dennett_2.jpg",
      "stats": {
        "INFLUENCE": 85,
        "RIGUEUR": 72,
        "ANCRAGE": 58,
        "PORTÉE": 85,
        "CLÔTURE": 52,
        "CLARTÉ": 82
      },
      "fr": {
        "oeuvre": "La Conscience expliquée / Darwin est-il dangereux ?",
        "entree": "Dennett est le plus grand pourfendeur des dualismes de la conscience. Son hétérophénoménologie : la conscience est une illusion utile du cerveau — pas de qualia irréductibles, pas de theatre cartésien. L'évolution darwinienne suffit à expliquer tout, y compris l'esprit.",
        "concepts": [
          {
            "nom": "LE MATÉRIALISME INTENTIONNEL",
            "cat": "transcendant",
            "type": "Matérialisme",
            "puissance": 85,
            "desc": "Bascule : la position intentionnelle est une stratégie prédictive, non l'attribution de vrais états mentaux — croyances et désirs sont des abstractions utiles."
          },
          {
            "nom": "CONTRE LE THÉÂTRE CARTÉSIEN",
            "cat": "immanent",
            "type": "Philo. Esprit",
            "puissance": 82,
            "desc": "Il n'y a pas de scène centrale où la conscience se réalise — la conscience est un flot de brouillons (multiple drafts) traités en parallèle."
          },
          {
            "nom": "L'IDÉE DANGEREUSE DE DARWIN",
            "cat": "immanent",
            "type": "Matérialisme",
            "puissance": 80,
            "desc": "L'évolution par sélection naturelle est un algorithme universel qui dissout toute téléologie — applicable à l'esprit, la culture, la morale."
          }
        ],
        "filiation": {
          "maitres": [
            "RYLE",
            "TURING",
            "DAWKINS",
            "QUINE"
          ],
          "disciples": [
            "PHILOSOPHIE DES SCIENCES COGNITIVES"
          ],
          "contre": [
            "SEARLE (chambre chinoise)",
            "NAGEL",
            "JACKSON (Mary)",
            "CHALMERS"
          ]
        }
      },
      "en": {
        "oeuvre": "Consciousness Explained / Darwin's Dangerous Idea",
        "entree": "Dennett is the greatest critic of dualisms of consciousness. His heterophenomenology: consciousness is a useful brain illusion — no irreducible qualia, no Cartesian theater. Darwinian evolution suffices to explain everything, including the mind.",
        "concepts": [
          {
            "nom": "INTENTIONAL MATERIALISM",
            "cat": "transcendant",
            "type": "Matérialisme",
            "puissance": 85,
            "desc": "A shift: the intentional stance is a predictive strategy, not attribution of real mental states — beliefs and desires are useful abstractions."
          },
          {
            "nom": "AGAINST THE CARTESIAN THEATER",
            "cat": "immanent",
            "type": "Philo. Esprit",
            "puissance": 82,
            "desc": "There is no central stage where consciousness is realized — consciousness is a flow of multiple drafts processed in parallel."
          },
          {
            "nom": "DARWIN'S DANGEROUS IDEA",
            "cat": "immanent",
            "type": "Matérialisme",
            "puissance": 80,
            "desc": "Evolution by natural selection is a universal algorithm that dissolves all teleology — applicable to mind, culture, and morality."
          }
        ],
        "filiation": {
          "maitres": [
            "RYLE",
            "TURING",
            "DAWKINS",
            "QUINE"
          ],
          "disciples": [
            "PHILOSOPHY OF COGNITIVE SCIENCE"
          ],
          "contre": [
            "SEARLE (chinese room)",
            "NAGEL",
            "JACKSON (Mary)",
            "CHALMERS"
          ]
        }
      }
    },
    {
      "id": "172",
      "nom": "HOFSTDTR",
      "full": "Douglas Hofstadter",
      "dates": "1945-",
      "types": [
        "Philo. Esprit",
        "Logique"
      ],
      "lieu": "États-Unis",
      "era": "CONTEMPORAINE",
      "imgUrl": "https://upload.wikimedia.org/wikipedia/commons/1/16/Douglas_Hofstadter%2C_Stanford_2006_%28crop%29.jpg",
      "stats": {
        "INFLUENCE": 80,
        "RIGUEUR": 72,
        "ANCRAGE": 58,
        "PORTÉE": 82,
        "CLÔTURE": 55,
        "CLARTÉ": 85
      },
      "fr": {
        "oeuvre": "Gödel, Escher, Bach : les Brins d'une Guirlande Éternelle",
        "entree": "Hofstadter explore les liens entre autoréférence, émergence et conscience. Les « boucles étranges » (strange loops) — comme les théorèmes de Gödel, les fugues de Bach ou les lithographies d'Escher — révèlent la structure paradoxale de toute conscience de soi.",
        "concepts": [
          {
            "nom": "LA BOUCLE ÉTRANGE",
            "cat": "transcendant",
            "type": "Philo. Esprit",
            "puissance": 85,
            "desc": "Bascule : la conscience naît de boucles d'autoréférence — comme Gödel prouve l'incomplétude depuis l'intérieur d'un système formel."
          },
          {
            "nom": "L'AUTORÉFÉRENCE ET LA CONSCIENCE",
            "cat": "immanent",
            "type": "Philo. Esprit",
            "puissance": 82,
            "desc": "Le moi est une boucle étrange — un patron émergent qui se perçoit lui-même au niveau supérieur à partir de sa base physique."
          },
          {
            "nom": "GÖDEL ET L'ESPRIT",
            "cat": "immanent",
            "type": "Logique",
            "puissance": 78,
            "desc": "L'incomplétude de Gödel révèle les limites des systèmes formels — et peut-être aussi les limites de ce que l'IA peut simuler de l'esprit humain."
          }
        ],
        "filiation": {
          "maitres": [
            "GÖDEL",
            "BACH",
            "ESCHER",
            "TURING"
          ],
          "disciples": [
            "PHILOSOPHIE DE L'IA",
            "SCIENCES COGNITIVES"
          ],
          "contre": [
            "RÉDUCTIONNISME SIMPLE",
            "DUALISME"
          ]
        }
      },
      "en": {
        "oeuvre": "Gödel, Escher, Bach: An Eternal Golden Braid",
        "entree": "Hofstadter explores the links between self-reference, emergence, and consciousness. 'Strange loops' — like Gödel's theorems, Bach's fugues, or Escher's lithographs — reveal the paradoxical structure of all self-consciousness.",
        "concepts": [
          {
            "nom": "THE STRANGE LOOP",
            "cat": "transcendant",
            "type": "Philo. Esprit",
            "puissance": 85,
            "desc": "A shift: consciousness arises from self-referential loops — as Gödel proves incompleteness from within a formal system."
          },
          {
            "nom": "SELF-REFERENCE AND CONSCIOUSNESS",
            "cat": "immanent",
            "type": "Philo. Esprit",
            "puissance": 82,
            "desc": "The self is a strange loop — an emergent pattern that perceives itself at a higher level from its physical base."
          },
          {
            "nom": "GÖDEL AND THE MIND",
            "cat": "immanent",
            "type": "Logique",
            "puissance": 78,
            "desc": "Gödel's incompleteness reveals the limits of formal systems — and perhaps also the limits of what AI can simulate of the human mind."
          }
        ],
        "filiation": {
          "maitres": [
            "GÖDEL",
            "BACH",
            "ESCHER",
            "TURING"
          ],
          "disciples": [
            "AI PHILOSOPHY",
            "COGNITIVE SCIENCE"
          ],
          "contre": [
            "SIMPLE REDUCTIONISM",
            "DUALISM"
          ]
        }
      }
    },
    {
      "id": "173",
      "nom": "CHURCHLND",
      "full": "Paul & Patricia Churchland",
      "dates": "1942- / 1943-",
      "types": [
        "Philo. Esprit",
        "Matérialisme"
      ],
      "lieu": "Canada / États-Unis",
      "era": "CONTEMPORAINE",
      "imgUrl": "https://upload.wikimedia.org/wikipedia/commons/7/7a/Patricia_Churchland%2C_2015_%28cropped%29.jpg",
      "stats": {
        "INFLUENCE": 72,
        "RIGUEUR": 82,
        "ANCRAGE": 58,
        "PORTÉE": 80,
        "CLÔTURE": 50,
        "CLARTÉ": 72
      },
      "fr": {
        "oeuvre": "Le Matérialisme éliminatif / La Cervelle nous trompe-t-elle ?",
        "entree": "Les Churchland défendent le matérialisme éliminatif : la psychologie populaire (croyances, désirs) est une théorie fausse qui sera éliminée, non réduite, par la neuroscience. Les concepts mentalistes de sens commun ne correspondent à aucune réalité neurologique.",
        "concepts": [
          {
            "nom": "LE MATÉRIALISME ÉLIMINATIF",
            "cat": "transcendant",
            "type": "Matérialisme",
            "puissance": 88,
            "desc": "Bascule radicale : les croyances, désirs et douleurs de la psychologie populaire n'existent pas — ils seront éliminés par la neuroscience, comme la phlogistique l'a été."
          },
          {
            "nom": "LA PSYCHOLOGIE POPULAIRE COMME THÉORIE",
            "cat": "immanent",
            "type": "Philo. Esprit",
            "puissance": 82,
            "desc": "Le sens commun mentaliste (folk psychology) est une théorie empirique faillible, non une vérité évidente — elle peut être fausse et réfutée."
          },
          {
            "nom": "LE CONNEXIONNISME",
            "cat": "immanent",
            "type": "Philo. Esprit",
            "puissance": 78,
            "desc": "Les réseaux de neurones artificiels modélisent mieux la cognition que le traitement symbolique — soutien au connexionnisme contre le computationnalisme symbolique."
          }
        ],
        "filiation": {
          "maitres": [
            "QUINE",
            "SELLARS",
            "FEYERABEND"
          ],
          "disciples": [
            "NEURO-PHILOSOPHIE",
            "NEUROSCIENCES COGNITIVES"
          ],
          "contre": [
            "PSYCHOLOGIE POPULAIRE",
            "DUALISME",
            "FODOR"
          ]
        }
      },
      "en": {
        "oeuvre": "Eliminative Materialism / The Engine of Reason",
        "entree": "The Churchlands defend eliminative materialism: folk psychology (beliefs, desires) is a false theory that will be eliminated, not reduced, by neuroscience. Common-sense mentalist concepts correspond to no neurological reality.",
        "concepts": [
          {
            "nom": "ELIMINATIVE MATERIALISM",
            "cat": "transcendant",
            "type": "Matérialisme",
            "puissance": 88,
            "desc": "A radical shift: beliefs, desires, and pains of folk psychology do not exist — they will be eliminated by neuroscience, as phlogiston was."
          },
          {
            "nom": "FOLK PSYCHOLOGY AS THEORY",
            "cat": "immanent",
            "type": "Philo. Esprit",
            "puissance": 82,
            "desc": "Mentalist common sense (folk psychology) is a fallible empirical theory, not a self-evident truth — it can be false and refuted."
          },
          {
            "nom": "CONNECTIONISM",
            "cat": "immanent",
            "type": "Philo. Esprit",
            "puissance": 78,
            "desc": "Artificial neural networks model cognition better than symbolic processing — support for connectionism against symbolic computationalism."
          }
        ],
        "filiation": {
          "maitres": [
            "QUINE",
            "SELLARS",
            "FEYERABEND"
          ],
          "disciples": [
            "NEUROPHILOSOPHY",
            "COGNITIVE NEUROSCIENCE"
          ],
          "contre": [
            "FOLK PSYCHOLOGY",
            "DUALISM",
            "FODOR"
          ]
        }
      }
    },
    {
      "id": "174",
      "nom": "NED.BLCK",
      "full": "Ned Block",
      "dates": "1942-",
      "types": [
        "Philo. Esprit"
      ],
      "lieu": "États-Unis",
      "era": "CONTEMPORAINE",
      "imgUrl": "https://upload.wikimedia.org/wikipedia/commons/3/3f/Large_ned.block.jpg",
      "stats": {
        "INFLUENCE": 68,
        "RIGUEUR": 88,
        "ANCRAGE": 65,
        "PORTÉE": 75,
        "CLÔTURE": 60,
        "CLARTÉ": 72
      },
      "fr": {
        "oeuvre": "Troubles avec le fonctionnalisme / Sur une confusion sur le rôle de la conscience",
        "entree": "Block distingue deux sens de la conscience systématiquement confondus : la conscience-P (phénoménale, les qualia, « l'effet que cela fait ») et la conscience-A (d'accès, l'information disponible pour le raisonnement et le contrôle du comportement). Cette distinction structure le débat contemporain.",
        "concepts": [
          {
            "nom": "CONSCIENCE-P vs CONSCIENCE-A",
            "cat": "transcendant",
            "type": "Philo. Esprit",
            "puissance": 88,
            "desc": "Bascule conceptuelle : conscience phénoménale (qualia irréductibles) vs conscience d'accès (information disponible) — confusion de ces deux sens est source de tous les erreurs."
          },
          {
            "nom": "LE BLOCAGE FONCTIONNEL",
            "cat": "immanent",
            "type": "Philo. Esprit",
            "puissance": 82,
            "desc": "Argument contre le fonctionnalisme : la Chine entière pourrait simuler un cerveau humain — serait-ce conscient ? Le fonctionnalisme dit oui, ce qui est absurde."
          },
          {
            "nom": "LES QUALIA ET LE PHYSICALISME",
            "cat": "immanent",
            "type": "Philo. Esprit",
            "puissance": 78,
            "desc": "Les qualia (conscience-P) résistent à toute réduction fonctionnelle ou physique — le problème difficile reste ouvert même après toute explication fonctionnelle."
          }
        ],
        "filiation": {
          "maitres": [
            "NAGEL",
            "JACKSON",
            "PUTNAM (critique)"
          ],
          "disciples": [
            "THÉORIES DE LA CONSCIENCE",
            "DÉBAT SUR LES QUALIA"
          ],
          "contre": [
            "FONCTIONNALISME",
            "DENNETT",
            "CHURCHLANDS"
          ]
        }
      },
      "en": {
        "oeuvre": "Troubles with Functionalism / On a Confusion about a Function of Consciousness",
        "entree": "Block distinguishes two systematically confused senses of consciousness: P-consciousness (phenomenal, qualia, 'what it is like') and A-consciousness (access, information available for reasoning and behavior control). This distinction structures the contemporary debate.",
        "concepts": [
          {
            "nom": "P-CONSCIOUSNESS vs A-CONSCIOUSNESS",
            "cat": "transcendant",
            "type": "Philo. Esprit",
            "puissance": 88,
            "desc": "A conceptual shift: phenomenal consciousness (irreducible qualia) vs access consciousness (available information) — confusing these two is the source of all errors."
          },
          {
            "nom": "THE FUNCTIONAL BLOCK",
            "cat": "immanent",
            "type": "Philo. Esprit",
            "puissance": 82,
            "desc": "Argument against functionalism: the whole of China could simulate a human brain — would it be conscious? Functionalism says yes, which is absurd."
          },
          {
            "nom": "QUALIA AND PHYSICALISM",
            "cat": "immanent",
            "type": "Philo. Esprit",
            "puissance": 78,
            "desc": "Qualia (P-consciousness) resist all functional or physical reduction — the hard problem remains open even after complete functional explanation."
          }
        ],
        "filiation": {
          "maitres": [
            "NAGEL",
            "JACKSON",
            "PUTNAM (critique)"
          ],
          "disciples": [
            "THEORIES OF CONSCIOUSNESS",
            "QUALIA DEBATE"
          ],
          "contre": [
            "FUNCTIONALISM",
            "DENNETT",
            "CHURCHLANDS"
          ]
        }
      }
    },
    {
      "id": "175",
      "nom": "CARTWRGHT",
      "full": "Nancy Cartwright",
      "dates": "1944-",
      "types": [
        "Philo. Sciences",
        "Réalisme"
      ],
      "lieu": "États-Unis / Angleterre",
      "era": "CONTEMPORAINE",
      "imgUrl": "https://upload.wikimedia.org/wikipedia/commons/f/f1/Nancy_Cartwright_2007.jpg",
      "stats": {
        "INFLUENCE": 62,
        "RIGUEUR": 82,
        "ANCRAGE": 65,
        "PORTÉE": 68,
        "CLÔTURE": 62,
        "CLARTÉ": 70
      },
      "fr": {
        "oeuvre": "Les Lois de la physique mentent / La Nature nomologique du destin",
        "entree": "Cartwright défend un réalisme des capacités contre le réalisme des lois : les lois de la physique sont des idéalisations qui ne s'appliquent qu'à des modèles artificiels. Ce qui est réel, ce sont les capacités causales des entités concrètes dans des conditions réelles.",
        "concepts": [
          {
            "nom": "LES LOIS MENTENT",
            "cat": "transcendant",
            "type": "Philo. Sciences",
            "puissance": 82,
            "desc": "Bascule : les lois de la physique (F=ma) ne s'appliquent qu'à des situations idéalisées abstraites — elles mentent sur le monde concret."
          },
          {
            "nom": "LE RÉALISME DES CAPACITÉS",
            "cat": "immanent",
            "type": "Réalisme",
            "puissance": 78,
            "desc": "Ce qui est réel, ce sont les capacités causales des entités — la gravité est une capacité réelle même si elle n'opère jamais seule."
          },
          {
            "nom": "LE MONDE DAPPLED",
            "cat": "immanent",
            "type": "Philo. Sciences",
            "puissance": 75,
            "desc": "La nature est un 'dappled world' (monde bigarré) — pas un système unifié sous quelques lois fondamentales mais une mosaïque de domaines hétérogènes."
          }
        ],
        "filiation": {
          "maitres": [
            "HACKING",
            "DUHEM",
            "MILL"
          ],
          "disciples": [
            "PHILOSOPHIE DE LA PHYSIQUE",
            "ONTOLOGIE DES CAPACITÉS"
          ],
          "contre": [
            "RÉALISME DES LOIS",
            "PHYSICALISME RÉDUCTIF",
            "COVERING LAW MODEL"
          ]
        }
      },
      "en": {
        "oeuvre": "How the Laws of Physics Lie / The Dappled World",
        "entree": "Cartwright defends a realism of capacities against realism of laws: the laws of physics are idealizations that only apply to artificial models. What is real are the causal capacities of concrete entities under real conditions.",
        "concepts": [
          {
            "nom": "THE LAWS LIE",
            "cat": "transcendant",
            "type": "Philo. Sciences",
            "puissance": 82,
            "desc": "A shift: the laws of physics (F=ma) only apply to idealized abstract situations — they lie about the concrete world."
          },
          {
            "nom": "REALISM OF CAPACITIES",
            "cat": "immanent",
            "type": "Réalisme",
            "puissance": 78,
            "desc": "What is real are the causal capacities of entities — gravity is a real capacity even if it never operates alone."
          },
          {
            "nom": "THE DAPPLED WORLD",
            "cat": "immanent",
            "type": "Philo. Sciences",
            "puissance": 75,
            "desc": "Nature is a 'dappled world' — not a unified system under a few fundamental laws but a mosaic of heterogeneous domains."
          }
        ],
        "filiation": {
          "maitres": [
            "HACKING",
            "DUHEM",
            "MILL"
          ],
          "disciples": [
            "PHILOSOPHY OF PHYSICS",
            "ONTOLOGY OF CAPACITIES"
          ],
          "contre": [
            "LAWS REALISM",
            "REDUCTIVE PHYSICALISM",
            "COVERING LAW MODEL"
          ]
        }
      }
    },
    {
      "id": "176",
      "nom": "BLACKBURN",
      "full": "Simon Blackburn",
      "dates": "1944-",
      "types": [
        "Réalisme",
        "Éthique des Vertus"
      ],
      "lieu": "Angleterre",
      "era": "CONTEMPORAINE",
      "imgUrl": "https://upload.wikimedia.org/wikipedia/commons/1/1e/Simon_Blackburn.jpg",
      "stats": {
        "INFLUENCE": 65,
        "RIGUEUR": 82,
        "ANCRAGE": 65,
        "PORTÉE": 72,
        "CLÔTURE": 60,
        "CLARTÉ": 78
      },
      "fr": {
        "oeuvre": "Répandre le mot / Ruling Passions",
        "entree": "Blackburn défend le quasi-réalisme moral : un expressivisme qui peut expliquer pourquoi les jugements moraux semblent vrais ou faux, objectifs et universels, sans postuler de faits moraux objectifs. On peut « gagner » le droit de parler comme un réaliste.",
        "concepts": [
          {
            "nom": "LE QUASI-RÉALISME",
            "cat": "transcendant",
            "type": "Réalisme",
            "puissance": 82,
            "desc": "Bascule : l'expressivisme peut simuler le réalisme moral — on peut gagner le droit de dire 'la torture est vraiment mauvaise' sans faits moraux objectifs."
          },
          {
            "nom": "LE PROJECTIVISME",
            "cat": "immanent",
            "type": "Éthique des Vertus",
            "puissance": 78,
            "desc": "Nous projetons nos attitudes sur le monde et les traitons ensuite comme des propriétés du monde — Hume modernisé."
          },
          {
            "nom": "LES ATTITUDES MOUSSANTES",
            "cat": "immanent",
            "type": "Éthique des Vertus",
            "puissance": 72,
            "desc": "Les attitudes morales ont une structure d'engagement pratique — elles ne sont pas que des expressions émotionnelles mais des engagements normatifs."
          }
        ],
        "filiation": {
          "maitres": [
            "HUME",
            "AYER",
            "GIBBARD"
          ],
          "disciples": [
            "EXPRESSIVISME SOPHISTIQUÉ",
            "QUASI-RÉALISME"
          ],
          "contre": [
            "RÉALISME MORAL NATUREL",
            "THÉORIE DE L'ERREUR",
            "INTUITIONNISME"
          ]
        }
      },
      "en": {
        "oeuvre": "Spreading the Word / Ruling Passions",
        "entree": "Blackburn defends moral quasi-realism: an expressivism that can explain why moral judgments seem true or false, objective and universal, without postulating objective moral facts. One can 'earn' the right to speak like a realist.",
        "concepts": [
          {
            "nom": "QUASI-REALISM",
            "cat": "transcendant",
            "type": "Réalisme",
            "puissance": 82,
            "desc": "A shift: expressivism can simulate moral realism — one can earn the right to say 'torture is really wrong' without objective moral facts."
          },
          {
            "nom": "PROJECTIVISM",
            "cat": "immanent",
            "type": "Éthique des Vertus",
            "puissance": 78,
            "desc": "We project our attitudes onto the world and then treat them as properties of the world — Hume modernized."
          },
          {
            "nom": "FROTHY ATTITUDES",
            "cat": "immanent",
            "type": "Éthique des Vertus",
            "puissance": 72,
            "desc": "Moral attitudes have a structure of practical commitment — they are not mere emotional expressions but normative commitments."
          }
        ],
        "filiation": {
          "maitres": [
            "HUME",
            "AYER",
            "GIBBARD"
          ],
          "disciples": [
            "SOPHISTICATED EXPRESSIVISM",
            "QUASI-REALISM"
          ],
          "contre": [
            "NATURAL MORAL REALISM",
            "ERROR THEORY",
            "INTUITIONISM"
          ]
        }
      }
    },
    {
      "id": "177",
      "nom": "HARAWAY",
      "full": "Donna Haraway",
      "dates": "1944-",
      "types": [
        "Féminisme",
        "Philo. Sciences"
      ],
      "lieu": "États-Unis",
      "era": "CONTEMPORAINE",
      "imgUrl": "https://upload.wikimedia.org/wikipedia/commons/c/ce/Donna_Haraway_2006_%28cropped%29.jpg",
      "stats": {
        "INFLUENCE": 80,
        "RIGUEUR": 52,
        "ANCRAGE": 45,
        "PORTÉE": 85,
        "CLÔTURE": 40,
        "CLARTÉ": 48
      },
      "fr": {
        "oeuvre": "Le Manifeste Cyborg / Savoirs situés",
        "entree": "Haraway brouille les frontières entre humain, animal et machine avec son Manifeste Cyborg : une figure politique et ontologique contre les pureté, les totalisations et les dominations. Les savoirs sont toujours situés — partielle, partiale, partielle.",
        "concepts": [
          {
            "nom": "LE CYBORG",
            "cat": "transcendant",
            "type": "Féminisme",
            "puissance": 88,
            "desc": "Bascule : la figure du cyborg (humain-machine) dissout les dichotomies nature/culture, humain/animal, masculin/féminin — une politique contre les totalisations."
          },
          {
            "nom": "LES SAVOIRS SITUÉS",
            "cat": "immanent",
            "type": "Philo. Sciences",
            "puissance": 82,
            "desc": "Toute connaissance est située, partielle et partiale — la prétendue objectivité scientifique est elle-même un point de vue particulier non avoué."
          },
          {
            "nom": "FAIRE MÉNAGE AVEC",
            "cat": "transcendant",
            "type": "Féminisme",
            "puissance": 78,
            "desc": "Bascule cosmopolitique : apprendre à cohabiter avec les autres espèces dans la crise écologique — le compostisme contre le transhumanisme."
          }
        ],
        "filiation": {
          "maitres": [
            "FOUCAULT",
            "HARDING",
            "LATOUR"
          ],
          "disciples": [
            "ÉTUDES FÉMINISTES DES SCIENCES",
            "ÉTUDES ANIMALES"
          ],
          "contre": [
            "HUMANISME",
            "UNIVERSALISME SCIENTIFIQUE",
            "TRANSHUMANISME"
          ]
        }
      },
      "en": {
        "oeuvre": "A Cyborg Manifesto / Situated Knowledges",
        "entree": "Haraway blurs the boundaries between human, animal, and machine with her Cyborg Manifesto: a political and ontological figure against purity, totalizations, and dominations. Knowledge is always situated — partial, biased, and partial.",
        "concepts": [
          {
            "nom": "THE CYBORG",
            "cat": "transcendant",
            "type": "Féminisme",
            "puissance": 88,
            "desc": "A shift: the cyborg figure (human-machine) dissolves nature/culture, human/animal, masculine/feminine dichotomies — a politics against totalizations."
          },
          {
            "nom": "SITUATED KNOWLEDGES",
            "cat": "immanent",
            "type": "Philo. Sciences",
            "puissance": 82,
            "desc": "All knowledge is situated, partial, and biased — the pretense of scientific objectivity is itself a particular undisclosed viewpoint."
          },
          {
            "nom": "MAKING KIN",
            "cat": "transcendant",
            "type": "Féminisme",
            "puissance": 78,
            "desc": "A cosmopolitical shift: learning to cohabit with other species in the ecological crisis — compostism against transhumanism."
          }
        ],
        "filiation": {
          "maitres": [
            "FOUCAULT",
            "HARDING",
            "LATOUR"
          ],
          "disciples": [
            "FEMINIST SCIENCE STUDIES",
            "ANIMAL STUDIES"
          ],
          "contre": [
            "HUMANISM",
            "SCIENTIFIC UNIVERSALISM",
            "TRANSHUMANISM"
          ]
        }
      }
    },
    {
      "id": "178",
      "nom": "S.HAACK",
      "full": "Susan Haack",
      "dates": "1945-",
      "types": [
        "Pragmatisme",
        "Empirisme"
      ],
      "lieu": "Angleterre / États-Unis",
      "era": "CONTEMPORAINE",
      "imgUrl": "https://upload.wikimedia.org/wikipedia/commons/5/53/Susan_Haack_talking_at_the_Copernicus_Center.jpg",
      "stats": {
        "INFLUENCE": 58,
        "RIGUEUR": 88,
        "ANCRAGE": 70,
        "PORTÉE": 65,
        "CLÔTURE": 65,
        "CLARTÉ": 78
      },
      "fr": {
        "oeuvre": "Preuves et enquête / Manifeste d'une femme de science",
        "entree": "Haack défend le fondationnalisme cohérentiste — le « fondherénisme » — contre le relativisme postmoderne et le fondationnalisme classique. L'enquête scientifique est continue avec l'enquête ordinaire ; les preuves ont une structure en mosaïque.",
        "concepts": [
          {
            "nom": "LE FONDHERÉNISME",
            "cat": "transcendant",
            "type": "Pragmatisme",
            "puissance": 80,
            "desc": "Bascule : ni fondationnalisme pur ni cohérentisme pur — les expériences perceptives ancrent l'édifice mais les croyances se soutiennent mutuellement comme une mosaïque."
          },
          {
            "nom": "L'ENQUÊTE EMPIRIQUE",
            "cat": "immanent",
            "type": "Empirisme",
            "puissance": 78,
            "desc": "La méthode scientifique est une version sophistiquée de l'enquête ordinaire — pas de rupture épistémique mais amélioration continue des outils d'investigation."
          },
          {
            "nom": "CONTRE LE CYNISME ENVERS LA SCIENCE",
            "cat": "immanent",
            "type": "Pragmatisme",
            "puissance": 72,
            "desc": "Le relativisme postmoderne et le féminisme critique de la science sont des menaces épistémiques — défense de la recherche honnête de la vérité."
          }
        ],
        "filiation": {
          "maitres": [
            "PEIRCE",
            "JAMES",
            "QUINE"
          ],
          "disciples": [
            "PRAGMATISME ANALYTIQUE CONTEMPORAIN"
          ],
          "contre": [
            "RORTY (anti-vérité)",
            "RELATIVISME POSTMODERNE",
            "FONDATIONNALISME CLASSIQUE"
          ]
        }
      },
      "en": {
        "oeuvre": "Evidence and Inquiry / Manifesto of a Passionate Moderate",
        "entree": "Haack defends foundherentism — a foundationalist coherentism — against postmodern relativism and classical foundationalism. Scientific inquiry is continuous with ordinary inquiry; evidence has a crossword-puzzle structure.",
        "concepts": [
          {
            "nom": "FOUNDHERENTISM",
            "cat": "transcendant",
            "type": "Pragmatisme",
            "puissance": 80,
            "desc": "A shift: neither pure foundationalism nor pure coherentism — perceptual experiences anchor the edifice but beliefs mutually support each other like a mosaic."
          },
          {
            "nom": "EMPIRICAL INQUIRY",
            "cat": "immanent",
            "type": "Empirisme",
            "puissance": 78,
            "desc": "Scientific method is a sophisticated version of ordinary inquiry — no epistemic rupture but continuous improvement of investigation tools."
          },
          {
            "nom": "AGAINST SCIENCE CYNICISM",
            "cat": "immanent",
            "type": "Pragmatisme",
            "puissance": 72,
            "desc": "Postmodern relativism and feminist critique of science are epistemic threats — defense of honest pursuit of truth."
          }
        ],
        "filiation": {
          "maitres": [
            "PEIRCE",
            "JAMES",
            "QUINE"
          ],
          "disciples": [
            "CONTEMPORARY ANALYTIC PRAGMATISM"
          ],
          "contre": [
            "RORTY (anti-truth)",
            "POSTMODERN RELATIVISM",
            "CLASSICAL FOUNDATIONALISM"
          ]
        }
      }
    },
    {
      "id": "179",
      "nom": "VARELA",
      "full": "Francisco Varela",
      "dates": "1946-2001",
      "types": [
        "Phénoménologie",
        "Philo. Sciences"
      ],
      "lieu": "Chili / France",
      "era": "CONTEMPORAINE",
      "imgUrl": "https://upload.wikimedia.org/wikipedia/commons/c/cf/Francisco_Varela.jpg",
      "stats": {
        "INFLUENCE": 70,
        "RIGUEUR": 78,
        "ANCRAGE": 65,
        "PORTÉE": 78,
        "CLÔTURE": 60,
        "CLARTÉ": 62
      },
      "fr": {
        "oeuvre": "L'Inscription corporelle de l'esprit (avec Thompson et Rosch)",
        "entree": "Varela fonde l'énactivisme : la cognition n'est pas représentation de l'environnement mais action dans et à travers lui. L'autopoïèse (auto-organisation des systèmes vivants) et la phénoménologie husserlienne convergent — la conscience est incarnée, embarquée et enactée.",
        "concepts": [
          {
            "nom": "L'ÉNACTIVISME",
            "cat": "transcendant",
            "type": "Phénoménologie",
            "puissance": 85,
            "desc": "Bascule : la cognition est action (en-action) dans l'environnement — pas représentation interne d'un monde prédonné mais constitution mutuelle."
          },
          {
            "nom": "L'AUTOPOÏÈSE",
            "cat": "immanent",
            "type": "Philo. Sciences",
            "puissance": 82,
            "desc": "Les organismes se constituent eux-mêmes — leur identité émerge de l'auto-organisation continue de leurs composants."
          },
          {
            "nom": "LA COGNITION INCARNÉE",
            "cat": "immanent",
            "type": "Phénoménologie",
            "puissance": 78,
            "desc": "La cognition dépend du corps dans son environnement — Merleau-Ponty rencontre les neurosciences dans une phénoménologie naturaliste."
          }
        ],
        "filiation": {
          "maitres": [
            "MATURANA",
            "HUSSERL",
            "M-PONTY"
          ],
          "disciples": [
            "SCIENCES COGNITIVES INCARNÉES",
            "4E COGNITION"
          ],
          "contre": [
            "COGNITIVISME COMPUTATIONNEL",
            "REPRÉSENTATIONALISME"
          ]
        }
      },
      "en": {
        "oeuvre": "The Embodied Mind (with Thompson and Rosch)",
        "entree": "Varela founds enactivism: cognition is not representation of the environment but action in and through it. Autopoiesis (self-organization of living systems) and Husserlian phenomenology converge — consciousness is embodied, embedded, and enacted.",
        "concepts": [
          {
            "nom": "ENACTIVISM",
            "cat": "transcendant",
            "type": "Phénoménologie",
            "puissance": 85,
            "desc": "A shift: cognition is en-action in the environment — not internal representation of a pre-given world but mutual constitution."
          },
          {
            "nom": "AUTOPOIESIS",
            "cat": "immanent",
            "type": "Philo. Sciences",
            "puissance": 82,
            "desc": "Organisms constitute themselves — their identity emerges from the continuous self-organization of their components."
          },
          {
            "nom": "EMBODIED COGNITION",
            "cat": "immanent",
            "type": "Phénoménologie",
            "puissance": 78,
            "desc": "Cognition depends on the body in its environment — Merleau-Ponty meets neuroscience in a naturalized phenomenology."
          }
        ],
        "filiation": {
          "maitres": [
            "MATURANA",
            "HUSSERL",
            "M-PONTY"
          ],
          "disciples": [
            "EMBODIED COGNITIVE SCIENCE",
            "4E COGNITION"
          ],
          "contre": [
            "COMPUTATIONAL COGNITIVISM",
            "REPRESENTATIONALISM"
          ]
        }
      }
    },
    {
      "id": "180",
      "nom": "WORRALL",
      "full": "John Worrall",
      "dates": "1946-",
      "types": [
        "Philo. Sciences"
      ],
      "lieu": "Angleterre",
      "era": "CONTEMPORAINE",
      "imgUrl": "https://upload.wikimedia.org/wikipedia/commons/3/33/John_Worrall.jpg",
      "stats": {
        "INFLUENCE": 52,
        "RIGUEUR": 82,
        "ANCRAGE": 65,
        "PORTÉE": 62,
        "CLÔTURE": 62,
        "CLARTÉ": 70
      },
      "fr": {
        "oeuvre": "Le Réalisme structurel : le meilleur des deux mondes ?",
        "entree": "Worrall propose le réalisme structurel comme voie médiane entre le réalisme scientifique et l'anti-réalisme. La science préserve la structure mathématique à travers les révolutions — elle ne dit rien sur la nature des entités, seulement leurs relations structurelles.",
        "concepts": [
          {
            "nom": "LE RÉALISME STRUCTUREL",
            "cat": "transcendant",
            "type": "Philo. Sciences",
            "puissance": 80,
            "desc": "Bascule : la science préserve la structure (équations) à travers les révolutions même si les entités changent — pas de miracle mais pas de relativisme total."
          },
          {
            "nom": "LA CONTINUITÉ STRUCTURELLE",
            "cat": "immanent",
            "type": "Philo. Sciences",
            "puissance": 75,
            "desc": "De Fresnel à Maxwell : les équations sont préservées même si le support change (éther → champ EM) — continuité formelle sans continuité ontologique."
          },
          {
            "nom": "ENTRE RÉALISME ET ANTI-RÉALISME",
            "cat": "immanent",
            "type": "Philo. Sciences",
            "puissance": 72,
            "desc": "Le réalisme structurel répond à la méta-induction pessimiste (Laudan) tout en évitant le miracle de van Fraassen — une position médiatrice."
          }
        ],
        "filiation": {
          "maitres": [
            "POINCARE",
            "LAKATOS",
            "VAN FRAASSEN"
          ],
          "disciples": [
            "RÉALISME STRUCTUREL",
            "FRENCH",
            "LADYMAN"
          ],
          "contre": [
            "RÉALISME NAÏF",
            "ANTI-RÉALISME TOTAL",
            "LAUDAN"
          ]
        }
      },
      "en": {
        "oeuvre": "Structural Realism: The Best of Both Worlds?",
        "entree": "Worrall proposes structural realism as a middle way between scientific realism and anti-realism. Science preserves mathematical structure through revolutions — it says nothing about the nature of entities, only their structural relations.",
        "concepts": [
          {
            "nom": "STRUCTURAL REALISM",
            "cat": "transcendant",
            "type": "Philo. Sciences",
            "puissance": 80,
            "desc": "A shift: science preserves structure (equations) through revolutions even as entities change — no miracle but no total relativism."
          },
          {
            "nom": "STRUCTURAL CONTINUITY",
            "cat": "immanent",
            "type": "Philo. Sciences",
            "puissance": 75,
            "desc": "From Fresnel to Maxwell: equations are preserved even as the medium changes (ether → EM field) — formal continuity without ontological continuity."
          },
          {
            "nom": "BETWEEN REALISM AND ANTI-REALISM",
            "cat": "immanent",
            "type": "Philo. Sciences",
            "puissance": 72,
            "desc": "Structural realism responds to the pessimistic meta-induction (Laudan) while avoiding van Fraassen's miracle — a mediating position."
          }
        ],
        "filiation": {
          "maitres": [
            "POINCARE",
            "LAKATOS",
            "VAN FRAASSEN"
          ],
          "disciples": [
            "STRUCTURAL REALISM",
            "FRENCH",
            "LADYMAN"
          ],
          "contre": [
            "NAIVE REALISM",
            "TOTAL ANTI-REALISM",
            "LAUDAN"
          ]
        }
      }
    },
    {
      "id": "181",
      "nom": "P.SINGER",
      "full": "Peter Singer",
      "dates": "1946-",
      "types": [
        "Utilitarisme",
        "Écophilosophie"
      ],
      "lieu": "Australie",
      "era": "CONTEMPORAINE",
      "imgUrl": "https://upload.wikimedia.org/wikipedia/commons/6/69/Peter_Singer_2017_%28cropped%29.jpg",
      "stats": {
        "INFLUENCE": 85,
        "RIGUEUR": 80,
        "ANCRAGE": 60,
        "PORTÉE": 88,
        "CLÔTURE": 52,
        "CLARTÉ": 88
      },
      "fr": {
        "oeuvre": "La Libération animale / Famine, Opulence et Moralité",
        "entree": "Singer applique l'utilitarisme des préférences avec une rigueur implacable. Sa thèse sur la famine : si nous pouvons prévenir quelque chose de très mauvais sans sacrifier quelque chose de comparable, nous devons le faire — conclusion exigeante pour les riches.",
        "concepts": [
          {
            "nom": "L'ÉGALITÉ DES INTÉRÊTS",
            "cat": "transcendant",
            "type": "Utilitarisme",
            "puissance": 88,
            "desc": "Bascule : la capacité à souffrir est le critère moral — les intérêts des animaux comptent autant que les intérêts comparables des humains."
          },
          {
            "nom": "LE SPÉCISME",
            "cat": "transcendant",
            "type": "Écophilosophie",
            "puissance": 85,
            "desc": "Bascule : discriminer sur la base de l'espèce est aussi arbitraire que le racisme — le spécisme est un préjugé à éliminer."
          },
          {
            "nom": "L'OBLIGATION D'AIDER",
            "cat": "immanent",
            "type": "Utilitarisme",
            "puissance": 82,
            "desc": "Nous avons une obligation morale forte d'aider ceux qui souffrent de malnutrition — le luxe des riches est moralement indefensible à côté de la famine."
          }
        ],
        "filiation": {
          "maitres": [
            "BENTHAM",
            "MILL",
            "HARE"
          ],
          "disciples": [
            "MOUVEMENT POUR LES DROITS DES ANIMAUX",
            "ALTRUISME EFFICACE"
          ],
          "contre": [
            "SPÉCISME",
            "ÉTHIQUE DES VERTUS",
            "DÉONTOLOGIE"
          ]
        }
      },
      "en": {
        "oeuvre": "Animal Liberation / Famine, Affluence, and Morality",
        "entree": "Singer applies preference utilitarianism with relentless rigor. His thesis on famine: if we can prevent something very bad without sacrificing something comparable, we must do so — a demanding conclusion for the wealthy.",
        "concepts": [
          {
            "nom": "EQUAL CONSIDERATION OF INTERESTS",
            "cat": "transcendant",
            "type": "Utilitarisme",
            "puissance": 88,
            "desc": "A shift: the capacity to suffer is the moral criterion — the interests of animals count as much as comparable interests of humans."
          },
          {
            "nom": "SPECIESISM",
            "cat": "transcendant",
            "type": "Écophilosophie",
            "puissance": 85,
            "desc": "A shift: discriminating on the basis of species is as arbitrary as racism — speciesism is a prejudice to be eliminated."
          },
          {
            "nom": "THE OBLIGATION TO HELP",
            "cat": "immanent",
            "type": "Utilitarisme",
            "puissance": 82,
            "desc": "We have a strong moral obligation to help those suffering from malnutrition — the luxury of the rich is morally indefensible next to famine."
          }
        ],
        "filiation": {
          "maitres": [
            "BENTHAM",
            "MILL",
            "HARE"
          ],
          "disciples": [
            "ANIMAL RIGHTS MOVEMENT",
            "EFFECTIVE ALTRUISM"
          ],
          "contre": [
            "SPECIESISM",
            "VIRTUE ETHICS",
            "DEONTOLOGY"
          ]
        }
      }
    },
    {
      "id": "182",
      "nom": "G.PRIEST",
      "full": "Graham Priest",
      "dates": "1948-",
      "types": [
        "Logique"
      ],
      "lieu": "Australie / États-Unis",
      "era": "CONTEMPORAINE",
      "imgUrl": "https://upload.wikimedia.org/wikipedia/commons/a/a9/Buddhism_%26_Science_-_Interview_with_Graham_Priest_%28cropped%29.png",
      "stats": {
        "INFLUENCE": 62,
        "RIGUEUR": 88,
        "ANCRAGE": 58,
        "PORTÉE": 72,
        "CLÔTURE": 55,
        "CLARTÉ": 68
      },
      "fr": {
        "oeuvre": "Au-delà des limites de la pensée / Logique : une introduction brève",
        "entree": "Priest défend le dialéthéisme et la logique paraconsistante : certaines contradictions sont vraies. Il existe des dialetheia — propositions à la fois vraies et fausses. Contre le principe ex contradictione quodlibet, des raisonnements restent valides même en présence de contradictions.",
        "concepts": [
          {
            "nom": "LE DIALÉTHÉISME",
            "cat": "transcendant",
            "type": "Logique",
            "puissance": 85,
            "desc": "Bascule : certaines propositions sont à la fois vraies et fausses — le paradoxe du menteur révèle une vérité contradictoire, non une erreur."
          },
          {
            "nom": "LA LOGIQUE PARACONSISTANTE",
            "cat": "immanent",
            "type": "Logique",
            "puissance": 82,
            "desc": "Un système logique où 'de A et non-A, on peut dériver n'importe quoi' est faux — la contradiction ne rend pas trivial le système."
          },
          {
            "nom": "LES LIMITES DE LA PENSÉE",
            "cat": "immanent",
            "type": "Logique",
            "puissance": 78,
            "desc": "Les grands paradoxes (Kant, Hegel, Cantor, Gödel, Russell) révèlent des situations limites où la pensée atteint sa propre négation."
          }
        ],
        "filiation": {
          "maitres": [
            "HEGEL",
            "RUSSELL",
            "DA COSTA"
          ],
          "disciples": [
            "LOGIQUE PARACONSISTANTE",
            "DIALÉTHÉISME"
          ],
          "contre": [
            "LOGIQUE CLASSIQUE",
            "PRINCIPE DE NON-CONTRADICTION",
            "ARISTOTLE (LNC)"
          ]
        }
      },
      "en": {
        "oeuvre": "Beyond the Limits of Thought / Logic: A Very Short Introduction",
        "entree": "Priest defends dialetheism and paraconsistent logic: some contradictions are true. There are dialetheias — propositions that are both true and false. Against the ex contradictione quodlibet principle, reasoning remains valid even in the presence of contradictions.",
        "concepts": [
          {
            "nom": "DIALETHEISM",
            "cat": "transcendant",
            "type": "Logique",
            "puissance": 85,
            "desc": "A shift: some propositions are both true and false — the liar paradox reveals a contradictory truth, not an error."
          },
          {
            "nom": "PARACONSISTENT LOGIC",
            "cat": "immanent",
            "type": "Logique",
            "puissance": 82,
            "desc": "A logical system where 'from A and not-A, anything can be derived' is false — contradiction does not make the system trivial."
          },
          {
            "nom": "LIMITS OF THOUGHT",
            "cat": "immanent",
            "type": "Logique",
            "puissance": 78,
            "desc": "The great paradoxes (Kant, Hegel, Cantor, Gödel, Russell) reveal limit situations where thought reaches its own negation."
          }
        ],
        "filiation": {
          "maitres": [
            "HEGEL",
            "RUSSELL",
            "DA COSTA"
          ],
          "disciples": [
            "PARACONSISTENT LOGIC",
            "DIALETHEISM"
          ],
          "contre": [
            "CLASSICAL LOGIC",
            "PRINCIPLE OF NON-CONTRADICTION",
            "ARISTOTLE (LNC)"
          ]
        }
      }
    },
    {
      "id": "183",
      "nom": "NUSSBAUM",
      "full": "Martha Nussbaum",
      "dates": "1947-",
      "types": [
        "Éthique des Vertus",
        "Contractualisme"
      ],
      "lieu": "États-Unis",
      "era": "CONTEMPORAINE",
      "imgUrl": "https://upload.wikimedia.org/wikipedia/commons/7/7d/Martha_Nussbaum_2010_%28cropped%29.jpg",
      "stats": {
        "INFLUENCE": 82,
        "RIGUEUR": 80,
        "ANCRAGE": 68,
        "PORTÉE": 82,
        "CLÔTURE": 60,
        "CLARTÉ": 80
      },
      "fr": {
        "oeuvre": "La Fragilité du bien / Les Capacités humaines",
        "entree": "Nussbaum réhabilite les émotions en éthique et développe l'approche par les capabilités : une liste de capacités centrales humaines que toute société doit garantir. Elle défend aussi les études littéraires comme formation morale à l'empathie.",
        "concepts": [
          {
            "nom": "L'APPROCHE PAR LES CAPABILITÉS",
            "cat": "transcendant",
            "type": "Contractualisme",
            "puissance": 85,
            "desc": "Bascule : la justice exige non seulement des ressources mais des capabilités (capabilities) — ce que les gens peuvent réellement faire et être."
          },
          {
            "nom": "LES ÉMOTIONS COGNITIVES",
            "cat": "immanent",
            "type": "Éthique des Vertus",
            "puissance": 82,
            "desc": "Les émotions sont des formes d'évaluation cognitive, non des perturbations irrationnelles — la colère, la pitié, la crainte ont une structure intentionnelle."
          },
          {
            "nom": "LA FRAGILITÉ DU BIEN",
            "cat": "immanent",
            "type": "Éthique des Vertus",
            "puissance": 78,
            "desc": "La vie bonne est vulnérable à la fortune (tukhè) — contre l'idéal stoïcien d'autarcie, Aristote a raison de valoriser les biens extérieurs."
          }
        ],
        "filiation": {
          "maitres": [
            "ARISTOTE",
            "RAWLS",
            "SEN"
          ],
          "disciples": [
            "APPROCHE PAR LES CAPABILITÉS",
            "ÉTHIQUE DES ÉMOTIONS"
          ],
          "contre": [
            "STOÏCISME (autarcie)",
            "UTILITARISME (utils)",
            "RAWLS (ressources)"
          ]
        }
      },
      "en": {
        "oeuvre": "The Fragility of Goodness / Creating Capabilities",
        "entree": "Nussbaum rehabilitates emotions in ethics and develops the capabilities approach: a list of central human capabilities that every society must guarantee. She also defends literary studies as moral training in empathy.",
        "concepts": [
          {
            "nom": "THE CAPABILITIES APPROACH",
            "cat": "transcendant",
            "type": "Contractualisme",
            "puissance": 85,
            "desc": "A shift: justice requires not only resources but capabilities — what people can actually do and be."
          },
          {
            "nom": "COGNITIVE EMOTIONS",
            "cat": "immanent",
            "type": "Éthique des Vertus",
            "puissance": 82,
            "desc": "Emotions are forms of cognitive evaluation, not irrational disturbances — anger, pity, fear have an intentional structure."
          },
          {
            "nom": "THE FRAGILITY OF GOOD",
            "cat": "immanent",
            "type": "Éthique des Vertus",
            "puissance": 78,
            "desc": "The good life is vulnerable to fortune (tuche) — against the Stoic ideal of self-sufficiency, Aristotle is right to value external goods."
          }
        ],
        "filiation": {
          "maitres": [
            "ARISTOTLE",
            "RAWLS",
            "SEN"
          ],
          "disciples": [
            "CAPABILITIES APPROACH",
            "ETHICS OF EMOTIONS"
          ],
          "contre": [
            "STOICISM (self-sufficiency)",
            "UTILITARIANISM (utils)",
            "RAWLS (resources)"
          ]
        }
      }
    },
    {
      "id": "184",
      "nom": "BUTLER",
      "full": "Judith Butler",
      "dates": "1956-",
      "types": [
        "Féminisme",
        "Postmodernisme"
      ],
      "lieu": "États-Unis",
      "era": "CONTEMPORAINE",
      "imgUrl": "https://upload.wikimedia.org/wikipedia/commons/b/bf/JudithButler2013.jpg",
      "stats": {
        "INFLUENCE": 88,
        "RIGUEUR": 48,
        "ANCRAGE": 42,
        "PORTÉE": 90,
        "CLÔTURE": 38,
        "CLARTÉ": 28
      },
      "fr": {
        "oeuvre": "Trouble dans le genre / Le Pouvoir des mots",
        "entree": "Butler déconstruit le genre et même le sexe comme performatifs : il n'y a pas de sujet genré préexistant à ses actes — le genre est constitué par la répétition stylisée d'actes corporels. Ni nature ni culture, mais performance itérative.",
        "concepts": [
          {
            "nom": "LA PERFORMATIVITÉ DU GENRE",
            "cat": "transcendant",
            "type": "Féminisme",
            "puissance": 90,
            "desc": "Bascule : le genre n'est pas ce qu'on est mais ce qu'on fait — la répétition stylisée d'actes corporels constitue (et peut subvertir) l'identité de genre."
          },
          {
            "nom": "LE SUJET EN CONSTRUCTION",
            "cat": "immanent",
            "type": "Postmodernisme",
            "puissance": 85,
            "desc": "Il n'y a pas de sujet préexistant à ses actes — le sujet est lui-même l'effet de processus discursifs et performatifs."
          },
          {
            "nom": "LA SUBVERSION PAR LA PARODIE",
            "cat": "immanent",
            "type": "Féminisme",
            "puissance": 80,
            "desc": "Le drag, le cross-dressing — la parodie du genre révèle son artificialité et ouvre des espaces de subversion des normes hégémoniques."
          }
        ],
        "filiation": {
          "maitres": [
            "FOUCAULT",
            "DERRIDA",
            "IRIGARAY (critique)",
            "AUSTIN"
          ],
          "disciples": [
            "THÉORIE QUEER",
            "ÉTUDES DE GENRE"
          ],
          "contre": [
            "ESSENTIALISME FÉMININ",
            "FÉMINISME DE LA DIFFÉRENCE",
            "BIOLOGIE COMME DESTIN"
          ]
        }
      },
      "en": {
        "oeuvre": "Gender Trouble / Excitable Speech",
        "entree": "Butler deconstructs gender and even sex as performative: there is no gendered subject pre-existing its acts — gender is constituted by the stylized repetition of bodily acts. Neither nature nor culture, but iterative performance.",
        "concepts": [
          {
            "nom": "GENDER PERFORMATIVITY",
            "cat": "transcendant",
            "type": "Féminisme",
            "puissance": 90,
            "desc": "A shift: gender is not what one is but what one does — the stylized repetition of bodily acts constitutes (and can subvert) gender identity."
          },
          {
            "nom": "THE SUBJECT IN CONSTRUCTION",
            "cat": "immanent",
            "type": "Postmodernisme",
            "puissance": 85,
            "desc": "There is no subject pre-existing its acts — the subject is itself the effect of discursive and performative processes."
          },
          {
            "nom": "SUBVERSION THROUGH PARODY",
            "cat": "immanent",
            "type": "Féminisme",
            "puissance": 80,
            "desc": "Drag, cross-dressing — gender parody reveals its artificiality and opens spaces for subverting hegemonic norms."
          }
        ],
        "filiation": {
          "maitres": [
            "FOUCAULT",
            "DERRIDA",
            "IRIGARAY (critique)",
            "AUSTIN"
          ],
          "disciples": [
            "QUEER THEORY",
            "GENDER STUDIES"
          ],
          "contre": [
            "FEMALE ESSENTIALISM",
            "DIFFERENCE FEMINISM",
            "BIOLOGY AS DESTINY"
          ]
        }
      }
    },
    {
      "id": "185",
      "nom": "G.STRWSN",
      "full": "Galen Strawson",
      "dates": "1952-",
      "types": [
        "Réalisme",
        "Philo. Esprit"
      ],
      "lieu": "Angleterre / États-Unis",
      "era": "CONTEMPORAINE",
      "imgUrl": "",
      "stats": {
        "INFLUENCE": 55,
        "RIGUEUR": 82,
        "ANCRAGE": 60,
        "PORTÉE": 70,
        "CLÔTURE": 55,
        "CLARTÉ": 72
      },
      "fr": {
        "oeuvre": "Sujets mentaux / La Chose réelle",
        "entree": "Galen Strawson (fils de Peter Strawson) défend le panpsychisme réaliste : la conscience est la seule chose dont nous soyons certains — donc le réalisme doit inclure l'expérience dans sa description du monde fondamental. Le matérialisme honnête est panpsychiste.",
        "concepts": [
          {
            "nom": "LE PANPSYCHISME RÉALISTE",
            "cat": "transcendant",
            "type": "Réalisme",
            "puissance": 80,
            "desc": "Bascule : si le matérialisme est vrai et la conscience réelle, la conscience doit être dans la nature fondamentale des choses — le panpsychisme s'impose."
          },
          {
            "nom": "LE SUJET MINIMAL",
            "cat": "immanent",
            "type": "Philo. Esprit",
            "puissance": 75,
            "desc": "La subjectivité est irréductible — il existe un sujet minimal d'expérience qui ne peut être réduit à des relations ou des processus tiers."
          },
          {
            "nom": "CONTRE LE NARRATIVISME DU MOI",
            "cat": "immanent",
            "type": "Réalisme",
            "puissance": 70,
            "desc": "Le moi n'est pas une construction narrative — il y a un sujet réel d'expérience, contre Parfit, Dennett et les récits bouddhistes du non-soi."
          }
        ],
        "filiation": {
          "maitres": [
            "P.STRAWS (père)",
            "NAGEL",
            "HUME"
          ],
          "disciples": [
            "PANPSYCHISME ANALYTIQUE"
          ],
          "contre": [
            "MATÉRIALISME ÉLIMINATIF",
            "NARRATIVISME",
            "PARFIT"
          ]
        }
      },
      "en": {
        "oeuvre": "Mental Reality / The Real Thing",
        "entree": "Galen Strawson (son of Peter Strawson) defends realistic panpsychism: consciousness is the only thing we can be certain of — so realism must include experience in its description of the fundamental world. Honest materialism is panpsychist.",
        "concepts": [
          {
            "nom": "REALISTIC PANPSYCHISM",
            "cat": "transcendant",
            "type": "Réalisme",
            "puissance": 80,
            "desc": "A shift: if materialism is true and consciousness real, consciousness must be in the fundamental nature of things — panpsychism follows."
          },
          {
            "nom": "THE MINIMAL SUBJECT",
            "cat": "immanent",
            "type": "Philo. Esprit",
            "puissance": 75,
            "desc": "Subjectivity is irreducible — there is a minimal subject of experience that cannot be reduced to relations or third-party processes."
          },
          {
            "nom": "AGAINST SELF-NARRATIVISM",
            "cat": "immanent",
            "type": "Réalisme",
            "puissance": 70,
            "desc": "The self is not a narrative construction — there is a real subject of experience, against Parfit, Dennett, and Buddhist no-self accounts."
          }
        ],
        "filiation": {
          "maitres": [
            "P.STRAWS (father)",
            "NAGEL",
            "HUME"
          ],
          "disciples": [
            "ANALYTIC PANPSYCHISM"
          ],
          "contre": [
            "ELIMINATIVE MATERIALISM",
            "NARRATIVISM",
            "PARFIT"
          ]
        }
      }
    },
    {
      "id": "186",
      "nom": "G.OPPY",
      "full": "Graham Oppy",
      "dates": "1960-",
      "types": [
        "Philo. Religion",
        "Logique"
      ],
      "lieu": "Australie",
      "era": "CONTEMPORAINE",
      "imgUrl": "https://upload.wikimedia.org/wikipedia/commons/d/dd/Graham_Oppy.jpg",
      "stats": {
        "INFLUENCE": 52,
        "RIGUEUR": 90,
        "ANCRAGE": 68,
        "PORTÉE": 65,
        "CLÔTURE": 65,
        "CLARTÉ": 70
      },
      "fr": {
        "oeuvre": "Arguments ontologiques et croyance en Dieu",
        "entree": "Oppy produit l'analyse la plus exhaustive des arguments ontologiques pour l'existence de Dieu. Il les réfute tous, y compris l'argument modal de Plantinga, en montrant que le théiste et l'athée peuvent symétriquement postuler leur conclusion.",
        "concepts": [
          {
            "nom": "LA SYMÉTRIE DES PRÉMISSES",
            "cat": "transcendant",
            "type": "Philo. Religion",
            "puissance": 85,
            "desc": "Bascule : pour chaque argument ontologique, l'athée peut construire un argument symétrique — aucun ne peut trancher le débat entre théiste et athée."
          },
          {
            "nom": "L'ANALYSE DES ARGUMENTS ONTOLOGIQUES",
            "cat": "immanent",
            "type": "Logique",
            "puissance": 82,
            "desc": "Catalogue exhaustif de tous les arguments ontologiques — modalité, perfection, valeur, probabilité — et réfutation systématique."
          },
          {
            "nom": "LE NATURALISME HUMBLE",
            "cat": "immanent",
            "type": "Philo. Religion",
            "puissance": 72,
            "desc": "Un naturalisme qui admet son incomplétude — pas de preuve décisive contre Dieu, mais la charge de la preuve incombe aux théistes."
          }
        ],
        "filiation": {
          "maitres": [
            "HUME",
            "KANT",
            "PLANTINGA (critique)"
          ],
          "disciples": [
            "PHILOSOPHIE ANALYTIQUE DE LA RELIGION"
          ],
          "contre": [
            "ARGUMENTS ONTOLOGIQUES",
            "THÉISME NATUREL",
            "DESIGN INTELLIGENT"
          ]
        }
      },
      "en": {
        "oeuvre": "Ontological Arguments and Belief in God",
        "entree": "Oppy produces the most exhaustive analysis of ontological arguments for the existence of God. He refutes them all, including Plantinga's modal argument, by showing that the theist and the atheist can symmetrically posit their conclusion.",
        "concepts": [
          {
            "nom": "SYMMETRY OF PREMISES",
            "cat": "transcendant",
            "type": "Philo. Religion",
            "puissance": 85,
            "desc": "A shift: for every ontological argument, the atheist can construct a symmetrical argument — none can settle the debate between theist and atheist."
          },
          {
            "nom": "ANALYSIS OF ONTOLOGICAL ARGUMENTS",
            "cat": "immanent",
            "type": "Logique",
            "puissance": 82,
            "desc": "An exhaustive catalogue of all ontological arguments — modality, perfection, value, probability — and systematic refutation."
          },
          {
            "nom": "HUMBLE NATURALISM",
            "cat": "immanent",
            "type": "Philo. Religion",
            "puissance": 72,
            "desc": "A naturalism that admits its incompleteness — no decisive proof against God, but the burden of proof lies with theists."
          }
        ],
        "filiation": {
          "maitres": [
            "HUME",
            "KANT",
            "PLANTINGA (critique)"
          ],
          "disciples": [
            "ANALYTIC PHILOSOPHY OF RELIGION"
          ],
          "contre": [
            "ONTOLOGICAL ARGUMENTS",
            "NATURAL THEISM",
            "INTELLIGENT DESIGN"
          ]
        }
      }
    },
    {
      "id": "187",
      "nom": "ANDY.CLK",
      "full": "Andy Clark",
      "dates": "1957-",
      "types": [
        "Philo. Esprit",
        "Philo. Technique"
      ],
      "lieu": "Écosse / États-Unis",
      "era": "CONTEMPORAINE",
      "imgUrl": "",
      "stats": {
        "INFLUENCE": 68,
        "RIGUEUR": 78,
        "ANCRAGE": 62,
        "PORTÉE": 78,
        "CLÔTURE": 55,
        "CLARTÉ": 80
      },
      "fr": {
        "oeuvre": "Supersizing the Mind / Natural-Born Cyborgs",
        "entree": "Clark défend l'esprit étendu (avec Chalmers) : si un carnet de notes joue le même rôle fonctionnel que la mémoire interne, il fait partie de l'esprit. Les outils cognitifs ne sont pas séparés du mind mais le constituent. Nous sommes des cyborgs naturels.",
        "concepts": [
          {
            "nom": "L'ESPRIT ÉTENDU",
            "cat": "transcendant",
            "type": "Philo. Esprit",
            "puissance": 85,
            "desc": "Bascule : l'esprit déborde le crâne — les outils (carnets, smartphones) qui jouent le rôle fonctionnel de la mémoire font partie du système cognitif."
          },
          {
            "nom": "LA COUPLAGE AVEC L'ENVIRONNEMENT",
            "cat": "immanent",
            "type": "Philo. Technique",
            "puissance": 80,
            "desc": "L'cognition est un système agent-environnement couplé — pas de frontière nette entre le biologique et le technique dans la cognition."
          },
          {
            "nom": "LE CYBORG NATUREL",
            "cat": "immanent",
            "type": "Philo. Technique",
            "puissance": 75,
            "desc": "Les humains sont naturellement des bricoleurs cognitifs — nous nous sommes toujours augmentés d'outils qui étendent nos capacités cognitives."
          }
        ],
        "filiation": {
          "maitres": [
            "CHALMERS",
            "VARELA",
            "WITTGSTN"
          ],
          "disciples": [
            "COGNITION ÉTENDUE",
            "4E COGNITION"
          ],
          "contre": [
            "INTERNALISME COGNITIF",
            "CARTÉSIANISME",
            "COMPUTATIONNALISME CLASSIQUE"
          ]
        }
      },
      "en": {
        "oeuvre": "Supersizing the Mind / Natural-Born Cyborgs",
        "entree": "Clark defends the extended mind (with Chalmers): if a notebook plays the same functional role as internal memory, it is part of the mind. Cognitive tools are not separate from the mind but constitute it. We are natural-born cyborgs.",
        "concepts": [
          {
            "nom": "THE EXTENDED MIND",
            "cat": "transcendant",
            "type": "Philo. Esprit",
            "puissance": 85,
            "desc": "A shift: the mind extends beyond the skull — tools (notebooks, smartphones) that play the functional role of memory are part of the cognitive system."
          },
          {
            "nom": "COUPLING WITH ENVIRONMENT",
            "cat": "immanent",
            "type": "Philo. Technique",
            "puissance": 80,
            "desc": "Cognition is an agent-environment coupled system — no sharp boundary between the biological and the technical in cognition."
          },
          {
            "nom": "THE NATURAL CYBORG",
            "cat": "immanent",
            "type": "Philo. Technique",
            "puissance": 75,
            "desc": "Humans are naturally cognitive tinkerers — we have always extended ourselves with tools that expand our cognitive capacities."
          }
        ],
        "filiation": {
          "maitres": [
            "CHALMERS",
            "VARELA",
            "WITTGSTN"
          ],
          "disciples": [
            "EXTENDED COGNITION",
            "4E COGNITION"
          ],
          "contre": [
            "COGNITIVE INTERNALISM",
            "CARTESIANISM",
            "CLASSICAL COMPUTATIONALISM"
          ]
        }
      }
    },
    {
      "id": "188",
      "nom": "CHALMERS",
      "full": "David Chalmers",
      "dates": "1966-",
      "types": [
        "Philo. Esprit",
        "Dualisme"
      ],
      "lieu": "Australie / États-Unis",
      "era": "CONTEMPORAINE",
      "imgUrl": "https://upload.wikimedia.org/wikipedia/commons/f/fb/David_chalmers.jpg",
      "stats": {
        "INFLUENCE": 82,
        "RIGUEUR": 88,
        "ANCRAGE": 62,
        "PORTÉE": 85,
        "CLÔTURE": 58,
        "CLARTÉ": 82
      },
      "fr": {
        "oeuvre": "L'Esprit conscient",
        "entree": "Chalmers formule le « problème difficile » de la conscience : expliquer pourquoi des processus physiques s'accompagnent d'expérience subjective. Même une explication physique complète laisserait ouvert pourquoi il y a quelque chose que cela fait d'être. Son zombie philosophique est un argument classique.",
        "concepts": [
          {
            "nom": "LE PROBLÈME DIFFICILE",
            "cat": "transcendant",
            "type": "Philo. Esprit",
            "puissance": 92,
            "desc": "Bascule : le problème difficile (hard problem) est irréductible à des problèmes faciles (fonctions cognitives) — aucune explication fonctionnelle n'explique pourquoi il y a de l'expérience."
          },
          {
            "nom": "LE ZOMBIE PHILOSOPHIQUE",
            "cat": "immanent",
            "type": "Dualisme",
            "puissance": 88,
            "desc": "Un être physiquement identique à moi mais sans expérience subjective est concevable — donc la conscience n'est pas réductible au physique."
          },
          {
            "nom": "LE DUALISME DES PROPRIÉTÉS",
            "cat": "immanent",
            "type": "Dualisme",
            "puissance": 82,
            "desc": "Les propriétés phénoménales sont distinctes des propriétés physiques — non une substance distincte (Descartes) mais des propriétés irréductibles."
          }
        ],
        "filiation": {
          "maitres": [
            "NAGEL",
            "JACKSON",
            "KRIPKE"
          ],
          "disciples": [
            "PHILOSOPHIE DE LA CONSCIENCE CONTEMPORAINE"
          ],
          "contre": [
            "DENNETT (illusionnisme)",
            "PHYSICALISME RÉDUCTIF",
            "CHURCHLANDS"
          ]
        }
      },
      "en": {
        "oeuvre": "The Conscious Mind",
        "entree": "Chalmers formulates the 'hard problem' of consciousness: explaining why physical processes are accompanied by subjective experience. Even a complete physical explanation would leave open why there is something it is like to be. His philosophical zombie is a classic argument.",
        "concepts": [
          {
            "nom": "THE HARD PROBLEM",
            "cat": "transcendant",
            "type": "Philo. Esprit",
            "puissance": 92,
            "desc": "A shift: the hard problem is irreducible to easy problems (cognitive functions) — no functional explanation explains why there is experience."
          },
          {
            "nom": "THE PHILOSOPHICAL ZOMBIE",
            "cat": "immanent",
            "type": "Dualisme",
            "puissance": 88,
            "desc": "A being physically identical to me but without subjective experience is conceivable — so consciousness is not reducible to the physical."
          },
          {
            "nom": "PROPERTY DUALISM",
            "cat": "immanent",
            "type": "Dualisme",
            "puissance": 82,
            "desc": "Phenomenal properties are distinct from physical properties — not a distinct substance (Descartes) but irreducible properties."
          }
        ],
        "filiation": {
          "maitres": [
            "NAGEL",
            "JACKSON",
            "KRIPKE"
          ],
          "disciples": [
            "CONTEMPORARY PHILOSOPHY OF CONSCIOUSNESS"
          ],
          "contre": [
            "DENNETT (illusionism)",
            "REDUCTIVE PHYSICALISM",
            "CHURCHLANDS"
          ]
        }
      }
    },
    {
      "id": "189",
      "nom": "LADYMAN",
      "full": "James Ladyman",
      "dates": "1969-",
      "types": [
        "Philo. Sciences",
        "Réalisme"
      ],
      "lieu": "Angleterre",
      "era": "CONTEMPORAINE",
      "imgUrl": "",
      "stats": {
        "INFLUENCE": 50,
        "RIGUEUR": 88,
        "ANCRAGE": 65,
        "PORTÉE": 68,
        "CLÔTURE": 62,
        "CLARTÉ": 60
      },
      "fr": {
        "oeuvre": "Tout part du monde de la physique (avec Don Ross)",
        "entree": "Ladyman développe le réalisme structurel onique (OSR) : il n'y a pas d'objets individuels au niveau fondamental, seulement des structures. La physique (mécanique quantique, relativité) suggère que les relations sont plus fondamentales que les relata.",
        "concepts": [
          {
            "nom": "LE RÉALISME STRUCTUREL ONIQUE",
            "cat": "transcendant",
            "type": "Réalisme",
            "puissance": 82,
            "desc": "Bascule : pas d'objets individuels à la base — seules les structures sont fondamentales. La physique quantique révèle que les particules ne sont pas des choses mais des nœuds de relations."
          },
          {
            "nom": "PRIORITÉ DES RELATIONS",
            "cat": "immanent",
            "type": "Philo. Sciences",
            "puissance": 78,
            "desc": "Les relations sont ontologiquement primitives — les relata (les choses en relation) en dépendent, non l'inverse."
          },
          {
            "nom": "LE NATURISME MÉTAPHYSIQUE",
            "cat": "immanent",
            "type": "Réalisme",
            "puissance": 72,
            "desc": "La métaphysique doit être contrainte par la physique — toute ontologie en conflit avec la physique fondamentale est à rejeter."
          }
        ],
        "filiation": {
          "maitres": [
            "WORRALL",
            "FRENCH",
            "VAN FRAASSEN (critique)"
          ],
          "disciples": [
            "RÉALISME STRUCTUREL ONIQUE"
          ],
          "contre": [
            "RÉALISME DES OBJETS",
            "MÉTAPHYSIQUE A PRIORI",
            "EMPIRISME ANTI-MÉTAPHYSIQUE"
          ]
        }
      },
      "en": {
        "oeuvre": "Every Thing Must Go (with Don Ross)",
        "entree": "Ladyman develops ontic structural realism (OSR): there are no individual objects at the fundamental level, only structures. Physics (quantum mechanics, relativity) suggests that relations are more fundamental than relata.",
        "concepts": [
          {
            "nom": "ONTIC STRUCTURAL REALISM",
            "cat": "transcendant",
            "type": "Réalisme",
            "puissance": 82,
            "desc": "A shift: no individual objects at the base — only structures are fundamental. Quantum physics reveals that particles are not things but nodes of relations."
          },
          {
            "nom": "PRIORITY OF RELATIONS",
            "cat": "immanent",
            "type": "Philo. Sciences",
            "puissance": 78,
            "desc": "Relations are ontologically primitive — the relata (the things in relation) depend on them, not the reverse."
          },
          {
            "nom": "METAPHYSICAL NATURISM",
            "cat": "immanent",
            "type": "Réalisme",
            "puissance": 72,
            "desc": "Metaphysics must be constrained by physics — any ontology in conflict with fundamental physics is to be rejected."
          }
        ],
        "filiation": {
          "maitres": [
            "WORRALL",
            "FRENCH",
            "VAN FRAASSEN (critique)"
          ],
          "disciples": [
            "ONTIC STRUCTURAL REALISM"
          ],
          "contre": [
            "OBJECT REALISM",
            "A PRIORI METAPHYSICS",
            "ANTI-METAPHYSICAL EMPIRICISM"
          ]
        }
      }
    }
  ]
};