package com.ra.controller.admin;

import com.ra.model.entity.User;
import com.ra.model.service.User.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/register")
public class RegisterController {
    @Autowired
    UserService userService;

    @GetMapping("/register")
    public String register(Model model) {
        User user = new User();
        model.addAttribute("user", user);
        return "admin/register";
    }

    @PostMapping("/register")
    public String handleRegister(@ModelAttribute("user") User user) {
        userService.saveOrUpDate(user);
        return "admin/login";
    }
}
