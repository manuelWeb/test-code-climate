/*
 * getIdBestsellCollection: homeData => best sell ref | null
 */
export function getIdBestsellCollection(homeData) {
  const items = homeData && homeData.sectionsCollection ? homeData.sectionsCollection.items : null;
  // console.log('items', JSON.stringify(items));

  if (!items) return null

  const bestAndGiftData = items.map((element) => {
    if (element && element.sectionType === 'BestAndGift') {
      return element.bestAndGiftLetOrRightCollection.items
    }
  }).filter(i => i)[0]

  if (!bestAndGiftData) return null

  const idBestSell = bestAndGiftData.filter(i => i && i.idPrdMeilleureVente !== null)[0]

  return (idBestSell && idBestSell.idPrdMeilleureVente) || null;
  // => BestSell index (to rm switch case in BestAndGift.tsx?) => idBestSell, index(0:left, 1:right)
  // const bestSellIndex = BestAndGift.findIndex(e => e && e.idPrdMeilleureVente !== null);
}