import React from "react";

import { Column, Img, Text, Button } from "components";

const SignupPage = () => {
  return (
    <>
      <Column className="bg-amber_400 font-roboto items-center justify-start mx-[auto] lg:p-[24px] xl:p-[31px] 2xl:p-[34px] 3xl:p-[41px] w-[100%]">
        <Img
          src="images/img_imggrabbitlogo.png"
          className="lg:h-[106px] xl:h-[132px] 2xl:h-[149px] 3xl:h-[179px] w-[27%]"
          alt="imggrabbitlogo"
        />
        <Text className="text-black_900 w-[auto]" as="h1" variant="h1">
          Sign Up
        </Text>
        <Column className="items-center justify-start 2xl:mb-[112px] 3xl:mb-[134px] lg:mb-[79px] xl:mb-[99px] lg:mt-[44px] xl:mt-[55px] 2xl:mt-[62px] 3xl:mt-[75px] w-[45%]">
          <Text className="GroupOne" as="h4" variant="h4">
            Farm Name
          </Text>
          <Text className="GroupThree" as="h4" variant="h4">
            Name
          </Text>
          <Text className="GroupThree" as="h4" variant="h4">
            Password
          </Text>
          <Button className="font-bold font-montserrat lg:mt-[44px] xl:mt-[56px] 2xl:mt-[63px] 3xl:mt-[75px] xl:text-[11px] 2xl:text-[13px] 3xl:text-[15px] lg:text-[9px] text-center w-[37%]">
            Sign Up
          </Button>
        </Column>
      </Column>
    </>
  );
};

export default SignupPage;
