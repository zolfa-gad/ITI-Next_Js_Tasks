import { z} from "zod";

const schema = z.object({
  price: z.number().min(1000),
});

export default schema;
