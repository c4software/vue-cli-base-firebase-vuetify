export const atLeastOne = [
    v => v != null && v.length > 0 || 'Merci de choisir au moins une valeur',
];

export const requiredRule = [
    v => !!v || 'Merci de saisir une valeur',
];

export const passwordRules = [
    v => !!v || 'Le mot de passe est obligatoire',
    v => v != null && v.length >= 6 || 'Le mot de passe doit être au moins de 6 caractères'
];

export const emailRules = [
    v => !!v || "L'email est obligatoire",
    v => isValidEmail(v) || "L'email est invalide"
];

export const isValidEmail = (v) => {
    return /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v)
};
