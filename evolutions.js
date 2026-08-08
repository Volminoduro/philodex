// ═══════════════════════════════════════════════════════════════════════════
// PHILOMON — LIGNES DE VIE
// ═══════════════════════════════════════════════════════════════════════════
// Niveau 1 = début de la vie philosophique (entrée à l'école, première œuvre,
// conversion, rencontre décisive…). 1 niveau = 1 an.
//
//   annee(niv) = debut + niv - 1        niveauMax = fin - debut + 1
//
// Champs :
//   debut   année du niveau 1 (négative = av. J.-C.)
//   fin     dernière année d'activité philosophique (mort, ou rupture :
//           Nietzsche s'arrête à l'effondrement de 1889) ; null = vivant
//   learn   niveau d'apprentissage des concepts[0..2], même ordre que
//           fr.concepts / en.concepts dans philomon.js. Des égalités sont
//           normales : deux concepts nés du même livre s'apprennent ensemble.
//   approx  true quand la chronologie est une reconstruction (Antiquité,
//           doxographie) — l'interface affiche « ≈ ».
//   stages  formes successives, par niveau croissant, la première toujours
//           à lvl 1. `types` du dernier stade = typage canonique du Philomon.
//           `img` = nom de fichier Wikimedia Commons (l'API le résout seule),
//           null = on retombe sur le portrait de base.
// ═══════════════════════════════════════════════════════════════════════════

const PHILOMON_EVO = {

"001": { debut:1618, fin:1650, learn:[24,20,32], stages:[
  { lvl:1,  types:["Rationalisme"], img:null,
    fr:{nom:"LE SOLDAT GÉOMÈTRE", note:"Beeckman lui montre que la physique peut s'écrire en mathématiques ; suivent les songes du 10 novembre 1619."},
    en:{nom:"THE SOLDIER GEOMETER", note:"Beeckman shows him physics can be written as mathematics; the dreams of 10 November 1619 follow."} },
  { lvl:20, types:["Rationalisme"], img:null,
    fr:{nom:"LE MÉTHODIQUE", note:"Le Discours de la méthode publie la règle : ne recevoir pour vrai que l'évidence."},
    en:{nom:"THE METHODICAL", note:"The Discourse on Method publishes the rule: accept nothing as true but the evident."} },
  { lvl:24, types:["Rationalisme","Idéalisme"], img:null,
    fr:{nom:"LE MÉTAPHYSICIEN", note:"Les Méditations transforment une méthode en ontologie : deux substances, l'étendue et la pensée."},
    en:{nom:"THE METAPHYSICIAN", note:"The Meditations turn a method into an ontology: two substances, extension and thought."} },
]},

"002": { debut:1729, fin:1776, learn:[11,11,12], stages:[
  { lvl:1,  types:["Empirisme"], img:null,
    fr:{nom:"LA SCÈNE NOUVELLE", note:"À dix-huit ans « une scène de pensée nouvelle » s'ouvre à lui et lui coûte la santé."},
    en:{nom:"THE NEW SCENE", note:"At eighteen \"a new scene of thought\" opens before him, and costs him his health."} },
  { lvl:20, types:["Empirisme","Scepticisme"], img:null,
    fr:{nom:"LE SCEPTIQUE MODÉRÉ", note:"Les Enquêtes reformulent le scandale en prose claire — et cette fois on l'entend."},
    en:{nom:"THE MITIGATED SCEPTIC", note:"The Enquiries restate the scandal in clear prose — and this time he is heard."} },
]},

"003": { debut:1865, fin:1889, learn:[18,22,17], stages:[
  { lvl:1,  types:["Existentialisme"], img:null,
    fr:{nom:"LE PHILOLOGUE", note:"Il trouve Schopenhauer chez un bouquiniste de Leipzig ; à vingt-quatre ans il est professeur à Bâle."},
    en:{nom:"THE PHILOLOGIST", note:"He finds Schopenhauer in a Leipzig second-hand shop; at twenty-four he holds a chair at Basel."} },
  { lvl:18, types:["Existentialisme","Nihilisme"], img:null,
    fr:{nom:"LE MEURTRIER DE DIEU", note:"Le Gai Savoir annonce la mort de Dieu et, six mois plus tard à Sils-Maria, l'éternel retour."},
    en:{nom:"THE GOD-KILLER", note:"The Gay Science announces the death of God, and six months later at Sils-Maria, eternal recurrence."} },
  { lvl:22, types:["Existentialisme","Nihilisme"], img:null,
    fr:{nom:"LE MARTEAU", note:"Par-delà bien et mal nomme enfin la volonté de puissance ; le philosophe philosophe à coups de marteau."},
    en:{nom:"THE HAMMER", note:"Beyond Good and Evil finally names the will to power; philosophy is done with a hammer."} },
]},

"004": { debut:68, fin:135, approx:true, learn:[26,30,41], stages:[
  { lvl:1,  types:["Stoïcisme"], img:null,
    fr:{nom:"L'ESCLAVE ÉCOLIER", note:"Esclave d'Épaphrodite à Rome, il est autorisé à suivre les leçons de Musonius Rufus."},
    en:{nom:"THE SLAVE SCHOLAR", note:"A slave of Epaphroditus in Rome, he is allowed to attend Musonius Rufus's lessons."} },
  { lvl:41, types:["Stoïcisme"], img:null,
    fr:{nom:"LE MANUEL", note:"Arrien note ses paroles ; l'élève transforme un cours parlé en manuel portatif."},
    en:{nom:"THE HANDBOOK", note:"Arrian takes down his words; a student turns a spoken course into a pocket manual."} },
]},

"005": { debut:-450, fin:-399, approx:true, learn:[26,26,21], stages:[
  { lvl:1,  types:["Dialectique"], img:null,
    fr:{nom:"LE TAILLEUR DE PIERRE", note:"Fils de sculpteur et de sage-femme, il fréquente Archélaos et la physique ionienne."},
    en:{nom:"THE STONECUTTER", note:"Son of a sculptor and a midwife, he studies under Archelaus and Ionian physics."} },
  { lvl:26, types:["Dialectique","Éthique des Vertus"], img:null,
    fr:{nom:"LE TAON DE LA CITÉ", note:"Il accouche les esprits sur l'agora et fait de la vertu une affaire de définition."},
    en:{nom:"GADFLY OF THE CITY", note:"He midwifes minds in the agora and makes virtue a matter of definition."} },
]},

"006": { debut:-407, fin:-347, approx:true, learn:[28,33,33], stages:[
  { lvl:1,  types:["Rationalisme"], img:null,
    fr:{nom:"LE DISCIPLE DE SOCRATE", note:"Il brûle ses tragédies après avoir entendu Socrate, qu'il suivra huit ans."},
    en:{nom:"SOCRATES' DISCIPLE", note:"He burns his tragedies after hearing Socrates, whom he follows for eight years."} },
  { lvl:21, types:["Idéalisme","Rationalisme"], img:null,
    fr:{nom:"LE FONDATEUR DE L'ACADÉMIE", note:"Revenu de Sicile, il fonde l'Académie ; les Idées deviennent plus réelles que les choses."},
    en:{nom:"FOUNDER OF THE ACADEMY", note:"Back from Sicily, he founds the Academy; the Forms become more real than things."} },
  { lvl:47, types:["Idéalisme","Rationalisme"], img:null,
    fr:{nom:"LE LÉGISLATEUR", note:"Le Parménide retourne ses propres armes contre les Idées ; restent les Lois, et l'amertume de Syracuse."},
    en:{nom:"THE LAWGIVER", note:"The Parmenides turns his own weapons against the Forms; the Laws remain, and the bitterness of Syracuse."} },
]},

"007": { debut:-367, fin:-322, approx:true, learn:[18,38,25], stages:[
  { lvl:1,  types:["Logique"], img:null,
    fr:{nom:"L'ÉLÈVE DE L'ACADÉMIE", note:"Dix-sept ans, vingt années d'Académie ; il y forge l'Organon contre son propre maître."},
    en:{nom:"THE ACADEMY STUDENT", note:"Seventeen years old, twenty years at the Academy; there he forges the Organon against his own master."} },
  { lvl:21, types:["Empirisme","Logique"], img:null,
    fr:{nom:"LE NATURALISTE DE LESBOS", note:"À Assos et Lesbos il dissèque les poissons de la lagune : la cause s'observe, elle ne se contemple pas."},
    en:{nom:"THE NATURALIST OF LESBOS", note:"At Assos and Lesbos he dissects lagoon fish: causes are observed, not contemplated."} },
  { lvl:33, types:["Empirisme","Logique","Éthique des Vertus"], img:null,
    fr:{nom:"LE MAÎTRE DU LYCÉE", note:"Le Lycée, les promenades, l'Éthique à Nicomaque : le bonheur devient une activité, pas un état."},
    en:{nom:"MASTER OF THE LYCEUM", note:"The Lyceum, the walks, the Nicomachean Ethics: happiness becomes an activity, not a state."} },
]},

"008": { debut:-327, fin:-270, approx:true, learn:[22,28,17], stages:[
  { lvl:1,  types:["Matérialisme"], img:null,
    fr:{nom:"L'ÉLÈVE DE NAUSIPHANE", note:"Il apprend l'atomisme de Démocrite par un disciple qu'il reniera ensuite avec véhémence."},
    en:{nom:"NAUSIPHANES' PUPIL", note:"He learns Democritus's atomism from a disciple he will later fiercely disown."} },
  { lvl:22, types:["Épicurisme","Matérialisme"], img:null,
    fr:{nom:"LE JARDINIER", note:"Le Jardin d'Athènes accueille femmes et esclaves ; on y vit caché, et bien."},
    en:{nom:"THE GARDENER", note:"The Garden in Athens admits women and slaves; there one lives hidden, and well."} },
]},

"009": { debut:-384, fin:-323, approx:true, learn:[21,15,30], stages:[
  { lvl:1,  types:["Cynisme"], img:null,
    fr:{nom:"L'EXILÉ DE SINOPE", note:"Banni pour avoir falsifié la monnaie, il fera de « falsifier la monnaie » son programme."},
    en:{nom:"THE EXILE OF SINOPE", note:"Banished for defacing the currency, he will make \"deface the currency\" his programme."} },
  { lvl:30, types:["Cynisme"], img:null,
    fr:{nom:"LE TONNEAU", note:"Il demande à Alexandre de s'ôter de son soleil : la nature n'a que faire des couronnes."},
    en:{nom:"THE BARREL", note:"He asks Alexander to step out of his sunlight: nature has no use for crowns."} },
]},

"010": { debut:373, fin:430, learn:[14,40,41], stages:[
  { lvl:1,  types:["Rationalisme"], img:null,
    fr:{nom:"LE RHÉTEUR MANICHÉEN", note:"L'Hortensius de Cicéron l'enflamme à dix-neuf ans ; suivront neuf années chez les manichéens."},
    en:{nom:"THE MANICHEAN RHETOR", note:"Cicero's Hortensius sets him alight at nineteen; nine years among the Manicheans follow."} },
  { lvl:14, types:["Philo. Religion","Rationalisme"], img:null,
    fr:{nom:"LE CONVERTI DE MILAN", note:"Tolle, lege — le jardin de Milan ; contre les académiciens, il oppose que se tromper suppose d'être."},
    en:{nom:"THE CONVERT OF MILAN", note:"Tolle, lege — the Milan garden; against the Academics he replies that to err presupposes being."} },
  { lvl:40, types:["Philo. Religion","Rationalisme"], img:null,
    fr:{nom:"L'ÉVÊQUE D'HIPPONE", note:"Pélage et le sac de Rome le poussent aux deux cités et à une grâce qui ne se mérite pas."},
    en:{nom:"THE BISHOP OF HIPPO", note:"Pelagius and the sack of Rome drive him to the two cities and to a grace that cannot be earned."} },
]},

"011": { debut:1245, fin:1274, learn:[21,15,27], stages:[
  { lvl:1,  types:["Logique"], img:null,
    fr:{nom:"LE BŒUF MUET", note:"Ses condisciples le surnomment ainsi ; Albert le Grand prédit que son mugissement s'entendra partout."},
    en:{nom:"THE DUMB OX", note:"His fellow students nickname him so; Albert the Great predicts his bellow will be heard everywhere."} },
  { lvl:21, types:["Philo. Religion","Logique"], img:null,
    fr:{nom:"LE DOCTEUR ANGÉLIQUE", note:"La Somme théologique aristotélise la foi ; puis, après une vision, tout lui semble paille."},
    en:{nom:"THE ANGELIC DOCTOR", note:"The Summa Theologiae makes faith Aristotelian; then, after a vision, it all seems straw to him."} },
]},

"012": { debut:1656, fin:1677, learn:[10,6,15], stages:[
  { lvl:1,  types:["Rationalisme"], img:null,
    fr:{nom:"L'EXCOMMUNIÉ", note:"Le herem d'Amsterdam le retranche de sa communauté à vingt-trois ans ; il ne le contestera jamais."},
    en:{nom:"THE EXCOMMUNICATE", note:"Amsterdam's herem cuts him from his community at twenty-three; he never contests it."} },
  { lvl:6,  types:["Panthéisme","Rationalisme"], img:null,
    fr:{nom:"LE POLISSEUR DE LENTILLES", note:"Il refuse les chaires et vit de verres optiques ; l'Éthique s'écrit more geometrico."},
    en:{nom:"THE LENS-GRINDER", note:"He refuses chairs and lives by grinding optics; the Ethics is written more geometrico."} },
  { lvl:15, types:["Panthéisme","Rationalisme"], img:null,
    fr:{nom:"L'ATHÉE VERTUEUX", note:"Le Traité théologico-politique paraît anonyme et scandalise l'Europe ; Dieu ou la Nature, au choix."},
    en:{nom:"THE VIRTUOUS ATHEIST", note:"The Theological-Political Treatise appears anonymously and scandalises Europe; God or Nature, as you please."} },
]},

"013": { debut:1652, fin:1704, learn:[20,29,39], stages:[
  { lvl:1,  types:["Empirisme"], img:null,
    fr:{nom:"L'ÉTUDIANT D'OXFORD", note:"Il s'ennuie de la scolastique et se tourne vers la médecine et Boyle."},
    en:{nom:"THE OXFORD STUDENT", note:"Bored by scholasticism, he turns to medicine and Boyle."} },
  { lvl:29, types:["Empirisme","Libéralisme"], img:null,
    fr:{nom:"L'EXILÉ DE HOLLANDE", note:"Les Traités du gouvernement civil, écrits dans la clandestinité, font du consentement la seule légitimité."},
    en:{nom:"THE DUTCH EXILE", note:"The Two Treatises, written in hiding, make consent the sole legitimacy."} },
]},

"014": { debut:1740, fin:1804, learn:[42,46,31], stages:[
  { lvl:1,  types:["Rationalisme"], img:null,
    fr:{nom:"LE PRÉ-CRITIQUE", note:"Newton, Wolff, la théorie des nébuleuses : quinze ans de précepteur avant la première chaire."},
    en:{nom:"THE PRE-CRITICAL", note:"Newton, Wolff, the nebular hypothesis: fifteen years as a tutor before his first chair."} },
  { lvl:42, types:["Rationalisme"], img:null,
    fr:{nom:"LE CRITIQUE", note:"Onze ans de silence, puis la Critique de la raison pure : c'est l'objet qui se règle sur le sujet."},
    en:{nom:"THE CRITIC", note:"Eleven years of silence, then the Critique of Pure Reason: the object conforms to the subject."} },
  { lvl:46, types:["Rationalisme","Déontologie"], img:null,
    fr:{nom:"LE LÉGISLATEUR MORAL", note:"Les Fondements tirent de la raison pratique une loi qui ne demande aucun contenu."},
    en:{nom:"THE MORAL LAWGIVER", note:"The Groundwork draws from practical reason a law requiring no content."} },
]},

"015": { debut:1749, fin:1778, learn:[14,14,7], stages:[
  { lvl:1,  types:["Contractualisme"], img:null,
    fr:{nom:"L'ILLUMINÉ DE VINCENNES", note:"Sur la route de la prison de Diderot, une question d'académie lui révèle tout son système."},
    en:{nom:"THE VINCENNES ILLUMINATION", note:"On the road to Diderot's prison, an academy prize question reveals his whole system to him."} },
  { lvl:14, types:["Contractualisme","Républicanisme"], img:null,
    fr:{nom:"LE CITOYEN DE GENÈVE", note:"Le Contrat social invente une volonté qui n'est pas la somme des volontés ; les deux livres sont brûlés."},
    en:{nom:"CITIZEN OF GENEVA", note:"The Social Contract invents a will that is not the sum of wills; both books are burned."} },
]},

"016": { debut:1788, fin:1831, learn:[20,30,20], stages:[
  { lvl:1,  types:["Idéalisme"], img:null,
    fr:{nom:"LE SÉMINARISTE DE TÜBINGEN", note:"Il partage sa chambre avec Hölderlin et Schelling, et plante un arbre de la liberté."},
    en:{nom:"THE TÜBINGEN SEMINARIAN", note:"He shares a room with Hölderlin and Schelling, and plants a liberty tree."} },
  { lvl:20, types:["Idéalisme","Dialectique"], img:null,
    fr:{nom:"LE PHÉNOMÉNOLOGUE", note:"Il achève la Phénoménologie la nuit où Napoléon entre dans Iéna — l'esprit du monde à cheval."},
    en:{nom:"THE PHENOMENOLOGIST", note:"He finishes the Phenomenology the night Napoleon enters Jena — the world-spirit on horseback."} },
  { lvl:31, types:["Idéalisme","Dialectique"], img:null,
    fr:{nom:"LE PHILOSOPHE D'ÉTAT", note:"La chaire de Berlin ; l'Encyclopédie referme le cercle sur l'esprit absolu."},
    en:{nom:"THE STATE PHILOSOPHER", note:"The Berlin chair; the Encyclopaedia closes the circle on absolute spirit."} },
]},

"017": { debut:1836, fin:1883, learn:[11,32,10], stages:[
  { lvl:1,  types:["Dialectique"], img:null,
    fr:{nom:"LE JEUNE HÉGÉLIEN", note:"Berlin, le Club des docteurs, une thèse sur Démocrite et Épicure — et aucune chaire en vue."},
    en:{nom:"THE YOUNG HEGELIAN", note:"Berlin, the Doctors' Club, a thesis on Democritus and Epicurus — and no chair in sight."} },
  { lvl:10, types:["Dialectique","Matérialisme"], img:null,
    fr:{nom:"LE MATÉRIALISTE", note:"Les Thèses sur Feuerbach : il ne s'agit plus d'interpréter le monde. L'histoire descend sur ses pieds."},
    en:{nom:"THE MATERIALIST", note:"The Theses on Feuerbach: interpreting the world is no longer the point. History lands on its feet."} },
  { lvl:32, types:["Marxisme","Dialectique","Matérialisme"], img:null,
    fr:{nom:"L'ÉCONOMISTE DE LONDRES", note:"Vingt ans au British Museum ; le Capital nomme le vol légal qui s'appelle plus-value."},
    en:{nom:"THE LONDON ECONOMIST", note:"Twenty years in the British Museum; Capital names the legal theft called surplus value."} },
]},

"018": { debut:1884, fin:1938, learn:[17,30,53], stages:[
  { lvl:1,  types:["Rationalisme"], img:null,
    fr:{nom:"L'ÉLÈVE DE BRENTANO", note:"Docteur en mathématiques, il quitte Weierstrass pour les cours de Brentano à Vienne."},
    en:{nom:"BRENTANO'S PUPIL", note:"A doctor of mathematics, he leaves Weierstrass for Brentano's Vienna lectures."} },
  { lvl:17, types:["Phénoménologie","Rationalisme"], img:"Bust of Edmund Husserl.jpg",
    fr:{nom:"L'ANTI-PSYCHOLOGISTE", note:"Les Recherches logiques : la logique n'est pas de la psychologie, et toute conscience vise un objet."},
    en:{nom:"THE ANTI-PSYCHOLOGIST", note:"The Logical Investigations: logic is not psychology, and all consciousness aims at an object."} },
  { lvl:30, types:["Phénoménologie","Rationalisme"], img:"Edmund Husserl c. 1930.webp",
    fr:{nom:"LE TRANSCENDANTAL", note:"Ideen met le monde entre parenthèses ; trente ans plus tard, la Krisis lui rend le monde vécu."},
    en:{nom:"THE TRANSCENDENTAL", note:"Ideen brackets the world; thirty years later the Krisis restores the lifeworld to him."} },
]},

"019": { debut:1909, fin:1976, learn:[19,19,39], stages:[
  { lvl:1,  types:["Phénoménologie"], img:null,
    fr:{nom:"LE SÉMINARISTE DE MESSKIRCH", note:"Entré au séminaire jésuite, il en sort pour Brentano, Duns Scot et l'assistanat de Husserl."},
    en:{nom:"THE MESSKIRCH SEMINARIAN", note:"He enters a Jesuit seminary and leaves it for Brentano, Duns Scotus and Husserl's assistantship."} },
  { lvl:19, types:["Existentialisme","Phénoménologie"], img:null,
    fr:{nom:"L'ANALYTIQUE DU DASEIN", note:"Être et Temps, publié dans l'urgence d'une nomination : l'être-là est jeté, et il est mortel."},
    en:{nom:"THE ANALYTIC OF DASEIN", note:"Being and Time, rushed out for an appointment: being-there is thrown, and it is mortal."} },
  { lvl:38, types:["Existentialisme","Phénoménologie"], img:null,
    fr:{nom:"LE BERGER DE L'ÊTRE", note:"Après le rectorat et l'interdiction d'enseigner, le tournant : ce n'est plus l'homme qui interroge l'être."},
    en:{nom:"THE SHEPHERD OF BEING", note:"After the rectorship and the teaching ban, the turn: it is no longer man who questions being."} },
]},

"020": { debut:1924, fin:1980, learn:[23,20,22], stages:[
  { lvl:1,  types:["Existentialisme"], img:null,
    fr:{nom:"LE NORMALIEN", note:"Rue d'Ulm, l'agrégation ratée puis reçue premier ; Berlin lui apporte Husserl et un cocktail à l'abricot."},
    en:{nom:"THE NORMALIEN", note:"Rue d'Ulm, the agrégation failed then passed first; Berlin brings him Husserl and an apricot cocktail."} },
  { lvl:20, types:["Existentialisme"], img:null,
    fr:{nom:"L'ONTOLOGUE DU NÉANT", note:"L'Être et le Néant paraît sous l'Occupation : la conscience est ce trou dans l'être qui se ment à lui-même."},
    en:{nom:"THE ONTOLOGIST OF NOTHINGNESS", note:"Being and Nothingness appears under the Occupation: consciousness is the hole in being that lies to itself."} },
  { lvl:22, types:["Existentialisme"], img:null,
    fr:{nom:"L'INTELLECTUEL ENGAGÉ", note:"Les Temps modernes, le refus du Nobel, les tonneaux de Billancourt : la liberté oblige."},
    en:{nom:"THE COMMITTED INTELLECTUAL", note:"Les Temps modernes, the refused Nobel, the barrels of Billancourt: freedom obliges."} },
]},

"021": { debut:1927, fin:1986, learn:[23,23,21], stages:[
  { lvl:1,  types:["Existentialisme"], img:"Simone de Beauvoir 1955.jpg",
    fr:{nom:"LE CASTOR", note:"Deuxième à l'agrégation derrière Sartre, la plus jeune agrégée de France."},
    en:{nom:"THE BEAVER", note:"Second in the agrégation behind Sartre, the youngest ever to pass it in France."} },
  { lvl:21, types:["Existentialisme"], img:"Simone De Beauvoir (cropped).jpg",
    fr:{nom:"LA MORALISTE DE L'AMBIGUÏTÉ", note:"Pour une morale de l'ambiguïté tire enfin une éthique de la liberté sans fondement."},
    en:{nom:"MORALIST OF AMBIGUITY", note:"The Ethics of Ambiguity at last draws an ethics from groundless freedom."} },
  { lvl:23, types:["Féminisme","Existentialisme"], img:null,
    fr:{nom:"L'AUTEURE DU DEUXIÈME SEXE", note:"Elle voulait écrire sur elle-même et découvre qu'il faut d'abord dire ce que c'est qu'être une femme."},
    en:{nom:"AUTHOR OF THE SECOND SEX", note:"She meant to write about herself and found she must first say what being a woman is."} },
]},

"022": { debut:1932, fin:1960, learn:[11,20,11], stages:[
  { lvl:1,  types:["Existentialisme"], img:null,
    fr:{nom:"L'ÉTUDIANT D'ALGER", note:"La tuberculose lui ferme l'agrégation ; restent Plotin, le football et la lumière de Tipasa."},
    en:{nom:"THE ALGIERS STUDENT", note:"Tuberculosis closes the agrégation to him; Plotinus, football and the light of Tipasa remain."} },
  { lvl:11, types:["Existentialisme","Nihilisme"], img:null,
    fr:{nom:"L'HOMME ABSURDE", note:"Le Mythe de Sisyphe pose la seule question sérieuse et refuse aussi bien le suicide que Dieu."},
    en:{nom:"THE ABSURD MAN", note:"The Myth of Sisyphus poses the only serious question and refuses both suicide and God."} },
  { lvl:20, types:["Existentialisme","Nihilisme"], img:null,
    fr:{nom:"L'HOMME RÉVOLTÉ", note:"Je me révolte, donc nous sommes — et la rupture avec Sartre s'ensuit."},
    en:{nom:"THE REBEL", note:"I rebel, therefore we are — and the break with Sartre follows."} },
]},

"023": { debut:1911, fin:1951, learn:[11,23,11], stages:[
  { lvl:1,  types:["Logique"], img:null,
    fr:{nom:"L'INGÉNIEUR AÉRONAUTE", note:"Il abandonne les hélices de Manchester pour frapper à la porte de Russell."},
    en:{nom:"THE AERONAUTICAL ENGINEER", note:"He abandons Manchester's propellers to knock on Russell's door."} },
  { lvl:11, types:["Logique"], img:null,
    fr:{nom:"WITTGENSTEIN I · LE TRACTATUS", note:"Écrit dans les tranchées et la captivité : la proposition est une image, et le reste doit se taire."},
    en:{nom:"WITTGENSTEIN I · THE TRACTATUS", note:"Written in the trenches and in captivity: the proposition is a picture, and the rest must keep silent."} },
  { lvl:23, types:["Philo. Langage","Logique"], img:null,
    fr:{nom:"WITTGENSTEIN II · LES JEUX", note:"Revenu à Cambridge après l'école primaire et l'architecture, il démolit son propre livre : le sens est un usage."},
    en:{nom:"WITTGENSTEIN II · THE GAMES", note:"Back at Cambridge after schoolteaching and architecture, he demolishes his own book: meaning is use."} },
]},

"024": { debut:1943, fin:2002, learn:[29,29,16], stages:[
  { lvl:1,  types:["Libéralisme"], img:"John Rawls (1937 senior portrait).jpg",
    fr:{nom:"LE FANTASSIN DU PACIFIQUE", note:"Une thèse de théologie abandonnée, puis la Nouvelle-Guinée et Hiroshima vue de près."},
    en:{nom:"THE PACIFIC INFANTRYMAN", note:"An abandoned theology thesis, then New Guinea and Hiroshima seen up close."} },
  { lvl:16, types:["Contractualisme","Libéralisme"], img:"John Rawls (1971 photo portrait).jpg",
    fr:{nom:"LA JUSTICE COMME ÉQUITÉ", note:"Un article de 1958 pose déjà le dispositif : choisir les principes sans savoir qui l'on sera."},
    en:{nom:"JUSTICE AS FAIRNESS", note:"A 1958 paper already sets the device: choose principles without knowing who you will be."} },
  { lvl:29, types:["Contractualisme","Libéralisme"], img:null,
    fr:{nom:"LE THÉORICIEN DE LA JUSTICE", note:"Vingt ans de réécriture ; la Théorie de la justice remet la philosophie politique au travail."},
    en:{nom:"THE THEORIST OF JUSTICE", note:"Twenty years of rewriting; A Theory of Justice puts political philosophy back to work."} },
]},

"025": { debut:-604, fin:-546, approx:true, learn:[30,40,20], stages:[
  { lvl:1,  types:["Matérialisme"], img:null,
    fr:{nom:"LE MARCHAND DE MILET", note:"Le commerce le mène en Égypte, d'où il rapporte la géométrie et la mesure des pyramides."},
    en:{nom:"THE MERCHANT OF MILETUS", note:"Trade takes him to Egypt, whence he brings back geometry and the measuring of pyramids."} },
  { lvl:30, types:["Matérialisme"], img:null,
    fr:{nom:"LE PREMIER PHYSICIEN", note:"Tout vient de l'eau, et l'aimant a une âme — première explication du monde sans les dieux."},
    en:{nom:"THE FIRST PHYSICIST", note:"All comes from water, and the lodestone has a soul — the first account of the world without gods."} },
]},

"026": { debut:-590, fin:-546, approx:true, learn:[16,26,36], stages:[
  { lvl:1,  types:["Matérialisme"], img:null,
    fr:{nom:"L'ÉLÈVE DE THALÈS", note:"Il hérite de l'école de Milet et refuse d'emblée que le principe soit une chose connue."},
    en:{nom:"THALES' PUPIL", note:"He inherits the Milesian school and refuses from the start that the principle be a known thing."} },
  { lvl:36, types:["Matérialisme"], img:null,
    fr:{nom:"LE PENSEUR DE L'ILLIMITÉ", note:"L'apeiron, et cette phrase inouïe : les choses se rendent justice selon l'ordre du temps."},
    en:{nom:"THINKER OF THE BOUNDLESS", note:"The apeiron, and that astonishing line: things render justice to one another by the order of time."} },
]},

"027": { debut:-565, fin:-528, approx:true, learn:[11,21,31], stages:[
  { lvl:1, types:["Matérialisme"], img:null,
    fr:{nom:"LA CONDENSATION", note:"Une seule matière, deux processus : raréfier fait le feu, condenser fait la pierre. Le qualitatif devient quantitatif."},
    en:{nom:"CONDENSATION", note:"One matter, two processes: rarefaction makes fire, condensation makes stone. Quality becomes quantity."} },
]},

"028": { debut:-550, fin:-497, approx:true, learn:[21,26,31], stages:[
  { lvl:1,  types:["Rationalisme"], img:null,
    fr:{nom:"LE VOYAGEUR D'ÉGYPTE", note:"Samos, l'Égypte, peut-être Babylone : il rapporte des mathématiques et des interdits alimentaires."},
    en:{nom:"THE TRAVELLER TO EGYPT", note:"Samos, Egypt, perhaps Babylon: he brings back mathematics and dietary prohibitions."} },
  { lvl:31, types:["Rationalisme","Mysticisme"], img:null,
    fr:{nom:"LE MAÎTRE DE LA SECTE", note:"L'âme transmigre, les sphères sonnent — la mathématique et le salut ne font plus qu'un."},
    en:{nom:"MASTER OF THE SECT", note:"The soul transmigrates, the spheres sound — mathematics and salvation become one."} },
]},

"029": { debut:-550, fin:-475, approx:true, learn:[21,31,51], stages:[
  { lvl:1,  types:["Philo. Religion"], img:null,
    fr:{nom:"LE RHAPSODE EXILÉ", note:"Chassé de Colophon par les Mèdes, il récite ses propres vers sur les routes pendant soixante-sept ans."},
    en:{nom:"THE EXILED RHAPSODE", note:"Driven from Colophon by the Medes, he recites his own verses on the roads for sixty-seven years."} },
  { lvl:51, types:["Philo. Religion","Scepticisme"], img:null,
    fr:{nom:"LE VIEUX SCEPTIQUE", note:"Nul n'a vu le vrai ni ne le verra ; sur toutes choses règne l'opinion."},
    en:{nom:"THE OLD SCEPTIC", note:"No man has seen the truth nor will see it; over all things, seeming holds sway."} },
]},

"030": { debut:-515, fin:-475, approx:true, learn:[16,21,26], stages:[
  { lvl:1,  types:["Matérialisme"], img:null,
    fr:{nom:"L'HÉRITIER D'ÉPHÈSE", note:"Il cède à son frère la charge royale héritée et se retire jouer aux osselets près du temple."},
    en:{nom:"THE HEIR OF EPHESUS", note:"He hands his inherited royal office to his brother and withdraws to play dice by the temple."} },
  { lvl:26, types:["Dialectique","Matérialisme"], img:null,
    fr:{nom:"LE FEU TOUJOURS VIVANT", note:"On ne se baigne pas deux fois dans le même fleuve ; la guerre est le père de toutes choses."},
    en:{nom:"THE EVER-LIVING FIRE", note:"You cannot step twice into the same river; war is the father of all things."} },
]},

"031": { debut:-495, fin:-460, approx:true, learn:[16,16,21], stages:[
  { lvl:1,  types:["Rationalisme"], img:null,
    fr:{nom:"LE LÉGISLATEUR D'ÉLÉE", note:"On dit qu'il donna des lois à sa cité avant de donner des lois à la pensée."},
    en:{nom:"THE LAWGIVER OF ELEA", note:"He is said to have given laws to his city before giving laws to thought."} },
  { lvl:31, types:["Rationalisme","Idéalisme"], img:null,
    fr:{nom:"LE VIEILLARD D'ATHÈNES", note:"Vénérable et redoutable, il croise à Athènes un très jeune Socrate qu'il met en difficulté."},
    en:{nom:"THE OLD MAN OF ATHENS", note:"Venerable and formidable, in Athens he meets a very young Socrates and corners him."} },
]},

"032": { debut:-470, fin:-430, approx:true, learn:[11,16,26], stages:[
  { lvl:1,  types:["Matérialisme"], img:null,
    fr:{nom:"L'ARISTOCRATE D'AGRIGENTE", note:"Riche, démocrate, médecin et thaumaturge : il refuse la royauté qu'on lui offre."},
    en:{nom:"THE ARISTOCRAT OF ACRAGAS", note:"Rich, democrat, physician and wonder-worker: he refuses the kingship offered him."} },
  { lvl:26, types:["Matérialisme","Mysticisme"], img:null,
    fr:{nom:"LE DIEU DE L'ETNA", note:"Les Purifications le disent dieu exilé parmi les mortels ; la légende le jette dans le volcan."},
    en:{nom:"THE GOD OF ETNA", note:"The Purifications call him a god exiled among mortals; legend throws him into the volcano."} },
]},

"033": { debut:-470, fin:-420, approx:true, learn:[21,11,31], stages:[
  { lvl:1,  types:["Rhétorique"], img:null,
    fr:{nom:"LE PORTEFAIX D'ABDÈRE", note:"Démocrite l'aurait remarqué à la façon savante dont il ficelait son fardeau."},
    en:{nom:"THE PORTER OF ABDERA", note:"Democritus is said to have noticed the ingenious way he bundled his load."} },
  { lvl:31, types:["Scepticisme","Rhétorique"], img:null,
    fr:{nom:"LE LÉGISLATEUR DE THOURIOI", note:"Périclès lui confie les lois d'une colonie ; ses livres sur les dieux finiront brûlés."},
    en:{nom:"THE LAWGIVER OF THURII", note:"Pericles entrusts him with a colony's laws; his books on the gods end up burned."} },
]},

"034": { debut:-440, fin:-370, approx:true, learn:[21,31,51], stages:[
  { lvl:1,  types:["Matérialisme"], img:null,
    fr:{nom:"L'HÉRITIER DISSIPÉ", note:"Il dépense tout son héritage en voyages — Égypte, Perse, peut-être l'Inde — et rentre sans un sou."},
    en:{nom:"THE SQUANDERED INHERITANCE", note:"He spends his whole inheritance travelling — Egypt, Persia, perhaps India — and returns penniless."} },
  { lvl:51, types:["Matérialisme"], img:null,
    fr:{nom:"LE PHILOSOPHE QUI RIT", note:"La sérénité gaie comme but ; Platon aurait voulu brûler ses livres, et n'y parvint pas."},
    en:{nom:"THE LAUGHING PHILOSOPHER", note:"Cheerful serenity as the goal; Plato reportedly wished to burn his books, and failed."} },
]},

"035": { debut:-470, fin:-430, approx:true, learn:[16,16,21], stages:[
  { lvl:1,  types:["Rationalisme"], img:null,
    fr:{nom:"L'ÉLÈVE DE PARMÉNIDE", note:"Fils adoptif et défenseur du maître ; il n'écrira que pour le protéger."},
    en:{nom:"PARMENIDES' PUPIL", note:"Adopted son and defender of his master; he writes only to shield him."} },
  { lvl:31, types:["Logique","Rationalisme"], img:null,
    fr:{nom:"LE CONSPIRATEUR", note:"Pris dans un complot contre un tyran, il se serait tranché la langue pour ne pas parler."},
    en:{nom:"THE CONSPIRATOR", note:"Caught plotting against a tyrant, he is said to have bitten off his tongue rather than speak."} },
]},

"036": { debut:-415, fin:-356, approx:true, learn:[21,26,36], stages:[
  { lvl:1,  types:["Hédonisme"], img:null,
    fr:{nom:"LE CYRÉNÉEN À ATHÈNES", note:"Attiré de Cyrène par la réputation de Socrate, il sera le premier de ses élèves à se faire payer."},
    en:{nom:"THE CYRENEAN IN ATHENS", note:"Drawn from Cyrene by Socrates' fame, he becomes the first of his pupils to charge a fee."} },
  { lvl:36, types:["Hédonisme"], img:null,
    fr:{nom:"LE MAÎTRE DU PLAISIR", note:"Je possède, je ne suis pas possédé : le plaisir du moment, mais sans en devenir l'esclave."},
    en:{nom:"MASTER OF PLEASURE", note:"I possess, I am not possessed: the pleasure of the moment, without becoming its slave."} },
]},

"037": { debut:-370, fin:-330, approx:true, learn:[11,16,21], stages:[
  { lvl:1, types:["Logique"], img:null,
    fr:{nom:"LE FAISEUR D'ÉNIGMES", note:"Sept paradoxes qui n'ont pas vieilli d'un jour en vingt-quatre siècles."},
    en:{nom:"THE RIDDLE-MAKER", note:"Seven paradoxes that have not aged a day in twenty-four centuries."} },
]},

"038": { debut:-340, fin:-270, approx:true, learn:[21,26,36], stages:[
  { lvl:1,  types:["Scepticisme"], img:null,
    fr:{nom:"LE PEINTRE D'ÉLIS", note:"Il peignait des porte-flambeaux, sans génie, avant de suivre Anaxarque."},
    en:{nom:"THE PAINTER OF ELIS", note:"He painted torch-bearers, without genius, before following Anaxarchus."} },
  { lvl:21, types:["Scepticisme"], img:null,
    fr:{nom:"LE SUSPENSIF", note:"Rien n'est plus ceci que cela : suspendre le jugement, et la paix vient d'elle-même, comme l'ombre."},
    en:{nom:"THE SUSPENDER", note:"Nothing is this rather than that: suspend judgement, and peace follows of itself, like a shadow."} },
]},

"039": { debut:-312, fin:-262, approx:true, learn:[16,21,26], stages:[
  { lvl:1,  types:["Stoïcisme"], img:null,
    fr:{nom:"LE NAUFRAGÉ", note:"Il perd sa cargaison de pourpre près du Pirée et déclare avoir fait là son plus beau voyage."},
    en:{nom:"THE SHIPWRECKED", note:"He loses his cargo of purple off Piraeus and declares it his most prosperous voyage."} },
  { lvl:26, types:["Stoïcisme"], img:null,
    fr:{nom:"VIVRE SELON LA NATURE", note:"Une seule raison traverse le cosmos ; s'y accorder est le seul bien, le reste est indifférent."},
    en:{nom:"LIVE ACCORDING TO NATURE", note:"One reason runs through the cosmos; to accord with it is the only good, the rest indifferent."} },
]},

"040": { debut:-300, fin:-230, approx:true, learn:[21,21,31], stages:[
  { lvl:1, types:["Scepticisme"], img:null,
    fr:{nom:"LE SATIRISTE DES SILLES", note:"Il met tous les dogmatiques en vers moqueurs — seul Pyrrhon échappe à la charge."},
    en:{nom:"THE SATIRIST OF THE SILLOI", note:"He sets every dogmatist to mocking verse — only Pyrrho escapes the charge."} },
]},

"041": { debut:133, fin:180, learn:[38,41,29], stages:[
  { lvl:1,  types:["Stoïcisme"], img:null,
    fr:{nom:"L'ENFANT AU MANTEAU", note:"À douze ans il prend le manteau râpé du philosophe et dort à même le sol, jusqu'à ce que sa mère cède."},
    en:{nom:"THE BOY IN THE CLOAK", note:"At twelve he takes the philosopher's rough cloak and sleeps on the ground, until his mother relents."} },
  { lvl:38, types:["Stoïcisme"], img:null,
    fr:{nom:"LES PENSÉES DU CAMP", note:"Sous la tente, en grec, pour lui seul : un empereur s'exhorte à ne pas devenir césarien."},
    en:{nom:"MEDITATIONS FROM CAMP", note:"Under canvas, in Greek, for himself alone: an emperor urging himself not to be Caesarified."} },
]},

"042": { debut:232, fin:270, learn:[22,22,32], stages:[
  { lvl:1,  types:["Idéalisme"], img:null,
    fr:{nom:"L'ÉLÈVE D'AMMONIOS", note:"À vingt-huit ans il trouve enfin à Alexandrie le maître qu'il cherchait, et reste onze ans."},
    en:{nom:"AMMONIUS'S PUPIL", note:"At twenty-eight he finally finds in Alexandria the master he sought, and stays eleven years."} },
  { lvl:13, types:["Idéalisme","Mysticisme"], img:null,
    fr:{nom:"LE MAÎTRE DE ROME", note:"Il ouvre une école à Rome et refuse qu'on peigne son portrait : pourquoi copier une copie ?"},
    en:{nom:"MASTER OF ROME", note:"He opens a school in Rome and refuses to sit for a portrait: why copy a copy?"} },
  { lvl:22, types:["Idéalisme","Mysticisme"], img:null,
    fr:{nom:"LES ENNÉADES", note:"L'Un déborde sans se diviser ; quatre fois dans sa vie, dit Porphyre, il l'a rejoint."},
    en:{nom:"THE ENNEADS", note:"The One overflows without dividing; four times in his life, says Porphyry, he reached it."} },
]},

"043": { debut:840, fin:877, approx:true, learn:[23,23,12], stages:[
  { lvl:1,  types:["Philo. Religion"], img:null,
    fr:{nom:"LE SCOT À LA COUR", note:"Venu d'Irlande, il est l'un des rares Occidentaux de son siècle à lire le grec."},
    en:{nom:"THE SCOT AT COURT", note:"Come from Ireland, he is among the few Westerners of his century who read Greek."} },
  { lvl:23, types:["Philo. Religion","Idéalisme"], img:null,
    fr:{nom:"LA DIVISION DE LA NATURE", note:"Le Periphyseon range Dieu et le monde dans une même division — l'Église le condamnera trois siècles durant."},
    en:{nom:"THE DIVISION OF NATURE", note:"The Periphyseon puts God and world in one division — the Church will condemn it for three centuries."} },
]},

"044": { debut:1059, fin:1109, learn:[20,40,18], stages:[
  { lvl:1,  types:["Philo. Religion"], img:null,
    fr:{nom:"LE MOINE DU BEC", note:"Il quitte l'Italie pour suivre Lanfranc en Normandie, et y prend l'habit à vingt-sept ans."},
    en:{nom:"THE MONK OF BEC", note:"He leaves Italy to follow Lanfranc into Normandy, and takes the habit at twenty-seven."} },
  { lvl:35, types:["Philo. Religion","Rationalisme"], img:null,
    fr:{nom:"L'ARCHEVÊQUE EN EXIL", note:"Deux fois exilé par ses rois ; le Cur Deus Homo s'écrit loin de Cantorbéry."},
    en:{nom:"THE EXILED ARCHBISHOP", note:"Twice exiled by his kings; Cur Deus Homo is written far from Canterbury."} },
]},

"045": { debut:1309, fin:1347, learn:[11,11,20], stages:[
  { lvl:1,  types:["Logique"], img:null,
    fr:{nom:"LE BACHELIER D'OXFORD", note:"Franciscain, il commente les Sentences sans jamais obtenir la maîtrise — d'où son surnom d'Inceptor."},
    en:{nom:"THE OXFORD BACHELOR", note:"A Franciscan, he lectures on the Sentences without ever taking the mastership — hence Inceptor."} },
  { lvl:20, types:["Logique","Scepticisme"], img:null,
    fr:{nom:"LE FRANCISCAIN EN FUITE", note:"Convoqué à Avignon, il fuit chez l'empereur : protège-moi par l'épée, je te protégerai par la plume."},
    en:{nom:"THE FUGITIVE FRIAR", note:"Summoned to Avignon, he flees to the Emperor: defend me with the sword, I will defend you with the pen."} },
]},

"046": { debut:1498, fin:1527, learn:[16,5,16], stages:[
  { lvl:1,  types:["Philo. Politique"], img:null,
    fr:{nom:"LE SECRÉTAIRE FLORENTIN", note:"La chute de Savonarole lui ouvre la seconde chancellerie ; il a vingt-neuf ans et aucune fortune."},
    en:{nom:"THE FLORENTINE SECRETARY", note:"Savonarola's fall opens the second chancery to him; he is twenty-nine and without means."} },
  { lvl:5,  types:["Philo. Politique","Réalisme"], img:null,
    fr:{nom:"L'ENVOYÉ AUPRÈS DE BORGIA", note:"Il regarde César Borgia liquider ses condottieres à Senigallia et prend des notes."},
    en:{nom:"ENVOY TO BORGIA", note:"He watches Cesare Borgia liquidate his condottieri at Senigallia, and takes notes."} },
  { lvl:16, types:["Philo. Politique","Réalisme"], img:null,
    fr:{nom:"L'EXILÉ DE SANT'ANDREA", note:"Destitué, torturé, relégué : le soir il met ses habits de cour pour écrire Le Prince."},
    en:{nom:"THE EXILE OF SANT'ANDREA", note:"Dismissed, tortured, banished: in the evening he dons court dress to write The Prince."} },
]},

"047": { debut:1579, fin:1626, learn:[42,42,27], stages:[
  { lvl:1,  types:["Empirisme"], img:null,
    fr:{nom:"L'AVOCAT AMBITIEUX", note:"Son père meurt sans l'avoir doté ; il lui faudra la cour, le droit et trente ans de patience."},
    en:{nom:"THE AMBITIOUS LAWYER", note:"His father dies without providing for him; it will take the court, the law and thirty years of patience."} },
  { lvl:42, types:["Empirisme","Philo. Sciences"], img:null,
    fr:{nom:"LE NOVUM ORGANUM", note:"Un nouvel outil contre celui d'Aristote : d'abord chasser les idoles, ensuite induire pas à pas."},
    en:{nom:"THE NOVUM ORGANUM", note:"A new instrument against Aristotle's: first drive out the idols, then induce step by step."} },
]},

"048": { debut:1608, fin:1679, learn:[33,44,48], stages:[
  { lvl:1,  types:["Matérialisme"], img:null,
    fr:{nom:"LE PRÉCEPTEUR", note:"Attaché aux Cavendish toute sa vie, il voyage, traduit Thucydide et rencontre Galilée."},
    en:{nom:"THE TUTOR", note:"Attached to the Cavendishes all his life, he travels, translates Thucydides and meets Galileo."} },
  { lvl:22, types:["Matérialisme"], img:null,
    fr:{nom:"LE GÉOMÈTRE TARDIF", note:"À quarante ans il ouvre Euclide par hasard, jure que c'est impossible, vérifie, et tombe amoureux de la géométrie."},
    en:{nom:"THE LATE GEOMETER", note:"At forty he opens Euclid by chance, swears it impossible, checks, and falls in love with geometry."} },
  { lvl:33, types:["Contractualisme","Matérialisme"], img:null,
    fr:{nom:"L'EXILÉ DE PARIS", note:"Onze ans de fuite devant la guerre civile ; le Léviathan naît de la peur, comme l'État lui-même."},
    en:{nom:"THE PARIS EXILE", note:"Eleven years fleeing civil war; Leviathan is born of fear, as the state itself is."} },
]},

"049": { debut:1639, fin:1662, learn:[19,19,21], stages:[
  { lvl:1,  types:["Scepticisme"], img:null,
    fr:{nom:"LE GÉOMÈTRE PRÉCOCE", note:"À seize ans un théorème sur les coniques ; à dix-neuf, une machine à calculer pour son père."},
    en:{nom:"THE PRECOCIOUS GEOMETER", note:"At sixteen a theorem on conics; at nineteen a calculating machine for his father."} },
  { lvl:16, types:["Philo. Religion","Scepticisme"], img:null,
    fr:{nom:"LA NUIT DE FEU", note:"23 novembre 1654, deux heures : « Feu. Dieu d'Abraham... » — le mémorial cousu dans son pourpoint."},
    en:{nom:"THE NIGHT OF FIRE", note:"23 November 1654, two hours: \"Fire. God of Abraham...\" — the memorial sewn into his doublet."} },
  { lvl:19, types:["Philo. Religion","Scepticisme"], img:null,
    fr:{nom:"L'APOLOGISTE DES PENSÉES", note:"L'apologie restera en liasses ; le cœur a ses raisons, et le pari s'adresse à qui n'en a pas."},
    en:{nom:"APOLOGIST OF THE PENSÉES", note:"The apology stays in bundles; the heart has its reasons, and the wager addresses those who have none."} },
]},

"050": { debut:1650, fin:1679, learn:[28,28,24], stages:[
  { lvl:1,  types:["Idéalisme"], img:null,
    fr:{nom:"L'ÉLÈVE DE HENRY MORE", note:"Écartée de l'université, elle apprend le platonisme de Cambridge par correspondance, à dix-neuf ans."},
    en:{nom:"HENRY MORE'S PUPIL", note:"Barred from university, she learns Cambridge Platonism by correspondence, at nineteen."} },
  { lvl:28, types:["Idéalisme","Philo. Esprit"], img:null,
    fr:{nom:"LES PRINCIPES", note:"Un carnet retrouvé après sa mort : une seule substance vivante, graduée — Leibniz y prendra le mot monade."},
    en:{nom:"THE PRINCIPLES", note:"A notebook found after her death: one living substance, graded — Leibniz will take the word monad from it."} },
]},

"051": { debut:1661, fin:1716, learn:[54,35,26], stages:[
  { lvl:1,  types:["Rationalisme"], img:null,
    fr:{nom:"L'AUTODIDACTE DE LEIPZIG", note:"À quinze ans il a lu toute la bibliothèque de son père ; à vingt, on lui refuse le doctorat pour jeunesse."},
    en:{nom:"THE LEIPZIG AUTODIDACT", note:"At fifteen he has read his father's whole library; at twenty he is denied a doctorate for youth."} },
  { lvl:12, types:["Rationalisme"], img:null,
    fr:{nom:"LE DIPLOMATE DE PARIS", note:"Envoyé détourner Louis XIV vers l'Égypte, il y invente le calcul différentiel."},
    en:{nom:"THE PARIS DIPLOMAT", note:"Sent to divert Louis XIV towards Egypt, he invents the differential calculus instead."} },
  { lvl:26, types:["Rationalisme","Idéalisme"], img:null,
    fr:{nom:"LE BIBLIOTHÉCAIRE DE HANOVRE", note:"Généalogiste d'une maison princière quarante ans durant ; entre deux archives, les monades."},
    en:{nom:"THE HANOVER LIBRARIAN", note:"Genealogist to a princely house for forty years; between two archives, the monads."} },
]},

"052": { debut:1700, fin:1753, learn:[11,11,14], stages:[
  { lvl:1,  types:["Idéalisme"], img:null,
    fr:{nom:"L'ÉTUDIANT DE TRINITY", note:"Dublin lui donne Locke et Newton d'un coup ; il décide que le premier réfute le second."},
    en:{nom:"THE TRINITY STUDENT", note:"Dublin gives him Locke and Newton at once; he decides the first refutes the second."} },
  { lvl:14, types:["Idéalisme","Philo. Religion"], img:null,
    fr:{nom:"L'ÉVÊQUE DE CLOYNE", note:"Si l'arbre subsiste quand nul ne le voit, c'est qu'un regard ne se ferme jamais."},
    en:{nom:"THE BISHOP OF CLOYNE", note:"If the tree persists unseen, it is because one gaze never closes."} },
]},

"053": { debut:1711, fin:1746, learn:[15,15,15], stages:[
  { lvl:1,  types:["Éthique des Vertus"], img:null,
    fr:{nom:"L'ÉTUDIANT DE GLASGOW", note:"Fils de pasteur presbytérien, il y étudie la théologie avant d'ouvrir une académie à Dublin."},
    en:{nom:"THE GLASGOW STUDENT", note:"Son of a Presbyterian minister, he studies theology there before opening an academy in Dublin."} },
  { lvl:20, types:["Éthique des Vertus","Utilitarisme","Esthétique"], img:null,
    fr:{nom:"LE PROFESSEUR DE GLASGOW", note:"Premier à enseigner en anglais plutôt qu'en latin ; parmi ses élèves, un certain Adam Smith."},
    en:{nom:"THE GLASGOW PROFESSOR", note:"The first to lecture in English rather than Latin; among his students, one Adam Smith."} },
]},

"054": { debut:1726, fin:1796, learn:[39,60,39], stages:[
  { lvl:1,  types:["Empirisme"], img:null,
    fr:{nom:"LE PASTEUR D'ABERDEEN", note:"Bibliothécaire puis ministre de New Machar, il lit Hume et en reste stupéfait."},
    en:{nom:"THE ABERDEEN MINISTER", note:"Librarian then minister of New Machar, he reads Hume and is left stunned."} },
  { lvl:60, types:["Réalisme","Empirisme"], img:null,
    fr:{nom:"LE MAÎTRE DU SENS COMMUN", note:"Successeur d'Adam Smith à Glasgow ; certaines croyances ne se prouvent pas, elles se supposent."},
    en:{nom:"MASTER OF COMMON SENSE", note:"Adam Smith's successor at Glasgow; some beliefs are not proved, they are presupposed."} },
]},

"055": { debut:1748, fin:1797, learn:[43,43,43], stages:[
  { lvl:1,  types:["Philo. Politique"], img:null,
    fr:{nom:"L'ESSAYISTE DU SUBLIME", note:"Un traité sur le beau et le sublime à vingt-huit ans, avant la politique et le Parlement."},
    en:{nom:"ESSAYIST OF THE SUBLIME", note:"A treatise on the beautiful and the sublime at twenty-eight, before politics and Parliament."} },
  { lvl:18, types:["Philo. Politique"], img:null,
    fr:{nom:"LE DÉPUTÉ WHIG", note:"Il défend les colons d'Amérique et poursuit Hastings pendant sept ans : la réforme, oui ; la table rase, jamais."},
    en:{nom:"THE WHIG MEMBER", note:"He defends the American colonists and prosecutes Hastings for seven years: reform, yes; the clean slate, never."} },
  { lvl:43, types:["Conservatisme","Philo. Politique"], img:null,
    fr:{nom:"LE CONTRE-RÉVOLUTIONNAIRE", note:"Les Réflexions prédisent la Terreur et un général ; ses amis whigs ne lui pardonneront pas."},
    en:{nom:"THE COUNTER-REVOLUTIONARY", note:"The Reflections foretell the Terror and a general; his Whig friends never forgive him."} },
]},

"056": { debut:1763, fin:1832, learn:[14,27,29], stages:[
  { lvl:1,  types:["Utilitarisme"], img:null,
    fr:{nom:"L'ENFANT PRODIGE", note:"Latin à trois ans, Oxford à douze ; il y prête serment aux Trente-Neuf Articles et ne s'en remettra pas."},
    en:{nom:"THE CHILD PRODIGY", note:"Latin at three, Oxford at twelve; there he swears to the Thirty-Nine Articles and never recovers."} },
  { lvl:14, types:["Utilitarisme"], img:null,
    fr:{nom:"LE CRITIQUE DE BLACKSTONE", note:"Le Fragment attaque le droit anglais au nom d'un seul critère mesurable : l'utilité."},
    en:{nom:"BLACKSTONE'S CRITIC", note:"The Fragment attacks English law in the name of one measurable criterion: utility."} },
  { lvl:27, types:["Utilitarisme"], img:null,
    fr:{nom:"LE LÉGISLATEUR UNIVERSEL", note:"Le calcul des plaisirs, puis la prison circulaire — et son corps empaillé légué à University College."},
    en:{nom:"THE UNIVERSAL LEGISLATOR", note:"The felicific calculus, then the circular prison — and his stuffed body left to University College."} },
]},

"057": { debut:1783, fin:1797, learn:[10,5,10], stages:[
  { lvl:1,  types:["Libéralisme"], img:null,
    fr:{nom:"LA MAÎTRESSE D'ÉCOLE", note:"Elle ouvre une école à Newington Green faute d'autre métier ouvert à une femme sans dot."},
    en:{nom:"THE SCHOOLMISTRESS", note:"She opens a school at Newington Green for want of any other trade open to a dowerless woman."} },
  { lvl:10, types:["Féminisme","Libéralisme"], img:null,
    fr:{nom:"LA DÉFENSE DES DROITS DE LA FEMME", note:"Si la vertu est une, l'éducation doit l'être aussi : on ne fabrique pas des épouses, on forme des êtres raisonnables."},
    en:{nom:"VINDICATION OF THE RIGHTS OF WOMAN", note:"If virtue is one, education must be too: one does not manufacture wives, one forms rational beings."} },
]},

"058": { debut:1763, fin:1805, learn:[40,40,23], stages:[
  { lvl:1,  types:["Philo. Religion"], img:null,
    fr:{nom:"LE TUTEUR DE CAMBRIDGE", note:"Senior wrangler, il enseigne la morale et le Nouveau Testament à Christ's College."},
    en:{nom:"THE CAMBRIDGE TUTOR", note:"Senior wrangler, he teaches morals and the New Testament at Christ's College."} },
  { lvl:40, types:["Philo. Religion","Utilitarisme"], img:null,
    fr:{nom:"L'HORLOGER DE LA LANDE", note:"Une montre trouvée sur la bruyère suppose un horloger ; l'œil suppose davantage. Darwin le lira à Cambridge avec délice."},
    en:{nom:"THE WATCHMAKER ON THE HEATH", note:"A watch found on the heath implies a watchmaker; the eye implies more. Darwin will read him at Cambridge with delight."} },
]},

"059": { debut:1780, fin:1814, learn:[15,15,29], stages:[
  { lvl:1,  types:["Rationalisme"], img:null,
    fr:{nom:"LE BOURSIER PAUVRE", note:"Fils de tisserand, remarqué par un baron pour avoir su répéter un sermon entier de mémoire."},
    en:{nom:"THE POOR SCHOLARSHIP BOY", note:"A weaver's son, noticed by a baron for repeating an entire sermon from memory."} },
  { lvl:13, types:["Rationalisme"], img:null,
    fr:{nom:"LE FAUX KANT", note:"Sa Critique de toute révélation paraît sans nom d'auteur ; toute l'Allemagne l'attribue à Kant."},
    en:{nom:"THE FALSE KANT", note:"His Critique of All Revelation appears unsigned; all Germany attributes it to Kant."} },
  { lvl:15, types:["Idéalisme","Rationalisme"], img:null,
    fr:{nom:"LE MOI ABSOLU", note:"La Doctrine de la science fait du Moi un acte, pas une chose : il se pose en se posant."},
    en:{nom:"THE ABSOLUTE I", note:"The Wissenschaftslehre makes the I an act, not a thing: it posits itself by positing."} },
  { lvl:29, types:["Idéalisme","Rationalisme","Humanisme"], img:null,
    fr:{nom:"L'ORATEUR DE LA NATION", note:"Berlin occupé par Napoléon ; il fait de la nation une tâche d'éducation, non une race."},
    en:{nom:"ORATOR TO THE NATION", note:"Berlin under Napoleon; he makes the nation a task of education, not a race."} },
]},

"060": { debut:1790, fin:1854, learn:[11,8,20], stages:[
  { lvl:1,  types:["Idéalisme"], img:"Portret van Friedrich Wilhelm Joseph von Schelling, RP-P-1914-4017.jpg",
    fr:{nom:"L'ENFANT DU STIFT", note:"Admis à quinze ans, cinq ans avant l'âge ; il y partage une chambre avec Hegel et Hölderlin."},
    en:{nom:"THE CHILD OF THE STIFT", note:"Admitted at fifteen, five years under age; he shares a room with Hegel and Hölderlin."} },
  { lvl:8,  types:["Idéalisme"], img:null,
    fr:{nom:"LE PHILOSOPHE DE LA NATURE", note:"Professeur à vingt-trois ans : la nature n'est pas le contraire de l'esprit, c'est de l'esprit endormi."},
    en:{nom:"THE PHILOSOPHER OF NATURE", note:"A professor at twenty-three: nature is not the opposite of spirit but spirit asleep."} },
  { lvl:20, types:["Idéalisme","Mysticisme"], img:"Portret van Friedrich von Schelling, RP-P-OB-56.075.jpg",
    fr:{nom:"LE PENSEUR DE LA LIBERTÉ", note:"Après la mort de Caroline, l'essai sur la liberté place un fond obscur jusque dans l'absolu."},
    en:{nom:"THE THINKER OF FREEDOM", note:"After Caroline's death, the freedom essay places a dark ground even within the absolute."} },
]},

"061": { debut:1809, fin:1860, learn:[10,10,10], stages:[
  { lvl:1,  types:["Idéalisme"], img:"Arthur Schopenhauer Portrait by Ludwig Sigismund Ruhl 1815.jpeg",
    fr:{nom:"L'ÉTUDIANT MISANTHROPE", note:"Il abandonne le négoce paternel pour Göttingen, et n'aura jamais à gagner sa vie."},
    en:{nom:"THE MISANTHROPIC STUDENT", note:"He abandons his father's trade for Göttingen, and never has to earn a living."} },
  { lvl:43, types:["Idéalisme","Mysticisme"], img:"Arthur Schopenhauer 1845.jpg",
    fr:{nom:"LE SAGE DE FRANCFORT", note:"Les Parerga lui apportent enfin la gloire, à soixante-trois ans, entre son caniche et sa table d'hôte."},
    en:{nom:"THE SAGE OF FRANKFURT", note:"The Parerga finally bring him fame, at sixty-three, between his poodle and his table d'hôte."} },
]},

"062": { debut:1823, fin:1872, learn:[19,19,40], stages:[
  { lvl:1,  types:["Humanisme"], img:null,
    fr:{nom:"L'ÉLÈVE DE HEGEL", note:"Il quitte la théologie de Heidelberg pour deux années aux pieds de Hegel à Berlin."},
    en:{nom:"HEGEL'S PUPIL", note:"He leaves Heidelberg theology for two years at Hegel's feet in Berlin."} },
  { lvl:40, types:["Matérialisme","Humanisme"], img:null,
    fr:{nom:"LE MATÉRIALISTE", note:"L'homme est ce qu'il mange — le calembour allemand fait de l'anthropologie une question de subsistance."},
    en:{nom:"THE MATERIALIST", note:"Man is what he eats — the German pun turns anthropology into a question of subsistence."} },
]},

"063": { debut:1818, fin:1859, learn:[15,15,15], stages:[
  { lvl:1, types:["Philo. Droit"], img:null,
    fr:{nom:"LA PROVINCE DU DROIT", note:"Le droit est le commandement d'un souverain assorti d'une sanction — que la loi soit juste est une autre question."},
    en:{nom:"THE PROVINCE OF JURISPRUDENCE", note:"Law is a sovereign's command backed by sanction — whether it is just is another question."} },
]},

"064": { debut:1809, fin:1873, learn:[53,51,51], stages:[
  { lvl:1,  types:["Utilitarisme"], img:null,
    fr:{nom:"L'ENFANT DE LABORATOIRE", note:"Grec à trois ans, Platon à sept, l'économie politique à treize : son père l'élève comme une démonstration."},
    en:{nom:"THE LABORATORY CHILD", note:"Greek at three, Plato at seven, political economy at thirteen: his father raises him as a demonstration."} },
  { lvl:18, types:["Utilitarisme"], img:null,
    fr:{nom:"LA CRISE MENTALE", note:"À vingt ans il se demande si l'accomplissement de tout son programme le rendrait heureux, répond non, et s'effondre. Wordsworth le sauve."},
    en:{nom:"THE MENTAL CRISIS", note:"At twenty he asks whether achieving his whole programme would make him happy, answers no, and collapses. Wordsworth saves him."} },
  { lvl:51, types:["Utilitarisme","Libéralisme"], img:null,
    fr:{nom:"LE DÉFENSEUR DE LA LIBERTÉ", note:"De la liberté paraît l'année de la mort de Harriet Taylor, dont il dit le livre autant qu'à elle."},
    en:{nom:"THE DEFENDER OF LIBERTY", note:"On Liberty appears the year Harriet Taylor dies, whose book he says it is as much as his."} },
]},

"065": { debut:1831, fin:1882, learn:[8,29,8], stages:[
  { lvl:1,  types:["Philo. Sciences"], img:null,
    fr:{nom:"LE NATURALISTE DU BEAGLE", note:"Recalé de médecine, destiné à l'Église, il embarque pour cinq ans comme compagnon de table du capitaine."},
    en:{nom:"THE BEAGLE'S NATURALIST", note:"A medical dropout bound for the Church, he sails for five years as the captain's dining companion."} },
  { lvl:8,  types:["Philo. Sciences","Matérialisme"], img:null,
    fr:{nom:"LE CARNET SECRET", note:"Il lit Malthus pour se distraire et tient enfin son mécanisme ; puis il attend vingt ans, terrifié."},
    en:{nom:"THE SECRET NOTEBOOK", note:"He reads Malthus for amusement and at last holds his mechanism; then he waits twenty years, terrified."} },
  { lvl:29, types:["Philo. Sciences","Matérialisme"], img:null,
    fr:{nom:"L'ORIGINE DES ESPÈCES", note:"Une lettre de Wallace le force à publier ; l'édition entière part le premier jour."},
    en:{nom:"THE ORIGIN OF SPECIES", note:"A letter from Wallace forces him to publish; the whole edition sells on the first day."} },
]},

"066": { debut:1830, fin:1855, learn:[14,14,17], stages:[
  { lvl:1,  types:["Existentialisme"], img:null,
    fr:{nom:"L'ÉTUDIANT MÉLANCOLIQUE", note:"Dix ans de théologie et de dettes, sous le « grand tremblement de terre » de la malédiction paternelle."},
    en:{nom:"THE MELANCHOLY STUDENT", note:"Ten years of theology and debts, under the \"great earthquake\" of his father's curse."} },
  { lvl:14, types:["Existentialisme","Philo. Religion"], img:"Constantin Hansen - Studie til omslaget på Søren Kierkegaards “Stadier paa Livets Vei”.png",
    fr:{nom:"LE PSEUDONYME", note:"Il rompt ses fiançailles avec Regine et publie sous six masques : l'esthétique, l'éthique, le religieux."},
    en:{nom:"THE PSEUDONYM", note:"He breaks off with Regine and publishes under six masks: the aesthetic, the ethical, the religious."} },
  { lvl:22, types:["Existentialisme","Philo. Religion"], img:"Wilhelm Marstrand - Tegning af Søren Kierkegaard.png",
    fr:{nom:"L'ATTAQUE CONTRE LA CHRÉTIENTÉ", note:"Un an de pamphlets contre l'Église danoise ; il s'effondre dans la rue et meurt à quarante-deux ans."},
    en:{nom:"THE ATTACK UPON CHRISTENDOM", note:"A year of pamphlets against the Danish Church; he collapses in the street and dies at forty-two."} },
]},

"067": { debut:1856, fin:1917, learn:[19,19,30], stages:[
  { lvl:1,  types:["Empirisme"], img:null,
    fr:{nom:"LE PRÊTRE ARISTOTÉLICIEN", note:"Une thèse sur les sens multiples de l'être chez Aristote, puis l'ordination."},
    en:{nom:"THE ARISTOTELIAN PRIEST", note:"A thesis on the manifold senses of being in Aristotle, then ordination."} },
  { lvl:19, types:["Phénoménologie","Empirisme"], img:null,
    fr:{nom:"LA PSYCHOLOGIE DESCRIPTIVE", note:"Tout phénomène mental contient un objet en lui-même : la scolastique rentre par la fenêtre."},
    en:{nom:"DESCRIPTIVE PSYCHOLOGY", note:"Every mental phenomenon contains an object within itself: scholasticism returns through the window."} },
  { lvl:25, types:["Phénoménologie","Empirisme"], img:null,
    fr:{nom:"LE MAÎTRE DE VIENNE", note:"Il quitte l'Église pour se marier et perd sa chaire ; simple privat-docent, il forme Husserl, Freud et Meinong."},
    en:{nom:"THE VIENNA MASTER", note:"He leaves the Church to marry and loses his chair; a mere Privatdozent, he trains Husserl, Freud and Meinong."} },
]},

"068": { debut:1859, fin:1914, learn:[20,9,35], stages:[
  { lvl:1,  types:["Logique"], img:null,
    fr:{nom:"L'ARPENTEUR DU COAST SURVEY", note:"Trente ans à mesurer la gravité pour l'État fédéral ; la philosophie se fait le soir."},
    en:{nom:"THE COAST SURVEY MAN", note:"Thirty years measuring gravity for the federal government; philosophy is done in the evenings."} },
  { lvl:9,  types:["Pragmatisme","Logique"], img:null,
    fr:{nom:"LE LOGICIEN DES SIGNES", note:"Toute pensée est signe, et tout signe suppose un tiers : l'interprétant."},
    en:{nom:"THE LOGICIAN OF SIGNS", note:"All thought is a sign, and every sign requires a third: the interpretant."} },
  { lvl:20, types:["Pragmatisme","Logique"], img:null,
    fr:{nom:"LE PÈRE DU PRAGMATISME", note:"Le sens d'une idée est la somme de ses effets concevables ; quand James en fera autre chose, il rebaptisera la sienne pragmaticisme."},
    en:{nom:"FATHER OF PRAGMATISM", note:"An idea's meaning is the sum of its conceivable effects; when James makes it something else, he renames his own pragmaticism."} },
]},

"069": { debut:1861, fin:1910, learn:[47,47,42], stages:[
  { lvl:1,  types:["Pragmatisme"], img:null,
    fr:{nom:"LE PEINTRE MANQUÉ", note:"Il veut être peintre, son père l'en dissuade ; suivront la chimie, la médecine et une longue dépression."},
    en:{nom:"THE FAILED PAINTER", note:"He wants to be a painter, his father dissuades him; chemistry, medicine and a long depression follow."} },
  { lvl:30, types:["Pragmatisme"], img:null,
    fr:{nom:"LE PSYCHOLOGUE", note:"Douze ans pour les Principles ; le flux de conscience y entre dans la langue commune."},
    en:{nom:"THE PSYCHOLOGIST", note:"Twelve years for the Principles; the stream of consciousness enters ordinary language there."} },
  { lvl:42, types:["Pragmatisme","Philo. Religion"], img:null,
    fr:{nom:"LES VARIÉTÉS", note:"Il traite l'expérience religieuse comme un fait à décrire, non comme une thèse à réfuter."},
    en:{nom:"THE VARIETIES", note:"He treats religious experience as a fact to describe, not a thesis to refute."} },
]},

"070": { debut:1865, fin:1924, learn:[29,19,29], stages:[
  { lvl:1,  types:["Idéalisme"], img:null,
    fr:{nom:"LE FELLOW DE MERTON", note:"Une maladie rénale à vingt-cinq ans lui vaut une bourse sans obligation d'enseigner — et cinquante ans de réclusion."},
    en:{nom:"THE MERTON FELLOW", note:"A kidney disease at twenty-five earns him a fellowship with no teaching duties — and fifty years of seclusion."} },
  { lvl:29, types:["Idéalisme","Logique"], img:null,
    fr:{nom:"APPARENCE ET RÉALITÉ", note:"Presque tout ce que nous croyons réel est contradictoire ; seul l'Absolu échappe — Russell et Moore se lèveront contre lui."},
    en:{nom:"APPEARANCE AND REALITY", note:"Almost all we take for real is contradictory; only the Absolute escapes — Russell and Moore will rise against him."} },
]},

"071": { debut:1869, fin:1925, learn:[11,24,16], stages:[
  { lvl:1,  types:["Logique"], img:null,
    fr:{nom:"L'ÉTUDIANT D'IÉNA", note:"Mathématicien de formation, il enseignera toute sa vie dans une obscurité presque totale."},
    en:{nom:"THE JENA STUDENT", note:"A trained mathematician, he will teach his whole life in near-total obscurity."} },
  { lvl:24, types:["Logique","Philo. Langage"], img:null,
    fr:{nom:"SENS ET RÉFÉRENCE", note:"L'étoile du matin et celle du soir désignent le même astre et ne disent pas la même chose. En 1902, la lettre de Russell ruinera l'édifice."},
    en:{nom:"SENSE AND REFERENCE", note:"Morning star and evening star name one body and do not say the same thing. In 1902 Russell's letter will ruin the edifice."} },
]},

"072": { debut:1873, fin:1912, learn:[30,25,30], stages:[
  { lvl:1,  types:["Philo. Sciences"], img:null,
    fr:{nom:"L'INGÉNIEUR DES MINES", note:"Polytechnique, puis les mines de Vesoul ; il fait sa thèse de mathématiques entre deux inspections."},
    en:{nom:"THE MINING ENGINEER", note:"Polytechnique, then the Vesoul mines; he writes his mathematics thesis between inspections."} },
  { lvl:30, types:["Philo. Sciences","Constructivisme","Rationalisme"], img:null,
    fr:{nom:"LE CONVENTIONNALISTE", note:"Les axiomes ne sont ni vrais ni faux : ils sont commodes. Ce qui n'en fait pas des caprices."},
    en:{nom:"THE CONVENTIONALIST", note:"Axioms are neither true nor false: they are convenient. Which does not make them arbitrary."} },
]},

"073": { debut:1876, fin:1939, learn:[25,48,30], stages:[
  { lvl:1,  types:["Philo. Esprit"], img:"Freud 1885.jpg",
    fr:{nom:"LE NEUROLOGUE", note:"Six ans à disséquer des anguilles chez Brücke, puis Charcot et l'hypnose à la Salpêtrière."},
    en:{nom:"THE NEUROLOGIST", note:"Six years dissecting eels in Brücke's lab, then Charcot and hypnosis at the Salpêtrière."} },
  { lvl:25, types:["Philo. Esprit","Existentialisme"], img:"Sigmund Freud, bust portrait, facing front LCCN2010651703.jpg",
    fr:{nom:"L'INTERPRÈTE DES RÊVES", note:"Six cents exemplaires en huit ans ; la voie royale vers l'inconscient met du temps à se dégager."},
    en:{nom:"THE DREAM INTERPRETER", note:"Six hundred copies in eight years; the royal road to the unconscious takes time to clear."} },
  { lvl:48, types:["Philo. Esprit","Existentialisme"], img:"Sigmund Freud 1926.jpg",
    fr:{nom:"LA SECONDE TOPIQUE", note:"Après la guerre et le cancer de la mâchoire, l'appareil psychique se refait en trois instances."},
    en:{nom:"THE SECOND TOPOGRAPHY", note:"After the war and the jaw cancer, the psychic apparatus is remade in three agencies."} },
]},

"074": { debut:1876, fin:1913, learn:[32,32,34], stages:[
  { lvl:1,  types:["Philo. Langage"], img:null,
    fr:{nom:"LE PRODIGE DE LEIPZIG", note:"À vingt et un ans, un Mémoire sur les voyelles indo-européennes qui stupéfie les néogrammairiens."},
    en:{nom:"THE LEIPZIG PRODIGY", note:"At twenty-one, a Mémoire on Indo-European vowels that astounds the Neogrammarians."} },
  { lvl:16, types:["Philo. Langage"], img:null,
    fr:{nom:"LE SILENCE DE GENÈVE", note:"Vingt ans presque sans rien publier : il juge tout ce qu'on peut dire de la langue inadéquat."},
    en:{nom:"THE GENEVA SILENCE", note:"Twenty years publishing almost nothing: he finds everything one can say about language inadequate."} },
  { lvl:32, types:["Structuralisme","Philo. Langage"], img:null,
    fr:{nom:"LE COURS DE LINGUISTIQUE GÉNÉRALE", note:"Trois cours, aucun livre ; ses élèves publieront leurs notes après sa mort et fonderont un siècle de pensée."},
    en:{nom:"THE COURSE IN GENERAL LINGUISTICS", note:"Three courses, no book; his students publish their notes after his death and found a century of thought."} },
]},

"075": { debut:1878, fin:1941, learn:[12,19,30], stages:[
  { lvl:1,  types:["Phénoménologie"], img:null,
    fr:{nom:"LE NORMALIEN MATHÉMATICIEN", note:"On lui promet une carrière de mathématicien ; il choisit la philosophie, au grand dam de ses maîtres."},
    en:{nom:"THE MATHEMATICIAN NORMALIEN", note:"A mathematician's career is promised him; he chooses philosophy, to his teachers' dismay."} },
  { lvl:12, types:["Idéalisme","Phénoménologie"], img:null,
    fr:{nom:"LE PENSEUR DE LA DURÉE", note:"Le temps vécu ne se compte pas : le mesurer, c'est déjà le transformer en espace."},
    en:{nom:"THE THINKER OF DURATION", note:"Lived time cannot be counted: to measure it is already to turn it into space."} },
  { lvl:30, types:["Idéalisme","Phénoménologie"], img:null,
    fr:{nom:"L'ÉLAN VITAL", note:"Le Collège de France refuse du monde ; on vient de New York l'entendre, et le Nobel suivra."},
    en:{nom:"THE VITAL IMPETUS", note:"The Collège de France turns crowds away; people come from New York to hear him, and the Nobel follows."} },
]},

"076": { debut:1879, fin:1952, learn:[60,38,18], stages:[
  { lvl:1,  types:["Pragmatisme"], img:"John Dewey, studio portrait, ca 1890.jpg",
    fr:{nom:"LE MAÎTRE D'ÉCOLE DE OIL CITY", note:"Trois ans à enseigner dans une ville pétrolière de Pennsylvanie avant de reprendre des études."},
    en:{nom:"THE OIL CITY SCHOOLMASTER", note:"Three years teaching in a Pennsylvania oil town before returning to study."} },
  { lvl:38, types:["Pragmatisme"], img:"John Dewey in 1902.jpg",
    fr:{nom:"LE PHILOSOPHE DE LA DÉMOCRATIE", note:"La démocratie n'est pas un régime mais une manière de vivre ensemble et d'enquêter ensemble."},
    en:{nom:"PHILOSOPHER OF DEMOCRACY", note:"Democracy is not a regime but a way of living together and inquiring together."} },
]},

"077": { debut:1882, fin:1916, learn:[25,25,25], stages:[
  { lvl:1,  types:["Philo. Sciences"], img:"Pierre Duhem 1900 (cropped).jpg",
    fr:{nom:"LA THÈSE REFUSÉE", note:"Berthelot fait rejeter sa thèse ; il n'enseignera jamais à Paris, et ne pardonnera jamais."},
    en:{nom:"THE REJECTED THESIS", note:"Berthelot has his thesis rejected; he will never teach in Paris, and never forgive."} },
  { lvl:25, types:["Philo. Sciences","Constructivisme"], img:"Pierre Duhem.jpg",
    fr:{nom:"LA THÉORIE PHYSIQUE", note:"Aucune expérience ne réfute une hypothèse seule : c'est tout le groupe théorique qui comparaît."},
    en:{nom:"THE AIM AND STRUCTURE OF PHYSICAL THEORY", note:"No experiment refutes a lone hypothesis: the whole theoretical group stands trial."} },
]},

"078": { debut:1882, fin:1952, learn:[15,42,24], stages:[
  { lvl:1,  types:["Esthétique"], img:"George Santayana (1863–1952) c. 1886.png",
    fr:{nom:"L'ESPAGNOL DE HARVARD", note:"Né à Madrid, élevé à Boston, il restera étranger aux deux et le revendiquera."},
    en:{nom:"THE SPANIARD AT HARVARD", note:"Born in Madrid, raised in Boston, he stays foreign to both and claims it."} },
  { lvl:42, types:["Esthétique","Réalisme","Humanisme"], img:"Photogravure portrait of George Santayana (1931).jpg",
    fr:{nom:"L'ERMITE DE ROME", note:"Un héritage lui permet de démissionner de Harvard par télégramme ; il finit ses jours chez des religieuses à Rome."},
    en:{nom:"THE ROMAN HERMIT", note:"A legacy lets him resign from Harvard by telegram; he ends his days with nuns in Rome."} },
]},

"079": { debut:1885, fin:1925, learn:[24,24,37], stages:[
  { lvl:1,  types:["Idéalisme"], img:null,
    fr:{nom:"L'HÉGÉLIEN DE CAMBRIDGE", note:"Renvoyé de son école pour athéisme, il devient le dernier grand hégélien anglais."},
    en:{nom:"THE CAMBRIDGE HEGELIAN", note:"Expelled from school for atheism, he becomes the last great English Hegelian."} },
  { lvl:37, types:["Idéalisme","Philo. Religion"], img:null,
    fr:{nom:"L'ATHÉE AUX ÂMES IMMORTELLES", note:"Pas de Dieu, mais un univers fait de personnes éternelles liées par l'amour."},
    en:{nom:"THE ATHEIST OF IMMORTAL SOULS", note:"No God, but a universe made of eternal persons bound by love."} },
]},

"080": { debut:1886, fin:1952, learn:[17,17,32], stages:[
  { lvl:1,  types:["Esthétique"], img:"Benedetto Croce 01 (cropped).jpg",
    fr:{nom:"L'ORPHELIN DE CASAMICCIOLA", note:"Le tremblement de terre d'Ischia tue ses parents et sa sœur ; il reste enseveli des heures à seize ans."},
    en:{nom:"THE ORPHAN OF CASAMICCIOLA", note:"The Ischia earthquake kills his parents and sister; he lies buried for hours, aged sixteen."} },
  { lvl:40, types:["Esthétique","Idéalisme"], img:"Rudolf Großmann - Porträt Benedetto Croce, 1926.jpg",
    fr:{nom:"LE MANIFESTE DES ANTIFASCISTES", note:"Sénateur, il répond publiquement à Gentile en 1925 ; toute histoire est histoire contemporaine."},
    en:{nom:"THE ANTIFASCIST MANIFESTO", note:"A senator, he answers Gentile publicly in 1925; all history is contemporary history."} },
]},

"081": { debut:1902, fin:1964, learn:[13,13,13], stages:[
  { lvl:1,  types:["Esthétique"], img:"Clive-bell-c-1913.jpg",
    fr:{nom:"L'HOMME DE BLOOMSBURY", note:"Trinity College, la Midnight Society, puis le mariage avec Vanessa Stephen — sœur de Virginia Woolf."},
    en:{nom:"THE BLOOMSBURY MAN", note:"Trinity College, the Midnight Society, then marriage to Vanessa Stephen — Virginia Woolf's sister."} },
  { lvl:13, types:["Esthétique"], img:"Clive Bell.jpg",
    fr:{nom:"LA FORME SIGNIFICANTE", note:"Ce qui fait l'art n'est ni le sujet ni l'émotion représentée, mais un agencement de lignes et de couleurs."},
    en:{nom:"SIGNIFICANT FORM", note:"What makes art is neither subject nor represented emotion, but an arrangement of lines and colours."} },
]},

"082": { debut:1900, fin:1973, learn:[35,21,35], stages:[
  { lvl:1,  types:["Philo. Droit"], img:null,
    fr:{nom:"LE JURISTE DE VIENNE", note:"Il choisit le droit faute de pouvoir vivre de la philosophie, et décide de le rendre philosophique."},
    en:{nom:"THE VIENNA JURIST", note:"He picks law for want of a living in philosophy, and resolves to make law philosophical."} },
  { lvl:35, types:["Philo. Droit"], img:null,
    fr:{nom:"LA THÉORIE PURE", note:"Une norme ne vaut que par une norme supérieure ; au sommet, la Grundnorm, qu'on présuppose sans la prouver."},
    en:{nom:"THE PURE THEORY", note:"A norm holds only through a higher norm; at the summit, the Grundnorm, presupposed and unproven."} },
]},

"083": { debut:1892, fin:1958, learn:[12,34,12], stages:[
  { lvl:1,  types:["Éthique des Vertus"], img:null,
    fr:{nom:"L'ÉTUDIANT DE CLASSIQUES", note:"Venu pour le grec, il bascule en philosophie après avoir rencontré Russell — de deux ans son aîné."},
    en:{nom:"THE CLASSICS STUDENT", note:"Come for Greek, he switches to philosophy after meeting Russell — two years his senior."} },
  { lvl:34, types:["Réalisme","Éthique des Vertus"], img:null,
    fr:{nom:"VOICI UNE MAIN", note:"Contre le scepticisme, il lève une main puis l'autre : les prémisses du sceptique sont moins sûres que ceci."},
    en:{nom:"HERE IS ONE HAND", note:"Against scepticism he raises one hand then the other: the sceptic's premises are less certain than this."} },
]},

"084": { debut:1890, fin:1970, learn:[12,29,16], stages:[
  { lvl:1,  types:["Logique"], img:"Portrait of Bertrand Russell in 1893.jpg",
    fr:{nom:"L'ORPHELIN ARISTOCRATE", note:"Élevé par sa grand-mère dans une piété qu'il rejette ; Euclide à onze ans lui fait l'effet d'un premier amour."},
    en:{nom:"THE ARISTOCRAT ORPHAN", note:"Raised by his grandmother in a piety he rejects; Euclid at eleven strikes him like a first love."} },
  { lvl:12, types:["Logique","Philo. Langage"], img:"Bertrand Russell, 1907.jpg",
    fr:{nom:"LE PARADOXE", note:"L'ensemble des ensembles qui ne se contiennent pas ruine Frege — et bientôt sa propre théorie."},
    en:{nom:"THE PARADOX", note:"The set of all sets not containing themselves ruins Frege — and soon his own theory."} },
  { lvl:29, types:["Logique","Empirisme","Philo. Langage"], img:"Bertrand Russell photo.jpg",
    fr:{nom:"LE PRISONNIER DE BRIXTON", note:"Six mois de prison pour pacifisme, où il écrit une introduction à la philosophie mathématique."},
    en:{nom:"THE BRIXTON PRISONER", note:"Six months in gaol for pacifism, where he writes an introduction to mathematical philosophy."} },
]},

"085": { debut:1902, fin:1944, learn:[33,27,27], stages:[
  { lvl:1,  types:["Philo. Sciences"], img:null,
    fr:{nom:"LE QUAKER DE CAMBRIDGE", note:"Senior wrangler, puis astronome royal adjoint ; sa foi quaker lui interdira de porter les armes."},
    en:{nom:"THE CAMBRIDGE QUAKER", note:"Senior wrangler, then chief assistant at Greenwich; his Quaker faith will forbid him to bear arms."} },
  { lvl:27, types:["Philo. Sciences","Idéalisme"], img:null,
    fr:{nom:"LES DEUX TABLES", note:"La table du sens commun et celle du physicien ; ce que la science trouve dépend du filet qu'elle jette."},
    en:{nom:"THE TWO TABLES", note:"The commonsense table and the physicist's; what science catches depends on the net it casts."} },
]},

"086": { debut:1920, fin:1930, learn:[7,10,8], stages:[
  { lvl:1,  types:["Logique"], img:null,
    fr:{nom:"LE TRADUCTEUR DU TRACTATUS", note:"À dix-huit ans il traduit Wittgenstein en anglais, puis va discuter avec lui deux semaines en Autriche."},
    en:{nom:"THE TRACTATUS TRANSLATOR", note:"At eighteen he translates Wittgenstein into English, then argues with him for a fortnight in Austria."} },
  { lvl:10, types:["Logique","Pragmatisme"], img:null,
    fr:{nom:"L'ANNÉE INTERROMPUE", note:"Économie, mathématiques, philosophie : il refonde trois disciplines puis meurt à vingt-six ans."},
    en:{nom:"THE INTERRUPTED YEAR", note:"Economics, mathematics, philosophy: he refounds three fields, then dies at twenty-six."} },
]},

"087": { debut:1910, fin:1970, learn:[19,25,41], stages:[
  { lvl:1,  types:["Logique"], img:null,
    fr:{nom:"L'ÉLÈVE DE FREGE", note:"Il suit à Iéna les cours d'un vieux professeur que trois étudiants écoutent."},
    en:{nom:"FREGE'S PUPIL", note:"At Jena he attends the lectures of an old professor heard by three students."} },
  { lvl:19, types:["Positivisme","Logique"], img:null,
    fr:{nom:"L'AUFBAU", note:"Reconstruire tout le savoir à partir de l'expérience vécue et de la logique seule."},
    en:{nom:"THE AUFBAU", note:"Rebuild all knowledge from lived experience and logic alone."} },
  { lvl:25, types:["Positivisme","Logique"], img:null,
    fr:{nom:"LE PRINCIPE DE TOLÉRANCE", note:"En logique il n'y a pas de morale : chacun bâtit sa langue, à condition d'en donner les règles."},
    en:{nom:"THE PRINCIPLE OF TOLERANCE", note:"In logic there are no morals: build your own language, provided you state its rules."} },
]},

"088": { debut:1906, fin:1943, learn:[25,34,32], stages:[
  { lvl:1,  types:["Logique"], img:null,
    fr:{nom:"L'ÉTUDIANTE DE GIRTON", note:"Elle découvre la philosophie par hasard, en empruntant l'Apparence et Réalité de Bradley pour une insomnie."},
    en:{nom:"THE GIRTON STUDENT", note:"She finds philosophy by chance, borrowing Bradley's Appearance and Reality to cure insomnia."} },
  { lvl:32, types:["Logique","Philo. Sciences"], img:null,
    fr:{nom:"CONTRE LES PHYSICIENS MYSTIQUES", note:"Elle démonte la prose d'Eddington et de Jeans, puis apprend au public à repérer un raisonnement tordu."},
    en:{nom:"AGAINST THE MYSTICAL PHYSICISTS", note:"She dismantles the prose of Eddington and Jeans, then teaches the public to spot a crooked argument."} },
]},

"089": { debut:1911, fin:1937, learn:[19,21,23], stages:[
  { lvl:1,  types:["Marxisme"], img:null,
    fr:{nom:"L'ÉTUDIANT SARDE", note:"Une bourse pour pauvres l'amène à Turin ; il y passe le concours au même examen que Togliatti."},
    en:{nom:"THE SARDINIAN STUDENT", note:"A scholarship for the poor brings him to Turin; he sits the entrance exam alongside Togliatti."} },
  { lvl:9,  types:["Marxisme","Philo. Politique"], img:null,
    fr:{nom:"L'ORDINE NUOVO", note:"Les conseils d'usine de Turin ; la révolution ne se décrète pas d'en haut, elle s'organise à l'atelier."},
    en:{nom:"L'ORDINE NUOVO", note:"The Turin factory councils; revolution is not decreed from above, it is organised on the shop floor."} },
  { lvl:19, types:["Marxisme","Philo. Politique"], img:null,
    fr:{nom:"LES CAHIERS DE PRISON", note:"« Il faut empêcher ce cerveau de fonctionner pendant vingt ans », dit le procureur. Trente-trois cahiers répondent."},
    en:{nom:"THE PRISON NOTEBOOKS", note:"\"We must stop this brain working for twenty years,\" says the prosecutor. Thirty-three notebooks answer."} },
]},

"090": { debut:1912, fin:1940, learn:[24,29,29], stages:[
  { lvl:1,  types:["Esthétique"], img:null,
    fr:{nom:"L'ÉTUDIANT DU WANDERVOGEL", note:"Le mouvement de jeunesse allemand, puis une thèse sur le romantisme et la critique d'art."},
    en:{nom:"THE WANDERVOGEL STUDENT", note:"The German youth movement, then a thesis on Romanticism and art criticism."} },
  { lvl:14, types:["Esthétique"], img:null,
    fr:{nom:"L'HABILITATION REFUSÉE", note:"Son livre sur le drame baroque est jugé incompréhensible ; il ne sera jamais universitaire, et vivra de piges."},
    en:{nom:"THE REJECTED HABILITATION", note:"His book on baroque drama is deemed incomprehensible; never an academic, he lives by freelance work."} },
  { lvl:24, types:["Théorie Critique","Esthétique"], img:null,
    fr:{nom:"LE PASSAGER DE PARIS", note:"Les passages, la reproductibilité, l'ange qui recule vers l'avenir — et Portbou, en 1940."},
    en:{nom:"THE PARIS ARCADES", note:"The arcades, reproducibility, the angel blown backwards into the future — and Portbou, in 1940."} },
]},

"091": { debut:1916, fin:1985, learn:[27,38,38], stages:[
  { lvl:1,  types:["Esthétique"], img:null,
    fr:{nom:"L'ÉTUDIANTE DE RADCLIFFE", note:"Élève de Whitehead, elle enseignera vingt ans comme simple tutrice avant d'obtenir un poste."},
    en:{nom:"THE RADCLIFFE STUDENT", note:"Whitehead's student, she teaches twenty years as a mere tutor before securing a post."} },
  { lvl:38, types:["Esthétique","Philo. Esprit"], img:null,
    fr:{nom:"LA FORME DU SENTIMENT", note:"L'art donne une forme au sentiment sans le décrire — il en présente la structure, pas le contenu."},
    en:{nom:"THE FORM OF FEELING", note:"Art gives feeling a form without describing it — presenting its structure, not its content."} },
]},

"092": { debut:1928, fin:1990, learn:[11,21,21], stages:[
  { lvl:1,  types:["Empirisme"], img:null,
    fr:{nom:"L'ÉCRIVAIN RATÉ", note:"Une « année noire » à tenter d'être romancier le convainc que la littérature ne sait rien du comportement."},
    en:{nom:"THE FAILED NOVELIST", note:"A \"dark year\" attempting fiction convinces him literature knows nothing of behaviour."} },
  { lvl:21, types:["Empirisme","Matérialisme"], img:null,
    fr:{nom:"L'INGÉNIEUR DE L'UTOPIE", note:"Walden Two propose de concevoir une société comme on conçoit un protocole — l'Amérique s'en effraie."},
    en:{nom:"THE UTOPIA ENGINEER", note:"Walden Two proposes designing a society as one designs a protocol — America takes fright."} },
]},

"093": { debut:1925, fin:1997, learn:[24,21,34], stages:[
  { lvl:1,  types:["Positivisme"], img:null,
    fr:{nom:"LE CERCLE DE BERLIN", note:"Élève de Reichenbach, il assiste à la thèse de Gödel et fuit l'Allemagne en 1934."},
    en:{nom:"THE BERLIN CIRCLE", note:"Reichenbach's student, he attends Gödel's defence and flees Germany in 1934."} },
  { lvl:24, types:["Positivisme","Philo. Sciences"], img:null,
    fr:{nom:"L'EXPLICATION DÉDUCTIVE", note:"Expliquer, c'est déduire le fait d'une loi et de conditions initiales — le modèle dominera trente ans."},
    en:{nom:"DEDUCTIVE EXPLANATION", note:"To explain is to deduce the fact from a law plus initial conditions — the model rules for thirty years."} },
]},

"094": { debut:1919, fin:1994, learn:[16,45,27], stages:[
  { lvl:1,  types:["Philo. Sciences"], img:null,
    fr:{nom:"L'APPRENTI ÉBÉNISTE", note:"Une fusillade communiste à Vienne le dégoûte du marxisme à dix-sept ans ; il apprend un métier manuel."},
    en:{nom:"THE CABINETMAKER'S APPRENTICE", note:"A communist shooting in Vienna disgusts him with Marxism at seventeen; he learns a manual trade."} },
  { lvl:16, types:["Philo. Sciences"], img:null,
    fr:{nom:"LA FALSIFIABILITÉ", note:"Une théorie qui explique tout n'explique rien : le critère n'est pas la preuve mais le risque."},
    en:{nom:"FALSIFIABILITY", note:"A theory explaining everything explains nothing: the criterion is not proof but risk."} },
  { lvl:27, types:["Philo. Sciences","Libéralisme"], img:null,
    fr:{nom:"LA SOCIÉTÉ OUVERTE", note:"Écrite en Nouvelle-Zélande, « ma contribution à l'effort de guerre » : Platon, Hegel et Marx au banc des accusés."},
    en:{nom:"THE OPEN SOCIETY", note:"Written in New Zealand, \"my war effort\": Plato, Hegel and Marx in the dock."} },
]},

"095": { debut:1919, fin:1976, learn:[31,20,31], stages:[
  { lvl:1,  types:["Philo. Langage"], img:null,
    fr:{nom:"L'ÉTUDIANT D'OXFORD", note:"Formé aux classiques, il apprend l'allemand seul pour lire Husserl et Meinong dans le texte."},
    en:{nom:"THE OXFORD STUDENT", note:"Trained in classics, he teaches himself German to read Husserl and Meinong in the original."} },
  { lvl:20, types:["Philo. Langage"], img:null,
    fr:{nom:"L'ERREUR CATÉGORIELLE", note:"Chercher l'université après avoir visité tous ses bâtiments : la faute n'est pas de fait mais de grammaire."},
    en:{nom:"THE CATEGORY MISTAKE", note:"Asking to see the university after touring every building: the error is grammatical, not factual."} },
  { lvl:31, types:["Philo. Esprit","Philo. Langage"], img:null,
    fr:{nom:"LE FANTÔME DANS LA MACHINE", note:"Le dualisme cartésien n'est pas faux, il est mal formé ; savoir-comment ne se réduit pas à savoir-que."},
    en:{nom:"THE GHOST IN THE MACHINE", note:"Cartesian dualism is not false but ill-formed; knowing-how does not reduce to knowing-that."} },
]},

"096": { debut:1924, fin:1978, learn:[8,8,41], stages:[
  { lvl:1,  types:["Logique"], img:null,
    fr:{nom:"L'ÉTUDIANT DU CERCLE DE VIENNE", note:"Il assiste aux réunions sans jamais partager le positivisme de ses hôtes."},
    en:{nom:"THE VIENNA CIRCLE STUDENT", note:"He attends the meetings without ever sharing his hosts' positivism."} },
  { lvl:8,  types:["Logique","Philo. Sciences"], img:null,
    fr:{nom:"L'INCOMPLÉTUDE", note:"Tout système assez riche contient un énoncé vrai qu'il ne peut prouver — et ne peut prouver sa propre cohérence."},
    en:{nom:"INCOMPLETENESS", note:"Any sufficiently rich system holds a true statement it cannot prove — nor can it prove its own consistency."} },
  { lvl:21, types:["Logique","Philo. Sciences","Réalisme"], img:null,
    fr:{nom:"LE PLATONICIEN DE PRINCETON", note:"Les objets mathématiques existent et se perçoivent ; il promène Einstein et finit par refuser de s'alimenter."},
    en:{nom:"THE PRINCETON PLATONIST", note:"Mathematical objects exist and are perceived; he walks with Einstein and ends by refusing to eat."} },
]},

"097": { debut:1918, fin:1983, learn:[16,16,16], stages:[
  { lvl:1,  types:["Logique"], img:null,
    fr:{nom:"L'ÉCOLE DE VARSOVIE", note:"Élève de Leśniewski dans la plus forte école de logique du monde ; il change son nom pour survivre."},
    en:{nom:"THE WARSAW SCHOOL", note:"Leśniewski's student in the world's strongest school of logic; he changes his name to survive."} },
  { lvl:22, types:["Logique","Philo. Langage"], img:null,
    fr:{nom:"LE DERNIER BATEAU", note:"Il quitte la Pologne en août 1939 pour un congrès ; presque toute sa famille est assassinée derrière lui."},
    en:{nom:"THE LAST SHIP", note:"He leaves Poland in August 1939 for a congress; nearly all his family is murdered behind him."} },
]},

"098": { debut:1926, fin:2005, learn:[17,17,57], stages:[
  { lvl:1,  types:["Philo. Sciences"], img:null,
    fr:{nom:"L'ORNITHOLOGUE DE NOUVELLE-GUINÉE", note:"Deux ans et demi à collecter des oiseaux dans la jungle ; il y voit les espèces se séparer géographiquement."},
    en:{nom:"THE NEW GUINEA ORNITHOLOGIST", note:"Two and a half years collecting birds in the jungle; there he sees species split geographically."} },
  { lvl:57, types:["Philo. Sciences"], img:null,
    fr:{nom:"L'HISTORIEN DE LA BIOLOGIE", note:"À près de quatre-vingts ans il écrit l'histoire de sa discipline pour prouver qu'elle n'est pas de la physique."},
    en:{nom:"THE HISTORIAN OF BIOLOGY", note:"Near eighty he writes his field's history to prove it is not physics."} },
]},

"099": { debut:1922, fin:1962, learn:[28,36,22], stages:[
  { lvl:1,  types:["Existentialisme"], img:null,
    fr:{nom:"LE BIBLIOTHÉCAIRE", note:"Sorti de l'École des chartes, il classe des médailles au Cabinet, et mène la nuit une tout autre vie."},
    en:{nom:"THE LIBRARIAN", note:"Out of the École des chartes, he catalogues medals by day and leads quite another life by night."} },
  { lvl:28, types:["Existentialisme","Esthétique"], img:null,
    fr:{nom:"LA PART MAUDITE", note:"Une économie non de la rareté mais de l'excès : le vrai problème est de dépenser le surplus."},
    en:{nom:"THE ACCURSED SHARE", note:"An economy not of scarcity but of excess: the real problem is spending the surplus."} },
]},

"100": { debut:1932, fin:1981, learn:[22,5,43], stages:[
  { lvl:1,  types:["Philo. Esprit"], img:null,
    fr:{nom:"LE PSYCHIATRE DE SAINTE-ANNE", note:"Une thèse sur le cas Aimée qui enthousiasme les surréalistes plus que les médecins."},
    en:{nom:"THE SAINTE-ANNE PSYCHIATRIST", note:"A thesis on the Aimée case that excites the surrealists more than the physicians."} },
  { lvl:22, types:["Structuralisme","Philo. Esprit"], img:null,
    fr:{nom:"LE RETOUR À FREUD", note:"Le séminaire commence ; l'inconscient est structuré comme un langage, et la scission avec l'IPA suit."},
    en:{nom:"THE RETURN TO FREUD", note:"The seminar begins; the unconscious is structured like a language, and the split from the IPA follows."} },
  { lvl:43, types:["Structuralisme","Philo. Esprit"], img:null,
    fr:{nom:"LES NŒUDS", note:"Réel, symbolique, imaginaire noués borroméennement ; il finit par enseigner presque sans parler."},
    en:{nom:"THE KNOTS", note:"Real, symbolic, imaginary tied borromeanly; he ends by teaching almost without speaking."} },
]},

"101": { debut:1921, fin:1969, learn:[24,24,46], stages:[
  { lvl:1,  types:["Esthétique"], img:null,
    fr:{nom:"L'ÉLÈVE DE BERG", note:"Il part à Vienne étudier la composition ; il restera toute sa vie un musicien qui fait de la philosophie."},
    en:{nom:"BERG'S PUPIL", note:"He goes to Vienna to study composition; he remains all his life a musician doing philosophy."} },
  { lvl:24, types:["Théorie Critique","Esthétique"], img:null,
    fr:{nom:"L'EXILÉ DE CALIFORNIE", note:"À Los Angeles, avec Horkheimer : la raison qui devait libérer a produit l'industrie culturelle et pire."},
    en:{nom:"THE CALIFORNIA EXILE", note:"In Los Angeles, with Horkheimer: the reason meant to liberate produced the culture industry, and worse."} },
  { lvl:46, types:["Théorie Critique","Esthétique"], img:null,
    fr:{nom:"LA DIALECTIQUE NÉGATIVE", note:"Aucune synthèse ne rachète le négatif ; les étudiants de 68 le chahutent et il en meurt presque."},
    en:{nom:"NEGATIVE DIALECTICS", note:"No synthesis redeems the negative; the students of '68 heckle him and it nearly kills him."} },
]},

"102": { debut:1924, fin:1975, learn:[40,35,28], stages:[
  { lvl:1,  types:["Existentialisme"], img:null,
    fr:{nom:"L'ÉTUDIANTE DE MARBOURG", note:"À dix-huit ans elle suit Heidegger, puis Jaspers ; sa thèse porte sur l'amour chez Augustin."},
    en:{nom:"THE MARBURG STUDENT", note:"At eighteen she studies under Heidegger, then Jaspers; her thesis is on love in Augustine."} },
  { lvl:28, types:["Philo. Politique","Existentialisme"], img:null,
    fr:{nom:"L'APATRIDE", note:"Dix-huit ans sans passeport, le camp de Gurs, la fuite par Lisbonne ; puis un livre sur ce qui l'a produite."},
    en:{nom:"THE STATELESS", note:"Eighteen years without a passport, the camp at Gurs, escape via Lisbon; then a book on what produced her."} },
  { lvl:40, types:["Philo. Politique","Existentialisme"], img:null,
    fr:{nom:"LA CHRONIQUEUSE DE JÉRUSALEM", note:"Elle voit dans l'accusé un fonctionnaire sans pensée, non un monstre — et perd la moitié de ses amis."},
    en:{nom:"THE JERUSALEM REPORTER", note:"She sees in the accused a thoughtless functionary, not a monster — and loses half her friends."} },
]},

"103": { debut:1926, fin:1961, learn:[20,36,20], stages:[
  { lvl:1,  types:["Phénoménologie"], img:null,
    fr:{nom:"LE NORMALIEN", note:"Rue d'Ulm avec Sartre et Beauvoir ; il ira lire à Louvain les inédits de Husserl sauvés des nazis."},
    en:{nom:"THE NORMALIEN", note:"Rue d'Ulm with Sartre and Beauvoir; he will read at Louvain the Husserl papers saved from the Nazis."} },
  { lvl:20, types:["Phénoménologie","Existentialisme"], img:null,
    fr:{nom:"LE CORPS PROPRE", note:"Je ne suis pas devant mon corps, je suis mon corps : la perception précède la conscience qui la thématise."},
    en:{nom:"THE LIVED BODY", note:"I am not before my body, I am my body: perception precedes the consciousness that thematises it."} },
  { lvl:36, types:["Phénoménologie","Existentialisme"], img:null,
    fr:{nom:"LA CHAIR DU MONDE", note:"Le manuscrit s'arrête net : il meurt à cinquante-trois ans, Descartes ouvert sur son bureau."},
    en:{nom:"THE FLESH OF THE WORLD", note:"The manuscript stops short: he dies at fifty-three, Descartes open on his desk."} },
]},

"104": { debut:1929, fin:1992, learn:[33,33,33], stages:[
  { lvl:1,  types:["Philo. Droit"], img:null,
    fr:{nom:"L'AVOCAT DE CHANCERY", note:"Huit ans au barreau, une réputation d'esprit redoutable et aucune envie d'enseigner."},
    en:{nom:"THE CHANCERY BARRISTER", note:"Eight years at the bar, a reputation for formidable wit and no wish to teach."} },
  { lvl:33, types:["Philo. Droit"], img:null,
    fr:{nom:"LE CONCEPT DE DROIT", note:"Le droit n'est pas un ordre appuyé d'un revolver : c'est l'union de règles primaires et secondaires."},
    en:{nom:"THE CONCEPT OF LAW", note:"Law is not an order backed by a gun: it is the union of primary and secondary rules."} },
]},

"105": { debut:1929, fin:1989, learn:[8,8,8], stages:[
  { lvl:1,  types:["Positivisme"], img:null,
    fr:{nom:"L'ÉMISSAIRE À VIENNE", note:"Ryle l'envoie à vingt-deux ans assister aux réunions du Cercle ; il en rapporte le vérificationnisme."},
    en:{nom:"THE ENVOY TO VIENNA", note:"Ryle sends him at twenty-two to attend the Circle's meetings; he brings back verificationism."} },
  { lvl:30, types:["Positivisme","Empirisme"], img:null,
    fr:{nom:"LE PHILOSOPHE PUBLIC", note:"Télévision, football et mondanités ; il passera le reste de sa vie à rapiécer un livre qu'il sait faux."},
    en:{nom:"THE PUBLIC PHILOSOPHER", note:"Television, football and society; he spends the rest of his life patching a book he knows is wrong."} },
]},

"106": { debut:1929, fin:1960, learn:[27,27,27], stages:[
  { lvl:1,  types:["Philo. Langage"], img:null,
    fr:{nom:"LE CLASSICISTE", note:"Formé sur Aristote et Leibniz, il apporte à la philosophie une exigence de philologue."},
    en:{nom:"THE CLASSICIST", note:"Trained on Aristotle and Leibniz, he brings a philologist's exactness to philosophy."} },
  { lvl:27, types:["Philo. Langage"], img:null,
    fr:{nom:"QUAND DIRE C'EST FAIRE", note:"« Oui, je le veux » ne décrit rien : certaines phrases accomplissent l'acte qu'elles énoncent."},
    en:{nom:"HOW TO DO THINGS WITH WORDS", note:"\"I do\" describes nothing: some sentences perform the act they state."} },
]},

"107": { debut:1928, fin:2001, learn:[33,33,33], stages:[
  { lvl:1,  types:["Esthétique"], img:null,
    fr:{nom:"L'ÉCOLE DE VIENNE", note:"Formé chez Schlosser, il fuit l'Autriche en 1936 et écoute les radios allemandes pour la BBC."},
    en:{nom:"THE VIENNA SCHOOL", note:"Trained under Schlosser, he flees Austria in 1936 and monitors German radio for the BBC."} },
  { lvl:33, types:["Esthétique","Philo. Sciences"], img:null,
    fr:{nom:"L'ŒIL INNOCENT", note:"On ne voit jamais sans attente : l'artiste corrige un schéma appris, il ne copie pas le monde."},
    en:{nom:"THE INNOCENT EYE", note:"One never sees without expectation: the artist corrects a learned schema, he does not copy the world."} },
]},

"108": { debut:1928, fin:1998, learn:[51,41,28], stages:[
  { lvl:1,  types:["Constructivisme"], img:null,
    fr:{nom:"LE MARCHAND D'ART", note:"Il tient une galerie à Boston pendant ses études et finance sa thèse en vendant des tableaux."},
    en:{nom:"THE ART DEALER", note:"He runs a Boston gallery while studying and funds his thesis by selling paintings."} },
  { lvl:28, types:["Constructivisme"], img:null,
    fr:{nom:"LE NOUVEAU PROBLÈME DE L'INDUCTION", note:"Vleu : vert avant 2050, bleu après. Les mêmes observations confirment deux prédictions contraires."},
    en:{nom:"THE NEW RIDDLE OF INDUCTION", note:"Grue: green before 2050, blue after. The same evidence confirms two opposite predictions."} },
  { lvl:41, types:["Esthétique","Constructivisme"], img:null,
    fr:{nom:"LES LANGAGES DE L'ART", note:"La bonne question n'est pas « qu'est-ce que l'art ? » mais « quand y a-t-il art ? »"},
    en:{nom:"LANGUAGES OF ART", note:"The right question is not \"what is art?\" but \"when is there art?\""} },
]},

"109": { debut:1926, fin:2000, learn:[26,26,35], stages:[
  { lvl:1,  types:["Empirisme"], img:null,
    fr:{nom:"LE VOYAGEUR D'EUROPE CENTRALE", note:"Une bourse le mène à Vienne, Prague et Varsovie : Carnap, puis Tarski, en une seule année."},
    en:{nom:"THE CENTRAL EUROPEAN TRAVELLER", note:"A fellowship takes him to Vienna, Prague and Warsaw: Carnap, then Tarski, in a single year."} },
  { lvl:26, types:["Empirisme"], img:null,
    fr:{nom:"LES DEUX DOGMES", note:"Ni analytique/synthétique ni réductionnisme ne tiennent : nos croyances comparaissent en corps devant l'expérience."},
    en:{nom:"TWO DOGMAS", note:"Neither the analytic/synthetic split nor reductionism holds: our beliefs face experience as a corporate body."} },
  { lvl:35, types:["Empirisme","Philo. Langage"], img:null,
    fr:{nom:"MOT ET CHOSE", note:"Gavagai : rien dans le comportement ne tranche entre « lapin » et « parties de lapin »."},
    en:{nom:"WORD AND OBJECT", note:"Gavagai: nothing in behaviour decides between \"rabbit\" and \"undetached rabbit parts\"."} },
]},

"110": { debut:1930, fin:1994, learn:[34,10,34], stages:[
  { lvl:1,  types:["Éthique des Vertus"], img:"William Frankena, 1964.jpg",
    fr:{nom:"LE CALVINISTE DU MICHIGAN", note:"Formé à Calvin College, il gardera d'une éducation religieuse le goût de la clarté doctrinale."},
    en:{nom:"THE MICHIGAN CALVINIST", note:"Trained at Calvin College, he keeps from a religious upbringing a taste for doctrinal clarity."} },
  { lvl:34, types:["Éthique des Vertus","Déontologie"], img:"William Frankena, 1978.jpg",
    fr:{nom:"LE MANUEL D'ÉTHIQUE", note:"Un petit livre qui apprend à deux générations à distinguer méta-éthique, normatif et appliqué."},
    en:{nom:"THE ETHICS PRIMER", note:"A small book that teaches two generations to separate meta-ethics, normative and applied."} },
]},

"111": { debut:1939, fin:1994, learn:[22,22,1], stages:[
  { lvl:1,  types:["Esthétique"], img:null,
    fr:{nom:"AVANT-GARDE ET KITSCH", note:"Un douanier de trente ans publie dans Partisan Review l'article qui fera de lui un pouvoir."},
    en:{nom:"AVANT-GARDE AND KITSCH", note:"A thirty-year-old customs clerk publishes in Partisan Review the essay that makes him a power."} },
  { lvl:22, types:["Esthétique"], img:null,
    fr:{nom:"LA PEINTURE MODERNISTE", note:"Chaque art doit s'épurer vers ce qui lui est propre ; pour la peinture, c'est la planéité."},
    en:{nom:"MODERNIST PAINTING", note:"Each art must purify itself toward what is proper to it; for painting, that is flatness."} },
]},

"112": { debut:1934, fin:1989, learn:[23,29,23], stages:[
  { lvl:1,  types:["Réalisme"], img:null,
    fr:{nom:"LE FILS DU RÉALISTE", note:"Son père Roy Wood Sellars est philosophe ; il grandit dans le réalisme critique américain."},
    en:{nom:"THE REALIST'S SON", note:"His father Roy Wood Sellars is a philosopher; he grows up inside American critical realism."} },
  { lvl:29, types:["Réalisme","Philo. Esprit"], img:null,
    fr:{nom:"LES DEUX IMAGES", note:"L'image manifeste de l'homme et l'image scientifique doivent être réconciliées, non hiérarchisées."},
    en:{nom:"THE TWO IMAGES", note:"The manifest image of man and the scientific image must be reconciled, not ranked."} },
]},

"113": { debut:1937, fin:2006, learn:[23,14,23], stages:[
  { lvl:1,  types:["Philo. Langage"], img:null,
    fr:{nom:"L'ÉTUDIANT DE PPE", note:"Philosophie, politique et économie à St John's, puis cinq ans dans l'artillerie."},
    en:{nom:"THE PPE STUDENT", note:"Philosophy, politics and economics at St John's, then five years in the artillery."} },
  { lvl:23, types:["Réalisme","Philo. Langage"], img:null,
    fr:{nom:"LA MÉTAPHYSIQUE DESCRIPTIVE", note:"Décrire la structure réelle de notre pensée, plutôt que d'en proposer une meilleure."},
    en:{nom:"DESCRIPTIVE METAPHYSICS", note:"Describe the actual structure of our thought, rather than propose a better one."} },
]},

"114": { debut:1932, fin:1988, learn:[30,36,36], stages:[
  { lvl:1,  types:["Philo. Langage"], img:null,
    fr:{nom:"L'ÉTUDIANT DE CORPUS", note:"Classiques à Oxford, puis un an de maître d'école avant la philosophie."},
    en:{nom:"THE CORPUS STUDENT", note:"Classics at Oxford, then a year of schoolmastering before philosophy."} },
  { lvl:30, types:["Philo. Langage"], img:null,
    fr:{nom:"L'IMPLICATURE", note:"Ce qu'une phrase suggère n'est pas ce qu'elle dit : la conversation obéit à des maximes tacites."},
    en:{nom:"IMPLICATURE", note:"What a sentence suggests is not what it says: conversation obeys tacit maxims."} },
]},

"115": { debut:1937, fin:1996, learn:[38,38,23], stages:[
  { lvl:1,  types:["Philo. Sciences"], img:null,
    fr:{nom:"LE PSYCHOLOGUE SOCIAL", note:"Formé à Berkeley, il passe sa vie à se demander comment une méthode peut se corriger elle-même."},
    en:{nom:"THE SOCIAL PSYCHOLOGIST", note:"Berkeley-trained, he spends his life asking how a method can correct itself."} },
  { lvl:38, types:["Philo. Sciences"], img:null,
    fr:{nom:"L'ÉPISTÉMOLOGIE ÉVOLUTIONNISTE", note:"La connaissance progresse comme les espèces : variation aveugle et rétention sélective."},
    en:{nom:"EVOLUTIONARY EPISTEMOLOGY", note:"Knowledge advances as species do: blind variation and selective retention."} },
]},

"116": { debut:1936, fin:1985, learn:[11,23,23], stages:[
  { lvl:1,  types:["Esthétique"], img:null,
    fr:{nom:"L'ÉTUDIANT DE YALE", note:"Formé dans l'analyse, il choisit l'esthétique quand presque personne n'y voit une discipline sérieuse."},
    en:{nom:"THE YALE STUDENT", note:"Analytically trained, he chooses aesthetics when almost no one takes it for a serious field."} },
  { lvl:23, types:["Esthétique"], img:null,
    fr:{nom:"LE TRAITÉ D'ESTHÉTIQUE", note:"Huit cents pages qui donnent à l'esthétique analytique son premier manuel systématique."},
    en:{nom:"THE AESTHETICS TREATISE", note:"Eight hundred pages giving analytic aesthetics its first systematic textbook."} },
]},

"117": { debut:1938, fin:1981, learn:[19,19,19], stages:[
  { lvl:1, types:["Esthétique"], img:null,
    fr:{nom:"L'ART INDÉFINISSABLE", note:"Chercher les conditions nécessaires de l'art est une erreur de méthode : c'est un concept ouvert."},
    en:{nom:"ART UNDEFINABLE", note:"Seeking necessary conditions for art is a methodological error: it is an open concept."} },
]},

"118": { debut:1939, fin:1980, learn:[19,30,35], stages:[
  { lvl:1,  types:["Structuralisme"], img:null,
    fr:{nom:"LE PENSIONNAIRE DU SANATORIUM", note:"La tuberculose lui vole huit ans et lui donne le temps de lire Michelet, Marx et Gide."},
    en:{nom:"THE SANATORIUM PATIENT", note:"Tuberculosis steals eight years from him and gives him time to read Michelet, Marx and Gide."} },
  { lvl:19, types:["Structuralisme","Esthétique"], img:null,
    fr:{nom:"LE MYTHOLOGUE", note:"Le catch, le bifteck, la DS : la bourgeoisie transforme son histoire en nature, et il le montre."},
    en:{nom:"THE MYTHOLOGIST", note:"Wrestling, steak, the Citroën DS: the bourgeoisie turns its history into nature, and he shows it."} },
  { lvl:30, types:["Structuralisme","Esthétique"], img:null,
    fr:{nom:"LA MORT DE L'AUTEUR", note:"La naissance du lecteur se paie de la mort de l'auteur — puis vient le plaisir du texte."},
    en:{nom:"THE DEATH OF THE AUTHOR", note:"The birth of the reader is paid for by the death of the author — then comes the pleasure of the text."} },
]},

"119": { debut:1934, fin:2013, learn:[29,29,24], stages:[
  { lvl:1,  types:["Logique"], img:null,
    fr:{nom:"LE CONVERTI", note:"Catholique à dix-neuf ans, il épouse Anscombe et forme avec elle le couple le plus redouté d'Oxford."},
    en:{nom:"THE CONVERT", note:"A Catholic at nineteen, he marries Anscombe and forms with her Oxford's most feared couple."} },
  { lvl:29, types:["Logique","Philo. Religion"], img:null,
    fr:{nom:"LE THOMISTE ANALYTIQUE", note:"Il relit la logique médiévale avec les outils de Frege, et l'inverse."},
    en:{nom:"THE ANALYTIC THOMIST", note:"He rereads medieval logic with Frege's tools, and the reverse."} },
]},

"120": { debut:1937, fin:2001, learn:[22,21,21], stages:[
  { lvl:1,  types:["Philo. Esprit"], img:null,
    fr:{nom:"LA CONVERTIE DE ST HUGH'S", note:"Catholique à dix-huit ans ; elle protestera contre le doctorat honoris causa décerné à Truman."},
    en:{nom:"THE ST HUGH'S CONVERT", note:"A Catholic at eighteen; she will protest the honorary degree given to Truman."} },
  { lvl:21, types:["Éthique des Vertus","Philo. Esprit"], img:null,
    fr:{nom:"L'INTENTION", note:"L'action se décrit sous une description ; et la morale moderne devrait se taire faute de législateur."},
    en:{nom:"INTENTION", note:"Action is described under a description; and modern moral philosophy should fall silent for want of a lawgiver."} },
]},

"121": { debut:1946, fin:1997, learn:[13,19,13], stages:[
  { lvl:1,  types:["Philo. Sciences"], img:null,
    fr:{nom:"L'ÉTUDIANT D'OXFORD", note:"Marine marchande puis St Edmund Hall ; il lit Wittgenstein contre le positivisme ambiant."},
    en:{nom:"THE OXFORD STUDENT", note:"The merchant navy then St Edmund Hall; he reads Wittgenstein against the ambient positivism."} },
  { lvl:19, types:["Philo. Langage","Philo. Sciences"], img:null,
    fr:{nom:"LES AZANDÉ", note:"Leur sorcellerie n'est pas une mauvaise science : c'est une autre façon de rendre la vie intelligible."},
    en:{nom:"THE AZANDE", note:"Their witchcraft is not bad science: it is another way of making life intelligible."} },
]},

"122": { debut:1935, fin:2003, learn:[36,39,48], stages:[
  { lvl:1,  types:["Philo. Esprit"], img:null,
    fr:{nom:"L'ÉTUDIANT DE CLASSIQUES", note:"Une thèse sur le Philèbe, la marine, puis une reconversion tardive à la logique."},
    en:{nom:"THE CLASSICS STUDENT", note:"A thesis on the Philebus, the navy, then a late conversion to logic."} },
  { lvl:36, types:["Philo. Langage","Philo. Esprit"], img:null,
    fr:{nom:"LE MONISME ANOMAL", note:"Tout événement mental est physique, et pourtant aucune loi stricte ne relie les deux vocabulaires."},
    en:{nom:"ANOMALOUS MONISM", note:"Every mental event is physical, yet no strict law connects the two vocabularies."} },
]},

"123": { debut:1932, fin:1991, learn:[30,30,46], stages:[
  { lvl:1,  types:["Philo. Esprit"], img:null,
    fr:{nom:"L'ÉTUDIANT DE BERKELEY", note:"Formé en Californie, il enseignera presque toute sa vie à Irvine."},
    en:{nom:"THE BERKELEY STUDENT", note:"California-trained, he teaches nearly all his life at Irvine."} },
  { lvl:46, types:["Philo. Esprit","Éthique des Vertus"], img:null,
    fr:{nom:"LES DROITS ET LES PERSONNES", note:"Un droit n'est pas une propriété mais une relation morale entre des personnes."},
    en:{nom:"RIGHTS AND PERSONS", note:"A right is not a property but a moral relation between persons."} },
]},

"124": { debut:1946, fin:2012, learn:[14,28,20], stages:[
  { lvl:1,  types:["Philo. Esprit"], img:null,
    fr:{nom:"LE SOLDAT DEVENU PHILOSOPHE", note:"Six ans dans l'armée britannique en Inde et en Birmanie avant Glasgow et Oxford."},
    en:{nom:"THE SOLDIER TURNED PHILOSOPHER", note:"Six years in the British army in India and Burma before Glasgow and Oxford."} },
  { lvl:28, types:["Utilitarisme","Philo. Esprit","Réalisme"], img:null,
    fr:{nom:"L'UTILITARISME SANS DÉTOUR", note:"Il défend la version la plus dure et publie la critique de Williams dans le même volume."},
    en:{nom:"UTILITARIANISM UNVARNISHED", note:"He defends the hardest version and prints Williams's attack in the same volume."} },
]},

"125": { debut:1937, fin:2002, learn:[16,27,45], stages:[
  { lvl:1,  types:["Déontologie"], img:null,
    fr:{nom:"LE PRISONNIER DE LA VOIE FERRÉE", note:"Capturé à Singapour, il travaille sur la voie ferrée de Birmanie ; il en tirera l'idée qu'une morale doit tenir en enfer."},
    en:{nom:"THE RAILWAY PRISONER", note:"Captured at Singapore, he works on the Burma railway; he concludes a morality must hold in hell."} },
  { lvl:45, types:["Déontologie","Utilitarisme"], img:null,
    fr:{nom:"LES DEUX NIVEAUX", note:"Intuitif au quotidien, critique dans la réflexion : l'utilitarisme absorbe enfin ses objections."},
    en:{nom:"THE TWO LEVELS", note:"Intuitive in daily life, critical in reflection: utilitarianism finally absorbs its objections."} },
]},

"126": { debut:1935, fin:1981, learn:[43,43,43], stages:[
  { lvl:1,  types:["Scepticisme"], img:null,
    fr:{nom:"L'AUSTRALIEN", note:"Sydney puis Oxford ; il gardera de l'Australie un goût du naturalisme sans façons."},
    en:{nom:"THE AUSTRALIAN", note:"Sydney then Oxford; he keeps from Australia a taste for no-nonsense naturalism."} },
  { lvl:43, types:["Scepticisme","Éthique des Vertus"], img:null,
    fr:{nom:"INVENTER LE BIEN ET LE MAL", note:"Il n'existe pas de valeurs objectives : toutes nos affirmations morales sont fausses, et il faut vivre avec."},
    en:{nom:"INVENTING RIGHT AND WRONG", note:"There are no objective values: all our moral claims are false, and we must live with it."} },
]},

"127": { debut:1939, fin:2010, learn:[63,29,34], stages:[
  { lvl:1,  types:["Éthique des Vertus"], img:null,
    fr:{nom:"L'ÉTUDIANTE DE SOMERVILLE", note:"Petite-fille d'un président américain, élevée sans école ; elle entre à Oxford avec Murdoch et Anscombe."},
    en:{nom:"THE SOMERVILLE STUDENT", note:"Granddaughter of an American president, raised without schooling; she enters Oxford alongside Murdoch and Anscombe."} },
  { lvl:63, types:["Éthique des Vertus","Déontologie"], img:null,
    fr:{nom:"LA BONTÉ NATURELLE", note:"À quatre-vingt-un ans : le bien humain se juge comme la santé d'un organisme, selon sa forme de vie."},
    en:{nom:"NATURAL GOODNESS", note:"At eighty-one: human good is judged like an organism's health, according to its life-form."} },
]},

"128": { debut:1946, fin:1996, learn:[14,14,20], stages:[
  { lvl:1, types:["Esthétique"], img:null,
    fr:{nom:"LES CONCEPTS ESTHÉTIQUES", note:"Gracieux, poignant, criard : ces mots ne s'appliquent par aucune règle, et pourtant on s'accorde."},
    en:{nom:"AESTHETIC CONCEPTS", note:"Graceful, poignant, garish: no rule governs these words, and yet we agree."} },
]},

"129": { debut:1943, fin:1996, learn:[20,20,20], stages:[
  { lvl:1,  types:["Philo. Sciences"], img:null,
    fr:{nom:"LE PHYSICIEN DU RADAR", note:"Docteur en physique théorique, il passe la guerre à travailler sur les contre-mesures radar."},
    en:{nom:"THE RADAR PHYSICIST", note:"A doctor of theoretical physics, he spends the war on radar countermeasures."} },
  { lvl:5,  types:["Philo. Sciences"], img:null,
    fr:{nom:"L'ÉPIPHANIE ARISTOTE", note:"En lisant la Physique il comprend d'un coup qu'Aristote n'est pas un mauvais Newton, mais un autre monde."},
    en:{nom:"THE ARISTOTLE EPIPHANY", note:"Reading the Physics he grasps at once that Aristotle is not a bad Newton but another world."} },
  { lvl:20, types:["Philo. Sciences","Constructivisme"], img:null,
    fr:{nom:"LA STRUCTURE", note:"La science normale résout des énigmes jusqu'à ce qu'un paradigme cède ; les deux ne se traduisent pas l'un dans l'autre."},
    en:{nom:"THE STRUCTURE", note:"Normal science solves puzzles until a paradigm gives way; the two do not translate into each other."} },
]},

"130": { debut:1940, fin:1974, learn:[31,31,31], stages:[
  { lvl:1,  types:["Philo. Sciences"], img:null,
    fr:{nom:"LE RÉSISTANT", note:"Juif hongrois sous l'occupation nazie, il change de nom et perd sa mère et sa grand-mère à Auschwitz."},
    en:{nom:"THE RESISTER", note:"A Hungarian Jew under Nazi occupation, he changes his name and loses his mother and grandmother at Auschwitz."} },
  { lvl:11, types:["Philo. Sciences"], img:null,
    fr:{nom:"LE PRISONNIER DE RECSK", note:"Trois ans dans un camp stalinien hongrois ; il fuit en 1956 vers l'Angleterre."},
    en:{nom:"THE PRISONER OF RECSK", note:"Three years in a Hungarian Stalinist camp; he flees to England in 1956."} },
  { lvl:24, types:["Philo. Sciences"], img:null,
    fr:{nom:"PREUVES ET RÉFUTATIONS", note:"Une classe imaginaire réinvente un théorème en le cassant ; puis les programmes de recherche remplacent la falsification sèche."},
    en:{nom:"PROOFS AND REFUTATIONS", note:"An imaginary class reinvents a theorem by breaking it; then research programmes replace bare falsification."} },
]},

"131": { debut:1947, fin:1994, learn:[29,29,35], stages:[
  { lvl:1,  types:["Philo. Sciences"], img:null,
    fr:{nom:"L'OFFICIER BLESSÉ", note:"Une balle dans la colonne sur le front de l'Est le laisse infirme à vingt ans ; il voulait être chanteur d'opéra."},
    en:{nom:"THE WOUNDED OFFICER", note:"A bullet in the spine on the Eastern Front leaves him crippled at twenty; he had wanted to be an opera singer."} },
  { lvl:12, types:["Philo. Sciences"], img:null,
    fr:{nom:"L'ÉLÈVE HÉRÉTIQUE", note:"Formé par Popper, il retourne méthodiquement ses armes contre toute méthode."},
    en:{nom:"THE HERETIC PUPIL", note:"Trained by Popper, he methodically turns his weapons against method itself."} },
  { lvl:29, types:["Philo. Sciences","Anarchisme"], img:null,
    fr:{nom:"CONTRE LA MÉTHODE", note:"Le seul principe qui n'entrave pas le progrès : tout est bon. Galilée lui-même a triché."},
    en:{nom:"AGAINST METHOD", note:"The only principle that does not inhibit progress: anything goes. Galileo himself cheated."} },
]},

"132": { debut:1939, fin:1980, learn:[27,32,32], stages:[
  { lvl:1,  types:["Marxisme"], img:null,
    fr:{nom:"LE PRISONNIER DE GUERRE", note:"Reçu à l'ENS puis mobilisé, il passe cinq ans en stalag avant d'avoir suivi un seul cours."},
    en:{nom:"THE PRISONER OF WAR", note:"Admitted to the ENS then mobilised, he spends five years in a stalag before attending a single class."} },
  { lvl:27, types:["Marxisme","Structuralisme"], img:null,
    fr:{nom:"LA COUPURE ÉPISTÉMOLOGIQUE", note:"Il y a deux Marx séparés par une rupture, et le second n'est pas un humaniste."},
    en:{nom:"THE EPISTEMOLOGICAL BREAK", note:"There are two Marxes separated by a rupture, and the second is no humanist."} },
  { lvl:32, types:["Marxisme","Structuralisme"], img:null,
    fr:{nom:"LES APPAREILS IDÉOLOGIQUES", note:"L'idéologie ne trompe pas : elle nous constitue en sujets, en nous interpellant dans la rue."},
    en:{nom:"THE IDEOLOGICAL APPARATUSES", note:"Ideology does not deceive: it constitutes us as subjects, hailing us in the street."} },
]},

"133": { debut:1946, fin:1984, learn:[30,30,31], stages:[
  { lvl:1,  types:["Postmodernisme"], img:null,
    fr:{nom:"LE NORMALIEN INSOMNIAQUE", note:"Rue d'Ulm, une tentative de suicide, la psychologie et l'internement volontaire à Sainte-Anne."},
    en:{nom:"THE SLEEPLESS NORMALIEN", note:"Rue d'Ulm, a suicide attempt, psychology and a voluntary stay at Sainte-Anne."} },
  { lvl:16, types:["Postmodernisme"], img:null,
    fr:{nom:"L'ARCHÉOLOGUE", note:"L'Histoire de la folie, puis Les Mots et les choses : chaque époque a son sol de savoir, invisible à ceux qui y marchent."},
    en:{nom:"THE ARCHAEOLOGIST", note:"Madness and Civilization, then The Order of Things: each age has its ground of knowledge, invisible to those who walk on it."} },
  { lvl:30, types:["Postmodernisme","Théorie Critique"], img:null,
    fr:{nom:"LE GÉNÉALOGISTE", note:"La prison, la sexualité : le pouvoir ne réprime pas d'abord, il produit des corps et des savoirs."},
    en:{nom:"THE GENEALOGIST", note:"The prison, sexuality: power does not first repress, it produces bodies and knowledges."} },
]},

"134": { debut:1950, fin:1998, learn:[30,34,30], stages:[
  { lvl:1,  types:["Postmodernisme"], img:null,
    fr:{nom:"LE MILITANT D'ALGÉRIE", note:"Professeur à Constantine, puis douze ans à Socialisme ou Barbarie ; il rompt avec le marxisme sans rejoindre l'ordre."},
    en:{nom:"THE ALGERIAN MILITANT", note:"A teacher in Constantine, then twelve years with Socialisme ou Barbarie; he breaks with Marxism without joining the order."} },
  { lvl:34, types:["Postmodernisme"], img:null,
    fr:{nom:"LE DIFFÉREND", note:"Un tort qu'aucun tribunal ne peut dire, faute d'un idiome commun aux deux parties."},
    en:{nom:"THE DIFFEREND", note:"A wrong no court can state, for want of an idiom shared by both parties."} },
]},

"135": { debut:1944, fin:1995, learn:[37,25,29], stages:[
  { lvl:1,  types:["Postmodernisme"], img:null,
    fr:{nom:"L'HISTORIEN DE LA PHILOSOPHIE", note:"Hume, Nietzsche, Bergson, Spinoza : il dit prendre les auteurs par derrière pour leur faire des enfants monstrueux."},
    en:{nom:"THE HISTORIAN OF PHILOSOPHY", note:"Hume, Nietzsche, Bergson, Spinoza: he says he takes authors from behind to give them monstrous children."} },
  { lvl:25, types:["Postmodernisme"], img:null,
    fr:{nom:"LA DIFFÉRENCE EN SOI", note:"Renverser le platonisme : la différence ne dérive pas de l'identité, c'est l'inverse."},
    en:{nom:"DIFFERENCE IN ITSELF", note:"Overturn Platonism: difference does not derive from identity, but the reverse."} },
  { lvl:29, types:["Postmodernisme","Philo. Technique"], img:null,
    fr:{nom:"LA RENCONTRE AVEC GUATTARI", note:"L'Anti-Œdipe puis Mille Plateaux : le rhizome contre l'arbre, la machine contre la structure."},
    en:{nom:"THE MEETING WITH GUATTARI", note:"Anti-Oedipus then A Thousand Plateaus: the rhizome against the tree, the machine against the structure."} },
]},

"136": { debut:1948, fin:2013, learn:[17,34,37], stages:[
  { lvl:1,  types:["Esthétique"], img:null,
    fr:{nom:"LE GRAVEUR", note:"Il expose ses estampes pendant quinze ans avant de renoncer à faire de l'art pour en parler."},
    en:{nom:"THE PRINTMAKER", note:"He exhibits his prints for fifteen years before giving up making art to talk about it."} },
  { lvl:17, types:["Esthétique"], img:null,
    fr:{nom:"LE MONDE DE L'ART", note:"Les boîtes Brillo de Warhol l'obligent à conclure que l'œil ne suffit pas : il faut une théorie."},
    en:{nom:"THE ARTWORLD", note:"Warhol's Brillo boxes force him to conclude the eye does not suffice: a theory is required."} },
  { lvl:37, types:["Esthétique","Philo. Histoire"], img:null,
    fr:{nom:"LA FIN DE L'ART", note:"Non que l'art cesse, mais qu'il cesse d'avoir une direction historique : tout devient possible en même temps."},
    en:{nom:"THE END OF ART", note:"Not that art stops, but that it stops having a historical direction: everything becomes possible at once."} },
]},

"137": { debut:1949, fin:2020, learn:[26,26,32], stages:[
  { lvl:1, types:["Esthétique"], img:null,
    fr:{nom:"LA THÉORIE INSTITUTIONNELLE", note:"Une chose devient art quand quelqu'un habilité lui confère ce statut au nom du monde de l'art."},
    en:{nom:"THE INSTITUTIONAL THEORY", note:"A thing becomes art when someone entitled confers that status on behalf of the artworld."} },
]},

"138": { debut:1944, fin:2011, learn:[30,34,30], stages:[
  { lvl:1,  types:["Logique"], img:null,
    fr:{nom:"LE DÉCHIFFREUR", note:"Il sert au renseignement militaire, se convertit au catholicisme, et découvre Frege presque oublié."},
    en:{nom:"THE CODEBREAKER", note:"He serves in military intelligence, converts to Catholicism, and finds Frege nearly forgotten."} },
  { lvl:34, types:["Logique","Philo. Langage"], img:null,
    fr:{nom:"LE REJET DU TIERS EXCLU", note:"Il tire de la sémantique une conséquence logique : la mathématique intuitionniste, et le militantisme antiraciste en parallèle."},
    en:{nom:"REJECTING EXCLUDED MIDDLE", note:"He draws a logical consequence from semantics: intuitionist mathematics — alongside anti-racist activism."} },
]},

"139": { debut:1948, fin:2016, learn:[34,34,28], stages:[
  { lvl:1,  types:["Réalisme"], img:null,
    fr:{nom:"LE FILS DU TRADUCTEUR", note:"Élevé en France par un père traducteur communiste ; il militera contre la guerre du Vietnam."},
    en:{nom:"THE TRANSLATOR'S SON", note:"Raised in France by a communist translator father; he will campaign against the Vietnam War."} },
  { lvl:28, types:["Réalisme","Philo. Langage"], img:null,
    fr:{nom:"LA TERRE JUMELLE", note:"Sur une planète où l'eau est XYZ, le mot ne signifie pas la même chose : le sens n'est pas dans la tête."},
    en:{nom:"TWIN EARTH", note:"On a planet where water is XYZ the word means something else: meaning is not in the head."} },
  { lvl:34, types:["Réalisme","Pragmatisme","Philo. Langage"], img:null,
    fr:{nom:"LE RÉALISME INTERNE", note:"Il réfute le cerveau dans la cuve, puis passe sa vie à changer d'avis — par honnêteté, dit-il."},
    en:{nom:"INTERNAL REALISM", note:"He refutes the brain in a vat, then spends his life changing his mind — out of honesty, he says."} },
]},

"140": { debut:1949, fin:2021, learn:[15,15,20], stages:[
  { lvl:1, types:["Scepticisme","Empirisme"], img:null,
    fr:{nom:"LES TROIS PAGES", note:"Deux contre-exemples suffisent à démolir une définition tenue depuis Platon : le vrai, le cru et le justifié ne font pas la connaissance."},
    en:{nom:"THE THREE PAGES", note:"Two counterexamples suffice to demolish a definition held since Plato: true, believed and justified is not knowledge."} },
]},

"141": { debut:1945, fin:null, learn:[13,15,44], stages:[
  { lvl:1,  types:["Philo. Langage"], img:null,
    fr:{nom:"L'ÉLÈVE DE HARRIS", note:"À seize ans il entre à Penn ; il allait abandonner quand il rencontre le linguiste Zellig Harris."},
    en:{nom:"HARRIS'S STUDENT", note:"At sixteen he enters Penn; he is about to drop out when he meets the linguist Zellig Harris."} },
  { lvl:23, types:["Philo. Langage","Anarchisme","Philo. Esprit"], img:null,
    fr:{nom:"LA RESPONSABILITÉ DES INTELLECTUELS", note:"Le Vietnam le fait basculer dans la critique politique, qu'il ne quittera plus."},
    en:{nom:"THE RESPONSIBILITY OF INTELLECTUALS", note:"Vietnam tips him into political criticism, which he never leaves."} },
]},

"142": { debut:1956, fin:2007, learn:[26,26,32], stages:[
  { lvl:1,  types:["Postmodernisme"], img:null,
    fr:{nom:"LE GERMANISTE", note:"Professeur de lycée, traducteur de Brecht et de Marx avant de devenir sociologue."},
    en:{nom:"THE GERMANIST", note:"A secondary school teacher, translator of Brecht and Marx before turning sociologist."} },
  { lvl:26, types:["Postmodernisme"], img:null,
    fr:{nom:"LE DÉSERT DU RÉEL", note:"La copie n'imite plus rien : la carte précède le territoire, et le territoire a disparu."},
    en:{nom:"THE DESERT OF THE REAL", note:"The copy imitates nothing: the map precedes the territory, and the territory is gone."} },
]},

"143": { debut:1951, fin:2021, learn:[29,50,41], stages:[
  { lvl:1,  types:["Philo. Sciences"], img:null,
    fr:{nom:"LE GÉNÉTICIEN DES POPULATIONS", note:"Il introduit l'électrophorèse en génétique et découvre une variabilité que nul n'attendait."},
    en:{nom:"THE POPULATION GENETICIST", note:"He brings electrophoresis into genetics and finds a variability no one expected."} },
  { lvl:41, types:["Philo. Sciences","Matérialisme"], img:null,
    fr:{nom:"LA BIOLOGIE COMME IDÉOLOGIE", note:"L'organisme ne s'adapte pas à un milieu donné : il construit le milieu autant qu'il en dépend."},
    en:{nom:"BIOLOGY AS IDEOLOGY", note:"The organism does not adapt to a given environment: it builds the environment as much as it depends on it."} },
]},

"144": { debut:1949, fin:2023, learn:[23,23,38], stages:[
  { lvl:1,  types:["Philo. Esprit"], img:null,
    fr:{nom:"LE CARTÉSIEN", note:"Sa thèse porte sur Descartes ; il gardera le goût des questions posées le plus simplement possible."},
    en:{nom:"THE CARTESIAN", note:"His thesis is on Descartes; he keeps a taste for questions posed as plainly as possible."} },
  { lvl:38, types:["Philo. Esprit","Éthique des Vertus"], img:null,
    fr:{nom:"DE L'ART DE DIRE DES CONNERIES", note:"Le menteur respecte la vérité en la contournant ; le baratineur s'en moque — et c'est pire."},
    en:{nom:"ON BULLSHIT", note:"The liar honours truth by dodging it; the bullshitter does not care — and that is worse."} },
]},

"145": { debut:1948, fin:2003, learn:[26,26,38], stages:[
  { lvl:1,  types:["Éthique des Vertus"], img:null,
    fr:{nom:"LE PILOTE DE CHASSE", note:"Service national dans la RAF au Canada, puis Oxford ; il gardera un mépris tranquille pour les systèmes."},
    en:{nom:"THE FIGHTER PILOT", note:"National service flying for the RAF in Canada, then Oxford; he keeps a quiet contempt for systems."} },
  { lvl:38, types:["Éthique des Vertus","Scepticisme"], img:null,
    fr:{nom:"LES LIMITES DE LA PHILOSOPHIE", note:"La philosophie morale s'est trompée d'ambition ; les Grecs demandaient comment vivre, pas ce qu'il faut faire."},
    en:{nom:"THE LIMITS OF PHILOSOPHY", note:"Moral philosophy mistook its ambition; the Greeks asked how to live, not what one must do."} },
]},

"146": { debut:1950, fin:2020, learn:[22,41,36], stages:[
  { lvl:1,  types:["Déontologie"], img:null,
    fr:{nom:"L'ÉTUDIANTE DE BARNARD", note:"Barnard puis Cambridge ; elle prendra les cas les plus concrets pour trancher les questions les plus abstraites."},
    en:{nom:"THE BARNARD STUDENT", note:"Barnard then Cambridge; she will take the most concrete cases to settle the most abstract questions."} },
  { lvl:36, types:["Déontologie"], img:null,
    fr:{nom:"LA PASSERELLE", note:"Détourner le tramway est permis, pousser le gros homme ne l'est pas — et il faut expliquer pourquoi."},
    en:{nom:"THE FOOTBRIDGE", note:"Diverting the trolley is permitted, pushing the large man is not — and one must explain why."} },
]},

"147": { debut:1952, fin:2004, learn:[16,16,16], stages:[
  { lvl:1,  types:["Postmodernisme"], img:null,
    fr:{nom:"LE PIED-NOIR D'EL BIAR", note:"Exclu de son lycée d'Alger à douze ans par les lois raciales de Vichy ; il rate deux fois l'entrée à l'ENS."},
    en:{nom:"THE PIED-NOIR OF EL BIAR", note:"Expelled from his Algiers school at twelve by Vichy's racial laws; he fails the ENS entrance twice."} },
  { lvl:16, types:["Postmodernisme","Philo. Langage"], img:null,
    fr:{nom:"L'ANNÉE DES TROIS LIVRES", note:"1967 : trois ouvrages d'un coup ; l'écriture n'est pas seconde par rapport à la parole, et le sens ne se ferme jamais."},
    en:{nom:"THE YEAR OF THREE BOOKS", note:"1967: three books at once; writing is not secondary to speech, and meaning never closes."} },
  { lvl:40, types:["Postmodernisme","Philo. Langage"], img:null,
    fr:{nom:"LE TOURNANT ÉTHIQUE", note:"Spectres de Marx, l'hospitalité, le pardon : la déconstruction se découvre une exigence de justice."},
    en:{nom:"THE ETHICAL TURN", note:"Specters of Marx, hospitality, forgiveness: deconstruction discovers a demand for justice."} },
]},

"148": { debut:1954, fin:null, learn:[21,21,30], stages:[
  { lvl:1,  types:["Philo. Religion"], img:null,
    fr:{nom:"LE CALVINISTE", note:"Il quitte Harvard pour Calvin College après un cours qui lui montre que la foi peut s'argumenter."},
    en:{nom:"THE CALVINIST", note:"He leaves Harvard for Calvin College after a course showing him faith can be argued."} },
  { lvl:30, types:["Philo. Religion","Logique"], img:null,
    fr:{nom:"L'ÉPISTÉMOLOGIE RÉFORMÉE", note:"Croire en Dieu peut être proprement basique : cela n'a pas plus à se prouver que l'existence d'autrui."},
    en:{nom:"REFORMED EPISTEMOLOGY", note:"Belief in God may be properly basic: it needs proving no more than the existence of other minds."} },
]},

"149": { debut:1955, fin:null, learn:[20,23,23], stages:[
  { lvl:1,  types:["Phénoménologie"], img:null,
    fr:{nom:"LA LINGUISTE", note:"Deux doctorats, une pratique analytique, et l'étude du langage des patients déments."},
    en:{nom:"THE LINGUIST", note:"Two doctorates, an analytic practice, and the study of demented patients' language."} },
  { lvl:23, types:["Féminisme","Phénoménologie"], img:null,
    fr:{nom:"LE PARLER-FEMME", note:"Le féminin ne se dit pas dans une langue construite sur l'un ; il faut en inventer la syntaxe."},
    en:{nom:"SPEAKING AS WOMAN", note:"The feminine cannot be said in a language built on the one; its syntax must be invented."} },
]},

"150": { debut:1952, fin:null, learn:[29,18,44], stages:[
  { lvl:1,  types:["Philo. Langage"], img:null,
    fr:{nom:"L'ÉLÈVE D'AUSTIN", note:"Boursier Rhodes à Oxford ; il y milite contre l'apartheid avant de rentrer enseigner à Berkeley."},
    en:{nom:"AUSTIN'S STUDENT", note:"A Rhodes scholar at Oxford; he campaigns against apartheid before returning to teach at Berkeley."} },
  { lvl:18, types:["Philo. Langage"], img:null,
    fr:{nom:"LES ACTES DE LANGAGE", note:"Il systématise Austin : promettre, ordonner, baptiser obéissent à des conditions énonçables."},
    en:{nom:"SPEECH ACTS", note:"He systematises Austin: promising, ordering, naming obey statable conditions."} },
  { lvl:29, types:["Philo. Langage","Philo. Esprit"], img:null,
    fr:{nom:"LA CHAMBRE CHINOISE", note:"Manipuler des symboles selon des règles ne fait pas comprendre le chinois — donc un programme ne pense pas."},
    en:{nom:"THE CHINESE ROOM", note:"Manipulating symbols by rules does not amount to understanding Chinese — so a program does not think."} },
]},

"151": { debut:1949, fin:null, learn:[33,33,14], stages:[
  { lvl:1,  types:["Théorie Critique"], img:null,
    fr:{nom:"L'ADOLESCENT DE NUREMBERG", note:"Les procès lui révèlent à quinze ans ce qu'il avait vécu sans le savoir ; il ne s'en remettra pas."},
    en:{nom:"THE NUREMBERG ADOLESCENT", note:"At fifteen the trials reveal to him what he had lived through unknowing; he never gets over it."} },
  { lvl:14, types:["Théorie Critique","Philo. Politique"], img:null,
    fr:{nom:"L'ESPACE PUBLIC", note:"Les cafés du XVIIIe siècle inventent un lieu où l'argument compte plus que le rang — puis le marché le referme."},
    en:{nom:"THE PUBLIC SPHERE", note:"Eighteenth-century coffee houses invent a place where argument outranks rank — then the market closes it."} },
  { lvl:33, types:["Théorie Critique","Pragmatisme","Philo. Politique"], img:null,
    fr:{nom:"L'AGIR COMMUNICATIONNEL", note:"Parler, c'est déjà supposer qu'on pourrait se justifier ; la raison n'est pas morte, elle est intersubjective."},
    en:{nom:"COMMUNICATIVE ACTION", note:"To speak is already to presuppose one could justify oneself; reason is not dead, it is intersubjective."} },
]},

"152": { debut:1949, fin:2007, learn:[31,41,41], stages:[
  { lvl:1,  types:["Pragmatisme"], img:null,
    fr:{nom:"L'ENFANT TROTSKISTE", note:"Ses parents rompent avec le Parti ; il collectionne les orchidées sauvages et cherche à concilier les deux."},
    en:{nom:"THE TROTSKYIST CHILD", note:"His parents break with the Party; he collects wild orchids and seeks to reconcile the two."} },
  { lvl:31, types:["Pragmatisme"], img:null,
    fr:{nom:"LE MIROIR DE LA NATURE", note:"L'esprit n'est pas un miroir : abandonner l'image, c'est abandonner l'épistémologie comme tribunal."},
    en:{nom:"THE MIRROR OF NATURE", note:"The mind is no mirror: dropping the image means dropping epistemology as a tribunal."} },
  { lvl:41, types:["Pragmatisme","Postmodernisme"], img:null,
    fr:{nom:"L'IRONISTE LIBÉRALE", note:"On peut savoir son vocabulaire contingent et rester attaché à ne pas faire souffrir."},
    en:{nom:"THE LIBERAL IRONIST", note:"One can know one's vocabulary contingent and still be committed to not causing suffering."} },
]},

"153": { debut:1956, fin:2017, learn:[20,28,45], stages:[
  { lvl:1,  types:["Philo. Esprit"], img:null,
    fr:{nom:"LE JEUNE COGNITIVISTE", note:"Columbia puis Princeton ; il rejoint le MIT quand la science cognitive n'a pas encore de nom."},
    en:{nom:"THE YOUNG COGNITIVIST", note:"Columbia then Princeton; he joins MIT when cognitive science has no name yet."} },
  { lvl:20, types:["Philo. Esprit","Philo. Langage"], img:null,
    fr:{nom:"LE MENTALAIS", note:"Penser suppose un langage intérieur avec sa syntaxe — sinon rien n'explique la productivité de la pensée."},
    en:{nom:"MENTALESE", note:"Thinking presupposes an inner language with a syntax — else nothing explains thought's productivity."} },
  { lvl:28, types:["Philo. Esprit","Philo. Langage"], img:null,
    fr:{nom:"LA MODULARITÉ", note:"La perception est cloisonnée et rapide ; le reste de l'esprit est global — et pour cela inexplicable."},
    en:{nom:"MODULARITY", note:"Perception is encapsulated and fast; the rest of the mind is global — and for that reason unexplained."} },
]},

"154": { debut:1958, fin:null, learn:[17,17,29], stages:[
  { lvl:1,  types:["Philo. Esprit"], img:null,
    fr:{nom:"L'ÉLÈVE DE RAWLS", note:"Né à Belgrade, formé à Cornell, Oxford et Harvard ; il gardera de Rawls le sens de l'objectivité morale."},
    en:{nom:"RAWLS'S STUDENT", note:"Born in Belgrade, trained at Cornell, Oxford and Harvard; from Rawls he keeps a sense of moral objectivity."} },
  { lvl:17, types:["Philo. Esprit"], img:null,
    fr:{nom:"LA CHAUVE-SOURIS", note:"Même sachant tout de son sonar, nous ne saurons pas l'effet que cela fait d'en être une."},
    en:{nom:"THE BAT", note:"Even knowing everything about its sonar, we will not know what it is like to be one."} },
  { lvl:29, types:["Philo. Esprit","Éthique des Vertus"], img:null,
    fr:{nom:"LA VUE DE NULLE PART", note:"Il faut tenir ensemble le point de vue de l'intérieur et celui de l'univers, sans dissoudre l'un dans l'autre."},
    en:{nom:"THE VIEW FROM NOWHERE", note:"One must hold together the view from within and the view of the universe, dissolving neither."} },
]},

"155": { debut:1956, fin:2025, learn:[31,36,36], stages:[
  { lvl:1,  types:["Philo. Sciences"], img:null,
    fr:{nom:"L'ÉTUDIANTE DE NEW YORK", note:"Formée en philosophie des sciences classique avant de se demander qui, au juste, produit la science."},
    en:{nom:"THE NEW YORK STUDENT", note:"Trained in classical philosophy of science before asking who exactly produces science."} },
  { lvl:36, types:["Féminisme","Philo. Sciences"], img:null,
    fr:{nom:"L'OBJECTIVITÉ FORTE", note:"Partir des marges rend plus objectif, pas moins : on y voit ce que le centre ne peut pas voir."},
    en:{nom:"STRONG OBJECTIVITY", note:"Starting from the margins makes one more objective, not less: one sees what the centre cannot."} },
]},

"156": { debut:1958, fin:null, learn:[25,25,25], stages:[
  { lvl:1,  types:["Féminisme"], img:null,
    fr:{nom:"L'ASSISTANTE DE KOHLBERG", note:"Elle code les entretiens de son directeur et remarque que les filles échouent systématiquement à son échelle."},
    en:{nom:"KOHLBERG'S ASSISTANT", note:"She codes her supervisor's interviews and notices girls systematically score lower on his scale."} },
  { lvl:35, types:["Éthique du Soin","Féminisme"], img:null,
    fr:{nom:"LA CONTROVERSE", note:"On l'accuse d'essentialisme ; elle répond que la voix est située, pas féminine par nature."},
    en:{nom:"THE CONTROVERSY", note:"Accused of essentialism, she answers the voice is situated, not feminine by nature."} },
]},

"157": { debut:1957, fin:2010, learn:[22,32,32], stages:[
  { lvl:1,  types:["Philo. Sciences"], img:null,
    fr:{nom:"LE BIOLOGISTE PHILOSOPHE", note:"Il contribue à fonder une discipline qui n'existait pas : la philosophie de la biologie."},
    en:{nom:"THE PHILOSOPHER-BIOLOGIST", note:"He helps found a discipline that did not exist: philosophy of biology."} },
  { lvl:32, types:["Philo. Sciences","Matérialisme"], img:null,
    fr:{nom:"LA SCIENCE COMME PROCESSUS", note:"Les théories évoluent comme les lignées ; l'ambition des chercheurs joue le rôle de la sélection."},
    en:{nom:"SCIENCE AS A PROCESS", note:"Theories evolve like lineages; researchers' ambition plays the role of selection."} },
]},

"158": { debut:1960, fin:2024, learn:[20,8,40], stages:[
  { lvl:1,  types:["Empirisme"], img:null,
    fr:{nom:"L'ÉTUDIANT DE PRINCETON", note:"Formé dans l'analyse la plus classique, il en sortira par la psychologie cognitive."},
    en:{nom:"THE PRINCETON STUDENT", note:"Trained in the most classical analysis, he leaves it through cognitive psychology."} },
  { lvl:40, types:["Empirisme","Réalisme"], img:null,
    fr:{nom:"L'ÉPISTÉMOLOGIE SOCIALE", note:"Presque tout ce que nous savons, nous le tenons d'autrui ; il faut donc évaluer les institutions du savoir."},
    en:{nom:"SOCIAL EPISTEMOLOGY", note:"Nearly all we know we hold from others; so the institutions of knowledge must be assessed."} },
]},

"159": { debut:1960, fin:null, learn:[34,34,23], stages:[
  { lvl:1,  types:["Réalisme"], img:null,
    fr:{nom:"L'ÉTUDIANT DE NEW YORK", note:"Formé dans la métaphysique analytique naissante, il en interrogera le vocabulaire même."},
    en:{nom:"THE NEW YORK STUDENT", note:"Trained in nascent analytic metaphysics, he will question its very vocabulary."} },
  { lvl:34, types:["Réalisme","Métaphysique"], img:null,
    fr:{nom:"LA VARIANCE DU QUANTIFICATEUR", note:"Beaucoup de disputes ontologiques sont verbales : les deux camps donnent à « exister » des sens différents."},
    en:{nom:"QUANTIFIER VARIANCE", note:"Many ontological disputes are verbal: the two camps give \"exists\" different senses."} },
]},

"160": { debut:1959, fin:2002, learn:[16,16,16], stages:[
  { lvl:1,  types:["Éthique des Vertus"], img:null,
    fr:{nom:"LE JEUNE SOCIALISTE", note:"Il préside la ligue socialiste étudiante de Columbia avant qu'un séminaire ne le retourne entièrement."},
    en:{nom:"THE YOUNG SOCIALIST", note:"He chairs Columbia's student socialist league before a seminar turns him entirely around."} },
  { lvl:16, types:["Libéralisme","Éthique des Vertus"], img:null,
    fr:{nom:"L'ÉTAT MINIMAL", note:"Réponse à Rawls écrite en un an : les droits sont des contraintes latérales, pas des buts à maximiser."},
    en:{nom:"THE MINIMAL STATE", note:"An answer to Rawls written in a year: rights are side constraints, not goals to maximise."} },
  { lvl:23, types:["Libéralisme","Éthique des Vertus"], img:null,
    fr:{nom:"LE PHILOSOPHE SANS SYSTÈME", note:"Il refuse de passer sa vie sur un seul livre et écrit ensuite sur tout autre chose, par principe."},
    en:{nom:"THE PHILOSOPHER WITHOUT A SYSTEM", note:"He refuses to spend a life on one book and writes about something else entirely, on principle."} },
]},

"161": { debut:1958, fin:2022, learn:[13,13,2], stages:[
  { lvl:1,  types:["Logique"], img:"Kripke.JPG",
    fr:{nom:"LE LYCÉEN DU NEBRASKA", note:"À dix-sept ans il démontre la complétude de la logique modale ; Harvard lui propose un poste avant son diplôme."},
    en:{nom:"THE NEBRASKA SCHOOLBOY", note:"At seventeen he proves the completeness of modal logic; Harvard offers him a post before his degree."} },
  { lvl:13, types:["Logique","Réalisme"], img:"Saul Kripke.jpg",
    fr:{nom:"NOMMER ET NÉCESSITER", note:"Trois conférences sans notes : un nom désigne le même individu dans tous les mondes, et il existe du nécessaire a posteriori."},
    en:{nom:"NAMING AND NECESSITY", note:"Three lectures without notes: a name picks out the same individual in every world, and necessity can be a posteriori."} },
  { lvl:25, types:["Logique","Réalisme"], img:null,
    fr:{nom:"LE PARADOXE SCEPTIQUE", note:"Rien dans mon passé ne fixe ce que j'ai voulu dire par « plus » — Wittgenstein relu comme un sceptique."},
    en:{nom:"THE SCEPTICAL PARADOX", note:"Nothing in my past fixes what I meant by \"plus\" — Wittgenstein reread as a sceptic."} },
]},

"162": { debut:1962, fin:2022, learn:[20,16,20], stages:[
  { lvl:1,  types:["Philo. Sciences"], img:null,
    fr:{nom:"L'HISTORIEN DES SCIENCES", note:"Formé à Princeton, il prend l'histoire au sérieux comme donnée pour trancher entre théories de la rationalité."},
    en:{nom:"THE HISTORIAN OF SCIENCE", note:"Princeton-trained, he takes history seriously as evidence for adjudicating theories of rationality."} },
  { lvl:20, types:["Philo. Sciences","Scepticisme"], img:null,
    fr:{nom:"LA MÉTA-INDUCTION PESSIMISTE", note:"Toutes les théories passées à succès se sont révélées fausses ; pourquoi les nôtres échapperaient-elles ?"},
    en:{nom:"THE PESSIMISTIC META-INDUCTION", note:"Every past successful theory turned out false; why should ours escape?"} },
]},

"163": { debut:1963, fin:null, learn:[18,18,18], stages:[
  { lvl:1,  types:["Philo. Sciences"], img:null,
    fr:{nom:"L'ÉMIGRÉ NÉERLANDAIS", note:"Enfant sous l'occupation allemande, il grandit au Canada et se forme à Pittsburgh."},
    en:{nom:"THE DUTCH ÉMIGRÉ", note:"A child under German occupation, he grows up in Canada and trains at Pittsburgh."} },
  { lvl:40, types:["Philo. Sciences","Scepticisme"], img:null,
    fr:{nom:"L'ATTITUDE EMPIRISTE", note:"L'empirisme n'est pas une doctrine mais une posture — sinon il se réfute lui-même."},
    en:{nom:"THE EMPIRICIST STANCE", note:"Empiricism is not a doctrine but a stance — otherwise it refutes itself."} },
]},

"164": { debut:1964, fin:null, learn:[19,19,23], stages:[
  { lvl:1,  types:["Philo. Esprit"], img:null,
    fr:{nom:"LE FILS DE PHILOSOPHE", note:"Formé aux mathématiques et à la logique en Australie, dans le milieu le plus physicaliste du monde."},
    en:{nom:"THE PHILOSOPHER'S SON", note:"Trained in mathematics and logic in Australia, the most physicalist milieu in the world."} },
  { lvl:19, types:["Philo. Esprit","Dualisme"], img:null,
    fr:{nom:"MARY DANS SA CHAMBRE", note:"Une savante qui sait tout de la couleur sans l'avoir vue apprend pourtant quelque chose en sortant."},
    en:{nom:"MARY IN HER ROOM", note:"A scientist who knows everything about colour without seeing it still learns something on leaving."} },
  { lvl:35, types:["Philo. Esprit","Dualisme"], img:null,
    fr:{nom:"LA RÉTRACTATION", note:"Cas rarissime : il déclare son propre argument mauvais et passe au physicalisme, sans convaincre personne d'abandonner Mary."},
    en:{nom:"THE RETRACTION", note:"A rare case: he declares his own argument bad and turns physicalist, convincing no one to drop Mary."} },
]},

"165": { debut:1962, fin:2001, learn:[25,25,12], stages:[
  { lvl:1,  types:["Réalisme"], img:null,
    fr:{nom:"L'ÉLÈVE DE QUINE", note:"Un séjour à Oxford le décide ; il rentre à Harvard et invente une métaphysique que Quine désavouera."},
    en:{nom:"QUINE'S STUDENT", note:"A stay in Oxford decides him; he returns to Harvard and invents a metaphysics Quine will disown."} },
  { lvl:12, types:["Réalisme","Logique"], img:null,
    fr:{nom:"LES CONTREFACTUELS", note:"« Si j'avais lâché le verre » se juge dans le monde possible le plus proche où je l'aurais lâché."},
    en:{nom:"COUNTERFACTUALS", note:"\"If I had dropped the glass\" is judged in the nearest possible world where I did."} },
  { lvl:25, types:["Réalisme","Métaphysique","Logique"], img:null,
    fr:{nom:"LA PLURALITÉ DES MONDES", note:"Les autres mondes possibles existent aussi concrètement que celui-ci ; il le soutient sans jamais sourire."},
    en:{nom:"THE PLURALITY OF WORLDS", note:"Other possible worlds exist as concretely as this one; he maintains it without ever smiling."} },
]},

"166": { debut:1963, fin:2021, learn:[18,18,25], stages:[
  { lvl:1, types:["Philo. Sciences","Réalisme"], img:null,
    fr:{nom:"L'ARGUMENT DU NON-MIRACLE", note:"Le succès de la science serait un miracle si ses théories ne touchaient pas à peu près juste."},
    en:{nom:"THE NO-MIRACLES ARGUMENT", note:"Science's success would be a miracle if its theories were not roughly right."} },
]},

"167": { debut:1963, fin:null, learn:[32,32,32], stages:[
  { lvl:1,  types:["Philo. Esprit"], img:null,
    fr:{nom:"LE SUD-AFRICAIN À OXFORD", note:"Venu d'Afrique du Sud, il reste toute sa carrière entre Oxford et Pittsburgh."},
    en:{nom:"THE SOUTH AFRICAN AT OXFORD", note:"Come from South Africa, he stays his whole career between Oxford and Pittsburgh."} },
  { lvl:32, types:["Réalisme","Philo. Esprit"], img:null,
    fr:{nom:"ESPRIT ET MONDE", note:"L'expérience est déjà conceptuelle : c'est ainsi qu'on échappe au mythe du donné sans tomber dans la cohérence pure."},
    en:{nom:"MIND AND WORLD", note:"Experience is already conceptual: thus one escapes the myth of the given without falling into bare coherence."} },
]},

"168": { debut:1962, fin:null, learn:[21,37,37], stages:[
  { lvl:1,  types:["Déontologie"], img:null,
    fr:{nom:"L'ÉTUDIANT DE PRINCETON", note:"Formé auprès de Rawls et Hempel ; il mettra vingt ans à écrire son premier livre."},
    en:{nom:"THE PRINCETON STUDENT", note:"Trained under Rawls and Hempel; he will take twenty years to write his first book."} },
  { lvl:37, types:["Contractualisme","Déontologie"], img:null,
    fr:{nom:"CE QUE NOUS NOUS DEVONS", note:"La morale n'est pas le calcul du bien : c'est ce qu'on peut se justifier mutuellement."},
    en:{nom:"WHAT WE OWE TO EACH OTHER", note:"Morality is not the calculation of good: it is what we can justify to one another."} },
]},

"169": { debut:1964, fin:2017, learn:[21,21,48], stages:[
  { lvl:1,  types:["Philo. Esprit"], img:null,
    fr:{nom:"L'HISTORIEN REPENTI", note:"Il abandonne l'histoire pour la philosophie et passera sa vie à All Souls, sans jamais enseigner beaucoup."},
    en:{nom:"THE REPENTANT HISTORIAN", note:"He drops history for philosophy and spends his life at All Souls, hardly ever teaching."} },
  { lvl:21, types:["Déontologie","Philo. Esprit"], img:null,
    fr:{nom:"RAISONS ET PERSONNES", note:"L'identité personnelle n'est pas ce qui compte ; découvrir cela l'a rendu, dit-il, moins triste de mourir."},
    en:{nom:"REASONS AND PERSONS", note:"Personal identity is not what matters; discovering this, he says, made dying less sad."} },
  { lvl:48, types:["Déontologie","Philo. Esprit"], img:null,
    fr:{nom:"LA MONTAGNE", note:"Kantiens, contractualistes et conséquentialistes gravissent la même montagne par des versants différents."},
    en:{nom:"THE MOUNTAIN", note:"Kantians, contractualists and consequentialists climb the same mountain from different sides."} },
]},

"170": { debut:1959, fin:null, learn:[18,18,28], stages:[
  { lvl:1,  types:["Philo. Sciences"], img:null,
    fr:{nom:"L'ÉLÈVE DE TINBERGEN", note:"Né à Nairobi, formé à l'éthologie oxonienne par un futur prix Nobel."},
    en:{nom:"TINBERGEN'S STUDENT", note:"Born in Nairobi, trained in Oxford ethology by a future Nobel laureate."} },
  { lvl:28, types:["Philo. Sciences","Matérialisme"], img:null,
    fr:{nom:"L'HORLOGER AVEUGLE", note:"La réponse à Paley, deux siècles plus tard : l'horloger existe, mais il ne voit rien et n'a aucun projet."},
    en:{nom:"THE BLIND WATCHMAKER", note:"The answer to Paley, two centuries on: the watchmaker exists, but is sightless and has no plan."} },
]},

"171": { debut:1963, fin:2024, learn:[25,29,33], stages:[
  { lvl:1,  types:["Philo. Esprit"], img:null,
    fr:{nom:"L'ÉLÈVE DE RYLE", note:"Il part à Oxford travailler sous Ryle, décidé à réfuter le behaviorisme de l'intérieur."},
    en:{nom:"RYLE'S STUDENT", note:"He goes to Oxford to work under Ryle, set on refuting behaviourism from within."} },
  { lvl:25, types:["Philo. Esprit","Matérialisme"], img:null,
    fr:{nom:"LA POSTURE INTENTIONNELLE", note:"Attribuer des croyances est une stratégie de prédiction qui marche — inutile de demander si elle est littéralement vraie."},
    en:{nom:"THE INTENTIONAL STANCE", note:"Ascribing beliefs is a predictive strategy that works — no need to ask whether it is literally true."} },
  { lvl:29, types:["Philo. Esprit","Matérialisme"], img:null,
    fr:{nom:"LES VERSIONS MULTIPLES", note:"Il n'y a pas de scène centrale où tout se rassemble : le théâtre cartésien est vide, et Darwin est un acide universel."},
    en:{nom:"MULTIPLE DRAFTS", note:"There is no central stage where it all comes together: the Cartesian theatre is empty, and Darwin is a universal acid."} },
]},

"172": { debut:1965, fin:null, learn:[15,43,15], stages:[
  { lvl:1,  types:["Logique"], img:null,
    fr:{nom:"LE PHYSICIEN", note:"Une thèse sur les électrons en champ magnétique lui vaut une fractale qui porte son nom."},
    en:{nom:"THE PHYSICIST", note:"A thesis on electrons in magnetic fields earns him a fractal bearing his name."} },
  { lvl:15, types:["Philo. Esprit","Logique"], img:null,
    fr:{nom:"GÖDEL, ESCHER, BACH", note:"Écrit sur une machine à composer artisanale, il gagne le Pulitzer et fait de l'autoréférence un genre littéraire."},
    en:{nom:"GÖDEL, ESCHER, BACH", note:"Typeset on a homemade system, it wins the Pulitzer and turns self-reference into a literary genre."} },
  { lvl:43, types:["Philo. Esprit","Logique"], img:null,
    fr:{nom:"JE SUIS UNE BOUCLE ÉTRANGE", note:"Après la mort de sa femme, il soutient qu'un moi est un motif qui peut survivre dans d'autres cerveaux."},
    en:{nom:"I AM A STRANGE LOOP", note:"After his wife's death he argues a self is a pattern that can survive in other brains."} },
]},

"173": { debut:1964, fin:null, learn:[16,16,23], stages:[
  { lvl:1,  types:["Philo. Esprit"], img:null,
    fr:{nom:"LE COUPLE DE PITTSBURGH", note:"Formés ensemble par Sellars, ils signeront séparément une même philosophie."},
    en:{nom:"THE PITTSBURGH COUPLE", note:"Trained together under Sellars, they will sign one philosophy separately."} },
  { lvl:23, types:["Philo. Esprit","Matérialisme"], img:null,
    fr:{nom:"LA NEUROPHILOSOPHIE", note:"Elle impose que la philosophie de l'esprit apprenne d'abord comment le cerveau est fait."},
    en:{nom:"NEUROPHILOSOPHY", note:"She insists philosophy of mind must first learn how the brain is actually built."} },
]},

"174": { debut:1964, fin:null, learn:[32,15,32], stages:[
  { lvl:1,  types:["Philo. Esprit"], img:null,
    fr:{nom:"L'ÉTUDIANT DU MIT", note:"Formé chez Putnam et Fodor, il deviendra le critique le plus obstiné du fonctionnalisme qu'il a servi."},
    en:{nom:"THE MIT STUDENT", note:"Trained under Putnam and Fodor, he becomes the most obstinate critic of the functionalism he served."} },
  { lvl:32, types:["Philo. Esprit"], img:null,
    fr:{nom:"CONSCIENCE-P ET CONSCIENCE-A", note:"Un même mot recouvre deux choses : ce que cela fait, et ce qui est disponible au raisonnement."},
    en:{nom:"P-CONSCIOUSNESS AND A-CONSCIOUSNESS", note:"One word covers two things: what it is like, and what is available for reasoning."} },
]},

"175": { debut:1966, fin:null, learn:[18,18,34], stages:[
  { lvl:1,  types:["Philo. Sciences"], img:null,
    fr:{nom:"LA PHYSICIENNE", note:"Mathématiques puis philosophie des sciences ; elle enseignera à Stanford, San Diego et à la LSE."},
    en:{nom:"THE PHYSICIST", note:"Mathematics then philosophy of science; she teaches at Stanford, San Diego and the LSE."} },
  { lvl:34, types:["Philo. Sciences","Réalisme"], img:null,
    fr:{nom:"LE MONDE BIGARRÉ", note:"Aucune théorie ne couvre tout : le monde est une mosaïque de domaines mal raccordés."},
    en:{nom:"THE DAPPLED WORLD", note:"No theory covers everything: the world is a patchwork of ill-joined domains."} },
]},

"176": { debut:1962, fin:null, learn:[23,23,37], stages:[
  { lvl:1,  types:["Éthique des Vertus"], img:null,
    fr:{nom:"L'ÉTUDIANT DE CAMBRIDGE", note:"Formé aux mathématiques avant la philosophie ; il en gardera le goût des constructions explicites."},
    en:{nom:"THE CAMBRIDGE STUDENT", note:"Trained in mathematics before philosophy; he keeps a taste for explicit constructions."} },
  { lvl:37, types:["Réalisme","Éthique des Vertus"], img:null,
    fr:{nom:"LES PASSIONS QUI GOUVERNENT", note:"Hume avait raison : la raison est esclave des passions, mais les passions se critiquent entre elles."},
    en:{nom:"RULING PASSIONS", note:"Hume was right: reason is slave to the passions, but passions criticise one another."} },
]},

"177": { debut:1966, fin:null, learn:[20,23,51], stages:[
  { lvl:1,  types:["Philo. Sciences"], img:null,
    fr:{nom:"LA BIOLOGISTE", note:"Doctorat de biologie à Yale ; elle vient aux études des sciences par les laboratoires, pas par la théorie."},
    en:{nom:"THE BIOLOGIST", note:"A Yale biology doctorate; she comes to science studies through laboratories, not theory."} },
  { lvl:20, types:["Féminisme","Philo. Sciences"], img:"Donna Haraway 2006 (cropped).jpg",
    fr:{nom:"LE MANIFESTE CYBORG", note:"Plutôt cyborg que déesse : les frontières animal/machine et nature/culture ne tiennent plus."},
    en:{nom:"THE CYBORG MANIFESTO", note:"Rather cyborg than goddess: the animal/machine and nature/culture borders no longer hold."} },
  { lvl:51, types:["Féminisme","Philo. Sciences"], img:"Donna Haraway 2016 2.png",
    fr:{nom:"RESTER AVEC LE TROUBLE", note:"Ni déni ni apocalypse : faire des parentés inattendues dans un monde abîmé."},
    en:{nom:"STAYING WITH THE TROUBLE", note:"Neither denial nor apocalypse: making unexpected kin in a damaged world."} },
]},

"178": { debut:1966, fin:null, learn:[28,28,38], stages:[
  { lvl:1,  types:["Empirisme"], img:null,
    fr:{nom:"L'ÉTUDIANTE D'OXFORD", note:"Première femme fellow en philosophie à New College ; elle passera sa vie à contrarier les deux camps."},
    en:{nom:"THE OXFORD STUDENT", note:"The first woman philosophy fellow at New College; she spends her life vexing both camps."} },
  { lvl:38, types:["Pragmatisme","Empirisme"], img:null,
    fr:{nom:"DÉFENDRE LA SCIENCE", note:"Contre le scientisme et contre le cynisme à la fois : la science n'est ni sacrée ni fumeuse."},
    en:{nom:"DEFENDING SCIENCE", note:"Against scientism and cynicism at once: science is neither sacred nor bogus."} },
]},

"179": { debut:1966, fin:2001, learn:[26,7,26], stages:[
  { lvl:1,  types:["Philo. Sciences"], img:null,
    fr:{nom:"L'ÉLÈVE DE MATURANA", note:"Biologiste à Santiago ; le coup d'État de 1973 l'envoie en exil et il perd son laboratoire."},
    en:{nom:"MATURANA'S STUDENT", note:"A biologist in Santiago; the 1973 coup drives him into exile and costs him his laboratory."} },
  { lvl:7,  types:["Philo. Sciences"], img:null,
    fr:{nom:"L'AUTOPOÏÈSE", note:"Le vivant se définit par le fait qu'il se produit lui-même, non par une liste de propriétés."},
    en:{nom:"AUTOPOIESIS", note:"The living is defined by producing itself, not by a list of properties."} },
  { lvl:26, types:["Phénoménologie","Philo. Sciences"], img:null,
    fr:{nom:"L'ESPRIT INCARNÉ", note:"Avec Thompson et Rosch : la cognition n'est pas une représentation mais une action qui fait émerger un monde."},
    en:{nom:"THE EMBODIED MIND", note:"With Thompson and Rosch: cognition is not representation but action bringing forth a world."} },
]},

"180": { debut:1968, fin:null, learn:[22,22,30], stages:[
  { lvl:1, types:["Philo. Sciences"], img:null,
    fr:{nom:"LE RÉALISME STRUCTUREL", note:"Ce qui survit aux révolutions n'est pas l'ontologie mais les équations : Fresnel passe entier dans Maxwell."},
    en:{nom:"STRUCTURAL REALISM", note:"What survives revolutions is not ontology but equations: Fresnel passes whole into Maxwell."} },
]},

"181": { debut:1967, fin:null, learn:[9,9,6], stages:[
  { lvl:1,  types:["Utilitarisme"], img:null,
    fr:{nom:"L'ÉTUDIANT DE MELBOURNE", note:"Petit-fils de Viennois réfugiés dont trois grands-parents sont morts en camp ; il choisit l'éthique appliquée."},
    en:{nom:"THE MELBOURNE STUDENT", note:"Grandson of Viennese refugees, three of whose grandparents died in camps; he chooses applied ethics."} },
  { lvl:6,  types:["Utilitarisme"], img:null,
    fr:{nom:"L'ENFANT DANS L'ÉTANG", note:"Si vous sauveriez un enfant qui se noie au prix de vos chaussures, la distance ne change rien à l'obligation."},
    en:{nom:"THE CHILD IN THE POND", note:"If you would save a drowning child at the cost of your shoes, distance changes nothing about the duty."} },
  { lvl:9,  types:["Utilitarisme","Écophilosophie"], img:null,
    fr:{nom:"LA LIBÉRATION ANIMALE", note:"La question n'est pas peuvent-ils raisonner, mais peuvent-ils souffrir ; un mouvement mondial en naît."},
    en:{nom:"ANIMAL LIBERATION", note:"The question is not can they reason but can they suffer; a worldwide movement is born of it."} },
]},

"182": { debut:1968, fin:null, learn:[20,20,28], stages:[
  { lvl:1,  types:["Logique"], img:null,
    fr:{nom:"LE MATHÉMATICIEN", note:"Formé aux mathématiques à Cambridge, il passe à la logique par le paradoxe du menteur."},
    en:{nom:"THE MATHEMATICIAN", note:"Cambridge-trained in mathematics, he moves to logic through the liar paradox."} },
  { lvl:28, types:["Logique"], img:null,
    fr:{nom:"AU-DELÀ DES LIMITES", note:"Partout où la pensée touche sa limite, la même structure contradictoire réapparaît."},
    en:{nom:"BEYOND THE LIMITS", note:"Wherever thought reaches its limit, the same contradictory structure reappears."} },
]},

"183": { debut:1969, fin:null, learn:[25,33,18], stages:[
  { lvl:1,  types:["Éthique des Vertus"], img:null,
    fr:{nom:"L'HELLÉNISTE", note:"Elle quitte le théâtre pour les classiques, se convertit au judaïsme et rencontre l'hostilité de Harvard."},
    en:{nom:"THE HELLENIST", note:"She leaves theatre for classics, converts to Judaism, and meets Harvard's hostility."} },
  { lvl:18, types:["Éthique des Vertus"], img:null,
    fr:{nom:"LA FRAGILITÉ DU BIEN", note:"Les Grecs savaient qu'une bonne vie reste exposée à la chance ; le vouloir invulnérable la mutile."},
    en:{nom:"THE FRAGILITY OF GOODNESS", note:"The Greeks knew a good life stays exposed to luck; wanting it invulnerable maims it."} },
  { lvl:25, types:["Éthique des Vertus","Contractualisme"], img:null,
    fr:{nom:"LES CAPABILITÉS", note:"Avec Sen : ne pas mesurer le revenu mais ce que les gens sont réellement en mesure de faire et d'être."},
    en:{nom:"CAPABILITIES", note:"With Sen: measure not income but what people are actually able to do and to be."} },
]},

"184": { debut:1974, fin:null, learn:[17,20,17], stages:[
  { lvl:1,  types:["Féminisme"], img:null,
    fr:{nom:"L'ÉLÈVE DE L'ÉCOLE HÉBRAÏQUE", note:"L'éthique juive et Spinoza avant Hegel ; punie, on lui fait lire de la philosophie en guise de sanction."},
    en:{nom:"THE HEBREW SCHOOL PUPIL", note:"Jewish ethics and Spinoza before Hegel; punished, they set philosophy as the penalty."} },
  { lvl:24, types:["Féminisme","Postmodernisme"], img:null,
    fr:{nom:"LE POUVOIR DES MOTS", note:"Le mot qui blesse peut être repris et retourné : la citation est aussi ce qui rend la subversion possible."},
    en:{nom:"EXCITABLE SPEECH", note:"The wounding word can be taken up and turned: citation is also what makes subversion possible."} },
]},

"185": { debut:1973, fin:null, learn:[34,22,32], stages:[
  { lvl:1,  types:["Philo. Esprit"], img:null,
    fr:{nom:"LE FILS DE STRAWSON", note:"Fils du métaphysicien descriptif, il travaillera contre presque tous les consensus de son milieu."},
    en:{nom:"STRAWSON'S SON", note:"Son of the descriptive metaphysician, he works against nearly every consensus of his milieu."} },
  { lvl:14, types:["Philo. Esprit"], img:null,
    fr:{nom:"L'ARGUMENT DE BASE", note:"Pour être responsable de ses actes il faudrait être cause de soi — ce qui est impossible."},
    en:{nom:"THE BASIC ARGUMENT", note:"To be responsible for one's acts one would have to be cause of oneself — which is impossible."} },
  { lvl:34, types:["Réalisme","Philo. Esprit"], img:null,
    fr:{nom:"LE PANPSYCHISME RÉALISTE", note:"Le vrai physicalisme conduit au panpsychisme ; et le moi narratif est une mode, pas une nécessité."},
    en:{nom:"REALISTIC PANPSYCHISM", note:"Real physicalism leads to panpsychism; and the narrative self is a fashion, not a necessity."} },
]},

"186": { debut:1980, fin:null, learn:[16,16,27], stages:[
  { lvl:1,  types:["Logique"], img:null,
    fr:{nom:"L'AUSTRALIEN", note:"Formé à Melbourne et Princeton ; il traitera la théologie comme un domaine où l'on compte les prémisses."},
    en:{nom:"THE AUSTRALIAN", note:"Trained at Melbourne and Princeton; he treats theology as a field where premises are counted."} },
  { lvl:27, types:["Philo. Religion","Logique"], img:null,
    fr:{nom:"LE NATURALISME HUMBLE", note:"Athée sans triomphalisme : aucun camp ne dispose d'un argument qui devrait convaincre l'autre."},
    en:{nom:"HUMBLE NATURALISM", note:"An atheist without triumphalism: neither side holds an argument that ought to convince the other."} },
]},

"187": { debut:1977, fin:null, learn:[22,22,27], stages:[
  { lvl:1,  types:["Philo. Esprit"], img:null,
    fr:{nom:"LE CONNEXIONNISTE", note:"Formé à Stirling, il défend les réseaux de neurones quand le symbolique règne encore."},
    en:{nom:"THE CONNECTIONIST", note:"Trained at Stirling, he defends neural networks while the symbolic still reigns."} },
  { lvl:27, types:["Philo. Esprit","Philo. Technique"], img:null,
    fr:{nom:"LE CYBORG NATUREL", note:"Nous n'avons pas attendu les implants : le langage et l'écriture nous ont déjà augmentés."},
    en:{nom:"NATURAL-BORN CYBORGS", note:"We did not wait for implants: language and writing already augmented us."} },
]},

"188": { debut:1986, fin:null, learn:[10,11,11], stages:[
  { lvl:1,  types:["Philo. Esprit"], img:"David Chalmers.jpg",
    fr:{nom:"L'OLYMPIEN DES MATHÉMATIQUES", note:"Médaillé aux Olympiades internationales, il abandonne un doctorat de mathématiques pour la conscience."},
    en:{nom:"THE MATHEMATICS OLYMPIAN", note:"An International Olympiad medallist, he abandons a mathematics doctorate for consciousness."} },
  { lvl:11, types:["Philo. Esprit","Dualisme"], img:"David chalmers.jpg",
    fr:{nom:"L'ESPRIT CONSCIENT", note:"Un zombie physiquement identique à moi est concevable ; donc le physique ne suffit pas."},
    en:{nom:"THE CONSCIOUS MIND", note:"A zombie physically identical to me is conceivable; so the physical does not suffice."} },
]},

"189": { debut:1990, fin:null, learn:[18,18,18], stages:[
  { lvl:1,  types:["Philo. Sciences"], img:null,
    fr:{nom:"L'ÉLÈVE DE WORRALL", note:"Formé à la LSE, il hérite du réalisme structurel pour le pousser bien plus loin que son maître."},
    en:{nom:"WORRALL'S STUDENT", note:"LSE-trained, he inherits structural realism and pushes it far past his teacher."} },
  { lvl:18, types:["Philo. Sciences","Réalisme"], img:null,
    fr:{nom:"TOUT DOIT PARTIR", note:"Avec Ross : la métaphysique qui ne s'appuie pas sur la science en cours doit être abandonnée."},
    en:{nom:"EVERY THING MUST GO", note:"With Ross: metaphysics not grounded in current science must be given up."} },
]},

};

if (typeof module !== 'undefined') module.exports = PHILOMON_EVO;

// ═══════════════════════════════════════════════════════════════════════════
// LIGNAGE — ce qu'un philosophe prend à ses maîtres, et ce qu'il finit par rejeter
// ═══════════════════════════════════════════════════════════════════════════
// Un concept ne se transmet pas parce que deux noms se suivent dans une
// filiation : il se transmet quand l'héritier s'en sert réellement comme d'un
// outil à lui, et cela se date. Un concept peut aussi se perdre — Marx renie
// l'aliénation de Feuerbach, Wittgenstein sa propre théorie picturale.
//
//   herite : { de:<id du maître>, i:<index du concept chez lui>, lvl:<niveau> }
//   renie  : { i:<index> }                pour un concept propre
//            { de:<id>, i:<index> }       pour un concept hérité
//            + lvl : niveau où il est abandonné
//
// Ne sont saisies que les transmissions et les ruptures documentées, pas les
// 317 paires que la filiation autorise formellement.
const PHILOMON_LIGNAGE = {

"006": { herite:[{de:"005",i:0,lvl:1},{de:"005",i:1,lvl:1}] },
"007": { herite:[{de:"006",i:0,lvl:1}], renie:[{de:"006",i:0,lvl:21}] },
"010": { herite:[{de:"006",i:0,lvl:14}] },
"011": { herite:[{de:"007",i:0,lvl:1},{de:"007",i:2,lvl:15},{de:"010",i:1,lvl:15}] },
"012": { herite:[{de:"001",i:1,lvl:1}] },
"013": { herite:[{de:"047",i:1,lvl:1}] },
"002": { herite:[{de:"013",i:0,lvl:1}] },
"014": { herite:[{de:"002",i:0,lvl:31},{de:"051",i:2,lvl:1}], renie:[{de:"051",i:2,lvl:42}] },
"015": { herite:[{de:"048",i:0,lvl:1}], renie:[{de:"048",i:0,lvl:7}] },
"016": { herite:[{de:"059",i:0,lvl:8}], renie:[{de:"059",i:0,lvl:20}] },
"017": { herite:[{de:"016",i:0,lvl:1},{de:"062",i:1,lvl:6}], renie:[{de:"062",i:1,lvl:10}] },
"062": { herite:[{de:"016",i:0,lvl:1}], renie:[{de:"016",i:0,lvl:19}] },
"018": { herite:[{de:"067",i:0,lvl:1}] },
"019": { herite:[{de:"018",i:0,lvl:8},{de:"018",i:1,lvl:8}], renie:[{de:"018",i:1,lvl:19}] },
"020": { herite:[{de:"019",i:0,lvl:12},{de:"018",i:1,lvl:10}] },
"021": { herite:[{de:"020",i:0,lvl:21}] },
"022": { herite:[{de:"003",i:0,lvl:5}] },
"023": { herite:[{de:"071",i:0,lvl:1},{de:"084",i:2,lvl:1}], renie:[{i:0,lvl:23}] },
"024": { herite:[{de:"014",i:1,lvl:16},{de:"015",i:1,lvl:16}] },
"003": { herite:[{de:"061",i:0,lvl:1}], renie:[{de:"061",i:0,lvl:18}] },
"061": { herite:[{de:"014",i:2,lvl:1}] },
"059": { herite:[{de:"014",i:0,lvl:10}] },
"060": { herite:[{de:"059",i:0,lvl:5}], renie:[{de:"059",i:0,lvl:12}] },
"064": { herite:[{de:"056",i:0,lvl:1},{de:"056",i:1,lvl:1}], renie:[{de:"056",i:1,lvl:53}] },
"057": { herite:[{de:"015",i:2,lvl:1}], renie:[{de:"015",i:2,lvl:10}] },
"071": { renie:[{i:2,lvl:34}] },
"084": { herite:[{de:"071",i:2,lvl:12}] },
"087": { herite:[{de:"071",i:0,lvl:1},{de:"084",i:1,lvl:19}] },
"105": { herite:[{de:"087",i:0,lvl:8}], renie:[{i:0,lvl:45}] },
"109": { herite:[{de:"087",i:0,lvl:8}], renie:[{de:"087",i:0,lvl:26}] },
"008": { herite:[{de:"034",i:0,lvl:1}] },
"039": { herite:[{de:"009",i:2,lvl:1}] },
"004": { herite:[{de:"039",i:0,lvl:1}] },
"041": { herite:[{de:"004",i:0,lvl:14}] },
"042": { herite:[{de:"006",i:0,lvl:1}] },
"044": { herite:[{de:"010",i:0,lvl:1}] },
"052": { herite:[{de:"013",i:0,lvl:1}] },
"073": { herite:[{de:"061",i:0,lvl:20}] },
"100": { herite:[{de:"073",i:0,lvl:22}] },
"101": { herite:[{de:"016",i:0,lvl:24}] },
"102": { herite:[{de:"019",i:0,lvl:4}] },
"103": { herite:[{de:"018",i:2,lvl:20}] },
"133": { herite:[{de:"003",i:1,lvl:30}] },
"135": { herite:[{de:"003",i:2,lvl:19}] },
"147": { herite:[{de:"019",i:2,lvl:16}] },
"151": { herite:[{de:"101",i:0,lvl:8}], renie:[{de:"101",i:0,lvl:33}] },
"130": { herite:[{de:"094",i:0,lvl:11}], renie:[{de:"094",i:0,lvl:31}] },
"131": { herite:[{de:"094",i:0,lvl:12}], renie:[{de:"094",i:0,lvl:29}] },
"114": { herite:[{de:"106",i:0,lvl:24}] },
"150": { herite:[{de:"106",i:0,lvl:4}] },
"120": { herite:[{de:"023",i:1,lvl:10}] },
"138": { herite:[{de:"071",i:1,lvl:20}] },
"161": { herite:[{de:"071",i:1,lvl:1}], renie:[{de:"071",i:1,lvl:13}] },
"171": { herite:[{de:"095",i:0,lvl:1}] },
"152": { herite:[{de:"109",i:0,lvl:20}] },
"179": { herite:[{de:"018",i:2,lvl:26}] },
"181": { herite:[{de:"056",i:0,lvl:1}] },
"139": { renie:[{i:1,lvl:47}] },
"164": { renie:[{i:0,lvl:35},{i:1,lvl:35}] },
"160": { renie:[{i:1,lvl:31}] },

};

if (typeof module !== 'undefined') module.exports.PHILOMON_LIGNAGE = PHILOMON_LIGNAGE;
