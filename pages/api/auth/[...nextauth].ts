import NextAuth from "@auth/core";
import Google from "@auth/core/providers/google";
import { FirestoreAdapter } from "@auth/firebase-adapter";
import { cert } from "firebase-admin/app";

export default NextAuth({
  providers: [
    Google({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],

  adapter: FirestoreAdapter({
    credential: cert({
      projectId: process.env.FIREBASE_PROJECT_ID,
      clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
      privateKey: process.env.FIREBASE_PRIVATE_KEY?.replace(/\\n/g, "\n"),
    }),
  }),

  secret: process.env.NEXTAUTH_SECRET,
  pages: { signIn: "/login" },

  session: { strategy: "jwt" },

  callbacks: {
    async session({ session, token }) {
      if (token) {
        (session as any).user.id = token.sub;
      }
      return session;
    },
  },
});
