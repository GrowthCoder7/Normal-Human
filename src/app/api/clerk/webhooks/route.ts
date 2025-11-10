/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { db } from "@/server/db"

/* eslint-disable @typescript-eslint/no-unsafe-assignment */

 export const POST = async (req: Request) => {
    const {data} = await req.json()
    const firstName = data.first_name;
    const lastName= data.last_name;
    const email = data.email_address;
    const imageUrl = data.image_url;

    await db.user.create({
        data: {
            firstName:firstName,
            lastName:lastName,
            email:email,
            imageUrl:imageUrl
        }
    })

    console.log("clerk webhook",data)
    return new Response('User Created!',{status:200})
}