1. Why do we call forRoot() only once?
   -> We call forRoot() only once because it acts as the foundation for the entire module. It sets up the core service and global configurations, like the appName, that every part of the application needs to share.
2. Why can forFeature() be call many times?
   -> We call forFeature() many times because it allows different modules to register their own specific settings.
3. In this lab, what comes from forRoot() and what comes from forFeature()?
   -> forRoot() provided the shared app-level defaults, while forFeature() allowed the Orders and Receipts modules to have unique prefixes and different notification channels.
4. What is an injection token (like NOTIFICATIO_OPTIONS) and why do we need it?
   -> The injection token is a unique ID that tell NestJS exactly which configuration data to grab and inject into our service's constructor. We need these tokens because TypeScript interfaces disappear once the code is complied into JavaScript.
