/* Local data adapter. Replace this module with API calls when a backend is added. */
const Store = (() => {
  const KEY = 'nexa-cms-v1';
  const seed = {
    users:[
      {id:'u1',name:'مدير النظام',email:'admin@nexa.local',password:'demo123',role:'admin'},
      {id:'u2',name:'محرر المحتوى',email:'editor@nexa.local',password:'demo123',role:'editor'},
      {id:'u3',name:'كاتب تجريبي',email:'author@nexa.local',password:'demo123',role:'author'}
    ],
    items:[
      {id:'c1',titleAr:'مرحباً بك في نظام إدارة المحتوى',titleEn:'Welcome to your CMS',type:'article',category:'عام / General',bodyAr:'هذا مثال لمقال يمكنك تعديله أو حذفه.',bodyEn:'This is a sample article you can edit or delete.',status:'published',authorId:'u1',updatedAt:new Date().toISOString()},
      {id:'c2',titleAr:'من نحن',titleEn:'About us',type:'page',category:'الموقع / Website',bodyAr:'محتوى صفحة من نحن.',bodyEn:'About us page content.',status:'published',authorId:'u1',updatedAt:new Date().toISOString()},
      {id:'c3',titleAr:'مسودة خبر جديد',titleEn:'New story draft',type:'news',category:'أخبار / News',bodyAr:'مسودة قيد المراجعة.',bodyEn:'A draft awaiting review.',status:'draft',authorId:'u2',updatedAt:new Date().toISOString()}
    ], categories:[{id:'g1',nameAr:'عام',nameEn:'General'},{id:'g2',nameAr:'أخبار',nameEn:'News'},{id:'g3',nameAr:'الموقع',nameEn:'Website'}], media:[], activity:[]
  };
  function read(){try{const v=localStorage.getItem(KEY);return v?JSON.parse(v):null}catch(e){return null}}
  function init(){if(!read())write(seed)}
  function write(data){localStorage.setItem(KEY,JSON.stringify(data))}
  function all(){init();return read()||structuredClone(seed)}
  function update(mutator){const db=all();mutator(db);write(db);return db}
  function log(action,userId,detail){update(db=>db.activity.unshift({id:crypto.randomUUID?crypto.randomUUID():String(Date.now()),action,userId,detail,at:new Date().toISOString()}))}
  return {all,update,log,reset(){localStorage.removeItem(KEY);init()}};
})();
