
import React from 'react';

interface ComparisonTableProps {
  data: {
    headers: string[];
    rows: string[][];
  };
}

export const ComparisonTable: React.FC<ComparisonTableProps> = ({ data }) => {
  return (
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full bg-slate-800 rounded-lg">
        <thead>
          <tr>
            {data.headers.map((header, index) => (
              <th key={index} className="px-6 py-3 text-left text-xs font-medium text-cyan-300 uppercase tracking-wider border-b border-slate-700">
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-slate-700">
          {data.rows.map((row, rowIndex) => (
            <tr key={rowIndex} className="hover:bg-slate-700/50">
              {row.map((cell, cellIndex) => (
                <td key={cellIndex} className="px-6 py-4 whitespace-nowrap text-sm text-slate-300">
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
