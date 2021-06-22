import styles from './index.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

interface SubmitButtonTypeProps {
  title: string;
  color?: string;
  size?: string;
}

export default function SubmitButton({ title, size, color }: SubmitButtonTypeProps) {
  return <button className={cx(`submitButton`, size, color)}>{title}</button>;
}
