"use client";

import { FileText, AlertTriangle, Clock } from "lucide-react";
import { useTranslations } from "next-intl";
import { PageContainer } from "@/components/ui/page-container";
import { PageHero } from "@/components/ui/page-hero";

const LAST_UPDATED = "July 14, 2026";

export default function DisclaimerPage() {
  const t = useTranslations("disclaimer");

  return (
    <PageContainer>
      <PageHero
        icon={AlertTriangle}
        iconColor="amber"
        title={t("title")}
        subtitle={t("subtitle")}
        meta={
          <div className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-4 py-2 text-sm font-medium text-blue-700 dark:bg-blue-900/20 dark:text-blue-400">
            <Clock className="h-4 w-4" />
            <span>{t("last_updated_label", { date: LAST_UPDATED })}</span>
          </div>
        }
      />

      <article className="prose prose-gray max-w-none dark:prose-invert">
        <h2>{t("s1_title")}</h2>
        <p>{t("s1_p1")}</p>
        <p>{t("s1_p2")}</p>

        <h2>{t("s2_title")}</h2>
        <p>{t("s2_p1")}</p>
        <p>{t("s2_p2")}</p>
        <ul>
          <li>{t("s2_li1")}</li>
          <li>{t("s2_li2")}</li>
          <li>{t("s2_li3")}</li>
          <li>{t("s2_li4")}</li>
        </ul>
        <p>{t("s2_p3")}</p>

        <h2>{t("s3_title")}</h2>
        <p>{t("s3_p1")}</p>
        <p>{t("s3_p2")}</p>
        <ul>
          <li>{t("s3_li1")}</li>
          <li>{t("s3_li2")}</li>
          <li>{t("s3_li3")}</li>
        </ul>
        <p>{t("s3_p3")}</p>

        <h2>{t("s4_title")}</h2>
        <p>{t("s4_p1")}</p>
        <p>{t("s4_p2")}</p>

        <h2>{t("s5_title")}</h2>
        <p>{t("s5_p1")}</p>
        <ul>
          <li>{t("s5_li1")}</li>
          <li>{t("s5_li2")}</li>
          <li>{t("s5_li3")}</li>
        </ul>
        <p>{t("s5_p2")}</p>

        <h2>{t("s6_title")}</h2>
        <p>{t("s6_p1")}</p>

        <h2>{t("s7_title")}</h2>
        <p>{t("s7_p1")}</p>
        <p>{t("s7_p2")}</p>

        <h2>{t("s8_title")}</h2>
        <p>{t("s8_p1")}</p>
      </article>

      <div className="mt-12 rounded-lg border border-gray-200 bg-gray-50 p-4 dark:border-gray-800 dark:bg-gray-900">
        <p className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300">
          <FileText className="h-4 w-4" />
          {t("see_more_pre")}
          <a href="/terms" className="font-semibold text-primary hover:underline">
            {t("see_more_terms")}
          </a>
          {t("see_more_mid")}
          <a href="/privacy" className="font-semibold text-primary hover:underline">
            {t("see_more_privacy")}
          </a>
          {t("see_more_post")}
        </p>
      </div>

      <p className="mt-12 rounded-lg bg-gray-50 p-4 text-sm text-gray-600 dark:bg-gray-900 dark:text-gray-400">
        {t("lang_disclaimer")}
      </p>
    </PageContainer>
  );
}
