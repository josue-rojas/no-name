import styles from './styles.module.scss';
import classnames from 'classnames';
import { useEffect, useRef } from 'react';

interface SentenceProps {
  isActive?: boolean;
  sentence: string;
}

const Sentence = ({ isActive, sentence }: SentenceProps) => {
  const self = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isActive) {
      self.current?.scrollIntoView({ behavior: "smooth", block: 'center' });
    }
  }, [isActive])
  return <span ref={self} className={classnames(styles.sentence, { [styles.isActive]: isActive })}>{sentence}</span>
};

export default Sentence;