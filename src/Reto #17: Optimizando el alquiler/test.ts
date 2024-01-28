/**
 * En Rovaniemi, Finlandia 🇫🇮, los trineos 🛷 se alquilan por intervalos de tiempo. Cada intervalo se representa como un array de dos elementos, donde el primer elemento es el inicio del alquiler y el segundo es el final.
 *
 * Por ejemplo, el array [2, 7] representa un alquiler que comienza en la hora 2 y termina en la hora 7.
 *
 * El problema es que a veces los intervalos se superponen entre sí, haciendo que sea un lío entender de qué hora a qué hora se alquiló el trineo.
 *
 * Nos piden que, para simplificar la tarea de calcular el tiempo total de alquiler, escribamos una función que fusione todos los intervalos superpuestos y devolver un array de intervalos ordenados:
 *
 * Notas:
 * - Puedes asumir que el primer elemento de cada intervalo siempre es menor o igual que el segundo elemento. Pero los intervalos no están necesariamente ordenados.
 * - Los números de horas pueden llegar hasta la cifra 9999.
 */
const optimizeIntervals = jest.fn(
  (intervals: readonly [number, number][]): readonly [number, number][] => {
    return reduceIntervals([...intervals].sort((a, b) => {
      return a[0] - b[0];
    }));
  },
);

const reduceIntervals = jest.fn(
  (intervals: readonly [number, number][]): readonly [number, number][] => {
    debugger;
    if (intervals.length <= 2) {
      const reduce = intervals.reduce((
        acc,
        el,
      ) => [Math.min(acc[0], el[0]), Math.max(acc[1], el[1])]);
      if (reduce.every((el) => el > 0)) {
        return [reduce];
      }
      return intervals;
    }

    return reduceIntervals([
      intervals[0],
      ...reduceIntervals(intervals.slice(1)),
    ]);
  },
);

describe("TDD: optimize intervals of time", () => {
  test("optimizeIntervals: primary cases", () => {
    expect(optimizeIntervals([[5, 8], [2, 7], [3, 4]])).toStrictEqual([[2, 8]]);
    expect(optimizeIntervals([[1, 3], [8, 10], [2, 6]])).toStrictEqual([
      [1, 6],
      [8, 10],
    ]);
    expect(optimizeIntervals([[3, 4], [1, 2], [5, 6]])).toStrictEqual([[1, 2], [
      3,
      4,
    ], [5, 6]]);
  });

  test("reduceIntervals: primary cases", () => {
    expect(reduceIntervals([[2, 7], [3, 4], [5, 8]])).toStrictEqual([[2, 8]]);
    expect(reduceIntervals([[2, 7], [3, 4], [5, 8], [7, 10], [12, 15]]))
      .toStrictEqual([[2, 15]]);
  });

  test.only("reduceIntervals: especial cases", () => {
    expect(reduceIntervals([[3, 4], [2, 7], [5, 8]])).toStrictEqual([[2, 8]]);
    expect(reduceIntervals([[5, 8], [7, 10], [2, 7], [3, 4], [12, 15]]))
      .toStrictEqual([[2, 15]]);
  });
});
