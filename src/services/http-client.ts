
export function wikiApi<T>(searchQuery: string): Promise<T> {
  return fetch(`https://en.wikipedia.org/w/api.php?action=query&origin=*&list=search&srsearch=${searchQuery}&prop=info&inprop=url&utf8=&format=json`)
    .then(response => {
      if (!response.ok) {
        throw new Error(response.statusText)
      }
      return response.json() as Promise<T>
    })
}
