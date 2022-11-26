// object destructuring
const address = {
    city: "Amritsar",
    district: "Amritsar1",
    state: "punjab",
    region: "North"
  };
  console.log(address);
  
  let { city: newCity, district, ...restDetails } = address;
  console.log(restDetails);
  