import { Box, Text } from "@chakra-ui/react";
import Image from "next/image";
import React from "react";
import {
  BsCloudRain,
  BsDropletHalf,
  BsSnow2,
  BsSunrise,
  BsSunset,
  BsThermometerHalf,
  BsFillMoonStarsFill,
} from "react-icons/bs";
import { FaWind } from "react-icons/fa";
const arr = [1, 2, 3, 4, 5, 6, 7, 8];
const TomorrowForcast = (data) => {
  const datas = data.data.forecast.forecastday[1];

  return (
    <>
      <Box
        width={"600px"}
        pl={"10"}
        pr={"10"}
        pt={"5"}
        pb={"10"}
        borderRadius={"2xl"}
        bgImage={"/gradient1.png"}
        bgSize={"cover"}
        bgPos={"center"}
        bgRepeat={"no-repeat"}
        textColor={"gray.700"}
        fontFamily={"Inter"}
      >
        <Text textAlign={"center"} fontFamily={"Inter"} fontWeight={"bold"}>
          Tomorrow's forcast: {datas.day.condition.text}
        </Text>
        <br></br>
        <Box
          fontWeight={"medium"}
          display={"flex"}
          justifyContent={"space-around"}
          alignItems={"center"}
        >
          {datas ? (
            <>
              <Box>
                <Box display={"flex"} alignItems={"center"}>
                  <BsThermometerHalf />
                  <Text>
                    Max: {datas.day.maxtemp_c}
                    <sup>o</sup>C/ {datas.day.maxtemp_f}
                    <sup>o</sup>F
                  </Text>
                </Box>
                <Box display={"flex"} alignItems={"center"}>
                  <BsThermometerHalf />
                  <Text>
                    Min: {datas.day.mintemp_c}
                    <sup>o</sup>C/ {datas.day.mintemp_f}
                    <sup>o</sup>F
                  </Text>
                </Box>
                <Box display={"flex"} alignItems={"center"}>
                  <FaWind />
                  <Text>Max: {datas.day.maxwind_kph} km/hr</Text>
                </Box>
              </Box>
              <Box>
                <Box display={"flex"} alignItems={"center"}>
                  <BsCloudRain />
                  <Text>{datas.day.daily_chance_of_rain}% </Text>
                </Box>
                <Box display={"flex"} alignItems={"center"}>
                  <BsSnow2 />
                  <Text>{datas.day.daily_chance_of_snow}% </Text>
                </Box>
                <Box display={"flex"} alignItems={"center"}>
                  <BsDropletHalf />
                  <Text>Humidity: {datas.day.avghumidity}</Text>
                </Box>
              </Box>
              <Box>
                <Box display={"flex"} alignItems={"center"}>
                  <BsSunrise />
                  <Text>Sunrise: {datas.astro.sunrise}</Text>
                </Box>
                <Box display={"flex"} alignItems={"center"}>
                  <BsSunset />
                  <Text>Sunset: {datas.astro.sunset}</Text>
                </Box>
                <Box display={"flex"} alignItems={"center"}>
                  <BsFillMoonStarsFill />
                  <Text>Moonrise: {datas.astro.moonrise}</Text>
                </Box>
              </Box>
            </>
          ) : (
            ""
          )}
        </Box>
      </Box>
    </>
  );
};

export default TomorrowForcast;
