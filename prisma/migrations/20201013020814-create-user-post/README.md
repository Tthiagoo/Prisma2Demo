# Migration `20201013020814-create-user-post`

This migration has been generated by Thiago Pereira at 10/12/2020, 11:08:14 PM.
You can check out the [state of the schema](./schema.prisma) after the migration.

## Database Steps

```sql
CREATE TABLE "public"."User" (
"id" SERIAL,
"name" text   ,
"email" text   NOT NULL ,
PRIMARY KEY ("id")
)

CREATE TABLE "public"."Post" (
"id" SERIAL,
"title" text   NOT NULL ,
"authorId" integer   NOT NULL ,
PRIMARY KEY ("id")
)

CREATE UNIQUE INDEX "User.email_unique" ON "public"."User"("email")

ALTER TABLE "public"."Post" ADD FOREIGN KEY ("authorId")REFERENCES "public"."User"("id") ON DELETE CASCADE ON UPDATE CASCADE
```

## Changes

```diff
diff --git schema.prisma schema.prisma
migration ..20201013020814-create-user-post
--- datamodel.dml
+++ datamodel.dml
@@ -1,0 +1,24 @@
+// This is your Prisma schema file,
+// learn more about it in the docs: https://pris.ly/d/prisma-schema
+
+datasource db {
+  provider = "postgresql"
+  url = "***"
+}
+
+generator client {
+  provider = "prisma-client-js"
+}
+
+model User {
+  id     Int      @id @default(autoincrement())
+  name   String?
+  email  String   @unique
+}
+
+model Post {
+  id      Int     @id @default(autoincrement())
+  title   String
+  authorId Int
+  author  User  @relation(fields: [authorId], references: [id])
+}
```


