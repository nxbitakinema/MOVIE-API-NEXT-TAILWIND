"use client"

import React from "react";

export default function Error({ error, reset }: any) {
  return (
    <div className="w-full text-center">
      <div className="text-2xl text-red-500">
        ERROR LOADING: {error.message}{""}
      </div>
      <p>handled by [ about ] error.tsx in AppRouter</p>
    </div>
  )
}
