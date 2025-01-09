import { CarProps, FilterProps } from "@/types";

export const calculateCarRent = (city_mpg: number, year: number) => {
  const basePricePerDay = 50; 
  const mileageFactor = 0.1; 
  const ageFactor = 0.05; 

  const mileageRate = city_mpg * mileageFactor;
  const ageRate = (new Date().getFullYear() - year) * ageFactor;

  const rentalRatePerDay = basePricePerDay + mileageRate + ageRate;

  return rentalRatePerDay.toFixed(0);
};

export const updateSearchParams = (type: string, value: string) => {
  const searchParams = new URLSearchParams(window.location.search);

  searchParams.set(type, value);

  const newPathname = `${window.location.pathname}?${searchParams.toString()}`;

  return newPathname;
};

export const deleteSearchParams = (type: string) => {
  const newSearchParams = new URLSearchParams(window.location.search);

  newSearchParams.delete(type.toLocaleLowerCase());

  const newPathname = `${window.location.pathname}?${newSearchParams.toString()}`;

  return newPathname;
};



export async function fetchCars(filters: FilterProps) {
  const { manufacturer, year, model, limit, fuel } = filters;

  // Dynamically build the query parameters
  const queryParams = new URLSearchParams();

  if (manufacturer) queryParams.append("make", manufacturer);
  if (year) queryParams.append("year", year.toString());
  if (model) queryParams.append("model", model);
  if (limit) queryParams.append("limit", limit.toString());
  if (fuel) queryParams.append("fuel_type", fuel);

  const url = `https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?${queryParams.toString()}`;

  const headers: HeadersInit = {
    "X-RapidAPI-Key": "7863d4535amsh316a63b24ad3297p1c1a24jsnbc22829254b8",
    "X-RapidAPI-Host": "cars-by-api-ninjas.p.rapidapi.com",
  };

  try {
    console.log("Request URL:", url); // Log the request URL for debugging
    const response = await fetch(url, { headers });

    if (!response.ok) {
      const errorText = await response.text(); // Log error details from the API
      console.error("API Response Error:", errorText);
      throw new Error(`API Error: ${response.status} ${response.statusText}`);
    }

    const result = await response.json();
    console.log("API Response:", result); // Log the successful response
    return result;
  } catch (error) {
    console.error("FetchCars Error:", error);
    throw error;
  }
}


export const generateCarImageUrl = (car: CarProps, angle?: string) => {
  const url = new URL("https://cdn.imagin.studio/getimage");
  const { make, model, year } = car;

  url.searchParams.append('customer', 'hrjavascript-mastery');
  url.searchParams.append('make', make);
  url.searchParams.append('modelFamily', model.split(" ")[0]);
  url.searchParams.append('zoomType', 'fullscreen');
  url.searchParams.append('modelYear', `${year}`);
  // url.searchParams.append('zoomLevel', zoomLevel);
  url.searchParams.append('angle', `${angle}`);

  return `${url}`;
} 
