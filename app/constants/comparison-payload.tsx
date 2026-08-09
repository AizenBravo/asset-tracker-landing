import { ComparisonItem } from '@/app/interfaces/comparison-item';
import {
  AlertTriangle,
  CheckCircle2,
  Database,
  FileSpreadsheet,
  FileText,
  Sparkles,
} from 'lucide-react';

export const comparisonPayload: ComparisonItem[] = [
  {
    id: 'calculations',
    collapsedNode: (
      <div className="flex items-center space-x-2 font-bold tracking-tight text-sm">
        <FileSpreadsheet className="w-5 h-5 text-rose-500" />
        <span>vs</span>
        <Sparkles className="w-5 h-5 text-teal-500" />
      </div>
    ),
    expandedNode: (
      <div className="space-y-4">
        <div className="text-amber-500 font-mono text-xs uppercase tracking-widest font-semibold">
          01 / Engine Math
        </div>
        <h3 className="text-xl font-extrabold text-zinc-900 dark:text-white">
          Calculation Breakdown
        </h3>
        <div className="space-y-3 text-left text-sm mt-4">
          <p className="text-zinc-500 dark:text-zinc-400 flex items-start space-x-2">
            <AlertTriangle className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
            <span>
              <strong>The Spreadsheet Trap:</strong> Manual cell writing,
              indexing errors, and messy calculations trying to trace cost basis
              for 15+ coins.
            </span>
          </p>
          <p className="text-zinc-800 dark:text-zinc-200 flex items-start space-x-2">
            <CheckCircle2 className="w-4 h-4 text-teal-500 shrink-0 mt-0.5" />
            <span>
              <strong>The 60s Fix:</strong> Clean internal data schema tracks
              transaction queues automatically with immediate index output
              calculations.
            </span>
          </p>
        </div>
      </div>
    ),
  },
  {
    id: 'fifo-tracking',
    collapsedNode: (
      <div className="flex items-center space-x-2 font-bold tracking-tight text-sm">
        <Database className="w-5 h-5 text-zinc-400" />
        <span>vs</span>
        <CheckCircle2 className="w-5 h-5 text-amber-500" />
      </div>
    ),
    expandedNode: (
      <div className="space-y-4">
        <div className="text-amber-500 font-mono text-xs uppercase tracking-widest font-semibold">
          02 / Ledger Logic
        </div>
        <h3 className="text-xl font-extrabold text-zinc-900 dark:text-white">
          FIFO Cost Tracking
        </h3>
        <div className="space-y-3 text-left text-sm mt-4">
          <p className="text-zinc-500 dark:text-zinc-400 flex items-start space-x-2">
            <AlertTriangle className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
            <span>
              <strong>The Spreadsheet Trap:</strong> Manually figuring out which
              old asset purchase was sold first, leading to a math nightmare.
            </span>
          </p>
          <p className="text-zinc-800 dark:text-zinc-200 flex items-start space-x-2">
            <CheckCircle2 className="w-4 h-4 text-teal-500 shrink-0 mt-0.5" />
            <span>
              <strong>The 60s Fix:</strong> Chronological data stacks process
              trades automatically. Earliest buy quantities clear out first with
              100% precision.
            </span>
          </p>
        </div>
      </div>
    ),
  },
  {
    id: 'compliance-exports',
    collapsedNode: (
      <div className="flex items-center space-x-2 font-bold tracking-tight text-sm">
        <AlertTriangle className="w-5 h-5 text-zinc-400" />
        <span>vs</span>
        <FileText className="w-5 h-5" />
      </div>
    ),
    expandedNode: (
      <div className="space-y-4">
        <div className="text-amber-500 font-mono text-xs uppercase tracking-widest font-semibold">
          03 / PDF Engine
        </div>
        <h3 className="text-xl font-extrabold text-zinc-900 dark:text-white">
          Audit-Ready Delivery
        </h3>
        <div className="space-y-3 text-left text-sm mt-4">
          <p className="text-zinc-500 dark:text-zinc-400 flex items-start space-x-2">
            <AlertTriangle className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
            <span>
              <strong>The Spreadsheet Trap:</strong> Panicking over tax
              formatting, copying tables into Word docs, and messy layouts.
            </span>
          </p>
          <p className="text-zinc-800 dark:text-zinc-200 flex items-start space-x-2">
            <CheckCircle2 className="w-4 h-4 text-teal-500 shrink-0 mt-0.5" />
            <span>
              <strong>The 60s Fix:</strong> One click compiles dates, assets,
              volumes, and exact gains directly into a beautiful PDF report.
            </span>
          </p>
        </div>
      </div>
    ),
  },
  {
    id: 'compliance-exports-2',
    collapsedNode: (
      <div className="flex items-center space-x-2 font-bold tracking-tight text-sm">
        <AlertTriangle className="w-5 h-5 text-zinc-400" />
        <span>vs</span>
        <FileText className="w-5 h-5" />
      </div>
    ),
    expandedNode: (
      <div className="space-y-4">
        <div className="text-amber-500 font-mono text-xs uppercase tracking-widest font-semibold">
          03 / PDF Engine
        </div>
        <h3 className="text-xl font-extrabold text-zinc-900 dark:text-white">
          Audit-Ready Delivery
        </h3>
        <div className="space-y-3 text-left text-sm mt-4">
          <p className="text-zinc-500 dark:text-zinc-400 flex items-start space-x-2">
            <AlertTriangle className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
            <span>
              <strong>The Spreadsheet Trap:</strong> Panicking over tax
              formatting, copying tables into Word docs, and messy layouts.
            </span>
          </p>
          <p className="text-zinc-800 dark:text-zinc-200 flex items-start space-x-2">
            <CheckCircle2 className="w-4 h-4 text-teal-500 shrink-0 mt-0.5" />
            <span>
              <strong>The 60s Fix:</strong> One click compiles dates, assets,
              volumes, and exact gains directly into a beautiful PDF report.
            </span>
          </p>
        </div>
      </div>
    ),
  },
  {
    id: 'compliance-exports-3',
    collapsedNode: (
      <div className="flex items-center space-x-2 font-bold tracking-tight text-sm">
        <AlertTriangle className="w-5 h-5 text-zinc-400" />
        <span>vs</span>
        <FileText className="w-5 h-5" />
      </div>
    ),
    expandedNode: (
      <div className="space-y-4">
        <div className="text-amber-500 font-mono text-xs uppercase tracking-widest font-semibold">
          03 / PDF Engine
        </div>
        <h3 className="text-xl font-extrabold text-zinc-900 dark:text-white">
          Audit-Ready Delivery
        </h3>
        <div className="space-y-3 text-left text-sm mt-4">
          <p className="text-zinc-500 dark:text-zinc-400 flex items-start space-x-2">
            <AlertTriangle className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
            <span>
              <strong>The Spreadsheet Trap:</strong> Panicking over tax
              formatting, copying tables into Word docs, and messy layouts.
            </span>
          </p>
          <p className="text-zinc-800 dark:text-zinc-200 flex items-start space-x-2">
            <CheckCircle2 className="w-4 h-4 text-teal-500 shrink-0 mt-0.5" />
            <span>
              <strong>The 60s Fix:</strong> One click compiles dates, assets,
              volumes, and exact gains directly into a beautiful PDF report.
            </span>
          </p>
        </div>
      </div>
    ),
  },
];
