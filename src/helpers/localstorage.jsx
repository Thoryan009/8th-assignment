import toast from "react-hot-toast";

export const getApps = () => {
  let apps = [];

  let storedApps = localStorage.getItem("apps");
  if (storedApps) {
    apps = JSON.parse(storedApps);
  }
  return apps;
};

export const saveApps = (id) => {
  const apps = getApps();
  const isExist = apps.find((a) => a === id);
  if (isExist) return toast.error("Apps Already Installed");
  apps.push(id);
  localStorage.setItem("apps", JSON.stringify(apps));
  toast.success("App Install successfully");
};
export const isExist = (id) =>{
    const apps = getApps()
      const isExist = apps.find((a) => a === id);
    if(isExist) return true
    else return false

    }
export const deleteApp = (id) => {
    const apps = getApps();
    const newApps = apps.filter(a => a !== id)
    localStorage.setItem('apps', JSON.stringify(newApps))
    toast.success("App Uninstalled successfully");
};
