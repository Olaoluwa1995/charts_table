import React from "react";
import { useToast } from "@chakra-ui/toast";
import { Spinner } from "@chakra-ui/spinner";
import { BOXSHADOW, COLORS } from "../styles/theme";
import {
  Flex,
  Icon,
  Image,
  Tab,
  TabList,
  Tabs,
  TabPanel,
  TabPanels,
  Text,
  Box,
} from "@chakra-ui/react";
import { Bar, Line, Pie } from "react-chartjs-2";
import _ from "lodash";
import Header from "../components/header/header.component";
import { HamburgerIcon } from "@chakra-ui/icons";
import BarChart from "../components/bar-chart/bar-chart";
import PieChart from "../components/pie-chart/pie-chart";
import LineChart from "../components/line-chart/line-chart";
import LogoImage from "../assets/logo.png";
import DataTable from "../components/table/table";
import CompositeChart from "../components/composite-chart/composite-chart";

function Home() {
  const [data, setData] = React.useState([]);
  const [keys, setKeys] = React.useState([]);
  const [sumOfSales, setSumOfSales] = React.useState([]);
  const [sumOfProfits, setSumOfProfits] = React.useState([]);
  const [loading, setLoading] = React.useState(false);
  const toast = useToast();
  const [sideBarDisplay, setSideBarDisplay] = React.useState("block");
  const [pageLeftMargin, setPageLeftMargin] = React.useState("19rem");
  const [headerLeftPadding, setHeaderLeftPadding] = React.useState("17rem");

  const toggleSideBar = () => {
    if (sideBarDisplay === "block") setSideBarDisplay("none");
    else setSideBarDisplay("block");
    if (pageLeftMargin === "19rem") setPageLeftMargin("0");
    else setPageLeftMargin("19rem");
    if (headerLeftPadding === "17rem") setHeaderLeftPadding("0");
    else setHeaderLeftPadding("17rem");
  };

  React.useEffect(() => {
    setLoading(true);
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ angular_test: "angular-developer" }),
    };
    fetch(
      "https://g54qw205uk.execute-api.eu-west-1.amazonaws.com/DEV/stub",
      requestOptions
    )
      .then((response) => response.json())
      .then((data) => {
        setLoading(false);
        setData(data);
        console.log(data);
        let grouped = _.groupBy(data, function (item) {
          return new Date(item["Ship Date"]).getFullYear();
        });
        const listOfSales: any[] = [];
        const listOfProfits: any[] = [];
        const groupKeys: any = Object.keys(grouped);
        setKeys(groupKeys);
        const groupedValues = Object.values(grouped);
        groupedValues.forEach((value) => {
          const sales = value.map((item) => parseFloat(item["Sales"]));
          listOfSales.push(sales);
        });
        const sumOfSales: any = listOfSales.map((sales) =>
          sales.reduce((a: any, b: any) => a + b, 0)
        );
        setSumOfSales(sumOfSales);
        groupedValues.forEach((value) => {
          const sales = value.map((item) => parseFloat(item["Profit"]));
          listOfProfits.push(sales);
        });
        const sumOfProfits: any = listOfProfits.map((profits) =>
          profits.reduce((a: any, b: any) => a + b, 0)
        );
        setSumOfProfits(sumOfProfits);

        toast({
          title: "Fetch Success",
          description: "Data successfully fetched!",
          status: "success",
          duration: 3000,
          isClosable: true,
        });
      })
      .catch((error) => {
        setLoading(true);
        toast({
          title: "Fetch Error",
          description:
            "Error while trying to fetch data. Please check your internet connection.",
          status: "error",
          duration: 5000,
          isClosable: true,
        });
      });
  }, []);

  function DataTabs({ componentData }: any) {
    // Set up the tabs and tabpanels
    return (
      <Tabs orientation="vertical" isLazy bgColor={COLORS.BACKGROUND_COLOR}>
        <Flex
          display={sideBarDisplay}
          w="17rem"
          position="fixed"
          zIndex={2}
          minH="100vh"
          bgColor="white"
        >
          <TabList
            pt="2rem"
            w="100%"
            border={`1px solid ${COLORS.BACKGROUND_COLOR}`}
          >
            <Box ml="1.5rem" fontWeight="bold" fontSize="lg" mb="5rem">
              Sales
            </Box>
            {componentData.map((tab: any, index: number) => (
              <Tab
                color="blackAlpha.800"
                justifyContent="start"
                _focus={{
                  boxShadow: "none",
                }}
                py="1rem"
                borderTop={`1px solid ${COLORS.BACKGROUND_COLOR}`}
                _selected={{
                  bgColor: `${COLORS.BACKGROUND_COLOR}`,
                  borderColor: "none",
                  color: "blackAlpha.900",
                }}
                key={index}
              >
                <Text ml="0.5rem" fontSize="0.9rem">
                  {tab.label}
                </Text>
              </Tab>
            ))}
          </TabList>
        </Flex>
        <Flex w="100vw" minH="100vh" flexDir="column" overflowX="scroll">
          <Flex
            pl={headerLeftPadding}
            h="3rem"
            flexDir="row"
            justify="space-between"
            position="fixed"
            w="100%"
            zIndex={1}
            align="center"
            bgColor="white"
          >
            <HamburgerIcon onClick={toggleSideBar} ml="1rem" fontSize="2rem" />
          </Flex>
          <Flex
            boxShadow={BOXSHADOW}
            ml={pageLeftMargin}
            bgColor="white"
            flexDir="column"
            mr="0.5rem"
            mt="5rem"
          >
            <TabPanels>
              {componentData.map((tab: any, index: number) => (
                <TabPanel minH="80vh" minW="100%" p={4} mt="5%" key={index}>
                  {loading ? (
                    <Flex w="100%" h="100%" justify="center" align="center">
                      <Spinner
                        mt="20%"
                        size="lg"
                        color={COLORS.PRIMARY_COLOR}
                        thickness="5px"
                      />
                    </Flex>
                  ) : (
                    tab.children
                  )}
                </TabPanel>
              ))}
            </TabPanels>
          </Flex>
        </Flex>
      </Tabs>
    );
  }

  // 2. Create an array of data
  const tabData = [
    {
      label: "Table",
      children: <DataTable data={data} />,
    },
    {
      label: "Bar Chart",
      children: <BarChart keys={keys} sumOfSales={sumOfSales} />,
    },
    {
      label: "Composite Chart",
      children: (
        <CompositeChart
          keys={keys}
          sumOfSales={sumOfSales}
          sumOfProfits={sumOfProfits}
        />
      ),
    },
    {
      label: "Pie Chart",
      children: <PieChart keys={keys} sumOfSales={sumOfSales} />,
    },
    {
      label: "Line Chart",
      children: <LineChart keys={keys} sumOfSales={sumOfSales} />,
    },
  ];

  // 3. Pass the props
  return <DataTabs componentData={tabData} />;
}

export default Home;
