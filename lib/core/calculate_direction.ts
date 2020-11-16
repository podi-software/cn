import { Directions } from '../models';

interface ICalculateResult {
  diffFromRight: number;
  diffFromLeft: number;
}

export function calculateDirection(
  heading: number,
  target: number
): Directions {
  if (heading === target) {
    return Directions.straight;
  }

  const { diffFromRight, diffFromLeft } =
    target > heading
      ? calculateTargetIsGreaterThanHeading(heading, target)
      : calculateTargetIsLessThanHeading(heading, target);

  if (diffFromLeft < diffFromRight) {
    return Directions.left;
  }

  return Directions.right;
}

function calculateTargetIsGreaterThanHeading(
  heading: number,
  target: number
): ICalculateResult {
  return {
    diffFromRight: Math.abs(target - heading),
    diffFromLeft: Math.abs(heading + (360 - target))
  };
}

function calculateTargetIsLessThanHeading(
  heading: number,
  target: number
): ICalculateResult {
  return {
    diffFromRight: Math.abs(target + (360 - heading)),
    diffFromLeft: Math.abs(target - heading)
  };
}
