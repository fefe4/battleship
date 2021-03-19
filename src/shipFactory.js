const shipFactory = (name, lenght, coordinates) => {
  let hitTimes = lenght;
  const hit = (x) => {
    for (let i in coordinates) {
      if (x === coordinates[i]) {
        return --hitTimes;
      }
    }
  }
  const isSunk = () => {
    if (hitTimes===0) {
      return true;
    }
    else return false;
  }
  return {name, lenght, hit, isSunk}
};


export default shipFactory;