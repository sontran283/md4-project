package com.ra.controller.user;

import com.ra.model.entity.User;
import com.ra.model.service.User.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import javax.servlet.http.HttpSession;
import javax.validation.Valid;

@Controller
@RequestMapping("/")
public class LoginController {
    @Autowired
    UserService userService;
    @Autowired
    HttpSession session;
    @RequestMapping("/login")
    public String login(Model model){
        User user = new User();
        model.addAttribute("user", user);
        return "user/login";
    }

    @PostMapping("/login")
    public String handleLogin(@ModelAttribute("user") User user, Model model,
                              @RequestParam(value = "action",required = false)String action,
                              BindingResult result){
        if(result.hasErrors()){
            return "user/login";
        }

        if (user.getUserEmail().isEmpty() || user.getUserPassword().isEmpty()) {
            result.rejectValue("userEmail", "NotEmpty.userForm.email", "Email is required");
            result.rejectValue("userPassword", "NotEmpty.userForm.password", "Password is required");
            return "user/login";
        }

        // xử lý đăng nhập
        User authent = userService.checkLogin(user.getUserEmail(), user.getUserPassword());
        if (authent != null) {
            if (authent.getStatus() == false){
                return "redirect:/login";
            }else if (authent.getRole()== false){
                model.addAttribute("user", authent);
                session.setAttribute("user",authent);
                if ("checkout".equals(action)){
                    return "redirect:/checkout";
                }
                return "redirect:/";
            }
        }
        return "redirect:/login";
    }

    @GetMapping("/logout")
    public String logout(){
        session.removeAttribute("user");
        return "redirect:/";
    }

    @GetMapping("/adminLogin")
    public String adminLogin(){
        return "/user/adminLogin";
    }

    @PostMapping("/adminLogin")
    public String handleLogin(@RequestParam("email") String email,@RequestParam("password") String password){
        User user = userService.checkLogin(email,password);
        if (user != null){
            if (user.getRole() == true){
                session.setAttribute("admin",user);
                return "admin/run/index";
            }
        }
        return "/user/adminLogin";
    }
}
