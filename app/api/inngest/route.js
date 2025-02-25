import { serve } from "inngest/next";
import { createUserOrder, inngest, SyncUserCreateion, SyncUserDeletion, SyncUserUpdation } from "@/config/inngest";

// Create an API that serves zero functions
export const { GET, POST, PUT } = serve({
  client: inngest,
  functions: [
    SyncUserCreateion,
    SyncUserUpdation,
    SyncUserDeletion,
    createUserOrder
  ],
});
