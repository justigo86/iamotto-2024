"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { ProjectInfo } from "./projectData";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Image from "next/image";

interface ProjectCardProps {
  project: ProjectInfo;
  index: number;
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  const colors = ["bg-blue-500", "bg-purple-500", "bg-pink-500"];

  return (
    <>
      <motion.div
        layout
        onClick={() => setIsExpanded(true)}
        className="relative cursor-pointer group"
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.2 }}
      >
        <Card
          className={`relative overflow-hidden aspect-square ${
            colors[index % 3]
          } border-4 border-white shadow-lg w-[12rem]`}
        >
          <motion.img
            src={project.image}
            alt={project.title}
            className="object-cover w-full h-full opacity-75"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
            {/* <span className="text-5xl font-bold mb-2">{project.id}</span> */}
            <h3 className="text-lg font-semibold text-center px-2">
              {project.title}
            </h3>
          </div>
        </Card>
      </motion.div>

      <AnimatePresence>
        {isExpanded && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/60 z-50"
              onClick={() => setIsExpanded(false)}
            />
            <motion.div
              layout
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              className="fixed inset-4 md:inset-10 z-50 rounded-lg shadow-xl overflow-auto"
            >
              <div className="relative p-6">
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute right-4 top-4"
                  onClick={() => setIsExpanded(false)}
                >
                  <X className="h-4 w-4" />
                </Button>
                <div className="">
                  <div className="overflow-hidden rounded-lg">
                    <Image
                      src={project.image ?? ""}
                      alt={project.title}
                      width={200}
                      height={200}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <div className="space-y-4">
                    <h2 className="text-3xl font-bold">{project.title}</h2>
                    <p className="text-gray-600">{project.details}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-gray-100 rounded-full text-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
