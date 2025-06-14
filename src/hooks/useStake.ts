import { useWriteContract } from 'wagmi';
import { stakingAbi, stakingContractAddress } from '@/constants/contract';

export const useStake = () => {
  const { writeContractAsync } = useWriteContract();

  return async (amountInEth: string) => {
    const value = BigInt(Number(amountInEth) * 1e18);
    await writeContractAsync({
      address: stakingContractAddress,
      abi: stakingAbi,
      functionName: 'stake',
      value, // payable
    });
  };
};