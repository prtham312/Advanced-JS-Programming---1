const arr = obj = {
    Sam: {
      model: "Samsung",
      price: 50000,
    },
    I: {
      model: "Iphone",
      price: 40000,
    },
    Opp: {
      model: "Oppo",
      price: 20000,
    },
    Real: {
      model: "Realme",
      price: 30000,
    },
  };
  
  // Filter and check eligibility
  const result = Object.entries(obj) // Convert object to array of [key, value]
    .filter(([key, value]) => value.price > 25000) // Filter out phones more expensive than 25,000
    .map(([key, value]) => {
      // If the price is more than 35,000, add eligibility for a free phone
      if (value.price > 35000) {
        value.eligibleForFreePhone = true;
      } else {
        value.eligibleForFreePhone = false;
      }
      return { [key] : value }; // Return the object in the same format
    });
  
  console.log(result);
  