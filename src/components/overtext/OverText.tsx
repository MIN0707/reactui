import classNames from 'classnames';
import './overtext.css';

type OverTextProps = {
  text: string;
  rows: number;
};

export default function OverText({ text = 'hello', rows = 1 }: OverTextProps) {
  return (
    <div
      className={classNames(
        'overtext',
        { nowrap: rows <= 1 },
        { many: rows > 1 },
      )}
      style={{ WebkitLineClamp: rows }}
    >
      {text}
    </div>
  );
}
