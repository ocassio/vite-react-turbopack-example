import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import { FC, memo, useState } from 'react';

const ToggleButtons: FC = () => {
  const [alignment, setAlignment] = useState<string | null>('left');

  const handleAlignment = (
    _event: React.MouseEvent<HTMLElement>,
    newAlignment: string | null,
  ) => {
    setAlignment(newAlignment);
  };

  return (
    <ToggleButtonGroup
      value={alignment}
      exclusive
      onChange={handleAlignment}
      aria-label="text alignment"
    >
      <ToggleButton value="left" aria-label="left aligned">
        Left
      </ToggleButton>
      <ToggleButton value="center" aria-label="centered">
        Center
      </ToggleButton>
      <ToggleButton value="right" aria-label="right aligned">
        Right
      </ToggleButton>
      <ToggleButton value="justify" aria-label="justified" disabled>
        Justify
      </ToggleButton>
    </ToggleButtonGroup>
  );
};

export default memo(ToggleButtons);
