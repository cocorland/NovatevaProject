import React from 'react';
import './Message.css';

export const Message = ({own}) => {
  return (
    <>
      <div className={ own ? "Message own" : "Message" }>
        <div className={ own ? "MessageOwnerHour own" : "MessageOwnerHour" }>
          Orlando, 10:22
        </div>
        <div className={ own ? "MessageText own" : "MessageText"}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, deleniti atque omnis magnam id ipsa aliquid fuga minus? Eos non voluptatem inventore dolore repellat suscipit? Asperiores vitae corrupti porro eligendi!
        </div>
      </div>
    </>
  )
}
