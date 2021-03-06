var express = require('express');
var bodyParser = require('body-parser');
var urlencodeParser = bodyParser.urlencoded({ extended: false });
var validator = require('express-validator');
const formidable = require('formidable');

module.exports = function (app) {

      function isUserAllowed(req, res, next) {
            sess = req.session;
            if (sess.user) {
                  return next();
            }
            else { res.redirect('/login'); }
      }

      app.get('/dashboard-saas', isUserAllowed, function (req, res) {
            res.locals = { title: 'Dashboard Saas' };
            res.render('Dashboard/dashboard-saas');
      });

      app.get('/dashboard-crypto', isUserAllowed, function (req, res) {
            res.locals = { title: 'Dashboard Crypto' };
            res.render('Dashboard/dashboard-crypto');
      });

      app.get('/upload', isUserAllowed, function (req, res) {
            res.locals = { title: 'Upload documente' };
            res.render('Ejust/uploadoc');
      });

      app.post('/api/uploadFile', function (req, res) {
            const form = new formidable.IncomingForm();
            form.parse(req, function(err, fields, files){
  
                  var oldPath = files.profilePic.path;
                  var newPath = path.join(__dirname, 'uploads') + '/'+files.profilePic.name;
                  var rawData = fs.readFileSync(oldPath);
                
                  fs.writeFile(newPath, rawData, function(err){
                      if(err) console.log(err);
                      res.end('{"success" : "Uploaded document", "status" : 200}');
                  })
            });
      });

      // app.get('/', isUserAllowed, function (req, res) {
      //       res.locals = { title: 'Dashboard Default' };
      //       res.render('Dashboard/index');
      // });  

      // Layouts
      app.get('/layouts-horizontal', isUserAllowed, function (req, res) {
            res.locals = { title: 'Layout Horizontal' };
            res.render('Dashboard/index', { layout: 'layoutsHorizontal' });
      });

      app.get('/layouts-light-sidebar', isUserAllowed, function (req, res) {
            res.locals = { title: 'Layouts Light Sidebar' };
            res.render('Dashboard/index', { layout: 'layoutsLightSidebar' });
      });
      app.get('/layouts-compact-sidebar', isUserAllowed, function (req, res) {
            res.locals = { title: 'Layouts Compact Sidebar' };
            res.render('Dashboard/index', { layout: 'layoutsCompactSidebar' });
      });
      app.get('/layouts-icon-sidebar', isUserAllowed, function (req, res) {
            res.locals = { title: 'Layouts Iicon Sidebar' };
            res.render('Dashboard/index', { layout: 'layoutsIconSidebar' });
      });
      app.get('/layouts-boxed', isUserAllowed, function (req, res) {
            res.locals = { title: 'Layouts Boxed' };
            res.render('Dashboard/index', { layout: 'layoutsBoxed' });
      });
      app.get('/layouts-preloader', isUserAllowed, function (req, res) {
            res.locals = { title: 'Layouts Preloader' };
            res.render('Dashboard/index', { layout: 'layoutsPreloader' });
      });
      app.get('/layouts-colored-sidebar', isUserAllowed, function (req, res) {
            res.locals = { title: 'Layouts Colored Sidebar' };
            res.render('Dashboard/index', { layout: 'layoutsColoredSidebar' });
      });

      app.get('/layouts-h-boxed', isUserAllowed, function (req, res) {
            res.locals = { title: 'Boxed' };
            res.render('Dashboard/index', { layout: 'layoutsHBoxed' });
      });
      app.get('/layouts-h-colored', isUserAllowed, function (req, res) {
            res.locals = { title: 'Boxed' };
            res.render('Dashboard/index', { layout: 'layoutsHColored' });
      });
      app.get('/layouts-h-topbar-light', isUserAllowed, function (req, res) {
            res.locals = { title: 'Topbar Light' };
            res.render('Dashboard/index', { layout: 'layoutsHTopbarLight' });
      });

      // Calendar
      app.get('/calendar', isUserAllowed, function (req, res) {
            res.locals = { title: 'Calendar' };
            res.render('Calendar/calendar');
      });

      // Chat
      app.get('/chat', isUserAllowed, function (req, res) {
            res.locals = { title: 'Chats' };
            res.render('Chats/chat');
      });

      // Ecomerce
      app.get('/ecommerce-products', isUserAllowed, function (req, res) {
            res.locals = { title: 'Ecommerce Products' };
            res.render('ecommerce/ecommerce-products');
      });
      app.get('/ecommerce-product-detail', isUserAllowed, function (req, res) {
            res.locals = { title: 'Ecommerce Product detail' };
            res.render('Ecommerce/ecommerce-product-detail');
      });
      app.get('/ecommerce-orders', isUserAllowed, function (req, res) {
            res.locals = { title: 'Ecommerce Orders' };
            res.render('Ecommerce/ecommerce-orders');
      });
      app.get('/ecommerce-customers', isUserAllowed, function (req, res) {
            res.locals = { title: 'Ecommerce Customers' };
            res.render('Ecommerce/ecommerce-customers');
      });
      app.get('/ecommerce-cart', isUserAllowed, function (req, res) {
            res.locals = { title: 'Ecommerce Cart' };
            res.render('Ecommerce/ecommerce-cart');
      });
      app.get('/ecommerce-checkout', isUserAllowed, function (req, res) {
            res.locals = { title: 'Ecommerce Checkout' };
            res.render('Ecommerce/ecommerce-checkout');
      });
      app.get('/ecommerce-shops', isUserAllowed, function (req, res) {
            res.locals = { title: 'Ecommerce Shops' };
            res.render('Ecommerce/ecommerce-shops');
      });
      app.get('/ecommerce-add-product', isUserAllowed, function (req, res) {
            res.locals = { title: 'Ecommerce Add Product' };
            res.render('Ecommerce/ecommerce-add-product');
      });

      // Crypto
      app.get('/crypto-wallet', isUserAllowed, function (req, res) {
            res.locals = { title: 'Crypto Wallet' };
            res.render('Crypto/crypto-wallet');
      });
      app.get('/crypto-buy-sell', isUserAllowed, function (req, res) {
            res.locals = { title: 'Crypto Buy Sell' };
            res.render('Crypto/crypto-buy-sell');
      });
      app.get('/crypto-exchange', isUserAllowed, function (req, res) {
            res.locals = { title: 'Crypto Exchange' };
            res.render('Crypto/crypto-exchange');
      });
      app.get('/crypto-orders', isUserAllowed, function (req, res) {
            res.locals = { title: 'Crypto Orders' };
            res.render('Crypto/crypto-orders');
      });
      app.get('/crypto-kyc-application', isUserAllowed, function (req, res) {
            res.locals = { title: 'Crypto Kyc Application' };
            res.render('Crypto/crypto-kyc-application');
      });

      app.get('/crypto-lending', isUserAllowed, function (req, res) {
            res.locals = { title: 'Crypto Lending' };
            res.render('Crypto/crypto-lending');
      });


      // Email
      app.get('/email-inbox', isUserAllowed, function (req, res) {
            res.locals = { title: 'Email Inbox' };
            res.render('Email/email-inbox');
      });
      app.get('/email-read', isUserAllowed, function (req, res) {
            res.locals = { title: 'Email Read' };
            res.render('Email/email-read');
      });

      // Invoices
      app.get('/invoices-list', isUserAllowed, function (req, res) {
            res.locals = { title: 'Invoices List' };
            res.render('invoice/invoices-list');
      });
      app.get('/invoices-detail', isUserAllowed, function (req, res) {
            res.locals = { title: 'Invoices Detail' };
            res.render('Invoice/invoices-detail');
      });

      ///Projects
      app.get('/projects-grid', isUserAllowed, function (req, res) {
            res.locals = { title: 'Projects Grid' };
            res.render('Projects/projects-grid');
      });
      app.get('/projects-list', isUserAllowed, function (req, res) {
            res.locals = { title: 'Projects List' };
            res.render('Projects/projects-list');
      });
      app.get('/projects-overview', isUserAllowed, function (req, res) {
            res.locals = { title: 'Projects Overview' };
            res.render('Projects/projects-overview');
      });
      app.get('/projects-create', isUserAllowed, function (req, res) {
            res.locals = { title: 'Projects Create' };
            res.render('Projects/projects-create');
      });

      // Tasks
      app.get('/tasks-list', isUserAllowed, function (req, res) {
            res.locals = { title: 'Tasks List' };
            res.render('Tasks/tasks-list');
      });
      app.get('/tasks-kanban', isUserAllowed, function (req, res) {
            res.locals = { title: 'Tasks Kanban' };
            res.render('Tasks/tasks-kanban');
      });
      app.get('/tasks-create', isUserAllowed, function (req, res) {
            res.locals = { title: 'Tasks Create' };
            res.render('Tasks/tasks-create');
      });

      //contacts
      app.get('/contacts-grid', isUserAllowed, function (req, res) {
            res.locals = { title: 'Contacts Grid' };
            res.render('Contacts/contacts-grid');
      });
      app.get('/contacts-list', isUserAllowed, function (req, res) {
            res.locals = { title: 'Contacts List' };
            res.render('Contacts/contacts-list');
      });
      app.get('/contacts-profile', isUserAllowed, function (req, res) {
            res.locals = { title: 'Contacts Profile' };
            res.render('Contacts/contacts-profile');
      });


      // Pages
      app.get('/pages-starter', isUserAllowed, function (req, res) {
            res.locals = { title: 'Pages Starter' };
            res.render('Pages/pages-starter');
      });
      app.get('/pages-maintenance', isUserAllowed, function (req, res) {
            res.locals = { title: 'Pages Maintenance' };
            res.render('Pages/pages-maintenance');
      });
      app.get('/pages-timeline', isUserAllowed, function (req, res) {
            res.locals = { title: 'Pages Timeline' };
            res.render('Pages/pages-timeline');
      });
      app.get('/pages-faqs', isUserAllowed, function (req, res) {
            res.locals = { title: 'Pages Faqs' };
            res.render('Pages/pages-faqs');
      });
      app.get('/pages-pricing', isUserAllowed, function (req, res) {
            res.locals = { title: 'Pages Pricing' };
            res.render('Pages/pages-pricing');
      });

      // UI
      app.get('/ui-alerts', isUserAllowed, function (req, res) {
            res.locals = { title: 'Ui Alerts' };
            res.render('Ui/ui-alerts');
      });
      app.get('/ui-buttons', isUserAllowed, function (req, res) {
            res.locals = { title: 'Ui Buttons' };
            res.render('Ui/ui-buttons');
      });
      app.get('/ui-cards', isUserAllowed, function (req, res) {
            res.locals = { title: 'Ui Cards' };
            res.render('Ui/ui-cards');
      });
      app.get('/ui-carousel', isUserAllowed, function (req, res) {
            res.locals = { title: 'Ui Carousel' };
            res.render('Ui/ui-carousel');
      });
      app.get('/ui-grid', isUserAllowed, function (req, res) {
            res.locals = { title: 'Ui Grid' };
            res.render('Ui/ui-grid');
      });
      app.get('/ui-lightbox', isUserAllowed, function (req, res) {
            res.locals = { title: 'Ui Lightbox' };
            res.render('Ui/ui-lightbox');
      });
      app.get('/ui-modals', isUserAllowed, function (req, res) {
            res.locals = { title: 'Ui Modals' };
            res.render('Ui/ui-modals');
      });
      app.get('/ui-rangeslider', isUserAllowed, function (req, res) {
            res.locals = { title: 'Ui Rangeslider' };
            res.render('Ui/ui-rangeslider');
      });
      app.get('/ui-session-timeout', isUserAllowed, function (req, res) {
            res.locals = { title: 'Ui Session Timeout' };
            res.render('Ui/ui-session-timeout');
      });
      app.get('/ui-progressbars', isUserAllowed, function (req, res) {
            res.locals = { title: 'Ui Progressbars' };
            res.render('Ui/ui-progressbars');
      });
      app.get('/ui-sweet-alert', isUserAllowed, function (req, res) {
            res.locals = { title: 'Ui Sweet Alert' };
            res.render('Ui/ui-sweet-alert');
      });
      app.get('/ui-tabs-accordions', isUserAllowed, function (req, res) {
            res.locals = { title: 'Ui Tabs Accordions' };
            res.render('Ui/ui-tabs-accordions');
      });
      app.get('/ui-typography', isUserAllowed, function (req, res) {
            res.locals = { title: 'Ui Typography' };
            res.render('Ui/ui-typography');
      });
      app.get('/ui-video', isUserAllowed, function (req, res) {
            res.locals = { title: 'Ui Video' };
            res.render('Ui/ui-video');
      });
      app.get('/ui-general', isUserAllowed, function (req, res) {
            res.locals = { title: 'Ui General' };
            res.render('Ui/ui-general');
      });
      app.get('/ui-colors', isUserAllowed, function (req, res) {
            res.locals = { title: 'Ui Colors' };
            res.render('Ui/ui-colors');
      });
      app.get('/ui-rating', isUserAllowed, function (req, res) {
            res.locals = { title: 'Ui Rating' };
            res.render('Ui/ui-rating');
      });
      app.get('/ui-notifications', isUserAllowed, function (req, res) {
            res.locals = { title: 'Ui Notifications' };
            res.render('Ui/ui-notifications');
      });
      app.get('/ui-image-cropper', isUserAllowed, function (req, res) {
            res.locals = { title: 'Ui Image Cropper' };
            res.render('Ui/ui-image-cropper');
      });
      app.get('/ui-images', isUserAllowed, function (req, res) {
            res.locals = { title: 'Ui Images' };
            res.render('Ui/ui-images');
      });
      app.get('/ui-dropdowns', isUserAllowed, function (req, res) {
            res.locals = { title: 'Ui Dropdowns' };
            res.render('Ui/ui-dropdowns');
      });

      // Forms
      app.get('/form-elements', isUserAllowed, function (req, res) {
            res.locals = { title: 'Form Elements' };
            res.render('Form/form-elements');
      });
      app.get('/form-validation', isUserAllowed, function (req, res) {
            res.locals = { title: 'Form Validation' };
            res.render('Form/form-validation');
      });
      app.get('/form-advanced', isUserAllowed, function (req, res) {
            res.locals = { title: 'Form Advanced' };
            res.render('Form/form-advanced');
      });
      app.get('/form-editors', isUserAllowed, function (req, res) {
            res.locals = { title: 'Form Editors' };
            res.render('Form/form-editors');
      });
      app.get('/form-uploads', isUserAllowed, function (req, res) {
            res.locals = { title: 'Form Uploads' };
            res.render('Form/form-uploads');
      });
      app.get('/form-xeditable', isUserAllowed, function (req, res) {
            res.locals = { title: 'Form Xeditable' };
            res.render('Form/form-xeditable');
      });
      app.get('/form-repeater', isUserAllowed, function (req, res) {
            res.locals = { title: 'Form Repeater' };
            res.render('Form/form-repeater');
      });
      app.get('/form-wizard', isUserAllowed, function (req, res) {
            res.locals = { title: 'Form Wizard' };
            res.render('Form/form-wizard');
      });
      app.get('/form-mask', isUserAllowed, function (req, res) {
            res.locals = { title: 'Form Mask' };
            res.render('Form/form-mask');
      });

      // Tables
      app.get('/tables-basic', isUserAllowed, function (req, res) {
            res.locals = { title: 'Tables Basic' };
            res.render('Tables/tables-basic');
      });
      app.get('/tables-datatable', isUserAllowed, function (req, res) {
            res.locals = { title: 'Tables Datatable' };
            res.render('Tables/tables-datatable');
      });
      app.get('/tables-responsive', isUserAllowed, function (req, res) {
            res.locals = { title: 'Tables Responsive' };
            res.render('Tables/tables-responsive');
      });
      app.get('/tables-editable', isUserAllowed, function (req, res) {
            res.locals = { title: 'Tables Editable' };
            res.render('Tables/tables-editable');
      });

      // Charts
      app.get('/charts-apex', isUserAllowed, function (req, res) {
            res.locals = { title: 'Charts Apex' };
            res.render('Charts/charts-apex');
      });
      app.get('/charts-echart', isUserAllowed, function (req, res) {
            res.locals = { title: 'Charts Echart' };
            res.render('Charts/charts-echart');
      });
      app.get('/charts-chartjs', isUserAllowed, function (req, res) {
            res.locals = { title: 'Charts Chartjs' };
            res.render('Charts/charts-chartjs');
      });
      app.get('/charts-flot', isUserAllowed, function (req, res) {
            res.locals = { title: 'Charts Flot' };
            res.render('Charts/charts-flot');
      });
      app.get('/charts-tui', isUserAllowed, function (req, res) {
            res.locals = { title: 'Charts Tui' };
            res.render('Charts/charts-tui');
      });
      app.get('/charts-knob', isUserAllowed, function (req, res) {
            res.locals = { title: 'Charts knob' };
            res.render('Charts/charts-knob');
      });
      app.get('/charts-sparkline', isUserAllowed, function (req, res) {
            res.locals = { title: 'Charts Sparkline' };
            res.render('Charts/charts-sparkline');
      });

      // Icons
      app.get('/icons-boxicons', isUserAllowed, function (req, res) {
            res.locals = { title: 'Icons Boxicons' };
            res.render('Icons/icons-boxicons');
      });
      app.get('/icons-materialdesign', isUserAllowed, function (req, res) {
            res.locals = { title: 'Icons Materialdesign' };
            res.render('Icons/icons-materialdesign');
      });
      app.get('/icons-dripicons', isUserAllowed, function (req, res) {
            res.locals = { title: 'Icons Dripicons' };
            res.render('Icons/icons-dripicons');
      });
      app.get('/icons-fontawesome', isUserAllowed, function (req, res) {
            res.locals = { title: 'Icons Fontawesome' };
            res.render('Icons/icons-fontawesome');
      });

      // Maps
      app.get('/maps-google', isUserAllowed, function (req, res) {
            res.locals = { title: 'Maps Google' };
            res.render('Maps/maps-google');
      });
      app.get('/maps-vector', isUserAllowed, function (req, res) {
            res.locals = { title: 'Maps Vector' };
            res.render('Maps/maps-vector');
      });
      app.get('/maps-leaflet', isUserAllowed, function (req, res) {
            res.locals = { title: 'Maps Leaflet' };
            res.render('Maps/maps-leaflet');
      });
}