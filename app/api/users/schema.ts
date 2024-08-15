import { z } from "zod";

const schema = z.object({
  name: z.string().min(3, { message: "Name must be atleast 3 character long" }),
  email: z.string().email(),
});

export default schema;
