let pokemon = []

async function getData() {
    const url = "https://eveit1118.github.io/pokemon/csvjson.json";
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }
  
      const json = await response.json();

      for(let i = 0; i < json.length; i++){
        pokemon[i] = json[i]
      }
  
    } catch (error) {
      console.error(error.message);
    }
  }

  getData()