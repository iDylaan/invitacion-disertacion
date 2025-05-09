import { useEffect, useState } from 'react'

export default function CounterDown({ dateTarget }) {
    const [timeLeft, setTimeLeft] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
    })

    useEffect(() => {
        const target = new Date(dateTarget).getTime()

        const updateCountdown = () => {
            const now = new Date().getTime()
            const distance = target - now

            if (distance <= 0) {
                setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 })
                return
            }

            setTimeLeft({
                days: Math.floor(distance / (1000 * 60 * 60 * 24)),
                hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
                minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
                seconds: Math.floor((distance % (1000 * 60)) / 1000),
            })
        }

        updateCountdown()
        const interval = setInterval(updateCountdown, 1000)
        return () => clearInterval(interval)
    }, [dateTarget])

    return (
        <div className="grid grid-flow-col gap-6 text-center auto-cols-max text-white text-4xl sm:text-6xl font-bold bg-[rgba(35,37,48,0.3)] rounded-lg p-6 shadow-lg backdrop-blur-md">
            {[
                { label: 'día', value: timeLeft.days },
                { label: 'hora', value: timeLeft.hours },
                { label: 'minuto', value: timeLeft.minutes },
                { label: 'segundo', value: timeLeft.seconds },
            ].map(({ label, value }) => (
                <div key={label} className="flex flex-col items-center w-24">
                    <span className="countdown font-mono text-6xl">
                        <span style={{ "--value": value }}></span>
                    </span>
                    <span className="text-sm mt-2">
                        {label}
                        {value !== 1 ? 's' : ''}
                    </span>
                </div>
            ))}
        </div>
    )
}
