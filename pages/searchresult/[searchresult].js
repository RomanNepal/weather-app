import {
  Box,
  Button,
  Input,
  InputGroup,
  InputRightAddon,
  Skeleton,
  Text,
} from "@chakra-ui/react";
import dynamic from "next/dynamic";
import axios from "axios";
import Head from "next/head";
import { useRouter } from "next/router";
import React, { Suspense, useEffect, useState } from "react";
import { BiSearchAlt } from "react-icons/bi";
import TodayForcast from "../component/today.forcast";
import TomorrowForcast from "../component/tomorrow.forcast";
import urls from "../component/urls";
import Loading from "../component/loading";
import Weathercard from "../component/weather.card";

const suspense = () => {
  return <div>Loading...</div>;
};
const SearchResult = (recieved) => {
  const router = useRouter();
  const [data, setData] = useState();
  const [formData, setFormData] = useState("");
  const [loading, setLoading] = useState(true);

  console.log(router.query);
  useEffect(() => {
    setData(recieved.data);
    setLoading(false);
  }, [router.query.searchresult]);
  const handleChange = (e) => {
    setFormData(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    router.push(`/searchresult/${formData}`);
  };

  return (
    <>
      <Head>
        <title>Weather Deets</title>
        <meta
          name="description"
          content="World Weather - Current and Forcast"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Box
        padding={"10"}
        display={"flex"}
        alignItems={"center"}
        justifyContent={"center"}
        flexDir={"column"}
        gap={"10"}
        bgColor={"#EDF2F7"}
      >
        <form onSubmit={handleSubmit}>
          <InputGroup>
            <Input
              type={"search"}
              isRequired
              width={"lg"}
              // border={"2px"}
              borderRadius={"full"}
              fontWeight={"normal"}
              onChange={handleChange}
              placeholder={"Search City For Current Weather and Predictions"}
              bgColor={"white"}
            ></Input>

            <InputRightAddon
              as={Button}
              onClick={handleSubmit}
              bgColor={"blue.700"}
              borderRadius={"full"}
            >
              <BiSearchAlt color="white" />
            </InputRightAddon>
          </InputGroup>
        </form>
        <br></br>

        <Text fontFamily={"Inter"} fontWeight={"bold"}>
          Current Weather of {data?.location?.name}, {data?.location?.country}
        </Text>

        {data ? (
          <>
            <Weathercard
              country={data.location.country}
              cityName={data.location.name}
              imageSource={`http://${data.current.condition.icon}`}
              time={data.location.localtime.substring(11)}
              degreesC={data.current.temp_c}
              degreesF={data.current.temp_f}
              wind={data.current.wind_mph}
              humidity={data.current.humidity}
            />

            <TodayForcast data={data} />

            <TomorrowForcast data={data} />
          </>
        ) : (
          ""
        )}
      </Box>
    </>
  );
};

export default SearchResult;
// export async function getStaticProps(context) {
//   console.log(context.params);
//   return {
//     props: {},
//   };
// }

export async function getServerSideProps(context) {
  console.log(" context is ", context.query.searchresult);
  let data = {};
  try {
    let result = await axios.get(
      `${urls.base_url}/${urls.forecast}?key=${urls.key}&q=${context.query.searchresult}&days=2&aqi=yes&alerts=yes`
    );
    data = JSON.parse(JSON.stringify(result.data));
  } catch (err) {
    console.log(err);
  }
  return {
    props: { data },
  };
}
