//Spread operator

let arr = [1, 2, 3];

// O spread opreator vi quebrar/ espalhar o array por exemplo sum(...arr) = sum(1, 2, 3)

function exemploSpread() {
  console.log(arguments);
}

exemploSpread(...arr);
