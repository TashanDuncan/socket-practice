/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';

interface EventsProps {
  events: any[]
}

export function Events({ events }: EventsProps) {
  return (
    <ul>
    {
      events.map((event, index) =>
        <li key={ index }>{ event }</li>
      )
    }
    </ul>
  );
}