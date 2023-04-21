import useApi from "@/components/useApi";

interface Result {
  status: number;
  response: any;
}

const createMessage = async (prompt: string): Promise<any> => {
  const { getApi } = useApi();

  const result: Result = await getApi("http://localhost:3001/gpt", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      prompt: prompt,
    }),
  });

  return result.response;
};

export { createMessage };
