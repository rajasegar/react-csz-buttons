import React, { useState } from 'react';
import logo from './logo.svg';
import css from 'csz';

function Button(props) {
  return (
    <button className={css`
      border: ${ props.inverted ? '1px solid var(--primary)' : 'none'};
      border-radius: var(--base-radius);
      cursor: ${ props.disabled ? 'not-allowed' : 'pointer'};

      display: inline-block;

      font-size: ${
        (props.small && 'var(--font-size-small)')
          || (props.large && 'var(--font-size-large)')
          || 'var(--base-font-size)'
      };

      font-weight: var(--font-semibold);
       line-height: ${
        (props.small && '2.2') || (props.large && '1.25') || '2.5'
      };

      padding: ${
        props.large ? '16px 25px 17px' : '0 12px'
      };

      position: relative;
      text-align: center;

      color: ${
        (props.inverted && 'var(--primary)')
        || (props.link && 'var(--base-font-color)')
        || '#fff'
      };

       background-color: ${
        (props.primary && 'var(--primary)')
        || (props.danger && 'var(--danger)')
        || ((props.inverted || props.link) && '#fff')
        || (props.disabled && 'var(--brand-grey)')
      };
  
      &:hover {
        ${ props.link && 'text-decoration: underline;'}
      }

      :global(:root) {

        /* Brand Colors */
      --brand-blue:   rgb(12, 122, 192);
      --brand-red:    rgb(179, 32, 35);
      --brand-yellow: rgb(244, 167, 0);
      --brand-grey:   rgb(84, 106, 120);

      /* Color Roles */
      --primary:   var(--brand-blue);
      --secondary: var(--brand-grey);
      --warning:   var(--brand-yellow);
      --danger:    var(--brand-red);

      /* Typography */
      --font-mono:        'Courier', monospace;
      --font-sans:        'Source Sans Pro', Arial, sans-serif;
      --font-serif:       'Bree Serif', Times, serif;
      --base-font-color:  var(--brand-grey);
      --base-font-family: var(--font-sans);
      --base-font-size:   16px;
      --font-size-small: var(--base-font-size) * 0.875;
      --font-size-large: var(--base-font-size) * 1.375;

      --font-normal:      400;
      --font-semibold:    600;
      --font-bold:        700;
      --base-line-height: 1.5;
      --headings:         (6, 5, 4, 3, 2, 1);

      /* Borders */
      --base-border: 1px solid var(--brand-grey);
      --base-radius: 0.25rem;

      /* Shadows */
      --base-box-shadow: rgba(darken(var(--brand-grey), 20%), 0.2) 0 0 5px;

      }
    `}>
      {props.children}
    </button>
  );
}

export default Button;
