"use client";

import Taskcard from "@/components/taskcard";
import axios from "axios";
import { useState, useEffect } from "react";
import Loader from "@/components/loader";

export default function Page() {
  type DomainType = {
    domain: string;
    hasSubmittedResponses: boolean;
  };

  const [domains, setDomains] = useState<DomainType[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const cookieValue = document.cookie
      .split("; ")
      .find((row) => row.startsWith("email"))
      ?.split("=")[1];
    const accessToken = document.cookie
      .split("; ")
      .find((row) => row.startsWith("accessToken"))
      ?.split("=")[1];

    axios
      .get(`${process.env.BACKEND_URL}/round2/get_details/${cookieValue}`, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      })
      .then((response) => {
        setDomains(response.data.round2);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, []);

  function getMainDomain(domain: string) {
    if (domain === "pnm" || domain === "events" || domain === "editorial") {
      return "Management";
    } else if (
      domain === "web" ||
      domain === "app" ||
      domain === "devops" ||
      domain === "aiml"
    ) {
      return "Technical";
    } else {
      return "Design";
    }
  }

  return (
    <>
      <Loader visibility={loading} />
      {domains.length > 0 ? (
        <div className="flex flex-col items-center w-full min-h-screen pt-[15vh]">
          <section className="flex flex-col font-striger text-center text-2xl md:text-4xl mb-[5vh]">
            <h1 className="text-main-pink">Congratulations!</h1>
            <h1 className="text-white">
              you have been selected in the following domains
            </h1>
          </section>
          <section className="flex flex-col w-full px-[5vw] md:mb-5">
            <h1 className="font-striger text-4xl text-white">Tasks</h1>
          </section>
          <div className="flex items-center justify-center w-full  px-8">
            <section className="flex flex-col md:grid md:grid-cols-3 md:gap-8 w-full my-2 pb-2">
              {domains.length > 0 &&
                domains.map((domain, index) => (
                  <Taskcard
                    domain={getMainDomain(domain.domain)}
                    subDomain={domain.domain}
                    completed={domain.hasSubmittedResponses}
                    key={index}
                  />
                ))}
            </section>
          </div>
        </div>
      ) : (
        <div className="flex flex-col items-center w-full min-h-screen pt-[15vh]">
          <h1 className="text-main-pink">
            NOT SELECTED IN ANYTHING (temporary)
          </h1>
        </div>
      )}
    </>
  );
}
