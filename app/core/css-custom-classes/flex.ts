import { GapSize } from '@core/enums/gap-size';
import { FlexDirection } from '../enums/flex-direction.enum';

export function flexCenterTwoAxis({
  flexDirection = FlexDirection.ROW,
}: {
  flexDirection?: FlexDirection;
}) {
  return `flex ${flexDirection} justify-between items-center`;
}


export function columnFlex({ gapSize = GapSize.MEDIUM }: {
  gapSize?: GapSize;
}) {
  return `flex flex-col ${gapSize}`;
}