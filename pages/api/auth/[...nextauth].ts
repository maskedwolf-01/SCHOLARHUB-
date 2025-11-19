// pages/api/auth/[...nextauth].ts
import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { FirestoreAdapter } from "@next-auth/firebase-adapter";
import { cert, getApps, initializeApp } from "firebase-admin/app";

// Initialize Firebase Admin SDK only once
if (!getApps().length) {
  initializeApp({
    credential: cert({
      projectId: "scholarhub-477707",
      clientEmail: "firebase-adminsdk-fbsvc@scholarhub-477707.iam.gserviceaccount.com",
      privateKey: `-----BEGIN PRIVATE KEY-----
MIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQCgerXADJm+dMW2
RkbVn0Ot4IOFgTdaqci2BTg8w39zVkiQovE7mTWbxaoX++eGXi9bewsZYJmhEuiX
...
L+r38oHPPk7fKPDs+L6Z7ujL4YQnl67SeCBxoZrBAoGAfhvP83xTAj+yJckXGgur
...
-----END PRIVATE KEY-----`,
    }),
  });
}

export default NextAuth({
  providers: [
    GoogleProvider({
      clientId: "503892607031-qvu1qm120sadjqt70eomjninkducalmr.apps.googleusercontent.com",
      clientSecret: "GOCSPX-XrJQVj6OhUz9Rewkd9nE6OTTRA4",
    }),
  ],

  adapter: FirestoreAdapter(),

  secret: "jsjekemejoms8393ib39sne8o2ne8ek3n",

  session: {
    strategy: "jwt",
  },

  debug: true,
});
