const age = 18;
const isDrunk = false;

const hasLicence = (age >= 18 && !isDrunk);
    console.log(`Может ли вести машину: ${hasLicence ? 'Может' : 'Не может'}`);