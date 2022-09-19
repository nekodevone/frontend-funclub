/**
 * Склонение слова
 *
 * @link https://gist.github.com/rustamgarifulin/e92be3d7d02b26368a165a19354cba07
 * @param number Число
 * @param variants Вариации слова в зависимости от числа
 */
export const declension = (number: number, ...variants: string[]) => {
  return variants[
    ((number %= 100), 20 > number && number > 4)
      ? 2
      : [2, 0, 1, 1, 1, 2][((number %= 10), number < 5) ? number : 5]
  ]
}
