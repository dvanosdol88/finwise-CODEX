"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

// Configuration for available versions
// base: true means /path exists
// max: N means /path1 ... /pathN exist
const VERSION_CONFIG: Record<string, { base: boolean; max: number }> = {
  upgrade: { base: true, max: 8 },
  improve: { base: true, max: 3 },
  save: { base: true, max: 0 },
  meaning: { base: true, max: 1 },
};

export function DesignerNav() {
  const pathname = usePathname();

  if (!pathname) return null;

  // Extract base path and version
  // e.g. /upgrade -> base="upgrade", version=0
  // e.g. /upgrade1 -> base="upgrade", version=1
  // e.g. /save -> base="save", version=0

  const match = pathname.match(/^\/([a-z]+)(\d*)$/);
  if (!match) return null;

  const basePath = match[1];
  const versionStr = match[2];
  const currentVersion = versionStr ? parseInt(versionStr, 10) : 0;

  const config = VERSION_CONFIG[basePath];

  // If this page isn't tracked in our config, don't show the nav
  if (!config) return null;

  // Determine Previous Link
  let prevLink = "";
  let prevDisabled = false;

  if (currentVersion === 0) {
    prevDisabled = true;
  } else if (currentVersion === 1) {
    prevLink = `/${basePath}`;
  } else {
    prevLink = `/${basePath}${currentVersion - 1}`;
  }

  // Determine Next Link
  let nextLink = "";
  let nextDisabled = false;

  if (currentVersion === 0) {
    if (config.max >= 1) {
      nextLink = `/${basePath}1`;
    } else {
      nextDisabled = true;
    }
  } else {
    if (currentVersion < config.max) {
      nextLink = `/${basePath}${currentVersion + 1}`;
    } else {
      nextDisabled = true;
    }
  }

  return (
    <div className="fixed top-0 left-0 right-0 z-[9999] flex justify-between items-center px-4 py-2 bg-slate-900 text-white text-xs font-mono opacity-80 hover:opacity-100 transition-opacity">
      <div className="flex items-center gap-4">
        <span className="font-bold uppercase tracking-wider text-slate-400">
          Designer Nav
        </span>
        <span className="bg-slate-800 px-2 py-0.5 rounded text-slate-300">
          {basePath} {currentVersion === 0 ? "(base)" : `v${currentVersion}`}
        </span>
      </div>

      <div className="flex items-center gap-2">
        {prevDisabled ? (
          <span className="px-3 py-1 text-slate-600 cursor-not-allowed select-none">
            ← Back
          </span>
        ) : (
          <Link
            href={prevLink as any}
            className="px-3 py-1 bg-slate-800 hover:bg-slate-700 rounded transition-colors text-white"
          >
            ← Back
          </Link>
        )}

        {nextDisabled ? (
          <span className="px-3 py-1 text-slate-600 cursor-not-allowed select-none">
            Next →
          </span>
        ) : (
          <Link
            href={nextLink as any}
            className="px-3 py-1 bg-slate-800 hover:bg-slate-700 rounded transition-colors text-white"
          >
            Next →
          </Link>
        )}
      </div>
    </div>
  );
}
