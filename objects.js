var meals = {breakfast: "oatmeal"};

const recipe = {eggs: 4}

function updateObjectWithKeyAndValue(obj, key, value) {
  return Object.assign({}, { [key]: value})
}

console.log(recipe)