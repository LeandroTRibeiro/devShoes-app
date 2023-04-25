export const checkCreditCardType = (cardNumber: string) => {

    var visaRegex = /^4[0-9]{12}(?:[0-9]{3})?$/;
    var mastercardRegex = /^5[1-5][0-9]{14}$/;
    var amexRegex = /^3[47][0-9]{13}$/;
    var discoverRegex = /^6(?:011|5[0-9]{2})[0-9]{12}$/;
  
    if (visaRegex.test(cardNumber)) {
      return "Visa";
    } else if (mastercardRegex.test(cardNumber)) {
      return "Mastercard";
    } else if (amexRegex.test(cardNumber)) {
      return "American Express";
    } else if (discoverRegex.test(cardNumber)) {
      return "Discover";
    } else {
      return "Desconhecido";
    }
};