const url = "https://makeover-data.vercel.app/gayatri-collection.json";

export const getCollectionData = async () => {
    try {
      const res = await fetch(url);
      if (!res.ok) throw new Error("Failed to fetch data");
      const data = await res.json();
      return data;
    } catch (error) {
      console.error("Error fetching collection:", error);
      return [];
    }
  };