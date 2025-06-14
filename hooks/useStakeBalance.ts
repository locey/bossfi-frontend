import { useAccount, useReadContract } from 'wagmi';
import { stakingAbi, stakingContractAddress } from '@/constants/contract';

export const useStakeBalance = () => {
  const { address } = useAccount();

  return useReadContract({
    address: stakingContractAddress,
    abi: stakingAbi,
    functionName: 'stakes',
    args: [address!],
    query: {
      enabled: !!address,
    },
  });
};