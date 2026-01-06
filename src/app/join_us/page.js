import Header from '@/components/common/Header'
import JoinForm from '@/components/JoinForm/JoinForm'
import React from 'react'

function JoinUsPage() {
    return (
        <>
            <Header />
            <header className="bg-emerald-950 py-16 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
                <div className="absolute bottom-0 left-0 w-48 h-48 bg-emerald-500/10 rounded-full blur-2xl translate-y-1/2 -translate-x-1/4"></div>

                <div className="container mx-auto px-4 relative z-10 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">JOIN US</h1>
                    <p className="text-emerald-200 text-sm md:text-base max-w-2xl mx-auto">
                        Get to know the people and the purpose behind the Council for Teacher Education Foundation, Assam Chapter.
                    </p>
                </div>
            </header>
            <JoinForm />
        </>
    )
}

export default JoinUsPage