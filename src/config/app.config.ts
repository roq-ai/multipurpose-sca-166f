interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Administrator'],
  customerRoles: [],
  tenantRoles: ['Viewer'],
  tenantName: 'Organization',
  applicationName: 'Multipurpose scaning Application',
  addOns: ['file', 'chat', 'notifications'],
};
