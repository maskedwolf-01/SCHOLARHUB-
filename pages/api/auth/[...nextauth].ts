import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

export default NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],

  session: {
    strategy: "jwt",
  },

  callbacks: {
    async jwt({ token, account }) {
      // When user logs in, store their Google ID (sub)
      if (account) {
        token.sub = token.sub; 
      }
      return token;
    },

    async session({ session, token }) {
      // Attach user ID to session object
      if (session.user && token.sub) {
        session.user.id = token.sub as string;
      }
      return session;
    },
  },

  secret: process.env.NEXTAUTH_SECRET!,
});
