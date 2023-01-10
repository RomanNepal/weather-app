import { Box, Text } from "@chakra-ui/react";
import Image from "next/image";
import React from "react";
import { BiWind } from "react-icons/bi";
import { GiDroplets, GiThermometerScale } from "react-icons/gi";
import { IoMdTime } from "react-icons/io";

const Weathercard = (datas) => {
  return (
    <Box
      width={"600px"}
      p={"10"}
      borderRadius={"2xl"}
      bgImage={"/gradient1.png"}
      bgSize={"cover"}
      bgPos={"center"}
      bgRepeat={"no-repeat"}
      display={"flex"}
      justifyContent={"space-around"}
      textColor={"gray.700"}
      gap={"20"}
      alignItems={"center"}
    >
      <Box>
        <Text
          fontSize={"sm"}
          // fontWeight={"semibold"}
          fontFamily={"Inter"}
        >
          {datas.country}
        </Text>
        <Text fontSize={"2xl"} fontWeight={"semibold"} fontFamily={"Poppins"}>
          {datas.cityName}
        </Text>
      </Box>
      <Box>
        <Image src={datas.imageSource} height={"60"} width={"60"}></Image>
      </Box>
      <Box>
        <Box>
          <Box display={"flex"} alignItems={"center"}>
            <IoMdTime size={"30"} />
            <Text fontSize={"sm"} fontWeight={"semibold"} fontFamily={"Inter"}>
              {datas.time}
            </Text>
          </Box>
          <Box display={"flex"} alignItems={"center"}>
            <GiThermometerScale size={"30"} />
            <Text fontSize={"sm"} fontWeight={"semibold"} fontFamily={"Inter"}>
              {datas.degreesC}
              <sup>o</sup>C/{datas.degreesF}
              <sup>o</sup>F
            </Text>
          </Box>
          <Box display={"flex"} alignItems={"center"}>
            <BiWind size={"30"} />
            <Text fontSize={"sm"} fontWeight={"semibold"} fontFamily={"Inter"}>
              {datas.wind}m/h
            </Text>
          </Box>

          <Box display={"flex"} alignItems={"center"}>
            <GiDroplets size={"30"} />
            <Text fontSize={"sm"} fontWeight={"semibold"} fontFamily={"Inter"}>
              {datas.humidity} humidity
            </Text>
          </Box>
        </Box>
      </Box>
      {/* <Image
            src={`https://cdn.weatherapi.com/weather/64x64/day/113.png`}
            height={"70"}
            width={"70"}
            alt={"Weather condition right now"}
          ></Image> */}
    </Box>
  );
};

export default Weathercard;
