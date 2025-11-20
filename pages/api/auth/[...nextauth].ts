// pages/api/auth/[...nextauth].ts
import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

export default NextAuth({
  providers: [
    GoogleProvider({
      clientId: "503892607031-qvu1qm120sadjqt70eomjninkducalmr.apps.googleusercontent.com",
      clientSecret: "GOCSPX-XrJQVj6OhUz9Rewkd9nE6OTTRA4",
    }),
  ],

  secret: "jsjekemejoms8393ib39sne8o2ne8ek3n",

  session: {
    strategy: "jwt",
  },

  callbacks: {
    async jwt({ token }) {
      return token;
    },
    async session({ session, token }) {
      session.userId = token.sub;
      return session;
    },
  },

  debug: true,
});
