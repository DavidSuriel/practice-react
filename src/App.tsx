import React, { use, useState } from "react";
import "./App.css";
import { TwitterFollowCard } from "./TwitterFoolowCard";

export function App() {
  return (
    <section className="App">
      <TwitterFollowCard userName="midudev" isFollowing>
        Miguel Angel Duran
      </TwitterFollowCard>

      <TwitterFollowCard userName="pheralb" isFollowing={false}>
        Pablo Hernandez
      </TwitterFollowCard>

      <TwitterFollowCard userName="elonmusk" isFollowing>
        Elon Musk
      </TwitterFollowCard>

      <TwitterFollowCard userName="vxnder" isFollowing={false}>
        Vanderhart
      </TwitterFollowCard>
    </section>
  );
}
