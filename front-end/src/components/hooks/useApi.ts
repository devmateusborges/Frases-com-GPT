const useApi = () => {
  const getApi = async (url: string, option: any) => {
    let res: any;
    const result = await fetch(url, option).then((result: any) => {
      const json = result.json();
      res = json;
      return res;
    });

    return res;
  };

  return { getApi };
};

export default useApi;
