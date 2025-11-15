import { api } from "@/trpc/react"
import { useLocalStorage } from "usehooks-ts"
import {atom, useAtom} from 'jotai'

export const threadIdAtom = atom<string|null>(null)

const useThreads=()=>{
    const {data:accounts} = api.account.getAccounts.useQuery()
    const [accountId]=useLocalStorage("accountId","")
    const [tab] = useLocalStorage("normalhuman-tab","inbox")
    const [done] = useLocalStorage("normalhuman-done",false)
    const [threadId, setThreadId] = useAtom(threadIdAtom)

    const {data:threads,isFetching,refetch} = api.account.getThread.useQuery({
        accountId,
        tab,
        done
    },{
        enabled:!!accountId && !!tab,placeholderData:e=>e,
        refetchInterval:5000
    })
    return{
        threads,
        isFetching,
        refetch,
        accountId,
        account:accounts?.find(e=>e.id===accountId),
        threadId,
        setThreadId
    }
}

export default useThreads