import NextAuth from 'next-auth';
import { Cloudinary } from 'nextauth-cloudinary-provider';

export default NextAuth({
  providers: [
    Cloudinary({
      clientId: process.env.CLOUDINARY_CLIENT_ID,
      clientSecret: process.env.CLOUDINARY_CLIENT_SECRET,
    }),
  ]
})