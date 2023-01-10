import {
  Box,
  Button,
  Center,
  Input,
  InputGroup,
  InputRightAddon,
  Text,
} from "@chakra-ui/react";

import axios from "axios";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { BiSearchAlt, BiWind } from "react-icons/bi";
import { GiDroplets, GiThermometerScale } from "react-icons/gi";
import { IoMdTime } from "react-icons/io";
import TodayForcast from "../component/today.forcast";
import TomorrowForcast from "../component/tomorrow.forcast";
import urls from "../component/urls";
import Weathercard from "../component/weather.card";

const SearchResult = () => {
  const router = useRouter();
  const [data, setData] = useState();
  const [formData, setFormData] = useState("");
  console.log(router.query);
  useEffect(() => {
    const get = async () => {
      try {
        if (router.query) {
          let result = await axios.get(
            `${urls.base_url}/${urls.forecast}?key=${urls.key}&q=${router.query.searchresult}&days=7&aqi=yes&alerts=yes`
          );
          console.log(result.data);
          setData(result.data);
        }
      } catch (err) {
        console.log(err);
      }
    };
    get();
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
              children={<BiSearchAlt color="white" />}
            ></InputRightAddon>
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

            <TodayForcast data={data ? data : ""} />
            <TomorrowForcast data={data ? data : ""} />
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
  return {
    props: {},
  };
}
