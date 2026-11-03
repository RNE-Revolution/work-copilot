import { createContext, useContext, type ReactNode } from 'react';

/**
 * Where the brand assets (`assets/` folder of this package) are served from.
 * Default `/assets`. Wrap your app in <FeiAssets base="…"> to change it,
 * or pass `base` to an individual component.
 */
const AssetBaseContext = createContext('/assets');

export interface FeiAssetsProps {
  /** URL prefix of the copied `assets/` folder, without trailing slash. */
  base: string;
  children?: ReactNode;
}

export function FeiAssets({ base, children }: FeiAssetsProps) {
  return <AssetBaseContext.Provider value={base.replace(/\/$/, '')}>{children}</AssetBaseContext.Provider>;
}

export function useAssetBase(override?: string): string {
  const ctx = useContext(AssetBaseContext);
  return (override ?? ctx).replace(/\/$/, '');
}
