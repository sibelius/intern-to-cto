type TemplateOptions<S extends string> =
  S extends `${string}{${infer K}}${infer R}` ? TemplateOptions<R> | K : never;

type t1 = TemplateOptions<'Translation {count} {anotherKey}'>;
//   ^? type t1 = "count" | "anotherKey"
