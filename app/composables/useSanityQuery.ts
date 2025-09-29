import { ref, type Ref } from "vue";
import type { SanityClient, QueryParams } from "@sanity/client";
import { useNuxtApp } from "#app";

export function useSanityQuery<T = unknown>(
  query: string,
  params?: QueryParams // use Sanity’s built-in type
) {
  const { $sanity } = useNuxtApp();
  const client = $sanity as SanityClient;

  const data: Ref<T | null> = ref(null);
  const error: Ref<Error | null> = ref(null);
  const loading: Ref<boolean> = ref(true);

  async function execute() {
    loading.value = true;
    try {
      // Pass empty object if undefined to match overloads
      data.value = await client.fetch<T>(query, params || {});
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (err: any) {
      error.value = err;
    } finally {
      loading.value = false;
    }
  }

  execute();

  return { data, error, loading, execute };
}
