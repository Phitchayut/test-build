import axios, { AxiosResponse } from 'axios';

interface FetchAttractionArgs {
  id: string;
}

export const fetchAttractions = async () => {
    const response = await axios.get(
        `${process.env.NEXT_BASE_URL}/api/attractions`
    );
    return response.data;
}
export const fetchAttraction = async ({ id }: FetchAttractionArgs): Promise<any> => {
    const response: AxiosResponse = await axios.get(
      `${process.env.NEXT_BASE_URL}/api/attractions/${id}`
    );
    return response.data.attraction;
  };