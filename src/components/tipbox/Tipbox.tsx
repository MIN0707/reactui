import classNames from 'classnames';
import './tipbox.css';
import { useState } from 'react';

type TipboxProps = {
  type: 'tooltip' | 'popup';
  text: string;
  tip: string;
};

export default function Tipbox({ text, tip, type = 'tooltip' }: TipboxProps) {
  const isTooltip = type === 'tooltip';

  const [isOpen, setIsOpen] = useState(false);
  function handleClick() {
    if (type === 'tooltip') return;
    setIsOpen(!isOpen);
  }

  return (
    <div>
      <div
        className={classNames('text', { hover: isTooltip })}
        onClick={handleClick}
      >
        {text}
        <div
          className={classNames(
            'tip',
            { hover: isTooltip },
            { hidden: isTooltip },
            { visible: !isTooltip && isOpen },
          )}
        >
          {tip}
        </div>
      </div>
    </div>
  );
}
