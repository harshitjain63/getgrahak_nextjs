"use client"; // Add this line at the top
import { useEffect, useState } from "react";

interface Post {
  id: number,
  title: string,
  body: string
}


export default function Home() {

  const [data, setData] = useState<Post[] | undefined>(undefined);

  const getApiData = async () => {
    const url = "https://jsonplaceholder.typicode.com/posts";
    const response = await fetch(url);
    const result = (await response.json()) as Post[];
    setData(result);
    console.log(result);
  }

  useEffect(() => {
    getApiData();
  }, []);

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-6">Welcome to Harshit Jain Code Base</h1>
      <div className="space-y-4">
        {
          data ?
            data.map((item) =>
              <div className="p-4 border border-gray-300 rounded-lg shadow-md" key={item.id}>
                <p className="text-lg font-semibold">ID: {item.id}</p>
                <p className="text-md font-medium">Title: {item.title}</p>
                <p className="text-sm text-gray-600">Body: {item.body}</p>
              </div>

            ) : null
        }
      </div>
    </div>
  );
}
