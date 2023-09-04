
export async function getAllCards() {
  const requestOptions = {
    method: 'GET',
    redirect: 'follow'
  }
  
  const result = await fetch("https://digimoncard.io/api-public/search.php?color=red&type=digimon&sort=name&series=Digimon Card Game&limit=10", requestOptions)
  const data = await result.json()

  return data.map(datum => ({ id: datum.cardnumber, name: datum.name, image: datum.image_url }))
};