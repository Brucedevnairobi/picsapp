import { Inngest } from 'inngest';

// Create a client to send and receive events
export const inngest = new Inngest({
  id: 'picsapp',
  // You can add other configuration options here
  // eventKey: 'your-event-key' // If you're using Inngest Cloud
});
