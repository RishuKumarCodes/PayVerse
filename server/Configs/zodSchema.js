import {z} from "zod";


const userSchema = z.object({

    firstName:z.string(),
    lastName:z.string(),
    email:z.string().email("Invalid Email Format"),
    password:z.string()

})

export default userSchema;