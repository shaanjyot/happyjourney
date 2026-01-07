'use client'

import Image from 'next/image'

export function Logo({ className = "h-12 w-12" }: { className?: string }) {
    return (
        <div className={`relative ${className}`}>
            <Image
                src="/Happy_Journey_Logo.webp"
                alt="Happy Journey Logo"
                fill
                className="object-contain"
                priority
            />
        </div>
    )
}
