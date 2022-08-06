/**
 * Calculates the square root of a number.
 *
 * @param x the number to calculate the root of.
 * @returns the square root if `x` is non-negative or `NaN` if `x` is negative.
 */
export function sqrt2(x: number): number {
    return Math.sqrt(x);
}

export enum Direction2 {
    Up = 1,
    Down,
    Left,
    Right,
  }

const emailRegex = new RegExp("[a-z0-9]+@[a-z]+.[a-z]{2,3}");

export function validateEmail2(email: string) {
    return emailRegex.test(email);
  }
