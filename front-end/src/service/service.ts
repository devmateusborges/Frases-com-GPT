import useApi from "@/components/hooks/useApi";

interface Result {
  status: number;
  response: any;
}

const CreateMessage = async (prompt: string): Promise<any> => {
  const { getApi } = useApi();

  const result: Result = await getApi(process.env.URL_API + "/gpt", {
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

export { CreateMessage };
