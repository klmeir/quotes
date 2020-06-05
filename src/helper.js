export function getDiferrenceYear(year) {
    return new Date().getFullYear() - year;
}

export function calculateBrand(brand) {
    let increment;

    switch(brand) {
        case 'europeo':
            increment = 1.30;
            break;
        case 'americano':
            increment = 1.15;
            break;
        case 'asiatico':
            increment = 1.05;
            break;
        default:
            break;
    }

    return increment;
}

export function getPlan(plan) {
    return (plan === 'basic') ? 1.20 : 1.50;
}

export function capitalize(word) {
    return word.charAt(0).toUpperCase() + word.slice(1);
}