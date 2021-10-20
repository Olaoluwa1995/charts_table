import { Table, Tbody, Td, Th, Thead, Tr } from "@chakra-ui/react";
import React from "react";
import { TABLESTYLE } from "../../styles/theme";

type Props = {
  data: any[];
};

const DataTable: React.FC<Props> = ({ data }) => {
  return (
    <Table {...TABLESTYLE}>
      <Thead>
        <Tr>
          <Th>S/N</Th>
          <Th>Product Name</Th>
          <Th>Category</Th>
          <Th>Customer Name</Th>
          <Th>Country</Th>
          <Th>Region</Th>
          <Th>Quantity</Th>
          <Th>Sales</Th>
          <Th>Profit</Th>
          <Th>Discount</Th>
          <Th>Order Date</Th>
          <Th>Ship Date</Th>
        </Tr>
      </Thead>
      <Tbody>
        {data?.map((item: any, index: number) => {
          return (
            <Tr key={index}>
              <Td>{index + 1}</Td>
              <Td>{item["Product Name"]}</Td>
              <Td>{item["Category"]}</Td>
              <Td>{item["Customer Name"]}</Td>
              <Td>{item["Country"]}</Td>
              <Td>{item["Region"]}</Td>
              <Td>{item["Quantity"]}</Td>
              <Td>{item["Sales"]}</Td>
              <Td>{item["Profit"]}</Td>
              <Td>{item["Discount"]}</Td>
              <Td>{item["Order Date"]}</Td>
              <Td>{item["Ship Date"]}</Td>
              <Td></Td>
            </Tr>
          );
        })}
      </Tbody>
    </Table>
  );
};

export default DataTable;
