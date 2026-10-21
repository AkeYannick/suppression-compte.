// ⚠️ MODIFIEZ UNIQUEMENT CE FICHIER : tout le contenu de la page vient d'ici.

export const config = {
  // Doit correspondre EXACTEMENT au nom affiché sur Google Play
  appName: "LoyerMaison",
  developerName: "IKARY DIABAKATE",
  contactEmail: "ikary.ryann@dirkk.tech",

  // Délais annoncés
  responseDelayDays: 7,
  deletionDelayDays: 30,

  // Données supprimées lors de la suppression du compte
  deletedData: [
    "Votre compte et votre profil (nom, adresse e-mail, mot de passe)",
    "Vos contenus et votre historique d'utilisation",
    "Vos préférences et paramètres",
  ],

  // Données éventuellement conservées (laissez [] si rien n'est conservé)
  retainedData: [] as { label: string; duration: string; reason: string }[],
  // Exemple :
  // retainedData: [
  //   { label: "Données de facturation", duration: "10 ans", reason: "Obligation légale comptable" },
  // ],
};
