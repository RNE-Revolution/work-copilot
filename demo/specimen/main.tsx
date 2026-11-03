import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { FeiAssets } from '@fei/design-system';
import './specimen.css';
import { Specimen } from './Specimen';

createRoot(document.getElementById('app')!).render(
  <StrictMode>
    <FeiAssets base="./assets">
      <Specimen />
    </FeiAssets>
  </StrictMode>,
);
