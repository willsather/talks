import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

export const env = createEnv({
  client: {
    NEXT_PUBLIC_API_URL: z.string().url(),
  },

  server: {
    API_SECRET: z.string(),
  },

  runtimeEnv: {
    NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL,
    API_SECRET: process.env.API_SECRET,
  },

  emptyStringAsUndefined: true,
  skipValidation: process.env.NODE_ENV === "test",
});