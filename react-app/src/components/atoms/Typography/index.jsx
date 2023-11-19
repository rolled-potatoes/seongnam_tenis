import React from 'react';
import cn from 'classnames';
import styles from './styles.module.scss';

function Paragraph({ children, className, ...rest }) {
  return (
    <span className={cn(styles.paragraph, className)} {...rest}>
      {children}
    </span>
  );
}

function H6({ children, className, ...rest }) {
  return (
    <h6 className={cn(styles.h6, className)} {...rest}>
      {children}
    </h6>
  );
}

function getTag(tag) {
  switch (tag) {
    case 'h6':
    case 'H6': {
      return H6;
    }
    case 'paragraph':
    case 'PARAGRAPH': {
      return Paragraph;
    }
    default: {
      return Paragraph;
    }
  }
}

function Typography({ tag, ...rest }) {
  const Tag = getTag(tag);

  return <Tag {...rest} />;
}

export default Typography;
