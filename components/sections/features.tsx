"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FolderKanban,
  Users,
  BookOpen,
  X,
  ExternalLink,
  Award,
} from "lucide-react";

const modalData = {
  projects: {
    title: "Open-source Projects",
    icon: FolderKanban,
    items: [
      {
        title: "Trove",
        description:
          "Human-centered storytelling system using NFC, React Native, and AI interaction design.",
        links: [
          {
            label: "GitHub",
            href: "https://github.com/MImran2002/trove",
          },
        ],
      },
      {
        title: "CELTS Webapp",
        description:
          "A webapp with 1500+ users for service learning in partnership with the Center for Excellence in Learning through Service.",
        links: [
          {
            label: "GitHub",
            href: "https://github.com/BCStudentSoftwareDevTeam/celts",
          },
        ],
      },
      {
        title: "LSF Webapp",
        description:
          "A webapp for managing Berea College’s labor form processing.",
        links: [
          {
            label: "GitHub",
            href: "https://github.com/BCStudentSoftwareDevTeam/lsf",
          },
        ],
      },
    ],
  },

  leadership: {
    title: "Leadership & Community",
    icon: Users,
    items: [
      {
        title: "AI Collective Chapter Lead",
        description:
          "Organized AI learning initiatives, student engagement events, and community discussions around responsible AI.",
        links: [
          {
            label: "AI Collective",
            href: "https://www.linkedin.com/posts/nyan-lin-zaw_ai-hackathon-bereacollege-ugcPost-7451000871229911040-XZjI/?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD74R58Bnr6X9nTgQaQoJ2XFwTilrOzpnNU",
          },
        ],
      },
      {
        title: "Google Developer Group VP",
        description:
          "Supported technical events, workshops, and community-building initiatives for student developers.",
        links: [
          {
            label: "GDG",
            href: "https://www.linkedin.com/posts/nyan-lin-zaw_ai-hackathon-bereacollege-ugcPost-7451000871229911040-XZjI/?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD74R58Bnr6X9nTgQaQoJ2XFwTilrOzpnNU",
          },
        ],
      },
    ],
  },

  readings: {
    title: "Readings & Research Influences",
    icon: BookOpen,
    items: [
      {
        title: "Analogy and Qualitative Representations in the Companion Cognitive Architecture",
        description:
          "This paper argues, through experiments with the Companion cognitive architecture, that analogical reasoning and qualitative representations are central mechanisms for enabling human-level cognition in artificial intelligence systems.",
        links: [
          {
            label: "Link to Paper",
            href: "https://www.qrg.northwestern.edu/papers/Files/AQR_Companions_final_v3.pdf",
          },
        ],
      },
      {
        title: "Is AI chatbot recommendation convincing customer? An analytical response based on the elaboration likelihood model",
        description:
          "This paper uses the elaboration likelihood model to evaluate how the reliability and accuracy of AI chatbot recommendations influence consumers' trust and perceived self-threat, which ultimately shapes their intention to adopt the chatbot's decisions in online shopping.",
        links: [
          {
            label: "Link to Paper",
            href: "https://pdf.sciencedirectassets.com/272045/1-s2.0-S0001691824X00086/1-s2.0-S0001691824003792/main.pdf?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7//////////wEaCXVzLWVhc3QtMSJHMEUCIG0kyd85fih7TpAL4YRzXov5RUb3TFrEmXzbc52e9uGYAiEAyU5tsmZ6x9yGsXadiJwsSjra+HxBWp8JC90JT8waQQwqswUIVxAFGgwwNTkwMDM1NDY4NjUiDH1GgKHs4qjIFpWGSCqQBZDDjEmDZJCklqt3IE1tsxxmb6fmOj5wsKFPsB0N+/JV/LoZtsyfDXuiOgELJaA4OoXgGawb93Kx3yLfG+Ug/1RztaEs8HuVJlOvj3FupAbPN8rNeoj8eE+mTngzDpu7NB/ki0U6KYFKmLZysmbuLc2DxyNKWzzjHs4rak9P1xdYBorngjM/4/Ew4AYFcDqgQchPP5vIqYglLRupzJMpNpY0tOIswVKUcJYBBM6tFXqKxXnbcEGWpjo1CP4uFKnMUPbMNBfRDyWAbpRWgTebp9n1Xp8LusNx9JX5Cq+7JGkAQzoQZ/hxUoQOk3tnjXhySmIR3DYEAeRLCz73KaxU7NSjT9BYYgLUeh7cG4zhS7ndR1s3acIUnhWVVMJL33cKMG30AZtV3Weir8n1M+v23oDjJkqBWQ+Q/A7hg01rgFhdqwjZbzkx1H2KvAU8I3Gucrw/W9gRQP68tGRzp/ROMguqO50GLS039Jf1Za/4oX2qJOcw2KK+uA/22XUWVQBIUOjiZ32OVg/QC7ya4BtwBXRqTGkO0U8SMoYqy7MRNIb3gbqEtNEHkj8o2ooi2NjGHzJTkIPInSik8ugrr39Or7ko0s50/6gGPoMt3yoaw+0jdEzSYIOo3byELHtyjVwZyBCoyX1GIiGUvm0iheoNx9qsJtcQ3LwZ5CI/ywGeGijatXvkO1e8FNxgmGYo7tsyC+gNU+hU66wdGh44qTlDz8QYIIOE8o7J08JDtgiYNZBfYryehiua8EFTTncqopDBDp+3cq9YIZXHpX1M71iBo3BokG6gxq4iafq4NvcqerSnOLciKW4UC5iFk/lGq+FHAd8oKwAZyDEy1fcAxyclvdqBdOy+mBReTL+vb4d76wMPMJffzdAGOrEBL2q0+cIOKfdPNufOKK1ThlWKuYgF5k+cx2Lr9anp0tQxiSsKYSYQ4AkiYGSlOoWbqnZNeeRMaoHhfEXF6oHrWTRW9Q0aKr8X7IRPiX75ScwRyd3gx7COw1M/C9dBqYsGW4EZNrlnbJ+CDlZI3wBwkauUTvn44nXXu6xYf6FOFv4/VulQCscL87DbF4HqZoNHKnFxy9GaJui1NPCWV82coe3dm3weLrsUdNDSIR9kllqn&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20260524T225022Z&X-Amz-SignedHeaders=host&X-Amz-Expires=300&X-Amz-Credential=ASIAQ3PHCVTYYCBQQIWP/20260524/us-east-1/s3/aws4_request&X-Amz-Signature=87c534d2e36f55f54a7cd82e287431bd69e69d598d6f972a3a290764dd965153&hash=ee65cf28339c40000ebd7b35f4d91531226c92fe11925254efaf3324337da5a5&host=68042c943591013ac2b2430a89b270f6af2c76d8dfd086a07176afe7c76c2c61&pii=S0001691824003792&tid=spdf-63da982a-8c7c-4b31-b665-eaf67835b410&sid=df8c61fa3647504ada591b9-693dfea94102gxrqa&type=client&tsoh=d3d3LnNjaWVuY2VkaXJlY3QuY29t&rh=d3d3LnNjaWVuY2VkaXJlY3QuY29t&ua=1315035352040b060650&rr=a00fdbe15fa2c485&cc=us",
          },
        ],
      },
      {
        title: "CoLM: Collaborative Large Models via A Client-Server Paradigm",
        description:
          "This paper introduces CoLM, a novel client-server framework for collaborative reasoning that enhances the performance of large language and vision-language models by using a capable central server to aggregate and refine the intermediate responses generated by multiple diverse client models.",
        links: [
          {
            label: "Link to Paper",
            href: "https://ojs.aaai.org/index.php/AAAI/article/view/39358",
          },
        ],
      },
    ],
  },
};

export function Explore() {
  const [activeModal, setActiveModal] = useState<keyof typeof modalData | null>(
    null
  );

  const activeSection = activeModal ? modalData[activeModal] : null;

  return (
    <>
      <section
        className="mx-auto mb-24 max-w-6xl pt-20 md:pt-28"
        id="ExploreMore"
      >
        <div className="mb-10">
          <h2 className="font-display text-3xl font-bold tracking-tight text-foreground md:text-5xl">
            Explore More
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {Object.entries(modalData).map(([key, section]) => {
            const Icon = section.icon;

            return (
              <motion.button
                key={key}
                type="button"
                whileHover={{ y: -6 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setActiveModal(key as keyof typeof modalData)}
                className="rounded-3xl border border-border bg-background/70 p-6 text-left shadow-sm backdrop-blur transition hover:shadow-lg"
              >
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl border border-border bg-muted/40">
                  <Icon className="h-5 w-5 text-foreground" />
                </div>

                <h3 className="text-xl font-semibold text-foreground">
                  {section.title}
                </h3>

                <p className="mt-3 text-sm text-muted-foreground">
                  Click to explore this section.
                </p>
              </motion.button>
            );
          })}
        </div>
      </section>

      <AnimatePresence>
        {activeSection && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveModal(null)}
          >
            <motion.div
              initial={{ opacity: 0, y: 30, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.96 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-h-[85vh] w-full max-w-3xl overflow-y-auto rounded-3xl border border-border bg-background p-8 shadow-2xl"
            >
              <button
                type="button"
                onClick={() => setActiveModal(null)}
                className="absolute right-5 top-5 rounded-full border border-border p-2 text-muted-foreground transition hover:text-foreground"
                aria-label="Close modal"
              >
                <X className="h-4 w-4" />
              </button>

              <h3 className="mb-6 pr-10 text-2xl font-semibold text-foreground">
                {activeSection.title}
              </h3>

              <div className="space-y-4">
                {activeSection.items.map((item) => (
                  <div
                    key={item.title}
                    className="rounded-2xl border border-border bg-muted/30 p-4"
                  >
                    <h4 className="text-sm font-semibold text-foreground">
                      {item.title}
                    </h4>

                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {item.description}
                    </p>

                    {item.links?.length > 0 && (
                      <div className="mt-4 flex flex-wrap gap-2">
                        {item.links.map((link) => (
                          <a
                            key={link.label}
                            href={link.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 rounded-full border border-border bg-background/80 px-3 py-1.5 text-xs text-muted-foreground transition hover:-translate-y-0.5 hover:text-foreground"
                          >
                            {link.label}
                            <ExternalLink className="h-3.5 w-3.5" />
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}