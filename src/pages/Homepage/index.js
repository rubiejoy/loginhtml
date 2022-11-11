import React from "react";

import { Column, Stack, Img, Row, Text } from "components";

const HomepagePage = () => {
  return (
    <>
      <Column className="bg-white_A700 font-roboto items-center justify-start mx-[auto] xl:pb-[120px] 2xl:pb-[135px] 3xl:pb-[162px] lg:pb-[96px] w-[100%]">
        <Column className="items-center justify-start w-[100%]">
          <Stack className="bg-amber_400 lg:h-[101px] xl:h-[126px] 2xl:h-[142px] 3xl:h-[170px] lg:px-[10px] xl:px-[12px] 2xl:px-[14px] 3xl:px-[17px] w-[100%]">
            <Stack className="absolute 2xl:h-[112px] 3xl:h-[134px] lg:h-[80px] xl:h-[99px] inset-y-[0] left-[1%] my-[auto] w-[20%]">
              <Img
                src="images/img_imggrabbitlogo.png"
                className="absolute 2xl:h-[112px] 3xl:h-[134px] lg:h-[80px] xl:h-[99px] w-[100%]"
                alt="imggrabbitlogo"
              />
            </Stack>
          </Stack>
          <Row className="items-start lg:mt-[31px] xl:mt-[39px] 2xl:mt-[44px] 3xl:mt-[53px] w-[92%]">
            <Row className="bg-amber_400 items-center lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] xl:p-[11px] 2xl:p-[13px] 3xl:p-[15px] lg:p-[9px] rounded-radius20 w-[23%]">
              <Img
                src="images/img_slrcamera.png"
                className="lg:h-[33px] xl:h-[41px] 2xl:h-[46px] 3xl:h-[55px] mb-[1px] lg:ml-[18px] xl:ml-[23px] 2xl:ml-[26px] 3xl:ml-[31px] w-[18%]"
                alt="SLRCamera"
              />
              <Text
                className="lg:ml-[18px] xl:ml-[22px] 2xl:ml-[25px] 3xl:ml-[30px] text-black_900 tracking-ls1 w-[auto]"
                as="h3"
                variant="h3"
              >
                Upload Image
              </Text>
            </Row>
            <Stack className="border border-black_900 border-solid lg:h-[331px] xl:h-[414px] 2xl:h-[466px] 3xl:h-[558px] lg:ml-[50px] xl:ml-[63px] 2xl:ml-[71px] 3xl:ml-[85px] w-[40%]">
              <Img
                src="images/img_11.png"
                className="absolute lg:h-[283px] xl:h-[354px] 2xl:h-[398px] 3xl:h-[477px] top-[0] w-[100%]"
                alt="Eleven"
              />
            </Stack>
            <Column className="bg-amber_A100 items-center justify-start lg:ml-[37px] xl:ml-[46px] 2xl:ml-[52px] 3xl:ml-[62px] mt-[1px] lg:p-[20px] xl:p-[25px] 2xl:p-[29px] 3xl:p-[34px] rounded-radius15 w-[27%]">
              <Text
                className="leading-[normal] lg:my-[17px] xl:my-[21px] 2xl:my-[24px] 3xl:my-[29px] not-italic text-black_900 w-[100%]"
                as="h2"
                variant="h2"
              >
                Breed: Californian <br />
                Accuracy: 90 %<br />
                Height: 2 inches
                <br />
                Width: 1.8 inches
                <br />
                Accuracy: 89%
              </Text>
            </Column>
          </Row>
        </Column>
      </Column>
    </>
  );
};

export default HomepagePage;
