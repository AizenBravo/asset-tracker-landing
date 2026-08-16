export interface ComparisonItem {
  id: string | number;
  title: string;
  /** The full detailed layout displayed in the center card when active */
  expandedNode: React.ReactNode;
  /** The dual-icon or minimal layout displayed inside the small ring node */
  collapsedNode: React.ReactNode;
}
