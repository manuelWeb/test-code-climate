/*
 * getIdBestsellCollection: homeData => best sell ref | null
 */
export function getIdBestsellCollection(homeData) {
  if (!homeData && homeData.sectionsCollection && !homeData.sectionsCollection.items) return null

  const bestAndGiftData = homeData.sectionsCollection.items
    .map((element) => element && element.sectionType === 'BestAndGift' &&
      element.bestAndGiftLetOrRightCollection.items
    ).filter(i => i)

  if (!bestAndGiftData[0]) return null

  const idBestSell = bestAndGiftData[0].filter(i => i && i.idPrdMeilleureVente !== null)[0];

  return (idBestSell && idBestSell.idPrdMeilleureVente) || null;
  // => BestSell index (to rm switch case in BestAndGift.tsx?) => idBestSell, index(0:left, 1:right)
  // const bestSellIndex = BestAndGift.findIndex(e => e && e.idPrdMeilleureVente !== null);
}