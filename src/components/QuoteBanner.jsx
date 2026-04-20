import React from 'react';
import './QuoteBanner.css';

const QuoteBanner = ({ quote, author, accent }) => (
  <section className="qbanner">
    <div className="container qbanner__inner">
      <div className="qbanner__mark" aria-hidden>
        <svg width="32" height="24" viewBox="0 0 32 24" fill="none">
          <path d="M0 24V14.4C0 10.4 0.933333 7.2 2.8 4.8C4.66667 2.4 7.46667 0.799999 11.2 0L13.6 3.6C11.0667 4.26667 9.2 5.33333 8 6.8C6.8 8.26667 6.2 10 6.2 12H12V24H0ZM19.2 24V14.4C19.2 10.4 20.1333 7.2 22 4.8C23.8667 2.4 26.6667 0.799999 30.4 0L32.8 3.6C30.2667 4.26667 28.4 5.33333 27.2 6.8C26 8.26667 25.4 10 25.4 12H31.2V24H19.2Z" fill="#1400FF"/>
        </svg>
      </div>
      <blockquote className="qbanner__text">
        {accent ? (
          <>
            {quote.split(accent).map((part, i, arr) =>
              i < arr.length - 1
                ? <React.Fragment key={i}>{part}<em className="qbanner__accent">{accent}</em></React.Fragment>
                : part
            )}
          </>
        ) : quote}
      </blockquote>
      {author && <p className="qbanner__author label">{author}</p>}
    </div>
  </section>
);

export default QuoteBanner;
