const Ziggy = {"url":"http:\/\/localhost","port":null,"defaults":{},"routes":{"sanctum.csrf-cookie":{"uri":"sanctum\/csrf-cookie","methods":["GET","HEAD"]},"ignition.healthCheck":{"uri":"_ignition\/health-check","methods":["GET","HEAD"]},"ignition.executeSolution":{"uri":"_ignition\/execute-solution","methods":["POST"]},"ignition.updateConfig":{"uri":"_ignition\/update-config","methods":["POST"]},"Ricollocamento":{"uri":"ricollocamento","methods":["GET","HEAD"]},"Adozioni":{"uri":"adozioni","methods":["GET","HEAD"]},"contacts":{"uri":"contacts","methods":["GET","HEAD"]},"contacts.handleContactForm":{"uri":"contacts","methods":["POST"]},"dashboard":{"uri":"dashboard","methods":["GET","HEAD"]},"profile.edit":{"uri":"profile","methods":["GET","HEAD"]},"profile.update":{"uri":"profile","methods":["PATCH"]},"profile.destroy":{"uri":"profile","methods":["DELETE"]},"horses.index":{"uri":"horses","methods":["GET","HEAD"]},"horses.show":{"uri":"horses\/{horseId}","methods":["GET","HEAD"],"parameters":["horseId"]},"adoptionforms.create":{"uri":"adoptionforms\/create\/{horseId}","methods":["GET","HEAD"],"parameters":["horseId"]},"adoptionforms.index":{"uri":"adoptionforms","methods":["GET","HEAD"]},"users.index":{"uri":"DashboardAdmin\/users","methods":["GET","HEAD"]},"dashboardAdmin.horses.index":{"uri":"DashboardAdmin\/horses","methods":["GET","HEAD"]},"adoptionForms.index":{"uri":"DashboardAdmin\/adoptionforms","methods":["GET","HEAD"]},"adoptionforms.store":{"uri":"adoptionforms\/store","methods":["POST"]},"users.updateRole":{"uri":"users\/{user}\/updateRole","methods":["PUT"],"parameters":["user"]},"change_role":{"uri":"users\/{user}\/change-role","methods":["PUT"],"parameters":["user"]},"users.destroy":{"uri":"users\/{user}","methods":["DELETE"],"parameters":["user"],"bindings":{"user":"id"}},"horses.create":{"uri":"DashboardAdmin\/horses\/create","methods":["GET","HEAD"]},"horses.store":{"uri":"DashboardAdmin\/horses\/store","methods":["POST"]},"horses.edit":{"uri":"DashboardAdmin\/horses\/{horse}\/edit","methods":["GET","HEAD"],"parameters":["horse"]},"horses.update":{"uri":"DashboardAdmin\/horses\/{horse}","methods":["PUT"],"parameters":["horse"],"bindings":{"horse":"id"}},"horses.destroy":{"uri":"DashboardAdmin\/horses\/{id}","methods":["DELETE"],"parameters":["id"]},"adoptionforms.show":{"uri":"DashboardAdmin\/adoptionforms\/{id}","methods":["GET","HEAD"],"parameters":["id"]},"adoption.update":{"uri":"DashboardAdmin\/adoptionforms\/{id}\/update","methods":["PUT"],"parameters":["id"]},"verifyEmail":{"uri":"email\/verify","methods":["GET","HEAD"]},"email.verification.verify":{"uri":"email\/verify\/{id}\/{hash}","methods":["GET","HEAD"],"parameters":["id","hash"]},"verification.send":{"uri":"email\/verification-notification","methods":["POST"]},"register":{"uri":"register","methods":["GET","HEAD"]},"login":{"uri":"login","methods":["GET","HEAD"]},"password.request":{"uri":"forgot-password","methods":["GET","HEAD"]},"password.email":{"uri":"forgot-password","methods":["POST"]},"password.reset":{"uri":"reset-password\/{token}","methods":["GET","HEAD"],"parameters":["token"]},"password.store":{"uri":"reset-password","methods":["POST"]},"verification.notice":{"uri":"verify-email","methods":["GET","HEAD"]},"verification.verify":{"uri":"verify-email\/{id}\/{hash}","methods":["GET","HEAD"],"parameters":["id","hash"]},"password.confirm":{"uri":"confirm-password","methods":["GET","HEAD"]},"password.update":{"uri":"password","methods":["PUT"]},"logout":{"uri":"logout","methods":["POST"]}}};
if (typeof window !== 'undefined' && typeof window.Ziggy !== 'undefined') {
    Object.assign(Ziggy.routes, window.Ziggy.routes);
}
export { Ziggy };
