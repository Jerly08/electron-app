import { contextBridge } from 'electron';

contextBridge.exposeInMainWorld('api', {
  // Expose any APIs you need here
  getQueueLength: () => {
    // Return the current queue length
    return 10;
  },
  takeTicket: () => {
    // Take a ticket and return the ticket number
    return 42;
  }
});