"use client";

import { useTranslations } from "next-intl";
import { Upload, Cpu, Download, CheckCircle } from "lucide-react";

export function WhatIsPDFOrca() {
  const t = useTranslations();

  const steps = [
    { icon: Upload, title: t("what_is.how_step1_title"), text: t("what_is.how_step1_text") },
    { icon: Cpu, title: t("what_is.how_step2_title"), text: t("what_is.how_step2_text") },
    { icon: Download, title: t("what_is.how_step3_title"), text: t("what_is.how_step3_text") },
  ];

  const diffs = [
    t("what_is.diff1"),
    t("what_is.diff2"),
    t("what_is.diff3"),
    t("what_is.diff4"),
  ];

  return (
    <section className="px-4 py-16 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            {t("what_is.title")}
          </h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
            {t("what_is.subtitle")}
          </p>
        </div>

        <div className="mt-10 space-y-6 text-gray-600 dark:text-gray-300">
          <p className="text-lg leading-relaxed">{t("what_is.p1")}</p>
          <p className="text-lg leading-relaxed">{t("what_is.p2")}</p>
          <p className="text-lg leading-relaxed">{t("what_is.p3")}</p>
        </div>

        <div className="mt-14">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
            {t("what_is.how_title")}
          </h3>
          <div className="mt-8 grid gap-6 sm:grid-cols-3">
            {steps.map((step, index) => (
              <div
                key={index}
                className="rounded-2xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900/30">
                  <step.icon className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                </div>
                <h4 className="mt-4 text-lg font-semibold text-gray-900 dark:text-white">
                  {step.title}
                </h4>
                <p className="mt-2 text-gray-600 dark:text-gray-300">{step.text}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-14">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
            {t("what_is.diff_title")}
          </h3>
          <div className="mt-6 space-y-4">
            {diffs.map((diff, index) => (
              <div key={index} className="flex items-start gap-3">
                <CheckCircle className="mt-1 h-5 w-5 shrink-0 text-green-600 dark:text-green-400" />
                <p className="text-gray-600 dark:text-gray-300">{diff}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
