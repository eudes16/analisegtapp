import { useSearchParams } from "next/navigation";

export default function Login() {
    const searchParams = useSearchParams()

    const code = searchParams.get('code')

    if (code === null) {
        return <h1>Error</h1>
    }

    return (
        <div>
            {code}
        </div>
    );
}
