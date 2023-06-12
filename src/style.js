const styles = {
  boxWidth: "xl:max-w-[1280px] w-full",

  heading:
    "flex-1 font-poppins font-semibold ss:text-[36px] text-[26px] text-white sm:pt-16 pt-6 my-10",
  
  paragraph:
    "font-poppins font-normal text-[#ffdb99] text-[18px] leading-[30.8px]",

  flexCenter: "flex justify-center items-center",
  flexStart: "flex justify-center items-start",

  paddingX: "sm:px-16 px-6",
  paddingY: "sm:py-16 py-6",

  marginX: "sm:mx-16 mx-6",
  marginY: "sm:my-16 my-6",

  roundBox: "flex flex-row items-center py-[6px] px-4 yl-to-bl-gradient rounded-[10px] mb-2",
  borderGold: "border-2 border-tertiary",
};

styles.button = `${styles.roundBox} ${styles.paragraph} ${styles.borderGold} mt-[20px] mb-[20px] hover:border-[#ff5db2] hover:text-[#ff5db2]`;
styles.canvas = `${styles.borderGold} rounded-[4px]`;
styles.buttonContainer = `flex flex-row gap-10`;

export default styles;
