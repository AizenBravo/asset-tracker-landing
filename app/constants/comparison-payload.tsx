import { ComparisonItem } from '@/app/interfaces/comparison-item';
import {
  AlertTriangle,
  CheckCircle2,
  Database,
  FileSpreadsheet,
  FileText,
  Sparkles,
  TrendingUp,
  FormInput,
  SlidersHorizontal,
} from 'lucide-react';

const comparisonDataItems = [
  {
    id: 'profit-tracking',
    beforeIcon: FileSpreadsheet,
    afterIcon: TrendingUp,
    expandedNode: {
      title: '01 / Profit Accuracy',
      subtitle: 'Net Gains Calculation',
      description: {
        before: {
          subtitle: 'The Spreadsheet Trap:',
          explanation:
            'Accidentally breaking Excel formulas, getting cell reference errors, and losing track of your true capital gains across multiple assets.',
        },
        after: {
          subtitle: 'The 60s Fix:',
          explanation:
            'The software handles all math internally. It instantly computes precise overall gains and individual transaction profits without human error.',
        },
      },
    },
  },
  {
    id: 'data-entry',
    beforeIcon: FileSpreadsheet,
    afterIcon: FormInput,
    expandedNode: {
      title: '02 / Clean Input',
      subtitle: 'Streamlined Data Entry',
      description: {
        before: {
          subtitle: 'The Spreadsheet Trap:',
          explanation:
            'Staring at massive tables with endless columns and rows, risking typos every time you scroll across the screen to type data manually.',
        },
        after: {
          subtitle: 'The 60s Fix:',
          explanation:
            'A distraction-free, guided form built only for Buy and Sell actions. Just enter your asset type, amount, and price—the system handles the rest.',
        },
      },
    },
  },
  {
    id: 'fifo-tracking',
    beforeIcon: Database,
    afterIcon: CheckCircle2,
    expandedNode: {
      title: '03 / Ledger Logic',
      subtitle: 'FIFO Cost Tracking',
      description: {
        before: {
          subtitle: 'The Spreadsheet Trap:',
          explanation:
            'Manually figuring out which old asset purchase was sold first, leading to a math nightmare.',
        },
        after: {
          subtitle: 'The 60s Fix:',
          explanation:
            'Chronological data stacks process trades automatically. Earliest buy quantities clear out first with 100% precision.',
        },
      },
    },
  },
  {
    id: 'compliance-reports',
    beforeIcon: AlertTriangle,
    afterIcon: FileText,
    expandedNode: {
      title: '04 / PDF Engine',
      subtitle: 'Audit-Ready Delivery',
      description: {
        before: {
          subtitle: 'The Spreadsheet Trap:',
          explanation:
            'Panicking over tax formatting, copying tables into Word docs, and messy layouts.',
        },
        after: {
          subtitle: 'The 60s Fix:',
          explanation:
            'One click compiles dates, assets, volumes, and exact gains directly into a minimalist PDF report.',
        },
      },
    },
  },
  {
    id: 'date-filtering',
    beforeIcon: AlertTriangle,
    afterIcon: SlidersHorizontal,
    expandedNode: {
      title: '05 / Custom Timelines',
      subtitle: 'Date Range Control',
      description: {
        before: {
          subtitle: 'The Spreadsheet Trap:',
          explanation:
            'Writing complex filter parameters or manually cutting and pasting table segments just to review a specific month or tax quarter.',
        },
        after: {
          subtitle: 'The 60s Fix:',
          explanation:
            'Select any custom date range using a clean calendar picker to export a targeted snapshot of your historical profits whenever you need it.',
        },
      },
    },
  },
];

export const comparisonPayload: ComparisonItem[] = comparisonDataItems.map(
  (item) => {
    return {
      id: item.id,
      collapsedNode: (
        <div className="flex items-center space-x-2 font-bold tracking-tight text-sm">
          <item.beforeIcon className="w-5 h-5 text-rose-500" />
          <span>vs</span>
          <item.afterIcon className="w-5 h-5 text-teal-500" />
        </div>
      ),
      expandedNode: (
        <div className="space-y-4">
          <div className="text-amber-500 font-mono text-xs uppercase tracking-widest font-semibold">
            {item.expandedNode.title}
          </div>
          <h3 className="text-xl font-extrabold text-zinc-900 dark:text-white">
            {item.expandedNode.subtitle}
          </h3>
          <div className="space-y-3 text-left text-sm mt-4">
            <p className="text-zinc-500 dark:text-zinc-400 flex items-start space-x-2">
              <AlertTriangle className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
              <span>
                <strong>{item.expandedNode.description.before.subtitle}</strong>{' '}
                {item.expandedNode.description.before.explanation}
              </span>
            </p>
            <p className="text-zinc-800 dark:text-zinc-200 flex items-start space-x-2">
              <CheckCircle2 className="w-4 h-4 text-teal-500 shrink-0 mt-0.5" />
              <span>
                <strong>{item.expandedNode.description.after.subtitle}</strong>{' '}
                {item.expandedNode.description.after.explanation}
              </span>
            </p>
          </div>
        </div>
      ),
    };
  },
);
