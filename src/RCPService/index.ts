import { useQuery } from "react-query";
async function getRCPState() {
  const res = await fetch("/react-ctx-play/mockData.json");
  const data = await res.json();
  return data;
}

export function useRCPService() {
  return useQuery("RCPService", getRCPState, {
    refetchOnWindowFocus: false,
    retry: true,
  });
}
