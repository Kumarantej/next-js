"use client";
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Image from "next/image";
import { getYouTubeVideoAction } from "src/redux/Actions/youTubeActions";
import Link from "next/link";

export default function Home() {
  const dispatch = useDispatch();
  const {
    videos: { items },
  } = useSelector((state) => state.youTubeState);

  useEffect(() => {
    dispatch(getYouTubeVideoAction);
  }, [dispatch]);

  return (
    <div className="m-6 mr-0 pr-6 h-full overflow-y-auto grid grid-flow-row gap-8 text-neutral-600 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
      {items &&
        items.map((video, index) => {
          return (
            <Link
              href={`https://www.youtube.com/watch?v=${video.id}`}
              key={index}
            >
              <div className="card flex flex-col gap-2 cursor-pointer">
                <Image
                  src={
                    (video.snippet.thumbnails.standard &&
                      video.snippet.thumbnails.standard.url) ||
                    video.snippet.thumbnails.medium.url
                  }
                  alt="Picture of the author"
                  width={500}
                  height={500}
                  priority
                />
              </div>
            </Link>
          );
        })}
    </div>
  );
}
