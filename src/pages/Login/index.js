import React from "react";

import { Column, Img, Text, Button } from "components";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const navigate = useNavigate();

  function handleNavigate() {
    navigate("/homepage");
  }
  function handleNavigate1() {
    navigate("/signup");
  }

  return (
    <>
      <Column className="bg-amber_400 font-roboto items-center justify-start mx-[auto] 3xl:p-[108px] lg:p-[64px] xl:p-[80px] 2xl:p-[90px] w-[100%]">
        <Img
          src="images/img_imggrabbitlogo.png"
          className="lg:h-[106px] xl:h-[132px] 2xl:h-[149px] 3xl:h-[179px] w-[29%]"
          alt="imggrabbitlogo"
        />
        <Text
          className="lg:mt-[29px] xl:mt-[36px] 2xl:mt-[41px] 3xl:mt-[49px] text-black_900 w-[auto]"
          as="h1"
          variant="h1"
        >
          Log In
        </Text>
        <Column className="items-center justify-start mb-[1px] lg:mt-[23px] xl:mt-[29px] 2xl:mt-[32px] 3xl:mt-[39px] w-[49%]">
          <Text className="GroupOne" as="h4" variant="h4">
            Farm Name
          </Text>
          <Text className="GroupThree" as="h4" variant="h4">
            Password
          </Text>
          <Button
            className="common-pointer font-bold font-montserrat lg:mt-[19px] xl:mt-[23px] 2xl:mt-[26px] 3xl:mt-[32px] xl:text-[11px] 2xl:text-[13px] 3xl:text-[15px] lg:text-[9px] text-center w-[38%]"
            onClick={handleNavigate}
          >
            Log in
          </Button>
          <Button
            className="common-pointer font-bold font-montserrat lg:mt-[12px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] xl:text-[11px] 2xl:text-[13px] 3xl:text-[15px] lg:text-[9px] text-center w-[38%]"
            onClick={handleNavigate1}
            variant="FillGray400b7"
          >
            Sign Up
          </Button>
          <Text
            className="font-montserrat lg:mt-[23px] xl:mt-[29px] 2xl:mt-[33px] 3xl:mt-[40px] text-gray_900 w-[auto]"
            as="h5"
            variant="h5"
          >
            Forgot Password?
          </Text>
        </Column>
      </Column>
    </>
  );
};

export default LoginPage;
