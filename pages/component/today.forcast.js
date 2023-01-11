import { Box, Text } from "@chakra-ui/react";
import Image from "next/image";
import React from "react";
const arr = [1, 2, 3, 4, 5, 6, 7, 8];
const TodayForcast = (data) => {
  const datas = data.data;

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
          Today&apos;s forcast
        </Text>
        <br></br>
        <Box
          display={"flex"}
          justifyContent={"space-around"}
          alignItems={"center"}
        >
          {datas?.forecast.forecastday[0].hour.map((item, index) => {
            if (index % 3 == 0) {
              return (
                <Box key={index} fontWeight={"medium"}>
                  <Text textAlign={"center"}>{item.time.substring(11)}</Text>
                  <Image
                    src={`http:${item.condition.icon}`}
                    width={"40"}
                    height={"40"}
                    alt="condition"
                  ></Image>
                  <Text textAlign={"center"}>
                    {item.temp_c}
                    <sup>o</sup>C
                  </Text>
                </Box>
              );
            }
          })}
        </Box>
      </Box>
    </>
  );
};

export default TodayForcast;
