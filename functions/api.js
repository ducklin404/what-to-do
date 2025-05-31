import activities from '../activities.jsonl';

export async function onRequest({ request }) {
  const randomActivity = activities[Math.floor(Math.random() * activities.length)];

  return new Response(JSON.stringify(randomActivity), {
    headers: { 'Content-Type': 'application/json' },
  });
}
