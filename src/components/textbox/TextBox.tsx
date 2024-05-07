import { useRef } from 'react';
import './textbox.css';

type TextBoxProps = {
  canResize?: boolean;
  maxRows?: number;
  lineHeight?: number;
};

export default function TextBox({
  canResize = true,
  maxRows = Infinity,
  lineHeight = 20,
}: TextBoxProps) {
  const ref = useRef<HTMLTextAreaElement>(null);

  function handleResize() {
    const textarea = ref.current;
    if (!textarea || !canResize) return;
    const rows = Math.floor(textarea.scrollHeight / lineHeight);
    textarea.style.height = 'auto';
    let height = textarea.scrollHeight;
    if (rows > maxRows) {
      height -= (rows - maxRows) * lineHeight;
    }
    textarea.style.height = `${height}px`;
  }

  return (
    <textarea
      ref={ref}
      onChange={handleResize}
      className="textbox"
      placeholder="hello world!"
      style={{ lineHeight: `${lineHeight}px` }}
      rows={1}
    ></textarea>
  );
}
