import { format } from 'date-fns';
import { BaseTable, THead, Th, Tr, Td } from './CryptoHistory.styled';

export const CryptoHistory = ({ items }) => {
  return (
    <BaseTable>
      <THead>
        <tr>
          <Th>№</Th>
          <Th>PRICE</Th>
          <Th>AMOUNT</Th>
          <Th>DATE</Th>
        </tr>
      </THead>

      <tbody>{items.map(({ id, price, amount, date},i)=>{
        const dateTransform = (localDate) => {
          return format(new Date(localDate), 'MM/dd/yyyy, p');
        }
        return (
          <Tr key={id}>
            <Td>{i+1}</Td>
            <Td>{price}</Td>
            <Td>{amount}</Td>
            <Td>{dateTransform(date)}</Td>
         </Tr>
        )
      })}
      </tbody>
    </BaseTable>
  );
};
