import { knowledgeArticles, services, workflows } from '@/lib/ai-platform'

export const dynamic = 'force-static'

export function GET() {
  const lines = [
    '# AIOW',
    '',
    '> AIOW helpt Nederlandse bedrijven AI begrijpen, één waardevolle workflow bouwen en doorgroeien naar een beheerd AI-team.',
    '',
    '## Kernpagina’s',
    '- https://aiow.io/diensten',
    '- https://aiow.io/ai-scan',
    '- https://aiow.io/workflows',
    '- https://aiow.io/kennisbank',
    '',
    '## Diensten',
    ...services.map((service) => `- ${service.name}: ${service.promise}`),
    '',
    '## Workflowvoorbeelden',
    ...workflows.map((workflow) => `- ${workflow.title}: ${workflow.promise}`),
    '',
    '## AI-lessen',
    ...knowledgeArticles.map((article) => `- https://aiow.io/kennisbank/${article.slug} | ${article.title}`),
    '',
    '## Contact',
    '- jeroen@aiow.io',
    '- https://aiow.io/#contact',
  ]

  return new Response(lines.join('\n'), {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  })
}
