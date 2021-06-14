/**
 *
 * @returns Favourites from the LocalStorage
 */
export function getFavouirtes() {
  return JSON.parse(localStorage.getItem("fav") || "[]");
}

/**
 * A method to update the localStorage
 * @param Favourites
 */
export function saveFavourites(Favourites: Array<any>) {
  localStorage.setItem("fav", JSON.stringify(Favourites));
}
