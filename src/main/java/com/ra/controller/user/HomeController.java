package com.ra.controller.user;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/user")
public class HomeController {
    @RequestMapping("/")
    public String home() {
        return "user/home";
    }

    @RequestMapping("/about")
    public String about() {
        return "user/about";
    }

    @RequestMapping("/block")
    public String block() {
        return "user/block";
    }

    @RequestMapping("/cart")
    public String cart() {
        return "user/cart";
    }

    @RequestMapping("/contact")
    public String contact() {
        return "user/contact";
    }

    @RequestMapping("/login")
    public String login() {
        return "user/login";
    }

    @RequestMapping("/page")
    public String page() {
        return "user/page";
    }

    @RequestMapping("/shop")
    public String shop() {
        return "user/shop";
    }

    @RequestMapping("/wishlist")
    public String wishlist() {
        return "user/wishlist";
    }
}
