async function sayJoke(apiUrl, jokeId){
    const response = await fetch(apiUrl)
    let data = await response.json()
    if (!data.jokes || !Array.isArray(data.jokes)) {
        throw new Error(`No jokes at url: ${apiUrl}`);
     }
  
    let joke = data.jokes.find(j=>j.id === jokeId)
    if(!joke)throw new Error(`No jokes found id: ${jokeId}`)
    return { saySetup: () => joke.setup,
    sayPunchLine: () => joke.punchLine}
}
