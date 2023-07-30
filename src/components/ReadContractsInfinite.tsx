import { paginatedIndexesConfig, useContractInfiniteReads } from 'wagmi'
import { wagmiContractConfig } from './contracts'
import { stringify } from '../utils/stringify'

export function ReadContractsInfinite() {
  const { data, isLoading, isSuccess, fetchNextPage } =
    useContractInfiniteReads({
      cacheKey: 'lootTokenURIs',
      ...paginatedIndexesConfig(
        (index: number) => [
          {
            ...wagmiContractConfig,
            functionName: 'ownerOf',
            args: [BigInt(index)] as const,
          },
        ],
        { start: 0, perPage: 10, direction: 'increment' },
      ),
    })

  return (
    <div>
      {isLoading && <div>loading...</div>}
      {isSuccess && (
        <>
          {data?.pages.map((data, i) => (
            <div key={i}>
              {data.flatMap((x, index) => ( // Add index here
                <pre key={`${stringify(x)}-${index}`}>{stringify(x)}</pre> // Use index here
              ))}
            </div>
          ))}
          <button onClick={() => fetchNextPage()}>Fetch more</button>
        </>
      )}
    </div>
  )
}
