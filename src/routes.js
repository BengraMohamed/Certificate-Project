import Analytics from "layouts/dashboards/analytics";
import Sales from "layouts/dashboards/sales";
import ProfileOverview from "layouts/pages/profile/profile-overview";
import Settings from "layouts/pages/account/settings";

// -------------------blogs-----------------
import EditBlog from "layouts/pages/1-blogs/edit-blog";
import BlogsPage from "layouts/pages/1-blogs/blogs-page";
import AddNewBlog from "layouts/pages/1-blogs/new-blog";

// -------------------Exam-----------------
// import EditExam from "layouts/pages/2-exams/edit-exam";
// import ExamsPage from "layouts/pages/2-exams/exams-page";
// import AddNewExam from "layouts/pages/2-exams/new-exam";

// import Settings from "layouts/pages/account/settings";
import NewProduct from "layouts/ecommerce/products/new-product";
import EditProduct from "layouts/ecommerce/products/edit-product";
import ProductPage from "layouts/ecommerce/products/product-page";
import SignInBasic from "layouts/authentication/sign-in/basic";

import MDAvatar from "components/MDAvatar";

// @mui icons
import Icon from "@mui/material/Icon";
import SchoolIcon from "@mui/icons-material/School";
import ArticleIcon from "@mui/icons-material/Article";
import SlideshowIcon from "@mui/icons-material/Slideshow";
import WorkIcon from "@mui/icons-material/Work";
import MenuBookIcon from "@mui/icons-material/MenuBook";

// Images
import profilePicture from "assets/images/team-3.jpg";
import AddNewExam from "layouts/pages/2-exams/new-exam";
import EditExam from "layouts/pages/2-exams/edit-exam";
import ExamsPage from "layouts/pages/2-exams/exams-page";
import AddNewHomeSlider from "layouts/pages/4-homeSlider/new-homeSlider";
import EditHomeSlider from "layouts/pages/4-homeSlider/edit-homeSlider";
import HomeSlidersPage from "layouts/pages/4-homeSlider/homeSliders-page";
import AddNewPortfolio from "layouts/pages/5-portfolio/new-portfolio";
import PortfolioPage from "layouts/pages/5-portfolio/portfolio-page";

const routes = [
  {
    type: "collapse",
    name: "Brooklyn Alice",
    key: "brooklyn-alice",
    icon: <MDAvatar src={profilePicture} alt="Brooklyn Alice" size="sm" />,
    collapse: [
      {
        name: "My Profile",
        key: "my-profile",
        route: "/pages/profile/profile-overview",
        component: <ProfileOverview />,
      },
      {
        name: "Settings",
        key: "profile-settings",
        route: "/pages/account/settings",
        component: <Settings />,
      },
      {
        name: "Logout",
        key: "logout",
        route: "/authentication/sign-in/basic",
        component: <SignInBasic />,
      },
    ],
  },
  { type: "divider", key: "divider-0" },
  {
    type: "collapse",
    name: "Dashboards",
    key: "dashboards",
    icon: <Icon fontSize="medium">dashboard</Icon>,
    collapse: [
      {
        name: "Analytics",
        key: "analytics",
        route: "/dashboards/analytics",
        component: <Analytics />,
      },
      {
        name: "Sales",
        key: "sales",
        route: "/dashboards/sales",
        component: <Sales />,
      },
    ],
  },
  { type: "title", title: "Pages", key: "title-pages" },
  // {
  //   type: "collapse",
  //   name: "Pages",
  //   key: "pages",
  //   icon: <Icon fontSize="medium">image</Icon>,
  //   collapse: [
  //     {
  //       name: "Profile",
  //       key: "profile",
  //       collapse: [
  //         {
  //           name: "Profile Overview",
  //           key: "profile-overview",
  //           route: "/pages/profile/profile-overview",
  //           component: <ProfileOverview />,
  //         },
  //         {
  //           name: "All Projects",
  //           key: "all-projects",
  //           route: "/pages/profile/all-projects",
  //           component: <AllProjects />,
  //         },
  //       ],
  //     },
  //     {
  //       name: "Users",
  //       key: "users",
  //       collapse: [
  //         {
  //           name: "New User",
  //           key: "new-user",
  //           route: "/pages/users/new-user",
  //           component: <NewUser />,
  //         },
  //       ],
  //     },
  //     {
  //       name: "Account",
  //       key: "account",
  //       collapse: [
  //         {
  //           name: "Settings",
  //           key: "settings",
  //           route: "/pages/account/settings",
  //           component: <Settings />,
  //         },
  //         {
  //           name: "Billing",
  //           key: "billing",
  //           route: "/pages/account/billing",
  //           component: <Billing />,
  //         },
  //         {
  //           name: "Invoice",
  //           key: "invoice",
  //           route: "/pages/account/invoice",
  //           component: <Invoice />,
  //         },
  //       ],
  //     },
  //     {
  //       name: "Projects",
  //       key: "projects",
  //       collapse: [
  //         {
  //           name: "Timeline",
  //           key: "timeline",
  //           route: "/pages/projects/timeline",
  //           component: <Timeline />,
  //         },
  //       ],
  //     },
  //     {
  //       name: "Pricing Page",
  //       key: "pricing-page",
  //       route: "/pages/pricing-page",
  //       component: <PricingPage />,
  //     },
  //     { name: "RTL", key: "rtl", route: "/pages/rtl", component: <RTL /> },
  //     { name: "Widgets", key: "widgets", route: "/pages/widgets", component: <Widgets /> },
  //     { name: "Charts", key: "charts", route: "/pages/charts", component: <Charts /> },
  //     {
  //       name: "Notfications",
  //       key: "notifications",
  //       route: "/pages/notifications",
  //       component: <Notifications />,
  //     },
  //   ],
  // },
  // {
  //   type: "collapse",
  //   name: "Applications",
  //   key: "applications",
  //   icon: <Icon fontSize="medium">apps</Icon>,
  //   collapse: [
  //     {
  //       name: "Kanban",
  //       key: "kanban",
  //       route: "/applications/kanban",
  //       component: <Kanban />,
  //     },
  //     {
  //       name: "Wizard",
  //       key: "wizard",
  //       route: "/applications/wizard",
  //       component: <Wizard />,
  //     },
  //     {
  //       name: "Data Tables",
  //       key: "data-tables",
  //       route: "/applications/data-tables",
  //       component: <DataTables />,
  //     },
  //     {
  //       name: "Calendar",
  //       key: "calendar",
  //       route: "/applications/calendar",
  //       component: <Calendar />,
  //     },
  //   ],
  // },
  // {
  //   type: "collapse",
  //   name: "Ecommerce",
  //   key: "ecommerce",
  //   icon: <Icon fontSize="medium">shopping_basket</Icon>,
  //   collapse: [
  //     {
  //       name: "Products",
  //       key: "products",
  //       collapse: [
  //         {
  //           name: "New Product",
  //           key: "new-product",
  //           route: "/ecommerce/products/new-product",
  //           component: <NewProduct />,
  //         },
  //         {
  //           name: "Edit Product",
  //           key: "edit-product",
  //           route: "/ecommerce/products/edit-product",
  //           component: <EditProduct />,
  //         },
  //         {
  //           name: "Product Page",
  //           key: "product-page",
  //           route: "/ecommerce/products/product-page",
  //           component: <ProductPage />,
  //         },
  //       ],
  //     },
  //     // {
  //     //   name: "Orders",
  //     //   key: "orders",
  //     //   collapse: [
  //     //     {
  //     //       name: "Order List",
  //     //       key: "order-list",
  //     //       route: "/ecommerce/orders/order-list",
  //     //       component: <OrderList />,
  //     //     },
  //     //     {
  //     //       name: "Order Details",
  //     //       key: "order-details",
  //     //       route: "/ecommerce/orders/order-details",
  //     //       component: <OrderDetails />,
  //     //     },
  //     //   ],
  //     // },
  //   ],
  // },

  {
    type: "collapse",
    name: "Blog",
    key: "blog",
    icon: <ArticleIcon fontSize="medium" />,
    collapse: [
      {
        name: "Blogs",
        icon: <Icon fontSize="small">article</Icon>,
        key: "blogs",
        collapse: [
          {
            name: "New Blog",
            icon: <Icon fontSize="small">add_circle</Icon>,
            key: "new-blog",
            route: "/dashboard/blogs/new-blog",
            component: <AddNewBlog />,
          },
          {
            name: "Edit Blog",
            key: "edit-blog",
            route: "/dashboard/blogs/edit-blog",
            component: <EditBlog />,
          },
          {
            name: "Blogs Page",
            key: "blog-page",
            route: "/dashboard/blogs/blogs-page",
            component: <BlogsPage />,
          },
        ],
      },
    ],
  },
  //-------------- Exam---------------------
  {
    type: "collapse",
    name: "Exam",
    key: "exam",
    icon: <SchoolIcon fontSize="medium" />,
    collapse: [
      {
        name: "Exams",
        icon: <Icon fontSize="small">article</Icon>,
        key: "exams",
        collapse: [
          {
            name: "New Exam",
            icon: <Icon fontSize="small">add_circle</Icon>,
            key: "new-exam",
            route: "/dashboard/2-exams/new-exam",
            component: <AddNewExam />,
          },
          {
            name: "Edit Exam",
            key: "edit-exam",
            route: "/dashboard/2-exams/edit-exam",
            component: <EditExam />,
          },
          {
            name: "Exams Page",
            key: "exams-page",
            route: "/dashboard/2-exams/exams-page",
            component: <ExamsPage />,
          },
        ],
      },
    ],
  },
  //-------------- Home Slider---------------------
  {
    type: "collapse",
    name: "Home Slider",
    key: "homslider",
    icon: <SlideshowIcon fontSize="medium" />,
    collapse: [
      {
        name: "Home Slider",
        icon: <Icon fontSize="small">article</Icon>,
        key: "homeSlider",
        collapse: [
          {
            name: "New homeSlider",
            icon: <Icon fontSize="small">add_circle</Icon>,
            key: "new-homeSlider",
            route: "/dashboard/4-homeSlider/new-homeSlider",
            component: <AddNewHomeSlider />,
          },
          {
            name: "Edit homeSlider",
            key: "edit-homeSlider",
            route: "/dashboard/4-homeSlider/edit-homeSlider",
            component: <EditHomeSlider />,
          },
          {
            name: "homeSlider Page",
            key: "homeSliders-page",
            route: "/dashboard/4-homeSlider/homeSliders-page",
            component: <HomeSlidersPage />,
          },
        ],
      },
    ],
  },

  {
    type: "collapse",
    name: "Portfolio",
    key: "portfolio",
    icon: <WorkIcon fontSize="medium" />,
    collapse: [
      {
        name: "Portfolio",
        icon: <Icon fontSize="small">article</Icon>,
        key: "portfolio",
        collapse: [
          {
            name: "New Portfolio",
            icon: <Icon fontSize="small">add_circle</Icon>,
            key: "new-portfolio",
            route: "/dashboard/5-portfolio/new-portfolio",
            component: <AddNewPortfolio />,
          },
          {
            name: "portfolio Page",
            key: "portfolios-page",
            route: "/dashboard/4-portfolio/portfolio-page",
            component: <PortfolioPage />,
          },
        ],
      },
    ],
  },

  {
    type: "collapse",
    name: "Courses",
    key: "course",
    icon: <MenuBookIcon fontSize="medium" />,
    collapse: [
      {
        name: "Courses",
        icon: <Icon fontSize="small">article</Icon>,
        key: "courses",
        collapse: [
          {
            name: "New Course",
            icon: <Icon fontSize="small">add_circle</Icon>,
            key: "new-Course",
            route: "/dashboard/2-courses/new-course",
            component: <AddNewBlog />,
          },
          {
            name: "Edit Course",
            key: "edit-course",
            route: "/dashboard/2-courses/edit-course",
            component: <EditBlog />,
          },
          {
            name: "Course Page",
            key: "courses-page",
            route: "/dashboard/2-courses/courses-page",
            component: <BlogsPage />,
          },
        ],
      },
    ],
  },
];

export default routes;
