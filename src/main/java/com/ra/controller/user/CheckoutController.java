package com.ra.controller.user;

import com.ra.model.dto.user.UserCheckOutDTO;
import com.ra.model.entity.Order;
import com.ra.model.entity.User;
import com.ra.model.service.Cart.CartService;
import com.ra.model.service.Order.OrderService;
import com.ra.model.service.Product.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import javax.servlet.http.HttpSession;

@Controller
@RequestMapping("/")
public class CheckoutController {
    @Autowired
    private OrderService orderService;
    @Autowired
    private ProductService productService;

    @RequestMapping("/checkout")
    public String checkout(HttpSession httpSession, Model model) {
        if (httpSession.getAttribute("user") == null) {
            // chua dang nhap thi bat dn
            return "redirect:/login?action=checkout";
        }
        User user = (User) httpSession.getAttribute("user");
        UserCheckOutDTO userCheckOutDTO = new UserCheckOutDTO();
        userCheckOutDTO.setName(user.getUserName());
        userCheckOutDTO.setEmail(user.getUserEmail());
        userCheckOutDTO.setPhone(user.getUserPhoneNumber());
        userCheckOutDTO.setAddress(user.getUserAddress());
        model.addAttribute("userCheckOutDTO", userCheckOutDTO);
        return "user/checkout";
    }

    @PostMapping("/checkout")
    public String handleCheckout(@ModelAttribute("user") UserCheckOutDTO userCheckOutDTO, HttpSession httpSession) {
        Order order = new Order();
        User user = (User) httpSession.getAttribute("user");
        order.setUser(user);
        order.setAddress(userCheckOutDTO.getAddress());
        order.setPhone(userCheckOutDTO.getPhone());
        order.setTotal(200.0);
        orderService.order(order);
        return "user/home";
    }
}
